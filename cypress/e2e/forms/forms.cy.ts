import {getFormbyTitle, getInputByPlaceholder, getInputByType, getRadioButtonByAscendingOrder, getSubmitButton, reachLayout} from './forms-module'

let jsonData:any

describe("Test for all forms in the page", ()=> {
    before(()=>{
        cy.fixture('inline-form').then(data=>{
            jsonData = data;
        })
    })

    it("inline form test", ()=> {
        reachLayout()
        
        const formInputs = getFormbyTitle('Inline form')

        formInputs.within(()=>{

             getInputByPlaceholder('Jane Doe').should('be.visible').should('be.enabled').clear({force:true}).type(jsonData.name, {force:true}).should('have.value', jsonData.name)
             getInputByPlaceholder('Email').should('be.visible').should('be.enabled').click({force:true}).type(jsonData.email).should('have.value', jsonData.email)
             getInputByType('checkbox').should('be.visible').should('be.enabled').check({force:true}).should('be.checked')
             getSubmitButton().should('be.visible').should('be.enabled').click()


        })        
    })

    it("Using the grid form test", ()=> {
        reachLayout()
        
        const formInputs = getFormbyTitle('Using the Grid')

        formInputs.within(()=>{

            getInputByPlaceholder('Email').should('be.visible').should('be.enabled').click({force:true}).type(jsonData.email).should('have.value', jsonData.email)
            getInputByPlaceholder('Password').should('be.visible').should('be.enabled').click({force:true}).type(jsonData.password).should('have.value', jsonData.password)
            getRadioButtonByAscendingOrder('1').should('be.visible').should('be.enabled').check({force:true}).should('be.checked')
            getRadioButtonByAscendingOrder('2').should('be.visible').should('be.enabled').check({force:true}).should('be.checked')
            getRadioButtonByAscendingOrder('3').should('be.visible').should('be.enabled').should('be.disabled')
            getSubmitButton().should('be.visible').should('be.enabled').click()

    })
})

it("Basic form test", ()=> {
    reachLayout()
    
    const formInputs = getFormbyTitle('Basic form')

    formInputs.within(()=>{

         getInputByPlaceholder('Email').should('be.visible').should('be.enabled').click({force:true}).type(jsonData.email).should('have.value', jsonData.email)
         getInputByPlaceholder('Password').should('be.visible').should('be.enabled').click({force:true}).type(jsonData.password).should('have.value', jsonData.password)
         getInputByType('checkbox').should('be.visible').should('be.enabled').check({force:true}).should('be.checked')
         getSubmitButton().should('be.visible').should('be.enabled').click()
})
})

it("Form without labels test", ()=> {
    reachLayout()
    
    const formInputs = getFormbyTitle('Form without labels')

    formInputs.within(()=>{

         getInputByPlaceholder('Recipients').should('be.enabled').click({force:true}).type(jsonData.recipients).should('have.value', jsonData.recipients)
         getInputByPlaceholder('Subject').should('be.enabled').click({force:true}).type(jsonData.subject).should('have.value', jsonData.subject)
         cy.get('textarea').should('be.enabled').click({force:true}).type(jsonData.body).should('have.value', jsonData.body)
         getSubmitButton().should('be.visible').should('be.enabled').click()

})
})

it("Block form test", ()=> {
    reachLayout()
    
    const formInputs = getFormbyTitle('Block form')

    formInputs.within(()=>{

        getInputByPlaceholder('First Name').should('be.enabled').click({force:true}).type(jsonData.firstname).should('have.value', jsonData.firstname)
        getInputByPlaceholder('Last Name').should('be.enabled').click({force:true}).type(jsonData.lastname).should('have.value', jsonData.lastname)
        getInputByType('email').should('be.enabled').click({force:true}).type(jsonData.email).should('have.value', jsonData.email)
        getInputByPlaceholder('Website').should('be.enabled').click({force:true}).type(jsonData.website).should('have.value', jsonData.website)
        getSubmitButton().should('be.visible').should('be.enabled').click()

})
})

it("horizontal form test", ()=> {
    reachLayout()
    
    const formInputs = getFormbyTitle('Horizontal form')

    formInputs.within(()=>{

        getInputByPlaceholder('Email').should('be.enabled').click({force:true}).type(jsonData.email).should('have.value', jsonData.email)
        getInputByPlaceholder('Password').should('be.visible').should('be.enabled').click({force:true}).type(jsonData.password).should('have.value', jsonData.password)
        getInputByType('checkbox').should('be.visible').should('be.enabled').check({force:true}).should('be.checked')
        getSubmitButton().should('be.visible').should('be.enabled').click()
})
})

})