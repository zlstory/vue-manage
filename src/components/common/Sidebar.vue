<template>
  <div class="sidebar-content">
    <el-menu  class="el-menu-vertical" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#1b2025" text-color="#fff" active-text-color="#ffd04b" router>
      <!-- 循环数据 -->
     <template v-for="item in items">
       <!-- 如果有二级菜单 -->
      <template v-if='item.subs'>
        <el-submenu :index="item.index" :key="item.index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </template>
          <template v-for='subItem in item.subs'>
           <!-- 如果有三级菜单 -->
            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
              <template slot="title">
                {{subItem.title}}
              </template>
              <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" index="threeItem.index">
                {{threeItem.title}}
              </el-menu-item>
            </el-submenu>
            <!-- 二级菜单 -->
            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
              {{subItem.title}}
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
      <!-- 没有二级菜单时 -->
      <template v-else>
        <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </template>
     </template>
     
      
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "commonSidebar",
    data() {
      return {
        isCollapse: false,
        items:[{
            icon:'el-icon-tickets',
            index:'index',
            title:'页面1'
        },{
            icon:'el-icon-document',
            index:'userMsg',
            title:'用户页面'
        },{
            icon:'el-icon-news',
            index:'adminMsg',
            title:'管理员',
            subs:[{
                index:'admin1',
                title:'管理员1'
            },{
                index:'admin2',
                title:'管理员2'
            }]
        }]
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
  @import '~static/css/variables';
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
    width: $sideBar-width;
    min-height: 400px;
  }
  .sidebar-content>ul {
    height: 100%;
  }

  .el-menu-item:hover{
    background-color: rgb(65,67,71) !important;
  }
</style>
