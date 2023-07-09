import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://zainwaseem9371:xx989mvrw8lgfC0q@cluster0.7rno3ax.mongodb.net/"
    )
    .then(() => console.log(`Datebase Connected`))
    .catch((error) => console.log(error.message));
};
export default connectDB;

// zainwaseem9371;

// xx989mvrw8lgfC0q;
