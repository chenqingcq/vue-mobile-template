<template>  
    <div class="wrapper">  
        <scroll :click="false" :probe-type="3" ref="scroll" :listenScroll='true' @scroll='scroll'>
            <ul class="content" >
                <li class="scroll" v-for="(item,index) in data" :key="index">{{item}}</li>
                <li class="moreconments" @touchstart="add" ><span class="more"> 更多评论></span></li>
                <li class="null"></li>
            </ul>    
        </scroll>
    </div>  
</template>  
<script>
import scroll from "../base/scroll.vue";
export default {
  components: {
    scroll
  },
  data() {
    return {
      data: [],
      loadMore: -200
    };
  },
  computed: {},
  methods: {
    initData() {
      //发起请求获取data
      this.data = new Array(15).fill(2);
    },
    add() {
      //发起请求获取data
      this.data = this.data.concat([1, 2, 3, 4]);
    },
    scroll(pos) {
      console.log(pos);
      if (pos.y < this.loadMore) {
        console.log("load");
        // this.data = this.data.concat([1, 2, 3, 4]);
        // this.$refs.scroll.refresh();
      }
    }
  },
  created() {
    this.initData();
    this.$nextTick(() => {
      this.$refs.scroll.refresh();
    });
  },
  mounted() {
    window.addEventListener("scroll", () => {
      this.$refs.scroll.refresh();
    });
  }
};
</script> 
<style lang='less' scoped>
.wrapper {
  width: 100%;
  height: 100%;
  .content {
    margin-bottom: 50px;
    .scroll {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #eee;
    }
    .null {
      height: 50px;
    }
    .moreconments {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #eee;
      .more {
        width: 80px;
        height: 30px;
        display: inline-block;
        background: #00be06;
        border-radius: 5px;
        text-align: center;
        line-height: 30px;
        color: white;
      }
    }
  }
}
</style>
