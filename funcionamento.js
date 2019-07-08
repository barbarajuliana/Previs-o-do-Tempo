city_name = "Salvador";

function requestWeather(city_name) {

    $.getJSON({
        url: "https://api.hgbrasil.com/weather",
        data: {
            key: '2b576db5',
            format: 'json-cors',
            woeid: '12511112',
            locale: "pt"
        },
        success: function( result ) {
            data = result.results;
            city_name = data.city_name;

            $( "#cidade" ) .html ("Clima em " + data.city_name);
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
    })
}

$( document ).ready(function() {
    requestWeather(city_name)
});