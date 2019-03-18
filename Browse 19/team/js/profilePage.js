/**
 * Created by Rishabh on 15-Aug-18.
 */

document.getElementById("popUp").style.visibility="hidden";
document.getElementById("popUpChild").style.opacity="0.2";


function fnshowBox(memberNo) {
    var member=function (name,position,academics,details) {
        this.name=name;
        this.position=position;
        this.academics=academics;
        this.details=details;
    }
   if(memberNo=='member1'){
       var mem=new member("Akash Kumar Srivastava","Founder","4th Year ISE, SIT, Tumkur","Website developer, Certified Java Expert, Android, MySQL, Python, Node.js, Microservice Management, Network Security, Firebase, Known for Paper Presentations, Management Skills, Network Security, Firebase, Certified Java, Android, MySQL, Python");;

    }else if(memberNo=='member2'){
        var mem=new member("Abhinav Kumar Mallick","Co-Founder","3rd Year ISE, SIT, Tumkur","Website Developer, Photoshop Skills, Certified Ethical Hacking Expert, Node.JS, MySQL");
    }else if(memberNo=='member3'){
        var mem=new member("Sumit Jha","Member","3rd Year ISE, SIT, Tumkur","Website Developer, Android SDK Skills");
    }else if(memberNo=='member4'){
        var mem=new member("Utkarsh Sahay","Co-Founder","3rd Year ISE, SIT, Tumkur","Web developer, UI/UX designer, php,nodejs ");        ;
    }else if(memberNo=='member5'){
       var mem=new member("Abhishek Kumar","Co-Founder","3rd Year CSE, SIT, Tumkur","JAVA, C");
    }else if(memberNo=='member6'){
       var mem=new member("Harshita S. ","Member","3rd Year ECE, SIT, Tumkur","Web Developer");
    }else if(memberNo=='member7'){
       var mem=new member("Saurav Kumar","Member","3rd Year Mech, SIT, Tumkur","IOT");
    }else if(memberNo=='member8'){
       var mem=new member("Aquib Manjar","Member","3rd Year ECE, SIT, Tumkur","IOT");
    }else if(memberNo=='member9'){
       var mem=new member("Shaksham Sinha", "Member", "2nd Year TELECOM, SIT, Tumkur", "Graphics Designing, C, C++, Robotics, Automation");
    }else if(memberNo=='member10'){
       var mem=new member("Pankej Jaiswal","Member","3rd Year ISE, SIT, Tumkur","MySQL, C");
   }else if(memberNo=='member11'){
       var mem=new member("Somila S Kumar","Member","4th Year ISE,SIT,Tumkur","Website developer, Event Management");
   }else if(memberNo=='member12'){
       var mem=new member("Spoorthy S.","Member","4th Year ISE, SIT, Tumkur","Android");
   }else if(memberNo=='member13'){
       var mem=new member("Varshitha N.","Member","4th Year ISE, SIT, Tumkur"," Android");
   }else if(memberNo=='member14'){
       var mem=new member("Sneha S.","Member","4th Year ISE, SIT, Tumkur"," Android");
   }else if(memberNo=='member15'){
       var mem=new member("Sumanth M.","Member","3rd Year CSE, SIT, Tumkur","Android, Python");
   }else if(memberNo=='member16'){
       var mem=new member("Kumar Shubham","Member","3rd Year CSE, SIT, Tumkur","IOT");
   }else if(memberNo=='member17'){
       var mem=new member("G.V. Divya Rachana","Member","3rd Year CSE, SIT, Tumkur","Web Developer");
   }else if(memberNo=='member18'){
       var mem=new member("Anna","Member","3rd Year CSE, SIT, Tumkur","Graphics Designing");
   }else if(memberNo=='member19'){
       var mem=new member("Umang Gupta","Member","2nd Year CSE,SIT,Tumkur","Graphics Designing, C, C++, Web Developer");
   }else if(memberNo=='member20'){
       var mem=new member("Rishabh Kumar","Member","2nd Year CSE, SIT, Tumkur","C, C++,PHP , Python, Web Developer, Blogger, Game Developer");
   }
    else if(memberNo=='member21'){
       var mem=new member("Sarthak Mishra","Member","2nd Year CSE, SIT, Tumkur","Android, JAVA, C");
   }
    else if(memberNo=='member22'){
       var mem=new member("Sumant Kumar","Member","2nd Year Telecom, SIT, Tumkur","C, C++, Robotics, Automation");
   }
    else if(memberNo=='member23'){
       var mem=new member("Aditya Singh","Member","2nd Year CSE, SIT, Tumkur","Graphic Designing, Video Editing, Youtuber");
   }
    else if(memberNo=='member24'){
       var mem=new member("Shashvat Pandey","Member","2nd Year CSE, SIT, Tumkur","C, C++, JAVA, Python, Orator, Event Managment");
   }
    else if(memberNo=='member25'){
       var mem=new member("Kumar Guru","Member","2nd Year ISE, SIT, Tumkur","C, C++,JAVA, Python, Photoshop, Web Developer");
   }
    else if(memberNo=='member26'){
       var mem=new member("Harsh Bengani","Member","2nd Year Mech, SIT, Tumkur","Event Management");
   }
    var echoedName=document.getElementById("echoedName").innerHTML=mem.name;
    var echoedPosition=document.getElementById("echoedPosition").innerHTML=mem.position;
    var echoedAcademics=document.getElementById("echoedAcademics").innerHTML=mem.academics;
    var echoedDetails=document.getElementById("echoedDetails").innerHTML=mem.details;
    document.getElementById("popUp").style.visibility="visible";
    document.getElementById("popUpChild").style.opacity="1";

}

function closePopUp() {
    document.getElementById("popUpChild").style.opacity="0.2";
    setTimeout(function(){
        document.getElementById("popUp").style.visibility="hidden";
    }, 300);

}
