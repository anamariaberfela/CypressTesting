describe('Dropdowns with select', () =>{
    beforeEach(() => {
        cy.visit("https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get("#dropdowm-menu-1").should('be.visible')
      })
      
    it('Selects SQL from the first Dropdown',() =>{
        cy.get("#dropdowm-menu-1").select('SQL')
        .should('have.value','sql')
    })

    it('Select JAVA from the first Dropdown',() =>{
        cy.get("#dropdowm-menu-1").select('JAVA')
        .should('have.value','java')
    })

    it('Selects C# from the first Dropdown',() =>{
        cy.get("#dropdowm-menu-1").select('C#')
        .should('have.value','c#')
    })

    it('Selects Python from the first Dropdown',() =>{
        cy.get("#dropdowm-menu-1").select('Python')
        .should('have.value','python')
    })
})