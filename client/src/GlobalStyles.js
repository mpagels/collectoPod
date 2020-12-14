import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background-color: #313133;
    color: #ffffff;
}

:root {
    --main-background-grey: #313133;
    --dragList-isDragging-active: #1E1E1F;
}
`
