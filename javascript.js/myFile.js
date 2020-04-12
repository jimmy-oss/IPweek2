function myForm (){
    let day=document.getElementById("day").value;
    let month=document.getElementById("month").value;
    let year=document.getElementById("year").value;
    let sex=document.getElementById("gender").value;
    let wday=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    let mName=["kwasi","kwadwo","kwabena","kwaku","yaw","kofi","kwame"];
    let fName=["akosua","adwoa","abenaa","akua","yaa","afua","ama"]

    if (day<1 ||day>31){
        return document.getElementById("result").innerHTML="Enter valid Date";
    }
    if (year<1900 ||year>2090){
        return document.getElementById("result").innerHTML="Enter valid Date"
    }
    if (month==2 && day<1 ||day>29){
        return document.getElementById("result").innerHTML="Enter valid Date"
    }
    let gdate=new Date(`${year}-${month}-${day}`);
    let b=gdate.getDate();
    console.log(b);
    if (sex=="male"){
        return document.getElementById("result").innerHTML=wday[b] +": " + mName[b];
    }
    if (sex=="female"){
        return document.getElementById("result").innerHTML=wday[b] +": " + fName[b];
    }
}


