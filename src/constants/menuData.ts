import { MenuId } from '../enums/MenuId';
import { RouterPath } from '../enums/RouterPath';
import IMenuItemData from './IMenuItemData';

const menuData: Array<IMenuItemData> = [
  {
    id: MenuId.About,
    text: 'About',
    link: RouterPath.About,
  },
  {
    id: MenuId.Notice,
    text: 'Notice',
    link: RouterPath.NoticeList,
  },
  {
    id: MenuId.Product,
    text: 'Product',
    link: RouterPath.ProductType0,
    arrSub: [
      {
        id: MenuId.ProductType0,
        text: 'Type0',
        link: RouterPath.ProductType0,
      },
      {
        id: MenuId.ProductType1,
        text: 'Type1',
        link: RouterPath.ProductType1,
      },
    ],
  },
];

export { menuData };
