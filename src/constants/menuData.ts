import { MenuId } from '../enums/MenuId';
import { RouterPath } from '../enums/RouterPath';
import IMenuItemData from './IMenuItemData';

const menuData: Array<IMenuItemData> = [
  {
    id: MenuId.Product,
    text: 'Product',
    link: RouterPath.Products,
  },
  {
    id: MenuId.Bid,
    text: 'Bid',
    link: RouterPath.Bids,
  },
  {
    id: MenuId.Management,
    text: 'Management',
    link: RouterPath.ManagementUsers,
    arrSub: [
      {
        id: MenuId.ManagementUser,
        text: 'Management User',
        link: RouterPath.ManagementUsers,
      },
      {
        id: MenuId.ManagementEtc,
        text: 'Management Etc',
        link: RouterPath.ManagementEtc,
      },
    ],
  },
];

export { menuData };
