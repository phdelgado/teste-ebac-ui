/// <reference types="cypress" />
const perfil = require("../../fixtures/perfil.json");

describe("Funcionalidade: login", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
  });

  it("Deve fazer login com sucesso", () => {
    cy.get("#username").type("pe@teste.com");
    cy.get("#password").type("12345");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain",
      "Olá, pe (não é pe? Sair)"
    );
  });

  it("Deve exibir uma mensagem de erro ao inserir usuário inválido", () => {
    cy.get("#username").type("fabio@teste.com.br");
    cy.get("#password").type("12345");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-error").should("exist");
  });

  it("Deve exibir uma mensagem de erro ao inserir senha inválida", () => {
    cy.get("#username").type("pe@teste.com");
    cy.get("#password").type("teste@0000");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-error").should("contain", "Erro");
  });

  it("Deve fazer login com sucesso - Usando massa de dados", () => {
    cy.get("#username").type(perfil.usuario);
    cy.get("#password").type(perfil.senha);
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain",
      "Olá, pe (não é pe? Sair)"
    );
  });

  it("Deve fazer login com sucesso - Usando fixture", () => {
    cy.fixture("perfil").then((dados) => {
      cy.get("#username").type(dados.usuario, { log: false });
      cy.get("#password").type(dados.senha, { log: false });
      cy.get(".woocommerce-form > .button").click();
      cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
        "contain",
        "Olá, pe (não é pe? Sair)"
      );
    });
  });
});
