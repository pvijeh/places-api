

module.exports = function(Vote) {

    var getVoteCats = function (callback){
        Vote.app.models.VoteCategory.find({
        order: 'Id ASC' }, function(err, attributes) {
          callback(attributes);
      }); 
    }

    var getPlace = function (callback){
        Vote.app.models.Place.find({
        where: {Id : 1}},
         function(err, attributes) {
          callback(attributes);
      }); 
    }


  Vote.getPlaceVotesbyCategory = function(id, cb ) {

    Vote.find({where : {PlaceId : 1 }}, function(err, placeVotes) {
      if (err) return cb(err);





      var AddResultsFromVoteCats = function (attributes) {

      var dataPackage = {
        placeAttributes : attributes, 
        votes : placeVotes 
      }

        cb(null, dataPackage);  
      }

      getVoteCats(AddResultsFromVoteCats); 

      // var len = placeVotes.length; 
      // var countVoteCategories = {}; 

      // for (var i = 0, len; i < len; i++){
      //   var categoryNumber = placeVotes[i].VoteCatId; 
 
      // }
    
    });
  };

  Vote.remoteMethod('getPlaceVotesbyCategory', {
    accepts: [
      {arg: 'id', type: 'number'},
    ],
    returns: {arg: 'success', type: 'boolean'},
    http: {path:'/getplacevotesbycategory', verb: 'get'}
  });

};
