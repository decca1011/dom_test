console.dir(document);
console.log(document.URL);
console.log(document);

console.log(document.title)
document.title=199
console.log(document.title)
console.log(document.all);

console.log(document.form)
console.log(document.links);


console.log(document.getElementById("header-title"));

var headerTitle = document.getElementById("header-title");
var header =document.getElementById("main-header")
//headerTitle.style.borderBottom="solid 3px #000";
header.style.borderBottom="solid 3px #000";

var items =document.getElementsByClassName("list-group-item")
console.log(items)
items[1].textContent="hello 2"
//items[1].style.fontWeight ="bold"
//items[1].style.backgroundColor ="green";
for(var i=0 ; i<items.length; i++)
{
items[i].style.backgroundColor="grey";
}