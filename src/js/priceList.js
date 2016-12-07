const PriceList = {
	items: [],
	addNewItem(item) {
		if (item.hasOwnProperty('price') && item.hasOwnProperty('name')) {
			this.items.push(item);
		} else {
			return new Error('Item to add has wrong structure');
		}
		return this.items;
	}
};

module.exports = PriceList;