new gridjs.Grid({
    //modify this section based on the desired webpage design
    search: true,
    sort: true,
    pagination: true,
    fixedHeader: true,
    height: "90%",

    columns: [
        //modify this section based on the columns you want included from the data base
        {name: "id", width: "100px"},
        {name: "first", width: "100px"},
        {name: "last", width: "100px"},
        {name: "email", width: "100px"},
        {name: "phone", width: "100px"} ],
    
    server: {
        //local url, change for github upload
        url: "http://localhost:5503/api/v1/users",
        //url: "http://localhost:5503/api/v1/users",
        then: (data) => {
            data.sort((a,b) => b.id - a.id);
            return data.map((users) => [
                users.id,
                users.first,
                users.last,
                users.email,
                users.phone
            ]);   
        }
    },
}).render(document.getElementById("table"));