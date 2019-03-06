// Avoid Scrolling in beginig loader part

window.onload = function(){
  document.getElementById('menu_txt').style.fontSize = "170%";
}

function noscroll() {
    window.scrollTo( 0, 0 );
}
window.addEventListener('scroll', noscroll);

setTimeout(function () {
    window.removeEventListener('scroll', noscroll);
    document.getElementsByClassName('loaderMain')[0].style.display='none';
    },
2000);

function changeTab(id)
{
  document.getElementById('MENU').style.display = 'none';
  document.getElementById('ABOUT').style.display = 'none';
  document.getElementById('CYBER').style.display = 'none';
  document.getElementById('MIND').style.display = 'none';
  document.getElementById('LIFE').style.display = 'none';
  document.getElementById('PHOTO').style.display = 'none';
  document.getElementById('PRASTUTI').style.display = 'none';
  document.getElementById('BYTE').style.display = 'none';
  document.getElementById('REGISTER').style.display = 'none';
  document.getElementById(id).style.display = 'block';
  document.getElementById('menu_txt').innerHTML= id;

  if (id != "REGISTER"){    document.getElementById('trigger').click();
  }
  if(id == "CYBER"){
    document.getElementById('menu_txt').innerHTML = "CYBER&nbsp;ETYMOLOGY";
    document.querySelector('.menu_text').style.marginLeft = "2%";
  }
  if(id == "LIFE"){
    document.getElementById('menu_txt').innerHTML = "LIFE&nbsp;EXTENSION";
    document.querySelector('.menu_text').style.marginLeft = "2%";
  }
  if(id == "MIND"){
    document.getElementById('menu_txt').innerHTML = "MIND&nbsp;SNARE";
  }
  if(id == "BYTE"){
    document.getElementById('menu_txt').innerHTML = "BYTE&nbsp;SURGE";
  }
  if(id == "PHOTO"){
    document.getElementById('menu_txt').innerHTML = "PHOTO&nbsp;HUNT";
  }
}

document.getElementById('trigger').addEventListener("click",function(){
  if (document.getElementById("menu_btn").style.zIndex==10)
    document.getElementById("menu_btn").style.zIndex=18;
  else {
    document.getElementById("menu_btn").style.zIndex=10;
  }
  console.log("action hua");
});


changeTab("MENU");
document.getElementById('trigger').click();
