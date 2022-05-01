Feature: Try to pay with bad card inputs

Scenario: The user try to pay with bad card inputs on the form
  Given Bad card number 
  When I click in Pagar 
  Then A modal popout appear