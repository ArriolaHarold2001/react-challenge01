import React from "react";
import Data from "../data/basicData.json";

const BasicInfo = ({ data }) => {
  return (
    <>
      <div className="App">
        <div className="pii">
          {Data.filter((posts) => {
            if (data.query === "") {
              console.log(data);
              console.log(data.query);
              return posts;
            } else if (
              posts.firstName
                .toLowerCase()
                .includes(data.query.toLowerCase()) ||
              posts.lastName.toLowerCase().includes(data.query.toLowerCase()) ||
              posts.mobileNumber.includes(data.query) ||
              posts.birthday.toLowerCase().includes(data.query.toLowerCase())
            ) {
              console.log(data.query);
              return posts;
            }
          }).map((posts, index) => (
            <div className="pii-items" key={index}>
              <p>
                {posts.firstName} {posts.lastName}
              </p>
              <p>{posts.mobileNumber}</p>
              <p>{posts.birthday}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
