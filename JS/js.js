let user = {name: "Yevgen", surname: "Naumchyk",} // 2.3.1. Створити об’єкт «Користувач» з властивостями «Прізвище»,«Ім’я».
console.log(user)

let student = {   // 2.3.2. Створити об’єкт «Студент», що містить властивості «Спеціальність», «Група» і методи: додати, змінити, видалити дані.
    specialty: null,
    group: null,
    delete: function () {
        this.specialty = null;
        this.group = null;
    },
    change: function () {
        let specialty = prompt("Write the specialty: ");
        let group = prompt("Write the group: ");
        this.specialty = specialty;
        this.group = group;
    },

}
student.change()
console.log(student.name)
student.delete()
console.log(student)

let copy = user;   // 2.3.3. Реалізувати копіювання властивостей і методів об’єктів «Користувач» і «Студент».
copy.name = "Pablo";
console.log(copy)
let key;
let copyInfoStudent = {};
for (key in student) {
    copyInfoStudent[key] = student[key]
}
console.log(copyInfoStudent)
copyInfoStudent.change()
console.log(copyInfoStudent)

function Student(fname, specialty, group) { // 2.3.4. Додати в прототип об’єкту «Студент» метод «Показати дані»
    this.fname = fname;
    this.specialty = specialty;
    this.group = group;
}
Student.prototype.change = function (fname, specialty, group) {
    this.fname = fname;
    this.specialty = specialty;
    this.group = group;
}
Student.prototype.delete = function () {
    this.fname = null;
    this.specialty = null;
    this.group = null;
}
Student.prototype.getData = function () {
    return "Full name: " + this.fname + "\nSpecialty: " + this.specialty + "\nGroup: " + this.group;
}
let me = new Student("Yevgen", 122, "TR-14");
console.log(me.getData())

// 2.3.5. Створити об’єкт «Успішність», що наслідує властивості і методи
// об’єкту «Студент» і має додаткові властивості «Тест», «Спроба», «Бали»
// і метод «Розрахунок середнього балу» (за декілька спроб).
// Перевизначити в об’єкті «Успішність» метод «Показати дані».
function Progress(fname, specialty, group){
    Student.call(this, fname, specialty, group);
    this.task = []
    this.uTests = []
    this.aValues = []
}
Progress.prototype = Object.create(Student.prototype)
let p = new Progress("Yevgen", 122, "TR-14");
console.log(p.getData())
Progress.prototype.changeTest = function (test, points) {
        let count = 1;
        for (let i = 0; i < this.task.length; i++){
            if (test === this.task[i]["test"]){
                count += 1;
            }
        }
        if (typeof points != "number"){
            console.log("Write the type with a number")
            return
        }
        this.task.push(
            {
                "test": test,
                "attempt": count,
                "points": points
            }
        )
    }
Progress.prototype.aPoints = function () {
        this.uTests = [...new Set(this.task.map(item => item.test))];
        for (let i = 0; i < this.uTests.length; i++){
            let points = 0
            let count = 0
            for (let j = 0; j < this.task.length; j++){
                if (this.uTests[i] === this.task[j]["test"]){
                    points += this.task[j]["points"]
                    count += 1
                }
            }
            let average = points / count;
            this.aValues.push(
                {
                    "test": this.uTests[i],
                    "aPoints": average
                }
            )
            console.log(this.aValues[i])
        }
    }
p.changeTest("Golang", 10)
p.changeTest("Golang", 5)
p.aPoints();

// 2.3.6. Увага! Класи реалізуються самостійно, незалежно від
// об’єктів. Реалізувати класи «Студент» і «Успішність» з такими же
// методами і властивостями як і попередні об’єкти. «Успішність» наслідує
// методи та властивості від «Студент». При реалізації використовувати
// геттери і сеттери, наприклад, для перевірки даних чи виведення в різних
// виглядах інформацію.

class MyStudent {
    constructor(fname, specialty, group) {
        this.fname = fname;
        this.specialty = specialty;
        this.group = group;
    }
    set fname(fname){
        if (fname.length < 5){
            console.log("Too short");
            return
        }
        this.fname = fname;
    }
    set specialty(specialty){
        if (specialty.length > 4){
            console.log("Too long");
            return
        }
        this.specialty = specialty;
    }
    set Group(group){
        if (group.length > 5){
            console.log("Too long");
            return
        }
        this.group = group;
    }
    delete(fname, specialty, group) {
        this.fname = null;
        this.specialty = null;
        this.group = null;
    }
    get getData() {
    console.log("Name: " + this.fname +
        "\nSpecialty: " + this.specialty +
        "\nGroup: " + this.group);
    }
}

let mestudent = new MyStudent("Yevgen Naumchyk", 122, "TR-14")
console.log(mestudent.getData)

class MyProgress extends MyStudent {
    constructor(fname, specialty, group) {
        super(fname, specialty, group);
        this.task = []
        this.uTests = []
        this.aValues = []
    }
    changeTest(test, points) {
        let count = 1;
        for (let i = 0; i < this.task.length; i++){
            if (test === this.task[i]["test"]){
                count += 1;
            }
        }
        if (typeof points != "number"){
            console.log("Write the type with a number")
            return
        }
        this.task.push(
            {
                "test": test,
                "attempt": count,
                "points": points
            }
        )
    }
    get getData() {
        super.getData;
        for (let i = 0; i < this.task.length; i++){
            console.log(this.task[i])
        }
    }
    get aPoints() {
        this.uTests = [...new Set(this.task.map(item => item.test))];
        for (let i = 0; i < this.uTests.length; i++){
            let points = 0
            let count = 0
            for (let j = 0; j < this.task.length; j++){
                if (this.uTests[i] === this.task[j]["test"]){
                    points += this.task[j]["points"]
                    count += 1
                }
            }
            let average = points / count;
            this.aValues.push(
                {
                    "test": this.uTests[i],
                    "aPoints": average
                }
            )
            console.log(this.aValues[i])
        }
    }
}

let test = new MyProgress("Yevgen Naumchyk", 122, "TR-14")
test.changeTest("123", 12)
test.changeTest("124", 10)
console.log(test.getData)
console.log(test.aPoints)
