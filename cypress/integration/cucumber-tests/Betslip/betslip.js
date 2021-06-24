
Given('I am on the pokerstartsports homepage', () => {
    cy.visit("https://www.pokerstarssports.uk");
    cy.title().should('contains', 'Poker');
    cy.location('protocol').should('eq', 'https:');
     })
  
  When('I add an outcome to the betslip', () => {
    cy.get('.basicList__title').first().click();
    cy.get('.button__selection__odds').first().click();
    })
  
  Then('the outcome must be added to the betslip and the betslip must not be empty', () => {
    cy.get('.icon-betslip').click();
    cy.get('.stake__input.singleBetInput.deactivate-spinner').click().type('1');
    cy.get('.icon-close').click();
      })

When('I click on basket and remove an outcome from the betslip', () => {
  cy.get('.icon-betslip').click();
  cy.get('.remove > .icon-remove').click();
   })  
  

  Then('the outcome must be removed and the betslip must be empty', () => {
  cy.contains('Add selections', {timeout:10000}).should('be.visible')
  })

