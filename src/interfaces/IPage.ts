import { RouteComponentProps } from 'react-router';
import { IHasMenu } from './IHasMenu';

export interface IPage extends RouteComponentProps, IHasMenu {}
