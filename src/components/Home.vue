<template>
  <div >
   <el-button @click='exit'>退出</el-button>
  </div>
</template>
<script>
export default {
    methods:{
        exit(){
            sessionStorage.clear()
            this.$router.push('/login')
        }
    }
}
</script>
<style>

</style>
