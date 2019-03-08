let techWorkData = [];
let locationArray = [];
let targetLat = "";
let targetLng = "";

let tableOfWork = "";
let tableMondayAM = "<td></td>";
let tableMondayPM = "<td></td>";
let tableTuesdayAM = "<td></td>";
let tableTuesdayPM = "<td></td>";
let tableWednesdayAM = "<td></td>";
let tableWednesdayPM = "<td></td>";
let tableThursdayAM = "<td></td>";
let tableThursdayPM = "<td></td>";
let tableFridayAM = "<td></td>";
let tableFridayPM = "<td></td>";

///////////////////////////////////  GET CSV DATA  ///////////////////////////////////

//Get CSV data from file and push to process
$(document).ready(function() {

    $.ajax({
        type: "GET",
        url: "data/salesforce_tardis_techwork.csv",
        dataType: "text",
        success: function(data) { processData(data); }
    });
});

//Process the CSV file and push results
function processData(allData) {
    let allTextLines = allData.split(/\r\n|\n/);
    for (let i = 0; i < allTextLines.length; i++) {
        let row = allTextLines[i].split(',');
        let col = [];
        for (let j = 0; j < row.length; j++) {
            col.push(row[j]);
        }
        techWorkData.push(col);
    }
    getScheduleTable(techWorkData, $("#scheduler-name").html(), $("#scheduler-date").html());
    initMap(techWorkData);

    //Tech selector click - updates map, weekly table of work and nearby info based on tech
    $("#techSelector li span").click(function() {
        var techSelected = $(this).html();
        var dateSelected = $("#scheduler-date").html();

        $('#weekly-scheduler').children().remove();
        $("#scheduler-name").html($(this).html());
        getScheduleTable(techWorkData, techSelected, dateSelected);
        initMap(techWorkData);
    });

    //Date selector click - updates map, weekly table of work and nearby info based on WC date
    $("#dateSelector li span").click(function() {
        var techSelected = $("#scheduler-name").html();
        var dateSelected = $(this).html()

        if (techSelected != 'SELECT TECH') {
            $('#weekly-scheduler').children().remove();
            $("#scheduler-date").html($(this).html());
            getScheduleTable(techWorkData, techSelected, dateSelected);
            initMap(techWorkData);
        }
    });

    //Restaurant Search btn click - updates map, weekly table of work and nearby info base on restaurant
    $("#restSelector").click(function() {
        $(".no-data").html("");
        if (!$("#restaurant-name").val()) {
            $(".no-data").html("Please enter a restaurant number");
        }
        else {
            restName = $("#restaurant-name").val();
        };
        for (let i = 0; i < techWorkData.length; i++) {
            if (restName === techWorkData[i][1]) {
                var techSelected = techWorkData[i][5];
                var dateFormatted = changeDateFormat(techWorkData[i][6]);
                var dateSelected = adjustDate(dateFormatted);

                $('#weekly-scheduler').children().remove();
                $("#scheduler-date").html(dateSelected);
                $("#scheduler-name").html(techSelected);
                getScheduleTable(techWorkData, techSelected, dateSelected);
                initMap(techWorkData);
            }
        };
    });
};

///////////////////////////////////  GOOGLE MAP API  ///////////////////////////////////

//Google Map API
function initMap(data) {
    var locations = [];
    locations = getMapLocations(data, $("#scheduler-name").html(), $("#scheduler-date").html());
    var mapLocations = locations.locationArray
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: {
            lat: locations.targetLat,
            lng: locations.targetLng
        }
    });
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; //input restaurants
    var markers = mapLocations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}


///////////////////////////////////  FILTER RESULTS TO SELECTERS  ///////////////////////////////////

