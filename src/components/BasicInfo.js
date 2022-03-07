import React from "react";

const BasicInfo = ({ data }) => {
  return (
    <>
      <div className="search-section">
        <header class="main-header">
          <h1>Search by:</h1>
        </header>

        <div class="input-flex">
          <input
            placeholder="First Name"
            className="fName search"
            type="text"
            onChange={(e) => data.setState({ query: e.target.value })}
          ></input>
          <input
            placeholder="Last Name"
            className="lName search"
            type="text"
            onChange={(e) => data.setState({ query: e.target.value })}
          ></input>
          <input
            placeholder="Phone Number"
            className="mNumber search"
            type="text"
            onChange={(e) => data.setState({ query: e.target.value })}
          ></input>
          <input
            placeholder="Birthday"
            className="birthday search"
            type="text"
            onChange={(e) => data.setState({ query: e.target.value })}
          ></input>
        </div>
      </div>

      <div className="App">
        <div className="pii">
          {data.Data.filter((posts) => {
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
