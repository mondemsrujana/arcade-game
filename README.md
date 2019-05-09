# AIM:

The purpose is to demostrate mastery of JavaScript Object Oriented Programming.

# Classic Arcade Game Clone Project

This game is a clone from udacity  that about classic "arcade" game.  you move your character across the "bug" traffic. You must avoid the bugs to get to the water at the top of the page.

## If you want to do the project follow the steps given below.

## Table of Contents

-   [Instructions](#instructions)
-   [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

## step-1:

1.  In addition to the basic functionality, you can add more cool functionality to  game.

    -   Player selection: allow the user to select the image for the player character before starting the game. that can use the different character images provided in the images folder .

2.  First, Get the Starter Code

-   You won’t have to build the game from scratch.
    udacity given repository in that  files and folders.
    i.e
        1. index.html
        2. css
           \+ style.css
        3. js
          \+ app.js
          \+ engine.js
          \+ resources.js
        4. img  
    -   The images folder contains the png image files, which are used when displaying the
         game. The images for the player and enemy character are going to be loaded from
         this folder.
    -   The js folder also contains the app engine needed to run the game and a resources.js file.

3.  Inside the app.js file  you will need to implement the Player and  Object-Oriented JavaScript.

    -   The Enemy function, which initiates the Enemy by:
    -   Loading the image by setting this.sprite to the appropriate image in the image folder (already provided)
    -   Setting the Enemy initial location (you need to implement)
    -   Setting the Enemy speed (you need to implement)
    -   The update method for the Enemy:
    -   Updates the Enemy location (you need to implement)
        -   Handles collision with the Player (you need to implement)
            You can add your own Enemy methods as needed. You will also need to implement the
            Player class, and you can use the Enemy class as an example on how to get started. At minimum you should implement the following:
    -   The Player function, which initiates the Player by:
    -   Loading the image by setting this.sprite to the appropriate image in the
          image folder (use the code from the Enemy function as an example on how
          to do that)
    -   Setting the Player initial location
    -   The update method for the Player (can be similar to the one for the Enemy)
    -   The render method for the Player (use the code from the render method for the
          Enemy)
    -   The **handleInput** method, which should receive user input, **allowedKeys** (the key which was pressed) and move the player according to that input. In particular:
    -   Left key should move the player to the left, right key to the right, up should
          move the player up and down should move the player down.
    -   Recall that the player cannot move off screen (so you will need to check for
          that and handle appropriately).
    -   If the player reaches the water the game should be reset by moving the
          player back to the initial location (you can write a separate reset Player
          method to handle that).

    -   You can add your own Player methods as needed as well. Once you    have  completed
        implementing the Player and Enemy, you should instantiate them by:
    -   Creating a new Player object
    -   Creating several new Enemies objects and placing them in an array called  **allEnemies**  Beyond that, feel free to add additional functionality to the game.

4.  the app.js file and to the Enemy and Player classes to accomplish that.
    Inside the app.js file, you will need to implement the Player and the **Enemyclasses**, using

    -   Object-Oriented JavaScript. Be sure to review all code comments written in app.js. Part of the code for the Enemy is provided to you, and you will need to complete the following:

    -   The Enemy function, which initiates the Enemy by:
    -   Loading the image by setting this.sprite to the appropriate image in the image folder (already provided)
    -   Setting the Enemy initial location (you need to implement)
    -   Setting the Enemy speed (you need to implement)
    -   The update method for the Enemy:
    -   Updates the Enemy location (you need to implement)
    -   Handles collision with the Player (you need to implement)

5.  You can add your own Enemy methods as needed. You will also need to implement the Player class, and you can use the Enemy class as an example on how to get started. At minimum you should implement the following:
        \+ The Player function, which initiates the Player by:
        \+ Loading the image by setting **this.sprite** to the appropriate image in the
        image folder (use the code from the Enemy function as an example on how
        to do that).
        \+ Setting the Player initial location
        \+ The update method for the Player (can be similar to the one for the Enemy)
        \+ The render method for the Player (use the code from the render method for the
        Enemy).
        \+ The handleInput method, which should receive user input, allowedKeys (the key
        which was pressed) and move the player according to that input. In particular:
        \+ Left key should move the player to the left, right key to the right, up should
        move the player up and down should move the player down.
        \+ Recall that the player cannot move off screen (so you will need to check for
        that and handle appropriately).
        \+ If the player reaches the water the game should be reset by moving the
        player back to the initial location (you can write a separate reset Player
        method to handle that).
        6\.  You can add your own Player methods as needed as well. Once you have completed
        implementing the Player and Enemy, you should instantiate them by:
        \+ Creating a new Player object
        \+ Creating several new Enemies objects and placing them in an array called
        **allEnemies**.Beyond that, feel free to add additional functionality to the game. You can add more code to the app.js file and to the Enemy and Player classes to accomplish that

## Conclusion:

        \+ JavaScript enables the development of complex applications on the web.
        \+ JavaScript runs on normal web browsers, which makes it one of the most accessible and flexible programming languages.
        \+ Complex applications that must be “broken down” into simpler entities that manage their own properties and functionality.
