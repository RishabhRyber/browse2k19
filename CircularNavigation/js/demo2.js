(function(){
    
	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	function handler(){
	  if(!open){
	    this.innerHTML = "Close";
	    classie.add(wrapper, 'opened-nav');
	  }
	  else{
	    this.innerHTML = "Menu";
		classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open;
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
	}

})();
function dispEvent(ele_id){
        var sect_id="Event "+ele_id;
        document.getElementById("default").style.display="none";
        var sect=document.getElementById(sect_id);
        for(var i=1;i<8;i++){
            if(i==parseInt(ele_id))
                continue;
            sect_id="Event "+i.toString();
            document.getElementById(sect_id).style.display="none";
        }
        sect.style.display="block";        
        if(sect.id!="default")
            document.getElementById("Registration Box").style.display="block";
        else
            document.getElementById("Registration Box").style.display="none";
}
