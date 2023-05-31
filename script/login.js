document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let user = JSON.parse(localStorage.getItem("user")) || null;
    console.log(user);
});
let email = document.getElementById("email").value;
let password =document.getElementById("password").value;
if(email == user.email && password == user.password) {
    alert("login success")
}