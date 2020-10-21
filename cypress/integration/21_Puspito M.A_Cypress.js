describe('Open Site', () => {
    it('test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Layouts').click()

    })
    it('inline Form', () => {
        cy.get('[placeholder="Jane Doe"]').type('PuspitoMA')
        cy.get('[type="text"][placeholder="Email"]')
            .type('pupito3099@gmail.com')
        cy.contains('Remember me').first().click()
    });

    it('using the Grid', () => {
        cy.get('[data-cy="imputEmail1"]').type('pupito3099@gmail.com')
        cy.get('#inputPassword2').type('ittadakimasu')
        cy.contains('Option 1').click()

    });
    
    it('Basic Form', () => {
        cy.get('#exampleInputEmail1').type('pupito3099@gmail.com')
        cy.get('#exampleInputPassword1').type('ittadakimasu')
        cy.contains('Check me out').click()
    });

    it('Form without labels', () => {
        cy.get('[placeholder="Recipients"]').type('Kim')
        cy.get('[placeholder="Subject"]').type('Taehyung')
        cy.get('[placeholder="Message"]').type('Kim Taehyung')
    });

    it('Block Form', () => {
        cy.get('#inputFirstName').type('Mekar')
        cy.get('#inputLastName').type('Arum')
        cy.get('#inputEmail').type('pupito3099@gmail.com')
        cy.contains('Website').type('https://github.com/PuspitoMA')
    });

    it('Horizontal Form', () => {
        cy.get('#inputEmail3').type('pupito3099@gmail.com')
        cy.get('#inputPassword3').type('ittadakimasu')
        cy.get('.custom-checkbox').last().click()
    });
})