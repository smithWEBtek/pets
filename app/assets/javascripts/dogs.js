$(function () {
	console.log('dogs.js loaded ... ');
})

function getDogs(data) {
	$('div#index-list-div').html('')
	data.forEach(item => {
		let dog = new Dog(item)
		let dogData = dog.dogHTML()
		$('div#index-list-div').append(dogData)
	});
}

class Dog {
	constructor(obj) {
		this.name = obj.name
		this.owner_id = obj.owner_id
		this.owner = obj.owner
	}
}

Dog.prototype.dogHTML = function () {
	return (`
		<div>
			<p>${this.name}</p>
			<p>owner: ${this.owner.name}</p>
		</div>
	`)
}