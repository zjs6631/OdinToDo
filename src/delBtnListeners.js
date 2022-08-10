let addListener = () => {

let delBtn = document.getElementsByClassName('delBtn');

for( let i = 0; i < delBtn.length; i++){
    delBtn[i].addEventListener('click', ()=>{
        delBtn[i].parentElement.remove();    
        console.log(i);
    })
}

}

export {addListener};