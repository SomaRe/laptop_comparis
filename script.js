var tbody = document.querySelector("table tbody");

// loop through data into insert into table column cells
var keys = Object.keys(data[0]);
for (var key in keys) {
  var row = tbody.rows.item(key);
  for (var i = 0; i < data.length; i++) {
    var cell = row.insertCell();
    if (keys[key] === "Variants") {
      var variant = data[i][keys[key]];
      temp_data = "";
      for (var v in variant) {
        td = "";
        for (var k in variant[v]) {
          if (k == "Price") {
            td += k + ": " + variant[v][k] + "<br>";
          } else {
            td +=
              "&nbsp;&nbsp;&nbsp;&nbsp;" + k + ": " + variant[v][k] + "<br>";
          }
        }
        temp_data += v + ") " + td + "<br>";
      }
      cell.innerHTML = temp_data;
    }
    //     else {
    //     var temp_text = '';
    //     for (var j in data[i][keys[key]]) {
    //         temp_text += j + ': ' + data[i][keys[key]][j] + '<br>';
    //         cell.innerHTML = temp_text;
    //     }

    // }
    else if (keys[key] === "Screen") {
      var temp_text = "<br><br>";
      for (var j in data[i][keys[key]]) {
        temp_text +=  data[i][keys[key]][j] + "<br>";
      }
      
      cell.innerHTML = temp_text;
    } else {
      cell.innerHTML = data[i][keys[key]];
    }
  }
}
