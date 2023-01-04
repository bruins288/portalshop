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
  getProducts() {
    return this.instance.get("pizzas");
  }
}

export default new ProductsAPI();
