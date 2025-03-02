// var data = [];

// fetch("../data.json")
//   .then((response) => response.json())
//   .then((jsonData) => {
//     data = jsonData;
//     console.log(data);
//   })
//   .catch((err) => console.log("Some error happen when tring to import data"));

function genarateAssingmentCard(details) {
  return `<div class="p-3 space-y-2 bg-sky-50 rounded-lg">
            <p class="bg-base-100 p-2 rounded-lg inline-flex">${details["company"]}</p>
            <h2 class="text-xl font-bold">${details["title"]}</h2>
            <p class="bg-base-100 py-2 px-1 rounded-lg text-gray-400">
              ${details["description"]}
            </p>
            
            <div
              class="flex justify-between items-center border-t-2 border-dashed mt-12"
            >
              <div>
                <small class="text-gray-500">Deadline</small>
                <p class="font-bold text-gray-800">${details["deadline"]}</p>
              </div>
              <p class="bg-indigo-600 rounded-lg px-4 py-2 text-white">
                ${details["status"]}
              </p>
            </div>
          </div>`;
}
let insertAssingmentData = (data) => {
  let assingmentDiv = document.getElementById("assingmentcards");
  let cards = data.map((item) => {
    return genarateAssingmentCard(item);
  });
  console.log(cards.length, cards);
  assingmentDiv.innerHTML = cards.join("");
};

async function loadData() {
  try {
    let response = await fetch("../data.json");
    let data = await response.json();
    if (data.length > 0) {
      insertAssingmentData(data);
    }
  } catch (err) {
    console.log("Unexpected Eror Happend", err);
    alert("Unexpected Eror Happend");
  }
}

document.addEventListener("DOMContentLoaded", loadData);
