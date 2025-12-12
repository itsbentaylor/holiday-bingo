let playerCard = [];
let selectedSquares = new Set();
let gameId;
let checkInterval;

// Initialize player page
window.addEventListener('DOMContentLoaded', () => {
    initializePlayer();
});

function initializePlayer() {
    // Get game ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    gameId = urlParams.get('game');
    
    if (!gameId) {
        showError('No game ID found. Please scan the QR code from the host.');
        return;
    }
    
    // Check if game exists
    const gameState = getGameState(gameId);
    if (!gameState) {
        showError('Game not found. Please scan the QR code again.');
        return;
    }
    
    // Generate unique bingo card for this player
    setTimeout(() => {
        playerCard = generateBingoCard();
        displayBingoCard();
        
        // Switch to bingo phase
        document.getElementById('loading-phase').classList.remove('active');
        document.getElementById('bingo-phase').classList.add('active');
        
        // Start checking for game updates
        startGameMonitoring();
    }, 1500);
}

function displayBingoCard() {
    const grid = document.getElementById('bingo-grid');
    grid.innerHTML = '';
    
    playerCard.forEach((movie, index) => {
        const square = document.createElement('div');
        square.className = 'bingo-square';
        square.dataset.index = index;
        square.dataset.movieId = movie.id;
        
        const img = document.createElement('img');
        img.src = movie.poster;
        img.alt = movie.name;
        
        const title = document.createElement('div');
        title.className = 'movie-title';
        title.textContent = movie.name;
        
        square.appendChild(img);
        square.appendChild(title);
        
        square.addEventListener('click', () => toggleSquare(index));
        
        grid.appendChild(square);
    });
}

function toggleSquare(index) {
    const square = document.querySelector(`.bingo-square[data-index="${index}"]`);
    
    if (selectedSquares.has(index)) {
        selectedSquares.delete(index);
        square.classList.remove('selected');
    } else {
        selectedSquares.add(index);
        square.classList.add('selected');
    }
    
    // Check for bingo
    checkForBingo();
    
    // Save selections to localStorage
    saveSelections();
}

function checkForBingo() {
    const wins = [
        // Rows
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
        // Columns
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
        // Diagonals
        [0, 6, 12, 18, 24],
        [4, 8, 12, 16, 20]
    ];
    
    for (const combo of wins) {
        if (combo.every(index => selectedSquares.has(index))) {
            showBingo();
            return;
        }
    }
}

function showBingo() {
    document.getElementById('bingo-alert').classList.add('show');
    
    // Play celebration (you could add sound here)
    celebrateWin();
}

function dismissBingo() {
    document.getElementById('bingo-alert').classList.remove('show');
}

function celebrateWin() {
    // Add confetti or other celebration effects here
    console.log('🎉 BINGO! 🎉');
}

function clearSelections() {
    if (confirm('Are you sure you want to clear all selections?')) {
        selectedSquares.clear();
        document.querySelectorAll('.bingo-square').forEach(square => {
            square.classList.remove('selected');
        });
        saveSelections();
    }
}

function saveSelections() {
    const key = `selections_${gameId}_${Date.now()}`;
    localStorage.setItem(key, JSON.stringify(Array.from(selectedSquares)));
}

function startGameMonitoring() {
    // Check for game updates every 2 seconds
    checkInterval = setInterval(() => {
        const gameState = getGameState(gameId);
        
        if (gameState && gameState.started) {
            updateCurrentMovie(gameState);
        }
    }, 2000);
}

function updateCurrentMovie(gameState) {
    const currentIndex = gameState.currentIndex;
    
    if (currentIndex >= 0 && currentIndex < gameState.movies.length) {
        const movie = gameState.movies[currentIndex];
        
        // Show current movie display
        const display = document.getElementById('current-movie-display');
        display.style.display = 'block';
        
        document.getElementById('current-movie-poster').src = movie.poster;
        document.getElementById('current-movie-name').textContent = movie.name;
        
        // Update status
        document.getElementById('status-text').textContent = `Movie ${currentIndex + 1} of ${gameState.movies.length}`;
        
        // Highlight matching square if player has it
        highlightMatchingSquare(movie.id);
    }
}

function highlightMatchingSquare(movieId) {
    // Remove previous highlights
    document.querySelectorAll('.bingo-square').forEach(square => {
        square.classList.remove('highlight');
    });
    
    // Add highlight to matching square
    const matchingSquare = document.querySelector(`.bingo-square[data-movie-id="${movieId}"]`);
    if (matchingSquare && !matchingSquare.classList.contains('selected')) {
        matchingSquare.classList.add('highlight');
        
        // Add highlight style
        if (!document.getElementById('highlight-style')) {
            const style = document.createElement('style');
            style.id = 'highlight-style';
            style.textContent = `
                .bingo-square.highlight {
                    border-color: var(--gold);
                    box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
                    animation: highlightPulse 1s ease-in-out infinite;
                }
                @keyframes highlightPulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

function showError(message) {
    document.getElementById('loading-phase').classList.remove('active');
    document.getElementById('error-phase').classList.add('active');
    document.getElementById('error-message').textContent = message;
}

// Clean up interval on page unload
window.addEventListener('beforeunload', () => {
    if (checkInterval) {
        clearInterval(checkInterval);
    }
});

