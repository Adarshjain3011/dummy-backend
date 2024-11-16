
const express = require('express');
const app = express();

const candidateData = require("./data")

app.listen(5000);

const cors = require('cors');

app.use(cors({
    origin: '*', // Replace with your frontend URL
    credentials: true // Allow sending cookies with cross-origin requests
}));


app.use(express.json());

app.get("/", (req, res) => {


    res.send("helow ");
})

app.get("/getCandidateData/:userEmail", (req, res) => {

    const userEmail = req.params.userEmail;

    console.log(userEmail);


    const candidateDataFiltered = candidateData.filter(candidate => candidate.email === userEmail);

    if (candidateDataFiltered.length > 0) {
        res.status(200).json(candidateDataFiltered[0]);
    } else {
        res.status(404).json({ message: "Candidate not found" });
    }

});
