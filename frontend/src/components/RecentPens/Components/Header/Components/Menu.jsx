// Modules
import React from 'react'
import PropTypes from 'prop-types'
// local modules
import { ContextMenu } from 'weblite-web-relite'
import { navigate, Link } from '@reach/router'

const MenuContent = ({ isMenuOpen, searchClick, closeMenu }) => (
  <ContextMenu
    open={isMenuOpen}
    x={150}
    y={100}
    onClose={closeMenu}
    menus={[
      // {
      //   key: 'data1',
      //   name: 'Dashboard',
      //   action: console.log,
      //   data: 'Dashboard',
      //   disabled: false,
      // },
      {
        key: 'data2',
        name: 'Search',
        action: searchClick,
        data: 'Search',
        disabled: false,
      },
    ]}
  />
)

MenuContent.propTypes = {
  isMenuOpen: PropTypes.bool,
  searchClick: PropTypes.func,
  closeMenu: PropTypes.func,
}

MenuContent.defaultProps = {
  isMenuOpen: false,
  searchClick: Function.prototype,
  closeMenu: Function.prototype,
}

export default MenuContent
