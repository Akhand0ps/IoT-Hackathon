const card1 = document.querySelector('.card1')

card1.addEventListener('click',function() {
    card1.classList.toggle('is-flipped');
})
const card2 = document.querySelector('.card2')

card2.addEventListener('click',function() {
    card2.classList.toggle('is-flipped');
})
const card3 = document.querySelector('.card3')

card3.addEventListener('click',function() {
    card3.classList.toggle('is-flipped');
})
 var imageIndex=0;
 var imageOptions =["img/cl.gif", "img/rt_edu.gif", "img/sd.gif"];

function changeImage()
{
    document.getElementById('image').src = imageOptions[imageIndex];
    imageIndex = (imageIndex + 1) % imageOptions.length;
    
}
