const content = document.querySelectorAll(".content");
const liList = document.querySelectorAll("nav ul li");


liList.forEach((item,idx)=>{
    item.addEventListener('click',()=>{
        hideContent()
        hideliList()
        item.classList.add("active");
        content[idx].classList.add("show");
    })
})

function hideContent(){
    content.forEach((e)=>{e.classList.remove("show")})
}
function hideliList(){
    liList.forEach((e)=>{e.classList.remove("active")})
}