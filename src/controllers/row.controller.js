const { Row } = require("../models");

const getAll = async (req, res) => {
  console.log("/GET all");
  Row.find(function (error, result) {
    if (error) {
      console.log("An error occured : ", error);
      return res.status(500).json({ message: error });
    } else {
      return res.status(200).json(result);
    }
  });
};

const getMoyenneRatepersex = async (req, res) => {
  console.log("/GET getMoyenneRatepersex");
  Row.find(function (error, result) {
    if (error) {
      console.log("An error occured : ", error);
      return res.status(500).json({ message: error });
    } else {
      var response = {
        Male: 0,
        Female: 0,
      };
      var temp = result.filter((a) => a.Gender == "Male");
      var moy = 0;
      var moy2 = 0;
      temp.forEach((t) => {
        moy = moy + parseInt(t.Rating);
      });

      moy = moy / temp.length;
      var temp2 = result.filter((a) => a.Gender == "Female");
      temp2.forEach((t) => {
        moy2 = moy2 + parseInt(t.Rating);
      });
      moy2 = moy2 / temp2.length;
      response.Male = moy;
      response.Female = moy2;
      return res.status(200).json(response);
    }
  });
};

const getAchatsParType = async (req, res) => {
  console.log("/GET getAchatsParType");
  Row.find(function (error, result) {
    if (error) {
      console.log("An error occured : ", error);
      return res.status(500).json({ message: error });
    } else {
      var response = {
        Member: 0,
        Normal: 0,
      };
      var temp = result.filter((a) => a["Customer type"] == "Member");
      var sum = temp.length;
      response.Member = sum;

      var temp2 = result.filter((a) => a["Customer type"] == "Normal");
      var sum2 = temp2.length;
      response.Normal = sum2;
      return res.status(200).json(response);
    }
  });
};
const getRevenuebrut = async (req, res) => {
  console.log("/GET getRevenuebrut");
  Row.find(function (error, result) {
    if (error) {
      console.log("An error occured : ", error);
      return res.status(500).json({ message: error });
    } else {
      const map = new Map();
      let array = [];
      result.forEach((e) => {
        array.push(e["Product line"]);
      });
      let uniqueStrings = Array.from(new Set(array));
      let sum = 0;
      uniqueStrings.forEach((e) => {
        result.forEach((x) => {
          if (x["Product line"] == e) sum += parseInt(x["gross income"]);
        });
        map.set(e, sum);
        sum = 0;
      });
      console.log(map);
      return res.status(200).json(Object.fromEntries(map));
    }
  });
};
module.exports = {
  getAll,
  getMoyenneRatepersex,
  getAchatsParType,
  getRevenuebrut,
};
