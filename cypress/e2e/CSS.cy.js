describe('Orange HRM', () => {
  it.skip('login - sucess', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']") .type ('Admin') 
    cy.get("[name='password']") .type ('admin123')
    cy.get('.oxd-button') .click() 
    cy.location('pathname') .should('equal' , '/web/index.php/dashboard/index') 
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text') .contains('Dashboard') 
  })
  it('login - fail', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
    cy.get("[name='username']") .type ('Test') 
    cy.get("[name='password']") .type ('test') 
    cy.get('.oxd-button') .click()
    cy.get('.oxd-alert') 
})
})