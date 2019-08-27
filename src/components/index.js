
import xfdDialog from './dialog/index'
import {Switch} from './switch'
import {xfdPullLeft} from './pull'
import PointDoc from './PointDoc/index'
import ScrollDoc from './PointDoc/scrolldoc'

const iview = {
  Switch,
  xfdPullLeft,
  PointDoc,
  ScrollDoc
}
const install = function (Vue) {
  Object.keys(iview).forEach((key) => {
    Vue.component(iview[key].name, iview[key])
  })
  /**
    * 全局注定弹框
    */
  Vue.prototype.$xfdDialog = xfdDialog
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default install
