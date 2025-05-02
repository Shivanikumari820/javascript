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
            <td>${e["Check-in"]}</td>
            <td>${e["Check-out"]}</td>
            <td>${e.Person}</td>
            <td>${e.City}</td>
        </tr>
        `;
    });
};

fetchData();