function add() {
  // var table = document.getElementById("click");
  // var row = table.insertRow(0);
  // var cell1 = row.insertCell(0);
  // var cell2 = row.insertCell(1);
  // var cell3 = row.insertCell(2);
  // var cell4 = row.insertCell(3);
  // var cell5 = row.insertCell(4);
  // var cell6 = row.insertCell(5);
  // var cell7 = row.insertCell(6);

  // var b = document.getElementById("txtmaths").value;
  // var c = document.getElementById("txtenglish").value;
  // var d = document.getElementById("txtscience").value;
  // cell1.innerHTML = document.getElementById("roll").value;
  // cell2.innerHTML = document.getElementById("txtname").value;
  // cell3.innerHTML = document.getElementById("txtmaths").value;
  // cell4.innerHTML = document.getElementById("txtenglish").value;
  // cell5.innerHTML = document.getElementById("txtscience").value;
  // cell6.innerHTML = document.getElementById("total");
  // cell7.innerHTML = document.getElementById("percentage");

  // var total = parseInt(b) + parseInt(c) + parseInt(d);
  // var percentage = (total / 300) * 100;
  // document.getElementById("percentage").innerHTML = percentage;

  // document.getElementById("total").innerHTML = total;


 
  let h2 = document.getElementById("click");

  var name=document.getElementById("txtname").value;
  var maths=document.getElementById("txtmaths").value;
  var english=document.getElementById("txtenglish").value;
  var science=document.getElementById("txtscience").value;
  var i=0;
  
  // var table=`<tr>
  // <td>${`${`${i + 1}`}`}</td>
  // <td>${name}</td>
  // <td>${maths}</td>
  // <td>${english}</td>
  // <td>${science}</td>

  // <td>${`${parseInt(maths)+parseInt(science)+parseInt(english)} `}</td>
  // <td>${`${(parseInt(maths)+parseInt(science)+parseInt(english))/(300)*100}`}</td>

  // </tr>`



  const one =(maths)+(science)+(english);
  var percentage =(one/300)*100;

  document.getElementById("total").innerHTML=one;
  document.getElementById("txtname").innerHTML=name;

  document.getElementById("txtmaths").innerHTML=maths;
  document.getElementById("txtenglish").innerHTML=english;
  document.getElementById("txtscience").innerHTML=science;
  document.getElementById("percentage").innerHTML=percentage

  }

function myadd(){
  var table='<tr>' + '<td><input type="text"></td'+'  </tr>'
}

  // let row = table.insertRow();

  // let c1 = row.insertCell(0);
  // let c2 = row.insertCell(1);
  // let c3 = row.insertCell(2);
  // let c4 = row.insertCell(3);
  // let c5 = row.insertCell(4);
  // let c6 = row.insertCell(5);

  // c1.innerText +=
  // c2.innerText = "50"
  // c3.innerText = "30"
  // c4.innerText="54"
  // c5.innerText="120"
  // c6.innerText="75%"

