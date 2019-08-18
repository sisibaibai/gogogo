<template>
  <div class="container">
    <div class="center">
      <div class="photo">
        <img src="../assets/logo.png" alt />
      </div>
      <!-- 登录模块 -->
      <el-form ref="formref" :rules="rules" :model="loginform" class="form">
        <el-form-item prop="username">
          <el-input v-model="loginform.username" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type='password' v-model="loginform.password" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item class="button">
          <el-button type="primary" @click="loginIn">登录</el-button>
          <el-button type="info" @click='reset'>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginform: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16 个字符", trigger: "blur" }
        ]
      }
    }
  },
  methods: {
    loginIn() {
      this.$refs.formref.validate(async valid => {
        if (!valid) return this.$message.info('请完善登录信息！')
        console.log(this.loginform);
        this.$http({url:'login',data:this.loginform,method:'post',error:'登录失败',success:(val)=>{
            console.log(val);            
           sessionStorage.setItem('token',val.token)
           this.$router.push('/home')
        },that:this,successMess:'登录成功'})
        // const {data:res} = await this.$http.post('login',this.loginform)
        // console.log(res);
        
        // if(res.meta.status !== 200) this.$message.error('登录失败')
        // this.$message.success('登录成功')
        // this.$router.push('/home')

      })

    },
    reset(){
        this.$refs.formref.resetFields();
    }
  }
};
</script>
<style scoped lang='less'>
.container {
  background-color: #2b4b6b;
  height: 100%;
  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 300px;
    background-color: #fff;
    .photo {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 130px;
      height: 130px;
      border-radius: 50%;
      background-color: #fff;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
    .form {
      position: absolute;
      bottom: 0;
      padding: 20px;
      width: 100%;
      .button {
        text-align: right;
      }
    }
  }
}
</style>
