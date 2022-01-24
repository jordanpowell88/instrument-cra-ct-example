/// <reference types="cypress" />
describe("Check if instrument works", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should say Edit src/App.js and save to reload", () => {
    cy.get("p").should("contain.text", "Edit src/App.js and save to reload");
  });
});
