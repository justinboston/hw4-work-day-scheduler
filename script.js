  $(document).ready(function () {

    // Dsplay current day & date
    var displayTime = document.querySelector("#currentDay");
    var currentTime = dayjs().format("dddd, MMMM D, YYYY");
  
    displayTime.textContent = currentTime;
  
    // Click event listener for user text input
    $(".saveBtn").on("click", function () {
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      // Save text input to local storage
      localStorage.setItem(time, text);
    });
  
    function hourTracker() {
      // Get current hour
      var currentHour = dayjs().hour();
    
      // Loop over time blocks
      $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
    
        // Check the time and add the classes for background indicators
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
    hourTracker();

  function displayText() {
    $(".time-block").each(function () {
      var blockHour = $(this).attr("id");
      $(this).children(".description").val(localStorage.getItem(blockHour));
    });
  }
  displayText();
  
  });