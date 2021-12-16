const mongoose = require('mongoose');

const Course = require('../Model/course.model');
const Participant=require('../Model/participant.model')


exports.createParticipant= async(participant) => {
    console.log(typeof participant, participant);
    try{
        await Participant.create(participant);
    }
    catch(e){
        console.error(e.message);
    }
}

exports.recherche=async (prenom) => {
    const resultat=await Participant.find({firstname:prenom});
    console.log(resultat);
}

exports.findAll=async () => {
    console.log('findAll called');
    const resultat=await Participant.find();
    return resultat;
}

exports.findById=async (id) => {
    const resultat=await Participant.findById(id);
    return resultat;
}


exports.updateParticipant=async (id, data) => {
    console.log(data);
    // const p = JSON.parse(data);
    // console.log(p);
    const resultat=await Participant.findByIdAndUpdate(id, { $set: data});
    return resultat;
}

exports.deleteParticipant = async(id) => {
    const resultat=await Participant.findByIdAndRemove(id);
    return resultat;
}


///////// WITH MAP //////////////

exports.findCourses = async() => {
    // await connect();
    const part= await Participant.find();
    const courses=await Course.find();
    let participantArray =[]
    part.map(p => {
        let participant={};
        participant.name=`${p.firstname} ${p.lastname}`;
        participant.totalHours=0;
        participant.courses=[];
        courses.map(async c => {
            p.courses.map(async x  =>{
                if( x.equals(c._id)){
                    participant.courses.push({label:c.label, volume:c.volume});
                    participant.totalHours += c.volume;
                }
            })
        })
        participantArray.push(participant);
    })
    console.log(JSON.stringify(participantArray,null,3));
    return participantArray;
}
