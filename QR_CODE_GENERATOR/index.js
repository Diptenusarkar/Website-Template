//importing inquirer to import we have to add type to module in package.json
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
        {message:"Type in your url", name:"URL"}    
  ])
  .then((answers) => {
        const url=answers.URL
        var qr_svg=qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr_img.png"));

        fs.writeFile("URL.txt",url,(err)=>{
            if(err) throw err;
            console.log("the file has been saved!");
        });
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.error("Error: TTY error occurred. Please check your terminal settings.");
    } else {
        console.error("An error occurred:", error);
    }
  });