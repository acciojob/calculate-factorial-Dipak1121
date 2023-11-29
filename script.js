//your JS code here. If required.
let num = prompt("Enter the Number");

alert(`The factorial of ${num} is ${fact(num)}`);
function fact(num) {
	if(num == 1){
		return 1;
	}
	return (num*fact(num-1));
}
