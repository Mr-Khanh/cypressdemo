class textbox {

    element = {
        txtFullName: () => { return cy.get('input[id="userName"]') },
        txtEmail: () => { return cy.get('input[id="userEmail"]') },
        txtCurrentAddress: () => { return cy.get('textarea[id="currentAddress"]') },
        txtPermanentAddress: () => { return cy.get('textarea[id="permanentAddress"]') },
        btnSubmit: () => { return cy.get('button[id="submit"]') }
    }

    typeFullName(keyword) {
        return this.element.txtFullName().type(keyword)
    }

    typeEmail(keyword) {
        return this.element.txtEmail().type(keyword);
    }

    typeCurrentAddress(keyword) {
        return this.element.txtCurrentAddress().type(keyword);
    }

    typePermanentAddress(keyword) {
        return this.element.txtPermanentAddress().type(keyword);
    }

    clickSubmit() {
        this.element.btnSubmit().click();
    }
}

module.exports = new textbox();