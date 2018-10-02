# Gif-e-mon
project 2



Home Page -

Gather information on button clicks
 - username on SUBMIT button
    -save to MYSQL DB
        -username
        -score - default 0
        -ID. unique #
 - GIFmon pick
    - URL link submitted by user - verify it is a giphy
    - else use random generated one (change preview multiple times)
 - chose attack build (each one a button)
    - attack ->  Attack power / HP
    - defense -> HP / attack power
    - Balance -> attack power = HP
 - MY SQL data
    -GIF LINK (to display on gameplay screen)
    - attack build stats
        - Attack Power
        - Defense Power
    - unique ID of username
        - too link the gif table and the username together 
 - basic instructions to game (modal?)
    - explain the different buttons
    - how each round will go
    - how to win
    - scoring
    - loss parameters
 - start button
    - moves to Game page / starts game



Game Page - 
    Display user info
        - Username / gif name
        - HP BAR with number % at end
        - 3 button options - on each button click gif will perform animation.
            - Attack
                - attacks enemy gif for Attack power.
                    - subtract Attack from enemy HP
                -pause for enemy to do function.
            - Defend
                - reduce damage taken by enemy by 1 AP.
                -pause for enemy to do function
            - Potion
                - 3. One time use potion
                - restores 75% of HP to gif
                - only have 3 total. 
                - maybe have reward system that restores 1 per enemy defeated.
        - fight continues until enemy or user gif hp = zero (0)
    Display Enemy info
        - Enemy gif name
        - HP BAR with number % at end
        - will have attack and defend options and 1 potion option. 
            -create strict condition for for using potion 
                - 10 hp or less.

Score Screen -
    score system
        - score will increase on 3 things.
            1. the user attacks enemy.
                -increase score based on the lose of HP of enemy gif
            2. the user kills enemy.
                - increase points by a static 20 points for each kill. (number may change, placeholder)
            3. the user uses no potions
                - each round user remains with 3 potions give bonus points 5 points. 
                - if user has less than 3 potions no bonus points
        - track score constantly throughout gameplay.
            -MYSQL - table - username and score.
    Display top 10 scores and users.
    Display strongest gif / user in trophey case 
    chart.js
        -display averages for 3 builds
            -attack
            -defense
            -balance
        - pie chart ?
    play again button at bottom.
        -returns to home page to start over.
    
