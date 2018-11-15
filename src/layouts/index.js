import React, { Component } from 'react'
import withRouter from 'umi/withRouter'

import BaseLayout from './BaseLayout'


class Layout extends Component {
  state = {
    catalogs: {},
  }

  render() {
    const { children } = this.props
    const { catalogs } = this.state

    return (
      <BaseLayout>{children}</BaseLayout>
    )
  }
}

export default Layout
