$(document).ready(function(){
  console.log("reload");

  //TODO ajax calls
  //TODO onbuttonclicks

  // get DOM elements
  const $submitBtn = $('#submitBtn');
  const $addBtn = $('<button>');

  $submitBtn.on('click', function(e) {
    e.preventDefault();
    console.log("click");

    let newBurger = $("#newBurger").val();

    $.ajax({
      url: '/api/burger',
      method: 'POST',
      data: {
        name: newBurger
      }
    }).then(function(response) {
      console.log(response);
      console.log("adding burger");
      location.reload();
      // reload the window
    });
  });
 

  // Get from index "this.burger_name", PUT into different part of page. Take Devour=true to Devour=false
  $(".devourBtn").on("click", function(e) {
    e.preventDefault();
    let burgerId = $(this).attr("name");
    console.log(burgerId);
    $.ajax({
      url: '/api/burger/' + burgerId,
      method: 'PUT',
    }).then(function(res){
      console.log(res);
      location.reload();
    }).fail(function(err){
      console.log(err);
    });
  })

})