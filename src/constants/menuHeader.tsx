import {
  CompareIcon,
  FireIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@assets/index';
import { INavbar } from '@type/index';

export const MENU_HEADER = [
  {
    id: 'account',
    icon: <UserIcon />,
    label: 'account',
    link: '/account',
  },
  {
    id: 'Compare',
    icon: <CompareIcon />,
    label: 'Compare',
    link: '/compare',
  },
  {
    id: 'Wishlist',
    icon: <HeartIcon />,
    label: 'Wishlist',
    link: '/wishlist',
  },
  {
    id: 'Cart',
    icon: <ShoppingCartIcon />,
    label: 'Cart',
    link: 'Cart',
  },
];
export const categories = [
  {
    label: 'All Categories',
    value: '',
  },
];

export const NAVBAR_LIST: INavbar[] = [
  {
    key: 'hot-deals',
    label: (
      <>
        <span>
          <FireIcon />
        </span>
        <span>Hot Deals</span>
      </>
    ),
    menu: [],
  },
  {
    key: 'home',
    label: 'Home',
  },
  {
    key: 'food',
    label: 'Food',
    menu: [],
  },
  {
    key: 'vegetables',
    label: 'Vegetables',
    menu: [],
  },
  {
    key: 'drink',
    label: 'Drink',
  },
  {
    key: 'Meat & Seafood',
    label: 'Meat & Seafood',
    menu: [],
  },
  {
    key: 'Bakery',
    label: 'Bakery',
  },
];
