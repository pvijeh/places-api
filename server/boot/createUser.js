module.exports = function(app) {
  var user = app.models.AppUser;
  var vote = app.models.Vote;
  var place = app.models.Place;

  var today = new Date();
  var now = today.getDate();

  user.destroyAll(); 
  vote.destroyAll(); 
  place.destroyAll(); 

    var make_users = [], 
    make_places = [],
    make_votes = [],
    make_voteCats = []; 

    //
    // generates some user data 
    //

    var generateUsers = function (i, max){
            while ( i < max)  {
            make_randomString =  Math.random().toString(36).substring(7);

            make_users.push({
                id  :  i,
                username :  make_randomString,
                email : make_randomString+'@email.com',
                password :  'hovergear'
            }); 
            ++i; 
        }    
    }

    generateUsers(0, 100); 

    user.create(make_users, function(err, users) {
      if (err) throw err;
      console.log('Created users:', users);
    });

    //////////////////////////////// end generate users  ////////////////////////////////////////

// 
//  generates some place data 
//

    var generatePlaces = function (i, max){
            while ( i < max)  {

            make_places.push({
                Id  :  i,
                Category :  'category',
                Address : 'address', 
                GooglePlacesId :  12345918181,
                Name : make_randomString =  'venue_'+i,
                Neighborhood : 'neighborhood'
            }); 
            ++i; 
        }    
    }
    
    generatePlaces(0, 50); 

    place.create(make_places, function(err, places) {
      if (err) throw err;
      console.log('Created places:', places);
    });
  
//////////////////////////////// end generate places ////////////////////////////////////////


// 
//  generate vote data 
//

       var generateVotes = function (i, max){
            var today = new Date();

            while ( i < max)  {

            make_votes.push({
                Id  :  i,
                placeId: Math.floor(Math.random() * (49 - 0)),
                UserId : Math.floor(Math.random() * (49 - 0)),
                VoteCatId: Math.floor(Math.random() * (19 - 0)),
                votedFor:  true,
                DateAdded : today.getDate(),
                DateModified : today.getDate()
            }); 
            ++i; 
        }    
    }

    generateVotes(0, 100); 

    vote.create(make_votes, function(err, votes) {
      if (err) throw err;
      console.log('Created votes:', votes);
    });
  
//////////////////////////////// end generate places ////////////////////////////////////////





};
