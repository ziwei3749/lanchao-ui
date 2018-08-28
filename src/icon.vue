<!-- Icon -->
<template>
  <svg class="l-icon"
       aria-hidden="true">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import "./svg.js";
export default {
  name: "l-icon",

  props: {
    name: {
      type: String,
      required: true
    }
  },

  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>
<style lang="scss" scoped>
.l-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
}
</style>
