import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  let navigate=useNavigate()
  return (
    <div>
      <h1>Page 1</h1>
      <div id="btns">
        <button
          onClick={() => {
            const senddata = async () => {
              try {
                let users = await fetch("https://cointab-ydy5.onrender.com/api/user", {
                  method: "POST",
                });
                users =await users.json();
                console.log(users);
              } catch (error) {
                console.log(error);
              }
            };
            senddata();
          }}
          className="fetch"
        >
          Fetch Users
        </button>
        <button
          onClick={() => {
            const deletedata = async () => {
              try {
                let users = await fetch("https://cointab-ydy5.onrender.com/api/delete", {
                  method: "DELETE",
                });
              } catch (error) {
                console.log(error);
              }
            };
            deletedata()
          }}
          className="delete"
        >
          Delete Users
        </button>
        <button
          onClick={() => {
            const getallData = async () => {
              try {
                let users = await fetch("https://cointab-ydy5.onrender.com/api/detail", {
                  method: "GET",
                });
                users = await users.json();
                localStorage.setItem("users", JSON.stringify(users));
                navigate("/users")
              } catch (error) {
                console.log(error);
              }
            };
            getallData();
          }}
          className="details"
        >
          User Details
        </button>
      </div>
    </div>
  );
};

export default Home;
