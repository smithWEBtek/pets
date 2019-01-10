$(function () {
	console.log('index.js loaded ... ');
	getIndexList()
})

const base_url = 'http://localhost:3000/'

function getIndexList() {
	// jquery ---------------------------------------------------
	// 	$('a.index-list').on('click', function (event) {
	// 		event.preventDefault()
	// 		let id = this.id

	// javascript -----------------------------------------------
	document.querySelector('a.index-list').addEventListener('click', function (event) {
		event.preventDefault()
		let id = this.id

		//.ajax ---------------------------------------------------
		// $.ajax({
		// 	url: base_url + id,
		// 	method: 'get',
		// 	dataType: 'json'
		// }).done(function (data) {

		$.ajax({
			url: base_url + id,
			method: 'get',
			dataType: 'json'
		}).success(function (data) {

			// .get -------------------------------------------------
			// $.get(base_url + id, {
			// 	method: 'get',
			// 	format: 'json',
			// 	// }).done(function (data) {
			// }).success(function (data) {

			// fetch ------------------------------------------------
			// fetch(base_url + id + '.json')
			// 	.then(function (response) {
			// 		return response.json();
			// 	})
			// 	.then(function (data) {
			// 		// console.log(JSON.stringify(data));
			// 		console.log("data: ", data);

			switch (id) {
				case 'owners':
					getOwners(data)
					break;
				case 'cats':
					getCats(data)
					console.log();
					break;
				case 'dogs':
					getDogs(data)
					break;
				default:
					console.log('No existing list specified.');
			}
		});
	})
}