/* eslint-disable no-unused-vars */
<template lang="pug">
  .useradd 
    el-form(:model="useraddForm" :rules="rules" ref="useraddForm"  label-width="100px")
      el-row
        el-col(:span='6')
          el-form-item(label="用户姓名" prop='nickname')
            el-input(v-model="useraddForm.nickname")
        el-col(:span='6')
          el-form-item(label="登录账号" prop='username')
            el-input(v-model="useraddForm.username")
        el-col(:span='6')
          el-form-item(label="登录密码" prop='password')
            el-input(type="password" v-model="useraddForm.password")
        el-col(:span='6')
          el-form-item(label="确认密码" prop='checkpass')
            el-input(type="password" v-model="useraddForm.checkpass")
        el-col(:span='6')
          el-form-item(label="所属公司" prop='')
            el-input 
        el-col(:span='6')
          el-form-item(label="所属部门" prop='departmentId')
            el-select(v-model="useraddForm.departmentId") 
              el-option(label="测试部门" value='1401141036')
        el-col(:span='6')
          el-form-item(label="角色ID" prop='roleId')
            el-select(v-model="useraddForm.roleId") 
              el-option(label="测试部门" value='1')
        el-col(:span='6')
          el-form-item(label="手机号码" prop='phone')
            el-input( v-model='useraddForm.phone')
        el-col(:span='6')
          el-form-item(label="角色性别" prop='gender')
            el-select( v-model='useraddForm.gender')
              el-option(label="男" value=1)
              el-option(label="女" value=0)
        el-col(:span='6')
          el-form-item(label="用户状态" prop='state')
            el-select( v-model='useraddForm.state')
              el-option(label="启用" value=1)
              el-option(label="禁用" value=0)
              el-option(label="锁定" value=2)
        el-col(:span='6')
          el-form-item(label="信息备注" prop='remark')
            el-input( v-model='useraddForm.remark')
      el-form-item 
        el-button(@click="resetForm('useraddForm')" size="small") 重置
        el-button(type="primary" size="small"  @click="getawayPost") 提交 
</template>
<style lang="scss" >

  .useradd {
    span {padding: 10px;}
    width: 80%;
    margin:0 auto ;
    margin-top: 130px;
    .el-form-item__label{color:white !important;font-size:16px !important}
  }
  .el-input-style{
    width:100px;
    display:inline !important;
  }
</style>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.useraddForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      rules:{
        nickname:[
          {required: true, message: '请输入姓名', trigger: 'blur'},
          { min: 2, max: 10, message: '长度在 4到 10 个字符', trigger: 'blur' }
        ],
        username:[
          {required: true, message: '请输入用户名', trigger: 'blur'},
          { min: 4, max: 11, message: '长度在 6到 11 个字符', trigger: 'blur' }
        ],
        password:[
          {required: true, message: '请输入密码', trigger: 'blur'},
          { min: 4, max: 30, message: '长度在 6到 30 个字符', trigger: 'blur' }
        ],
        checkpass:[
          {required: true, validator: validatePass, trigger: 'blur'},
        ],
        departmentId:[
          {required: true, message: '请选择部门', trigger: 'blur'},
        ],
        phone:[
          {required: true, message: '请输入手机号', trigger: 'blur'},
          { min: 11, max: 11, message: '请输入11位手机号', trigger: 'blur' }
        ]
        
      },
      useraddForm:{
        deleted: '',//逻辑删除
        departmentId:'', //部门id
        gender: '', //性别
        nickname:'', // 昵称
        password: '', // 密码
        checkpass:'',
        phone: '', // 手机号
        remark: '', // 备注
        state: '', // 状态 默认为1
        username: '', // 用户名,
        header: '',//头像
        roleId:''
      }
    }
  },
  methods:{
    getawayPost() {
      this.$http.post('/sysUser/add',this.useraddForm).then(res=>{
        alert (res.msg);
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getepId(){
      const epid=JSON.parse(localStorage.getItem('loginMsg')).departmentId-0;
      const creater=JSON.parse(localStorage.getItem('loginMsg')).nickname;
      return this.useraddForm.epId=epid,this.useraddForm.creater=creater;
      
      
    }
  },
  created() {
    this.getepId();
   
  }
    
} 
</script>