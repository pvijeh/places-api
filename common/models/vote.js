

module.exports = function(Vote) {

    // get all voteCategory model data and sort it 
    var getVoteCats = function (callback){
        Vote.app.models.VoteCategory.find({
        order: 'Id ASC' }, function(err, attributes) {

        for (var i = 0, len = attributes.length; i < len; i++) {
          attributes[i].count = 0; 
        }

          callback(attributes);
      }); 
    }

    // this calls the place method and also send the data to the api route 
    var getPlace = function (id, dataPackage, callback){
        Vote.app.models.Place.find({
        where: {Id : id}},
         function(err, place) {
          callback(place, dataPackage); 
      }); 
    }

  Vote.getPlaceVotesbyCategory = function(id, cb ) {

    if (typeof id === 'undefined') {
      if (err) return cb(err);
      
      cb(null, 'please include id parameter in the form of a number');  

    } else {

    Vote.find({where : {PlaceId : id }}, function(err, placeVotes) {
      if (err) return cb(err);
 
      var AddResultsFromVoteCats = function (attributes) {

        for (var i = 0, len = placeVotes.length; i < len; i++) {
          // console.log(placeVotes[i].VoteCatId);
          attributes[placeVotes[i].VoteCatId].count++; 
        }

      var dataPackage = {
        placeAttributes : attributes
      }
        
        getPlace(id, dataPackage, addResultsFromPlace); 
      }

      var addResultsFromPlace = function (place, dataPackage) {

        dataPackage.place = place; 

        // this cb function sends that data to the api route 
        cb(null, dataPackage);  
      } 

      // call get vote cats, then use callback to add results to dataPackage
      getVoteCats(AddResultsFromVoteCats); 
    
    });

    }
  };

  Vote.remoteMethod('getPlaceVotesbyCategory', {
    accepts: [
      {arg: 'id', type: 'number'},
    ],
    returns: {arg: 'success', type: 'boolean'},
    http: {path:'/getplacevotesbycategory', verb: 'get'}
  });

};
