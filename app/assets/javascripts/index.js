$(function () {
	console.log('index.js loaded ... ');
	getIndexList()
})

const base_url = 'http://localhost:3000/'

function getIndexList() {
	$('a.index-list').on('click', function (event) {
		event.preventDefault()
		let id = this.id

		$.ajax({
			url: base_url + id,
			method: 'get',
			dataType: 'json'
		}).done(function (data) {

			switch (id) {
				case 'owners':
					getOwners(data)
					break;
				case 'cats':
					getCats(data)
					break;
				case 'dogs':
					getDogs(data)
					break;
				default:
					console.log('No existing list specified.');
			}
		})
	})
}