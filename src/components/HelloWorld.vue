<template>
  <div class="hello">
    <Button type="primary">{{this.$t('showPoptipText')}}</Button>
      <Select
      @on-change='handleSwitch(model1)'
      v-model="model1"
      style="width:200px"
      :label-in-value= true
      >
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      cityList: [
        {
          value: 'zh-CN',
          label: '中文'
        },
        {
          value: 'en-US',
          label: 'English'
        }
      ],
      model1: 'English'
    }
  },
  methods: {
    handleSwitch (value) {
      this.$i18n.locale = value
      console.log(this.model1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
