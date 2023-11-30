function fn() {
    var city = document.getElementById("city").value;
    var address = document.getElementById("address").value;

    document.getElementById("mapFrame").src = "https://www.google.com/maps?q=" + address + "," + city + "&output=embed";
}
