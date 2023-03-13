# Learn Phaser
This document will contain tutorials on Phaser related topics. The different demo projects will be organized in different branches. The main branch will contain a starter project with phaser and typescript. This branch will explore multiplayer with the colyseus package.

## Phaser 3 Multiplayer Demo
In this section we will create a demo multiplayer project with phaser 3 and colyseus. This section will use the template code from the [main branch](https://github.com/szhu321/phaser-demo/tree/main). If you do have have a starter project yet with phaser and typescript, head there to see how you can set one up. I will be using [VS code](https://code.visualstudio.com/) as my IDE of choice.  


### Introduction
The game that we will create will be a 2-4 player game. In this game players fire bullets at each other. The bullets will bounce off the walls. If a player is hit by a bullet(could be their own bullet) they receive a point. The winner will be the player with the least amount of points after 2 minute.  

The game will feature:
- support of 2-4 players.
- a server lobby, where all created games are shown.
- a room lobby, where players join and wait for the game to start.
- a main menu, where the players can select a lobby to view.
- a game over screen that displays the winner.
- basic geometry for the player and bullet's image.
- basic collision detection.
- basic edge of map detection.
- a game timer.
- a scoring system.  

Note: The server for this game will be in a [seperate repo](https://github.com/szhu321/multiplayer-demo).

### Getting Colyseus
In this demo we are going to make use of the colyseus package with contains functionality for clients to connect to rooms on a server.


# Credits
Check out the documentation for colyseus [here](https://docs.colyseus.io/colyseus/)
Thanks to Snowbillr for the tutorial on creating a button in phaser [Found here](https://snowbillr.github.io/blog//2018-07-03-buttons-in-phaser-3/)
