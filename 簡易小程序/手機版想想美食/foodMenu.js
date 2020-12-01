Vue.component('FoodMenu', {
  props:['foods'],
  methods: {
    receipt(id){
      this.$emit('get-food',id);
    }
  },
  template:`<div class="content" v-if="!selectFood">
              <div class="main-title">美食探索</div>
              <div class="white-line"></div>
              <div class="items-box">
                <div class="item" v-for="(item,index) in foods" :key="index">
                  <div class="name">{{ item.name }}</div>
                  <div class="describe">{{ item.desc }}</div>
                  <img :src="item.image" alt="">
                    <div class="exinfo">
                      <span>
                       <i class="like"></i>{{ item.like }}人点赞
                      </span>
                     <span class="fns">
                      <i class="comments"></i>
                      <i class="share"></i>
                     </span>
                    </div>
                  <div class="show-more" @click="receipt(item.id)">查看制作步骤<i></i></div>
                  <div class="gray-line"></div>
                </div>
              </div>
             </div>`
})