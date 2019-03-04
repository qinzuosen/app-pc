import axios from 'axios'

//添加请求拦截器
axios.interceptors.request.use(function (config) {
    console.log("请求成功");
    // 获取token
    let TOKEN = localStorage.token;
    // 设置token
    if (TOKEN) {
        config.headers['X-ODAPI-Authorization'] = TOKEN;
    }
    // 返回配置项
    return config;
}, function (error) {
    //请求错误时做些事
    console.log("请求失败");
    return Promise.reject(error);
});

//添加响应拦截器
axios.interceptors.response.use(function (response) {
    return response.data;
    /**
     * 下面是判断,暂时注释
     */
    // if (response['status'] == 200) {
    //     if (response['data']['code'] == 0) {
    //         return response['data'];
    //     } else {
    //         if (response['data'].hasOwnProperty('erron')) {
    //             console.log(response['data']['erron']);
    //         }
    //         return false;
    //     }
    // } else {
    //     console.log('网络错误！');
    // }

}, function (error) {
    //请求错误时做些事
    console.log(error);
    return Promise.reject(error);
})