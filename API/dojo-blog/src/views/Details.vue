<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '../composables/getPost'
import Spinner from '../components/Spinner.vue'

export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {
    const { post, error, load} = getPost(props.id)

    load()

    return { post, error }
  }
}
</script>

<style>
  .post {
    margin: 0 auto;
    max-width: 1200px;
  }

  .post p {
    margin-top: 40px;
    line-height: 1.5em;
    color: #444;
  }

  .pre {
    white-space: pre-wrap;
  }
</style>