$(document).ready(function() {
  $.getJSON("/api/picker")
  .then(listRestaurants)

  $('#pickerInput').keypress(function(event) {
    if(event.which == 13) {
      addRestaurant();
    }
  })

  $('.list').on('click', 'span', function(e) {
    e.stopPropagation();
    removeRestaurant($(this).parent());
  })

  $('.list').on('click', 'li', function() {
    updateState($(this));
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
  var liRestaurant = $('<li class="task">'+restaurant.name+"<span>x</span></li>")
  .attr('id',restaurant._id).attr('removed', restaurant.removed);
  if(restaurant.removed) {
    liRestaurant.addClass("done");
  }
  $('.list').append(liRestaurant);
}

function removeRestaurant(restaurant) {
  var id = restaurant.attr('id');
  $.ajax({
    method: 'DELETE',
    url: "/api/picker/"+id
  })
  .then(function(res){
    console.log(res);
  })
  restaurant.remove();
}

function updateState(restaurant) {
  var id = restaurant.attr('id');
  var isRemoved = restaurant.attr('removed');
  var bool = !getBool(isRemoved);
  var data = {removed: bool};
  $.ajax({
    method: 'PUT',
    url: '/api/picker/'+id,
    data: data
  })
  .then(function(updated) {
    restaurant.toggleClass('done');
    restaurant.attr('removed', bool);
  })
}

function getBool(val) {
    return !!JSON.parse(String(val).toLowerCase());
}
