function validation(){
	 if(document.Formfill.Username.value==""){
		document.getElementById("result").innerHTML="Enter Username*";
		return false;

	 }
	 else if (document.Formfill.Username.value.length<6)
	 {
        document.getElementByid("result").innerHTML="Atlist six letters";
		return false;

	 }
       else if (document.Formfill.Email.value=="")
	   {
        document.getElementByid("result").innerHTML= "Enter your Email";
		return false;

	   }

else if (document.Formfill.Password.value=="")
	 {
        document.getElementByid("result").innerHTML = "Enter your Password";
		return false;

	 }
  else if (document.Formfill.Password.value.length<6)
	 {
        document.getElementByid("result").innerHTML= "Password must be 6-digits";
		return false;
	 }


	 else if (document.Formfill.CPassword.value=="")
	 {
        document.getElementByid("result").innerHTML="Enter your Confirm Password";
		return false;
	 }

     else if (document.Formfill.CPassword.value !== document.Formfill.Password.value)
	 {
        document.getElementByid("result").innerHTML="Password does mot matched";
		return false;

	 }

     else if (document.Formfill.Password.value == document.Formfill.CPassword.value)
	 {
       popup.classList.add("open-slide")
		return false;

	 }

	
}
var popup=document.getElementById('popup');
function closeSlide(){
	
	popup.classList.remove("open-slide")
} 