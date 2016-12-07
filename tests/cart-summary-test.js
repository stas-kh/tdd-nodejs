const chai = require('chai'),
	expect = chai.expect,
	CartSummary = require('../src/js/cartSummary.js');

describe('CartSummary', () => {

	it('CarySummary is a plain JS class', () => {
		let cartSummary = new CartSummary();

		expect(cartSummary).to.be.an('object')
			.and.to.be.an.instanceOf(CartSummary);
	});

	it('CarySummary includes an items private field', () => {
		let cartSummary = new CartSummary();

		expect(cartSummary).to.have.property('_items');
	});

	it('CartSummary applies items array in constructor', () => {
		let cartSummary = new CartSummary(['milk', 'weapon']);

		expect(cartSummary.items).to.have.lengthOf(2);
	});
	
	it('CartSummary can be extended by new items in real time', () => {
		let cartSummary = new CartSummary();
		
		expect(cartSummary.items).to.be.empty;
		
		cartSummary.items.push('pencil');
		cartSummary.items.push('tatoo-hand');
		cartSummary.items.push('soccer ball');
		
		expect(cartSummary.items).to.have.lengthOf(3);
		
		cartSummary.items.pop();

		expect(cartSummary.items).to.have.lengthOf(2);
	});
});