// table的配置项
export const tableConfig = {
  // showIndexColumn: true,
  // showSelectionColumn: true,
  // showExpandColumn: true,
  tableParams: {
    // size: 'small',
    height: '460'
  },
  propList: [
    {
      id: 1,
      label: '栋数名称',
      prop: 'name'
    },
    {
      id: 2,
      label: '单元名称',
      prop: 'unitName'
    },
    {
      id: 7,
      label: '操作',
      align: 'center',
      width: 310,
      slotName: 'action'
    }
  ]
}
