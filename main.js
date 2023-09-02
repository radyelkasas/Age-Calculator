// Inputs
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');


// Outputs
let outDays = document.getElementById('days');
let outMonths = document.getElementById('months');
let outYears = document.getElementById('years');


//Form
let form = document.querySelector('form');

form.addEventListener("submit", handleSubmit);

let date = new Date();
let dateDay = date.getDate();
let dateMonth = date.getMonth() + 1;
let dateYear = date.getFullYear();


let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function Validate() {
    const inputs = document.querySelectorAll('input');
    let validetor = true;
    inputs.forEach((i)=> {
        const parent = i.parentElement;
        if(!i.value){
            i.style.border = "1px solid red";
            validetor = false;
        }else if(month.value > 12){
            month.style.border = "1px solid red";
            validetor = false;
        }else if (day.value > 31){
            day.style.border = "1px solid red";
            validetor = false;
        }else{
          i.style.border = "none";
          validetor = true;
        }
    })
    return validetor;
}
function handleSubmit(e){
  e.preventDefault();
  if(Validate()){
    if(day.value > dateDay){
      dateDay = dateDay + months[dateMonth - 1];
      dateMonth = dateMonth - 1;
    }
    if(month.value > dateMonth) {
      dateMonth = dateMonth + 12;
      dateYear = dateYear - 1;
    }
    const d = dateDay - day.value;
    const m = dateMonth - month.value;
    const y = dateYear - year.value;
    
    outDays.innerHTML = d;
    outMonths.innerHTML = m;
    outYears.innerHTML = y;
  }
}
