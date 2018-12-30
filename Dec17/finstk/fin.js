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
});


function compareDT(ph) {

var aa = new Date();
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


var cc = Date.UTC(yy, mm, dd, hh, mt);
var df = bb-cc;

if (df <= xyz) {
alert("T");
} else {
alert("F");
}
	
}
