function makeid(l) {
  // write your code here
	let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let randomStr = "";
	for(let i=0; i<l; i++){
		let random = Math.floor(Math.random() * chars.length);
		let randomChar = chars.charAt(random);
		randomStr += randomChar;
	}
	return randomStr;
}

// Do not change the code below.
// const l = prompt("Enter a number.");
// alert(makeid(l));
