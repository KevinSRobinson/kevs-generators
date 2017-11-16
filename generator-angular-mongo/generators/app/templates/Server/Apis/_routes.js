module.exports = function(app){
    
    app.use('/api/people', require('../Apis/peopleApi'));
    app.use('/api/Organisations', require('../Apis/OrganisationsApi'));

}