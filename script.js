document.write("my name is bikash")
document.title = "javascript tutorials";
let df = document.createDocumentFragment();
let h1 = document.createElement("h1");
h1.textContent = "i am h11";
let h2 = document.createElement("h2");
h2.textContent = "i am h2";
df.append(h1, h2);
let bkas = document.querySelector("body");
bkas.append(df);



let mobile = function (model_no) {
    this.model = model_no;
    this.ram = "4gb";
    this.price = function () {
        document.write(this.model + this.ram + "price is 400");
    }
};
mobile.prototype.color = "red"
let nokia = new mobile("galaxy");
nokia.price();
document.write(nokia.color);


let aach = document.querySelector("ul");
let newnode = document.createElement("li");
newnode.textContent = "contact";
let second = document.getElementById("sec");
aach.insertBefore(newnode, second);
console.log(aach);

aach.children[3].textContent = "info";

let iam = document.getElementById("iamh1");
let para = document.createElement("p");
para.textContent = "i am cool";
//iam.insertAdjacentElement("afterbegin",para);
//iam.insertAdjacentElement("afterend",para);
//iam.insertAdjacentElement("beforebegin",para);
//iam.insertAdjacentElement("beforeend",para);
console.log(iam);

//aach.insertAdjacentElement("beforebegin",para);
let inp = "<input >text</input>";
//aach.insertAdjacentHTML("beforebegin",inp)

//innerHtml replace the all the tag with the given 
//content

//aach.innerHTML="";

//aach.innerHTML = "<li>bikash</li><li>ashmit</li><li>sonu</li><lli>runa</li>"

//aach.outerHTML="<ol><li>bikash</li><li>ashmit</li><li>sonu</li><lli>runa</li> </ol>"
//aach.children[1].textContent="login";

  //aach.innerText="biaks,gupta"

  // how to copy / clone node in javascript
// if we provide true then it will copy element along with it child
// if we provide false then it will copy element
  let kaj=document.getElementById("secul")
  let duplicate=aach.children[0].cloneNode(true);
  //kaj.append(duplicate);

  // how to remove node 
let removenode=aach.children[0];
 // aach.removeChild(removenode);

 // syntax of replace child 
 //parentnode.repaldechild (newnode,oldnode)
 let ashmi=document.createElement("li");
 ashmi.textContent="bikash";
 //aach.replaceChild(ashmi,removenode);

 // how to find length of a text node
console.log(iam.firstChild.length);

 // how to find or modify textNode data

 iam.firstChild.data="my name is bikash gupta";

 // how ta append data in textNode
  iam.firstChild.appendData(".i am cool");

  // how to delete textNode 
  //iam.firstChild.deleteData(12,15);

// how to insert data in text node

//iam.firstChild.insertData(15,"ashmit")

//how to replace data

//iam.firstChild.replaceData(0,4,"i am")

//how to trim data from a textNode
// let tr=iam.firstChild.substringData(5,3);
//console.log(tr);

iam.firstChild.data="my name is bikash gupta";
iam.firstChild.appendData(".I am cool");
let fir=iam.firstChild;
//iam.removeChild(fir);
//iam.textContent="i am cool"
let bk=document.querySelector("h2");
let repl="my name is ashmit";

let fo=document.querySelector("form");
//let sib=document.createElement("input");
//fo.append(sib);
let mog=fo.children[0];
//mog.type="text";
//mog.placeholder="ckli"

console.log(mog)

function avisekh(){
  //mog.value="iamchanged";
  //mog.type="text";
  mog.setAttribute("value","iamchan");
  mog.setAttribute("style","background:red")
  
}

// se
//mog.setAttribute("value","iamchanged")
mog.value="iamcol";
mog.setAttribute("onclick",'avisekh()');

//how to remove attribute
mog.removeAttribute("onclick");

mog.style.backgroundColor="blue";
mog.style.color="white";

console.log(mog.classList); 
mog.setAttribute("class","ashash");
mog.className="iamnewclass";
mog.classList.add("myclass");
console.log(mog.style[1]);

console.log(window.getComputedStyle)

let tavle=document.getElementById("mytable");
console.log(tavle.caption);

let cap=tavle.createCaption();
//tavle.deleteCaption();
cap.textContent="i am new";
// createThead and createTfoot

//inserRow and deleteRow
let con=tavle.insertRow(-1);
con.insertCell(0).textContent="20";
con.insertCell(1).textContent="sonu";
con.insertCell(2).textContent="php";

//tavle.deleteRow(1);
let newtab="<table></table>"
tavle.insertAdjacentHTML("afterend",newtab);

//html table section element
tavle.rows[1].cells[1].textContent="kajal";
tavle.rows[1].insertCell(3).textContent="kak";
tavle.rows[3].insertCell(3).textContent="suck";

let eve=document.getElementById("mybtn");
eve.onclick=() => {
  eve.style.backgroundColor = "red";
  eve.style.color = "orange";

}
let myb=document.getElementById("mybtn1");
function event1(e){
  myb.style.color="red";
  //myb.style.backgroundColor="green";
  console.log(e);

  
  
}
myb.addEventListener("mouseover",event1)
