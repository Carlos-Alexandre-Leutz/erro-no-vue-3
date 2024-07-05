<template>
  <div>
    <!-- <img :src="computedUrl" :style="imageStyle" alt="preview"> -->
    <!-- remove this to work -->
    <previewComp :src="src" :imageStyle="imageStyle" ></previewComp>
    <!-- remove this to work -->
    <div>
      <label>
        <input type="checkbox" v-model="effects.blur" /> Desfoque
      </label>
      <label>
        <input type="checkbox" v-model="effects.shadow" /> Sombra
      </label>
      <label>
        <input type="checkbox" v-model="effects.grayscale" /> Escala de cinza
      </label>
      <label>
        <input type="checkbox" v-model="effects.sepia" /> Sépia
      </label>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
//remove this to work
import previewComp from "./components/Preview.vue"
//remove this to work

const DEFAULT_IMAGE = 'data:image/png;base64,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';

export default {
  name: 'UrlDisplayComponent',
  props: {
    url: {
      type: String,
      default: ''
    }
  },
  //remove this to work
  components: {
    "previewComp": previewComp,
  },
  //remove this to work
  setup(props) {
    const effects = ref({
      blur: false,
      shadow: false,
      grayscale: false,
      sepia: false
    });

    const computedUrl = computed(() => {
      return props.url || DEFAULT_IMAGE;
    });

    const imageStyle = computed(() => {
      let style = '';
      if (effects.value.blur) {
        style += 'blur(5px) ';
      }
      if (effects.value.shadow) {
        style += 'drop-shadow(2px 4px 6px black) ';
      }
      if (effects.value.grayscale) {
        style += 'grayscale(100%) ';
      }
      if (effects.value.sepia) {
        style += 'sepia(100%) ';
      }
      return {
        filter: style.trim()
      };
    });

    return {
      effects,
      computedUrl,
      imageStyle
    };
  }
};
</script>

<style scoped>
label {
  display: block;
  margin: 5px 0;
}
</style>
