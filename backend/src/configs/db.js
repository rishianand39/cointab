import mongoose from "mongoose";


const connect = () => {
  mongoose.connect('mongodb+srv://cointab:cointab@cluster0.71ipgkb.mongodb.net/cointab?retryWrites=true&w=majority');
};
export default connect;