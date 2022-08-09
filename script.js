const form = document.getElementById('Tvform');
const container = document.querySelector('.images')
const btn = document.querySelector('.btn');
form.addEventListener('submit', async(e) =>{
    e.preventDefault();
    
    const userSearch = form.elements.query.value;
    const config = {params: {q: userSearch}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`,config);
    displayImg(res.data);
    form.elements.query.value = '';
})

const displayImg = (shows) =>{
    for(let result of shows){
        
        const img = document.createElement('IMG');
        if(result.show.image){
        img.src = result.show.image.medium;
    }
    else{
        img.src = 'notfound.png';
    }
    container.append(img);
}
    
}
btn.addEventListener('click', ()=>{
    container.innerHTML = '';
    console.log('click');
})