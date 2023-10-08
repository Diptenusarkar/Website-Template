// const express = require("express");
// const inquirer = require("inquirer");
// const qr = require("qr-image");
// const fs = require("fs");
import express from 'express'
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import cors  from "cors";
const app = express();
const port = 3000;
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.static("public"));
app.use(express.json());

app.post("/generate_qr", async (req, res) => {
    const url = req.body.url;
    const qr_svg = qr.image(url);
    const qrImagePath = `public/qr_img.png`;

    qr_svg.pipe(fs.createWriteStream(qrImagePath));

    fs.writeFile("public/URL.txt", url, (err) => {
        if (err) {
            console.error("Error writing URL.txt:", err);
            res.status(500).json({ error: "Internal Server Error" });
        } else {
            console.log("URL.txt has been saved!");
            res.json({ qr_image: qrImagePath });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
