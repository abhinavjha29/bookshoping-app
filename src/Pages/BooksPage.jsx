import React from "react";
import ShowItem from "../components/ShowItem";
import Sidebar from "../components/Sidebar";

const BooksPage = () => {
  return (
    <>
      <div class="row">
        <div class="col-sm-3 m-3">
          <Sidebar />
        </div>
        <div class="col-sm-8">
          <ShowItem />
        </div>
      </div>
    </>
  );
};

export default BooksPage;
