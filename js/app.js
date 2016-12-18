

$(document).ready(function(){
    var $wikiApi = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=";
    
    var myHtml = "" +
       "<div class='row'>" +
        "<div class='col-xs-12 col-sm-6 col-sm-offset-3'>" +
        "<a href='https://en.wikipedia.org/wiki/" +
        "{{ title }}' target='_blank'>" +
        "<h1>{{ title }}</h1></a>" +
        "<p>{{ snippet }}</p>" +
        "</div>" +
        "</div>"; 
   
    
    
    $('button').click(function(){
             
         var $userInput = $('#userinput').val();

         var $myUrl = $wikiApi + $userInput;
        
        
          $.ajax({
            type:'GET',
            url: $myUrl,
            dataType: 'jsonp',
            success: function(data){
                
                console.log(data);
                
                
                for (var i = 0; i < 10; i++){
                    
                var myEntry = {
                title : data.query.search[i].title.replace(/<(?:.|\n)*?>/gm, ''),
                snippet : data.query.search[i].snippet.replace(/<(?:.|\n)*?>/gm, '')
                              }
                
                $('#input').append(Mustache.render(myHtml, myEntry));
                
                
                 }//for loop
                
             } /// function(data)
        }); // ajax
        
    $('form').removeClass('middle').addClass('above'); 
    $('#remove').css("color","red");
    $('#remove').click(function(){
        window.location.reload();
    });
    return false;   // prevents request from being canceled 
    })
    
   
    
    
    // anything here... is run before any of the rest.

})


       
    



