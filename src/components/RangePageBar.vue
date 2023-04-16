<template>
  <div class="d-flex">
    <button @click="buttontype(0)">pre</button>
    <div v-show="showpage[0].value !== 1">
      <button>...</button>
    </div>
    <div v-for="(item, index) in this.showpage" :key="index">
      <button
        :class="{ currentpage: currentpage == item.value }"
        @click="getrenderpage(item.value)"
      >
        {{ item.value }}
      </button>
    </div>
    <div v-show="showpage[showpage.length - 1].value !== pagenumber">
      <button>...</button>
    </div>
    <button @click="buttontype(1)">next</button>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    totalquantity: {
      type: Number,
    },
    perpage: {
      type: Number,
    },
    renderpage: {
      type: Number,
    },
    pageindex: {
      type: Number,
    },
  },
  data() {
    return {
      pagenumber: null,
      showpage: [],
    };
  },
  methods: {
    buttontype(type) {
      let page = this.currentpage;
      if (type == 0) {
        if (page !== 1) {
          this.currentpage = this.currentpage - 1;
        }
      } else {
        if (page !== this.pagenumber) {
          this.currentpage = this.currentpage + 1;
        }
      }
    },
    getpagenumber() {
      this.pagenumber = Math.ceil(this.totalquantity / this.perpage);
      this.getrenderpage(this.currentpage);
    },
    getrenderpage(curpage) {
      this.currentpage = curpage;

      if (curpage == this.pagenumber) return;

      let a = [];
      if (curpage < this.renderpage) {
        for (let i = 0; i < this.renderpage; i++) {
          a.push({
            value: i + 1,
          });
        }
      } else {
        for (let i = curpage; i < curpage + this.renderpage; i++) {
          a.push({
            value: i - (this.renderpage - 2),
          });
        }
      }
      this.showpage = a;
    },
  },
  computed: {
    currentpage: {
      get: function () {
        return this.pageindex + 1;
      },
      set: function (newValue) {
        this.$emit("update:pageindex", newValue - 1);
      },
    },
  },
  watch: {
    currentpage() {
      this.getpagenumber();
    },
  },
  created() {
    this.getpagenumber();
  },
};
</script>
<style scope>
.currentpage {
  color: red;
}
</style>
