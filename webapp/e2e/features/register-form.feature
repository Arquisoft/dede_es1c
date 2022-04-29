Feature: Registering a new user

Scenario: The user does not have a solid pod
  Given A user without a pod
  When I click on the registrate aqui
  Then I should be redirected to https://inrupt.net/register