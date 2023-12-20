function fucnt(){
var x = "c"
    switch(x){
        case "a":
        case "b":
        case "c":
            console.log("Either a,b, or c was selected");
            break;
        case "d":
            console.log("Only d was selected.");
            break;
        default:
            console.log("No case was matched");
            break; //precautionary break if case order changes
    }
}

fucnt()