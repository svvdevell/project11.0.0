"use strict"

// 1

class Person {
    constructor (firstName,lastName,age,birthDayDate){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = +age;
        this.birthDayDate = birthDayDate;
    }

    celebrate (){
        console.log("Happy Birthday, let`s celebrate`");
    }
    
}
let person1 = new Person ("Vasiliy","Tarashenko",12,"2010-12-07");
console.log(person1);
person1.celebrate();

let isWeekend = (date) => {
    let dayOfWeek = new Date(date).getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
};

class Employee extends Person {
    #salary = 0;
    constructor (firstName,lastName,age,birthDayDate,salary,jobPosition) {
        super(firstName, lastName, age, birthDayDate);
        this.#salary = +salary;
        this.jobPosition = jobPosition;
    }

    getYearSalary (){
        console.log(`Зарплата за год:${this.#salary * 12}`);
    }

    celebrate (){
        const date = new Date(this.birthDayDate);
        const currentYear = new Date().getFullYear();
            if (isWeekend(date.setFullYear(currentYear))) {
                return super.celebrate();
            } 
            else {
                return console.log("Happy Birthday, but I need to work");
            }
    }
}

let employee1 = new Employee( "Vyacheslav","Shynkarov",20,"2002-17-05",9000,"Developer"); // 2002-12-05 - work day. 
console.log(employee1);
employee1.getYearSalary();
employee1.celebrate();