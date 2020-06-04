let input = process.argv.slice(2);
console.log(input);
let cmd = input[0];
switch (cmd) {
    case "view":
        console.log("View command Implemented");
        break;
    case "treefy":
        console.log("Treefy  command Implemented");
        break;
    case "untreefy":
        console.log("Untreefy  command Implemented");
        break;
    case "help":
        console.log("Help Command Implemented");
        break;
    default:
        console.log("Work Command");
        break;
}