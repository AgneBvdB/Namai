const countDate = document.getElementById("user-date")
let counter = document.getElementById("counter");

const intervalCounter = setInterval(function() {
  let currentDate = new Date().getTime();
  let distance = countDate - currentDate;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 *60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  counter.innerText = `${days} DAYS ${hours} HOURS ${minutes} MINUTES ${seconds} SECONDS`;

  if(distance < 0){
    clearInterval(intervalCounter);
    counter.innerText = "Finished!";
  }
}, 1000);
