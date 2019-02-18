// Modules
import React from 'react'
import PropTypes from 'prop-types'
// local modules
import { ContextMenu } from 'weblite-web-relite'

const MenuContent = ({
  isMenuOpen,
  changePreviewMode,
  changeViewMode,
  closeMenu,
  savePen,
}) => (
  <ContextMenu
    open={isMenuOpen}
    x={150}
    y={125}
    onClose={closeMenu}
    menus={[
      {
        key: 'data1',
        name: 'Preview btn',
        action: changePreviewMode,
        data: 'Preview btn',
        disabled: false,
      },
      {
        key: 'data2',
        name: 'Save',
        action: savePen,
        data: 'Save',
        disabled: false,
      },
      {
        key: 'data3',
        name: 'Change view mode',
        action: changeViewMode,
        data: 'Change view mode',
        disabled: false,
      },
    ]}
  />
)

MenuContent.propTypes = {
  isMenuOpen: PropTypes.bool,
  changePreviewMode: PropTypes.func,
  changeViewMode: PropTypes.func,
  closeMenu: PropTypes.func,
  savePen: PropTypes.func,
}

MenuContent.defaultProps = {
  isMenuOpen: false,
  changePreviewMode: Function.prototype,
  changeViewMode: Function.prototype,
  closeMenu: Function.prototype,
  savePen: Function.prototype,
}

export default MenuContent
