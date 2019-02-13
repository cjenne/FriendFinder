// You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.
// {
//     "name":"Ahmed",
//     "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//     "scores":[
//         5,
//         1,
//         4,
//         4,
//         5,
//         1,
//         2,
//         5,
//         4,
//         1
//       ]
//   }
// ===============================================================================
// DATA
// Below data will hold all of the friends.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
      name: "Beeker",
      photo: "https://c1.staticflickr.com/5/4417/36818494985_d11595c67e_b.jpg",
      scores: [5,1,4,4,5,1,2,5,4,1]
    },
    {
      name: "Zoidberg",
      photo: "https://c1.staticflickr.com/6/5226/5693575520_1ef5cbae54.jpg",
      scores: [1,1,4,4,3,1,2,4,4,5]
    },
    {
      name: "Weird Al",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/%22Weird_Al%22_Yankovic.JPG/382px-%22Weird_Al%22_Yankovic.JPG",
      scores: [5,1,5,1,5,1,5,1,5,1]
    },
    {
      name: "Matt LeBlanc",
      photo: "https://upload.wikimedia.org/wikipedia/commons/0/0d/X_217c5312.jpg",
      scores: [5,5,5,5,5,5,5,5,5,5]
    }

  ];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
