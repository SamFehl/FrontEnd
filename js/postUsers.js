const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    //optional conditional statement to ensure information is actually input
    if (data.id === "" || data.first === "" || data.last === "" || data.email === "" || data.phone === ""){
        $.toaster({ priority: 'danger', title: 'Error', message: "it's called a database, not a nothing base"})
    }
    else {
        //Set up for local use, change for github
        fetch('http://localhost:5503/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
          .then(data => console.log(data))
          .then(error => console.log(error))
          $.toaster({priority: 'success', title: 'Users', message: "mo' users, mo' problems"})
    }
});