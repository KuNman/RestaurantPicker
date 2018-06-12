$(document).ready(function() {
  $.getJSON("/api/picker")
  .then(listRestaurants)


  $('#pickerInput').keypress(function(event) {
    if(event.which == 13) {
      addRestaurant();
    }
  })

  $('.list').on('click', 'span', function() {
    removeRestaurant($(this).parent());
  })
})

function listRestaurants(restaurants) {
  restaurants.forEach(function(restaurant){
    addLiRestaurant(restaurant)
  })
}

function addRestaurant() {
  var inputValue = $("#pickerInput").val();
  $.post("/api/picker", {name: inputValue})
  .then(function(newRestaurant){
    $("#pickerInput").val('');
    addLiRestaurant(newRestaurant)
  })
  .catch(function(error) {
    console.log(error);
  })
}

function addLiRestaurant(restaurant) {
  var liRestaurant = $('<li class="task">'+restaurant.name+"<span>x</span></li>").attr('id',restaurant._id);
  if(restaurant.removed) {
    liRestaurant.addClass("done");
  }
  $('.list').append(liRestaurant);
}

function removeRestaurant(todo) {
  var id = todo.attr('id');
  $.ajax({
    method: 'DELETE',
    url: "/api/picker/"+id
  })
  .then(function(res){
    console.log(res);
  })
  todo.remove();
}
