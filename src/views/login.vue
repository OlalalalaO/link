<template>
  <div class="container">
    <div class="bg">
      <p class="slogan">Connecting<br> Every person <br>Every account</p>

    </div>
    <div class="login_container">
      <div class="register">加入我们</div>
      <div class="login_form">
        <div class="login">登录</div>
        <div><input class="input_form form" placeholder="请输入账号" type="text" v-model="user.username"></input></div>
        <div><input class="input_form form" placeholder="请输入密码" type="password" v-model="user.password"></input></div>
        <div class="reset"><a class="reset_password" @click="resetPassword()">忘记密码</a></div>
        <button class="submit_button form" onclick="" @click="handleClick()">登录</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "log-in",
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    handleClick() {
      console.log(this.user);
    },
    resetPassword() {
      console.log('点击了忘记密码');
      this.$router.push('/reset');
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg {
  background: royalblue;
  height: 100%;
  flex-grow: 4;
  display: grid;
  grid-template-areas: "a"
                        "b"
                        "c";
}

.login_container {
  background: rgb(251, 251, 251);
  height: 100%;
  flex-grow: 5;
  justify-items: center;
  display: grid;
  grid-template-areas: "a a a a d"
                       "b b b b b"
                       "c c c c c";
}
.register {
  grid-area: d;
  margin-top: 20px;
  margin-right: 20px;
  font-size: 15px;
  color: royalblue;
  cursor: pointer;
}
.login{
  font-size: 35px;
  margin-left: 20px;
  margin-bottom: 20px;
  color: royalblue;
}
.login_form {
  grid-area: b;
  width: 525px;
}
::placeholder{
  font-size: 16px;
}
.slogan {
  font-size: 50px;
  color: white;
  grid-area: b;
  place-self: center center;
}
.reset{
  text-align: right;
  width: 525px;
  margin-bottom: 16px;
}
.reset_password {
  color: rgba(64, 63, 66, 0.6);
}

.input_form {
  height: 56px;
  width: 525px;
  border-radius: 30px;
  border: 1px solid rgba(64, 63, 66, 0.3);
  padding-left: 30px;
  outline:0;
}

.form {
  margin-bottom: 10px;
}

.submit_button {
  height: 56px;
  width: 525px;
  background-color: royalblue;
  border-radius: 30px;
  border: 5px;
  font-size: 20px;
  color: white;
  cursor: pointer;
}
</style>