<template>
 <div id="posts">
   <div class="wrapper">
    
     <div class="form-inline">
       <h5><i class="fas fa-plus-circle"></i>Add new post</h5>
      <form @submit.prevent="addPost(post)">
        <input type="text" name="title" v-model="post.title" placeholder="Title" class="form-control shadow-none" autocomplete="off">
        <input type="text" name="details" v-model="post.details" placeholder="Details" class="form-control shadow-none" autocomplete="off">
        <button type="submit" class="btn btn-primary"><i class="fas fa-plus"></i>Add</button>
      </form>
     </div>

    <h5><i class="fas fa-bars"></i>Posts</h5>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Details</th>
          <th>Created at</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody class="table-hover">
        <tr v-for="(post) in posts" :key="post.id">
          <td>{{post.id}}</td>
          <td>{{post.title}}</td>
          <td>{{post.details}}</td>
          <td>{{post.created_at}}</td>
          <td>
            <button v-on:click="deletePost(post)" class="btn btn-dark operation"><i class="fas fa-trash"></i></button>
            <router-link :to=" {name: 'EditPost', params: {id: post.id}} " class="btn btn-dark operation ml-5">
              <i class="fas fa-edit"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>

   </div>
 </div>
</template>

<script>

import {mapActions} from 'vuex';
import axios from 'axios'
export default {

  name: 'Posts',

  data() {
    return {
      post: {
        title: null,
        details: null,
      },
    }
  },

  computed: {
    posts() {
         return this.$store.getters.posts;
      },
  },

  created() {
    this.$store.dispatch('loadPosts');
    },
  // updated() {
  //   this.$store.dispatch('loadPosts');
  // },

  methods: {
    addPost(post){
      if(post.title && post.details)
      {
        axios.post("http://localhost:3000/posts", post)
          .then((result)=>{
            console.warn(result)
            this.$store.dispatch('loadPosts');
          })
        this.post.title = ''
        this.post.details = ''
      }
    },
    deletePost(post){
      axios.delete("http://localhost:3000/posts/"+post.id, post)
        .then((result)=>{
          console.warn(result)
          this.$store.dispatch('loadPosts');
        })

    }
  },
}
</script>

<style>
.btn{
  padding: 5px 20px;
  margin: 20px 0px;
}
.table{
  text-align: center;
}
h5{
  font-weight: bold;
  margin: 20px 0;
}
i{
  padding-right: 10px;
}
.operation{
  padding: 5px 10px;
  margin: 0;
}
.operation i{
  padding-right: 0px;
}
.ml-5{
  margin-left: 5px;
}

.table thead>tr>th {
   vertical-align: bottom;
   border-bottom: 2px solid #4e84cc;
}
.table tbody>tr {
  margin: 20px;
}
td{
  line-height: 60px;
}
.form-group{
  text-align: left;
  margin: 0 auto;
}
.form-control{
  width: 20%;
  margin-right: 10px;
  display: inline-block;
}
.res-td{
  color: #4e84cc;
}
</style>