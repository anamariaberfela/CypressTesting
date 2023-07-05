const sizes = ['iphone-8', 'iphone-x', 'iphone-xr']

describe('Viewports Practice', () => {

    sizes.forEach((size)=> {

        it('Dynamically loop through 3 different mobile viewports', () => {
           
            cy.viewport(size);
            cy.visit("https://tutorialsninja.com/demo/index.php?route=common/home")
            cy.get('#category').should('be.visible')
            cy.get('button.dropdown-toggle').should('be.visible').click({ multiple: true });
            cy.get('.navbar').should('be.visible');
            cy.get('.navbar .navbar-collapse.collapse').should('not.be.visible')
        
        })

    })
  
})
// //describe('Navigation Bar Tests', () => {
//     beforeEach(() => {
//         cy.viewport(1440, 900) // Desktop viewport size
//         cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')
//       })
    
//       it('should verify the visibility of the Categories header', () => {
//         cy.get('.navbar .navbar-nav > li.dropdown > a').should('be.visible')
//       })
    
//       it('should verify the visibility of the toggle button and click on it', () => {
//         cy.get('.navbar .btn-navbar').should('be.visible').click()
//       })
    
//       it('should verify the visibility of the navigation bar menu after clicking the toggle button', () => {
//         cy.get('.navbar .navbar-collapse.collapse').should('be.visible')
//       })
    
//       context('Tablet Viewport', () => {
//         beforeEach(() => {
//           cy.viewport('ipad-2') // Tablet viewport size
//           cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')
//         })
    
//         // Add test cases for tablet viewport size if needed
//       })
    
//       context('Mobile Viewport', () => {
//         beforeEach(() => {
//           cy.viewport('iphone-6') // Mobile viewport size
//           cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')
//         })
    
//         // Add test cases for mobile viewport size if needed
//       })
//     })
    