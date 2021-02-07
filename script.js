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
            temp.text("Temperature: " + data.main.temp + "F");
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

            /*
            for (var i = 0; i < pizza.length; i++) {
                var listItem = document.createElement('li');
                listItem.textContent = data[i].html_url;
                repoList.appendChild(listItem);
            }
            */
        });
}

$('.btn').click(function (event) {
    event.preventDefault();
    getApi();
    forecast();
});