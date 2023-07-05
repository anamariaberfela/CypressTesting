describe('Assertion demo', () =>{
    it('Implicit assertion', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //should 
        //and
        cy.url().should('include','orangehrmlive.com');
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm')

        //or
        cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')

        cy.title().should('include','Orange')
        .and('eq', 'OrangeHRM')
        .and('contain','HRM')

        cy.get('.orangehrm-login-branding>img').should('be.visible').and('exist')
        cy.xpath("//a").should('have.length','5')
        cy.get("input[placeholder='Username']").type('admin')
        cy.get("input[placeholder='Username']").should('have.value', 'admin')
    })
    
    it('Explicit assertion', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //expect
        //assert
        cy.get("input[placeholder='Username']").type('admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

        let expectedName="Sophie CollingsaHaIrayt";

        cy.get('.oxd-userdropdown-tab').then( (x)=>{ // i want to store this elem for some variable
            let actName=x.text()
            expect(actName).to.equal(expectedName) //one assertions
            
        }) 

      
    })
})