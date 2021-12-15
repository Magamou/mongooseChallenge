const mongoose = require('mongoose');

const Course = require('../Model/cours.model');
const Participant=require('../Model/participant.model')

exports.connect = async() =>{
    try{    
        await mongoose.connect('mongodb://localhost:27017/bootcomp');
        console.log('Connected to the database!');
    }
    catch(e){
        console.log(e.message);
    }
}

// connect();

exports.createCourse = async(course)=>{
    console.log(typeof course, course);
    try{
        await Course.create(course);
    }
    catch(e){
        console.error(e.message);
    }
}

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

exports.deleteParticipant(id) = async(id) => {
    
}






// createParticipant({
// firstname:"Mouhamet Latyr",
// lastname:"NDIAYE",
// courses:[]
// });
// createParticipant({
//     firstname:"Magamou",
//     lastname:"GUEYE",
//     courses:[]
//     });
// createParticipant({
//     firstname:"Mouhamed",
//     lastname:"CAMARA",
//     courses:[]
//     });
// createParticipant({
//     firstname:"Fatou",
//     lastname:"NDIAYE",
//     courses:[]
//     });

// createParticipant({
//     firstname:"Moussa",
//     lastname:"DIOP",
//     courses:[]
//     });

// createCourse({label:"HTML",volume:30});
// createCourse({label:"CSS",volume:40})
// createCourse({label:"JS",volume:50});
// createCourse({label:"MONGODB",volume:70});
// createCourse({label:"EXPRESS",volume:50});
// createCourse({label:"NODEJS",volume:20});
// createCourse({label:"ANGULAR",volume:45});


    ////////// WITH FOR LOOPS /////////

// const findParticipant = async () => {
//     let ps = [];
//     let participantArray = await Participant.find();
    
//     for(let i=0; i<participantArray.length; i++){
        
//         let participant={};
//         let current = participantArray[i];
//         participant.name=`${current.firstname} ${current.lastname}`;        
//         participant.totalHours = 0;
//         participant.courses=[];

//         for(let j=0;j<current.courses.length; j++){
//             let d = current.courses[j];
//             let course = await Course.findById(d);
//             participant.courses.push({label:course.label, volume:course.volume});
//             participant.totalHours += course.volume;
//         }
//         ps.push(participant);
//     }
//     console.log(JSON.stringify(ps,null,3));
// }
// findParticipant();


///////// WITH MAP //////////////

exports.get = async() => {
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
}
