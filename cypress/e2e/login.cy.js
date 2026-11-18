//funcionalidade - suite de teste

 describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://automationpratice.com.br/login");
  });

  it("Login com sucesso", () => {
    cy.get("#user").type("usuario@exemplo.com");
    cy.get("#password").type("senha123");
    cy.get("#btnLogin").click();
    cy.get("#swal2-title").should("have.text", "Login realizado");
  });

  it("Login com senha errada", () => {
    cy.get("#user").type("usuario@exemplo.com");
    cy.get("#password").type("123");
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("have.text", "Senha inválida.");
  });

  it("login com email invállllido", () => {
    cy.get("#user").type("email_invalido");
    cy.get("#password").type("senha123");
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("contain.text", "E-mail invállllido.");
  });

  it("login com campos vazios", () => {
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("be.visible");
  });

  it("login sem informar a senha", () => {
    cy.get("#user").type("usuario@exemplo.com");
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("contain.text", "Senha inválida.");
  });
   it("login com campo email vazio", () => {
    cy.get("#password").type("senha123")
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("contain.text", "E-mail inválido.");
  });
    it("login com email sem arroba", () => {
    cy.get("#user").type("usuarioexemplo.com");
    cy.get("#password").type("senha123");
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("contain.text", "E-mail inválido.");
  });
  
  it("login com espaço antes do email", () => {
    cy.get("#user").type(" usuario@exemplo.com");
    cy.get("#password").type("senha123");
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("contain.text", "E-mail inválido.");
  });
  
  it("login com espaço depois do email", () => {
    cy.get("#user").type("usuario@exemplo.com ");
    cy.get("#password").type("senha123");
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("contain.text", "E-mail inválido.");
  });

  it("Corrige o email inválido e tenta realizar login novamente", () => {
    cy.get("#user").type("email_invalido");
    cy.get("#password").type("senha123");
    cy.get("#btnLogin").click();
    cy.get(".invalid_input").should("contain.text", "E-mail inválido.");

    cy.get("#user").clear().type("usuario@exemplo.com");
    cy.get("#btnLogin").click();
    cy.get("#swal2-title").should("have.text", "Login realizado");
    
  });
});