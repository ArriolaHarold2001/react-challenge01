import React from "react";

const BasicInfo = ({ data }) => {
  return (
    <>
      <div className="App">
        <div className="pii">
          {data.Data.filter((posts) => {
            if (data.query === "") {
              return posts;
            } else if (
              posts.firstName
                .toLowerCase()
                .includes(data.query.toLowerCase()) ||
              posts.lastName.toLowerCase().includes(data.query.toLowerCase()) ||
              posts.mobileNumber.includes(data.query) ||
              posts.birthday.toLowerCase().includes(data.query.toLowerCase())
            ) {
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
