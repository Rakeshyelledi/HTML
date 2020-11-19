function getjson(file,callback) {
 var xhr=new XMLHttpRequest();
 xhr.overrideMimeType("application/json");
 xhr.open("GET",file,true);
 xhr.onreadystatechange=function(){
  if (xhr.readyState===4 && xhr.status===200) {
         callback(xhr.responseText);
  }
 }
 xhr.send(); 
}
getjson("js2/data2108.json",function(text){
    var d=JSON.parse(text);
    console.log(d);
    sdc(d.details);
    kalyan(d.trainers);
})
var main = document.querySelector(".apssdc-details");
function sdc(Gvl){
 var h = document.createElement("h1");
 h.classList.add("heading","apssdc");
 h.setAttribute("id","apssdc");
 h.textContent=Gvl.name;
 main.appendChild(h);

var img=document.createElement("img");
img.src=Gvl.image;
img.alt="image/webimg.jpg";
main.appendChild(img);

 var a = document.createElement("p");
 a.textContent=Gvl.age;
 main.appendChild(a);

 var b = document.createElement("h2");
 b.textContent="courses in Apssdc";
 main.appendChild(b);
 b.appendChild(document.createElement("hr"));

 var ul=document.createElement("ol");
 for (var i = 0; i < Gvl.Course.length; i++) {
  var li=document.createElement("li");
  li.textContent=Gvl.Course[i];
  ul.appendChild(li);
  }
  main.appendChild(ul);
}
function kalyan(t){
var h = document.createElement("h1");
h.textContent="Details of Trainers";
main.appendChild(h);
h.appendChild(document.createElement("hr"));
var table = document.createElement("table");
var row="";
for (var i = 0; i < t.length; i++) {
	row+="<tr><td>"+t[i].name+"</td><td>"+t[i].experience+"</td><td>"+t[i].email+"</td><td>"+t[i].phone+"</td></tr>"
}
table.innerHTML=row;
main.appendChild(table);
}