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
  getProductsSorted(sortedType) {
    return this.instance.get(
      `pizzas?_sort=${sortedType}&_order=${this.#getTypedSort(sortedType)}`
    );
  }
  getProductsSortedByTypeId(id, sortedType) {
    return this.#instance.get(
      `pizzas?typeId=${id}&_sort=${sortedType}&_order=${this.#getTypedSort(
        sortedType
      )}`
    );
  }
}

export default new ProductsAPI();
