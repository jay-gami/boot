var sum = 0;
var i = 0;
$(document).ready(function () {
  $(".btn").click(function () {
    sum++;
    $("#click").append(`<tr>
    <td id="rollno">${sum}</td>
    <td><input type="text" id="txtname${i}"></td>
    <td><input type="number" id="txtmaths${i}" ></td>
    <td><input type="number" id="txtenglish${i}" ></td>
    <td><input type="number" id="txtscience${i}" ></td>
    <td id="total${i}" class="TotalMarks" ></td>
    <td id="percentage${i}">  </td>  
    <td><button type="button"  class="delete btn-success">Delete Row</button>
    </td>
    </tr>`);
    i++;
  });

  $("tbody").change(function () {
    for (var j = 1; j <= i; j++) {
      maths = $("#txtmaths" + j).val();
      english = $("#txtenglish" + j).val();
      science = $("#txtscience" + j).val();
      total = Number(maths) + Number(english) + Number(science);
      $("#total" + j).html(total);

      percentage = Number(total / 300) * 100;
      $("#percentage" + j).html(percentage.toFixed());

      row = rollno.length;

      $("#roll").html(row);

      TotalMarks = $(".TotalMarks");
      let TotalMarksArray = [];
      $.each(TotalMarks, function () {
        TotalMarksArray.push($(this).html());
      });

      TotalMarksArray.sort(function (a, b) {
        return b - a;
      });
      $("#max").html(TotalMarksArray[0]);

      TotalMarksArray.sort(function (a, b) {
        return a - b;
      });
      $("#min").html(TotalMarksArray[0]);

      initial = 0;
      avg =
        TotalMarksArray.reduce(function (a, b) {
          return Number(a) + Number(b);
        }, initial) / TotalMarksArray.length;
      $("#avg").html(avg.toFixed());
    }
  });

  $("tbody").on("click", ".delete", function () {
    $(this).closest("tr").remove();

    sum--;
    $("#roll").html(sum);

    TotalMarks = $(".TotalMarks");
    let TotalMarksArray = [];
    $.each(TotalMarks, function () {
      TotalMarksArray.push($(this).html());
    });

    TotalMarksArray.sort(function (a, b) {
      return b - a;
    });
    $("#max").html(TotalMarksArray[0]);

    TotalMarksArray.sort(function (a, b) {
      return a - b;
    });
    $("#min").html(TotalMarksArray[0]);

    initial = 0;
    avg =
      TotalMarksArray.reduce(function (a, b) {
        return Number(a) + Number(b);
      }, initial) / TotalMarksArray.length;
    $("#avg").html(avg.toFixed());
  });
});
