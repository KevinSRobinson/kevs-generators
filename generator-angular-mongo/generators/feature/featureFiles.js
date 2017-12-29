module.exports = {
	//components/
	details: ['details.js', 'detailsTemplate.html'],
	fields: ['fields.js', 'fieldsTemplate.html'],
	home: ['home.js', 'homeTemplate.html'],
	list: ['list.js', 'listTemplate.html'],

	//modals
	modifyModal: ['createUpdateModalController.js', 'createUpdateModalTempate.html'],
	deleteModal: ['deleteModalController.js', 'deleteModalTempalte.html'],
	modalServices: ['modalServices.js'],

	server: {
		api: ['api.js'],
		controllers: ['controllers.js'],
		models: ['models.js'],
		routes: ['routes.js']
	}
}
