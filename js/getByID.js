const formEl1 = document.querySelector('.form');

formEl1.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl1);
    const data = Object.fromEntries(formData);
    
        //Set up for local use, change for github
        fetch('http://localhost:5503/api/v1/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
          .then(data => console.log(data))
          .then(error => console.log(error))
          $.toaster({priority: 'success', title: 'Users', message: "ID found. Did you lose it?"})

});