// 创建vue的全局变量
import Vue from 'vue'
let variable = {
    install: (Vue) => {
        var setIp = "http://192.168.1.67:8080/DidiCar/"
        var key = "z1zkey"
        var code = "MTJCNDgyOTIxOTk4QjUzQzM2QTlFN0ZFMzY0MDNEMjQ="
        Vue.prototype.setIp = setIp;
        Vue.prototype.key = key;
        Vue.prototype.code = code;
    }
}
Vue.use(variable); //注册！