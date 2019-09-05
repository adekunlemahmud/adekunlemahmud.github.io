function validateForm(){
	const name= document.forms["myForm"]["name"].value;
	const message= document.forms["myForm"]["message"].value;
	if (name.length <= 3 && message.length <= 19) {
		alert("Your name should be more than 4 letters or your message should be more than 20 characters");
		return false;
	}

}