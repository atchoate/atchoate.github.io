var tableData = data;
var tbody = d3.select("tbody");

console.log(tableData);

tableData.forEach(function(alienReport) {
    console.log(alienReport);
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(function([key, value]) {
        var cell = tbody.append("td");
        cell.text(value);
    })
});


