var tbody = document.querySelector("table tbody");


// var th = document.createElement("th");
//     th.classList.add(folders[i][0]);
//     var carousel = document.createElement("div");
//     carousel.id = 'yoga7i16';
//     carousel.classList.add("carousal","carousel-dark");
//     carousel.setAttribute("data-bs-ride","carousel");
//     var carousel_inner = document.createElement("div");
//     carousel_inner.classList.add("carousel-inner");

// for (var i = 0; i < folders.length; i++) {
//     var th = document.createElement("th");
//     th.classList.add(folders[i][0]);
//     var carousel = document.createElement("div");
//     carousel.id = folders[i][0];
//     carousel.classList.add("carousal","carousel-dark");
//     carousel.setAttribute("data-bs-ride","carousel");
//     var carousel_inner = document.createElement("div");
//     carousel_inner.classList.add("carousel-inner");
//     for (var j = 1; j < folders[i][1]+1; j++) {
//         var img = document.createElement("img");
//         img.classList.add("images");
//         img.src = "images/"+folders[i][0]+"/"+j+".jpg";
//         var carousel_item = document.createElement("div");
//         if (j==1) {
//             carousel_item.classList.add("carousel-item","active");
//         }
//         else{
//             carousel_item.classList.add("carousel-item");
//         }
//         carousel_item.appendChild(img);
//         carousel_inner.appendChild(carousel_item);
//     }
//     carousel.appendChild(carousel_inner);
//     th.appendChild(carousel);
//     head_row.appendChild(th);
//     carousel.innerHTML += '<button class="carousel-control-prev" type="button" data-bs-target="'+ folders[i][0] +'" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="'+ folders[i][0] +'" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>'

// }

var head_row = document.querySelector("table thead tr");
for (var i = 0; i < folders.length; i++) {
    var th = document.createElement("th");
    th.classList.add('images');
    var img = document.createElement("img");
    img.src = "images/"+folders[i][0]+"/1.jpg";
    th.appendChild(img);
    head_row.appendChild(th);
}


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
    } else if (keys[key] === "Name") {
      cell.innerHTML = "<b>" + data[i][keys[key]] + "<b>";
    } else if (keys[key] === "Screen") {
      var temp_text = "<br><br>";
      for (var j in data[i][keys[key]]) {
        if (j == "size") {
          temp_text += data[i][keys[key]][j] + " inch<br>";
        } else if (j == "resolution") {
          temp_text += data[i][keys[key]][j] + " pixels<br>";
        } else if (j == "brightness") {
          temp_text += data[i][keys[key]][j] + " nits<br>";
        } else if (j == "refresh") {
          temp_text += data[i][keys[key]][j] + " Hz<br>";
        } else {
          temp_text += data[i][keys[key]][j] + "<br>";
        }
      }
      cell.innerHTML = temp_text;
    } else if (keys[key] == "Convertible") {
      if (data[i][keys[key]] == true) {
        cell.innerHTML = "Yes";
      } else {
        cell.innerHTML = "No";
      }
    } else if (keys[key] == "RAM") {
      cell.innerHTML = data[i][keys[key]] + " GB";
    } else if (keys[key] == "Storage") {
      if (data[i][keys[key]] == 1000) {
        cell.innerHTML = "1 TB";
      } else {
        cell.innerHTML = data[i][keys[key]] + "GB";
      }
    } else if (keys[key] == "Battery") {
      cell.innerHTML = data[i][keys[key]] + "Wh";
    } else if (keys[key] == "Weight") {
      cell.innerHTML = data[i][keys[key]] + " kg";
    } else if (keys[key] == "Width") {
      cell.innerHTML = data[i][keys[key]] + " mm";
    } else if (keys[key] == "Webcam") {
      cell.innerHTML = data[i][keys[key]] + "p";
    } else if (keys[key] == "IR") {
      if (data[i][keys[key]] == true) {
        cell.innerHTML = "Yes";
      } else {
        cell.innerHTML = "No";
      }
    } else if (keys[key] == "Fingerprint") {
      if (data[i][keys[key]] == true) {
        cell.innerHTML = "Yes";
      } else {
        cell.innerHTML = "No";
      }
    } else if (keys[key] == "Type_c_charging") {
      if (data[i][keys[key]] == true) {
        cell.innerHTML = "Yes";
      } else {
        cell.innerHTML = "No";
      }
    } else {
      cell.innerHTML = data[i][keys[key]];
    }
  }
}
