const backgroundColor = '#fdf6e3' // base3
const foregroundColor = '#657b83' // base00
const cursorColor     = '#657b83' // base00
const borderColor     = 'rgba(38, 139, 210, 0.3)'

const colors = [
  '#073642', // base02
  '#dc322f', // red
  '#859900', // green
  '#b58900', // yellow
  '#268bd2', // blue
  '#d33682', // magenta
  '#2aa198', // cyan
  '#eee8d5', // base2
  '#002b36', // base03
  '#cb4b16', // orange
  '#586e75', // base01
  '#657b83', // base00
  '#839496', // base0
  '#6c71c4', // violet
  '#93a1a1', // base1
  '#fdf6e3'  // base3
]

exports.decorateConfig = config => {

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}
      * {
        -webkit-font-feature-settings: "liga" on, "calt" on, "dlig" on !important;
        text-rendering: optimizeLegibility !important;
      }
      .hyperterm_main {
      	border: transparent !important;
      }
      .cursor-node {
        width: .325rem !important;
      }
      .tabs_list {
        border-color: transparent !important;
      }
      .tab_tab {
        border: transparent !important;
        color: ${foregroundColor} !important;
        background-color: #e6dfcb;
      }
      .tabs_title {
        color: ${foregroundColor} !important;
      }
      .tab_tab.tab_active:before {
        border-bottom: transparent !important;
      }
      .tab_tab.tab_active {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor};
        border-bottom: none !important;
        font-weight: bold;
      }
      .tabs_nav {
      	background-color: #e6dfcb !important;
      }
      .tabs_borderShim {
      	border: transparent;
      }
      .splitpane_divider {
      	background-color: #e6dfcb !important;
      }
      .header_shape
      {
        color: #657b83;
      }
      .header_appTitle
      {
        color: #657b83;
      }
    `
  })
}

