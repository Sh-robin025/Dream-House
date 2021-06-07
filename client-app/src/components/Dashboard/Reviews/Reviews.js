import React, { useState } from "react";
import DashboardNav from "../DashboardNav/DashboardNav";

const Reviews = () => {
  const [review, setReview] = useState({})

  const handleSubmit = (data) => {
    // const eventData = {
    //   title: data.title,
    //   message: data.message,
    //   user: { ...loggedInUser },
    // };
    // const url = `/`;
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(eventData),
    // }).then((res) => console.log("server side response", res));
    // alert("Thank You for giving us such a wonderful review.");
    // reset({});
  };

  return (
    <div>
      {/* <Navigation></Navigation> */}
      <div className="row">
        <div className="col-md-3 adminNavPanel">
          <DashboardNav></DashboardNav>
        </div>

        <div className="col-md-4">
          <h1 className="text-center highlight">Give us a Review</h1>

          <form onSubmit={handleSubmit(review)}>
            <input
              className="form-control"
              placeholder="Title"
              type="text"
              onChange={(e) => setReview({ ...review, title: e.target.value })}
            />
            <br />
            <textarea
              className="form-control"
              placeholder="Type Your Message"
              type="text"
              onChange={(e) => setReview({ ...review, message: e.target.value })}
            />
            <br />
            <button className="btn btn-primary" type="submit">Review</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
