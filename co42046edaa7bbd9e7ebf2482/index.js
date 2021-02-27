const stringOne = "I like cheese"
const stringTwo = "ambidextrously"

function isIsogram(string) {
    // make lowercase, remove spaces and all non-letters, and make into array
    const newArr = string.toLowerCase().replace(/\W/g, "").split("")
    
    // use Set to return number of elements in set, and check if it's equal to length of newArr
    return (new Set(newArr)).size === newArr.length ? 
            console.log("Is an Isogram") : 
            console.log("Is not an Isogram")
}

isIsogram(stringOne)