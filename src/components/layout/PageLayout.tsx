import React, { Component } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Content from './content/Content';
import { IPage } from '../../interfaces/IPage';
import { MenuState } from '../../store/menu/types';
import { Dispatch } from 'redux';
import { changeMenuAction } from '../../store/menu/actions';
import { connect } from 'react-redux';
import { AppState } from '../../store';

interface IProps extends IPage {
  changeMenu: (menuState: MenuState) => void;
  menuState: MenuState;
}

class PageLayout extends Component<IProps> {
  constructor(props: IProps) {
    super(props);

    const { menuId, subMenuId, changeMenu } = this.props;

    if (!changeMenu) return;

    const menuState: MenuState = {
      menuId: menuId,
      subMenuId: subMenuId || null,
    };

    changeMenu(menuState);
  }

  render() {
    const { children, menuState } = this.props;

    return (
      <div>
        <Header
          menuId={menuState.menuId || null}
          subMenuId={menuState.subMenuId || null}
        />

        <hr />

        <Content>{children}</Content>

        <hr />

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  menuState: state.menu,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeMenu: (payload: MenuState) => {
    return dispatch(changeMenuAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout);
