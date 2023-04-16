<template>
  <div class="content d-flex">

    <div class="col-6">
      <SearchSelect
        :SearchSelectlist="SearchSelectlist"
        :SearchSelectinput.sync="SearchSelectinput"
        :SearchSelectdisabled="SearchSelectdisabled"
      />
      <button  style="margin-top: 1rem" @click="changedisabled()">
        changedisabled
      </button>

      <label class="col-12" style="margin-top: 1rem" for=""
        >SearchSelectinput:{{ SearchSelectinput }}
      </label>
    </div>
    <div class="col-6">
      <DatePicker :DatePickerinput.sync="DatePickerinput"/>
      <label class="col-12" style="margin-top: 1rem" for=""
        >DatePickerinput:{{ DatePickerinput }}
      </label>
      <button  style="margin-top: 1rem" @click="apigetDate()">
        apigetDate
      </button>
    </div>
  </div>
</template>

<script>
import SearchSelect from "@/components/SearchSelect.vue";
import DatePicker from "@/components/DatePicker.vue";

const SearchSelectlist = [
  { value: 1, text: "1list1" },
  { value: 2, text: "12list2" },
  { value: 3, text: "123list3" },
  { value: 4, text: "1234list4" },
];

export default {
  components: {
    SearchSelect,
    DatePicker,
  },
  data() {
    return {
      SearchSelectlist: [],
      SearchSelectinput: "",
      SearchSelectdisabled: false,
      DatePickerinput:"",
    };
  },
  methods: {
    //api get list
    getSearchSelect() {
      this.SearchSelectlist = SearchSelectlist;
    },
    changedisabled() {
      this.SearchSelectdisabled = !this.SearchSelectdisabled;
    },
    apigetDate(){
      this.DatePickerinput = "2023-4-17"
    }
  },
  created() {
    this.getSearchSelect();
  },
};
</script>

<style scope>
.content {
  margin: 0 auto;
  width: 80%;
}
</style>
