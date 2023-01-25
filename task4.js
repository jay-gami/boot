// var sum = 0;

// var i = 0;
// function AddNewRow() {
//   let h2 = document.getElementById("click");

//   sum++;
//   i++;

//   var table = `<tr >
//   <td id="rollno">${sum}</td><td><input type="text" id="txtname${i}" ></td>
//   <td><input type="number" id="txtmaths${i}"   ></td>
//   <td><input type="number" id="txtenglish${i}" ></td>
//   <td><input type="number" id="txtscience${i}" ></td>
//   <td id="total${i}" class="TotalMarks"></td>
//   <td id="percentage${i}"></td>
//  </tr>`;

//   h2.insertAdjacentHTML("beforeend", table);
// }
// $(document).ready(function () {
//   $("input").change(function (index) {
//     var j;
//     for (j = 1; j <= index; j++) {
//       var maths = $("#txtmaths" + j).val();
//       var english = $("#txtenglish" + j).val();
//       var science = $("#txtscience" + j).val();
//       var total = Number(maths) + Number(english) + Number(science);
//       $("#total" + j).val(maths + science + english);
//       var percentage = Number(total / 300) * 100;
//       $("#percentage" + j).innerHTML = percentage;

//       var row = rollno.length;
//       $("#st1").innerHTML = row;

//       //   const TotalMarks = $(".TotalMarks");
//       //   let TotalMarksArray = [];
//       //   TotalMarks.forEach((el) => {
//       //     TotalMarksArray.push(el.innerHTML);
//       //   });

//       //   TotalMarksArray.sort(function (a, b) {
//       //     return b - a;
//       //   });
//       //   $("max").innerHTML = TotalMarksArray[0];

//       //   TotalMarksArray.sort(function (a, b) {
//       //     return a - b;
//       //   });
//       //   $("min").innerHTML = TotalMarksArray[0];

//       //   const initial = 0;
//       //   const avg =
//       //     TotalMarksArray.reduce((a, b) => Number(a) + Number(b), initial) /
//       //     TotalMarksArray.length;
//       //   $("avg").innerHTML = avg;
//       // }
//     }
//   });
// });
