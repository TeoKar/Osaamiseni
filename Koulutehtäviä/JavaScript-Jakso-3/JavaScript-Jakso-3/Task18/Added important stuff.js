//**************************THESE ARE JUST THE STUFF I ADDED*******************************************************
let numOfActivities = 0;
const nappi = document.querySelector("#act");
const div = document.querySelector("#div");

class MetropoliaStudent extends Human {
    constructor(studentId, name, born) {
        super(name, born);
        this._studentId = studentId;
        this._coursesDone = [];
    }
    courseDone(name) {
        for (let i = 0; i < this._coursesDone.length; i++) {
            if (this._coursesDone[i]._name === name) {
                return true;
            }
        }
        return false;
    }
    courseDone1(name) {
        return this._coursesDone.filter((e) => e._name === name).length === 1;
    }

    courseCompleted(courseRecord) {
        if (courseRecord._name === 'Metka') {
            if (numOfActivities === 4) {
                this._coursesDone.push(courseRecord);
                console.log(`${m1.getName()} totalCredits1(): ${m1.totalCredits1()}`);
                numOfActivities = 0;
                div.innerHTML = "Number of Metka activities " + numOfActivities;
                alert("Metka course completed")
            } else {
                console.log("not enough Metka activities")
            }
        } else if (!this.courseDone(courseRecord._name)) {
            this._coursesDone.push(courseRecord);
        }
    }
    totalCredits() {
        let sum = 0;
        for (let i = 0; i < this._coursesDone.length; i++) {
            sum += this._coursesDone[i]._credits;
        }
        return sum;
    }
    totalCredits1() {
        return this._coursesDone.reduce((acc, e) => acc + e._credits, 0);
    }
    live() {
        return `${super.live()}, study, study, study`;
    }
}
const act = (evt) => {
    evt.preventDefault();
    numOfActivities++;
    div.innerHTML = "Number of Metka activities " + numOfActivities;
    m1.courseCompleted(me1);
    console.log(m1);
};
const m1 = new MetropoliaStudent(333, 'Larry', 1997);
const me1 = new CourseRecord('Metka', 1, 5);
m1.courseCompleted(c1);
console.log(numOfActivities);
console.log(m1);
console.log(`${m1.getName()} totalCredits1(): ${m1.totalCredits1()}`);

nappi.addEventListener("click", act);

//**********************************************ALL ELSE IN APP.JS IS COPIED FROM CLASSES.JS**************************