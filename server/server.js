const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true})) 

app.get('/home', function(req, res){
    res.send("Welcome Home !");
});

// axios.get('/data', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// app.post('/data', function(req, res){
//     res.send("data is coming !")
//     console.log(req);
//     console.log("hi");
// });

app.listen(8080, function(){
    console.log('success');
});
