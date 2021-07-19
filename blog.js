  
let data = ["India's Unique Forts","Glamping In The Western Ghats: When Serenity Beckons","Around India In 12 Jyotirlingas","Indian Monsoon Getaways","India - The Land Of Yoga","Joy To The World: Christmas And New Year Celebrations"]
let counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 6){
    counter = 1;
    }
}, 5000);

let slide = document.querySelectorAll('.slide')
for(let i =0;i<6;i++){
    slide[i].addEventListener('click', () => {
        location.href = `/blogtype/indx${i+1}.html`
    })
}
let text = document.querySelector('.text')
for(let i =0;i<6;i++){
    slide[i].addEventListener('mouseover', () => {
        text.innerHTML = `${data[i]}`
        text.classList.add('para')
    })
}
for(let i =0;i<6;i++){
    slide[i].addEventListener('mouseout', () => {
        text.innerHTML = '';
        text.classList.remove('para')

    })
}