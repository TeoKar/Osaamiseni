let numOfActivities = 0;
const nappi = document.querySelector("#act");
const div = document.querySelector("#div");

class Human {
    constructor(name, born) {
        this._name = name;
        this._born = born;
    }

    age() {
        return Date().getYear - this._born;
    }

    getName() {
        return this._name;
    }

    live() {
        return 'breathe, breathe, breathe';
    }
}

class CourseRecord {
    constructor(name, credits, grade) {
        this._name = name;
        if (credits > 15) {
            this._credits = undefined;
        } else {
            this._credits = credits;
        }
        if (grade < 0 || grade > 5) {
            this._grade = undefined;
        } else {
            this._grade = grade;
        }
    }
}

class Student extends Human {
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
        if (!this.courseDone(courseRecord._name)) {
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
                div.innerHTML="Number of Metka activities " + numOfActivities;
                alert("Metka course completed")
            }else {
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
    div.innerHTML="Number of Metka activities " + numOfActivities;
    m1.courseCompleted(me1);
    console.log(m1);
};

const h1 = new Human('John', 1975);
const s1 = new Student(999, 'Jill', 1991);
const s2 = new Student(123, 'Jack', 1998);
const m1 = new MetropoliaStudent(333, 'Larry', 1997);

//console.log(h1);
//console.log(s1);
console.log(m1);

/*console.log(`${h1.getName()} live(): ${h1.live()}`);
console.log(`${s1.getName()} live(): ${s1.live()}`);
console.log(`${s1.getName()} totalCredits(): ${s1.totalCredits()}`);
console.log(`${s1.getName()} totalCredits1(): ${s1.totalCredits1()}`);*/

const c1 = new CourseRecord('TX00CS25', 15, 5);
const c2 = new CourseRecord('TX00CS20', 5, 2);
const c3 = new CourseRecord('TX00CS25', 15, 3);
const me1 = new CourseRecord('Metka', 1, 5);

/*s1.courseCompleted(c1);
s1.courseCompleted(c2);
s1.courseCompleted(c3);*/
m1.courseCompleted(c1);
console.log(numOfActivities);

s2.courseCompleted(new CourseRecord('TX00CS25', 15, 5));
s2.courseCompleted(new CourseRecord('TX00CS25', -1, 4));
s2.courseCompleted(new CourseRecord('TX00CS25', 15, 3));

/*console.log(s1);
console.log(s2);*/
console.log(m1);

/*console.log(`${s1.getName()} totalCredits(): ${s1.totalCredits()}`);
console.log(`${s1.getName()} totalCredits1(): ${s1.totalCredits1()}`);
console.log(`${s2.getName()} totalCredits(): ${s2.totalCredits()}`);
console.log(`${s2.getName()} totalCredits1(): ${s2.totalCredits1()}`);*/
console.log(`${m1.getName()} totalCredits1(): ${m1.totalCredits1()}`);

nappi.addEventListener("click", act);
