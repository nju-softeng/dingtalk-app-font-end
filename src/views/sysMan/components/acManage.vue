<template>
  <div class="app-container">
    <el-card
      shadow="never"
    >
      <div slot="header">
        <span>添加一条ac记录</span>
      </div>
      <el-form ref="form" :model="form" label-width="150px">
        <el-form-item
          prop="ac"
          label="变更的ac值"
          :rules="[
            { required: true, message: 'ac值不能为空', trigger: 'blur' },
            { type: 'number', message: 'ac值必须为数字值', trigger: 'blur' }
          ]"
        >
          <el-input v-model.number="form.ac" />
        </el-form-item>
        <el-form-item
          label="ac变更用户"
          prop="user"
          :rules="[
            { required: true, message: '用户不能为空', trigger: 'blur' },
          ]"
        >
          <el-select v-model="form.user" filterable placeholder="搜索用户">
            <el-option
              v-for="item in userList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="变更ac日期"
          prop="createTime"
          :rules="[
            { required: true, message: '日期不能为空', trigger: 'blur' },
          ]"
        >
          <el-date-picker v-model="form.createTime" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-form-item>
        <el-form-item
          label="ac变更类型"
          prop="classify"
          :rules="[
            { required: true, message: '变更类型不能为空', trigger: 'blur' },
          ]"
        >
          <el-radio-group v-model="form.classify">
            <el-radio label="1">项目</el-radio>
            <el-radio label="2">论文</el-radio>
            <el-radio label="3">投票</el-radio>
            <el-radio label="4">缺陷</el-radio>
            <el-radio label="5">专利</el-radio>
            <el-radio label="6">钉钉事项</el-radio>
            <el-radio label="0">其他</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="ac变更原因"
          prop="reason"
          :rules="[
            { required: true, message: '变更原因不能为空', trigger: 'blur' },
          ]"
        >
          <el-input v-model="form.reason" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button :loading="isSubmitting" type="primary" @click="submitForm('form')">立即添加</el-button>
          <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>

</template>

<script>
import { getUserList } from '@/api/user'
import { addAcRecord } from '@/api/performance'
export default {
  data() {
    return {
      form: {
        ac: '',
        createTime: '',
        classify: '',
        user: '',
        reason: ''
      },
      userList: [],
      isSubmitting: false
    }
  },
  created() {
    this.setUserList()
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.isSubmitting = true
          addAcRecord({ ...this.form, user: { id: this.form.user }}).then((res) => {
            this.$notify.success('添加成功！')
          }).catch(err => {
            console.log(err)
            this.$notify.error('添加失败!')
          }).finally(() => {
            this.isSubmitting = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    setUserList() {
      getUserList().then((res) => {
        this.userList = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  padding: 12px;
  background-color: #fafafa;
  border-radius: 0;
}
</style>
