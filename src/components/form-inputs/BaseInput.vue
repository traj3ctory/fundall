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
  mounted() {},
};
</script>

<style lang="scss" scoped>
div.base_input {
  input.form-control {
    background: #ffffff;
    border: 1px solid #4de897;
    box-sizing: border-box;
    border-radius: 4px;
    &:active,
    &:focus {
      border-bottom: 1px solid #265785;
      box-shadow: none;
    }
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
  input {
    color: #265785;
    &::placeholder {
      color: #26578572;
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