Vue.component('FoodSelect', {
  props:['selectFood'],
  methods: {
    goBack(){
      this.$emit('back')
    }
  },
  template:`<div class="content" v-if="selectFood">
             <div class="main-title">
             <i class="back" @click="goBack"></i>
             {{ selectFood.name }}
             </div>
             <div class="white-line"></div>
             <div class="detail-box">
               <div class="tags">
                 <span v-for="(item,index) in selectFood.tags" :key="index">{{ item }}</span>
               </div>
             <img :src="selectFood.cover" alt="">
             <div class="desc">{{ selectFood.desc }}</div>
             <div class="white-line"></div>
             <div class="steps">
                <div class="item" v-for="(item,index) in selectFood.steps" :key="index">
                  <h4>步骤:{{ item.step }}</h4>
                  <p>{{ item.content }}</p>
                  <img :src="item.image" alt="">
                 </div>
             </div>
             <div class="white-line"></div>
             <div class="comments">
             <div class="comment-item" v-for="(item,index) in selectFood.comments" :key="index">
               <div class="info">
                 <img :src="item.image" alt="">
                   <span>{{ item.name }}</span>
                   <span class="date">{{ item.postdate }}</span>
               </div>
               <div class="post-content">
                  {{ item.content }}
               </div>
             </div>
            </div>
            </div>
          </div>`
})