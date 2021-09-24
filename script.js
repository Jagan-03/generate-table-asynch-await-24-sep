let getData = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(url);
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

let displayData = async () => {
  try {
    let data = await getData();
    let table = document.getElementById("table1");
    data.forEach(obj => {
      let newRow = table.insertRow(-1);
      newRow.insertCell(-1).innerHTML = obj.name;
      newRow.insertCell(-1).innerHTML = obj.address.city;
    });
  } catch (err) {
    console.log(err);
  }
}