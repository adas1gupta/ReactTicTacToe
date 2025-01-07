# React Tic-Tac-Toe

A classic Tic-Tac-Toe game built with React, featuring a dynamic game board with win detection and game state management.

## Features

- Interactive 3x3 game board
- Alternating X and O players
- Real-time win detection
- Game state management
- Tie game detection
- Restart game functionality
- Turn indicator
- Clean component architecture

## Project Status

The core game functionality is complete and working. CSS styling is currently in development to enhance the visual presentation.

## Prerequisites

Before running this project, make sure you have:

- Node.js (version 18.18.0 or higher)
- npm (version 8.0.0 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/adas1gupta/ReactTicTacToe.git
cd reacttictactoe
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

This will launch the Vite development server, typically at `http://localhost:5173`.

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

- `src/App.jsx` - Main component containing game logic and state
- `src/LayoutGrid.jsx` - Grid component managing the game board layout
- `src/LayoutRow.jsx` - Row component for the game board
- `src/Square.jsx` - Individual square component for game moves
- `index.html` - Entry point HTML file
- `vite.config.js` - Vite configuration file

## Components

### App
The main component that manages the game state, including:
- Current player tracking
- Win detection logic
- Game status display

### LayoutGrid
Manages the game board and handles:
- Board state
- Square click events
- Game restart functionality

### LayoutRow
Renders individual rows of the game board and manages square components.

### Square
Individual square component that:
- Displays player marks (X or O)
- Handles click events
- Prevents invalid moves

## Upcoming Features

- Enhanced CSS styling
- Responsive design
- Player score tracking
- Game history
- Animations for moves and wins
- Customizable player markers
- Sound effects

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the package.json file for details.

## Acknowledgments

- Built with React and Vite
- Inspired by the classic Tic-Tac-Toe game