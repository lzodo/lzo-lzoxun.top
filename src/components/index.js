
import xfdDialog from './dialog/index';
import {Switch} from './switch';
import {xfdPull,xfdPullLeft,xfdPullLeftTwo} from './pull';

const iview = {
    Switch,
    xfdPullLeft
}
const install = function (Vue) {

    Object.keys(iview).forEach((key) => {
        /*console.log(key)
        console.log(iview[key])*/
        // console.log(key, iview[key])
        Vue.component(iview[key].name, iview[key]);
    });
    /**
     * 全局注定弹框
     */
    Vue.prototype.$xfdDialog = xfdDialog;
};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
/*export {
install,
iview
} ;*/
//export default install;
export default install;