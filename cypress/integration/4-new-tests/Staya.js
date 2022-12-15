describe('Тестирование формы авторизации staya', function () {
    
    beforeEach(() => {
        cy.visit('https://staya.dog/')
      })

    it('Верные логин и пароль', function () {
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('adelaida_96@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('03041976Yu');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.wait(5000);
        cy.get('.active').contains('Мои заказы');
         })

    it('Верный логин и неверный пароль', function () {
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('adelaida_96@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('03041976Yul');
        cy.get('.auth-form__submit > .s-button__content').click();
        cy.get('.error-label').contains('Невозможно войти с предоставленными учетными данными.')
        })
})