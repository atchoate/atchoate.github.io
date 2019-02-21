var UFOdata = data;
var tbody = d3.select("tbody");

var submit = d3.select("#submit")

submit.on("click", function() {
    d3.event.preventDefault();

    var dateElement = d3.select("#date-search-input");

    var dateValue = dateElement.property("value");

    // console.log(dateValue);
    // console.log(UFOdata);

    var dateFilter = UFOdata.filter(encounter => encounter.datetime === dateValue);

    console.log(dateFilter)

    dateFilter.forEach(function(display) {
        var row = tbody.append("tr");
        Object.entries(display).forEach(function([key, value]) {
            var cell = tbody.append("td");
            cell.text(value);
        })
    })

    



})