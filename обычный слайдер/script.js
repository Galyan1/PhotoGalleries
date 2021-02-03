/*const getResourse = async(url) =>{
    const res = await fetch(url);
    if (!res.ok){
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
  };
  */
  
  

const back = document.querySelector('#back'),
    next = document.querySelector('#next'),
    gallery = document.querySelector('.gallery'),
    slider = document.querySelector('.slider'),
    SlideFlex = document.querySelector('.slide_flex'),
    SlideContain = document.querySelector('.slider_container');

const imeges = ['olive-oil.jpg', 'paprika.jpg' , 'pepper.jpg'];


for (let k = 0; k < imeges.length; k++) {
    const photo = document.createElement('img');
    photo.src = imeges[k];
    photo.setAttribute('data-number', k );
    gallery.append(photo);
}

const photos = document.querySelectorAll('.gallery>img');

photos.forEach(photo =>{
    photo.addEventListener('click', (e)=>{
        const i = e.target.getAttribute('data-number'); 
        showSlider(i);
    });
});





SlideFlex.addEventListener('click', (e) =>{
    if(e.target === SlideFlex){
        hideSlider();
    }
});



function showSlider(i){
const img = document.querySelector('.slider img');
img.src = imeges[i];
SlideContain.style.display = 'block';
next.addEventListener('click', (e) =>{
    const img = document.querySelector('.slider img');
    if (i<imeges.length-1){
        i++;
        img.src = imeges[i];
    }
    else{
       i = 0;
        img.src = imeges[i];
    }
    console.log(i);
});

back.addEventListener('click', (e) =>{
    const img = document.querySelector('.slider img');
    if (i >= 1){
        i--;
        img.src = imeges[i];   
    }
    else{
        i = imeges.length-1;
         img.src = imeges[i];
     }
    console.log(i);
});
}



function hideSlider(){
    SlideContain.style.display = 'none';
    }