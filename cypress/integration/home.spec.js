/// <reference types="cypress"/>

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should be render the home page and display a message', () => {
    expect.hasAssertions()
    cy.get('h1').contains('Home Page')
  })
})
