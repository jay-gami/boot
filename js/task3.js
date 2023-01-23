var sum=0;
var i=0;


function AddNewRow(){
  let h2 = document.getElementById("click");
sum++;
i++;
  var table=`<tr >
  <td id="roll">${sum}</td><td><input type="text" id="txtname${i}"  onchange="AddNewData(${i})"></td>
  <td><input type="number" id="txtmaths${i}" onchange="AddNewData(${i})" ></td>
  <td><input type="number" id="txtenglish${i}" onchange="AddNewData(${i})" ></td>
  <td><input type="number" id="txtscience${i}" onchange="AddNewData(${i})"></td>
  <td id="total${i}"></td>
  <td id="percentage${i}"></td>
 </tr>`
    h2.insertAdjacentHTML("beforeend",table);  



    }



function AddNewData(index) {

  var j;
  for(j=1;j<=index;j++){
  var maths=document.getElementById("txtmaths"+j).value;
  var english=document.getElementById("txtenglish"+j).value;
  var science=document.getElementById("txtscience"+j).value;

  var total =Number(maths)+Number(english)+Number(science);

  document.getElementById("total"+j).innerHTML=total;

  var percentage =Number(total/300)*100;
  document.getElementById("percentage"+j).innerHTML=percentage;

 
  }
}


 