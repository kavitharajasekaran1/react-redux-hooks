import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

const UserContainer = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.userReducer);

  useEffect(() => {
    try {
      dispatch({ type: "FETCH_REQUEST" });
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          console.log(res);
          dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        })
        .catch((error) => {
          dispatch({ type: "FETCH_FAILURE", payload: error.message });
        });
    } catch (error) {
      console.log(error);
      dispatch({ type: "FETCH_FAILURE", payload: error.message });
    }
  }, []);
  const listItems =
    result.data &&
    result.data.map((item) => {
      return <li key={item.id}>{item.title}</li>;
    });
  return (
    <div>
      <div>
        {result.loading ? <p>loading</p> : null}
        <div>
          {result.data && result.data.length ? <ul>{listItems}</ul> : null}
        </div>
        {result.error ? <p>{result.error}</p> : null}
      </div>
    </div>
  );
};

export default UserContainer;
