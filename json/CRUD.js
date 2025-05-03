let fetchData = async () => {                      
    let url = "http://localhost:3000/user";

    let res = await fetch(url);
    let data = await res.json();

    let dataShow = document.querySelector("#datashow");    

    data.map((e) => {
        dataShow.innerHTML += `
        <tr>
            <td>${e.Name}</td>
            <td>${e.Age}</td>
            <td>${e.Check_in}</td>
            <td>${e.Check_out}</td>
            <td>${e.Person}</td>
            <td>${e.City}</td>
            <td>${e.Price}</td>
            <td onclick="Del('${e.id}')"> Delete </td>
        </tr>
        `;
    });
};

fetchData();


//How to delete data by particular id ---->>>
let Del = (id) =>{
    // alert (id);
    let url = `http://localhost:3000/user/${id}`;
    fetch (url,{method:"DELETE"})                         //url ko fetch kiye or DELETE method lgaya , or ye json se bhi data delete kr dega
}