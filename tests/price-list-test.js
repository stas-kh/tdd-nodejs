const chai = require('chai'),
	expect = chai.expect,
	PriceList = require('../src/js/priceList.js');

describe('PriceList', () => {
	it('PriceList is a plain JS object', () => {
		expect(PriceList).to.be.an.instanceOf(Object);
	});
	
	it('PriceList has a public field for items with prices', () => {
		expect(PriceList.items).to.be.an('array');
	});
	
	it('PriceList has a public method to add new items', () => {
		expect(PriceList).to.have.property('addNewItem');
	});
	
	it('PriceList items can be extended in runtime by new meals', () => {
		expect(PriceList.addNewItem({name: 'bike'})).to.be.an('error');
		expect(PriceList.addNewItem({price: 'fee'})).to.be.an('error');
	});
});