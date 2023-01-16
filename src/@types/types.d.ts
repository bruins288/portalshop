type TypeSort = {
  name: string;
  sortedType: string;
};
type TypeProps = {
  id: number;
  clickType: any;
};
type TypeCartItem = {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  method: string;
  size: number;
  count: number;
};
type TypePagination = {
  selectedPage: number;
  changePage: any;
};
type TypeCard = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  methods: number[];
  sizes: number[];
};
