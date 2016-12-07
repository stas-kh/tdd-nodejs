/*
 TESTS IN TDD STYLE
 */

const chai = require('chai'),
	expect = chai.expect,
	assert = chai.assert,
	PriceList = require('../src/js/priceList.js');

describe('PriceList', () => {
	it('PriceList is a plain JS object', () => {
		assert.instanceOf(PriceList, Object);
	});
	
	it('PriceList has a public field for items with prices', () => {
		assert.instanceOf(PriceList.items, Array);
	});
	
	it('PriceList has a public method to add new items', () => {
		assert.property(PriceList, 'addNewItem');
	});
	
	it('PriceList items can be extended in runtime by new meals', () => {
		assert.throws(() => {
			PriceList.addNewItem({name: 'bike'});
		}, Error);
		assert.throws(() => {
			PriceList.addNewItem({price: 'fee'});
		}, Error);

		assert.throws(() => {
			PriceList.addNewItem({name: 'bike', price: 'new price'});
		}, Error);
		assert.throws(() => {
			PriceList.addNewItem({name: 'bike', price: -200});
		}, Error);
		
		assert.doesNotThrow(() => {
			PriceList.addNewItem({name: 'bike', price: 500});
		});
	});

	it('Get total price', () => {
		assert.property(PriceList, 'getTotalPrice');
		assert.property(PriceList, 'resetItems');
		
		PriceList.resetItems();

		PriceList.addNewItem({name: 'i1', price: 300});
		PriceList.addNewItem({name: 'i2', price: 600});
		PriceList.addNewItem({name: 'i3', price: 7400});
		PriceList.addNewItem({name: 'i4', price: 1200});
		PriceList.addNewItem({name: 'i5', price: 100});

		assert.strictEqual(PriceList.getTotalPrice(), 9600);
	});
});