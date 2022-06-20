const express = require("express")
const app = express()
const bodyParser = require("body-parser") 
const logger = require("morgan")
const PORT = 4000


app.use(bodyParser.json())
app.use(logger("dev"))

const UserRouter = require("./routes/user")
app.use("/user", UserRouter)

const authRouter = require("./routes/auth")
app.use("/", authRouter)

const getParamsRouter = require("./routes/getParams")
app.use("/", getParamsRouter)



app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
})