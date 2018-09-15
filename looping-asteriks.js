//tugas 1
var baris=5;

for (var untukbaris= 1; untukbaris <= baris; untukbaris ++){
		console.log("*")
}

//tugas 2
var baris=5;
var a=1;
while(a<=baris){
	var bintang="*";
	var b=1;

	while(b<baris){
		bintang = bintang + '*';b++;
	}
	console.log(bintang);a++;
}


//tugas 3
var baris=5;
var a=1;

while(a<=baris){
	var bintang="*";
	var b=1;

	while(b<a){
		bintang = bintang + '*';b++;
	}
	console.log(bintang);a++;
}