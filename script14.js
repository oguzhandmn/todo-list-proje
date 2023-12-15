// todo eleman ekleme


// eleman secimi 

  const form = document.querySelector("form");
  const input = document.querySelector("#txtTaskName");
  const btnAddNewTask = document.querySelector("#btnAddNewTask");
  const btnDeleteAll = document.querySelector("#btnDeleteAll");
  const tasklist = document.querySelector("#task-list");
  

eventListeners();

function eventListeners() {
    // submit event 

    form.addEventListener("submit", AddNewItem);
    // delete an item 
    tasklist.addEventListener("click", deleteItem);
//  delete all item
btnDeleteAll.addEventListener("click",deleteAllItem);


}

function AddNewItem(e) {


    if (input.value === '') {
        alert("add new item");
        //  console.log("submit");
    }
    // li olustuma

    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";

    li.appendChild(document.createTextNode(input.value));

    // a olusturmak

    const a = document.createElement("a");

    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';


    li.appendChild(a);

    tasklist.appendChild(li);

    input.value = '';

    e.preventDefault();


}

// Eleman Silme

function deleteItem(e) {
    if (confirm("silmek istediginize emin misiniz ?")) {
        if (e.target.className === "fas fa-times") {
            //     console.log(e,target);
            e.target.parentElement.parentElement.remove();
        }


    }

    e.preventDefault();
}


// Tum elemanlari silmek

function deleteAllItem (e){

 if( confirm("silmek istediginize eminmisiniz")){
    tasklist.childNodes.forEach(function(item){
        // console.log(item);
        if(item.nodeType === 1){
             item.remove();
         }
    })
        
     }

// tasklist.innerHTML="";

}



// deneme 

// todo liste eklelme 

// const form = document.querySelector("form");
// const input =document.querySelector("#txtTaskName");
// const AddNewItem=document.querySelector("#btnAddNewTask");
// const deleteAllItem=document.querySelector("#btnDeleteAll");
// const tasklist=document.querySelector("#task-list");

// eventListeners();

// function eventListeners(){

// // submit ekleme 
// form.addEventListener("submit",AddNewItem);
// // delete an items silme 
// tasklist.addEventListener("click",deleteItem);
// // deleteallitems hepsini silme 
// btnDeleteAll.addEventListener("click",deleteAllItem);
// }

// // ekleme 

// function AddNewItem(e){

//     if(input.value=== ''){
//         alert("add new item ");
//     }


// //  li ekleme 


// const li =document.createElement("li");
// li.appendChild.forEach(document.createTextNode(input,value));

// // a olusturma 
 
// const a =document.createElement("a");
// a.className="delete-item float-right";
// a.setAttribute("href","#");
// a.innerHTML='<i class="fas fa-times"></i>';

// li.appendChild(a);
// tasklist.appendChild(li);


// e.preventDefault();

// input.value='';

// }


// // eklemeyi silme 

// function deleteItem(e){
//  if(confirm("silmek istedigine eminmisin ?")){
//     if(e.target.className=== "fas fa-times"){
//         e.target.parentElement.parentElement.remove();
//     }
//  }

// e.preventDefault();


// }


// // hepsini silmek icin 

// function deleteAllItem(e){

// if(confirm("hepsini silmek istedigine eminmisin?")){
//      tasklist.childNodes.forEach(function(item){
//       if(item.nodeType=== 1){
//         item.remove();
//       }
    
//      })



// }


// }






