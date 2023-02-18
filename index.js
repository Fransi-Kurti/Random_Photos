const mainContainer = document.getElementById("container");

const btnEl = document.getElementById("btn");


btnEl.addEventListener("click", ()=>{
    imgNumber = 10;
    loadMoreImg();
});


function loadMoreImg(){
    for (let i = 0; i < imgNumber; i++) {
        const newImg = document.createElement("img");
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*3000)}`;
        mainContainer.appendChild(newImg);
        
    }

}