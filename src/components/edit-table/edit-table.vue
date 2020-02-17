<template>
  <Table :columns="insideColumns" :data="value"></Table>
</template>

<script>
import clonedeep from 'clonedeep'
export default {
  name: 'EditTable',
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      insideColumns: [],
      edittingId: '',
      edittingContent: '',
    }
  },
  watch: {
    columns () {
      this.handleColumns()
    }
  },
  methods: {
    handleClick({ row, index, column }) {
      console.log(row, index, column)
      const isEditing = this.edittingId === `${column.key}_${index}`
      if (isEditing) {
        let tableData = clonedeep(this.value)
        if (this.edittingContent) tableData[index][column.key] = this.edittingContent
        this.$emit('input', tableData)
        this.$emit('on-edit', { row, index, column, newValue: this.edittingContent })
        this.edittingId = ''
        this.edittingContent = ''
      } else {
        this.edittingId = `${column.key}_${index}`
      }
    },
    handleInput(newValue) {
      if (newValue) {
        this.edittingContent = newValue
      }
    },
    handleColumns() {
      console.log(this.columns)
      const insideColumns = this.columns.map(item => {
        if (!item.render && item.editable) {
          item.render = (h, { row, index, column }) => {
            const isEditing = this.edittingId === `${column.key}_${index}`
            return (
              <div>
                {isEditing ? <i-input value={row[column.key]} style="width: 50px" on-input={this.handleInput}></i-input> : row[column.key]}
                <i-button on-click={this.handleClick.bind(this, { row, index, column })}>{isEditing ? '保存' : '编辑'}</i-button>
              </div>
            )
          }
          return item
        } else return item
      })
      this.insideColumns = insideColumns
    }
  },
  mounted () {
    this.handleColumns()
  }
}
</script>