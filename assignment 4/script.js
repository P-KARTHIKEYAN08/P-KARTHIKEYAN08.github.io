var names=new Array();
names[0]="Vimal";
names[1]="Nandhu";
names[2]="Venkatesh";
names[3]="Harish";
names[4]="Mohan";
names[5]="Mohit";
names[6]="Nithish";
names[7]="Santhosh";
names[8]="Jaghat";
names[9]="Sai";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j'){
		console.log("Goodbye "+names[i])

	}
	else{
		console.log("Hello "+names[i])
	}
}
