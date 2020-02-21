import { MenuId } from '../enums/MenuId';
import { RouterPath } from '../enums/RouterPath';

export default interface ITodoModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
