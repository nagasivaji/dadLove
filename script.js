// Enter detils...
// date of birth as format 
const dateOfBirth = "Sep 01, 2001 11:23:41"
// birthday format in "Feb 27"
// const Birthday = "Sep 01";
const Birthday = dateOfBirth.substring(0, 6);




// Stting time interval for every one second
// Update the count down every 1 second
setInterval(function() {


    // Getting current date
    const date = new Date();
    //console.log(date);

    // getting today day
    const todaysDate = String(date).substring(4, 10);
    console.log(todaysDate);


    // From current date getting the current yearfrom that calculating nextyear
    const nextYear = Number(String(date).substring(11, 15))+1;
    //console.log(nextYear);

    
    // Making birthday date format ->  Ex: "Feb 27, 2023 23:59:59" 
    const endDate = Birthday + ", " + nextYear + " 23:59:59";
    console.log(endDate);


    // parsing end of the date to time format
    var countDownDate = new Date(endDate).getTime();


    // Get today's current date and time
    var currentDate = new Date().getTime();


    // Find the time left between currentDate and the count down date
    var timeLeft = countDownDate - currentDate;
    

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24)) -1;
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


    // If the count down is not over, displaying timer
    if (todaysDate != Birthday) {
        
        // display timer area 
        document.getElementById("TimerArea").style.display = 'block';

        // display timer
        document.getElementById("timer").innerHTML =
        "<div class=\"days\"> \
        <div class=\"numbers\">" + days + "</div>days</div> \
        <div class=\"hours\"> \
        <div class=\"numbers\">" + hours + "</div>hours</div> \
        <div class=\"minutes\"> \
        <div class=\"numbers\">" + minutes + "</div>minutes</div> \
        <div class=\"seconds\"> \
        <div class=\"numbers\">" + seconds + "</div>seconds</div> \
        </div>";

        document.getElementById("birthDay").innerHTML = "Waiting for " + Birthday +" "+ nextYear;

    } else // If the count down is over, write some text
    {   
        // display wish area
        document.getElementById("wishArea").style.display = 'flex';
    }

}, 1000);











