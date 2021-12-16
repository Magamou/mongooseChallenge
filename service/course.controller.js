const mongoose = require('mongoose');

const Course = require('../Model/course.model');


// connect();


exports.createCourse= async(course) => {
    console.log(typeof course, course);
    try{
        await Course.create(course);
    }
    catch(e){
        console.error(e.message);
    }
}

exports.recherche=async (prenom) => {
    const resultat=await Course.find({firstname:prenom});
    console.log(resultat);
}

exports.findAll=async () => {
    console.log('findAll called');
    const resultat=await Course.find();
    return resultat;
}

exports.findById=async (id) => {
    const resultat=await Course.findById(id);
    return resultat;
}


exports.updateCourse=async (id, data) => {
    console.log(data);
    // const p = JSON.parse(data);
    // console.log(p);
    const resultat=await Course.findByIdAndUpdate(id, { $set: data});
    return resultat;
}

exports.deleteCourse = async(id) => {
    const resultat=await Course.findByIdAndRemove(id);
    return resultat;
}