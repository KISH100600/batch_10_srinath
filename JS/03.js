function getName() {
  console.log("This is a name ");
}
function add(first = 0, second = 0) {
  return first + second;
}

const getAddition = () => {
  document.getElementById("out").innerText =
    JSON.parse(document.getElementById("first").value) +
    JSON.parse(document.getElementById("second").value);
};

getName();

// console.log(getAddition(9, 10));
