<template>
  <div id="show-blogs" v-theme="'wide'">
    <h1>博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search"/>
    <div class="single-blog" v-for="blog in filterdBlogs">
        <router-link :to="'/blog/' + blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
        </router-link><!--v-rainbow自定义指令   to-uppercase过滤器标识-->
        <article>{{blog.content | snipit}}</article>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'show-blogs',
  data(){
    return {
        blogs:[],
        search:""
    }
  },
  created(){
    /*this.$http.get("https://jsonplaceholder.typicode.com/posts"网络数据"https://appvue-8ffa0.firebaseio.com/posts.json")//本地数据*/
    axios.get(/*"https://jsonplaceholder.typicode.com/posts"网络数据*/"/posts.json")//本地数据
    .then(function(data){
        return data.data  
    })
    .then((data) => {
        var blogArry = [];
        for (let key in data) {
            //console.log(key)//打印唯一标识
            //console.log(data[key])
            data[key].id = key;
            blogArry.push(data[key]) 
        }
        this.blogs = blogArry
    })
  },
  computed:{
        //搜索功能
        filterdBlogs:function(){
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search)//匹配title
            })
        }
    },
    filters:{//局部自定义指令
        //方法1
        /*"to-uppercase":function(value){
            return value.toUpperCase()//标题大写
        }*/
        //方法2
        toUppercase(value){
            return value.toUpperCase()//标题大写
        },
        snipit(value){
            return value.slice(0,100) + "..."//内容截取
        }
    }
}
</script>

<style  scoped>
#show-blogs{
    max-width: 800px;
    margin:0 auto;
}
.single-blog{
    padding:20px;
    margin:20px 0;
    box-sizing: border-box;
    background-color: #eee;
    border:1px dotted #aaa;
}
#show-blogs a{
    text-decoration: none;
    color:#444;
}
input[type="text"]{
    padding:8px;
    width:100%;
    box-sizing: border-box;
}
</style>