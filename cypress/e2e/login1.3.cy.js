describe('Автотесты на авторизацию', function () {
    it('Верный логин и неверный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio222');
         cy.get('#loginButton').click();
         cy.contains('Такого логина или пароля нет');
         cy.get('#exitMessageButton > .exitIcon');
     })
 })