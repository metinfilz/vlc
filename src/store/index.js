export const Selectors = {
    menu: {
        visible: state => state.menu.c1Visible,
        childList: state => state.menu.c2List,
        parentList: state => state.menu.c1List,
        parentIndex: state => state.menu.c1Index,
        childIndex: state => state.menu.c2Index,
        parentVisible: state => state.menu.c1Visible,
        childVisible: state => state.menu.c2Visible,
        parentStyle: state => state.menu.c1Style,
        childStyle: state => state.menu.c2Style,
    }
}
