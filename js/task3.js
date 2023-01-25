var sum = 0;
var i = 0;
$(".btn").click(function () {
  sum++;
  i++;
  var table = `<tr id="row">
  <td id="rollno">${sum}</td><td><input type="text" id="txtname${i}"></td>
  <td><input type="number" id="txtmaths${i}" ></td>
  <td><input type="number" id="txtenglish${i}" ></td>
  <td><input type="number" id="txtscience${i}" ></td>
  <td id="total${i}" class="TotalMarks" ></td>
  <td id="percentage${i}"></td>
  </tr>`;

  $("#click").append(table);
});

$("#click").change("#row", function () {
  for (var j = 1; j <= i; j++) {
    maths = $("#txtmaths" + j).val();
    english = $("#txtenglish" + j).val();
    science = $("#txtscience" + j).val();
    total = Number(maths) + Number(english) + Number(science);
    $("#total" + j).text(total);

    percentage = Number(total / 300) * 100;
    $("#percentage" + j).text(percentage);

    row = rollno.length;
    $("#st1").html(row);

    const TotalMarks = $(".TotalMarks");
    let TotalMarksArray = [];
    $.each(TotalMarks, function () {
      TotalMarksArray.push($(this).text());
    });
    console.log(TotalMarksArray);

    TotalMarksArray.sort(function (a, b) {
      return b - a;
    });
    $("#max").text(TotalMarksArray[0]);

    TotalMarksArray.sort(function (a, b) {
      return a - b;
    });
    $("#min").text(TotalMarksArray[0]);

    const initial = 0;
    const avg =
      TotalMarksArray.reduce(function (a, b) {
        return Number(a) + Number(b);
      }, initial) / TotalMarksArray.length;
    $("#avg").text(avg);
  }
});
