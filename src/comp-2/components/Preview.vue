<template>
  <div>
    <img :src="computedUrl" :style="imageStyle" alt="preview">
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    imageStyle: {
      type: String,
      default: ''
    },
  },
}
</script>