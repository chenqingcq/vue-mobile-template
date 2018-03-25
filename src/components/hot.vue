<template>  
    <div>  
       <p @touchstart='load'>loading</p>
    </div>  
</template>  
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    load() {
      this.$loading({
          title:'正在加载...'
      });
      setTimeout(()=>{
          this.$close()
      },2000)
    }
  }
};
</script> 