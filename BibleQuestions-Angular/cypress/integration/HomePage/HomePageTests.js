/// <reference types="cypress" />

import { BaseUrl } from '../../Settings/Settings';
// Chance is used to generate data like email addresses etc
 import Chance from 'chance';
 const chance = new Chance();

 describe('Home page tests', () => {

    beforeEach(() => {
        cy.visit(BaseUrl);
    })

    it('Has Sign Up in nav bar', () => {
        const navBar = cy.get('.mat-toolbar')
        navBar.contains("Sign Up")
    })
 })