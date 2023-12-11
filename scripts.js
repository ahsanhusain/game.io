// Number to decide the game digit i.e. 
// game work on 2 digit, 3 digit or n 
// digit of number. 
const digit = 10; // Corrected for 5-digit code

// Set random numbers. The task of user 
// is to find these numbers. 
let num1 = Math.floor(Math.random() * digit);
let num2 = Math.floor(Math.random() * digit);
let num3 = Math.floor(Math.random() * digit);
let num4 = Math.floor(Math.random() * digit);


// Hints are generated here onwards. 
// Hint 1 
let h1_a,h1_b, h1_c,h1_d;
while ((h1_a = Math.floor(Math.random() * digit)) === num1);
while ((h1_b = Math.floor(Math.random() * digit)) === num2);
while ((h1_c = Math.floor(Math.random() * digit)) === num3);
h1_d = num4; 

// Hint 2 
let h2_a,h2_b, h2_c,h2_d;
while ((h2_a = Math.floor(Math.random() * digit)) === num1);
while ((h2_b = Math.floor(Math.random() * digit)) === num2);
h2_c = num2; 
while ((h2_d = Math.floor(Math.random() * digit)) === num4); 

//Hint 3 
let h3_a,h3_b, h3_c,h3_d;
h3_a = num2; 
h3_b = num1; 
while ((h3_c = Math.floor(Math.random() * digit)) === num3);
while ((h3_d = Math.floor(Math.random() * digit)) === num4); 


// Hint 4 
let h4_a,h4_b, h4_c,h4_d;
h4_a = num1; 
while ((h4_b = Math.floor(Math.random() * digit)) === num2); 
h4_c = num3; 
while ((h4_d = Math.floor(Math.random() * digit)) === num4); 
 

// Hint generation ends 

// Putting hints to index.html page 
// document.getElementById('h1').innerHTML = 
// 	`<input type="text" id="b1" value="${h1_a} 
// 	" readonly> <input type="text" id="b1" value=" 
// 	${h1_b}" readonly> <input type="text" id="b1"
// 	value="${h1_c}" readonly> `; 

	document.getElementById('h1').innerHTML = 
	`<div class="digit-box"><input type="text" id="b1" class="digit-input" value="${h1_a}" readonly></div>
	<div class="digit-box"><input type="text" id="b1" class="digit-input" value="${h1_b}" readonly></div>
	<div class="digit-box"><input type="text" id="b1" class="digit-input" value="${h1_c}" readonly></div>
	<div class="digit-box"><input type="text" id="b1" class="digit-input" value="${h1_d}" readonly></div>`; 

	document.getElementById('h2').innerHTML = 
	`<div class="digit-box"><input type="text" id="b1" class="digit-input" value="${h2_a}" readonly></div>
	<div class="digit-box"><input type="text" id="b1" class="digit-input" value="${h2_b}" readonly></div>
	<div class="digit-box"><input type="text" id="b1" class="digit-input" value="${h2_c}" readonly></div>
	<div class="digit-box"><input type="text" id="b1" class="digit-input" value="${h2_d}" readonly></div>`; 
	
	document.getElementById('h3').innerHTML = 
	`<div class="digit-box"><input type="text" id="b1" class="digit-input" value="${h3_a}" readonly></div>
	<div class="digit-box"><input type="text" id="b1" class="digit-input" value="${h3_b}" readonly></div>
	<div class="digit-box"><input type="text" id="b1" class="digit-input" value="${h3_c}" readonly></div>
	<div class="digit-box"><input type="text" id="b1" class="digit-input" value="${h3_d}" readonly></div>`; 
	
	document.getElementById('h4').innerHTML = 
	`<div class="digit-box"><input type="text" id="b1" class="digit-input" value="${h4_a}" readonly></div>
	<div class="digit-box"><input type="text" id="b1" class="digit-input" value="${h4_b}" readonly></div>
	<div class="digit-box"><input type="text" id="b1" class="digit-input" value="${h4_c}" readonly></div>
	<div class="digit-box"><input type="text" id="b1" class="digit-input" value="${h4_d}" readonly></div>`; 
// document.getElementById('h2').innerHTML = 
// 	`<input type="text" id="b1" value="${h2_a} 
// 	" readonly> <input type="text" id="b1"
// 	value="${h2_b}" readonly> <input type="text"
// 	id="b1" value="${h2_c}" readonly> <input type="text" id="b1" value="${h2_d} 
// 	" readonly>`; 

// document.getElementById('h3').innerHTML = 
// 	`<input type="text" id="b1" value="${h3_a} 
// 	" readonly> <input type="text" id="b1"
// 	value="${h3_b}" readonly> <input type="text"
// 	id="b1" value="${h3_c}" readonly> <input type="text" id="b1" value="${h3_d} 
// 	" readonly>`; 

// document.getElementById('h4').innerHTML = 
// 	`<input type="text" id="b1" value="${h4_a} 
// 	" readonly> <input type="text" id="b1"
// 	value="${h4_b}" readonly> <input type="text"
// 	id="b1" value="${h4_c}" readonly> <input type="text" id="b1" value="${h4_d} 
// 	" readonly>`; 

// document.getElementById('h5').innerHTML = 
// 	`<input type="text" id="b1" value="${h5_a} 
// 	" readonly> <input type="text" id="b1"
// 	value="${h5_b}" readonly> <input type="text"
// 	id="b1" value="${h5_c}" readonly><input type="text" id="b1" value="${h5_d} 
// 	" readonly> `; 

// Function to check whether game is solved or not 

function myfunc() {
    let a = document.getElementById('b1').value;
    let b = document.getElementById('b2').value;
    let c = document.getElementById('b3').value;
    let d = document.getElementById('b4').value;

    if (a != '' && b != '' && c != '' && d != '') {
        if (a == num1 && b == num2 && c == num3 && d == num4) {
            // Show Level Completed Modal
            // $('#levelCompletedModal').modal('show');
            window.location.href = 'levelcomplete.html';
        } else {
            // Show Wrong Code Modal
            $('#wrongCodeModal').modal('show');
        }
    } else {
        // Show Empty Fields Modal
        $('#emptyModal').modal('show');
    }
}

function incrementValue(id) {
	var element = document.getElementById(id);
	var currentValue = parseInt(element.value, 10) || 0;
	element.value = Math.min(currentValue + 1, 9);
}

function decrementValue(id) {
	var element = document.getElementById(id);
	var currentValue = parseInt(element.value, 10) || 0;
	element.value = Math.max(currentValue - 1, 0);
}

function refreshPage() {
    location.reload();
}

function showHelp(){
	$('#helpModal').modal('show');
}
