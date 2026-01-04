import dotenv from "dotenv";
import connectDB from "./db/index.js"

const port = process.env.PORT || 3000;


dotenv.config();

connectDB()
.then(()=>{
  app.listen(port, () => {
  console.log(`server listening on ${port}`)
})
})
.catch((err)=> {
  console.log(`Database connection failed !!`, err);
  
})



















// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_MERN}`);
//       mongoose.connection.on("error", (err) => {
//       console.log("MongoDB connection error:", err);
//     });
//      console.log("MongoDB connected");

//     app.listen(PORT, () => {
//       console.log(`Server running on http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.log("ERROR:", error);
//     throw error;
//   }
// })();
