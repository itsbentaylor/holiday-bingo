# Holiday Movie Bingo 🎄🎬

A beautiful, interactive web app for playing Holiday Movie Bingo! Perfect for holiday movie marathons with friends and family.

## Features

- **🎲 Random Card Generation**
  - Automatically generates a unique 5×5 bingo card on every page load
  - Each card randomly selected from 35 holiday movies

- **🎮 Host Controller**
  - Separate page for the host to call out movies
  - Large display for easy viewing
  - Next/Previous navigation
  - Keyboard shortcuts support
  - Random movie order

- **🎯 Interactive Gameplay**
  - Click/tap squares to mark them
  - Automatic bingo detection (rows, columns, diagonals)
  - Visual celebrations when you get BINGO!

- **🎨 Beautiful Modern UI**
  - Holiday-themed color scheme (red, green, gold)
  - Responsive design for all devices
  - Smooth animations and transitions
  - Dark mode interface

- **✨ Simple & Fast**
  - No external dependencies
  - Works completely offline
  - No installation required

## How to Play

### Quick Start:
1. **Host:** Open `index.html` (the host controller page)
2. **Players:** Click the "Open Player Page" button or directly open `player.html`

### For the Host:
1. Open `index.html` in your web browser
2. Click "Open Player Page" button to get the player link
3. Share the player page with all participants
4. Click "Start Game" to begin
5. Use the Next/Previous buttons (or arrow keys ← →) to navigate through movies
6. Display your screen for all players to see

### For Players:
1. Open `player.html` in your web browser (get link from host)
2. A random 5×5 bingo card will be generated automatically
3. Watch the host's screen as they call out movies
4. Click squares on your card when the movie is called
5. First to complete a row, column, or diagonal shouts "BINGO!" and wins!

## Usage

### Host Controls (index.html)
- **Open Player Page** - Link to share with players
- **Start Game** - Begin calling out movies in random order
- **Next Button** - Advance to the next movie
- **Previous Button** - Go back to the previous movie
- **Arrow Keys** - Use ← and → for quick navigation
- **Restart** - Shuffle movies and start over

### Player Controls (player.html)
- **Clear Selections** - Unmark all squares and start over with the same card
- **Click Squares** - Mark/unmark movies as they're called
- **Refresh Page** - Generate a new random card

## Installation

Simply download the files and open `index.html` in any web browser. No server or installation required!

### Files:
- `index.html` - **Host controller page (start here!)**
- `player.html` - **Player bingo card page**
- `start.html` - Alternative landing page with role selection
- `bingo.html` - Backup copy of player page
- `host.html` - Backup copy of host page
- `Src/` - Folder containing movie poster images
- `README.md` - This file

*Legacy files (not used):*
- `controller.html`, `controller.js`, `controller.css` - Old multiplayer host interface
- `player.html`, `player.js`, `player.css` - Old multiplayer player interface
- `game.js` - Old shared game logic
- `styles.css` - Old shared styles

## Technology

- Pure HTML, CSS, and JavaScript (no frameworks or libraries)
- Single file for maximum simplicity
- Responsive design using CSS Grid and Flexbox
- Fisher-Yates shuffle algorithm for true randomization
- Movie posters from The Movie Database (TMDB)

## Holiday Movies Included

The app includes 35 popular holiday movies:
- Home Alone & Home Alone 2
- Elf
- The Polar Express
- A Christmas Story
- The Grinch / How the Grinch Stole Christmas
- Miracle on 34th Street
- It's a Wonderful Life
- The Santa Clause
- National Lampoon's Christmas Vacation
- Jingle All the Way
- The Nightmare Before Christmas
- Love Actually
- The Holiday
- Klaus
- A Christmas Carol
- The Muppet Christmas Carol
- White Christmas
- Die Hard
- Rudolph the Red-Nosed Reindeer
- Frosty the Snowman
- A Charlie Brown Christmas
- And 14 more classics!

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tips

- **Host should use a larger screen** (laptop, tablet, or TV) for easy viewing by all players
- **Players use their phones** for convenience and portability
- Each player gets a unique card with each page load
- Multiple people can play simultaneously
- Works great with groups of any size
- Perfect for holiday parties and gatherings!
- Use arrow keys on host page for quick navigation
- Host can go back to previous movies if needed

## Customization

Want to add your own movies? Edit the `HOLIDAY_MOVIES` array in the `<script>` section:

```javascript
const HOLIDAY_MOVIES = [
    { id: 1, name: "Your Movie", poster: "image-url" },
    // Add more movies...
];
```

**Note:** You need at least 25 movies for a single card, but 30+ is recommended for variety between cards.

## Credits

Created with ❤️ for holiday fun!

Enjoy your Holiday Movie Bingo game! 🎉
# holiday-bingo
