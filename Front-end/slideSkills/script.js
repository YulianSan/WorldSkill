const conteiner_slide = Array.from(document.getElementsByClassName('conteiner-slide'));

conteiner_slide.forEach( conteiner =>{
    const slide = conteiner.getElementsByClassName('conteiner-slide__slides')[0]
    const wSlide = slide.getElementsByClassName('conteiner-slide__slide')[0].getBoundingClientRect().width;
    const btn_right = conteiner.getElementsByClassName('btn-right')[0];
    const btn_left = conteiner.getElementsByClassName('btn-left')[0];

    const intervalMilessecunds = 2000;
    let direction = 1;

    let interval = setInterval(
        ()=>{
            let p = getComputedStyle(slide).getPropertyValue('--p');
            if(slide.scrollLeft <= 0 ){
                direction = 1;
            }

            if(slide.scrollLeft + 50 >= wSlide * (6 - p) ){
                direction = 0;
            }

            if(direction == 1){
                slide.scrollBy(wSlide, 0);
            }
            else{
                slide.scrollBy(-wSlide, 0);
            }


        },intervalMilessecunds
    );
    btn_left.addEventListener('click', ()=>{
        slide.scrollBy(-wSlide, 0);
    });

    btn_right.addEventListener('click', ()=>{
        slide.scrollBy(wSlide, 0);
    });
})