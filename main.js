// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

//NPM RUN TEST in terminal to test code
//Go through test results for missing and or incorrect information

//PROBLEM 1
function createUser(firstName, lastName){
    let user = {
        firstName: firstName,
        lastName: lastName
    }
    return user;
}
console.log(createUser("John", "Doe"));
console.log(createUser("Mesuara", "Kaleziq"));


//PROBLEM 2
function setAge(user, age){
    user.age = age;
    return user; 
}
console.log(setAge(createUser("Jim", "Johnson"),26));
console.log(setAge({firstName: "Jeff", lastName: "Jackson"},30));


//
//PROBLEM 3
function incrementAge(user){
    user.age = user.age + 1
    return user;
}
console.log(incrementAge(setAge(createUser("Frank", "Franklin"),50,)));


//PROBLEM 4
function fixCar(car){
    car.needsMaintenance = false;
    return car;
}
console.log(fixCar({make: 'Ford',model: 'Mustang',year: 1969,needsMaintenance: true}));


//PROBLEM 5
function addGrades(student, newGrades){
    
    student.grades = student.grades.concat(newGrades);
    
    return student;
}
//TESTING PROBLEM 5
let student = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [80, 100, 95]
}

let newGrades = [88, 70, 90];

console.log(addGrades(student, newGrades))


//
//PROBLEM 6
function getDataType(object, key){
    keyType = typeof object[key]
    return keyType
}
//console.log(getDataType())


//
//PROBLEM 7
function createNewTodo(title, isComplete){
    let newTodo = {
        title: title,
        isComplete: isComplete
    };
    return newTodo
}
function addTodo(todos, newTodo){
    todos.push(newTodo);
    return todos;
}


//
//PROBLEM 8
function addSong(playlist, newSong){
    playlist.songs.push(newSong);
    playlist["duration"] = (playlist["duration"] + newSong["duration"])
    return playlist;
}
console.log

//
//PROBLEM 9
function updateReportCard(report, newGrade){
    report.grades.push(newGrade);
    let highGrade = report.grades[0]
    let lowGrade = report.grades[0]
    let sum = 0

    for(let i = 0; i<report.grades.length; i++){
        sum = sum + report.grades[i]
        if (report.grades[i]<report.grades[i+1] && report.grades[i]<lowGrade){lowGrade=report.grades[i];}
        else if (report.grades[i]>report.grades[i+1] && report.grades[i+1]<lowGrade){lowGrade=report.grades[i+1];}
        else if (report.grades[i]>report.grades[i+1] && report.grades[i]>highGrade){highGrade=report.grades[i+1];}
        else if(report.grades[i]<report.grades[i+1] && report.grades[i+1]>highGrade){highGrade=report.grades[i+1];}
    }
    avg = sum/(report.grades.length);
    avg = Number((Math.round(avg * 2) / 2).toFixed(1))

    report.lowestGrade = lowGrade;
    report.highestGrade = highGrade;
    report.averageGrade = avg;

    return report
}







// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
