<template>
  <div>
    <input
      v-model="searchinput"
      type="text"
      :disabled="disabled"
      @focus="showlist()"
      @blur="showlist()"
    />
    <ul v-show="isshow">
      <li
        @mousedown="choose(item.text)"
        v-for="item in this.list"
        :key="item.value"
        :class="{ disabled: item.disabled }"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    SearchSelectlist: {
      type: Array,
    },
    SearchSelectinput: {
      type: String,
    },
    SearchSelectdisabled: {
      type: Boolean,
    },
  },
  data() {
    return {
      disabled: this.SearchSelectdisabled,
      isshow: false,
      list: this.SearchSelectlist,
    };
  },
  methods: {
    choose(data) {
      this.searchinput = data;
    },
    showlist() {
      this.isshow = !this.isshow;
    },
  },
  computed: {
    searchinput: {
      get: function () {
        return this.SearchSelectinput;
      },
      set: function (newValue) {
        this.$emit("update:SearchSelectinput", newValue);
      },
    },
  },
  watch: {
    searchinput() {
      let item = this.SearchSelectlist.filter((item) =>
        item.text.includes(this.searchinput)
      );
      if (!this.searchinput) {
        this.list = this.SearchSelectlist;
      } else {
        if (item.length == 0) {
          this.list = [{ value: null, text: "查無資料", disabled: true }];
        } else {
          this.list = item;
        }
      }
    },
    SearchSelectdisabled() {
      this.disabled = this.SearchSelectdisabled;
    },
  },
};
</script>
<style scope>
input {
  width: 100%;
}
ul {
  border: 2px solid rgb(22, 20, 20);
  list-style: none;
  padding-left: 0;
}
li {
  text-align: left;
  padding-left: 0;
  cursor: pointer;
}
li:hover {
  background: blue;
  color: white;
}
.disabled {
  pointer-events: none;
}
</style>
