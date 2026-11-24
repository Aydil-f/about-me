(function(){
  var views=["start","profil","project","contact"];
  var nav=document.getElementById("nav");
  function show(){
    var h=(location.hash||"").replace("#","");
    if(views.indexOf(h)<0)h="start";
    document.querySelectorAll(".screen").forEach(function(s){s.classList.toggle("on",s.dataset.view===h)});
    nav.hidden=(h==="start");
    nav.querySelectorAll("a").forEach(function(a){
      if(a.getAttribute("href")==="#"+h)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");
    });
    window.scrollTo(0,0);
  }
  document.querySelectorAll("[data-go]").forEach(function(b){
    b.addEventListener("click",function(){location.hash=b.dataset.go});
  });
  window.addEventListener("hashchange",show);
  show();
})();
