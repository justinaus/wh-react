import React, { useEffect } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Content from './content/Content';
import { MenuState } from '../../store/menu/types';
import { changeMenuAction } from '../../store/menu/actions';
import { useDispatch } from 'react-redux';
import { IHasMenu } from '../../interfaces/IHasMenu';
import { RouteComponentProps } from 'react-router';
import Page from './Page';

type Props = RouteComponentProps & IHasMenu;

const PageLayout: React.FC<Props> = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    const payload: MenuState = {
      menuId: props.menuId,
      subMenuId: props.subMenuId || null,
    };

    dispatch(changeMenuAction(payload));
  }, [props.menuId, props.subMenuId, dispatch]);

  const { children } = props;

  return (
    <Page {...props}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Page>
  );
};

export default PageLayout;
