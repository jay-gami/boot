var sum=0;

function AddNewRow(){
  let h2 = document.getElementById("click");

sum++;

  var table=`<tr><td id="roll">${sum}</td><td><input type="text" id="txtname" onchange="AddNewData()"></td><td><input type="number" id="txtmaths" onchange=""AddNewData(this)" ></td><td><input type="number" id="txtenglish" onchange="AddNewData()" ></td><td><input type="number" id="txtscience" onchange="AddNewData()"></td><td id="total"></td><td id="percentage"></td></tr>`
    h2.insertAdjacentHTML("beforeend",table);  



    }



function AddNewData() {

  var maths=document.getElementById("txtmaths").value;
  var english=document.getElementById("txtenglish").value;
  var science=document.getElementById("txtscience").value;

  var total =Number(maths)+Number(english)+Number(science);
  document.getElementById("total").innerHTML=total;

  var percentage =Number(total/300)*100;
  document.getElementById("percentage").innerHTML=percentage;

 

}


 