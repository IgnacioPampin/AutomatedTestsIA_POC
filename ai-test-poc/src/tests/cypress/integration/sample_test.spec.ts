/// <reference types="cypress" />

export default () => {
  describe('Sample Test', () => {
    it('should load the homepage', () => {
      cy.visit('/');
      cy.contains('Welcome'); // Adjust the text based on your application's content
    });

    it('should navigate to the about page', () => {
      cy.get('a[href="/about"]').click();
      cy.url().should('include', '/about');
      cy.contains('About Us'); // Adjust the text based on your application's content
    });
  });
};