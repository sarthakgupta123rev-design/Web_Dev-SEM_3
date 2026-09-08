const fs = require('fs');

//write the txt file
fs.writeFileSync('sec_A_students.txt' , 'this is the exoeriment no_2 of fsd cde ds A ','utf-8');

console.log('file is written succesfully');


//update the txt file
fs.appendFileSync('sec_A_students.txt' , '\nthis is next line ofsec-a-txt file.')
console.log('updated successfully');


//read the given txt file
let data = fs.readFileSync(
    'sec_A_students.txt','utf-8'
)
console.log('the data of the txt file is: ',data);

fs.writeFileSync('example1.txt','this is an example','utf-8');

//delete 
fs.unlinkSync('example1.txt');
console.log('\nexample.txt file is deleted successfully');
console.log('\nthe data of the txt file is: ',data);


//folder creation
fs.mkdirSync('sample_folder');
console.log('new folder named sample_folder is created');

//folder deleted 
fs.rmdirSync('sample_folder');
console.log('folder deleted')


//cheak file exist
if(fs.existsSync('sec_A_students.txt')){
    console.log('file exists');
}
else{
    console.log("file does'nt exist" );
}


//cheak folder exist
if(fs.existsSync('sample_folder')){
    console.log('folder exists');
}
else{
    console.log("folder does'nt exist" );
}