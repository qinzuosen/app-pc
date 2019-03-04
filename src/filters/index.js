// 引入时间格式化的工具
import moment from 'moment' 

const vfilter = {
    dateF(value) {
        return moment(value).format("YYYY-MM-DD HH:mm:ss")
    },
    dateY(value) {
        return moment(value).format("YYYY")
    },
    dateYM(value) {
        return moment(value).format("YYYY-MM")
    },
    dateYMD(value) {
        return moment(value).format("YYYY-MM-DD")
    },
    dateYMDHM(value) {
        return moment(value).format("YYYY-MM-DD HH:mm")
    },
    dateMDHM(value) {
        return moment(value).format("MM-DD HH:mm")
    }
}
export default vfilter;