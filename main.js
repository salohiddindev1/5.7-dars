let users = ["Javohir", "Kamronbek", "Abdurahmon", "Salohiddin"];

// --------------------------------------------

// For Of methodi orqali array ichidagi malumotlarni olish
for (let value of users) {
  console.log(value, "for of");
}

// --------------------------------------------

// Map methodi orqali array ichidagi malumotlarni olish
let arrMap = users.map((item) => {
  console.log(item, "map");
  return item + " 1202 - group";
});

console.log(arrMap);

// ---------------------------------------------

// ForEach methodi orqali array ichidagi malumotlarni olish
let arrForeach = users.forEach((item) => {
  console.log(item, "foreach");
});

console.log(arrForeach);

let numbers = [11, 41, 55, 43, 71, 101, 20001, 1];

// Filter methodi orqali array ichidagi malumotlarni olish

let filterMethod = numbers.filter((item) => {
  let str = String(item);
  lastIdx = str[str.length - 1];

  return lastIdx === "1";
});

console.log(filterMethod);

// -------------------------------------------------

// Amaliyot

const list = document.querySelector(".list");

let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];

data.forEach((item) => {
  let li = document.createElement("li");

  if (item > 50) {
    li.classList.add("green");
  } else {
    li.classList.add("red");
  }

  li.textContent = item;
  list.appendChild(li);
});
