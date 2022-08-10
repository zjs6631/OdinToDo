import { addListener } from "./delBtnListeners";

let removeListeners = () => {
    let delBtn = document.getElementsByClassName('delBtn');
    for(let j = 0; j < delBtn.length; j++){
        delBtn[j].removeEventListener('click', addListener);
    }
};

export {removeListeners};