<template>
<div>
  <quill-editor
    class="wen"
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      >
    </quill-editor>
    <Button @click="add">tijiao</Button>
    <Menu theme="light"  accordion>
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper" />
                        内容管理
                    </template>
                    <MenuItem name="1-1"> 文章管理 </MenuItem>
                    <MenuItem name="1-2"> 评论管理 </MenuItem>
                    <MenuItem name="1-3">举报管理</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people" />
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
            </Menu>
</div>
</template>
<script>
import { quillEditor } from 'vue-quill-editor'
export default{
  data () {
    return {
      content: null,
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike', 'blockquote', 'image', 'clean'],
            [{'list': 'ordered'}, { 'list': 'bullet' }],
            [{'indent': '-1'}, { 'indent': '+1' }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'size': ['small', false, 'large', 'huge'] }]
          ]
        }
      }
    }
  },
  methods: {
    add () {
      console.log(this.content)
    }
  },
  components: {
    quillEditor
  }
}
</script>

<style scoped>
.wen{
  width: 600px;
  height: 400px;
  /* max-height: 800px; */
}
</style>
