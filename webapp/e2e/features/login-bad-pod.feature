Feature: Login a user with POD without required fields

Scenario: The user log in with bad pod
  Given A user with a pod without name,adress and email
  When I click in Log Iniciar Sesion con inrupt
  Then I should be redirected to my profile with error messages