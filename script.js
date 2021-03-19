$(function(){
    $("#btn_action").click(function(){
        $.getJSON('https://api.icndb.com/jokes/random', function(data){
        $("#result").html(data.value.joke);
     $("#firstDiv").hide();
     var div = $("#jokes");
     $("#img").html('<img src="img/chuckNorris.jpg">');
     div.animate({left: '100px', fontSize: '2em'});
     $("#jokes").css({"background-color":"#43a0bd", "border": "2px solid rgb(27, 29, 29)", "border-radius": "20%","margin-top": "1rem"});
    });
    }); 
});

