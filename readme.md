khalil.nasrallah@upgrade-code.org


GET /participants
GET /participants/:id
POST /participants
DELETE /participants/:id
PATCH /participants/:id



GET /courses
GET /courses/:id
POST /participants
DELETE /participants/:id
PATCH /participants/:id
GET /courses
GET /courses/:id
POST /courses
DELETE /courses/:id
PATCH /courses/:id



// createCourse({
// firstname:"Mouhamet Latyr",
// lastname:"NDIAYE",
// courses:[]
// });
// createCourse({
//     firstname:"Magamou",
//     lastname:"GUEYE",
//     courses:[]
//     });
// createCourse({
//     firstname:"Mouhamed",
//     lastname:"CAMARA",
//     courses:[]
//     });
// createCourse({
//     firstname:"Fatou",
//     lastname:"NDIAYE",
//     courses:[]
//     });

// createCourse({
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

// const findCourse = async () => {
//     let ps = [];
//     let courseArray = await Course.find();
    
//     for(let i=0; i<courseArray.length; i++){
        
//         let course={};
//         let current = courseArray[i];
//         course.name=`${current.firstname} ${current.lastname}`;        
//         course.totalHours = 0;
//         course.courses=[];

//         for(let j=0;j<current.courses.length; j++){
//             let d = current.courses[j];
//             let course = await Course.findById(d);
//             course.courses.push({label:course.label, volume:course.volume});
//             course.totalHours += course.volume;
//         }
//         ps.push(course);
//     }
//     console.log(JSON.stringify(ps,null,3));
// }
// findCourse();

