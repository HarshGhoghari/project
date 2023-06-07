import nav from "../components/navbar.js"



let data = async () => {
    let res = await fetch("https://dummyjson.com/products")
    let data = await res.json()
    display(data.products)
}
data()

const display = (data) => {

    data.map((Element) => {
        console.log(Element);
        let img = document.createElement("img");
        img.src = Element.images[1];
        let title = document.createElement("h5");
        title.innerHTML = Element.title;
        let price = document.createElement("p");
        price.innerHTML = Element.price;
        let brand = document.createElement("h3")
        brand.innerHTML = Element.brand;
        let rating = document.createElement("h5")
        rating.innerHTML = Element.rating;
        let category = document.createElement("p")
        category.innerHTML = Element.category;
        let btn1 = document.createElement("button");
        btn1.innerHTML = "Add to cart";
        btn1.addEventListener("click", () => {
          let cartitem = JSON.parse(localStorage.getItem("cartitem")) || [];
    
          let existing = false;
          cartitem.map((item,index) => {
            if (item.id == Element.id) {
              existing = true;
              cartitem[index].qty+=1;
            }
          });
    
          if (existing) {
            cartitem.push({ ...Element, qty: 1 });
            alert("product has been added")
          }
    
          localStorage.setItem("cartitem", JSON.stringify(cartitem));
        });
        let btn2 = document.createElement("button");
        btn2.innerHTML = "Buy now";
        btn1.style.backgroundColor = "red";
        let div = document.createElement("div");
        div.append(img, title, price, brand, rating, category, btn1, btn2);
        document.querySelector(".box2").append(div);
    });
};

console.log(nav);
document.getElementById("nav").innerHTML = nav();