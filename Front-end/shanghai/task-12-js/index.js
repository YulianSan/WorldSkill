let links = Array.from(document.querySelectorAll('button'));
const xmlRequest = new XMLHttpRequest();
let htmlAtual;


document.body.onload = ()=>{
   links = Array.from(document.querySelectorAll('button'));
   
    links.forEach( v =>{
        v.addEventListener('click', carregarPage);
    })
    
}


function carregarPage(e){
    let url = this.getAttribute('data-href');
    xmlRequest.open('GET', url);

    xmlRequest.send();
    history.pushState({}, url, url);


}

xmlRequest.onreadystatechange = function() {
    if(xmlRequest.readyState == XMLHttpRequest.DONE){
        let body = xmlRequest.responseText.match(/(<body>)+?[\w\W]{1,}(<\/body>)+?/gi,'')[0];

        document.body.innerHTML = body;
        document.body.onload();
    }
}