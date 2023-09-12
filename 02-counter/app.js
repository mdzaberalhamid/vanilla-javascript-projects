// alert("Hi, this is a test!");

// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    // console.log(btn);

    btn.addEventListener('click', function(e){
        // console.log(e.currentTarget.classList);
        
        const classes = e.currentTarget.classList;
        
        if (classes.contains('decrease')) {
            count--;
            // console.log(count);
        }
        else if (classes.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "green";
        }
        else if (count < 0) {
            value.style.color = "red";
        }
        else if (count == 0) {
            value.style.color = "#222";
        }

        value.textContent = count;
    });
});
