<template>
  <div class="home">
    <view-box ref="viewBox">
      <tabbar slot="bottom">
        <tabbar-item>
          <span slot="label">助理</span>
        </tabbar-item>
        <tabbar-item show-dot>
          <span slot="label">消息</span>
        </tabbar-item>
        <tabbar-item selected link="/component/demo">
          <span slot="label">客户</span>
        </tabbar-item>
        <tabbar-item badge="2">
          <span slot="label">朋友圈</span>
        </tabbar-item>
        <tabbar-item badge="2">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
 export default {
   name: 'Home',
   data () {
     return {
     }
   },
   components: {

   }
 }
</script>

<style lang="less" scoped>
  .home {
    height: 100%;
  }
</style>
