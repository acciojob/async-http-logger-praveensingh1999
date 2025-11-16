//your JS code here. If required.
const url = "https://jsonplaceholder.typicode.com/todos/1"
async function fetchdata(url){
	const response = await fetch(url);
	const data = response.json();
	console.log(data);
}
fetchdata(url);
