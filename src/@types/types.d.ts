type SortType = {
  name: string;
  sortedType: "rating" | "price" | "title";
};
type CartPropsType = {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  method: string;
  size: number;
  count: number;
};
type CardPropsType = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  methods: number[];
  sizes: number[];
};
type CartItemType = {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  method: string;
  size: number;
  count: number;
  add?: number;
};
type FetchProductType = {
  typeId: number;
  selectedSort: SortType;
  searchValue: string;
  currentPage: number;
};
