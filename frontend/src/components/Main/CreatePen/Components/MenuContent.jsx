// Modules
import React from 'react'
import PropTypes, { object } from 'prop-types'
import { ContextMenu } from 'weblite-web-relite'

export default class MenuContent extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { menuIsOpen, changePreviewMode, changeViewMode } = this.props
    return (
      <ContextMenu
        open={menuIsOpen}
        x={150}
        y={150}
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
            name: 'Discard',
            action: console.log,
            data: 'Discard',
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
  }
}

MenuContent.propTypes = {
  menuIsOpen: PropTypes.bool,
  changePreviewMode: PropTypes.func,
  changeViewMode: PropTypes.func,
}

MenuContent.defaultProps = {
  menuIsOpen: false,
  changePreviewMode: null,
  changeViewMode: null,
}
