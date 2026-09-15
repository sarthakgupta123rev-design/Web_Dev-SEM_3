const { write, Utf8Stream } = require('fs');

const fs = require ('fs').promises;

async function writeFile()
{
    try{
        await fs.writeFile("promise.txt","hello students! I Am Sarthak Gupta.");
        console.log("file created and data written successfully.");
    } catch (error) {
        console.log("Error:",error);
    }
}

async function renameFile() {
    try{
        await fs.rename("promise.txt","promises_new.txt");
        console.log("file renamed successfully");
    }catch(error){
        console.log("error :",error);
    }
    
}

async function readFile(){
    try{
        await fs.readFile("promises_new.txt",'Utf8');
        const data = await fs.readFile("promises_new.txt", "utf8");
        console.log("file read successfully");
        console.log("Data:", data);
    }catch(error){
        console.log("error :",error);
    }
}
async function unlinkFile(){
    try{
        await fs.unlink("promises_to_del.txt",'Utf8');
        
        console.log("file deleted successfully");
        
    }catch(error){
        console.log("error :",error);
    }
}

async function main() {
    await writeFile();
    await renameFile();
    await readFile();
    await unlinkFile();
}

main();