const PriceList = {
	items: [],
	addNewItem(item) {
		if (item.hasOwnProperty('price') && item.hasOwnProperty('name') && typeof item.price === 'number' && item.price > 0) {
			this.items.push(item);
		} else {	
			throw new Error('Item to add has wrong structure');
		}
	},
	resetItems() {
		this.items.length = 0;
	},
	getTotalPrice() {
		let result = 0;
		this.items.forEach((item) => result += item.price);
		return result;
	}
};

module.exports = PriceList;