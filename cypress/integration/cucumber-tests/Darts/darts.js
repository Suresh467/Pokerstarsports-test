
Given('I am on the pokerstartsports homepage', () => {
    cy.visit("https://www.pokerstarssports.uk");
    cy.title().should('contains', 'Poker');
    cy.location('protocol').should('eq', 'https:');
     })
  
  When('I click on darts event', () => {
    cy.get('.icon-menu').click();
    cy.get('#extendedMenu__link__darts').click();
  })
  
  Then('The user should be able to see the darts event page and the get request was made to the requested url', () => {
    cy.contains('Modus Icons of Darts Live League').should('be.visible');
    cy.url().should('eq', 'https://www.pokerstarssports.uk/#/darts/competitions');
        cy.request('https://www.pokerstarssports.uk/#/darts/competitions').as('comments') 
    cy.get('@comments').should((response) => {
      expect(response).to.have.property('status', 200)
    })
       })
  