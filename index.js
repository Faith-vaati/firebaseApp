import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://playground-7e7c3-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const listInDB = ref(database, "list");

const buttonEl = document.getElementById("add-button");
const inputEl = document.getElementById("input-field");

buttonEl.addEventListener("click", function () {
  let input = inputEl.value;
  push(listInDB, input);
  console.log(input);
});
