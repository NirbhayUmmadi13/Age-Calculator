function calculate_age()
{



var Rawday= document.getElementById("dd1").value;
var Rawmonth= document.getElementById("mm1").value;
var Rawyear= document.getElementById("yyyy1").value;
var year= parseInt(document.getElementById("yyyy1").value);
var day= parseInt(document.getElementById("dd1").value);
var month= parseInt(document.getElementById("mm1").value);
console.log(day, month, year)

if(Rawday=='' || Rawmonth=='' || Rawyear=='' ){
    document.getElementById("showdata").innerHTML="Please fill in all of the boxes for the wizard to do its magic." 
    setTimeout(() => {
        document.getElementById("showdata").innerHTML="" 
        console.log("in timeout")
    }, 2000);   
}
else{

    if(day>31 || day<0){
        document.getElementById("showdata").innerHTML="Please fix your mistake in the DAY section so the wizard can do it's magic." 
        setTimeout(() => {
            document.getElementById("showdata").innerHTML="" 
            console.log("in timeout")
        }, 2000);
    };
    
    if(month>12 || month<0){
       document.getElementById("showdata").innerHTML="Please fix your mistake in the MONTH section so the wizard can do it's magic."
       setTimeout(() => {
        document.getElementById("showdata").innerHTML="" 
        console.log("in timeout")
    }, 2000);
    };
    
    if(year<1000 || year>3000){
       document.getElementById("showdata").innerHTML="Please fix your mistake in the YEAR section so the wizard can do it's magic."
       setTimeout(() => {
        document.getElementById("showdata").innerHTML="" 
        console.log("in timeout")
    }, 2000);};
    var current_date=new Date();
    console.log(current_date);
    var current_year=current_date.getFullYear();
    var current_month=current_date.getMonth();
    console.log(current_year);
    if(month>current_month){
        current_month=current_month+12;
        current_year=current_year-1;
    }
    var AgeInMonth = current_month-month+1;
    var AgeInYears = current_year-year;
    console.log(AgeInYears)
    console.log(AgeInMonth)
    if(AgeInMonth==12){
        AgeInYears=AgeInYears+1;
        AgeInMonth = 0;
    document.getElementById("showdata2").innerHTML=`Happy Birthday!`
    }
    document.getElementById("showdata").innerHTML=`Your current age is ${AgeInYears} years and ${AgeInMonth} months`
}


}
