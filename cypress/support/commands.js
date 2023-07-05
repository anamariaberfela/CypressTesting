
Cypress.Commands.add('getInputByValue', (selector) => {
    return cy.get(`input[value=${selector}]`)
})


Cypress.Commands.add('loginAdmin', (email, password) => {

    cy.session([email, password], () => {
        cy.visit("http://tutorialsninja.com/demo/index.php?route=common/home")
        cy.get("#top-links > ul > li.dropdown > a").click()
        cy.get("ul.dropdown-menu-right li:nth-child(2) > a").click()

        cy.get("input[name='email']").type(email)
        cy.get("input[name='password']").type(password)

        cy.get("input[type='submit']").click()
    })
})

Cypress.Commands.add('getInputByName', (selectors) => {
    return cy.get(`input[name=${selectors}]`)
})

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///<referece types="Cypress" />
///<referece types="cypress-xpath" />
