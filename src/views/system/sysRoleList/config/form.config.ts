export const formConfig = {
  formParams: {
    // size: 'small',
    // labelWidth: '100px',
    inline: true
  },
  colLayout: {
    span: 12
  },
  itemStyle: {
    // padding: '100px'
  },
  formList: [
    {
      field: 'roleName',
      label: '角色名称',
      type: 'input'
    },
    {
      type: 'slot',
      slotName: 'button'
    }
  ]
}
