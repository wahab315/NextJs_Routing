// "use client";    if you use this compoenent as a client side components
// and we do not print any value into console in server side component 

import React from "react";

const page = ({ params }) => {
  console.log(params.id);
  return <div>Product</div>;
};

export default page;
