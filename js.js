document.addEventListener('DOMContentLoaded' , () =>{
    const form = document.getElementById('commentForm');
    const commentList = document.getElementById('commentList');
    const comments = [];
   form.addEventListener('submit' , (e) => {
        e.preventDefault();

        const name = document.getElementById('username').value;
        const comment = document.getElementById('comment').value;

        comments.push({name , comment});
        commentList.innerHTML = '';
        comments.forEach(({comment , name}) => {

            const newComment = `<div class="comment-item"><strong>${name}</strong><p>${comment}</p></div>`;
            commentList.innerHTML += newComment;

        });
        form.reset();
   }); 
});
