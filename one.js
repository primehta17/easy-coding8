//given an interger preference,
//Return "Bike","Trikes","Car" in 2,3,4 respectively and For other number return Other

function checkPreference(preference) {
    switch(preference){
        case 2: return "Bike";
        case 3: return "Trikes";
        case 4:return "Car";
        default:
        return "Other";
    }
}
console.log(checkPreference(8))