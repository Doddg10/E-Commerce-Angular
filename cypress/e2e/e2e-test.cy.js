describe('E2E Test for Angular App', () => {
    it('Visits the main page and checks for content', () => {
      cy.visit('http://13.60.99.107:32320/');
      cy.contains('Trending Products');
    });
  });
  