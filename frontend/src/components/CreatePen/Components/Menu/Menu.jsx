// Modules
import React from 'react'
import PropTypes from 'prop-types'
// local modules
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const More = ({
  isMenuOpen,
  changePreviewMode,
  changeViewMode,
  closeMenu,
  savePen,
}) => (
  <Menu
    open={isMenuOpen}
    // x={150}
    // y={125}
    onClose={closeMenu}
    // menus={[
    //   {
    //     key: 'data1',
    //     name: 'Preview btn',
    //     action: ,
    //     data: 'Preview btn',
    //     disabled: false,
    //   },
    //   {
    //     key: 'data2',
    //     name: 'Save',
    //     action: savePen,
    //     data: 'Save',
    //     disabled: false,
    //   },
    //   {
    //     key: 'data3',
    //     name: 'Change view mode',
    //     action: changeViewMode,
    //     data: 'Change view mode',
    //     disabled: false,
    //   },
    // ]}
  >
    <MenuItem onClick={changePreviewMode}>Preview btn</MenuItem>
    <MenuItem onClick={savePen}>Save</MenuItem>
    <MenuItem onClick={changeViewMode}>Change view mode</MenuItem>
  </Menu>
)

More.propTypes = {
  isMenuOpen: PropTypes.bool,
  changePreviewMode: PropTypes.func,
  changeViewMode: PropTypes.func,
  closeMenu: PropTypes.func,
  savePen: PropTypes.func,
}

More.defaultProps = {
  isMenuOpen: false,
  changePreviewMode: Function.prototype,
  changeViewMode: Function.prototype,
  closeMenu: Function.prototype,
  savePen: Function.prototype,
}

export default More
