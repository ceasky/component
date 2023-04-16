<template>
  <div class="content d-flex flex-column">
    <div style="margin-bottom: 2rem;">
      <div>RangePageBar</div>
      <RangePageBar
        :totalquantity="totalquantity"
        :perpage="perpage"
        :renderpage="renderpage"
        :pageindex.sync="pageindex"
      />
      <div>index:{{ pageindex }} perpage:{{ perpage }}</div>
    </div>
    <div>
      <UnrangePageBar />
    </div>
  </div>
</template>

<script>
import RangePageBar from "@/components/RangePageBar.vue";
import UnrangePageBar from "@/components/UnrangePageBar.vue";

export default {
  components: {
    RangePageBar,
    UnrangePageBar,
  },
  data() {
    return {
      totalquantity: null,
      perpage: 10,
      renderpage: 5,
      pageindex:0
    };
  },
  methods: {
    //api get list
    gettotalquantity() {
      this.totalquantity = 112;
    },
  },
  created() {
    this.gettotalquantity();
  },
};
</script>
<style scope>
.content {
  margin: 0 auto;
  width: 80%;
}
</style>
