const fs = require('fs')

fs.writeFile(
    'sample.txt',
    'welcome to fsd sample.txt',
    (err) => {
        if(err)
        {
            console.error('1. error creating file: ',err);
            return;
        }

        console.log('1. file created successfully');
    }
)


fs.readFile('sample.txt','utf8',(err,data) => 
{
    if(err)
        {
            console.error('2.1 error creating file: ',err);
            return;
        }

        console.error('2.1 file read successfully');
})

fs.appendFile(
    'sample.txt','\nSemester: 3',(err) =>
    {
        if(err){
            console.log('3.1 error update 1 file',err);

        }
        else{
            console.log('3.1 File update 1 successfully!');
        }
    }
)


fs.readFile(
    'sample.txt',
    'utf8',(err,data) => 
{
    if(err)
        {
            console.error('4.2 error creating file: ',err);
            return;
        }

        console.error('4.2  read updated file successfully');
})

fs.appendFile(
    'sample.txt','\nSemester: 3',(err) =>
    {
        if(err){
            console.log('5.2 error updating file',err);

        }
        else{
            console.log('5.2 File updated 3 next successfully!');
        }
    }
)

fs.readFile(
    'sample.txt',
    'utf8',(err,data) => 
{
    if(err)
        {
            console.error('6.3 error creating file: ',err);
            return;
        }

        console.error('6.3  read updated file successfully');
})


fs.appendFile(
    'sample.txt','\nSemester: 3',(err) =>
    {
        if(err){
            console.log('7.3 error updating file',err);

        }
        else{
            console.log('7.3 File updated successfully!');
        }
    }
)

fs.writeFile(
    'fileTo_unlink.txt',
    'welcome to fsd unlink.txt',
    (err) => {
        if(err)
        {
            console.error('8. error creating file: ',err);
            return;
        }

        console.log('8. file created successfully');
    }
)
fs.unlink(
    'fileTO_unlink.txt',(err) => {
        if(err){
            console.log('9. error in deleteing file',err);
        }
        else{
            console.log('9. file deleted successfully');
        }
    }
)

fs.readFile(
    'fileTo_unlink.txt',
    'utf8',
    (err, data) => {
        if (err) {
            console.error('10. error reading file:', err);
            return;
        }

        console.log('10. file read successfully');
        console.log('File data:', data);
    }
);