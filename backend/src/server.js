import app from "./index.js"
import connect from "./configs/db.js";
import dotenv from "dotenv";
dotenv.config()

const PORT =process.env.PORT || 8001;
app.listen(PORT,async()=>{
    try {
        await connect();
        console.log(`server running on port ${PORT}`);
    } catch (error) {
        console.log(error);
    }
})