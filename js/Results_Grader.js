function gradeResult(){
	
	var myResultEnglish = parseInt(document.getElementById("value1").value);
	var myResultIrish = parseInt(document.getElementById("value2").value);
	var myResultMaths = parseInt(document.getElementById("value3").value);
	var grade;
	
	if(!myResultEnglish){
		alert("Please enter a result");
	}
	else {
		if (myResultEnglish >90){
			grade = 'A';
		} else if (myResultEnglish > 80) {
			grade = 'B';
		} else if (myResultEnglish > 70) {
			grade = 'B-';
		} else if (myResultEnglish > 60) {
			grade = 'C';
		} else if (myResultEnglish >50) {
			grade = 'C-';
		} else if (myResultEnglish > 40) {
			grade = 'D';
		}
		
		var message = 'Your result of ' + myResultEnglish + ' gets you a grade ' + grade + ' in English' ;
		console.log(message);
		document.getElementById("resultsentence").innerHTML = message; 
	}
	
	
	if(!myResultIrish){
		alert("Please enter a result");
	}
	else {
		if (myResultIrish >90){
			grade = 'A';
		} else if (myResultIrish > 80) {
			grade = 'B';
		} else if (myResultIrish > 70) {
			grade = 'B-';
		} else if (myResultIrish > 60) {
			grade = 'C';
		} else if (myResultIrish >50) {
			grade = 'C-';
		} else if (myResultIrish > 40) {
			grade = 'D';
		}
		
		var message = 'Your result of ' + myResultIrish + ' gets you a grade ' + grade + ' in Irish' ;
		console.log(message);
		document.getElementById("resultsentence2").innerHTML = message; 

	}
	
	if(!myResultMaths){
		alert("Please enter a result");
	}
	else {
		if (myResultMaths >90){
			grade = 'A';
		} else if (myResultMaths > 80) {
			grade = 'B';
		} else if (myResultMaths > 70) {
			grade = 'B-';
		} else if (myResultMaths > 60) {
			grade = 'C';
		} else if (myResultMaths>50) {
			grade = 'C-';
		} else if (myResultMaths > 40) {
			grade = 'D';
		}
		
		var message = 'Your result of ' + myResultMaths + ' gets you a grade ' + grade + ' in Maths' ;
		console.log(message);
		document.getElementById("resultsentence3").innerHTML = message; 
	}
}