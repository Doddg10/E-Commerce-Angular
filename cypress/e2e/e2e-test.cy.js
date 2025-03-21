describe('E2E Test for Angular App', () => {
    it('Visits the main page and checks for content', () => {
      cy.visit('http://localhost:4200');
      cy.contains('Trending Products');
    });
  });
  