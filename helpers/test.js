const apiConnect = require("./apiConnector");

const x = async () => {
  console.log(await apiConnect.filterData("sarraf lebanon"));
};

x();
