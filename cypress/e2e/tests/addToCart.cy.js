/// <reference types="cypress" />
import { homePage } from "../../pages/homePage"
const homePageObj = new homePage()
import testData from '../../fixtures/testData.json'


describe(' test automation', () => {
    // -- This is custom command from support/command.js --
    before(() => {
        cy.login(testData.login.username, testData.login.password)
    })


    it('Add To Cart flow', () => {
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verifySuccessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName);
    })
})