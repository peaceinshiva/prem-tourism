function sendwhatsapt(){

    // var fname,lname,country,subject;


    var phonenumber="+918303323232";

   var name= document.getElementById("name").value;
    var destinat=document.getElementById("destinat").value;
   var subject =document.getElementById("subject").value;
    var phone=document.getElementById("Phone").value;
    var person=document.getElementById("person").value;

if(name==""){
    alert("Enter your name first")
}
else if(destinat==""){
    alert("Enter your  destination first")
}

else if(subject==""){
    alert("Enter Details first")
}

else if(phone==""){
    alert("Enter your phone number first")
}
else if(person==""){
    alert("Enter your person number first")
}

else{
    // alert(phone);
   

    var url="https://wa.me/" + phonenumber + "?text="+
    
    "Book my cab %0a%0aName: "+ name+
    "%0aDestination: "+ destinat+
    "%0aNo. of person: "+ person+
    "%0aDetails: "+subject+
    "%0aPhone:"+phone

  
    window.open(url,'_blank').focus();
}











   
  
}

