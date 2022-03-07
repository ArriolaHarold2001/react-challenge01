import React from "react";

const BasicInfo = ({ data, query }) => {
  return (
    <>
      <div className="App">
        <div className="pii">
          {data
            .filter((posts) => {
              if (query === "") {
                return posts;
              } else if (
                posts.firstName.toLowerCase().includes(query.toLowerCase()) ||
                posts.lastName.toLowerCase().includes(query.toLowerCase()) ||
                posts.mobileNumber.includes(query) ||
                posts.birthday.toLowerCase().includes(query.toLowerCase())
              ) {
                return posts;
              }
            })
            .map((posts, index) => (
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
