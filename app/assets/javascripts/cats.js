$(function () {
	console.log('cats.js loaded ... ');
})

function getCats(data) {
	$('div#index-list-div').html('')
	data.forEach(item => {
		let cat = new Cat(item)
		let catData = cat.catHTML()
		$('div#index-list-div').append(catData)
	});
}

class Cat {
	constructor(obj) {
		this.name = obj.name
		this.owner_id = obj.owner_id
		this.owner = obj.owner
	}
}

Cat.prototype.catHTML = function () {
	return (`
		<div>
			<p>${this.name}</p>
			<p>owner: ${this.owner.name}</p>
		</div>
	`)
}