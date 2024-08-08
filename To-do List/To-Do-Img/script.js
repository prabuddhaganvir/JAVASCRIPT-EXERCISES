const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

// adding task and X icon
function addTask(){
    if (inputBox.value === '') {
        alert("Please Write Something")
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputBox.value =" ";
    saveData()
}
// remove and checked toggle
listContainer.addEventListener('click',function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData()

    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false)

// saving in localStorage

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML)
}
function showList(){
    listContainer.innerHTML = localStorage.getItem('data')
}
showList();