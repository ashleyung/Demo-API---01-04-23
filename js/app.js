// function fetchFakeTodoAPI() {
//   let todoResultData = document.getElementById("result");
//   let endPointBaseURL = "https://jsonplaceholder.typicode.com/todos/4";

//   fetch(endPointBaseURL)
//     .then((response) => response.json())
//     .then(function (data) {
//       // todoResultData.innerHTML = "Test";
//       todoResultData.innerHTML = DisplayAPIdata(data);
//     });
// }

// const DisplayAPIdata = (data) => {
//   let innerHTMLmessage = `
//   <div class="todo">
//   Todo: ${data.title} </div>
//   completed: ${data.completed}`;
//   return innerHTMLmessage;
// };

// function fetchRandomAPI() {
//   let baseURL ="https://jsonplaceholder.typicode.com/posts/1"

//   fetch(baseURL)
//   .then((response) => response.json())
//   .then ((data)=> {

//   message = `Title: ${data.title} Body: ${data.body}`
// console.log(message)
// document.getElementById("messageArea").innerHTML = message;
// });
// }

function fetchPokiAPI() {
  let id = Math.floor(Math.random()* 150) + 1;
  let baseURL =`https://pokeapi.co/api/v2/pokemon/${id}`;


  fetch(baseURL)
  .then((response) => response.json())
  .then((data) => {
    let name = data.name;
    let id = data.id;
    let types = data.types.map(t => t.type.name).join(", ");
    let imageUrl = data.sprites.front_default;
    let message = `Name: ${name}<br>ID: ${id}<br>Types: ${types}`;
    let imageElement = `<img src="${imageUrl}" alt="${name}">`;
    document.getElementById("messageArea").innerHTML = message+ imageElement;
  })

  }


 
 


  







