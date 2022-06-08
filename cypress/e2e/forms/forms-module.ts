export function getInputByPlaceholder(placeholder:string){
    return cy.get(`input[placeholder="${placeholder}"]`)
}
export function getInputByType(type:string){
    return cy.get(`input[type="${type}"]`)
}
export function getFormbyTitle(title:string){
    return cy.get('nb-card-header').contains(`${title}`).parent().within(()=>{
        cy.get('nb-card-body input')
    })
}
export function reachLayout(){
    cy.visit('/')
    cy.get('nb-menu > ul > li:nth-child(3)').click()
    cy.get('nb-menu > ul > li:nth-child(3) > ul > li:nth-child(1) a').click()
    cy.get('.sidebar-toggle').click()
}
export function getRadioButtonByAscendingOrder(nm:string){
    return cy.get(`nb-radio-group > nb-radio:nth-child(${nm}) input`)
}
export function getSubmitButton(){
    return cy.get('button[type="submit"]')
}
