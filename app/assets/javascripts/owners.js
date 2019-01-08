$(function () {
	console.log('owners.js loaded ... ');
	getOwners()
})

const base_url = 'http://localhost:3000/'

function getOwners() {
	$('a.index-list').on('click', function (event) {
		event.preventDefault()

		$.ajax({
			url: base_url + 'owners',
			method: 'get',
			dataType: 'json'
		}).done(function (data) {

			data.forEach(element => {
				let owner = new Owner(element)
				let ownerData = owner.ownerHTML()
				$('div#owners-list').append(ownerData)
			});
			getOwnerData()
		})
	})
}

function getOwnerData() {
	$('.owner-data-button').on('click', function (event) {
		event.preventDefault()

		let id = this.attributes.owner_id.value

		$.ajax({
			url: base_url + `owners/${id}`,
			method: 'get',
			dataType: 'json'
		}).done(function (data) {

			console.log(data);
			let owner = new Owner(data)
			let ownerHTML = owner.ownerHTML()

			debugger
			// debugger
			$(`div#${id}`).html(ownerHTML)

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

	let cats = this.cats.map((cat) => {
		return cat.name
	})

	return (`
		<div id=${this.id}>
			<p>${this.name}: ${this.city}</p>
			<p>${cats}</p>

			<button class='owner-data-button' owner_id=${this.id}>owner data</button>
		</div>
	`)
}