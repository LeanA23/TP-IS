'use strict';

var expect = require("chai").expect;
var calculator = require("../aplicacion/calculadora");

describe("Calculadora - Test", function() {

    describe("Testing the Operations", function() {

        it("Testing the suma operation", function() {
            expect(calculator.suma(1,1)).to.equal(1+1);
        });

        it("Testing the resta operation", function() {
            expect(calculator.resta(1,1)).to.equal(1-1);
        });
    });
});