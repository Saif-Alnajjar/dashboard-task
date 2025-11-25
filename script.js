let modal = document.getElementById("modal");
let addBtn = document.getElementById("addUserBtn");
let closeBtn = document.getElementById("closeModal");
let saveBtn = document.getElementById("saveUser");
let inputUser = document.getElementById("userInput");
let tableUsers = document.getElementById("userTable");

let count = 5;

// لما اضغط من فوق لفتح المودال
addBtn.onclick = function(){
    modal.style.display = "flex";
}

// زر الاغلاق
closeBtn.onclick = function(){
    modal.style.display = "none"
}

// لما اضغط على save يضيف المستخدم
saveBtn.onclick = function(){
    let val = inputUser.value;
    if(val !== ""){
        count++;
        let row = document.createElement("tr");
        row.innerHTML = "<td>" + count + "</td><td>" + val + "</td>";
        tableUsers.appendChild(row);

        inputUser.value = "";
        modal.style.display = "none";
    }
}

// اغلاق اذا ضغطت برة الصندوق
modal.onclick = function(e){
    if(e.target === modal){
        modal.style.display = "none"
    }
}
