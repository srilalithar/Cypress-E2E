import {registerPage} from "../../pages/registerPage.js"
import registerData from "../../fixtures/registerData.json"
const registerObj= new registerPage()

describe('test automation',() =>{

    it('register flow',() =>{

        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.phone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()

    })
})