export const formConfig = {
  formParams: {
    // size: 'small',
    // labelWidth: '100px',
    inline: true
  },
  colLayout: {
    span: 8
  },
  itemStyle: {
    // padding: '100px'
  },
  formList: [
    {
      field: 'loginName',
      label: '姓名',
      type: 'input'
    },
    {
      field: 'phone',
      label: '电话',
      type: 'input'
    },
    {
      type: 'slot',
      slotName: 'button'
    }
  ]
}
