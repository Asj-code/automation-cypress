describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Login with incorrect email', () => {
        cy.login('andrea@gmail.com', '12345')
        cy.fixture('login').then((login) => {
            cy.get(login.incorrectLoginBanner).should('contain', 'Authentication failed.')
        })
    })
})