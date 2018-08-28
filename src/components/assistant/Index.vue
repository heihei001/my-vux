<template>
  <div>
    <tab v-model="currentTab">
      <tab-item @on-item-click="onItemClick">时间</tab-item>
      <tab-item @on-item-click="onItemClick">行为</tab-item>
      <tab-item @on-item-click="onItemClick">个人</tab-item>
    </tab>
    <router-view></router-view>
 </div>
</template>

<script>
 export default {
   name: 'Index',
   data () {
     return {
       currentTab: 0,
       tabItem: ['time', 'behavior', 'people']
     }
   },
   computed: {},
   created () {},
   watch: {
     $route (to, form) {
       const paths = to.path.split('/')
       this.currentTab = this.tabItem.indexOf(paths[paths.length - 1])
     }
   },
   methods: {
     onItemClick (value) {
       this.$router.push(this.tabItem[value])
     }
   }
 }
</script>

<style lang="less" scoped>

</style>
