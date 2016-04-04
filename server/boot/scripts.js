module.exports = function(app) {

var Role = app.models.Role; 

Role.create({
	name: 'authenticatedDonor'
}, function(err, role){
	if (err) return debug(err); 
})

}