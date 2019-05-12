$(document).ready(function () {

// var starwarCharacters = ["Luke Skywalker", "Darth Vader", "Chewbacca", "Obi-Wan Kenobi", "Han Solo", "R2-D2", "Princess Leia", "Yoda"];

$("button").on("click", function() {

    var char = $(this).data("data-char");
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      char + "&api_key=0xvBEhvx8XSk6pcmOSuxbgDJHyCm2aIs&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {      

      console.log(response);

        var results = response.data

        for (var i = 0; i < results.length; i++) {
    
          var charDiv = $("<div>");

          var p = $("<p>").text("Results : " + results[i].rating)
            
            charImage = $("<img>")
            charImage.attr("src" , results[i].images.fixed_height.url)
            charImage.attr('data-animate', results[i].images.fixed_height.url)
            charImage.attr('data-still', results[i].images.fixed_height.url)

            charDiv.append(p)
            charDiv.append(charImage)
    
            $(".gifs-appear-here").prepend(charDiv)

        };



    })

})

})

    