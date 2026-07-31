/* Understanding Parameters and Return Types */

//The below function returns a string 
function greet(name : string) : string {
    return `Hello ${name}`;
}

//Prameters - Default
function getCollegeName(clgName : string = 'SVECW') : string {
    return `College Name : ${clgName}`;
}

//optional Parameters(?) - parameters can be optional(may or may not be declared) 
function sendAlert(phoneNumber : number, message ?: string) {
    console.log(`Sending SMS to ${phoneNumber}`);
    if(message) {
        console.log(`Messsage : ${message}`);
    }
}

//REST Parameters - captures multiple arguments into single array
function displayNames( ...userNames : string[]) : void {
    console.log(userNames);
}

//Testing
console.log(greet("Prabhas"));
console.log(getCollegeName());
console.log(getCollegeName("VIT"));
console.log(sendAlert(1234567890));
console.log(sendAlert(1234567890,"Sent successfully"));
console.log(displayNames("Rahul", "Seetha", "Ramu", "Steven"));

/* Use console.log() only when a function returns a value that you want to display. 
If a function's return type is void (or it has no return statement), calling console.log(functionCall) 
will always print undefined after the function finishes. */