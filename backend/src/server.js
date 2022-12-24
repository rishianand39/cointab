import app from "./index.js"
import connect from "./configs/db.js";


const PORT = 8000;
app.listen(PORT,async()=>{
    try {
        await connect();
        console.log(`server running on port ${PORT}`);
    } catch (error) {
        console.log(error);
    }
})