exports.findAll = function (req,res){
    res.send([{name: 'blog1'}, {name: 'blog2'}, {name: 'blog3'}]);
};

exports.findById = function  (req, res){
    res.send({ id:req.params.id, name: "The Name", description: "description"});
};
 
