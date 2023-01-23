import axios, { AxiosInstance } from "axios";

const BASE_URL: string = "https://sideways-fir-cinnamon.glitch.me/";

class ProductsAPI {
  private _instance: AxiosInstance;
  constructor() {
    this._instance = axios.create({ baseURL: BASE_URL, withCredentials: true });
  }

  public get instance(): AxiosInstance {
    return this._instance;
  }
  #getTypedSort(sortedType: string): string {
    return sortedType === "rating" ? "desc" : "asc";
  }
  #getProductsByTypeId(typeId: number): string {
    return typeId === 0 ? "" : `&typeId=${typeId}`;
  }
  getProducts(
    id: number,
    sortedType: string,
    searchValue: string,
    currentPage: number
  ) {
    return this.instance.get<CardPropsType[]>(
      `pizzas?_page=${currentPage}&_limit=8&_sort=${sortedType}&_order=${this.#getTypedSort(
        sortedType
      )}${this.#getProductsByTypeId(id)}${
        searchValue && `&title_like=${searchValue}`
      }`
    );
  }
  getProductsBySearch(id: number, sortedType: string, searchValue: string) {
    return this.instance.get(
      `pizzas?_sort=${sortedType}&_order=${this.#getTypedSort(
        sortedType
      )}${this.#getProductsByTypeId(id)}${
        searchValue && `&title_like=${searchValue}`
      }`
    );
  }
  getProductById(id: number) {
    return this.instance.get<CardPropsType>(`pizzas/${id}`);
  }
}

export default new ProductsAPI();
