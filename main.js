var arr=[15,123,300,56,45,346,60,893,31,32];
document.write("arr=[15,123,300,56,45,346,60,893,31,32]"+"<br>"+"<br>");
document.write("the numbers divisible by 3 and 5 is"+"<br>"+"<br>");
for (let i=0;i<arr.length;i++){
	if((arr[i]%3==0) && (arr[i]%5==0)){
		document.write(arr[i]+"<br>");
	}
}