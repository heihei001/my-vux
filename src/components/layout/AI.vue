<template>
  <view-box ref="viewBox">
    <router-view></router-view>
    <tabbar class="tabbar" v-model="currentTabbar" slot="bottom">
      <tabbar-item link="/ai/assistant/time">
        <img slot="icon" src="../../assets/images/tabbar/md_tabbar_radar.png"/>
        <img slot="icon-active" src="../../assets/images/tabbar/md_tabbar_radar_hover.png"/>
        <span slot="label">助理</span>
      </tabbar-item>
      <tabbar-item link="/ai/message" show-dot>
        <img slot="icon" src="../../assets/images/tabbar/md_tabbar_msg.png"/>
        <img slot="icon-active" src="../../assets/images/tabbar/md_tabbar_msg_hover.png"/>
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item link="/ai/customer">
        <img slot="icon" src="../../assets/images/tabbar/md_tabbar_custom.png"/>
        <img slot="icon-active" src="../../assets/images/tabbar/md_tabbar_custom_hover.png"/>
        <span slot="label">客户</span>
      </tabbar-item>
      <tabbar-item link="/ai/friends" badge="2">
        <img slot="icon" src="../../assets/images/tabbar/md_tabbar_moments.png"/>
        <img slot="icon-active" src="../../assets/images/tabbar/md_tabbar_moments_hover.png"/>
        <span slot="label">朋友圈</span>
      </tabbar-item>
      <tabbar-item link="/ai/my" badge="2">
        <img slot="icon" src="../../assets/images/tabbar/md_tabbar_mine.png"/>
        <img slot="icon-active" src="../../assets/images/tabbar/md_tabbar_mine_hover.png"/>
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
  .tabbar {
    img {
    }
  }
</style>
