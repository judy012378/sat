new Vue({
  el:'#app',
  data:()=>({
    begin:false,
    random:'',
    totalDeg: 0
  }),
  methods: {
    go(){
      this.begin=true;
      const currentDegree = _.random(20,30)*360 + _.random(0,360);
      this.totalDeg = this.totalDeg + currentDegree;
      this.random=`rotate(${this.totalDeg}deg)`
    }
  },
})