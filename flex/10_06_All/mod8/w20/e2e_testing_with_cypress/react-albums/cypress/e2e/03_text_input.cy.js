describe('Text Input', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('.search__form').find('input').as('searchField');
    });

    it('can type in the search input', () => {
        cy.get('@searchField')
            .type('The Beatles', {delay: 100})
            .should('have.value', 'The Beatles');
    })
    it('can handle backspace', () => {
        cy.get('@searchField')
            .type('Beee{backspace}ge{backspace}{backspace} Gees', {delay: 150})
            .should('have.value', 'Bee Gees');
    })
})