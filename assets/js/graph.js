queue()
    .defer(d3.csv, "data/salesforce_tardis_workload.csv")
    .await(makeGraphs);

function makeGraphs(error, tardisWorkload) {
    var ndx = crossfilter(tardisWorkload);
    var parseDate = d3.time.format("%d/%m/%Y").parse;
    tardisWorkload.forEach(function(d) {
        d.Date_Opened = parseDate(d.Date_Opened);
    });

    //    showCountOfDistCentre(ndx, "HH", "#count-of-hh");
    showAllocationByCat(ndx);
    showAllocationBySM(ndx);
    showAllocationByDC(ndx);
    showRequestsOpenGraph(ndx);

    dc.renderAll();
}

//Filter
function showFilterBySM(ndx) {
    var dim = ndx.dimension(dc.pluck('Service_Manager'));
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
        .transitionDuration(500)
}

//Number Box - Count By Distribution Centre


//Pie Chart - Purpose (Category)
function showAllocationByCat(ndx) {
    var dim = ndx.dimension(function(d) {
        if (d.Request_Status == "Open") {
            // console.log(d.Purpose);
            return d.Purpose;
        }
    });
    // var group = dim.group().reduce(
    //     function(p, v) {
    //         if (v.Purpose in p.Purpose)
    //             p.Purpose[v.project]++;
    //         else p.Purpose[v.project] = 1;
    //         return p;
    //     },

    //     function(p, v) {
    //         p.Purpose[v.project]--;
    //         if (p.Purpose[v.project] === 0)
    //             delete p.projects[v.project];
    //         return p;
    //     },

    //     function() {
    //         return { projects: {} };
    //     });

    var group = dim.group().reduceCount(dc.pluck('Purpose'));
    // console.log(group);
    dc.pieChart("#work-by-cat")
        .height(0)
        .radius(300)
        .transitionDuration(1500)
        .dimension(dim)
        .group(group);
}

function showAllocationByDC(ndx) {
    var dim = ndx.dimension(dc.pluck('Distribution_Centre'));
    var group = dim.group();

    dc.barChart("#work-by-dc")
        .width(600)
        .height(250)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Distribution Centre")
        .yAxis().ticks(20);
}

//Row Char - Service Manager
// function showAllocationByDC(ndx) {
//     var dim = ndx.dimension(dc.pluck('DC'));
//     var group = dim.group();

//     dc.rowChart("#test");


//Line Graph - Requests in
function showRequestsOpenGraph(ndx) {
    var date_dim = ndx.dimension(dc.pluck('Date_Opened'));
    // console.log(date_dim);
    var group = date_dim.group();
    var minDate = date_dim.bottom(1)[0].date;
    var maxDate = date_dim.top(1)[0].date;
    // console.log(minDate);
    // console.log(maxDate);

    dc.lineChart("#open_request_by_date")
        .width(500)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(date_dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.time.scale().domain([minDate, maxDate]))
        .xAxisLabel("Month")
        .yAxis().ticks(4);
}
