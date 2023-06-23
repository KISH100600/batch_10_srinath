const user = {
  name: "kish",
  age: 12,
  address: "jsjs",
  activities: {
    activity: "activity",
    activityId: 1,
    duration: 2,
    attendance: [
      {
        date: "23-04-2023",
        status: true,
      },
      {
        date: "24-04-2023",
        status: true,
      },
      {
        date: "25-04-2023",
        status: true,
      },
    ],
  },
};

const bike = {
  name: "pulsure",
  color: "red",
  model: 2023,
  dealer: {
    name: "kish",
    contactNo: 8767897786,
    address: "ewub cec rjc ,cvbg ef, india",
    getName: function () {
      return this.name;
    },
  },
  wheeltype: "alloy",
};

console.log(bike.dealer.getName());

uname = "ksk";
function getName(uname) {
  console.log("ksish", this.uname);
}

function onMouseEnter() {
  document.getElementById("button").style.background = "red";
}
function onMouseOut() {
  document.getElementById("button").style.background = "";
}
// getName("j");

var names = [1, 2, 3, 5, 6, 6, 7];
var names = 10;
names[6] = 10;
names = 10;

bike.name = "kish";
bike = 19;

// let data;
const data = "";
