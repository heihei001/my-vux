<template>
  <view-box ref="viewBox">
    <router-view></router-view>
    <tabbar v-model="currentTabbar" slot="bottom">
      <tabbar-item link="/ai/assistant/time">
        <span slot="label">助理</span>
      </tabbar-item>
      <tabbar-item link="/ai/message" show-dot>
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item link="/ai/customer">
        <span slot="label">客户</span>
      </tabbar-item>
      <tabbar-item link="/ai/friends" badge="2">
        <span slot="label">朋友圈</span>
      </tabbar-item>
      <tabbar-item link="/ai/my" badge="2">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </view-box>
</template>

<script>
 export default {
   name: 'AI',
   data () {
     return {
       currentTabbar: 0
     }
   },
   components: {

   }
 }
</script>

<style lang="less" scoped>
</style>
