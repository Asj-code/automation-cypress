describe("Search elements", () => {
    beforeEach(() => {
        cy.visit('/');
    })
    it('Search for elements with multiple results', () => {
        cy.search('dress')
        cy.fixture('searchResult.json').then((searchResult) => {
            cy.get(searchResult.title).should('contain', 'dress')
        })
    })
    it('Search for elements with no results', () => {
        cy.search('qwerty')
        cy.fixture('searchResult.json').then((searchResult) => {
            cy.get(searchResult.alert).should('contain', 'No results were found for your search')
        })
    })
    it('Search for elements with speacial codes', () => {
        cy.readFile('cypress/support/text/search.txt').then((text) => {
            cy.search(text)
        })
        cy.fixture('searchResult.json').then((searchResult) => {
            cy.get(searchResult.alert).should('contain', 'No results were found for your search')
        })
    })
})