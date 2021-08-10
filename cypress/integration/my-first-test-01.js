/// <reference types="cypress" />

import textbox from '../pages/textbox';

describe('My-first-test-01', () => {

    beforeEach(()=>{
        cy.visit("/text-box");
    });

    it.only('Test textbox element ', () => {

        // User action on GUI
        textbox.typeFullName('testFullname');
        textbox.typeEmail('test@gmail.com');
        textbox.typeCurrentAddress('testCurrentAddress');
        textbox.typePermanentAddress('testPermanentAddress');
        textbox.clickSubmit();

        // Verification on GUI
        cy.get('div[id="output"]').find('p').should(($p) => {
           expect($p).to.have.length(4);
           expect($p.first()).to.contain('testFullname');
           expect($p.get(1)).to.contain("test@gmail.com");
           expect($p.get(2)).to.contain("testCurrentAddress");
           expect($p.get(3)).to.contain("testPermanentAddress");
        })
    })

    it.only('Trying with soft assertion', () => {

        // User action on GUI
        textbox.typeFullName('testFullname');
        textbox.typeEmail('test@gmail.com');
        textbox.typeCurrentAddress('testCurrentAddress');
        textbox.typePermanentAddress('testPermanentAddress');
        textbox.clickSubmit();

        // Verification on GUI
        cy.get('p[id="name"]', { timeout: 10000 }).then(($p) => {
            const text = $p.text();
            cy.softAssert(text, 'Name:testFullname1', "");
        })

        cy.get('p[id="email"]', { timeout: 10000 }).then(($p) => {
            const text = $p.text();
            cy.softAssert(text, 'Email:test@gmail.com', "");
        })

        cy.get('p[id="currentAddress"]', { timeout: 10000 }).then(($p) => {
            const text = $p.text();
            cy.softAssert(text, 'Current Address :testCurrentAddress ', "");
        })

        cy.get('p[id="permanentAddress"]', { timeout: 10000 }).then(($p) => {
            const text = $p.text();
            cy.softAssert(text, 'Permananet Address :testPermanentAddress', "");
        })

        cy.softAssertAll();

    })

    it.only('Trying with xpath', () => {

        // User action on GUI
        cy.xpath("//input[@id='userName']").type("testFullname");
        cy.xpath("//input[@id='userEmail']").type("test@gmail.com");
        cy.xpath("//textarea[@id='currentAddress']").type("currentAddress");
        cy.xpath("//textarea[@id='permanentAddress']").type("testPermanentAddress");
        cy.xpath("//button[@id='submit']").click();

        // Verification on GUI
        cy.xpath('//p[@id="name"]', { timeout: 10000 }).then(($p) => {
            const text = $p.text();
            cy.softAssert(text, 'Name:testFullname1', "");
        })

        cy.xpath('//p[@id="email"]', { timeout: 10000 }).then(($p) => {
            const text = $p.text();
            cy.softAssert(text, 'Email:test@gmail.com', "");
        })

        cy.xpath('//p[@id="currentAddress"]', { timeout: 10000 }).then(($p) => {
            debugger;
            const text = $p.text();
            cy.softAssert(text, 'Current Address :currentAddress', "");
        })

        cy.xpath('//p[@id="permanentAddress"]', { timeout: 10000 }).then(($p) => {
            const text = $p.text();
            cy.softAssert(text, 'Permananet Address :testPermanentAddress', "");
        })

        cy.softAssertAll();

    })

    it.only('Trying with cy.task', () => {
        cy.task('log', 'This will be output to the terminal');
    })

    it.skip('Testscript 02', function() {
        cy.log('Testscript 02 will be ran')
    })

    it.skip('Testscript 03', function() {
        cy.log('Testscript 03 will be skiped')
    })
    
})

