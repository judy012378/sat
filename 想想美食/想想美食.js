//"https://xiaotian.dev/mock/food/today
//https://xiaotian.dev/mock/food/cook?id=

new Vue({
  el:'#app',
  data:()=>({
    //all foodlist
    foodList:[],
    //random selectedfood object 
    selectFood:'',
    random:false,
    randomFood:'',
  }),
  methods: {
    //a way to show for random showing anykind of receipt
    //id is selected receipts' "id" 
    cookedReceipt(id){
      axios.get("https://xiaotian.dev/mock/food/cook?id=" + id)
      .then(res=>res.data)
      .then(res=>{
      this.selectFood=res.data;
      })
    },
    chooseReceipt(){
      if(this.random==true){
        //點擊變false
        this.random=false;
      }else{
        this.selectFood=''
        //not yet selectedfood object 
        this.random=true;  
      }
    }
  },
  created() {
    axios.get('https://xiaotian.dev/mock/food/today')
    .then(res=>res.data)
    .then(res=>{
      this.foodList = res.data;
      //random status
      this.randomFood=this.foodList[0];
      //帮我选吃的
      this.random = true;
      //this.cookedReceipt(this.foodlist[0].id)
    })
  },
  //data(random) changes, start the function...
  watch: {
    random: function(newValue){
      if(newValue == true){
        //not yet click the btn,the status is the same
        this.timer = setInterval(()=>{
          //random*foodlist.length等於all 長度
          //Math.floor 向下取整  Math.round() 四舍五入的取整  Math.ceil() 向上取整
          //Math.floor( Math.random() )生成随机整数
          //Math.random(); 0<= x <1 的一个随机数(包括0,不包括1)
          var index = Math.floor(Math.random() * this.foodList.length)
          this.randomFood = this.foodList[index];
        },100)
      }else{
        //click the btn so stop the cycle and show the selected receipt
        clearInterval(this.timer);
        this.cookedReceipt(this.randomFood.id);
      }
    }
  },
})