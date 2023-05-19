export const modalConfig = {
  formParams: {
    // size: 'small',
    labelWidth: '80px',
    inline: true
  },
  colLayout: {
    span: 8
  },
  itemStyle: {
    // padding: '10px'
    // width: '50%'
  },
  formList: [
    {
      field: 'loginName',
      label: '姓名',
      type: 'input'
    },
    {
      field: 'sex',
      label: '性别',
      type: 'radio',
      options: [
        {
          label: '1',
          text: '男'
        },
        {
          label: '0',
          text: '女'
        }
      ]
    },
    {
      field: 'phone',
      label: '电话',
      type: 'input'
    },
    {
      field: 'idCard',
      label: '身份证',
      type: 'input'
    },
    {
      field: 'username',
      label: '登录名',
      type: 'input'
    },
    {
      field: 'password',
      label: '密码',
      type: 'input'
    },
    {
      field: 'status',
      label: '离职',
      type: 'radio',
      options: [
        {
          label: 1,
          text: '是'
        },
        {
          label: 0,
          text: '否'
        }
      ]
    },
    {
      field: 'isUsed',
      label: '启用',
      type: 'radio',
      options: [
        {
          label: 0,
          text: '是'
        },
        {
          label: 1,
          text: '否'
        }
      ]
    }
  ]
}
