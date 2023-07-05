describe('My First Test', () => {

    it('Verify correct title', () => {
        //all the steps in this block
        cy.visit("https://thehours.arobs.com/#/login")
        cy.title().should('eq', 'TheHours - Workforce Management App')
    })

    it('Verify incorrect title!', () => {
        cy.visit("https://thehours.arobs.com/#/login")
        cy.title().should('eq', 'TheHours')
    })

  })
