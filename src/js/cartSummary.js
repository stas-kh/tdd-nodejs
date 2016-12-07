class CartSummary {
	constructor(items = []) {
		this._items = items;
	}
	get items() {
		return this._items;
	}
}

module.exports = CartSummary;