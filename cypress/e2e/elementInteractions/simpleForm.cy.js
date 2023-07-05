describe('Contact Us', () =>{
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
    })

    it('Sends form with invalid email address', () =>{
        cy.get("input[name='first_name']").type('admin')
        cy.get("input[name='last_name']").type('admin')
        cy.get("input[name='email']").type('invalid@')
        cy.get("textarea[name='message']").type('message')
        cy.get("input[type='submit']").click()
        cy.get("body").should('contain', "Error: Invalid email address")
    })

    it('Sends form without required fields', () =>{
        cy.get("input[name='email']").type('valid@example.com')
        cy.get("input[type='submit']").click()
        cy.get("body").should('contain', "Error: all fields are required")
    })

    
    it('Successfully sends form with valid data', () =>{
        cy.get("input[name='first_name']").type('admin')
        cy.get("input[name='last_name']").type('admin')
        cy.get("input[name='email']").type('valid@example.com')
        cy.get("textarea[name='message']").type('message')
        cy.get("input[type='submit']").click()
        cy.url().should('eq', 'https://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')
        cy.get("h1").should('contain', "Thank You")
    })
})