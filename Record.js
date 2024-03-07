var registerForm = document.querySelector("#register-form");
 var allInput = registerForm.querySelectorAll("INPUT");
 var addbtn = document.querySelector("#add-btn");
 var modal = document.querySelector(".modal");
 var closebtn = document.querySelector(".close-icon");

addbtn.onclick = function(){
	alert("plese fill all Data otherwise you suffer");
	modal.classList.add("active");
}
 closebtn.addEventListener("click",()=>{
	modal.classList.remove("active");
	var i;
	for (i=0;i<allInput.length;i++)
	{
		allInput[i].value ="";
		
	}

})

// input codding
 var userData = [];
var IdEl = document.getElementById("id");
var SnameEl = document.getElementById("s.name");
var MilkEl = document.getElementById("Milk");
var PhatEl = document.getElementById("phat");
var DateEl = document.getElementById("Date");
var registerBtn = document.getElementById("register-btn");
var UpdateBtn = document.getElementById("Update-btn");
var registerForm = document.querySelector("#register-form");

registerBtn.onclick = function(e){

e.preventDefault();
regitrationData();
getDataFromLOcal();
registerForm.reset('');
closebtn.click();
}
if(localStorage.getItem("userData") != null){
	userData = JSON.parse(localStorage.getItem("userData"));
}
function regitrationData( ){
	    userData.push({
		sid : IdEl.value,
		sname :  SnameEl.value,
		Milk :  MilkEl.value,
		phate: PhatEl.value,
		Date :DateEl .value,
		
	});
		var userString = JSON.stringify(userData);
		localStorage.setItem("userData",userString);
		

}
var tableData = document.querySelector("#table-data");
const getDataFromLOcal = () =>{
	    tableData.innerHTML ="";
		userData.forEach((data,index)=>{
			tableData.innerHTML += `
			<tr index='${index}'>
		<td>${index+1}</td>
		<td>${data.sid}</td>
		<td>${data.sname}</td>
		<td>${data.Milk }</td>
		<td>${data.phate}</td>
		<td>${data.Date }</td>
		<td>
		<button class="edit-btn"><i class="fa fa-eye"></i></button>
		<button  class="del-btn" style="background-color:red"><i class="fa fa-trash"></i></button>
		
		</td>

	</tr>
	`; 
});
 var i;
      var allDelBtn = document.querySelectorAll(".del-btn")
		 for (i=0;i<allDelBtn.length;i++ )
		 {
		  allDelBtn[i].onclick = function(){
			
			var tr = this.parentElement.parentElement;
			var sid = tr.getAttribute("index");//
			userData.splice(id,1);//
			localStorage.setItem("userData",JSON.stringify(userData));
			tr.remove();
		  }
		 }
		 
      var allEdit = document.querySelectorAll(".edit-btn");
	  for(i=0;i<allEdit.length;i++){
		allEdit[i].onclick = function(){
			var tr = this.parentElement.parentElement;
			var td = tr.getElementsByTagName("TD");
			var index = tr.getAttribute("index");
			var sid = td[1].innerHTML;
			var sname = td[2].innerHTML;
			var Milk = td[3].innerHTML;
			var phate = td[4].innerHTML;
			var Date = td[5].innerHTML;
			addbtn.click();	
			registerBtn.disabled = true;
			UpdateBtn.disabled = false;
			IdEl.value = sid;
		    SnameEl.value = sname;
			MilkEl.value = Milk;
			PhatEl.value = phate;
			DateEl.value = Date;
			
			UpdateBtn.onclick = function(e){
				userData[index] = {
				sid : IdEl.value,
		        sname :  SnameEl.value ,
		        Milk :MilkEl.value,
		        phate    : PhatEl.value,
		        Date: DateEl .value,
		       	
                 

				}
				localStorage.setItem("userData",JSON.stringify(userData));
			}
		}
	  }


}
getDataFromLOcal();

var delAllBtn = document.querySelector("#del-all-btn");
var allDelBox = document.querySelector("#del-all-box");
delAllBtn.addEventListener('click',()=>{
	if (allDelBox.checked == true)
	{
		localStorage.removeItem("userData");
		window.location = location.href;
		alert("success")
	}
		else{
			alert("please check the box to Deleted");
		}
})
