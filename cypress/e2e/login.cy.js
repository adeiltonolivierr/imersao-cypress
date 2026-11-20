import loginPage from "../pages/LoginPage";

describe("Login", () => {
  beforeEach(() => {
    loginPage.visitar();
  });

  it("Login com sucesso", () => {
    loginPage.preencherEmail("usuario@exemplo.com");
    loginPage.preencherSenha("senha123");
    loginPage.clicarEntrar();
    loginPage.mensagemSucesso().should("have.text", "Login realizado");
  });

  it("Login com senha errada", () => {
    loginPage.preencherEmail("usuario@exemplo.com");
    loginPage.preencherSenha("123");
    loginPage.clicarEntrar();
    loginPage.mensagemErro().should("have.text", "Senha inválida.");
  });

  it("login com email inválido", () => {
    loginPage.preencherEmail("email_invalido");
    loginPage.preencherSenha("senha123");
    loginPage.clicarEntrar();
    loginPage.mensagemErro().should("contain.text", "E-mail inválido.");
  });

  it("login com campos vazios", () => {
    loginPage.clicarEntrar();
    loginPage.mensagemErro().should("be.visible");
  });

  it("login sem informar a senha", () => {
    loginPage.preencherEmail("usuario@exemplo.com");
    loginPage.clicarEntrar();
    loginPage.mensagemErro().should("contain.text", "Senha inválida.");
  });

  it("login com campo email vazio", () => {
    loginPage.preencherSenha("senha123");
    loginPage.clicarEntrar();
    loginPage.mensagemErro().should("contain.text", "E-mail inválido.");
  });

  it("login com email sem arroba", () => {
    loginPage.preencherEmail("usuarioexemplo.com");
    loginPage.preencherSenha("senha123");
    loginPage.clicarEntrar();
    loginPage.mensagemErro().should("contain.text", "E-mail inválido.");
  });

  it("login com espaço antes do email", () => {
    loginPage.preencherEmail(" usuario@exemplo.com");
    loginPage.preencherSenha("senha123");
    loginPage.clicarEntrar();
    loginPage.mensagemErro().should("contain.text", "E-mail inválido.");
  });

  it("login com espaço depois do email", () => {
    loginPage.preencherEmail("usuario@exemplo.com ");
    loginPage.preencherSenha("senha123");
    loginPage.clicarEntrar();
    loginPage.mensagemErro().should("contain.text", "E-mail inválido.");
  });

  it("Corrige o email inválido e tenta realizar login novamente", () => {
    loginPage.preencherEmail("email_invalido");
    loginPage.preencherSenha("senha123");
    loginPage.clicarEntrar();
    loginPage.mensagemErro().should("contain.text", "E-mail inválido.");

    loginPage.preencherEmail("usuario@exemplo.com");
    loginPage.clicarEntrar();
    loginPage.mensagemSucesso().should("have.text", "Login realizado");
  });
});