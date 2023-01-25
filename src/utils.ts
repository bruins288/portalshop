export const getCartProductLS = (): ICartSliceState => {
  let data = localStorage.getItem("cart");
  console.log(data);
  return data && JSON.parse(data);
};
