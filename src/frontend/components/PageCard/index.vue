<template>
  <div class="m-page-card">
    <div class="m-header">
      <div class="header-left">
        <el-button v-if="goBack" class="back" type="text" icon="el-icon-back" @click="back"></el-button>
        <h4>{{ title || this.$route.meta.title }}</h4>
        <slot name="header-left"> </slot>
      </div>

      <slot name="header-right">
        <div></div>
      </slot>
    </div>
    <div class="m-content">
      <slot></slot>
    </div>
    <div class="m-footer">
      <div class="m-footer-left">
        <slot name="footer-left">
          <div></div>
        </slot>
      </div>
      <div class="m-footer-right">
        <slot name="footer-right"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    goBack: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="less" scoped>
.m-page-card {
  width: 100%;
  .m-content {
    height: 90%;
    background-color: var(--bg-color);
    padding: 20px;
  }
  .m-header,
  .m-footer {
    background: var(--bg-color);
    padding: 0 20px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .back,
    h4 {
      
      line-height: 40px;
      margin-right: 10px;
    }
    h4{
      color: var(--color-text-primary)
    }
    .header-left{
      display: flex;
      align-items: center;
    }
    // ::v-deep .el-pagination{
    //     justify-self: flex-end;
    // }
  }
  .m-header {
    margin-bottom: 10px;
  }
  .m-footer {
    height: 50px;
    margin-top: 10px;
  }
}
</style>
