import {Given, Then} from "cypress-cucumber-preprocessor/steps";

const url = "https://iprice.my/"
const coupons = "https://iprice.my/coupons/"

Then(/^I grab and count all the links$/, function () {
    cy.get("div[class='tc kH']").each($linkName => {
        cy.log($linkName.text())

    })
    cy.get("div[class='tc kH']").should('have.length', 20);
});

Given(/^Verify the find the best deals$/, function () {
    cy.get("h1").contains("Find the Best Deals Online")
});

Given(/^Open iprice home page$/, function () {
    cy.visit(url)
});

Given(/^Verify the top trending product$/, function () {
    cy.get("h2").contains("Top Trending Products")
});


Then(/^Verify all the trending product contains attr data\-vars\-cgt$/, function () {
    cy.get("div.C.I.l.eU > amp-carousel > div > div.i-amphtml-carousel-scroll").children("a").each($element => {
        const message = $element.text();
        expect($element, message).to.have.attr("data-vars-cgt").not.contain("undefined");
    })
});

Given(/^Verify list of product in top trending product$/, function () {
    cy.get("div.C.I.l.eU > amp-carousel > div > div.i-amphtml-carousel-scroll").find("a").should('have.length', 20);
});

Given(/^Open iprice coupons page$/, function () {
    cy.visit(coupons)
});

Given(/^I can see top stores$/, function () {
    cy.get("h2").contains("Top Stores")
});

Then(/^Verify all links in top stores are active$/, function () {
    cy.get("div[class='rY']").children("a").each($element => {
        const message = $element.text();
        // cy.log(message)
        cy.get($element).invoke('attr', 'href')
            .then(href => {
                cy.log(href)
                cy.request(href).its('status').should('eq', 200);
            });
    })
});

Then(/^Verify all the urls in top stores are redirected sucessfully$/, function () {
    cy.get("div[class='rY']").children("a").each($element => {
        const message = $element.text();
        // cy.log(message)
        cy.get($element).invoke('attr', 'href')
            .then(href => {
                cy.visit(href)
                cy.url().should("eq", href)
            });
    })
});

Then(/^Fetch all the links on iprice and check if they are active or not$/, function () {
    cy.get('a').each(link => {
        let href = link.prop('href')
        if (href.length > 0) {
            cy.request(href).its('status').should('eq', 200);
        }
    })
});