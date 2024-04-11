require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./config/db");
const { TaskRouter } = require("./routes/task.routes");
const { userRouter } = require("./routes/user.routes");
const { auth } = require("./middleware/auth.middleware");

app.use(cors());
app.use(express.json());


app.get("/",(req,res)=>{
  res.status(200).json({msg:"wlcome"})
})

app.use("/",userRouter)
app.use('/task',auth,TaskRouter)




const server = app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`server is running at port ${PORT}`);
    console.log(`connected to mongoDB`);
  } catch (err) {
    console.log(err);
  }
});

module.exports = {
  server
}