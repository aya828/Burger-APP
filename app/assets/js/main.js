$(document).ready(function(){
  //TODO ajax calls
  //TODO onbuttonclicks

  // get DOM elements
  const $submitBtn = $('#submitBtn');
  const $addBtn = $('.add-btn');

  $submitBtn.on('click', function(e) {
    e.preventDefault();
    console.log("click");

    let newBurger = $("#newBurger").val();

    $.ajax({
      url: 'http://localhost:8080/api/burger',
      method: 'POST',
      data: {
        newBurger
      }
    }).then(function(response) {
      console.log(response);
      console.log("adding burger");
      addBurger();
    });
  });

  function addBurger() {
    $.ajax({
      url: 'http://localhost:8080/api/burger',
      method: 'GET',
      data: {
        burger_name
      }
    }).then(function(response) {
      console.log("working");
      const line = $(".burger");
      line.append(response);
    })
  }

})