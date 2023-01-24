var sum=0;

var i=0;
function AddNewRow(){
  let h2 = document.getElementById("click");
 
sum++;
i++;

  var table=`<tr >
  <td id="rollno">${sum}</td><td><input type="text" id="txtname${i}"  onchange="AddNewData(${i})" ></td>
  <td><input type="number" id="txtmaths${i}"  onchange="AddNewData(${i})" ></td>
  <td><input type="number" id="txtenglish${i}"  onchange="AddNewData(${i})" ></td>
  <td><input type="number" id="txtscience${i}"  onchange="AddNewData(${i})"></td>
  <td id="total${i}" class="TotalMarks"></td>
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
 



  var row=rollno.length;
  document.getElementById("st1").innerHTML=row;

  
  const TotalMarks = document.querySelectorAll('.TotalMarks');
  let TotalMarksArray=[];
  TotalMarks.forEach(el=>{
  TotalMarksArray.push(el.innerHTML)
  })
  
  TotalMarksArray.sort(function(a, b){return b-a});
  document.getElementById("max").innerHTML = TotalMarksArray[0];
  
  TotalMarksArray.sort(function(a, b){return a-b});
  document.getElementById("min").innerHTML = TotalMarksArray[0];
  
  const initial = 0;
  const avg = TotalMarksArray.reduce(
    (a, b) => Number(a) + Number(b),
    initial)/(TotalMarksArray.length);
  document.getElementById("avg").innerHTML=avg;


  }
}





 