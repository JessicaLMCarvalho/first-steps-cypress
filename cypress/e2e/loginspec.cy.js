describe('Orange HRM', () => { // descricao e opcional, mas ajuda na organizacao, no caso colocamos o nome do site que estamos usando
  it.skip('login - sucess', () => { // o it basicamente vai ser o teste individual, no caso vamos testar o login e verificar se esta sendo feito com sucesso (por isso o nome sujestivo)
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //colocar dentro do parentese com aspas (') simples, o
    //  site que vai testar
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input') .type ('Admin') // type basicamente e um comando que manda voce escrever no local destinado, no caso ele pedi pra escrever o que esta entre parenteses no local da url que pegamos no cypress
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input') .type ('admin123') //mesmo linha de cima
    cy.get('.oxd-button') .click() //url (ou codigo, nao sei o nome certo) do botao de login, pasei o comando de clicar nele
    cy.location('pathname') .should('equal' , '/web/index.php/dashboard/index') //pathname e a url da pagina inicial, voce precisa copiar e colocar tudo que vem depois do .com , incluindo / se tiver.  o should É usado para realizar uma validação em geral (por exemplo, visibilidade, existência, texto, etc. e o equal É uma condição específica dentro do should, usada para comparar dois valores diretamente.
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text') .contains('Dashboard') // .contains e o comando para verificar, nesse caso ele vai verificar se tem esse nome onde pedimos para verificaer   
  })
  it('login - fail', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') 
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input') .type ('Test') 
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input') .type ('test') 
    cy.get('.oxd-button') .click()
    cy.get('.oxd-alert') // pegamos o oxd alert, porque se for mudado o nome que apareceu no alerta, pode "quebrar" a automacao
// coloquei skip la em cima para o cypress ignorar o test de login com sucesso, prestar atencao no conchetes e paranteses, pois esqueci e estava dando erro
})
})