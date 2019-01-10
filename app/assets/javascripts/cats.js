$(function () {
	console.log('cats.js loaded ... ');
})

function getCats(data) {
	$('div#index-list-div').html('')
	data.forEach(element => {
		let cat = new Cat(element)

		debugger;

		let catData = cat.catHTML()
		$('div#index-list-div').append(catData)
	});
	showOwner()
}

class Cat {
	constructor(obj) {
		this.name = obj.name
		this.owner_id = obj.owner_id
		this.owner = obj.owner
	}
}