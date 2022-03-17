import React from "react";
import { useParams } from "react-router-dom";

const Contacts = () => {
  const id = useParams();
  console.log(id);
  return (
    <div>
      <h1>This is contacts page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe ullam
        quidem enim, voluptatibus, eos similique inventore corporis possimus hic
        nam dignissimos. Corrupti, tempore voluptatibus nobis iusto suscipit
        commodi delectus ipsa.
      </p>
    </div>
  );
};

export default Contacts;
