let logMessages = [];
let totalTask = 6;
let taskpoint = 23;
function completeTask(id, title) {
  // Display alert
  alert("Board Updated Succesfully");
  // decriment the total task
  totalTask -= 1;
  if (totalTask == 0) {
    alert("Congrates!!! you have completed all the current task");
  }
  document.getElementById("taskcount").innerHTML = formatNumber(totalTask);

  // incriment the task point
  taskpoint += 1;
  document.getElementById("taskpoint").innerHTML = taskpoint;
  // disable the button
  let button = document.getElementById(id);
  if (button) {
    button.setAttribute("disabled", "true");
    button.classList.add("opacity-30");
  }
  // log the action
  let message = `You have Complete The Task ${title} at ${genarateCustomPresentTime()}`;
  logMessages.push(message);

  displayLogMessage();
}
function formatNumber(number) {
  return number.toString().padStart(2, "0");
}
function displayLogMessage() {
  let logDiv = document.getElementById("log-messages");
  let messageHtml = logMessages.map((message) => {
    return `<p class="p-2 bg-sky-50 text-sm rounded-lg">
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

let insertAssingmentData = () => {
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
  colorbtn.addEventListener("click", changeBGColor);

  //   Attach navigation to blog event on discover div
  document.getElementById("discover").addEventListener("click", goBlogpage);
};

document.addEventListener("DOMContentLoaded", insertAssingmentData);

function insertDates() {
  document.getElementById("today-day").innerHTML = todayDay();
  document.getElementById("today-date").innerHTML = todayDate();
}
document.addEventListener("DOMContentLoaded", insertDates);

function changeBGColor() {
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
  body.className = colors[Math.floor(Math.random() * colors.length)];
}

function goBlogpage() {
  console.log("blog page clicked");
  window.location.href = "/DevBoard/blog.html";
}
