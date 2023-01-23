var sum=0;

var i=0;
function AddNewRow(){
  let h2 = document.getElementById("click");
 
sum++;
i++;

  var table=`<tr >
  <td id="roll">${sum}</td><td><input type="text" id="txtname${i}" class="demo"  ></td>
  <td><input type="number" id="txtmaths${i}" class="demo" onchange="AddNewData(${i})" ></td>
  <td><input type="number" id="txtenglish${i}" class="demo" onchange="AddNewData(${i})" ></td>
  <td><input type="number" id="txtscience${i}" class="demo" onchange="AddNewData(${i})"></td>
  <td id="total${i}" class="demo"></td>
  <td id="percentage${i}" class="demo"></td>
 </tr>`


    h2.insertAdjacentHTML("beforeend",table);  


    }











function AddNewData(index) {

  var j;
  for(j=1;j<=index;j++){
  var maths=document.getElementById("txtmaths"+j).value;
  var english=document.getElementById("txtenglish"+j).value;
  var science=document.getElementById("txtscience"+j).value;
  var students=document.getElementById("student"+j)
  

  var total =Number(maths)+Number(english)+Number(science);
  document.getElementById("total"+j).innerHTML=total;

  var percentage =Number(total/300)*100;
  document.getElementById("percentage"+j).innerHTML=percentage;



  const maxvalue=[total]
  var max = maxvalue.reduce(function(a, b) {
    return Math.max(a, b);
});

const minvalue=[total]
var min=minvalue.reduce(function(a,b){
  return Math.min(a,b);
});
var table=`
<td>${students+j}</td>
<td>${avg}</td>
<td>${max}</td>
<td>${min}</td>
`

document.getElementById("tb2").innerHTML=table
}


}



 