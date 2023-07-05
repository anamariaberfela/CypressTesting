describe('Verify Downloand', () => {

    it('VerifyDownload', () => {
        cy.visit('https://testpages.herokuapp.com/styled/download/download.html')
        cy.get('button#direct-download').should('be.visible')
        cy.get('button#direct-download').click()
        cy.verifyDownload('textfile.txt');
    })
})