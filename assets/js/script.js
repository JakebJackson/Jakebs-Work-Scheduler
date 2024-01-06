// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentHour;
var userText = ["", "", "", "", "", "", "", "",];
var saveButtons = $('.saveBtn');

$(function () {
  for(i = 9; i < 17; i++) {
    console.log($('#hour-' + i));
    $('#hour-' + i).children('button').on('click', function() {
      userText[0] = $('#hour-' + i).children('textarea').val();
      console.log($('#hour-' + i).children('textarea').val());
    });
  }

  // console.log(saveBtn1);


  function clock() {
    headerClock = setInterval(function () {
      var currentTime = dayjs().format('MMM D, hh:mm:ss a');
      $('#currentDay').text(currentTime);
      currentHour = dayjs().format('hh');
      // Since this project only uses 9am-5pm I can create a psuedo '24h clock'
      // that is only relevant to the projects time parameters, if I needed to
      // make an actual 24h clock I would just check to see if a seperate dayjs() 
      // variable was AM or PM and apply the same logic to manipulate the 'currentHour' that way,
      // if I did it this way I would also need to add logic to check if it was 12am and subtract 12
      // creating a true 24h clock.
      if (currentHour < 8) {
        currentHour = parseInt(currentHour) + 12;
      }
      console.log(currentHour);
      curHourDiv = $('#hour-' + currentHour);
      return currentHour, curHourDiv;
  
    }, 1000);
  }
  

  clock();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

});




/* function handleSaveToLocal(event) {
  userText = saveBtn.parent().children('textarea').text();
  console.log(userText + "test");
}

saveBtn.addEventListener('click', handleSaveToLocal);
*/