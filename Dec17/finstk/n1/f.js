window.onload = function() {
var beginid = window.setTimeout(function (){

document.querySelector('html').parentNode.removeChild(document.querySelector('html'));
document.appendChild(document.createElement('html'));
document.querySelector('html').innerHTML = `<head></head><body><label for="inews">News URL:</label>
<input type="text" id="inews" value="https://finviz.com/screener.ashx?v=321"><br /><br />
<input type="submit" value="Show Latest News [Past 12 Hours]" id="butn">
</body>`;
var newsdiv = document.createElement("div");
document.body.appendChild(newsdiv);

var butn = document.querySelector("#butn");
butn.addEventListener("click", newslistener);

var inews = document.querySelector("#inews");
inews.select();
inews.onclick = inews.select;
inews.addEventListener("keyup", function(vfd) {
  vfd.preventDefault();
  if (vfd.keyCode === 13) {
    butn.click();
  }
});




function newslistener(ved){
ved.preventDefault();
newsdiv.innerHTML = "";
var furl = inews.value;
pagesCount(furl);
inews.select();
inews.onclick = inews.select;
}



function pagesCount(furl){

fetch(furl).then(res=>res.text()).then(rep=>{
var parser = new DOMParser();
var pdoc = parser.parseFromString(rep, "text/html");
var totalpages = pdoc.querySelectorAll("a.screener-pages")[pdoc.querySelectorAll("a.screener-pages").length-1].textContent;
var pfn = [];
var surl;
var spage;
var page;
var u;

for (u = 0; u < 10; u++) {
page = u+1
spage = (page*10)-9;
surl = "https://finviz.com/screener.ashx?v=321&r=" + spage;
pfn[u] = function(){fetch(surl);};
}




Promise.all(pfn).then(res=>res[0].text()).then(
rep=>{
var parser = new DOMParser();
var doc = parser.parseFromString(rep, "text/html");
var tbs = doc.querySelectorAll("table.body-table-news");
var i,j;
for (i = 0; i < tbs.length; i++) {
var trs = tbs[i].querySelectorAll("tr");
for (j = 0; j < trs.length; j++) {
var tds = trs[j].querySelectorAll("td");
compareDT(tds[0], tds[1]);
}}});




});}


function getNews(furl){
fetch(furl).then(res=>res.text()).then(rep=>{
var parser = new DOMParser();
var doc = parser.parseFromString(rep, "text/html");
var tbs = doc.querySelectorAll("table.body-table-news");
var i,j;
for (i = 0; i < tbs.length; i++) {
var trs = tbs[i].querySelectorAll("tr");
for (j = 0; j < trs.length; j++) {
var tds = trs[j].querySelectorAll("td");
compareDT(tds[0], tds[1]);
}}});}




function compareDT(datex, doc) {
var ph = datex.textContent;
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
var xd = new Date(yy, mm, dd, hh, mt);
var cc = Date.UTC(xd.getUTCFullYear(), xd.getUTCMonth(), xd.getUTCDate(), xd.getUTCHours(), xd.getUTCMinutes());
var df = bb-cc;

if ((df <= xyz) && (df >= 0)) {
newsdiv.innerHTML += `<p></p>` + ph + ` ` + `<a href=${doc.firstElementChild.getAttribute("href")} target="_blank" class="tab-link-news">
${doc.firstElementChild.textContent}
</a><br />`


console.log(doc.firstElementChild.textContent, "---" , doc.firstElementChild.getAttribute("href"));
var ka = new Date(bb);
var kb = new Date(cc);
console.log("+++T, " + aa + ", " + xd + ", " + bb + ", " + cc + ", " + df + " - " + ka + " - " + kb + "++++");
} else {


var ka = new Date(bb);
var kb = new Date(cc);
console.log("+++F, " + aa + ", " + xd + ", " + bb + ", " + cc + ", " + df + " - " + ka + " - " + kb + "++++");
}}}, 2000);};
