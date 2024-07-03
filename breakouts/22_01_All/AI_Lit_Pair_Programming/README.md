# Lighthouse Labs | AI Literacy - Pair Programming

[GitHub Repository Branch]() | [Vimeo Video Recording]()

To play this "Guess the Numbers Game," visit [http://localhost:3000/](http://localhost:3000/).

## Our "Guess the Number" Application Should Handle the Following:

We want to think about how we're going to approach this problem from a Ruby on Rails perspective.

* The player begins with five "attempts"
* The computer should select a number between 1 and 100
* The player is asked to guess this number
* If the player guesses wrong
    * They lose an "attempt"
    * They are told if the guess was too high
    * They are told if the guess was too low
* If the player runs out of attempts, they lose
    *Tell the player they have lost
    *Let them know what the number was
* If the player guesses the number
    * Let them know how many attempts it took them
    * Congratulate them on their success
* If the player wins or loses, offer them a way to play again
    * Their attempts will be set back to five
    * A new number will be selected by the computer

## Other Steps and Ideas

* Ruby is a programming language
* Rails is a full-stack application development framework (Express)
* `rails new my-app` Create a new rails app
* What is next step?
    * Nouns: Player, Number, Last Guess?, Attempts
    * Display pages to the user?
        * Routes (end-points)
            * config/routes.rb
            * `get '/about', to: 'pages#show'`
        * Where to put server logic?
    * If we don't want to have auth/accounts...
        * How might we keep track of this per-visitor?
        * Session (maybe Cookies?)
        * How can we do this in Rails?