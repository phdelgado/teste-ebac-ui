/// <reference types="cypress" />

describe("Funcionalidade: login", () => {
  it("Deve fazer login com sucesso", () => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
    cy.get("#username").type("pe@teste.com");
    cy.get("#password").type("12345");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain",
      "Olá, pe (não é pe? Sair)"
    );
    ("");
  });
});
