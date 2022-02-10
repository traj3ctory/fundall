<template>
  <div class="mb-3 base_input">
    <label :for="data.id">{{ data.name }}</label>
    <div class="input input-group">
      <input
        :type="data.type"
        :placeholder="data.placeholder || data.name"
        class="form-control"
        :id="data.id || data.nam"
        :name="data.id || data.nam"
        value=""
        :autocomplete="data.autoComplete"
        @input="$emit(`update:${inputType.id}`)"
        :aria-describedby="data.name"
      />
      <span
        class="input-group-text"
        :id="data.id || data.name"
        @click="showPassword = !showPassword"
      >
        <i
          :class="[showPassword ? 'bi-eye-fill' : 'bi-eye-slash']"
          class="icon"
        ></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  emits: ["^update:"],
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({
        type: "text",
        name: "name",
        id: "name",
        placeholder: "Full-Name",
        autoComplete: "Full-Name",
      }),
    },
  },
  components: {},
  data() {
    return {
      showPassword: false,
    };
  },
  methods: {
    toggleType(e) {
      if (e.target.type === "password") {
        e.target.type = "text";
        this.showPassword = true;
      } else if (e.target.type === "text") {
        e.target.type = "password";
        this.showPassword = false;
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
div.base_input {
  color: red;
}
</style>