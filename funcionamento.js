function requestWeather(city_name) {

    $.getJSON({
        url: "https://api.hgbrasil.com/weather",
        data: {
            key: '1c8aaae4',
            format: 'json-cors',
            locale: "pt",
            city_name : city_name
        },

        success: function( result ) {

    if(result.by == "default") {
        alert("Cidade não localizada")
    } else {

            data = result.results;
            city_name = data.city_name;

            $( "#NomeCidade" ) .html ("Clima em " + data.city_name);
            $( "#temp" ) .html ("Temperatura atual: " + data.temp + "°C");
            $( "#senT" ) .html ("Descrição: " + data.description);
            $( "#Vento" ) .html ("Velocidade do vento: " + data.wind_speedy);
            $( "#Ceu" ) .html ("Céu está de " + data.currently);
            $( "#Umida" ) .html ("Umidade: " + data.humidity + "%");
            $( "#NasSol" ) .html ("Nascer do sol: " + data.sunrise);
            $( "#PorSol" ) .html ("Pôr do sol: " + data.sunset); 
            var url_img = "https://assets.hgbrasil.com/weather/images/" + data.img_id + ".png";
            $("#weather-img").attr("src",url_img);
    }   
        }

    })
}
$( document ).ready(function(){
    $('#city_input').on('keypress', function(e) {
        if(e.which == 13) {
            var city_name = $("#city_input").val()
                requestWeather(city_name);
            }
}); 
});





