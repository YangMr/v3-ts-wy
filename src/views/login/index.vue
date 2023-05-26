<template>
  <div class="box">
    <img :src="imgUrl" @click="getCapture" alt="" />
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'

const imgUrl = ref<string>('')

const getCapture = async () => {
  try {
    const result = await axios({
      url: '/dev-api/sysUser/image',
      method: 'POST',
      responseType: 'blob'
    })

    console.log('result=>', result.data)

    let blob = new Blob([result.data], {
      type: 'image/png'
    })

    const url = window.URL.createObjectURL(blob)
    console.log('url=>', url)
    imgUrl.value = url
  } catch (e) {
    console.log(e)
  }
}

getCapture()
</script>

<style scoped>
.box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
