window.onload = function() {
var beginid = window.setTimeout(function (){
fetch("https://finviz.com/screener.ashx?v=321").then(res=>res.text()).then(resd=>{
document.querySelector('html').parentNode.removeChild(document.querySelector('html'));
return resd;
}).then(res=>{
document.appendChild(document.createElement('html'));
return res;
}).then(resd=>{
document.querySelector('html').innerHTML = resd;
return resd;
}).then(rep=>{

var parser = new DOMParser();
var doc = parser.parseFromString(rep, "text/html");


var tbs = doc.querySelectorAll("table.body-table-news");


var i,j;
for (i = 0; i < tbs.length; i++) {
var trs = tbs[i].querySelectorAll("tr");
for (j = 0; j < trs.length; j++) {
var tds = trs[j].querySelectorAll("td");
var ttt = tds[0];
var zzz = tds[1];
compareDT(ttt, zzz);

}

}





});

function compareDT(datex, docx) {
var ph = datex.textContent;
var doc = docx;
//var aa = new Date();
var aa = new Date(2018, 11, 28, 18, 40)
var bb = Date.UTC(aa.getUTCFullYear(), aa.getUTCMonth(), aa.getUTCDate(), aa.getUTCHours(), aa.getUTCMinutes());
var xyz = 43200000;
var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
// var ph = "Dec-14-18 11:31AM";
var pha = ph.split(" ");
var phb = pha[0].split("-");
var phc = pha[1].split(":");
var mm = months.indexOf(phb[0].toUpperCase());
var dd = Number(phb[1]);
var yy = Number("20" + phb[2]);
var hr = Number(phc[0]);
var clock = phc[1].substr(-2, 2);
if (clock == "AM"){ 
var hh = (hr == 12 ) ? 0 : hr;
} else if (clock == "PM"){
var hh = (hr == 12 ) ? 12 : 12+hr;
}
var mt = Number(phc[1].substr(0, 2));
var xd = new Date(yy, mm, dd, hh, mt);
var cc = Date.UTC(xd.getUTCFullYear(), xd.getUTCMonth(), xd.getUTCDate(), xd.getUTCHours(), xd.getUTCMinutes());
var df = bb-cc;



if ((df <= xyz) && (df >= 0)) {
console.log(doc.firstElementChild.textContent, "---" , doc.firstElementChild.getAttribute("href"));
var ka = new Date(bb);
var kb = new Date(cc);
console.log("+++T, " + aa + ", " + xd + ", " + bb + ", " + cc + ", " + df + " - " + ka + " - " + kb + "++++");
} else {




var ka = new Date(bb);
var kb = new Date(cc);
console.log("+++F, " + aa + ", " + xd + ", " + bb + ", " + cc + ", " + df + " - " + ka + " - " + kb + "++++");
}



}
}, 2000);
};