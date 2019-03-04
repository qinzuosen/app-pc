<template>
    <div class="content">
        <el-button type='primary' icon='el-icon-search' @click="server()"></el-button>
        <div class="div">
        </div>
        <span class="iconfont icon-icon_add"></span>
    </div>
</template>

<script>
export default {
    data: ()=>({
        
    }),
    created() {
        // 拿到vuex的值
        console.log(this.$store.state.a.msg);
    },
    methods: {
        server() {
        this.API.getserver({
          key: this.key,
          code: this.code
        }).then((res) => {
          console.log(res);
        }, (err) => {})
      }
    },
}
</script>

<style lang="less" scoped>
    .div {
        font-size: 16px;
    }
</style>