# Rock, Paper, Scissors Game

## Overview
This is a **child-friendly Rock, Paper, Scissors game** designed as a training project to practice **JavaScript logic** and DOM manipulation. The game also incorporates **HTML** for structure and **CSS** for styling. The main focus is on developing **JavaScript functionality**, but the project also features simple and colorful visuals to make it appealing to children.

## Features
- **Interactive Gameplay**: 
   - Two players can play the game by using specific keys on their keyboard.
   - Player 1 controls: `q` (Rock), `a` (Paper), `z` (Scissors).
   - Player 2 controls: `o` (Rock), `k` (Paper), `m` (Scissors).
- **Score Tracking**: 
   - Scores for both players are displayed at the top of the screen and update automatically after each round.
- **Responsive Design**: 
   - The layout adapts well to different screen sizes, ensuring the game looks good on various devices.
- **Colorful, Child-Friendly Design**: 
   - The simple and vibrant interface makes it easy for children to understand and enjoy.

## Technologies Used
- **JavaScript**:
   - Main logic to handle key events, update scores, and determine the winner of each round.
   - `localStorage` is used to store scores across sessions.
   - `keydown` event listeners are employed to detect player input.
- **CSS**:
   - Basic styling for the layout, including a responsive design for different screen sizes.
   - Styled buttons for player controls and visual feedback for key presses.
   - A smooth fade effect is applied to certain elements.
- **HTML**:
   - Structure of the game, including sections for the score, controls, and the game board.
   - HTML elements are styled and manipulated dynamically via JavaScript.

## How to Play
1. **Start the Game**:
   - The game is ready once the page loads. You will see the score at the top and the available actions (Rock, Paper, Scissors) displayed on the screen.
   
2. **Player Controls**:
   - **Player 1** can press `q` for Rock, `a` for Paper, or `z` for Scissors.
   - **Player 2** can press `o` for Rock, `k` for Paper, or `m` for Scissors.
   
3. **Gameplay**:
   - After both players make their choice, the game will determine the winner based on traditional Rock, Paper, Scissors rules:
     - Rock beats Scissors.
     - Scissors beat Paper.
     - Paper beats Rock.
   - The score will update accordingly.
   
4. **Restart**:
   - The game continues indefinitely. Simply press the keys to start another round.

## Folder Structure
```bash
|-- index.html           # Main game page
|-- game.js              # JavaScript logic for gameplay
|-- styles.css           # CSS for styling the game
|-- images/              # SVG images for keys and hand signs
    |-- key-q.svg
    |-- key-a.svg
    |-- key-z.svg
    |-- key-o.svg
    |-- key-k.svg
    |-- key-m.svg
    |-- rock.svg
    |-- paper.svg
    |-- scissors.svg
