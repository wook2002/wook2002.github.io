<template>
  <!-- 
  <a class="navbar-brand" href="/">Home</a>
    게시판
  <a class="dropdown-item" href="/post/readListPage/2">공지사항</a>
  <a class="dropdown-item" href="/post/readListPage/1">자유게시판</a>
  <a class="dropdown-item" href="/post/readListPage/3">QnA</a>
  <a class="dropdown-item" href="/freeBoard/list">게시판테스트</a> 
  <span class="navbar-toggler-icon"></span>
    메시지
    할 일
    통계
    구성원
-->
  <div class="card">
    <div class="card-image" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
    <div class="card-header" v-if="$slots.header || title">
      <slot name="header">
        <h4 class="card-title">{{ title }}</h4>
        <p class="card-category" v-if="subTitle">{{ subTitle }}</p>
      </slot>
    </div>
    <div class="card-body" v-if="$slots.default">
      <slot></slot>
    </div>
    <slot name="raw-content"></slot>
    <div class="card-footer" v-if="$slots.footer">
      <hr />
      <slot name="footer"></slot>
    </div>
  </div>

  <!-- awesome : main.js에 추가해주면서 해야됨
<font-awesome-icon icon="fa-solid fa-bars" class="fa-2x" />
<font-awesome-icon icon="fa-solid fa-user" class="fa-3x" />
<font-awesome-icon icon="fa-solid fa-flag" />
<font-awesome-icon icon="fa-solid fa-phone" /> 
--></template>

<script>
export default {
  name: "MainNavbarA",
};
</script>

<style lang="scss" scoped>
</style>