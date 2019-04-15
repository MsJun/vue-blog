<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:"single-blog",
  data(){
    return{
      id:this.$route.params.id,
      blog:{}
    }
  },
  created(){
    axios.get('/posts/' + this.id + '.json')
    .then((data) => {
      //console.log(data)
        //this.blog = data.body
        this.blog = data.data 
    })
  }

 }
</script>

<style  scoped>
#single-blog{
  max-width: 960px;
  margin:0 auto;
  padding:20px;
  background-color: #eee;
  border:1px dotted #aaa;
}
</style>
