describe('Alerts', () => {

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
      })

    it('JS Alerts', () => {
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert', (t)=>{
            expect(t).to.contains('I am a JS Alert');
        })
    //alert windows automatically closed by cypress
        cy.get("#result").should('have.text', 'You successfully clicked an alert')
    })

    it('JS Confirm - OK', () => {
        cy.get("button[onclick='jsConfirm()']").click();
        
        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm'); // by default ok button closed
        })
        cy.get("#result").should('have.text', 'You clicked: Ok')

    })

    it('JS Confirm - CANCEL', () => {
        cy.get("button[onclick='jsConfirm()']").click();
        
        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm');
        })

        cy.on('window:confirm', () => false); // cypress closed alert windows used cancel button
        cy.get("#result").should('have.text', 'You clicked: Cancel')

    }) 

    it('JS Prompt Alert', () => {

        cy.window().then((win) => {
            cy.stub(win,'prompt').returns('welcome');
        })

        cy.get("button[onclick='jsPrompt()']").click();
        cy.get("#result").should('have.text', 'You entered: welcome')
    })

    
    it('Authenticated Alert', () => {

        //apr 1
       /* cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth:
        {
            username:"admin",
            password: "admin"
        }
     });
         cy.get("div[class='example'] p").should('have.contain', "Congratulations!")
     })*/

        //apr2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

        cy.get("div[class='example'] p").should('have.contain', "Congratulations!")
    })
})