var btn = $('.btn');
var searchedcities = [];

function getApi() {

    var requestCity = $(".form-control").val();
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + requestCity + '&units=imperial&APPID=528971895762ed9b41f19f5e2829e9c0';
    console.log(requestCity);
    console.log($(".form-control"));

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            var city = $("#city");
            city.text(requestCity);
            var temp = $("#temp");
            temp.text("Temperature: " + data.main.temp + "F" + data.weather[0].icon);
            var humidity = $("#humidity");
            humidity.text("Humidity: " + data.main.humidity + "%");
            var wind = $("#wind");
            wind.text("Wind Speed: " + data.wind.speed + "mph");
        });
    if (localStorage.getItem("searchedcities") === null) {
        searchedcities.push(requestCity);
        localStorage.setItem("searchedcities", JSON.stringify(searchedcities));
    } else {
        searchedcities = JSON.parse(localStorage.getItem("searchedcities"));
        searchedcities.push(requestCity);
        localStorage.setItem("searchedcities", JSON.stringify(searchedcities));
    };
}

function forecast() {

    var requestCity = $(".form-control").val();
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + requestCity + '&units=imperial&APPID=528971895762ed9b41f19f5e2829e9c0';
    console.log(requestCity);
    console.log($(".form-control"));

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (pizza) {
            console.log(pizza);

            var temp1 = $("#tempfore1");
            temp1.text("Temperature: " + pizza.list["3"].main.temp + "F");
            var hum1 = $("#humfore1");
            hum1.text("Humidity: " + pizza.list["3"].main.humidity + "%");

            var temp2 = $("#tempfore2");
            temp2.text("Temperature: " + pizza.list["11"].main.temp + "F");
            var hum2 = $("#humfore2");
            hum2.text("Humidity: " + pizza.list["11"].main.humidity + "%");

            var temp3 = $("#tempfore3");
            temp3.text("Temperature: " + pizza.list["18"].main.temp + "F");
            var hum3 = $("#humfore3");
            hum3.text("Humidity: " + pizza.list["18"].main.humidity + "%");

            var temp4 = $("#tempfore4");
            temp4.text("Temperature: " + pizza.list["25"].main.temp + "F");
            var hum4 = $("#humfore4");
            hum4.text("Humidity: " + pizza.list["25"].main.humidity + "%");

            var temp5 = $("#tempfore5");
            temp5.text("Temperature: " + pizza.list["32"].main.temp + "F");
            var hum5 = $("#humfore5");
            hum5.text("Humidity: " + pizza.list["32"].main.humidity + "%");

        });
}

$('.btn').click(function (event) {
    event.preventDefault();
    getApi();
    forecast();
});