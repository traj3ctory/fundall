<template>
  <div class="base_input">
    <label class="label" :for="data.id">{{ data.name }}</label>
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

<style lang="scss" scoped>
div.base_input {
  label.label {
    color: #30443C;
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 0.35rem;
  }
  input.form-control {
    background: #ffffff;
    border: 1px solid #cad0c9;
    border-radius: 4px;
    font-size: 0.9rem;
    &:active,
    &:focus {
      border: 1px solid #4de897;
      box-shadow: none;
    }
    &::placeholder {
      color: #6c7973;
    }
  }
  &:focus,
  &:focus-within label.label {
    color: #4de897;
  }
  span.input-group-text {
    border: 0;
    color: grey;
    border-radius: 0.1rem;
    background-color: #26588724;
    cursor: pointer;
    &:active,
    &:focus {
      border-bottom: 0;
      box-shadow: none;
    }
  }
  i.input_icon {
    align-items: center;
    display: flex;
    min-height: inherit;
    padding-left: 1.5%;
    cursor: pointer;
    font-size: 1.5rem;
  }
  input.w_input {
    min-width: 96%;
  }
  .m_w_input {
    display: flex;
    min-width: 100%;
  }
}
</style>