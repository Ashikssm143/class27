function calculation() {
    let x = 800
    let y = 700
    let z = x * y 
    let result = z
    let result2 = x + y
    let result3 = x - y
    let result4 = x % y
    console.log(result);
    console.log(result2);
    console.log(result3);
    console.log(result4);
    
}

calculation()


//Map
console.log("Map");

let teams = [ "Ashik", "Adib", "Shanto", "Sadman", "Saju", "Akash", "Anon"]

teams.map ((item)=>{
    console.log(item);
    
})

let myName = new SpeechSynthesisUtterance("Md Rokonuzzaman Ashik");
speechSynthesis.speak(myName);



//Multiple


let memberlist = [ "Ashik", "Adib", "Shanto", "Sadman", "Saju", "Akash", "Anon"]

function gratings(members) {
    let utterance = new SpeechSynthesisUtterance(`Welcome ${members}`);
speechSynthesis.speak(utterance);
}



for (let i = 0; i < memberlist.length; i++) {
    gratings (memberlist[i]);
    
}