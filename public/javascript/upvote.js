async function upvoteClickHandler(event){
    event.preventDefault();

    // converts url into an array splitting by / 
    // and retrieving the last item as the id
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    // upon 'PUT' submission will fetch and complete this function
    const response = await fetch('/api/posts/upvote', {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);