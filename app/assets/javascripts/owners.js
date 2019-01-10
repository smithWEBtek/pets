$(function () {
	console.log('owners.js loaded ... ');
})

function getOwners(data) {
	$('div#index-list-div').html('')
	data.forEach(element => {
		let owner = new Owner(element)
		let ownerData = owner.ownerHTML()
		$('div#index-list-div').append(ownerData)
	});
	ownerPets()
}

function ownerPets() {
	$('.owner-pets-button').on('click', function (event) {
		event.preventDefault()
		let id = this.attributes.owner_id.value

		$.ajax({
			url: base_url + `owners/${id}`,
			method: 'get',
			dataType: 'json'
		}).done(function (data) {

			let owner = new Owner(data)
			let ownerPets = owner.ownerPetsHTML()
			$(`div#pets${id}`).html(ownerPets)
		})
	})
}

class Owner {
	constructor(obj) {
		this.id = obj.id
		this.name = obj.name
		this.city = obj.city
		this.dogs = obj.dogs
		this.cats = obj.cats
	}
}

Owner.prototype.ownerHTML = function () {
	return (`
		<div id=${this.id}>
			<p>${this.name}: ${this.city}</p>
			<button class='owner-pets-button' owner_id=${this.id}>${this.name}'s pets</button>
			<div id='pets${this.id}'></div>
		</div>
	`)
}

Owner.prototype.ownerPetsHTML = function () {
	let cats = this.cats.map((cat) => {
		return (`<p>${cat.name}</p>`)
	}).join('')

	let dogs = this.dogs.map((dog) => {
		return (`<p>${dog.name}</p>`)
	}).join('')

	return (`
		<fieldset class='narrow'>
			<div class='color${randomColor()}'>
			cats:<div>${cats}</div>
			dogs:<div>${dogs}</div>
			</div>
		</fieldset>
	`)
}

function randomColor() {
	return getRandomArbitrary(1, 7)
}

function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}