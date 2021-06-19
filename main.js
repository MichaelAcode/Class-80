var names=[];
function submit(){
    // var name1=document.getElementById("n1").value;
    // var name2=document.getElementById("n2").value;
    // var name3=document.getElementById("n3").value;
    // var name4=document.getElementById("n4").value;
    // names.push(name1);
    // names.push(name2);
    // names.push(name3);
    // names.push(name4);
    for(i=1;i<=4;i++){
 var name1=document.getElementById("n"+i).value;
names.push(name1);


    }
    var length=names.length;
    console.log(length);
    console.log(names);
    var temparray=[];
    for(i=0;i<length;i++){
   temparray.push("<h1> hi "+names[i]+"</h1>");

    }
    document.getElementById("display").innerHTML=temparray;
    var commarevomed=temparray.join(" ");
    document.getElementById("displaynew").innerHTML=commarevomed;
    document.getElementById("sortbutton").style.display="inline-block";
    document.getElementById("b1").style.display="none";
}
function sorting(){names.sort();
    document.getElementById("display").innerHTML=names;}
    function search(){
var s=document.getElementById("searchInput").value;
var found=0;
for(j=0;j<names.length;j++){
if(s==names[j]){
    found++;
}

}
document.getElementById("empty").innerHTML="name found "+found+" times";



    }

