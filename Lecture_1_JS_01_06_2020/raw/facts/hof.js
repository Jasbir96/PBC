// oops => class => object (inheritance)
// functional programming=> smaller function compose into 
// larger function(React/REDUX)

function getFirstName(fullName) {
    return fullName.split(" ")[0];
}
function getLastName(fullName) {
    return fullName.split(" ")[1];
}

// HOF => the function that takes smaller 
// function as an input 
function greeter(fullName, cb) {
    let message = cb(fullName);
    console.log("Hi " + message);
}

greeter("Jasbir Singh", getFirstName);

greeter("Jasbir Singh", getLastName)
// getFirstName("Jasbir Singh");