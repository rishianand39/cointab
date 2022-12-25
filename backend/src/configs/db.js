import mongoose from "mongoose";


const connect = () => {
  mongoose.connect('mongodb://cointab:cointab@ac-jlj7ua8-shard-00-00.rizoykp.mongodb.net:27017,ac-jlj7ua8-shard-00-01.rizoykp.mongodb.net:27017,ac-jlj7ua8-shard-00-02.rizoykp.mongodb.net:27017/cointab?ssl=true&replicaSet=atlas-o34w5y-shard-0&authSource=admin&retryWrites=true&w=majority');
};
export default connect;