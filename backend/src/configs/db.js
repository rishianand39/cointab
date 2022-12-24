import mongoose from "mongoose";


const connect = () => {
  mongoose.connect('mongodb://localhost:27017/cointab');
};
export default connect;