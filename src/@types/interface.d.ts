interface ITypeProps {
  id: number;
  clickType: (index: number) => void;
}
interface IPaginationProps {
  selectedPage: number;
  changePage: (e: number) => void;
}
interface ICartSliceState {
  products: CartItemType[];
  totalPrice: number;
  totalCount: number;
}
interface IFiltersSlice {
  typeId: number;
  selectedSort: SortType;
  searchValue: string;
  currentPage: number;
}
interface IProductSlice {
  items: CardPropsType[];
  item: CardPropsType;
  status: Status;
  totalPages: number;
}
