context('Verificando Cursos da Gama Academy', () => {
  beforeEach(() => {
    cy.visit('https://gama.academy/')
  })

  it('Deve entrar na pagina do curso de programacao', () => {
    cy.get('.MenuItem-sc-1j47v77-0').eq(1).click()
    cy.get('.sc-bwzfXH.DropDownParagraph__BulletHeadlineWithoutPadding-sc-1a55den-2.nCulw').eq(2).click()
  })
})