async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();   // convert response to JSON
  console.log(data);
}

getData();
