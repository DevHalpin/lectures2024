describe('Display Results', () => {
    it('displays the results from an API', () => {
        cy.visit('/');
        cy.intercept('GET', '**/search*', { fixture: 'itunes.json'}).as('getSearch');

        cy.get('.search__form')
            .find('input')
            .type('The Beatles', { delay: 100 })
            .should('have.value', 'The Beatles');
        
        cy.get('.spinner').should('be.visible');

        cy.wait('@getSearch')
            .get('main')
            .contains('Random Access Memories')
            .should('be.visible');

        cy.contains('Explicit').click();

        cy.get('article.album')
            .should('not.contain', 'Daft Club');
    })
})