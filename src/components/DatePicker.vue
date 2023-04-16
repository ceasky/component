<template>
  <div  @mouseleave="showlist(false)">
    <input
      v-model="choosedate"
      type="text"
      readonly="true"
      @click="showlist(true)"
    />
    <div  v-show="isshow">
      <div class="d-flex col-12">
        <button @click="buttontype(0)">today</button>
        <button @click="buttontype(1)">reset</button>
      </div>

      <div class="col-12 d-flex justify-content-between">
        <button @click="choosemonth(0)">pre</button>
        <p style="margin-right: 1rem">{{ renderday.month }}月</p>
        <button @click="choosemonth(1)">next</button>
      </div>
      <tr>
        <td>日</td>
        <td>一</td>
        <td>二</td>
        <td>三</td>
        <td>四</td>
        <td>五</td>
        <td>六</td>
      </tr>
      <tr>
        <td
          @click="getdata(item.year, item.month, item.date)"
          v-for="(item, index) in this.list1"
          :key="index"
          :class="{
            currentmonth: item.currentmonth == 1,
            today: item.currentmonth == 0,
            clickday: item.currentmonth > 9,
          }"
        >
          {{ item.date }}
        </td>
      </tr>
      <tr>
        <td
          @click="getdata(item.year, item.month, item.date)"
          v-for="(item, index) in this.list2"
          :key="index"
          :class="{
            currentmonth: item.currentmonth == 1,
            today: item.currentmonth == 0,
            clickday: item.currentmonth > 9,
          }"
        >
          {{ item.date }}
        </td>
      </tr>
      <tr>
        <td
          @click="getdata(item.year, item.month, item.date)"
          v-for="(item, index) in this.list3"
          :key="index"
          :class="{
            currentmonth: item.currentmonth == 1,
            today: item.currentmonth == 0,
            clickday: item.currentmonth > 9,
          }"
        >
          {{ item.date }}
        </td>
      </tr>
      <tr>
        <td
          @click="getdata(item.year, item.month, item.date)"
          v-for="(item, index) in this.list4"
          :key="index"
          :class="{
            currentmonth: item.currentmonth == 1,
            today: item.currentmonth == 0,
            clickday: item.currentmonth > 9,
          }"
        >
          {{ item.date }}
        </td>
      </tr>
      <tr>
        <td
          @click="getdata(item.year, item.month, item.date)"
          v-for="(item, index) in this.list5"
          :key="index"
          :class="{
            currentmonth: item.currentmonth == 1,
            today: item.currentmonth == 0,
            clickday: item.currentmonth > 9,
          }"
        >
          {{ item.date }}
        </td>
      </tr>
      <tr>
        <td
          @click="getdata(item.year, item.month, item.date)"
          v-for="(item, index) in this.list6"
          :key="index"
          :class="{
            currentmonth: item.currentmonth == 1,
            today: item.currentmonth == 0,
            clickday: item.currentmonth > 9,
          }"
        >
          {{ item.date }}
        </td>
      </tr>
      <div class="d-flex col-12">
        <p style="margin-right: 1rem">clickdate:</p>
        <p style="margin-right: 1rem">{{ clickday.year }}</p>
        <p style="margin-right: 1rem">{{ clickday.month }}</p>
        <p style="margin-right: 1rem">{{ clickday.date }}</p>
        <p style="margin-right: 1rem">{{ clickday.day }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    DatePickerinput: {
      type: String,
    },
  },
  data() {
    return {
      isshow: false,
      list: [],
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      list5: [],
      list6: [],

      today: {
        year: null,
        month: null,
        date: null,
        day: null,
      },
      clickday: {
        year: null,
        month: null,
        date: null,
        day: null,
      },
      renderday: {
        year: null,
        month: null,
        date: null,
      },
    };
  },
  methods: {
    showlist(type) {
      this.isshow = type;
    },
    buttontype(type) {
      //0 today  1 reset
      if (type == 0) {
        let date =
          this.today.year + "-" + this.today.month + "-" + this.today.date;
        this.choosedate = date;
      } else {
        this.choosedate = "";
      }
    },
    choosemonth(type) {
      //0上 1下
      if (type == 0) {
        if (this.renderday.month == 1) {
          this.renderday.year = Number(this.renderday.year - 1);
          this.renderday.month = 12;
        } else {
          this.renderday.month = Number(this.renderday.month - 1);
        }
      } else {
        if (this.renderday.month == 12) {
          this.renderday.year = Number(this.renderday.year + 1);
          this.renderday.month = 1;
        } else {
          this.renderday.month = Number(this.renderday.month + 1);
        }
      }

      this.renderdata();
    },
    getdata(year, month, day) {
      this.clickday.year = year;
      this.clickday.month = month;
      this.clickday.date = day;

      let date = year + "-" + month + "-" + day;
      this.choosedate = date;
    },
    gettoday() {
      let item = new Date();

      let getFullYear = Number(item.getFullYear());
      let getMonth = Number(item.getMonth() + 1);
      let getDate = Number(item.getDate());

      this.today.year = getFullYear;
      this.today.month = getMonth;
      this.today.date = getDate;

      if (this.choosedate !== "") {
        let dateyear = this.choosedate.split("-")[0];
        let datemonth = this.choosedate.split("-")[1];
        let datedate = this.choosedate.split("-")[2];

        this.renderday.year = Number(dateyear);
        this.renderday.month = Number(datemonth);
        this.renderday.date = Number(datedate);
        this.clickday.year = Number(dateyear);
        this.clickday.month = Number(datemonth);
        this.clickday.date = Number(datedate);
      } else {
        this.renderday.year = getFullYear;
        this.renderday.month = getMonth;
        this.renderday.date = getDate;
        this.clickday.year = null;
        this.clickday.month = null;
        this.clickday.date = null;
        this.clickday.day = null;
      }

      this.renderdata();
    },
    //顯示
    renderdata() {
      let dateyear = this.renderday.year;
      let datemonth = this.renderday.month;

      let fisrtdate = new Date(Number(dateyear), Number(datemonth) - 1, 1);
      this.list = [];

      let checkday = null;
      let checkmonth = Number(datemonth);
      let checkyear = Number(dateyear);
      checkday = this.getmonthday(checkyear, checkmonth);

      for (let i = 0; i < fisrtdate.getDay(); i++) {
        let a = this.getmonthday(Number(dateyear), Number(datemonth) - 1);
        let b = a - fisrtdate.getDay();

        this.list.push({
          year: Number(dateyear),
          month: Number(datemonth) - 1,
          date: b + i + 1,
          currentmonth: 2,
        });
      }
      for (let i = 0; i < checkday; i++) {
        this.list.push({
          year: Number(dateyear),
          month: Number(datemonth),
          date: i + 1,
          currentmonth: 1,
        });
      }
      let a = 42 - this.list.length;
      if (a >= 7) {
        a = a - 7;
      }
      for (let i = 0; i < a; i++) {
        this.list.push({
          year: Number(dateyear),
          month: Number(datemonth) + 1,
          date: i + 1,
          currentmonth: 2,
        });
      }
      this.checkdaycolor();

      this.list1 = this.list.slice(0, 7);
      this.list2 = this.list.slice(7, 14);
      this.list3 = this.list.slice(14, 21);
      this.list4 = this.list.slice(21, 28);
      this.list5 = this.list.slice(28, 35);
      this.list6 = this.list.slice(35, 42);
    },
    //判斷
    getmonthday(year, month) {
      if (month == 4 || month == 6 || month == 9 || month == 11) {
        return 30;
      } else if (month == 2) {
        if (year % 4 == 0) {
          return 29;
        } else {
          return 28;
        }
      } else {
        return 31;
      }
    },
    getweekname(index) {
      if (index == 0) {
        return "週日";
      } else if (index == 1) {
        return "週一";
      } else if (index == 2) {
        return "週二";
      } else if (index == 3) {
        return "週三";
      } else if (index == 4) {
        return "週四";
      } else if (index == 5) {
        return "週五";
      } else {
        return "週六";
      }
    },
    checkdaycolor() {
      for (let i = 0; i < this.list.length; i++) {
        let item = this.list[i];
        if (
          item.year == this.today.year &&
          item.month == this.today.month &&
          item.date == this.today.date
        ) {
          item.currentmonth = 0;
        }
      }
      for (let i = 0; i < this.list.length; i++) {
        let item = this.list[i];
        if (
          item.year == Number(this.clickday.year) &&
          item.month == Number(this.clickday.month) &&
          item.date == Number(this.clickday.date)
        ) {
          item.currentmonth = item.currentmonth + 10;
          this.clickday.day = this.getweekname(i % 7);
        } else {
          if (item.currentmonth >= 10) {
            item.currentmonth = item.currentmonth - 10;
          }
        }
      }
    },
  },
  computed: {
    choosedate: {
      get: function () {
        return this.DatePickerinput;
      },
      set: function (newValue) {
        this.$emit("update:DatePickerinput", newValue);
      },
    },
  },
  watch: {
    choosedate() {
      this.gettoday();
    },
  },
  created() {
    this.gettoday();
  },
};
</script>
<style scope>
.currentmonth {
  background: rgb(155, 155, 255);
}
.today {
  background: yellow;
}
.clickday {
  background: red;
}
</style>
