describe('MyTestSuite', () =>{

    it('FixturesDemoTest', () => {
   
        cy.fixture("orangegrm2").then((data)=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        data.forEach((userdata) => {
                  
            cy.get("input[placeholder='Username']").type(userdata.username);
            cy.get("input[placeholder='Password']").type(userdata.password);
            cy.get("button[type='submit']").click();

            if(userdata.username=='Admin' && userdata.password=='admin123')
            {
                cy.get('h6.oxd-text')
                .should('have.text', userdata.expected);

                cy.get('.oxd-userdropdown-tab > .oxd-icon').click()//logout
                cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
            }
            else{
                cy.get('div.oxd-alert-content')
                .should('have.text', userdata.expected)
            }
    
             })

         })
    })
})