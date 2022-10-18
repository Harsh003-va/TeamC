import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/index.css";
import Main from "./book/components/main";
import Book from "./book/components/book";
import ThankYou from "./book/components/thankYou";


export default _ => {
  const [page, setPage] = useState(0);

  return (
    <div>
      
      {page === 0 ? <Main setPage={setPage} /> : null}
      {page === 1 ? <Book setPage={setPage} /> : null}
      {page === 2 ? <ThankYou /> : null}
    </div>
  );
};
