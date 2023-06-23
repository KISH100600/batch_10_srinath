// const names = "hi \n there";
// document.write(names);
// console.log(names.length);
// document.getElementById("out").innerText = names;

let index = 0;
let i = 1;
const names = ["first", "second", "third", , , ,];

while (index < names.length) {
  console.log(names[index]);
  index++;
}

do {
  console.log(i);
  i++;
} while (i < 1);

const data = [{ name: "kish", age: "20" }, { name: "josh" }, { name: "lin" }];

for (let i = 0; i < data.length; i++) {
  console.log(data[i].name);
}

console.log(names.length);
names.push("ji", "jfj");
names.push("kk");
console.log(names, "=================> after pushin");
