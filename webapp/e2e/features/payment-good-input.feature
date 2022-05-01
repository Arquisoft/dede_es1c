Feature: Try to pay with good card inputs

Scenario: The user try to pay with good card inputs on the form
  Given Good card inputs to fill the form 
  When I click in Pagar 
  Then A modal popout appear