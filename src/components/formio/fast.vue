<template>
    <div>
        <div ref="formio" class="formContainer">
          HELLLOOOOOOOOOOOOOOO
          <formio
            :src="src"
            :form="form"
            :submission="submission"
            :options="options"
          />
        </div>
    </div>
</template>
<script>
import { Formio } from "formio-vue/src/";
export default {
  name: "fast",
  props: {
    src: {
      type: String
    },
    form: {
      type: Object
    },
    submission: {
      type: Object
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  watch: {
    src: function(value) {
      if (this.fast) {
        this.fast.src = value;
      }
    },
    url: function(value) {
      if (this.fast) {
        this.fast.url = value;
      }
    },
    form: function(value) {
      if (this.fast) {
        this.fast.form = value;
      }
    },
    submission: function(value) {
      if (this.fast) {
        this.fast.submission = value;
      }
    }
  },
  components: {
    Formio
  }
};
</script>
<style>

</style>
