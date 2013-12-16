var mongo=require ('mongodb');

var Server = mongo.Server,
Db = mongo.Db,
BSON = mongo.BSONPure;

var server= new Server('localhost', 27017, {auto_reconnect:true});
db= new Db('blogs', server);

db.open(function(err, db){
    if(!err){
	console.log("Connected to blog database");
	db.collection('blogs', {strict:true}, function(err, collection){
	    if (err){
		console.log("The eblogs collection doesn't exist. Creating it with samole data...");
		populateDB();
	    };
	    });
	}
    });


exports.findById= function(req, res){
    var id=req.params.id;
    console.log('Retrieving blogs: ' + id);
    db.collection('blogs', function(err, collection){
	collection.findOne({'_id':new BSON.ObjectID(id)}, function(err, item){
			   res.send(item);
			 });
		  });
};

exports.findAll = function(req, res) {
    db.collection('blogs', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

var populateDB = function() {
 
    var blogs= [
    {
        name: "CHATEAU DE SAINT COSME",
        year: "2009",
        grapes: "Grenache / Syrah",
        country: "France",
        region: "Southern Rhone",
        description: "The aromas of fruit and spice...",
        picture: "saint_cosme.jpg"
    },
    {
        name: "LAN RIOJA CRIANZA",
        year: "2006",
        grapes: "Tempranillo",
        country: "Spain",
        region: "Rioja",
        description: "A resurgence of interest in boutique vineyards...",
        picture: "lan_rioja.jpg"
    }];
 
    db.collection('blogs', function(err, collection) {
        collection.insert(wines, {safe:true}, function(err, result) {});
   });
}
