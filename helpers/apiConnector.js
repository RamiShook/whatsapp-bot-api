const url = "https://pharmate.app/liraapi/getrate.php";

const axios = require("axios");
// This code runs and executes some point in future when response arrives
const getJson = async () => {
  const response = await axios.get(url);
  //Here i can see the json normally
  return response.data;
};

//This code runs and executes immediately which doesn't have response yet
const filterData = async (RequestedAppName) => {
  const response = await getJson();
  let requestedAppId = 0;
  switch (RequestedAppName) {
    case "adde dollar":
      requestedAppId = 4;
      break;
    case "lebanon dollar":
      requestedAppId = 5;
      break;
    case "lira exchange":
      requestedAppId = 6;
      break;
    case "sarraf lebanon":
      requestedAppId = 1;
      break;
    case "lebanon prices":
      requestedAppId = 2;
      break;
  }
  let finalResult = "";
  response.map((data) => {
    if (data.l_id == requestedAppId) {
      finalResult += `${RequestedAppName} now displaying: \nBUY: ${data.r_buy} L.L\nSELL: ${data.r_sell} L.L\nLast update: ${data.r_date}`;
      console.log(data, "requeted app id :" + requestedAppId);
    }
  });
  return finalResult;
};

const allDataAwait = async () => {
  await retun("ALl Data Await...");
};

const getOmtAll = async () => {
  try {
    const response = await axios.get(
      "https://www.omt.com.lb/api/exchange-rate?lang=en"
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}

const getOMT = async () => {
  const omtAll = await getOmtAll();

  let finalResult = "";
  realTime = timeConverter(omtAll.updated_at);
  finalResult = `OMT is displaying now: 1USD=${omtAll.exchange_rate} LBP\nUpdated at:${realTime}`;
  return finalResult;
};

module.exports = {
  filterData,
  allDataAwait,
  getJson,
  getOMT,
  getOmtAll,
};
