const imgs_holofotes = Array.from(document.querySelectorAll('.img'));
let size = 1;

imgs_holofotes.forEach( v => {
    
    v.addEventListener('mouseenter', function() {
        v.children[0].classList.add('active');
    })

    v.addEventListener('mousemove', function(e) {
        const x = e.pageX - this.offsetLeft;
        const y = e.pageY - this.offsetTop;
        
        v.children[0].style.left = x - (v.children[0].clientWidth/2) + 'px';
        v.children[0].style.top = y - (v.children[0].clientWidth/2) + 'px';

    });
    
    v.addEventListener('mouseleave', function() {
        console.log("OI")
        v.children[0].classList.remove('active');
    })
    
    v.addEventListener('wheel', aumentarHolofote);
});

function aumentarHolofote(e) {
    e.preventDefault();

    size += e.deltaY * -0.001;

    size =  Math.max(size, 0.1);
    size =  Math.min(size, 4  );

    this.children[0].style.transform = `scale(${size})`;
    
}


