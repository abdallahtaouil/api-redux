import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getusers } from "../redux/Action";
import Usercard from "./Usercard";

const Userlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getusers());
  }, []);
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        justifyContent:'center',
        marginTop:20
      }}
    >
      {users.map((e) => (
        <Usercard user={e} key={e.id} />
      ))}
    </div>
  );
};

export default Userlist;
