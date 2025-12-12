let gameId;
let currentMovieIndex = -1;
let gameMovies = [];

// Initialize QR code on page load
window.addEventListener('DOMContentLoaded', () => {
    initializeQRCode();
});

function initializeQRCode() {
    try {
        // Generate a unique game ID
        gameId = generateGameId();
        document.getElementById('game-id').textContent = gameId;
        
        // Create player URL
        const baseUrl = window.location.href.replace('controller.html', 'player.html');
        const playerUrl = `${baseUrl}?game=${gameId}`;
        
        console.log('Generating QR code for:', playerUrl);
        
        // Generate QR code using an API-free, image-based approach
        const qrContainer = document.getElementById('qrcode');
        if (!qrContainer) {
            console.error('QR code container not found!');
            alert('Error: QR code container not found. Please refresh the page.');
            return;
        }
        
        // Use Google Charts API (no authentication needed, works offline after first load)
        // Alternative: Use a data URL-based QR generator
        const qrSize = 300;
        const qrImg = document.createElement('img');
        qrImg.style.width = qrSize + 'px';
        qrImg.style.height = qrSize + 'px';
        qrImg.alt = 'QR Code to join game';
        
        // Use Google's Chart API for QR code generation (free, no auth needed)
        const encodedUrl = encodeURIComponent(playerUrl);
        qrImg.src = `https://chart.googleapis.com/chart?cht=qr&chs=${qrSize}x${qrSize}&chl=${encodedUrl}&choe=UTF-8`;
        
        // Fallback if image fails to load - show URL and manual entry instructions
        qrImg.onerror = function() {
            console.warn('QR image API unavailable, showing manual entry fallback');
            qrContainer.innerHTML = `
                <div style="background: white; padding: 2rem; border-radius: 12px; color: #000;">
                    <p style="font-size: 1.2rem; margin-bottom: 1rem;"><strong>Manual Entry</strong></p>
                    <p style="font-size: 0.9rem; margin-bottom: 1rem;">QR code unavailable. Players can manually visit:</p>
                    <div style="background: #f0f0f0; padding: 1rem; border-radius: 8px; word-break: break-all; font-family: monospace; font-size: 0.8rem;">
                        ${playerUrl}
                    </div>
                    <button onclick="copyToClipboard('${playerUrl}')" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #4caf50; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.9rem;">
                        📋 Copy Link
                    </button>
                    <p style="font-size: 0.8rem; margin-top: 1rem; color: #666;">
                        Or share this Game ID: <strong>${gameId}</strong>
                    </p>
                </div>
            `;
        };
        
        qrImg.onload = function() {
            console.log('QR Code generated successfully!');
        };
        
        qrContainer.appendChild(qrImg);
        
        // Generate and save the master movie list for this game
        gameMovies = generateBingoCard();
        saveGameState(gameId, {
            movies: gameMovies,
            currentIndex: -1,
            started: false
        });
        
        console.log('Game initialized with ID:', gameId);
    } catch (error) {
        console.error('Error in initializeQRCode:', error);
        alert('Error initializing game: ' + error.message);
    }
}

function startGame() {
    // Switch to game phase
    document.getElementById('qr-phase').classList.remove('active');
    document.getElementById('game-phase').classList.add('active');
    
    // Update game state
    const state = getGameState(gameId);
    state.started = true;
    state.currentIndex = 0;
    saveGameState(gameId, state);
    
    // Show first movie
    currentMovieIndex = 0;
    displayMovie();
}

function displayMovie() {
    if (currentMovieIndex < 0 || currentMovieIndex >= gameMovies.length) return;
    
    const movie = gameMovies[currentMovieIndex];
    
    document.getElementById('movie-poster').src = movie.poster;
    document.getElementById('movie-name').textContent = movie.name;
    document.getElementById('current-movie').textContent = currentMovieIndex + 1;
    document.getElementById('total-movies').textContent = gameMovies.length;
    
    // Update button states
    document.getElementById('prev-btn').disabled = currentMovieIndex === 0;
    document.getElementById('next-btn').disabled = currentMovieIndex === gameMovies.length - 1;
    
    // Save state
    const state = getGameState(gameId);
    state.currentIndex = currentMovieIndex;
    saveGameState(gameId, state);
}

function nextMovie() {
    if (currentMovieIndex < gameMovies.length - 1) {
        currentMovieIndex++;
        displayMovie();
    }
}

function previousMovie() {
    if (currentMovieIndex > 0) {
        currentMovieIndex--;
        displayMovie();
    }
}

function resetGame() {
    if (confirm('Are you sure you want to start a new game? All players will need to scan a new QR code.')) {
        location.reload();
    }
}

// Helper function to copy URL to clipboard
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            alert('Link copied to clipboard! Share it with players.');
        }).catch(err => {
            console.error('Failed to copy:', err);
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        alert('Link copied! Share it with players.');
    } catch (err) {
        alert('Please manually copy the URL: ' + text);
    }
    document.body.removeChild(textArea);
}

