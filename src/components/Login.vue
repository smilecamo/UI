<template>
  <div class="container">
    <Input
      v-model="usename"
      prefix="ios-contact"
      placeholder="name"
      @on-blur='nameBlur'
      class="input"
      />
    <Input
      v-model="password"
      prefix="ios-lock-outline"
      placeholder="password"
      @on-blur='passWordBlur'
      class="input"
      />
    <Button
      type="primary"
      @click="handleClick"
      style='width: 200px;margin:20px 0;'
    >登录</Button>
  </div>
</template>

<script>
export default{
  data () {
    return {
      usename: '',
      password: ''
    }
  },
  methods: {
    handleClick () {
      if (this.usename === '' || this.password === '') {
        this.$Message.warning({
          top: 200,
          content: '请输入用户名或密码',
          duration: 2
        })
      } else {
        this.$axios({
          method: 'get',
          url: '/api/login/cellphone',
          params: {
            phone: this.usename,
            password: this.password
          }
        })
          .then((res) => {
            console.log(res.data)
            // this.$Loading.finish()
            if (res.data.code !== 400) {
              const ids = res.data.account.id
              this.Cookies.set('id', ids)
              this.$router.push({path: '/list'})
            } else {
              this.$Message.warning({
                top: 200,
                content: '用户名密码错误',
                duration: 2
              })
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    nameBlur () {
      if (this.usename === '') {
        this.$Message.warning({
          top: 200,
          content: '请输入用户名',
          duration: 2
        })
      }
    },
    passWordBlur () {
      if (this.password === '') {
        this.$Message.warning({
          top: 200,
          content: '请输入密码',
          duration: 2
        })
      }
    }
  }
}
</script>

<style >
  .container{
    width: 360px;
    background: #ccc;
    position: absolute;
    right: 240px;
    bottom: 400px;
    border-radius: 5px;
  }
  .input{
    width: 300px;
    margin-top: 20px;
  }
</style>
