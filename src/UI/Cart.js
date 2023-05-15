import React from "react";

const Cart = (props) => {
  return (
    <div class="bg-gray-200  max-w-[45rem] min-w-[35rem] m-auto mt-[3rem] rounded-sm pb-1">
      {props.children}
    </div>
  );
};

export default Cart;
