
/// <reference types="cypress" />
export class registerPage{

    //created the weblocators object assigned the elements locators
weblocators= {

    firstName:'#input-firstname',
    lastName:'#input-lastname',
    email:'#input-email',
    phone:'#input-telephone',
    password:'#input-password',
    passwordConfirm:'#input-confirm',
    policyCheckbox:'input[type="checkbox"]',
    continue:'.btn.btn-primary'
}
openURL(){

    cy.visit(Cypress.env('URL'))
}

enterFirstName(fName){
    
   cy.get(this.weblocators.firstName).type(fName)
}

enterLastName(lName){
    
    cy.get(this.weblocators.lastName).type(lName)
}

enterEmail(emailId){
    
    cy.get(this.weblocators.email).type(emailId)
}

enterTelephone(phoneNo){
    
    cy.get(this.weblocators.phone).type(phoneNo)
}
enterPassword(pass){
    
    cy.get(this.weblocators.password).type(pass)
    cy.get(this.weblocators.passwordConfirm).type(pass)
}

selectCheckbox(){
    
    cy.get(this.weblocators.policyCheckbox).check()
}
clickOnContinue(){
    
    cy.get(this.weblocators.continue).click()
}

}