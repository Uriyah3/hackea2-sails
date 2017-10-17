/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 var request = require('request');


 var confidenceFaceFace = function(img1, img2, callback){

   img1 = img1.replace("data:image/jpeg;base64,", "");
   img2 = img2.replace("data:image/jpeg;base64,", "");

   // Set the headers
   var headers = {
       'Content-Type': 'application/x-www-form-urlencoded'
   }

   // Configure the request
   var options = {
       url: 'https://api.7oc.cl/API/rest/compare/face_and_face',
       method: 'POST',
       headers: headers,
       form: {'photo1': img1, 'photo2': img2, 'apiKey': '7d6aee08b0f54db188b91963806b4780'}
   }

   // Start the request
   request(options, function (error, response, body) {
       if (!error && response.statusCode == 200) {
         console.log("Respuesta original desde la API facial")
         console.log(body)
         var json = JSON.parse(body);
         if(!json.hasOwnProperty("confidence")){
           callback(0);
         } else {
           if(json.confidence == "") callback(0);
           else { callback(Number(json.confidence)); }
         }
       }
   });
 }


 module.exports = {

   imgCorta: function(req, res){

     User.find({}).exec(function(err, items){

        for(i=0; i<items.length; i++){
          items[i].photo = items[i].photo.substring(0, 100)
        }

        return res.ok(items);
    });

   },


   login: function(req, res){

     var rut = req.param("rut");
     var loginImg = req.param("photo") || "";


     User.find({ rut: rut }).limit(1).exec(function (err, records) {


       if(records.length == 0){
         return res.ok({ msg: `El RUT ${rut} no esta registrado en el sistema.`, ok: false });
       } else {

         var user = records[0];

         var userImg = String(user["photo"] || "");

         confidenceFaceFace(userImg, loginImg, function(confidence){

           console.log("Confidence: " + confidence)

           if(confidence >= 0.56){
             return res.ok({ msg: "Login correcto", ok: true });
           } else {
             return res.ok({ msg: "No se pudo comprobar su rostro", ok: false });
           }
         });
       }

     });


   }






 };
