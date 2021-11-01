

document.body.innerHTML = `<section>
<div class = "heading">APPLE PHONES AND WATCHES</div>
<div class="container"></div>
</section>`


async function getAllData(){
    const data1 = await fetch(
        "https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48",
        {method: "GET"}
    );
    // console.log(data);
    
    const applePhones = await data1.json();
    
    const appleContainer = document.querySelector(".container");

    applePhones.data.phones.forEach((applePhone)=>{
        appleContainer.innerHTML += `<div class= "grid-container">
        <div class = "apple-container">
        <div class = "details">
        <img class = "apple-img"  src = "${applePhone.image}" alt = "${applePhone.phone_name}" />
        <p class = "name">Brand:  ${applePhone.brand}</p>
        <p class = "name">Name:  ${applePhone.phone_name}</p>
        
        </div>
        </div> 
        </div>  
        `;
    });
}
getAllData();
