const mongoose = require("mongoose");
const mongoURI ="mongodb://kvaniketpatelel:aniket#1@ac-y899r8z-shard-00-00.kqwsk29.mongodb.net:27017,ac-y899r8z-shard-00-01.kqwsk29.mongodb.net:27017,ac-y899r8z-shard-00-02.kqwsk29.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-o2ys7k-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";
const mongoDB = async () => {
  await mongoose.connect(
    mongoURI,
    { useNewUrlParser: true },
    async (err, result) => {
      if (err) console.log("---", err);
      else {
        console.log("Connected");
        const fetched_data = await mongoose.connection.db.collection(
          "fooditems"
        );
        fetched_data.find({}).toArray(async function (err, data) {
          const foodcatogry = await mongoose.connection.db.collection(
            "foodcatogry"
          );
          foodcatogry.find({}).toArray(function (err, catData) {
            if (err) console.log(err);
            else
             global.fooditems = data;
             global.foodcatogry = catData;
          });
          // if(err) console.log(err);
          // else
          //  global.fooditems=data;
          // console.log(global.fooditems);
        });
      }
    }
  );
};

module.exports = mongoDB;
