const control_theme = document.getElementById('theme');

control_theme.addEventListener('change', alterarThema);

function alterarThema(){
    if(control_theme.checked){
        document.body.classList.add('dark');
    }else{
        document.body.classList.remove('dark');
    }
}