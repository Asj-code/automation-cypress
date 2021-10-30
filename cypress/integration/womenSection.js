describe('Select options in women section', () => {
    beforeEach(() => {
        cy.visit('/index.php?id_category=3&controller=category')
    })
    it('Large tops search', () => {
        cy.get('#layered_category_4').check()
        cy.get('#layered_id_attribute_group_3').check()
        cy.get('#layered_category_4').uncheck()
        cy.get('#layered_id_attribute_group_3').uncheck()
    })
    it('Order by higher price', () => {
        cy.get('#selectProductSort').select('Reference: Highest first')
    })
    it('Order by in stock', () => {
        cy.get('#selectProductSort').select('In stock')
    })
})