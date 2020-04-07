// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Menu', function() {
  beforeEach(function() {
    cy.visit('/');
  });

  it('메뉴 클릭대로 정상 라우팅', function() {
    cy.get('[data-cy=link]')
      .contains('Bid')
      .click();

    cy.url().should('contain', '/bids');
  });

  it('메뉴 클릭대로 메뉴 ui 정상 표시', function() {
    cy.get('[data-cy=link]')
      .contains('Bid')
      .click();

    cy.get('[data-cy=link]')
      .contains('Bid')
      .should('have.class', 'active');
  });
});
