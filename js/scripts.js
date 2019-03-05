$(document).ready(function() {
  $("form").submit(function(event) {
    var food = $("input#food").val().toUpperCase();
    var color = $("input#color").val().toUpperCase();
    var place= $("input#place").val().toUpperCase();

    var favList = [];
    var lists = [];
    lists.push(food, color, place);
    lists.sort().toString();

   favList.push(lists[0], lists[1],lists[2]);

 $("#demo").append("<li>" + lists[0]+"</li>");
 $("#demo").append("<li>" + lists[1]+"</li>");
 $("#demo").append("<li>" + lists[2]+"</li>");
    //  $(".food").text(lists[0]);
    // $(".color").text(lists[1]);
    // $(".place").text(lists[2]);


    $("#list").show();
    $("form").hide();

    event.preventDefault();
  });
});
