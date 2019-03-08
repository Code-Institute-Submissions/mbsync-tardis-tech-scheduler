queue()
    .defer(d3.csv, "data/salesforce_tardis_workload.csv")
    .await(makeGraphs);

function makeGraphs(error, tardisWorkload) {
    var ndx = crossfilter(tardisWorkload);
    var parseDate = d3.time.format("%d/%m/%Y").parse;

    tardisWorkload.forEach(function(d) {
        d.Date_Opened = parseDate(d.Date_Opened);
    });

    showFilterBySM(ndx);
    showCountOfDistCentre(ndx, "HH", "#count-of-hh");
    showCountOfDistCentre(ndx, "HW", "#count-of-hw");
    showCountOfDistCentre(ndx, "BA", "#count-of-ba");
    showCountOfDistCentre(ndx, "CV", "#count-of-cv");
    showCountOfDistCentre(ndx, "DB", "#count-of-db");
    showAllocationByCat(ndx);
    showAllocationBySM(ndx);
    showAllocationByDC(ndx);
    showRequestsOpenGraph(ndx);

    dc.renderAll();
}


//Filter
function showFilterBySM(ndx) {
    var dim = ndx.dimension(dc.pluck('Request_Status'));
    var group = dim.group();

    dc.selectMenu("#filter-by-sm")
        .dimension(dim)
        .group(group);
}


//Row Chart - By Service Manager
function showAllocationBySM(ndx) {
    var dim = ndx.dimension(dc.pluck('Service_Manager'));
    var group = dim.group();

    dc.rowChart("#work-by-sm")
        .width(600)
        .height(250)
        .dimension(dim)
        .group(group)
        .transitionDuration(1000)
        .elasticX(true);
}


//Number Box - Count open jobs By Distribution Centre
function showCountOfDistCentre(ndx, distCentre, elementId) {
    var countDistCentre = ndx.groupAll().reduce(
        function(p, v) {
            if (v.Request_Status === "Open") {
                p.count++;
                if (v.Distribution_Centre === distCentre) {
                    p.areDistCentre++;
                }
            }
            return p;
        },
        function(p, v) {
            if (v.Request_Status === "Open") {
                p.count--;
                if (v.Distribution_Centre === distCentre) {
                    p.areDistCentre--;
                }
            }
            return p;
        },
        function() {
            return { count: 0, areDistCentre: 0 };
        }
    );

    dc.numberDisplay(elementId)
        .formatNumber(d3.format(".0"))
        .transitionDuration(0)
        .valueAccessor(function(d) {
            if (d.count == 0) {
                return 0;
            }
            else {
                return (d.areDistCentre)
            }
        })
        .group(countDistCentre);
}


//Pie Chart - Purpose (Category)
function showAllocationByCat(ndx) {
    var dim = ndx.dimension(dc.pluck('Purpose'));
    var group = dim.group().reduceCount(function(d) {
        console.log(d.Request_Status);
        if (d.Request_Status === "Open") {
            return 1;
        }
    });

    dc.pieChart("#work-by-cat")
        .height(0)
        .radius(300)
        .transitionDuration(1500)
        .dimension(dim)
        .group(group);
}


//Bar Chart - Distribution Centre
function showAllocationByDC(ndx) {
    var dim = ndx.dimension(dc.pluck('Distribution_Centre'));
    var group = dim.group();

    dc.barChart("#work-by-dc")
        .width(600)
        .height(250)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(1000)
        .elasticY(true)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Distribution Centre")
        .yAxis().ticks(20);
}


//Line Graph - Requests in (last 90 days)
function showRequestsOpenGraph(ndx) {
    var date_dim = ndx.dimension(dc.pluck('Date_Opened'));
    var group = date_dim.group();
    var maxDate = date_dim.top(1)[0].Date_Opened;
    var minDate = new Date(maxDate);
    minDate.setDate(minDate.getDate() - 90);
    // var minDate = date_dim.bottom(1)[0].Date_Opened;

    dc.lineChart("#open_request_by_date")
        .width(600)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(date_dim)
        .group(group)
        .transitionDuration(1000)
        .elasticY(true)
        .x(d3.time.scale().domain([minDate, maxDate]))
        .xAxisLabel("Month")
        .yAxis().ticks(4);
}
