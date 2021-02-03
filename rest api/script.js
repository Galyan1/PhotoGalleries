const getResource = async (url) =>{
    const res = await fetch(url);
    return await res.json();
};



function createPhotos(data){
        let imeges = data.filter((item) =>{return item.id <= 10; });
        imeges = imeges.map((item) => {return item.thumbnailUrl;});
        const back = document.querySelector('#back'),
        next = document.querySelector('#next'),
        gallery = document.querySelector('.gallery'),
        SlideFlex = document.querySelector('.slide_flex'),
        SlideContain = document.querySelector('.slider_container');


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
    document.body.style.overflow = 'hidden';
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
        document.body.style.overflow = '';
        }
        
}

getResource('https://jsonplaceholder.typicode.com/photos')
.then (data => createPhotos(data));



