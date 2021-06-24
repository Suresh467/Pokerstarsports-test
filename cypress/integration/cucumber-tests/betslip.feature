Feature: Add and remove betslip 

@smoke
Scenario: As a PokerStars Sports user

I want to add and remove an outcome to the betslip

Given I am on the pokerstartsports homepage
When I add an outcome to the betslip
Then the outcome must be added to the betslip and the betslip must not be empty
When I click on basket and remove an outcome from the betslip
Then the outcome must be removed and the betslip must be empty