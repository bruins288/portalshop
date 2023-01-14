import axios from "axios";

const BASE_URL = "https://sideways-fir-cinnamon.glitch.me/";

class ProductsAPI {
  #instance;
  constructor() {
    this.instance = { baseURL: BASE_URL, withCredentials: true };
  }
  set instance(serverSettings) {
    this.#instance = axios.create(serverSettings);
  }
  get instance() {
    return this.#instance;
  }
  #getTypedSort(sortedType) {
    return sortedType === "rating" ? "desc" : "asc";
  }
  #getProductsByTypeId(typeId) {
    return typeId === 0 ? "" : `&typeId=${typeId}`;
  }
  getProducts(id, sortedType, searchValue, currentPage) {
    return this.instance.get(
      `pizzas?_page=${currentPage}&_limit=8&_sort=${sortedType}&_order=${this.#getTypedSort(
        sortedType
      )}${this.#getProductsByTypeId(id)}${
        searchValue && `&title_like=${searchValue}`
      }`
    );
  }
  getProductsBySearch(id, sortedType, searchValue) {
    return this.instance.get(
      `pizzas?_sort=${sortedType}&_order=${this.#getTypedSort(
        sortedType
      )}${this.#getProductsByTypeId(id)}${
        searchValue && `&title_like=${searchValue}`
      }`
    );
  }
}

export default new ProductsAPI();
