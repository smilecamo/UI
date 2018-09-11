<template>
  <div>
    <Table
      border
      :loading="loading"
      :columns="columns1"
      :data="data1"

      @on-selection-change='show1'
    ></Table>
    <div
    class="page"
    >
    <Page
      show-total
      :page-size="pageSize"
      :total= 'total'
      @on-change= 'changePage'
    />
    <Button
    @click='showPage'
    >选中值</Button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      MSG: '',
      loading: false,
      pageSize: 2,
      total: 0,
      ss: '',
      columns1: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          sortable: true,
          title: 'Name',
          key: 'nickname'
        },
        {
          tooltip: true,
          width: 200,
          title: 'Age',
          key: 'avatarUrl'
        },
        {
          sortable: true,
          title: 'followeds',
          key: 'followeds'
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    const ids = params.row.userId
                    this.$router.push({ name: 'Text', params: {id: ids} })
                    console.log(params.row.userId)
                  }
                }
              }, 'View'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, 'Delete')
            ])
          }
        }
      ],
      data1: []
    }
  },
  beforeCreate () {
    if (this.data1 === []) {
      this.loading = true
    } else {
      this.loading = false
    }
  },
  created () {
    this.$axios({
      method: 'GET',
      url: `/api/user/follows`,
      params: {
        uid: this.Cookies.get('id')
      }
    }).then(res => {
      this.total = res.data.follow.length
      this.data1 = res.data.follow
    })
    // console.log()
    this.MSG = this.Cookies.get('id')
    if (this.MSG === '' || undefined) {
      this.$router.push({ path: '/login' })
    }
  },
  methods: {
    changePage (page) {
      console.log(page)
    },
    show (selection) {
      console.log(selection)
    },
    show1 (selection) {
      let s = selection
      this.ss = s.map(function (user) { return user.userId })
      console.log(this.ss)
    },
    showPage () {
      if (this.ss.length <= 0) {
        this.$Message.info('请至少选择一个')
      } else {
        console.log(this.ss)
      }
    }
  }
}
</script>

<style scoped>
  .page{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
</style>
