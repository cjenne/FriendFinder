// Your apiRoutes.js file should contain two routes:
// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
// =================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// =================================================
var friends = require("../data/friends");
// =================================================
// ROUTING
// =================================================
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
// -----------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
// ----------------------------------------------

  app.post("/api/friends", function(req, res) {  
    // req.body holds parameters that are sent up from the client as part of a POST request.
    var userInput = (req.body).scores;
    var name = '';
		var photo = '';
		var newFriendScore = 40; // Make the initial value big for comparison
              for (let i = 0; i < friends.length; i++) {
                  //for each one of the friends we need to pull the scores array.  each question in the scores array needs to be checked against like elements in the array for the userInput (req.body).scores just submitted.  
                  var scoreDifference = 0;
                  for (let j = 0; j < friends[i].scores.length; j++) {
                    scoreDifference += Math.abs(friends[i].scores[j] - userInput[j]);
                  
                  //if the number does not match for a question the difference should be calculated. Then all of the differences should be added together.
                }
                  //
                  if (scoreDifference < newFriendScore) {
                    // console.log('Closest match found = ' + diff);
                    // console.log('Friend name = ' + friends[i].name);
                    // console.log('Friend image = ' + friends[i].photo);
                    scoreDifference = newFriendScore;
                    name = friends[i].name;
                    photo = friends[i].photo;
                  }
                  //the friend with the lowest number is a match and their name and photo will be posted to the modal below
              }
              friends.push(userInput);

              // Send appropriate response
              res.json({status: true, name: name, photo: photo});
          });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.

  // app.post("/api/clear", function(req, res) {
  //   // Empty out the arrays of data
  //   friends = [];

  //   res.json({ ok: true });
  // });
};