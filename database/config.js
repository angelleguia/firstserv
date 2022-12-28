const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGODB_CNN);
    console.log("DB online");

    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to DB.");
  }
};

module.exports = {
  dbConnection,
};
