const popUp = (src)=>`
    <div 
        class = "popup-image"
        style="
        width: 100%;
        height: 102%;
        background-color: #000000cc;
        position: fixed;
        transform: translate(-50%, -50%); 
        top: 49%;left: 50%;
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        padding: 100px">
            <button style="width: 50px; height: 50px;flex: none;border-radius: 50%;" class="left_img">&#60;</button>
            <img
                style="
                width: 100%;
                height: 100%;
                object-fit: contain;" 
                src="${src}" alt="popup"
            >
            <button style="width: 50px; height: 50px;flex: none;border-radius: 50%;" class="right_img">&#62;</button>
        </div>
`
let indice = -1;

function initPlugin(){
    const imgs = document.querySelectorAll('img');

    Array.from(imgs).forEach( (e, i) =>{
        e.addEventListener('click', ()=>{zoomImages(e); indice = i});
    });
}
function zoomImages(e){
    document.body.innerHTML =  popUp(e.src) + document.body.innerHTML;
    let element = document.getElementsByClassName('popup-image')[0];

    element.addEventListener('click', (e)=>{
        document.body.removeChild(element);
        initPlugin();
    });
    
    document.getElementsByClassName('left_img')[0].addEventListener('click', (e)=>{
        element.click();

        let i = indice - 1 >= 0? indice - 1: document.querySelectorAll('img').length - 1;

        document.querySelectorAll('img')[i].click();
        e.stopPropagation();
    });
    
    document.getElementsByClassName('right_img')[0].addEventListener('click', (e)=>{
        element.click();

        let i = indice + 1 >= document.querySelectorAll('img').length? 0: indice + 1;

        document.querySelectorAll('img')[i].click();
        e.stopPropagation();
    });

}

initPlugin();