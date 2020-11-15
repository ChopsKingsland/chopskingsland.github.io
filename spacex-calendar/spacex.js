const url = 'https://api.spacexdata.com/v3/launches/upcoming?sort=launch_date_unix';

let jsonData;

$.ajaxSetup({
    async: false
});

function getJSON() {
    $.getJSON(url, function(data) {
        jsonData = data;
    }); 
    return jsonData;
}


getJSON()

upc1mn = jsonData[1]["mission_name"]
upc1dt = formatDate(new Date(jsonData[1]["launch_date_utc"].split("T")[0]))

// console.log(jsonData.length)
var numLaunches = jsonData.length
var upcLaunches = {};
var i;

for (i = 0; i < numLaunches; i++) {
    // upcLaunches.push({
    //     key:   [jsonData[i]["mission_name"]],
    //     value: formatDate(new Date(jsonData[i]["launch_date_utc"].split("T")[0]))
    // });

    upcLaunches[jsonData[i]["mission_name"]] = jsonData[i]["launch_date_utc"].split("T")[0]

    // upcLaunches[jsonData[i]["mission_name"]] = formatDate(new Date(jsonData[i]["launch_date_utc"].split("T")[0]))
}

var sorted = [];
for(var key in upcLaunches) {
    sorted[sorted.length] = key;
}
console.log(sorted.sort());

// alert(upcLaunches)

// console.log(sort_object(upcLaunches))

// var upcLaunches = {
//     [jsonData[1]["mission_name"]]: formatDate(new Date(jsonData[1]["launch_date_utc"].split("T")[0]))
// };

console.log(upcLaunches)

var date = new Date(jsonData[0]["launch_date_utc"]).getTime();

// date = jsonData[0]["launch_date_utc"].replace("T", ", ").slice(0, -5)
document.getElementById("mission").innerText = jsonData[0]["mission_name"]
document.getElementById("craft").innerText = jsonData[0]["rocket"]["rocket_name"]
document.getElementById("pad").innerText = jsonData[0]["launch_site"]["site_name_long"]
document.getElementById("date").innerText = jsonData[0]["launch_date_utc"].replace("T", ", ").slice(0, -5)



document.getElementById("upcMiss1").innerText = jsonData[1]["mission_name"]
document.getElementById("upcMiss2").innerText = jsonData[2]["mission_name"]
document.getElementById("upcMiss3").innerText = jsonData[3]["mission_name"]
document.getElementById("upcMiss4").innerText = jsonData[4]["mission_name"]

document.getElementById("upcDate1").innerText = formatDate(new Date(jsonData[1]["launch_date_utc"].split("T")[0]))
document.getElementById("upcDate2").innerText = formatDate(new Date(jsonData[2]["launch_date_utc"].split("T")[0]))
document.getElementById("upcDate3").innerText = formatDate(new Date(jsonData[3]["launch_date_utc"].split("T")[0]))
document.getElementById("upcDate4").innerText = formatDate(new Date(jsonData[4]["launch_date_utc"].split("T")[0]))

// var countDate = new Date('2020-11-15, 00:49:00').getTime(); //needs to be date from API/JSON

function countdown() {
    var now = new Date().getTime();
    gap = date - now;

    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / (day));
    var h = Math.floor((gap % (day)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / (second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

function formatDate(lDate) {
    const inputDate = new Date(lDate);
  
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July',
       'August', 'September', 'October', 'November', 'December'
    ];
  
    const day = inputDate.getDate();
    const monthIndex = inputDate.getMonth();
    const year = inputDate.getFullYear();
  
    // return day + ' ' + monthNames[monthIndex] + ' ' + year;
    return `${day} ${monthNames[monthIndex]} ${year}`;
}

function sort_object(obj) {
    items = Object.keys(obj).map(function(key) {
        return [key, obj[key]];
    });
    items.sort(function(first, second) {
        return second[1] - first[1];
    });
    sorted_obj={}
    $.each(items, function(k, v) {
        use_key = v[0]
        use_value = v[1]
        sorted_obj[use_key] = use_value
    })
    return(sorted_obj)
} 


setInterval(function() {
    countdown();
}, 1000)
setInterval(function() {
    getJSON();
}, 300000)

// var lastest = launches[0];
// console.log(latest);
// console.log(data);