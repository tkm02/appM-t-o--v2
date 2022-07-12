// let formulaire      = document.querySelector("#formulaire");
// let input           = document.querySelector(".input");
// let button          = document.querySelector("button");

// let Maville           = document.querySelector(".ville");
// let temperature     = document.querySelector(".degre");

// let pays            = document.querySelector(".affichePays");
// let description     = document.querySelector(".description");

// let tempMin         = document.querySelector(".temp-min");
// let tempMax         = document.querySelector(".temp-max");
// let humidite        = document.querySelector(".humidite");

// // document.querySelector(".container1").style.transform='scale(0)';            
// // document.querySelector(".container3").style.transform='scale(0)';            

// let ville ='abidjan';
// recevoirTemperature(ville)
// button.addEventListener("click",function(e){
//     e.preventDefault();
//     ville = input.value;
//     document.querySelector(".container1").style.transform='scale(1)';            
//     document.querySelector(".container3").style.transform='scale(1)'; 
//     recevoirTemperature(ville);
//     input.value="";
// });


// function recevoirTemperature(ville){
// let url         = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=e4c8948075169555c1bc659c146d81b3&units=metric`;
// let requet      = new XMLHttpRequest();

// requet.open('GET',url);
// requet.responseType='json';
// requet.send();

// requet.onload = function(){
//     if(requet.readyState === XMLHttpRequest.DONE){
//         if(requet.status === 200){
//             let reponse = requet.response;
//             Maville.textContent = reponse.name;
//             temperature.textContent = reponse.main.temp;
//             description.textContent = reponse.weather[0].description;
//             pays.textContent = reponse.sys.country;
//             tempMax.textContent = reponse.main.temp_max;
//             tempMin.textContent = reponse.main.temp_min;
//             humidite.textContent = reponse.main.humidity;
//             console.log(reponse);
//     }
// }
// };
// }
let formulaire      = document.querySelector("#formulaire");
let input           = document.querySelector(".input");
let button          = document.querySelector("button");

let Maville           = document.querySelector(".ville");
let temperature     = document.querySelector(".degre");

let pays            = document.querySelector(".affichePays");
let description     = document.querySelector(".description");

let tempMin         = document.querySelector(".temp-min");
let tempMax         = document.querySelector(".temp-max");
let humidite        = document.querySelector(".humidite");

// document.querySelector(".container1").style.transform='scale(0)';            
// document.querySelector(".container3").style.transform='scale(0)';            

let ville;

if('geolocation' in navigator){
    navigator.geolocation.watchPosition((position)=>{
        let url         = `https://api.openweathermap.org/data/2.5/weather?lon=${position.coords.longitude}&lat=${position.coords.latitude}&appid=e4c8948075169555c1bc659c146d81b3&units=metric`;
        let requet      = new XMLHttpRequest();
        console.log(url);
        
        requet.open('GET',url);
        requet.responseType='json';
        requet.send();
        
        requet.onload = function(){
            if(requet.readyState === XMLHttpRequest.DONE){
                if(requet.status === 200){
                    let reponse = requet.response;
                    Maville.textContent = reponse.name;
                    temperature.textContent = reponse.main.temp;
                    description.textContent = reponse.weather[0].description;
                    pays.textContent = reponse.sys.country;
                    tempMax.textContent = reponse.main.temp_max;
                    tempMin.textContent = reponse.main.temp_min;
                    humidite.textContent = reponse.main.humidity;
                    console.log(reponse);
            }
        }
        };
    },erreur,options)
}
else{
    ville="abidjan";
    recevoirTemperature(ville)
}

var options ={
    enableHighAccuracy:true
}

button.addEventListener("click",function(e){
    e.preventDefault();
    ville = input.value;
    document.querySelector(".container1").style.transform='scale(1)';            
    document.querySelector(".container3").style.transform='scale(1)'; 
    recevoirTemperature(ville);
    input.value="";
});



function erreur(){
    ville='abidjan';
    recevoirTemperature(ville);
}





function recevoirTemperature(ville){
    let url         = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=e4c8948075169555c1bc659c146d81b3&units=metric`;
    let requet      = new XMLHttpRequest();
    
    requet.open('GET',url);
    requet.responseType='json';
    requet.send();
    
    requet.onload = function(){
        if(requet.readyState === XMLHttpRequest.DONE){
            if(requet.status === 200){
                let reponse = requet.response;
                Maville.textContent = reponse.name;
                temperature.textContent = reponse.main.temp;
                description.textContent = reponse.weather[0].description;
                pays.textContent = reponse.sys.country;
                tempMax.textContent = reponse.main.temp_max;
                tempMin.textContent = reponse.main.temp_min;
                humidite.textContent = reponse.main.humidity;
                console.log(reponse);
        }
    }
    };
}









    


