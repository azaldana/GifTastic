var topics = ["The Office", "Family Guy", "Parks and Rec", "New Girl", "Blackish", "American Dad", "Spongebob", "Friends", "The Good Place", "Modern Family", "Saturday Night Live", "Arrested Development", "Bobs Burgers", "Community", "Will and Grace", "Broad City", "30 Rock", "Big Bang Theory", "Seinfeld"];

var app = $('#shows-view');
var still ='';
var animate = '';

function displayShowInfo(){

var show = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=x0TrPIieCu31Wx0wyWCEQ1cXvnEaYKaC&limit=10";

$.ajax ({
    url: queryURL,
    method: 'GET'
}).then(function(response){
    
var i=0;
var results= response.data;
app.empty();

        for(i=0; i<results.length; i++) {

        var $div = $('<div class="tv-show">');

        var $rating = results[i].rating;
        var $p = $('<p>').text("Rating: " + $rating);

        $div.prepend($p);

        still = results[i].images.fixed_height_still.url;
        animate = results[i].images.fixed_height.url;

        var $img = $('<img>');

        $img.attr('data-still', still);
        $img.attr('data-animate', animate);
        $img.attr('src', still);
        $img.attr('data-state', 'still');

        $div.append($img);

        $('#shows-view').append($div);

            $img.on("click",function(){

                var state = $(this).attr('data-state');
    
                console.log("state", state);
    
                if (state === 'still'){
                var dataAnimate = $(this).attr('data-animate');
                $(this).attr('src', dataAnimate);
                $(this).attr('data-state', 'animate');
                console.log("animate url", dataAnimate);
           
                } else {
                var dataStill = $(this).attr('data-still');
                $(this).attr('src', dataStill);
                $(this).attr('data-state', 'still');
                }
            })
    
        }

    })
}

function renderButtons(){
    $("#buttons-view").empty();

    for(var i =0; i < topics.length; i++){
        var a = $("<button>");
        a.addClass("show");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
    }
}

$("#add-show").on("click", function(event) {
    app.empty();
    event.preventDefault();
    var tv = $("#tv-input").val().trim();
    topics.push(tv);
    renderButtons();
    
})

$(document).on("click", ".show", displayShowInfo);

renderButtons();
