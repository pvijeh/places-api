categories = [
'visited',
'favorited',

'Know someone who works their ',
'Make bottle service reservations',
'Arrive early',
'Easy door - everyone gets in ',
'Tough door - plan in advance',
'Bring girls',
'Keep your group small',

'Young professional types',
'Models, moguls and movie stars',
'Fashionable crowd',
'Hip hop  / urban ',
'International jet set ',
'Casual ',
'Upscale ',

'Where models hangout',
'Fashion conscious crowd',
'Tough Door - hardest clubs in nyc to get into ',
'Frequented by celebrities, movie stars and the famous ',
'Best Monday Night Party in NYC',
'Best Tuesday Night Party in NYC',
'Best Wednesday Night Party in NYC',
'Best Thursday Night Party in NYC',
'Best Friday Night Party in NYC',
'Best Saturday Night Party in NYC',
'Best Sunday Night Party in NYC',
'Best Rooftop Nightclubs and Lounges in NYC',
'Best Rooftop Bar in NYC',
'Best Meatpacking District Nightclubs',
'Best Soho Nightclubs',
'Best Lower East Side Nightclubs',
'Best Nightclubs in Chelsea NYC',
'Best Gay Nightclubs in NYC',
'Best for bottle service ',
'Best Lounge',
'Best Nightclub',
'House Music / EDM ',
'Hip Hop',
'Deep House ',
'Best Nightclubs in Brooklyn',
'Best Nightclubs in Williamsburg',
'Most Exclusive Clubs in NYC',
'Attractive Crowd',
'Best Bars and Clubs for Hipsters in NYC',
'Best Clubs in Murray Hill ',
'Best Clubs for Recent College Grads',
'Best bars in the  Lower East Side',
'Best bars in Soho',
'Best bars in the East Village',
'Best bars in the West Village',
'Best bars in chelsea',
'Best bars in Gramercy ',
'Best bars in mid town ',
'best bars in the upper east side',
'best bars in the upper west side',
'best bars in battery park city',
'best bars in nolita',
'best bars in noho',
'best bars in union square ',
'best bars for a date in NYC',
'best sports bars in NYC',
'best cocktails in nyc ',
'best mixology bars in NYC',
'best dive bars in NYC',
'Best singles bar',
'hookup spot ',
'best bars in williamsburg',
'best bars in bushwick ',
'best nightclubs in bushwick ',
'best latin nightclubs',
'best african american nightclubs',
];

module.exports = function(app) {
  var user = app.models.AppUser;
  var vote = app.models.Vote;
  var place = app.models.Place;
  var voteCat = app.models.VoteCategory;

  var today = new Date();
  var now = today.getDate();


//
// clear data 
//

  user.destroyAll(); 
  vote.destroyAll(); 
  place.destroyAll(); 
  voteCat.destroyAll(); 

    // var make_users = []; 
    // var make_votes = [];
    // var make_places = [];
    // var make_voteCats = []; 

    //
    // generates some user data 
    //

        // var generateUsers = function (i, max){
        //         while ( i < max)  {
        //         make_randomString =  Math.random().toString(36).substring(7);

        //         make_users.push({
        //             id  :  i,
        //             username :  make_randomString,
        //             email : make_randomString+'@email.com',
        //             password :  'hovergear'
        //         }); 
        //         ++i; 
        //     }    
        // }

        // generateUsers(0, 100); 

        // user.create(make_users, function(err, users) {
        //   if (err) throw err;
        //   console.log('Created users:', users);
        // });

    //////////////////////////////// end generate users  ////////////////////////////////////////

// 
//  generates some place data 
//

        // var generatePlaces = function (i, max){
        //         while ( i < max)  {

        //         make_places.push({
        //             Id  :  i,
        //             Category :  'category',
        //             Address : 'address', 
        //             GooglePlacesId :  12345918181,
        //             Name : make_randomString =  'venue_'+i,
        //             Neighborhood : 'neighborhood',
        //             Address : '123 Fake Street',
        //             Route : 'venue_'+i,
        //             VenueType : 'Nightclub' 
        //         }); 
        //         ++i; 
        //     }    
        // }
        
        // generatePlaces(0, 50); 

        // place.create(make_places, function(err, places) {
        //   if (err) throw err;
        //   console.log('Created places:', places);
        // });
  
//////////////////////////////// end generate places ////////////////////////////////////////


// 
//  generate vote data 
//

    //    var generateVotes = function (i, max){
    //         var today = new Date();

    //         while ( i < max)  {

    //         make_votes.push({
    //             Id  :  i,
    //             PlaceId: Math.floor(Math.random() * (49 - 0)),
    //             UserId : Math.floor(Math.random() * (49 - 0)),
    //             VoteCatId: Math.floor(Math.random() * (72 - 0)),
    //             votedFor:  true,
    //             DateAdded : today.getDate(),
    //             DateModified : today.getDate()
    //         }); 
    //         ++i; 
    //     }    
    // }

    // generateVotes(0, 10000); 

    // vote.create(make_votes, function(err, votes) {
    //   if (err) throw err;
    //   console.log('Created votes:', votes);
    // });
  
//////////////////////////////// end generate places ////////////////////////////////////////

// 
//  generate vote category data 
//

   // var generateVoteCat = function (i, max){
        
   //      while ( i < max)  {

   //      make_voteCats.push({
   //          Id  :  i,
   //          AttributeName : categories[i],
   //          Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui.',
   //          Route: 'category-route-'+[i],
   //          CategoryIcon: 'fa fa-anchor',
   //          Neighborhood: 'Chelsea', 
   //          VenueType: 'Nightclub', 
   //          PageTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus.'
   //      }); 
        
   //      ++i; 
        
   //      }    
   //  }

   //  generateVoteCat(0, categories.length); 

   //  voteCat.create(make_voteCats, function(err, voteCats) {
   //    if (err) throw err;
   //    console.log('Created votes:', voteCats);
   //  });
  
//////////////////////////////// end generate places ////////////////////////////////////////

};
