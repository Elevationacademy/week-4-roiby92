const { css } = require("jquery")

$('#divClick').on('click',function(){
    $(this).css('background-color', '#f39c12') 
})

// $.ajax({
//     method:"GET",
//     url:'http://data.nba.net/10s/prod/v1/2016/players.json',
//     success: function(data){
//         console.log(data);
//     }
// })

const urllib = require('urllib')

urllib.request('http://data.nba.net/10s/prod/v1/2016/players.json', function(err, response){
    console.log(response.toString())
})