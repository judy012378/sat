//菜品列表接口地址：/mock/food/today
//菜品详情接口地址：/mock/food/cook?id=
//点击制作方法后，请求详情接口，展示详情页
//详情页展示制作方法，评论等  可返回至列表页

new Vue({
  el:'#app',
  data:()=>({
    foodList:[],
    selectFood:'',
    loading:false
  }),
  methods: {
    receipt(id){
      this.loading = true;
      axios.get('https://xiaotian.dev/mock/food/cook?id=' + id)
      .then(res=>res.data)
      .then(res=>{
        this.selectFood = res.data;
        document.documentElement.scrollTop = 0
        this.loading = false;
      })
    },
    goBack(){
      this.selectFood = '';
    }
  },
  created() {
    axios.get('https://xiaotian.dev/mock/food/today')
    .then(res=>res.data)
    .then(res=>{
      this.foodList = res.data
    })
  },
})