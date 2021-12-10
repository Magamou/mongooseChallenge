const mongoose = require('mongoose');

const Course = require('../Model/cours.model');
const Participant=require('../Model/participant.model')

const connect = async() =>{
    try{    
        await mongoose.connect('mongodb://localhost:27017/bootcomp');
        console.log('Connected to the database!');
    }
    catch(e){
        console.log(e.message);
    }
}

connect();

const createCourse = async(course)=>{
    console.log(typeof course, course);
    try{
        await Course.create(course);
    }
    catch(e){
        console.error(e.message);
    }
}

const createParticipant= async(participant) => {
    console.log(typeof participant, participant);
    try{
        await Participant.create(participant);
    }
    catch(e){
        console.error(e.message);
    }
}

const recherche=async (prenom) => {
    const resultat=await Participant.find({firstname:prenom});
    console.log(resultat);
}


// const findParticipant= async () => {
//     let participantArray=[];
//     let participant={};
//     participant.totalHours=0;
//     await Participant.find().then((data, err) => {
//         if(err){
//             console.log(err.message);
//         }else{
//             data.map(p => {
//                 participant.name=`${p.firstname} ${p.lastname}`;
//                 console.log(participant.name);
//                 p.courses.map(c => {
//                    await  Course.findById(c).then((data, err) =>{
//                         participant.totalHours+=data.volume;
//                         console.log(`volume: ${data.volume}`);
//                     });
//                 })
//                 // console.log(participant.totalHours);
//                 participant.totalHours=0;
//             })
//         }
//     })
// }

// findParticipant();

