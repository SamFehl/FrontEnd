const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
        //Set up for local use, change for github
        fetch('http://localhost:5503/api/v1/users', {
        //fetch('http://localhost:5503/api/v1/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
          .then(data => console.log(data))
          .then(error => console.log(error))
          $.toaster({priority: 'success', title: 'Users', message: "updated user. who got divorced?"})
});
//.render(document.getElementById("form-group"));