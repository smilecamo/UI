<template>
  <div>
    <ul>
      <li>{{MSG}}</li>
    </ul>
  </div>
</template>

<script>
export default{
  data () {
    return {
      list: [],
      MSG: ''
    }
  },
  created () {
    this.$axios({
      method: 'GET',
      url: `/api/user/follows`,
      params: {
        uid: this.Cookies.get('id')
      }
    })
      .then((res) => {
        console.log(res)
      })
    // console.log()
    this.MSG = this.Cookies.get('id')
  }
}
</script>
