<template>
  <el-container style="height: 100%; border: 1px solid var(--bg-color-base)">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router>
        <el-submenu v-for="(item, index) in menus" :key="index" :index="`${index}`">
          <template slot="title"><i :class="item.icon"></i>{{ item.name }}</template>
          <el-menu-item v-for="(submenu, subIndex) in item.children" :key="`${index}-${subIndex}`" :index="submenu.path">{{ submenu.name }}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container class="page-view">
      <slot></slot>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: "Log",
          icon: "el-icon-bell",
          children: [
            {
              name: "Script-Log",
              path: "/log/script",
            },
          ],
        },
        {
          name: "Setting",
          icon: "el-icon-setting",
          children: [
            {
              name: "System-Setting",
              path: "/setting/system",
            },
          ],
        },
      ],
    }
  },
}
</script>
<style lang="less">
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  background-color: #fff;
}
.el-menu {
  height: 100%;
  text-align: left;
  .el-menu-item {
    font-size: 12px;
    padding-left: 50px !important;
  }
}
</style>
<style lang="less" scoped>
.page-view {
  padding: 20px;
  background: var(--bg-color-base);
  padding-bottom: 40px;
}
</style>
