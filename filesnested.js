/*
   Goal of this exercise is to learn nested callbacks.
*/

//require fs
var fs = require('fs');
//var fileData;
//
//var repeatCallback = function(){
//  var fs = require('fs');
//
//}
//
//var textCallback = function(fileName){
//  var fs = require('fs');
//  fs.readFile( fileName,'utf-8',function(err, data){
//    if(err) throw err;
//    fileData += data;
//    console.log(fileData);
//    return textCallback;
//  })
//}
//
//var getFile = function(){
//  var fs = require('fs');
//  textCallback();
//  console.log(fileData);
//}

//getFile('./file1.txt');
//read file1
fs.readFile('./file1.txt', 'utf-8', function(err, data){
  if(err) throw err;
  console.log(data);
  var file1 = data;
  fs.readFile('./file2.txt', 'utf-8', function(err, data){
    if(err) throw err;
    console.log(data);
    var file2 = data;
    fs.readFile('./file3.txt', 'utf-8', function(err, data){
      if(err) throw err;
      console.log(data);
      var file3 = data;
      var file4 = file1 + file2 + file3;
      console.log(file4);
      fs.writeFile('file4.txt', file4, function(err){
        if(err) throw err;
        console.log('Wrote file 4 saved.');
        fs.readFile('./file4.txt', 'utf-8', function(err, data){
          if(err) throw err;
          var file4 = data + 'I am File4';
          console.log(file4);
          fs.writeFile('file5.txt', file4, function(err){
          if(err) throw err;
          console.log('file4 content was copied over to file5');
          });
        });
      });
    });
  });
});
    //read file2
        //read file3
          //join file1, fil2 and file3 contents
          //write to file4
              // console.log('Concatenated file1.txt, file2.txt, file3.txt into file4.txt.');
              //read file4
                //write file5
                  // console.log('File4 content was copied over to file5')

