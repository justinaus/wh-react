import { CancelTokenSource } from 'axios';

export interface IAxiosCancelable {
  cancelTokenSource: CancelTokenSource;
}
