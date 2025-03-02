let logMessages = [];
let totalTask = 6;
let taskpoint = 23;
function completeTask(id, title) {
  // disable the button
  console.log("button was clicked");
  let button = document.getElementById(id);
  if (button) {
    button.setAttribute("disabled", "true");
    button.classList.add("opacity-70");
  }
  // log the action
  let message = `You have Complete The Task ${title} at ${genarateCustomPresentTime()}`;
  logMessages.push(message);

  displayLogMessage();
  // decriment the total task
  totalTask -= 1;
  document.getElementById("taskcount").innerHTML = formatNumber(totalTask);

  // incriment the task point
  taskpoint += 1;
  document.getElementById("taskpoint").innerHTML = taskpoint;
}
function formatNumber(number) {
  return number.toString().padStart(2, "0");
}
function displayLogMessage() {
  let logDiv = document.getElementById("log-messages");
  let messageHtml = logMessages.map((message) => {
    return `<p class="p-2 bg-sky-50 my-2 text-sm">
            ${message}
          </p>`;
  });
  logDiv.innerHTML = messageHtml.join("");
}

function clearLogMessages() {
  logMessages = [];
  displayLogMessage();
}

function genarateCustomPresentTime() {
  const now = new Date();
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const time = new Intl.DateTimeFormat("en-US", options).format(now);
  return time;
}
function todayDay() {
  const now = new Date();
  const options = { weekday: "short" };
  const day = new Intl.DateTimeFormat("en-US", options).format(now);
  return day;
}
function todayDate() {
  const now = new Date();
  const options = {
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  const date = new Intl.DateTimeFormat("en-US", options).format(now);
  return date;
}
function genarateAssingmentCard(details) {
  return ` <div class="p-3 space-y-2 bg-sky-50 rounded-lg flex flex-col justify-between">
            <div id="card-top" class="space-y-2">
              <p class="bg-base-100 p-2 rounded-lg inline-flex">${details["company"]}</p>
              <h2 class="text-xl font-bold">${details["title"]}</h2>
              <p class="bg-base-100 py-2 px-1 rounded-lg text-gray-400">
                ${details["description"]}
              </p>
            </div>
            <!--Dead Lines and Status  -->
            <div
              class="flex justify-between items-end border-t-2 border-dashed pt-3"
            >
              <div>
                <small class="text-gray-500">Deadline</small>
                <p class="font-bold text-gray-800">${details["deadline"]}</p>
              </div>
              <button id="${details["id"]}" data-title="${details["title"]}" class="complete-btn bg-indigo-600 rounded-lg px-4 py-2 text-white">
                ${details["status"]}
              </button>
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

  // Attach Complete event listeners AFTER inserting HTML
  document.querySelectorAll(".complete-btn").forEach((button) => {
    button.addEventListener("click", function () {
      let id = this.id;
      let title = this.getAttribute("data-title"); // Get the title from data attribute
      completeTask(id, title);
    });
  });

  //   Attach Clear Log enevt
  let clearBtn = document.getElementById("clear-log");
  clearBtn.addEventListener("click", clearLogMessages);

//   Attach change background color button
let colorbtn = document.getElementById("color-toggle");
colorbtn.addEventListener("click", changeBGColor)
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


function insertDates (){
    document.getElementById("today-day").innerHTML = todayDay()
    document.getElementById("today-date").innerHTML = todayDate()
}
document.addEventListener("DOMContentLoaded", insertDates);

function changeBGColor(){
    let colors = [
      "bg-red-200",
      "bg-orange-200",
      "bg-amber-200",
      "bg-lime-200",
      "bg-emerald-200",
      "bg-cyan-200",
      "bg-violet-200",
      "bg-pink-200",
    ];
    let body = document.getElementsByTagName("body")[0];
    // body.classList.add(colors[Math.floor(Math.random() * colors.length)]);
    body.className = colors[Math.floor(Math.random() * colors.length)];

}



