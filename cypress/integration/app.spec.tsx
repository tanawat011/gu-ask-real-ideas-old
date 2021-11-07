import HomePage from '../../pages/index'

describe('Navigation', () => {
  it('should navigate to the calculator page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "calculator" and click it
    cy.get('a[href*="calculator"]').click()

    // The new url should include "/calculator"
    cy.url().should('include', '/calculator')

    // The new page should contain an h1 with "Calculator page"
    cy.get('h1').contains('Calculator Page')
  })
})
