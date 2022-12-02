let array_ratings = {};
let comentarios = [];

function get_data(){
    let data;
    fetch('data.json').then( v => {
        return v.json()
    }).then( v=>{
        data = v;
        exibir_avaliacao(data.Reviews);
        exibir_comentarios(data.Reviews);
    });


}

function exibir_comentarios(data = []){
    let string_html = '';
    const htmlRatings = (ratings)=>{
        let string_html = '';
        for(const key in ratings) {
            string_html += `<span class="rating">${key}: ${Math.min(Number(ratings[key]), 5).toFixed(1)}</span>`;
        }
        return string_html;
    }
    const htmlComentario = ({author, title, content, ratings})=>`
        <div class="comentario">
        <div class="title">${title}</div>
        <span class="content">${content}</span>
        <span class="author"> - ${author}</span><br><br>
        <div class="ratings">${htmlRatings(ratings)}</div>
        </div>`;

    data.forEach( v=>{
        const title = v.Title;
        const content = v.Content;
        const author = v.Author;
        const created_at = new Date(v.Date);
        const ratings = v.Ratings;

        comentarios.push({
            title,
            content,
            author,
            created_at,
            ratings
        });
    });

    comentarios.sort( (a ,b)=>{
        let diffDate = a.created_at.getTime() - b.created_at.getTime();
        if(diffDate > 0){
            return -1;
        }
        if(diffDate < 0){
            return 1;
        }
        return 0;
    });

    comentarios.forEach( v =>{
        string_html += htmlComentario(v);
    });

    document.getElementById('comentarios').innerHTML = string_html;

}
function exibir_avaliacao(data = []){
    data.forEach( v =>{
        for (const key in v.Ratings) {

            let name = key;
            let value = v.Ratings[key];
            
            if(!(name in array_ratings)){
                array_ratings[name] = {};
                array_ratings[name].value = 0;
                array_ratings[name].count = 0;

            }

            array_ratings[name].value+= Number(value);
            array_ratings[name].count++;
            
        }
    });

    show_ratings();
}

function show_ratings(){
    let string_html = '';
    let htmlMedia = (item, media)=> `
    <div class="media">
        <div class="item">${item}</div>
        <div class="valor">${media}</div>
    </div>`;
 
    for (const key in array_ratings) {
        const item = key;
        const obj = array_ratings[key];
        const media = Math.round((obj.value / obj.count) * 10)/10;

        console.log('Item: ' + item +', Media: ' + media);
        string_html += htmlMedia(item, media);

        document.getElementById('medias').innerHTML = string_html;
    }


}
get_data();