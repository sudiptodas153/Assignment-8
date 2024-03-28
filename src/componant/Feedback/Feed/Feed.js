import { createElement } from "react";

const allFunction = () => {
    document.getElementById('submit').addEventListener('click', function(){
        const comment = document.getElementById('new-comment');
        const newComment = comment.value;
        const commentContainer = document.getElementById('add-comment');
        const p = createElement('p');
        p.innerText = newComment;
        commentContainer.appendChild(p);
        comment.value = ''; 
    })
}

export {allFunction}