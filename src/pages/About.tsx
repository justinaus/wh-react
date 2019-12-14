import React, { Component } from 'react'

export default class About extends Component {
  constructor(props: any) {
    super(props);
    console.log(111);
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        About
        { children }
      </div>
    )
  }
}
