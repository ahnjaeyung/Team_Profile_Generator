class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    } //end of getName() function definition

    getId() {
        return this.id;
    } //end of getId() function definition

    getEmail() {
        return this.email
    } //end of getEmail() function definition

    getRole() {
        return "Employee";
    } //end of getRole() function definition
}

module.exports = Employee;