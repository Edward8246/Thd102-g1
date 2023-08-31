var activity = Vue.createApp({
  data: function data() {
    return {
      dateNow: Date.now(),
      currentTag: null,
      displayedItems: 6,
      itemsPerPage: 6,
      //noclick: false,
      arr_act: [], 
      idPort: 0,
      category_list:{
        '新品宣傳':{
          color: 'red'
        },
        '共享餐桌':{
          color: 'purple'
        },
        '私廚教學':{
          color: 'green'
        },
      }
    };
  },
  computed:{
    filteredList(){
      const self = this;
      // console.table(self.arr_act);
      return self.arr_act.filter(function (tag) {
        // console.log(tag.activity_category === self.currentTag);
        // console.log(tag.activity_category);
        // console.log(self.currentTag);
        return tag.activity_category === self.currentTag || self.currentTag === null
      });
      // console.table(a);
      // return a;
    },
    

  },
  methods: {
    /* tagColor2: function tagColor2(tag) {
      switch (tag) {
        case "新品宣傳":
          return "tb-red";
        case "共享餐桌":
          return "tb-purple";
        case "私廚教學":
          return "tb-green";
      }
    }, */
    loadMore() {
      this.displayedItems += this.itemsPerPage;
    },
    /* show: function show(curr, event, type) {
      var click_el = event.target;

      if (this.currentTag == curr && click_el.classList.contains("tb".concat(curr, "On"))) {
        this.currentTag = '';
        this.filteredList = this.arr_act;
      } else {
        this.currentTag = curr;
        switch (type) {
          case "newProd":
            this.filteredList = this.arr_act.filter(function (tag) {
              return tag.tag == '新品宣傳';
            });
            break;
          case "cook":
            this.filteredList = this.arr_act.filter(function (tag) {
              return tag.tag == '私廚教學';
            });
            break;
          case "share":
            this.filteredList = this.arr_act.filter(function (tag) {
              return tag.tag == '共享餐桌';
            });
            break;
          default:
            this.filteredList = this.arr_act;
            break;
        }
      }
      ;
    }, */
    
    disable: function disable(date, e) {
      // e.preventDefault();
      // console.log(e.target.closest('a').classList.add('disabled'));

      if (date <= this.dateNow) {
        e.preventDefault();
        // e.target.closest('a').classList.add('disabled');
      }
    },
    buttonDisable: function buttonDisable(date) {
      if (date <= this.dateNow) {
        return true;
      }
    },
    addNumber: function addNumber() {
      var buy_value = document.getElementsByClassName("buy-value")[0];
      var btn_add = document.getElementsByClassName('b-add')[0];
      if (buy_value.value < 25) {
        buy_value.value = parseInt(buy_value.value) + 1;
        // buy_value.value +=1;
      } else {
        window.alert("超過庫存數量");
      }
    },
    subNumber: function subNumber() {
      var btn_sub = document.getElementsByClassName('b-sub')[0];
      var buy_value = document.getElementsByClassName("buy-value")[0];
      if (buy_value.value >= 2) {
        buy_value.value -= 1;
      }
    }
  },
  mounted: function mounted() {

    let self = this;

    var urlParams = new URLSearchParams(window.location.search);
    self.idPort = urlParams.get('id');


    axios.get('../API/Frontend/Activities.php')
      .then(response => {
        self.arr_act = response.data;
        // console.log(this.arr_act);
        // if(response.data)
        // {
        //   self.arr_act = response.data.find(x => x.products_id == self.idPort);
        // }
    })
    .catch(error => {
      console.error(error);
    });
  
  }
});

activity.mount('#actInfo');