<template>
  <div class="header">
    <slot name="header"></slot>
  </div>
  <el-form ref="form" :model="formData" v-bind="formParams">
    <template v-for="(item, index) in formList" :key="index">
      <el-form-item
        v-bind="item"
        v-if="item.type === 'input' || item.type === 'password'"
        :label="item.label"
        :style="itemStyle"
      >
        <el-input
          v-bind="item"
          :type="item.type"
          :show-password="item.type === 'password'"
          v-model="formData[item.field]"
        />
      </el-form-item>
      <el-form-item
        :style="itemStyle"
        v-bind="item"
        :label="item.label"
        v-else-if="item.type === 'datePicker'"
      >
        <el-date-picker
          v-model="formData[item.field]"
          v-bind="item.otherOptions"
          placeholder="time"
        ></el-date-picker>
      </el-form-item>
      <el-form-item
        :style="itemStyle"
        v-bind="item"
        :label="item.label"
        v-else-if="item.type === 'select'"
      >
        <el-select v-bind="item" v-model="formData[item.field]" placeholder="placeholder">
          <el-option
            v-for="(option, index) in item.options"
            :key="index"
            :label="option.label"
            :value="option.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        :style="itemStyle"
        v-bind="item"
        v-else-if="item.type === 'radio'"
        :label="item.label"
      >
        <el-radio
          v-bind="item"
          v-for="(option, index) in item.options"
          :key="index"
          v-model="formData[item.field]"
          :label="option.label"
          >{{ option.text }}</el-radio
        >
      </el-form-item>
      <el-form-item
        :style="itemStyle"
        v-bind="item"
        :label="item.label"
        v-else-if="item.type === 'checkbox'"
      >
        <el-checkbox-group v-bind="item" v-model="formData[item.field]">
          <el-checkbox v-for="(option, index) in item.options" :label="option.label" :key="index">{{
            option.text
          }}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item v-else-if="item.type === 'slot'">
        <slot :name="item.slotName"></slot>
      </el-form-item>
    </template>
  </el-form>
  <div class="footer">
    <slot name="footer"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  formParams: {
    type: Object,
    default: () => ({})
  },
  modelValue: {
    type: Object,
    default: () => ({})
  },
  formList: {
    type: Array,
    default: () => []
  },
  itemStyle: {
    type: Object,
    default: () => ({})
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 4,
      lg: 6,
      md: 8,
      sm: 12,
      xs: 24
    })
  }
})

const emits = defineEmits(['update:modelValue'])

const formData = ref({ ...props.modelValue })
watch(
  formData,
  (newValue) => {
    emits('update:modelValue', newValue)
  },
  { deep: true }
)
</script>

<style scoped></style>
