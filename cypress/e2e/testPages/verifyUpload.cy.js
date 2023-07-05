describe('Upload file', () =>{

    it('Image upload', () => {
   
        cy.visit('https://testpages.herokuapp.com/styled/file-upload-test.html')
        cy.get('input#fileinput').selectFile('cypress/fixtures/imageFile.jpg')
        cy.get('input.styled-click-button').click()
        cy.url().should('include', '/fileprocessor');
        cy.get('.explanation>p').should('have.text', 'You uploaded a file. This is the result.\n        ')
        cy.get('#uploadedfilename').should('have.text', 'imageFile.jpg')

    })
})