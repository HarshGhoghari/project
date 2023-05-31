document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    let user={
        name:document.getElementById("name").value,
        name:document.getElementById("name").value,
        name:document.getElementById("name").value,
        name:document.getElementById("name").value,
    }
    localStorage.setItem("user",JSON.stringify(user));
    console.log(user);
})