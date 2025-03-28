describe('Filters', () => {
    beforeEach(() => {
        // eslint-disable-next-line no-undef
        cy.visit('/')
    })
    // it('can visit the home page', () => {
    //     // eslint-disable-next-line no-undef
    //     cy.visit('/')
    // })
    it('can toggle the explicit check box', () => {
        cy.get('.filters__form-group')
            .first()
            .find('input')
            .uncheck()
            .should('not.be.checked')
    })
    it ('toggles a check box by clicking on the label', () => {
        cy.contains("EP").click();

        cy.get("#EP").should("be.checked");
    })
})