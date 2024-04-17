document.addEventListener('DOMContentLoaded', function () {
    let counterValue = 0;
    let timerInterval = setInterval(incrementCounter, 1000);
    const counterElement = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const likeButton = document.getElementById('heart');
    const pauseButton = document.getElementById('pause');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('list');

    function incrementCounter() {
        counterValue++;
        counterElement.textContent = counterValue;
    }

    function decrementCounter() {
        counterValue--;
        counterElement.textContent = counterValue;
    }

    plusButton.addEventListener('click', incrementCounter);
    minusButton.addEventListener('click', decrementCounter);

    likeButton.addEventListener('click', function () {
        const likesList = document.querySelector('.likes');
        const likeItem = document.createElement('li');
        likeItem.textContent = `${counterValue} has been liked`;
        likesList.appendChild(likeItem);
    });

    pauseButton.addEventListener('click', function () {
        if (pauseButton.textContent.trim() === 'pause') {
            clearInterval(timerInterval);
            plusButton.disabled = true;
            minusButton.disabled = true;
            likeButton.disabled = true;
            commentInput.disabled = true;
            commentForm.querySelector('button').disabled = true;
            pauseButton.textContent = 'resume';
        } else {
            timerInterval = setInterval(incrementCounter, 1000);
            plusButton.disabled = false;
            minusButton.disabled = false;
            likeButton.disabled = false;
            commentInput.disabled = false;
            commentForm.querySelector('button').disabled = false;
            pauseButton.textContent = 'pause';
        }
    });



    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const commentText = commentInput.value;
        const commentItem = document.createElement('div');
        commentItem.textContent = commentText;
        commentsList.appendChild(commentItem);
        commentInput.value = '';
    });
});
