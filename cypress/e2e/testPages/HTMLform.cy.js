describe('HTML Form Example', () =>{

    beforeEach( () => {
        cy.visit('https://testpages.herokuapp.com/styled/basic-html-form-test.html')
        cy.get("form#HTMLFormElements").should('be.visible')
        cy.get("input[name='username']").type('username')
        cy.get("input[name='password']").type('password')
        cy.get("textarea[name='comments']").type('Something')
        cy.get('input[name="radioval"]').eq(2).check()
        cy.get('select[name="multipleselect[]"]').select('Selection Item 1')
        cy.get('input[type="checkbox"]').eq(1).check()
        cy.get('select[name="dropdown"]').select('Drop Down Item 6')
    })
    
    it('Fill in and successfully reach the confirmation screen', () =>{
        cy.get("input[name='filename']").should('be.visible')

        cy.get("input[name='checkboxes[]']").should('be.visible')
        cy.get("input[value='cb3']").should('be.visible').and('be.checked')
        cy.get("input[value='cb3']").uncheck().should('not.be.checked')
        cy.get("input[value='cb3']").check().should('be.checked')
        cy.get("input[value='cb2']").check().should('be.checked')
        cy.get("input[value='cb2']").uncheck().should('not.be.checked')
        cy.get("input[value='cb1']").check().should('be.checked')
        cy.get("input[value='cb1']").uncheck().should('not.be.checked')

        cy.get("input[name='radioval']").should('be.visible')
        cy.get("input[value='rd2']").should('be.visible').and('not.be.checked')
        cy.get("input[value='rd1']").check().should('be.checked')
        cy.get("input[value='rd2']").check().should('be.checked')
        cy.get("input[value='rd3']").check().should('be.checked')

        cy.get("select[multiple='multiple']").should('be.visible')
        cy.get("option[value='ms4']").should('be.visible').and('not.be.selected')
        cy.get("option[value='ms3'").should('contain', 'Selection Item 3').and('not.be.selected')
        cy.get("option[value='ms2'").should('contain', 'Selection Item 2').and('not.be.selected')
        cy.get("option[value='ms1'").should('contain', 'Selection Item 1').and('be.selected')

        cy.get("select[name='dropdown']").should('be.visible')
        cy.get("select[name='dropdown']").select('Drop Down Item 1').should('have.value','dd1')
        cy.get("select[name='dropdown']").select('Drop Down Item 2').should('have.value','dd2')
        cy.get("select[name='dropdown']").select('Drop Down Item 3').should('have.value','dd3')
        cy.get("select[name='dropdown']").select('Drop Down Item 4').should('have.value','dd4')
        cy.get("select[name='dropdown']").select('Drop Down Item 5').should('have.value','dd5')
        cy.get("select[name='dropdown']").select('Drop Down Item 6').should('have.value','dd6')
       

//other checks before submitting
        
        cy.get("input[type='submit']").click()
        cy.url().should('eq', 'https://testpages.herokuapp.com/styled/the_form_processor.php')

// the data filled in is now visible on the page
        cy.get("li#_valueusername").should('have.text', 'username').and('be.visible')
        cy.get("li#_valuepassword").should('have.text', 'password').and('be.visible')
        cy.get("li#_valuecomments").should('have.text', 'Comments...Something').and('be.visible')
        cy.get('li#_valuecheckboxes0').should('have.text', 'cb3').and('be.visible')
        cy.get('li#_valueradioval').should('have.text', 'rd3').and('be.visible')
        cy.get('li#_valuemultipleselect0').should('have.text', 'ms1').and('be.visible')
        cy.get('li#_valuedropdown').should('have.text', 'dd6').and('be.visible')

        cy.get("li#_valuesubmitbutton").should('be.visible')
        cy.get("a#back_to_form").click()
        cy.url().should('eq','https://testpages.herokuapp.com/styled/basic-html-form-test.html')
        })


        it('Clears filled in data from the form when choosing to Cancel', () =>{

            cy.get("input[type='reset']").click()
            cy.get("input[name='username']").should('have.text', '')
            cy.get("input[name='password']").type('have.text', '')
            cy.get("textarea[name='comments']").type('have.text', '')
            cy.get("input[value='cb3']").should('be.visible').and('be.checked')
            cy.get("input[value='cb1']").should('be.visible').and('not.be.checked')
            cy.get("input[value='cb2']").should('be.visible').and('not.be.checked')
            cy.get("input[value='rd2']").should('be.visible').and('be.checked')
            cy.get("input[value='rd1']").should('be.visible').and('not.be.checked')
            cy.get("input[value='rd3']").should('be.visible').and('not.be.checked')
            cy.get("option[value='ms4']").should('be.visible').and('be.selected')
            cy.get("option[value='ms3']").should('be.visible').and('not.be.selected')
            cy.get("option[value='ms2']").should('be.visible').and('not.be.selected')
            cy.get("option[value='ms1']").should('be.visible').and('not.be.selected')
            cy.get("option[value='dd3']").should('be.visible').and('be.selected') 
            cy.get("option[value='dd1']").should('be.visible').and('not.be.selected') 
            cy.get("option[value='dd2']").should('be.visible').and('not.be.selected') 
            cy.get("option[value='dd4']").should('be.visible').and('not.be.selected') 
            cy.get("option[value='dd5']").should('be.visible').and('not.be.selected') 
            cy.get("option[value='dd6']").should('be.visible').and('not.be.selected') 
        })
 })
