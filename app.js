const reviews = [
    {
        id:  1,
        author:"nagato",
        job:"akatsuki leader",
        img:
        "https://tse1.mm.bing.net/th?id=OIP.QZaTbMtVA_O9tF_CeF1k_gHaHa&pid=Api&P=0&h=180 ",
        text:"former leader of akatsuki ,lost his best friend,understands madara's dream n helps in achevbing it. But justafter battling with nNaruto ,he understands true nature of peace,and dies in the battle.",

    },
    {
        id:2,
        author:"Itachi uchiha",
        job:"katsuki member",
        img:
        "https://tse3.mm.bing.net/th?id=OIP.QaSfYYINHWURfymjVqTgLQHaEK&pid=Api&P=0&h=180",
        text:"true kindness lives behind the darkness of a person. itachi is that person,true believer in peace.All naruto fans fav char",

    },
    {
        id:3,
        author:"Madara Uchiha",
        job:"founder of project Tsukinome",
        img:
        "https://tse2.mm.bing.net/th?id=OIP.PaeG95srnkQk0GWxi9m92QHaEK&pid=Api&P=0&h=180",
        text:"Ghost of the UChiha,MAn behinf the destruction of Shinobi world",

    },
    {
        id:4,
        author:"sara jones",
        job:"Data Scientist",
        img:
        "https://tse4.mm.bing.net/th?id=OIP.r0Db0jA07Q-jfzWJRra01wHaEK&pid=Api&P=0&h=180",
        // https://1drv.ms/f/s!Ar4w53B9hvOZdIjXg0v9jd-JnC8?e=iqLHU0,

    },

]

const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job= document.getElementById("job")
const info = document.getElementById("info")

const prevbtn = document.querySelector(".prev-btn")
const nextbtn = document.querySelector(".next-btn")
const randombtn = document.querySelector(".random-btn")

let citem = 0;
window.addEventListener('DOMContentLoaded',function(){
    showperson()
    
})
function showperson(){
    const item = reviews[citem]
    img.src = item.img
    author.textContent = item.author
    job.textContent = item.job
    info.textContent = item.author
    
 } prevbtn.addEventListener('click',function(){
    citem--;
    if(citem<0 ){
        citem = reviews.length -1
    }
    showperson()
 })
  nextbtn.addEventListener('click',function(){
    citem++;
    if(citem>reviews.length -1 ){
        citem = 0 }
    showperson()
 })
//   randombtn.addEventListener('click',function(){
//     citem = Math.floor(Math.random)*reviews.length
//     console.log 
//     showperson()
//  })
 