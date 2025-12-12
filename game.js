// Holiday movie data with poster URLs
const HOLIDAY_MOVIES = [
    { id: 1, name: "Home Alone", poster: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400&q=80" },
    { id: 2, name: "Elf", poster: "https://images.unsplash.com/photo-1544318163-c2db8c96e685?w=400&q=80" },
    { id: 3, name: "The Polar Express", poster: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=400&q=80" },
    { id: 4, name: "A Christmas Story", poster: "https://images.unsplash.com/photo-1576943803696-e8e33f7c3296?w=400&q=80" },
    { id: 5, name: "The Grinch", poster: "https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=400&q=80" },
    { id: 6, name: "Home Alone 2", poster: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&q=80" },
    { id: 7, name: "Miracle on 34th Street", poster: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400&q=80" },
    { id: 8, name: "It's a Wonderful Life", poster: "https://images.unsplash.com/photo-1545012099-00a4d6defee4?w=400&q=80" },
    { id: 9, name: "The Santa Clause", poster: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=400&q=80" },
    { id: 10, name: "National Lampoon's Christmas Vacation", poster: "https://images.unsplash.com/photo-1543965014-e1b1e5e4e0e7?w=400&q=80" },
    { id: 11, name: "Jingle All the Way", poster: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&q=80" },
    { id: 12, name: "The Nightmare Before Christmas", poster: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80" },
    { id: 13, name: "Love Actually", poster: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&q=80" },
    { id: 14, name: "The Holiday", poster: "https://images.unsplash.com/photo-1514064019862-23e2a332a6a6?w=400&q=80" },
    { id: 15, name: "Fred Claus", poster: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400&q=80" },
    { id: 16, name: "The Christmas Chronicles", poster: "https://images.unsplash.com/photo-1543965014-e1b1e5e4e0e7?w=400&q=80" },
    { id: 17, name: "Klaus", poster: "https://images.unsplash.com/photo-1544318163-c2db8c96e685?w=400&q=80" },
    { id: 18, name: "A Christmas Carol", poster: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=400&q=80" },
    { id: 19, name: "The Muppet Christmas Carol", poster: "https://images.unsplash.com/photo-1576943803696-e8e33f7c3296?w=400&q=80" },
    { id: 20, name: "White Christmas", poster: "https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?w=400&q=80" },
    { id: 21, name: "Die Hard", poster: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&q=80" },
    { id: 22, name: "The Family Stone", poster: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=400&q=80" },
    { id: 23, name: "Four Christmases", poster: "https://images.unsplash.com/photo-1545012099-00a4d6defee4?w=400&q=80" },
    { id: 24, name: "Last Christmas", poster: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=400&q=80" },
    { id: 25, name: "Gremlins", poster: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80" }
];

// Generate a random bingo card (25 unique movies from the list)
function generateBingoCard() {
    const shuffled = [...HOLIDAY_MOVIES].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 25);
}

// Convert bingo card to URL parameter
function cardToParam(card) {
    return card.map(m => m.id).join(',');
}

// Convert URL parameter to bingo card
function paramToCard(param) {
    const ids = param.split(',').map(Number);
    return ids.map(id => HOLIDAY_MOVIES.find(m => m.id === id));
}

// Generate a unique game session ID
function generateGameId() {
    return 'game_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Store game state in localStorage
function saveGameState(gameId, state) {
    localStorage.setItem(gameId, JSON.stringify(state));
}

// Get game state from localStorage
function getGameState(gameId) {
    const state = localStorage.getItem(gameId);
    return state ? JSON.parse(state) : null;
}