//Process the data and selected tech and date in the page and push filtered results
function getScheduleTable(data, tech, date) {
    tableOfWork = "";
    tableMondayAM = "<td></td>";
    tableMondayPM = "<td></td>";
    tableTuesdayAM = "<td></td>";
    tableTuesdayPM = "<td></td>";
    tableWednesdayAM = "<td></td>";
    tableWednesdayPM = "<td></td>";
    tableThursdayAM = "<td></td>";
    tableThursdayPM = "<td></td>";
    tableFridayAM = "<td></td>";
    tableFridayPM = "<td></td>";
    for (let i = 0; i < data.length; i++) {
        let dateFormatted = changeDateFormat(data[i][6]);
        dateFrom = changeDateFormat(date);
        dateTo = addDays(dateFrom, 7);
        if (data[i][5] === tech && dateFormatted >= dateFrom && dateFormatted < dateTo) {
            if (data[i][7] === "AM") {
                dateFormatted.getDay();
                makeTableAM(data[i], dateFormatted.getDay());
            }
            else {
                makeTablePM(data[i], dateFormatted.getDay());
            }
        }
    };
    tableOfWork = '<tr><th scope="row">AM</th>' + tableMondayAM + tableTuesdayAM + tableWednesdayAM + tableThursdayAM + tableFridayAM + '</tr><tr><th scope="row">PM</th>' + tableMondayPM + tableTuesdayPM + tableWednesdayPM + tableThursdayPM + tableFridayPM + '</tr>'
    
    $('#weekly-scheduler').append(tableOfWork);
    $('#active-tech').html("").html("Technician: " + tech);
    $('#active-date').html("").html("Week Commencing: " + date);
}

//Convert date with / into system date
function changeDateFormat(returnDate) {
    try {
        var dayfield = returnDate.split('/')[0];
        var monthfield = returnDate.split('/')[1];
        var yearfield = returnDate.split('/')[2];
        var result = new Date(yearfield, monthfield - 1, dayfield);
        return result;
    }
    catch (e) {
        return
    }
}

//Add days to create a date range
function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

//Adjust date to WC date for restaurant search
function adjustDate(date) {
    var result = new Date(date);
    var dayAdjust = result.getDay() - 1;

    result.setDate(result.getDate() - dayAdjust);

    var dd = result.getDate();
    var mm = result.getMonth() + 1;
    var yyyy = result.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    result = dd + '/' + mm + '/' + yyyy;
    return result;
}

//Process filtered results into html table
function makeTableAM(data, day) {
    if (day == 1) {
        tableMondayAM = "<td>" + data[1] + "</td>";
    }
    else if (day == 2) {
        tableTuesdayAM = "<td>" + data[1] + "</td>";
    }
    else if (day == 3) {
        tableWednesdayAM = "<td>" + data[1] + "</td>";
    }
    else if (day == 4) {
        tableThursdayAM = "<td>" + data[1] + "</td>";
    }
    else if (day == 5) {
        tableFridayAM = "<td>" + data[1] + "<td>";
    }
    return
}

//Process filtered results into html table
function makeTablePM(data, day) {
    if (day == 1) {
        tableMondayPM = "<td>" + data[1] + "</td>";
    }
    else if (day == 2) {
        tableTuesdayPM = "<td>" + data[1] + "</td>";
    }
    else if (day == 3) {
        tableWednesdayPM = "<td>" + data[1] + "</td>";
    }
    else if (day == 4) {
        tableThursdayPM = "<td>" + data[1] + "</td>";
    }
    else if (day == 5) {
        tableFridayPM = "<td>" + data[1] + "<td>";
    }
    return
}


///////////////////////////////////  MAP DATA EXTRACTION & TARGETTING  ///////////////////////////////////

//Extract Goodgle Map Locations
function getMapLocations(data, tech, date) {
    let j = 0;
    locationArray = [];
    targetLat = "";
    targetLng="";

    for (let i = 0; i < data.length; i++) {
        let dateFormatted = changeDateFormat(data[i][6]);
        var dateFrom = changeDateFormat(date);
        var dateTo = addDays(dateFrom, 7);
        if (data[i][5] === tech && dateFormatted >= dateFrom && dateFormatted < dateTo) {
            if (dateFormatted.getDay() == 1 && data[i][7] === "AM") {
                targetLat = parseFloat(data[i][3]);
                targetLng = parseFloat(data[i][4]);
            }
            locationArray[j] = { lat: parseFloat(data[i][3]), lng: parseFloat(data[i][4]) };
            j++;
        }
    }
    if (targetLat === "") {
        targetLat = 51.509865;
        targetLng = -0.118092;
    }
    return { locationArray, targetLat, targetLng };
}
