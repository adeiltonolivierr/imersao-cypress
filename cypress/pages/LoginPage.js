class LoginPage {
  visitar() {
    cy.visit("https://automationpratice.com.br/login");
  }

  preencherEmail(email) {
    cy.get("#user").clear().type(email);
  }

  preencherSenha(senha) {
    cy.get("#password").type(senha);
  }

  clicarEntrar() {
    cy.get("#btnLogin").click();
  }

  mensagemErro() {
    return cy.get(".invalid_input");
  }

  mensagemSucesso() {
    return cy.get("#swal2-title");
  }
}

export default new LoginPage();