var restaurantSearchNames = [
                "1-WOOLWICH",
                "2-SEVEN SISTERS",
                "7-STRAND",
                "8-VICTORIA",
                "11-SHEPHERDS BUSH",
                "13-WEMBLEY",
                "18-ROMFORD (1) - SOUTH ST.",
                "20-HOUNSLOW",
                "26-MAIDSTONE",
                "28-OXFORD STREET (1) NOS. 8-10",
                "36-EPSOM",
                "38-CHATHAM",
                "42-SWISS COTTAGE",
                "43-STAINES",
                "48-CLAPHAM",
                "53-WEST BROMWICH",
                "54-DERBY 1",
                "58-DARTFORD",
                "59-STEPHENSON PLACE - BIRMINGHAM",
                "63-KINGS PARADE",
                "70-WALSALL",
                "71-TELFORD 1",
                "72-BLACKPOOL 1",
                "75-BRIGHTON 1",
                "76-STOCKPORT 1",
                "78-TOTTENHAM",
                "83-PUTNEY",
                "89-PORTSMOUTH - COMMERCIAL ROAD",
                "98-LEAMINGTON SPA",
                "101-SOLIHULL 1",
                "104-BURY",
                "125-BATH",
                "129-LEIGH",
                "133-ORPINGTON",
                "140-GRAVESEND",
                "142-CHESTERFIELD 1",
                "149-WALTON-ON-THAMES",
                "153-STEVENAGE",
                "165-SIDCUP",
                "176-LEEDS 1",
                "179-BRIGHTON (2) - LONDON ROAD",
                "180-GREAT YARMOUTH",
                "182-BRISTOL (1) - THE HORSEFAIR",
                "183-PRESTON 1",
                "184-HANLEY",
                "187-KETTERING",
                "190-BETHNAL GREEN",
                "204-BRADFORD",
                "205-HARROGATE",
                "209-LICHFIELD",
                "211-METRO CENTRE",
                "217-KENDAL",
                "225-TAUNTON",
                "226-LEEDS 2",
                "232-LOUGHBOROUGH",
                "238-HALIFAX",
                "247-DUNDEE 1",
                "251-CORBY",
                "259-MIDDLESBOROUGH",
                "270-BLACKPOOL 2",
                "281-LEWISHAM",
                "282-DONCASTER 1",
                "289-WEST THURROCK (1) DRIVE THRU",
                "293-SALISBURY",
                "296-AYLESBURY (2) - BICESTER ROAD",
                "298-WARRINGTON 2 D/T",
                "315-STIRLING",
                "323-CANNOCK D/T",
                "324-COVENTRY (2) - CROSS CHEAPING",
                "325-CHESTER RD D/T",
                "328-EDMONTON",
                "339-CHORLTON D/T",
                "344-BROMBOROUGH D/T",
                "345-ST ANDREWS D/T (HULL)",
                "347-WELWYN GARDEN CITY",
                "350-ASHFORD",
                "351-SUTTON IN ASH D/T",
                "353-SALFORD D/T",
                "354-CRAMLINGTON D/T",
                "358-CHRISTCHURCH DRIVE THRU",
                "359-DUMBARTON D/T",
                "364-DUNDEE 2 D/T",
                "373-FOREST GATE DRIVE THRU",
                "374-VICTORIA PLACE",
                "393-WINCHESTER",
                "394-PARK ROAD D/T GATESHEAD",
                "398-ABERDEEN",
                "401-BRAMLEY D/T",
                "404-LONGBRIDGE D/T",
                "409-WHITEFIELD D/T",
                "411-COAST ROAD",
                "413-SHREWSBURY 2 D/T",
                "414-TELFORD 2 D/T",
                "415-FLEET",
                "417-WASHINGTON",
                "418-HILLSBOROUGH D/T",
                "426-SOLIHULL 2 D/T",
                "433-ST. MARTIN'S LANE",
                "435-FESTIVAL PARK D/T",
                "440-MILTON KEYNES 2 (KINGSTON D/THRU)",
                "442-HARTLEPOOL D/T",
                "449-HEDGE END SOUTHAMPTON",
                "460-PLYMOUTH",
                "461-ABBEY LANE D/T",
                "471-SHIRLEY 'DRIVE THRU' SOUTHAMPTON",
                "477-THORNTON HEATH DRIVE THRU",
                "482-CAPITOL CNTR D/T",
                "487-APPLEBY MAGNA D/T",
                "488-YARDLEY D/T",
                "493-KITTS GREEN D/T",
                "494-ERITH",
                "495-NEWPORT (2)",
                "498-CULVERHOUSE CROSS DRIVE THRU",
                "500-NOTTING HILL GATE",
                "501-TRENT VALE D/T",
                "502-CHESTER 2 D/T",
                "504-ALPERTON  (DRIVE THRU)",
                "508-MEADOW BANK D/T",
                "511-COALVILLE D/T",
                "522-CARDIFF NORTH (ASDA) DRIVE THRU",
                "523-COLTON D/T",
                "525-FELTHAM",
                "528-BLACKBURN 2 D/T",
                "533-AVONMEADS  DRIVE THRU",
                "534-IPSWICH (2) DRIVE-THRU",
                "535-DIDCOT DRIVE THRU",
                "544-SWAFFHAM DRIVE THRU",
                "549-HEMEL HEMPSTEAD (2)",
                "550-FARNBOROUGH (DRIVE-THRU)",
                "552-CONGLETON D/T",
                "554-TAUNTON (2)",
                "562-PATCHWAY",
                "570-MARSH MILLS",
                "578-CAPE HILL D/T",
                "583-YENTON D/T",
                "585-BURGESS HILL",
                "586-BEDFORD (NEWNHAM AVENUE)",
                "594-BOURGES BLVD (PETERBOROUGH)",
                "600-WOODALL SERVICES",
                "604-STREATHAM PLACE",
                "605-HALESOWEN",
                "606-THE YORKSHIRE GREY (ELTHAM)",
                "609-MELTON MOWBRAY",
                "610-FRADDON",
                "618-BUCKSBURN",
                "620-GREAT BRIDGE",
                "624-STROOD",
                "627-KINGS CROSS",
                "628-PITSEA D/THRU",
                "630-CHESHIRE OAKS (ELLESMERE PORT)",
                "633-FAMILY RESTURANTS LTD PONTEFRACT",
                "634-BECKTON",
                "636-GORGIE ROAD EDINBURGH",
                "639-ROTHWELL",
                "647-BRADFORD ROOLEY",
                "654-FINCHLEY LIDO",
                "662-BEDMINSTER",
                "664-LIVINGSTON",
                "671-RADCLIFFE",
                "672-HUNSLET",
                "678-HAGLEY RD BIRMINGHAM",
                "679-FORFAR",
                "681-GAPTON HALL",
                "682-BIRCHLEY",
                "687-WHITEHALL",
                "696-WORKINGTON",
                "697-SOUTHAMPTON ESPLANADE",
                "698-STEVENAGE (LEISURE)",
                "699-CROYDON VALLEY PARK",
                "710-BASINGSTOKE 2",
                "716-MANCHESTER DEBDALE PARK",
                "719-SHEFFIELD FARM ROAD",
                "724-CANTERBURY: STOUR RETAIL PARK",
                "725-WESTWOOD",
                "726-BRIMSDOWN",
                "727-CARDIFF GATE",
                "731-CANNOCK: CHURCH STREET",
                "733-WISHAW",
                "737-CHINGFORD",
                "738-TUNBRIDGE WELLS 2 (ROYAL VIC PLACE)",
                "739-SWAYTHLING : BLACK CAT",
                "742-BRENTFORD",
                "743-COSELEY",
                "745-PAISLEY 2",
                "746-YEOVIL",
                "747-WOLVERHAMPTON : FALLINGS PARK",
                "754-TROWBRIDGE",
                "758-LIVERPOOL ST JOHNS CENTRE",
                "765-FALMOUTH",
                "766-CARDIFF ST MARYS STREET",
                "773-FLINT",
                "776-PLYMOUTH: NEW GEORGE STREET 2",
                "782-NEW OSCOTT D/T",
                "784-MANSFIELD LEISURE PARK",
                "788-AIRDRIE",
                "790-EYE GREEN (PETERBOROUGH)",
                "793-DAVENTRY",
                "802-LOUGHBOROUGH 2 D/T",
                "804-CARDIFF BAY RETAIL PARK D/T",
                "805-CARLISLE 2",
                "817-ASHFORD 2",
                "820-BRADFORD FIVE",
                "827-COVENTRY (WEST ORCHARDS)",
                "828-CANVEY ISLAND",
                "831-BASILDON EASTGATE",
                "836-ROCHESTER",
                "838-CATFORD 2",
                "841-BLACKPOOL (SQUIRESGATE)",
                "842-WADDON (CROYDON)",
                "849-NORWICH - LONGWATER",
                "852-CORBY 2",
                "854-BELLSHILL",
                "855-RAYLEIGH",
                "857-BASILDON LEISURE",
                "859-SOUTHEND AIRPORT",
                "861-ROCHDALE (SANDBROOK)",
                "868-IPSWICH CARDINAL LEISURE PARK",
                "869-WELLINGBOROUGH (2)",
                "870-KINGSWINFORD D/T",
                "871-LEEDS - KIRKSTALL",
                "873-BRAMPTON HUT",
                "877-STREET",
                "887-TUNBRIDGE WELLS - CROWN HOUSE",
                "888-BRIGHTON - CHURCHILL SQ",
                "891-BILSTON",
                "892-NORTH CHEAM",
                "896-PLYMOUTH BILLACOMBE QUARRY",
                "908-BRISTOL (HENGROVE)",
                "910-WIMBLEDON (CENTRE COURT)",
                "918-WALSALL - REEDSWOOD",
                "926-GLASGOW ST ENOCH CENTRE",
                "929-TELFORD FORGE",
                "930-BRADFORD INGLEBY ROAD",
                "931-COVENTRY GALLAGHER PARK",
                "935-OLLERTON",
                "937-PETER LEE",
                "938-LEYLAND",
                "939-THAMESMEAD",
                "940-SPALDING",
                "945-LONDON COLNEY",
                "951-PORT TALBOT",
                "952-GLASGOW-ANNIESLAND",
                "953-NEWBURY-TOTHILL",
                "955-BERWICK-UPON-TWEED",
                "962-CRAMLINGTON  MOOR FARM",
                "963-NOTTINGHAM-ARNOLD",
                "965-GLASGOW LONDON ROAD",
                "967-COSHAM",
                "969-CRAYFORD",
                "970-BARNSLEY STAIRFOOT",
                "971-RUSHALL - GEORGIES",
                "973-BATH AVON HOUSE",
                "974-SUNDERLAND RYHOPE ROAD",
                "975-HAMILTON PALACE",
                "976-BASSETTS POLE",
                "987-CULLOMPTON",
                "990-PETERHEAD",
                "995-SUNDERLAND RETAIL PARK",
                "998-WHITEHAVEN",
                "1005-SOUTH HARROW",
                "1007-MERRYHILL  4",
                "1009-SPARKFORD",
                "1011-VICTORIA STATION",
                "1014-MALVERN RETAIL PARK",
                "1027-BARLBOROUGH",
                "1028-CATTERICK",
                "1029-CARDIFF EXCELSIOR ROAD",
                "1034-PRESCOT",
                "1039-TELFORD DONNINGTON",
                "1042-CORSTORPHINE",
                "1044-STIRLING DRIP ROAD",
                "1045-RYDE (I.O.W)",
                "1046-NEWCASTLE- 'SPORTSMAN'",
                "1061-MELKSHAM",
                "1063-SHAFTESBUR AVENUE(LONDON)",
                "1065-DUMFRIES",
                "1070-CANTERBURY",
                "1080-KIRKINTILLOCH",
                "1082-SWANSEA",
                "1086-PALMERS GREEN",
                "1090-CAMPERDOWN DUNDEE",
                "1091-HUNTINGDON",
                "1092-CHADDERTON (OLDHAM)",
                "1094-BURTON ON TRENT 3",
                "1095-SHEERNESS",
                "1096-QUEENSWAY",
                "1097-SMALL HEATH (BIRMINGHAM)",
                "1100-WEST QUAY (SOUTHAMPTON)",
                "1101-WALTHAM ABBEY",
                "1104-CONSETT",
                "1106-SALFORD-RIALTO",
                "1107-KINGS NORTON",
                "1113-RUGBY 2",
                "1114-THORNLIEBANK(GLASGOW)",
                "1115-LIVINGSTON (3)",
                "1116-DUDLEY CASTLEGATE",
                "1119-PORTSMOUTH (OCEAN RETAIL PARK)",
                "1127-COMMERCIAL ROAD",
                "1129-WARRINGTON (RIVER)",
                "1131-LEEMING BAR SERVICES",
                "1133-ASHINGTON",
                "1134-HIGHBURY-UPPER STREET",
                "1140-CLACTON 2",
                "1146-SITTINGBOURNE 2",
                "1147-WEST BROMWICH - HOLYHEAD ROAD",
                "1151-GILLINGHAM 2",
                "1154-HOLYWELL 'SINGING KETTLE'",
                "1158-PLATT BRIDGE WIGAN",
                "1159-LYTHAM",
                "1163-WATERLOO STATION",
                "1169-CREWE (2)",
                "1171-PETERSFIELD",
                "1175-HEDNESFORD",
                "1176-MINEHEAD",
                "1179-CLEETHORPES (2)",
                "1181-POTTERS BAR",
                "1183-SLEAFORD",
                "1187-ROCHESTER 2",
                "1188-RUSH GREEN",
                "1192-MIDDLESBOROUGH LEISURE PARK",
                "1194-FROME",
                "1197-CHORLEY DRIVE THRU",
                "1198-RICE LANE",
                "1202-STOCKPORT - SANDY LANE",
                "1205-SWADLINCOTE",
                "1209-BALBY",
                "1210-EDINBURGH (PRINCES MALL)",
                "1218-SUNDERLAND (DOUBLE MAXIM)",
                "1221-WOLVERHAMPTON (STAFFORD ROAD)",
                "1224-BOSTON 2",
                "1229-STRAITON",
                "1230-DARNLEY",
                "1232-REDHOUSE (DONCASTER)",
                "1234-STECHFORD",
                "1236-ACCRINGTON (2)",
                "1238-NORWICH AIRPORT",
                "1240-WORLE",
                "1241-BLACKWOOD",
                "1242-KETTERING (ORION WAY)",
                "1251-EXMOUTH",
                "1253-APSLEY",
                "1258-ECCLES - WEST ONE",
                "1259-ASHBY DE LA ZOUCH",
                "1261-SOUTHPORT OCEAN PLAZA",
                "1263-BOW",
                "1279-HIGH WYCOMBE ASDA",
                "1285-KNARESBOROUGH",
                "1288-ARCHWAY",
                "1292-CHICHESTER 3",
                "1297-DALTON PARK",
                "1302-MONKS REST LEICESTER",
                "1305-YATE",
                "1314-ASDA FULWOOD",
                "1316-SELBY",
                "1317-LEIGH - ASDA",
                "1318-SKELMERSDALE",
                "1322-ASDA KIRKCALDY",
                "1327-DUNFERMLINE - ASDA",
                "1331-ASDA MORLEY",
                "1339-CALCOT SAVACENTRE (2)",
                "1344-ASDA SOUTH WOODHAM FERRERS",
                "1345-NORWICH CHAPELFIELDS",
                "1346-GOSFORTH PARK",
                "1347-PORTISHEAD",
                "1352-COLCHESTER TOLLGATE",
                "1356-CRIBBS CAUSEWAY",
                "1363-WOOLWICH 2",
                "1370-WATFORD GAP MSA",
                "1373-NORTHAMPTON SRV SOUTH ROADCHEF",
                "1375-TIBSHELF ROADCHEF",
                "1378-BISHOP AUCKLAND 2",
                "1379-MINSTER",
                "1385-BROOMWOOD D/T",
                "1395-NORMANTON DESIGNER VILLAGE",
                "1397-NEWBRIDGE CAERPHILLY",
                "1398-MARKHAM VALE",
                "1399-ANDOVER",
                "1401-MARESFIELD",
                "1403-LANGLEY MILL",
                "1406-SANDBACH NORTHBOUND",
                "1417-SHIPTONTHORPE",
                "1423-KETTERING 2",
                "1425-THORNABY D/T",
                "1427-DARTFORD",
                "1434-ILKESTON",
                "1438-TOTTON RED LION",
                "1440-SYDENHAM",
                "1448-LOUGHBOROUGH 2",
                "1449-WOOLWICH CHURCH ST",
                "1450-STRETFORD",
                "1451-ROTHERHAM",
                "1453-DARLINGTON",
                "1455-TIBSHELF NORTH",
                "1461-CREWE DUNWOODY",
                "1466-SILVERBURN SHOPPING CENTRE",
                "1474-BIDEFORD",
                "1475-DERBY COMMERCIAL PARK",
                "1476-RUTHERGLEN",
                "1487-PORTSMOUTH NORTH HARBOUR",
                "1488-CHELMSFORD WESTWAY",
                "1490-BURNTWOOD",
                "1496-NOTTINGHAM NUTHAL",
                "1499-TONBRIDGE DT",
                "1504-GLASGOW GREAT WESTERN RETAIL PARK",
                "1516-NORTHWICH - MANCHESTER ROAD",
            ];

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


// Restaurant Search Box - checks if entry is in data 
function arrayContains(rest, restaurantSearchNames) {
    return (restaurantSearchNames.indexOf(rest) > -1);
}

    //Restaurant Search btn click - updates map, weekly table of work and nearby info base on restaurant
    $("#restSelector").click(function() {
        $(".no-data").html("");
        let restName = $("#restaurant-name").val();
        
        if (!restName || !arrayContains(restName, restaurantSearchNames)) {
            $(".no-data").html("Please select restaurant from the list");
            return
        }
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
    $('#active-tech2').html("").html("Technician: " + tech);
    $('#active-date2').html("").html("Week Commencing: " + date);
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