(function () {
    let hours = document.querySelector(".Hours");
    let minutes = document.querySelector(".Minutes");
    let secounds = document.querySelector(".Secounds");

    let startBtn = document.querySelector(".start");
    let stopBtn = document.querySelector(".stop");
    let resetBtn = document.querySelector(".Reset");

    let countdownTimer = null;

    startBtn.addEventListener("click", function() {
        if (hours.value == 0 && minutes.value == 0 && secounds.value == 0) return;          

        function startInterval() {
            startBtn.style.display = "none";
            stopBtn.style.display = "initial";

            countdownTimer = setInterval(() => {
                timer();
            }, 1000);
        }

        startInterval();
    });

    function stopInterval(state) {
 startBtn.innerHTML = state === "pause" ? "Continue" : "Start";    

        startBtn.style.display = "initial";
        stopBtn.style.display = "none";
        clearInterval(countdownTimer);
    }

    function timer() {
        if (secounds.value > 60) {
            minutes.value++;
            secounds.value = parseInt(secounds.value) - 59;
        }
        if (minutes.value > 60) {
            hours.value++;
            minutes.value = parseInt(minutes.value) - 60;
        }

        if (hours.value == 0 && minutes.value == 0 && secounds.value == 0){
            hours.value = "";
            minutes.value = "";
            secounds.value = "";
            stopInterval();

        } else if (secounds.value != 0) {
            secounds.value = `${secounds.value <= 10 ? "0" : ""}${secounds.value - 1}`;
        } else if (minutes.value != 0 && secounds.value == 0){
            secounds.value = 59;
            minutes.value = `${minutes.value <= 10 ? "0" : ""}${minutes.value - 1}`;
        }
        else if (hours.value != 0 && minutes.value == 0){
            minutes.value = 59;
            hours.value = `${hours.value <= 10 ? "0" : ""}${hours.value - 1}`;
        }
    }
    stopBtn.addEventListener("click",function () {
        stopInterval("pause")
         })

         resetBtn.addEventListener("click", function() {
            hours.value = "";
            minutes.value = "";
            secounds.value = "";

            stopInterval(); 
         });
})(); 