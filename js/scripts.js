$(document).ready(function() {
  $("form").submit(function(event) {

    var lists = [];

    var food = $("input#food").val();
    var color = $("input#color").val();
    var place= $("input#place").val();

    var favList = [];

    lists.push(food, color,place);
   favList.push(lists[0], lists[1],lists[2]);

    $(".food").text(lists[0]);
    $(".color").text(lists[1]);
    $(".place").text(lists[2]);


    $("#list").show();
    $("form").hide();

    event.preventDefault();
  });
});
