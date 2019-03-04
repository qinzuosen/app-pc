const a = {
    state: {
        msg: "hahah"
    },
    mutations: {
        newMsg(state, msg) {
            state.msg = msg
        }
    },
    actions: {
        newMsg(context, msg) {
            context.commit("newMsg", msg)
        }
    }
}
export default a