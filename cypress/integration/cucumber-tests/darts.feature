Feature: Darts event 

@smoke
Scenario: As a PokerStars Sports user

I want to navigate to Darts event in pokerstartsports using https://www.pokerstarssports.uk
so that I can verify 'GET' request was made to the requested user.

Given I am on the pokerstartsports homepage
When I click on darts event
Then The user should be able to see the darts event page and the get request was made to the requested url