export const getCartProductLS = (): ICartSliceState => {
  let data = localStorage.getItem("cart");
  return data && JSON.parse(data);
};
