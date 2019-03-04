import axios from 'axios'

export default {
    getserver(data) {
        // data是一个对象
        return axios.post("api/tgGrainSale/spotInfoList", data)
    }
}