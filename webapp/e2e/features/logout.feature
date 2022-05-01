Feature: Log out a user

Scenario: The user log in and then Log out
  Given A user log in in the app
  When I click in sign out
  Then The login button must appear again