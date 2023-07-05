describe('MyTest', () =>{
let userdata;
    before( () => {
        cy.fixture("orangegrm").then((data) => {
           userdata=data;
        })
    })

       it('FixturesDemoTest', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
                   
        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);
        cy.get("button[type='submit']").click();

        cy.get("h6.oxd-text").should('have.text', userdata.expected);
       
})
})