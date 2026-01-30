//URLSearchParams


//EXEMPEL

let params = new URLSearchParams();

params.append("userID", 5);
params.append("city", "Stockholm");
params.append("color", "blue");

let url = "https://www2.hm.com?" + params.toString();
console.log("fetching from " + url);


//Dess metoder


let colorInput = document.querySelector("#color");
let btn = document.querySelector("#filter");

btn.addEventListener("click", () => {

    //fetch
    let myURL = "www.zara.se?";
    let params = new URLSearchParams();

    if(colorInput.value !== ""){
        params.append("color", colorInput.value)
        params.append("size", 43)
    }

    console.log(myURL + params.toString());
    //EXEMPEL-METODER
    // Ta bort parameter
    // params.delete("color")

    // Kolla om det finns en parameter
    // params.has("color")

    // //Ändra en existerande parameter
    // params.set("color","black");
})