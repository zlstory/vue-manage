<template>
  <div class="sidebar-content">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group> -->
    <el-menu default-active="1-4-1" 
            class="el-menu-vertical" 
            @open="handleOpen"
            @close="handleClose" 
            :collapse="isCollapse"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
      </template>
    <el-menu-item-group>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group>
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>

</el-menu>
</div>
</template>

<script>
  export default {
    name: "commonSidebar",
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>

<style lang='scss' scoped>
  @import "~static/css/variables";
  $header-height: 4.5rem;
  .sidebar-content {
    display: block;
    position: absolute;
    left: 0;
    top: $header-height;
    bottom: 0;
    overflow-y: scroll;
  }
  .sidebar-content::-webkit-scrollbar {
    width: 0;
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .sidebar-content>ul {
    height: 100%;
  }
</style>
