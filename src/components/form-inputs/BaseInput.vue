<template>
  <div class="base_input">
    <label class="label" :for="data.id" :class="data.label ? 'd-none' : ''">{{ data.name }}</label>
    <input
      :type="data.type"
      :placeholder="data.placeholder || data.name"
      class="form-control"
      :id="data.id || data.nam"
      :name="data.id || data.nam"
      value=""
      :autocomplete="data.autoComplete"
      @input="$emit('input', $event.target.value)"
      :aria-describedby="data.name"
      required
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
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
  mounted() {},
};
</script>