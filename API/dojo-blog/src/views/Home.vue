<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
    <!-- // lifecycle practice -->
    <!-- <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button> -->

  </div>
</template>

<script>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'
// lifecycle practice
// import { computed, ref, watch,watchEffect } from 'vue'

export default {
  name: 'Home',
  components: { PostList },
  setup() {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts')
        if (!data.ok) {
          throw Error('no data available')
        }
        posts.value = await data.json()
      }
      catch (err) {
        error.value = err.message
        console.log(error.value);
      }
    }

    load()

    return { posts, error }
  }

// lifecycle practice
  // setup() {
  //   const posts = ref([
  //     { title: 'Welcome to my blog', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit malesuada est, in viverra sapien malesuada sed. Pellentesque a eros aliquam eros sodales consequat. Integer elementum malesuada placerat. Donec viverra dolor non libero scelerisque, nec tincidunt ante porttitor. Proin eget auctor sem. Mauris lectus nisl, hendrerit eu ex eu, dapibus commodo nisl. Maecenas aliquam augue id odio iaculis egestas. Integer porta, urna sit amet placerat pulvinar, libero lectus molestie nulla, sit amet consectetur purus quam sed nunc.', id: 1},
  //     { title: 'top 5 JavaScript tips', body: 'Lorem ipsum', id: 2},
  //   ])
  //   const showPosts = ref(true)
    
  //   return { posts, showPosts }
  // }
}
</script>
