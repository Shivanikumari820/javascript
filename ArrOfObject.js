
      // <!-- Array of object    [{}, {}, {}] -->
      let UserData = [
        {
          name: "Shivani",
          age: 20,
          city: "Bhopal",
        },
        {
          name: "Shivam",
          age: 21,
          city: "Indore",
        },
        {
          name: "Simran",
          age: 22,
          city: "Delhi",
        },
        {
          name: "Suman",
          age: 23,
          city: "Noida",
        },
      ];

      //How to access Array of Object -->>

      //  console.log(users[0].name); // Output: Shivani


      let dataShow = document.querySelector("#datashow")
      // dataShow.innerHTML = UserData  //object kbhi screen pr print nhi hota vo sirf console pr dikhta h 
 

  /*     UserData.map((e) =>{                  //that's why we use map function jo ki array k elements ko iterate krti h 
           dataShow.innerHTML += `
          <div> 
             <h3> Name =  ${e.name} </h3>   
             <h3> Age = ${e.age}   </h3>
             <h3> City = ${e.city} </h3>
          </div
           `;
         });    */


//ab ham upr wale method ko table me show krenge
       UserData.map((e) =>{                  //that's why we use map function jo ki array k elements ko iterate krti h 
          dataShow.innerHTML += `
          <tr>
            <td> Name =  ${e.name} </td>
            <td> Age = ${e.age}    </td>
            <td> City = ${e.city}  </td>
      
          `;
        });
        
