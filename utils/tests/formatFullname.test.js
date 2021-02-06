const { expect } = require('chai');
const formatFullname = require('../formatFullname.js');
const expectt = require('chai').expect;

describe('formatFullname', () => {
    it('should return an error if "fullName" arg is undefined', () => {
        expect(formatFullname('')).to.equal('Error');
    });
    it('should return an error if "fullName" is not a string', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(12)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');
    });
    it('should return proper value if has proper args', () => {
        expect(formatFullname('Amanda doe')).to.equal('Amanda Doe');
        expect(formatFullname('manda doe')).to.equal('Manda Doe');
    });
    it('should have "fullName" arg which contains of 2 elems', () => {
        expect(formatFullname('Amanda doe test')).to.equal('Error');
    });
  
  });