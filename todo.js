


var list=document.getElementById("list");
function addtodo()
{
var a=document.getElementById("todo");
var li=document.createElement("li");
var litext=document.createTextNode(a.value);
li.appendChild(litext);
list.appendChild(li);
//Edit Button
var edit=document.createElement("button");
var edittext=document.createTextNode("Edit");
edit.appendChild(edittext);
edit.setAttribute("class","btn btn-success");
edit.setAttribute("onclick","edit(this)");
li.appendChild(edit);

//Delete Button
var del=document.createElement("button");
var deltext=document.createTextNode("Delete");
del.appendChild(deltext);
del.setAttribute("class","btn btn-danger");
del.setAttribute("onclick","del(this)");
li.appendChild(del);


a.value=" ";


}


function del(e){

  e.parentNode.remove()
}
function delall()
{
    list.innerHTML=" "
}
function edit(e){
   
    var val=e.parentNode.firstChild.nodeValue;
    var edit =prompt("Enter Value",val)
    e.parentNode.firstChild.nodeValue=edit
    

}
