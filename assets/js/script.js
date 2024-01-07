// Variables that needed to be declared before the page loaded.
var currentHour;
var userText = ['', '', '', '', '', '', '', '', ''];

$(function () {
  // Variables that needed to be declared after the page has loaded.
  var storedUserText = JSON.parse(localStorage.getItem('storedUserText'))

  for(i = 9; i <= 17; i++) {
    window['hour' + i] = $('#hour-' + i);
  }

  // Checks to see if the user has previously stored Work Day information
  if (storedUserText !== null) {
    // This for loop is used to dynamically create global variables for the div ids in HTML as well as set the text of the page to what the user previously had stored.
    for(i = 9; i <= 17; i++) {
      $('#hour-' + i).children('textarea').text(storedUserText[i - 9]);
    }
    // Sets the userText variable to what was stored in the users browser.
    userText = storedUserText;
  }
  // Clock function to display and keep track of current user system time.
  function clock() {
    headerClock = setInterval(function () {
      // Uses DayJS to create a variable that keeps track of the users current system time.
      var currentTime = dayjs().format('dddd, MMMM D, h:mm:ss a');
      // Displays the currentTime variable on this webpage.
      $('#currentDay').text(currentTime);
      
      // Creates a currentHour var using dayjs for conversion to 24 hour time.
      currentHour = dayjs().format('hh');
      // This var checks dispays whether it is am or pm.
      check12h = dayjs().format('a');

      // Converts currentHour to 24hour time
      // Checks to see if it is past noon AND not 12 (if it is 12 there is no need to add anything) if true then adds 12.
      if (check12h == 'pm' && currentHour !== 12) {
        currentHour = parseInt(currentHour) + 12;
      // If the conditions are not true then simply converts currentHour into an integer.
      } else {
        currentHour = parseInt(currentHour);
      }

      // Checks to see if it is midnight, if true sets currentHour to 00, staying true to 24h time.
      if (check12h == 'am' && currentHour == 12) {
        currentHour = currentHour - 12;
      }
      
      // Uses a for loop to assign class past to all hours prior in the day and ensure that present class is unassigned to the prior hour.
      for (i = 9; i < currentHour; i++) {
        $('#hour-' + i).addClass('past');
        $('#hour-' + i).removeClass('present');
      }

      // Assigns class present to the div of the current hour.
      $('#hour-' + currentHour).addClass('present');
      $('#hour-' + currentHour).removeClass('future');

      // Uses a for loop to assign class future to all hour divs greater than current hour.
      for (i = currentHour + 1; i <= 17; i++) {
        $('#hour-' + i).addClass('future');
        // And removes any of the other timeframe classes.
        $('#hour-' + i).addClass('present');
        $('#hour-' + i).addClass('past');
      }

    // Updates every second.
    }, 1000);
  }
  
  // Calls clock function.
  clock();

  // The following functions create event listeners for each hour button.
  hour9.children('button').on('click', function() {
    // Checks what the user has input in the text area of the click event div.
    userText[0] = hour9.children('textarea').val();
    // Logs updated userText
    console.log(userText);
    // Updates the storedUserText to the users new input, converting the array into a string as it does so.
    localStorage.setItem('storedUserText', JSON.stringify(userText));
  });
  hour10.children('button').on('click', function() {
    userText[1] = hour10.children('textarea').val();
    console.log(userText);
    localStorage.setItem('storedUserText', JSON.stringify(userText));
  });
  hour11.children('button').on('click', function() {
    userText[2] = hour11.children('textarea').val();
    console.log(userText);
    localStorage.setItem('storedUserText', JSON.stringify(userText));
  });
  hour12.children('button').on('click', function() {
    userText[3] = hour12.children('textarea').val();
    console.log(userText);
    localStorage.setItem('storedUserText', JSON.stringify(userText));
  });
  hour13.children('button').on('click', function() {
    userText[4] = hour13.children('textarea').val();
    console.log(userText);
    localStorage.setItem('storedUserText', JSON.stringify(userText));
  });
  hour14.children('button').on('click', function() {
    userText[5] = hour14.children('textarea').val();
    console.log(userText);
    localStorage.setItem('storedUserText', JSON.stringify(userText));
  });
  hour15.children('button').on('click', function() {
    userText[6] = hour15.children('textarea').val();
    console.log(userText);
    localStorage.setItem("storedUserText", JSON.stringify(userText));
  });
  hour16.children('button').on('click', function() {
    userText[7] = hour16.children('textarea').val();
    console.log(userText);
    localStorage.setItem('storedUserText', JSON.stringify(userText));
  });
  hour17.children('button').on('click', function() {
    userText[8] = hour17.children('textarea').val();
    console.log(userText);
    localStorage.setItem('storedUserText', JSON.stringify(userText));
  });
});