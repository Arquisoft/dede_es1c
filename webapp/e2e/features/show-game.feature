Feature: Show the game details

Scenario: In homeView access to the details of the game
  Given Acces to homeView 
  When I click in certain game card
  Then See the game details