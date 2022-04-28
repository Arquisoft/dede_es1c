Feature: Login a user with POD

Scenario: The user log in
  Given A user with a pod
  When I click in Log Iniciar Sesion con inrupt
  Then I should be redirected to my profile