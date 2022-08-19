// modules allow you to break up your code into separate files
// Modules rely on the import and export statements
// export (There are two types of exports: Named and Default.)


// named exports
const name = "Jesse"
const age = 40

export { name, age }

// default exports
const message = () => {
    const name = "Jesse";
    const age = 40;
    return name + ' is ' + age + 'years old.';
};

export default message;
// Import named exports
import { name, age } from "./person.js";
// Import default exports
import message from "./message.js";
