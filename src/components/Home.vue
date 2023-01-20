<template>
  <p>Home</p>
  <p>Test</p>


</template>

<script>
export default {
    name:"HomeA",
    mounted() {
      this.$axios("/index")
    },
}
</script>

<style>

</style>