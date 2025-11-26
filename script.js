let modal = document.getElementById("modal");
let addBtn = document.getElementById("addUserBtn");
let closeBtn = document.getElementById("closeModal");
let saveBtn = document.getElementById("saveUser");
let inputUser = document.getElementById("userInput");
let tableUsers = document.getElementById("userTable");

let count = tableUsers.rows.length;  // عدد الصفوف = عدد المستخدمين

// تحديث الرقم في الكارد
function updateUserCount(){
    document.querySelector(".card").innerText = "Users: " + count;
}

// أول تحديث عند بدء الصفحة
updateUserCount();

addBtn.onclick = function(){
    modal.style.display = "flex";
}

closeBtn.onclick = function(){
    modal.style.display = "none"
}

saveBtn.onclick = function(){
    let val = inputUser.value;
    if(val !== ""){
        count++;
        let row = document.createElement("tr");
        row.innerHTML = "<td>" + count + "</td><td>" + val + "</td>";
        tableUsers.appendChild(row);

        updateUserCount(); // ← تحديث العدد

        inputUser.value = "";
        modal.style.display = "none";
    }
}

modal.onclick = function(e){
    if(e.target === modal){
        modal.style.display = "none"
    }
}
