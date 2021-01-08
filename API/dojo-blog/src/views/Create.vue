<template>
  <div class="create">
      <form @submit.prevent="handleSubmit">
          <label>Title:</label>
          <input v-model="title" type="text" required>
          <label>Content:</label>
          <textarea v-model="body" required></textarea>
          <label>Tags (hit enter to add a tag)</label>
          <input v-model="tag" type="text" @keydown.enter.prevent="handleKeydown">

          <div v-for="tag in tags" :key="tag" class="pill">
              #{{ tag }}
          </div>
          <button>Add Post</button>
      </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { projectFirestore, timestamp } from '../firebase/config'

export default {
    setup() {
        const title = ref('')
        const body = ref('')
        const tag = ref('')
        const tags = ref([])

        const router = useRouter()

        const handleKeydown = () => {
            if (!tags.value.includes(tag.value)) {
                tag.value = tag.value.replace(/\s/, '') //removes all white space
                tags.value.push(tag.value)
            }
            tag.value = ''
        }

        const handleSubmit = async () => {
            const post = {
                title: title.value,
                body: body.value,
                tags: tags.value,
                createdAt: timestamp()
            }

            // method 1
            // await fetch('http://localhost:3000/posts', {
            //     method: 'POST',
            //     headers: { 'Content-Type' : 'application/json' },
            //     body: JSON.stringify(post)
            // })

            // method 2
            const res = await projectFirestore.collection('posts').add(post)

            router.push({ name: 'Home' })
        }

        return { title, body, tag, handleKeydown, tags, handleSubmit }
    }
}
</script>

<style>
    form {
        margin: 0 auto;
        max-width: 480px;
        text-align: left;
    }

    input, textarea {
        display: block;
        margin: 10px 0;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #eee,
    }

    textarea {
        height: 160px;
    }

    label {
        display: inline-block;
        position: relative;
        margin-top: 30px;
        margin-bottom: 10px;
        font-size: 20px;
        color: white
    }

    label::before {
        content: '';
        position: absolute;
        left: -30px;
        z-index: -1;
        display: block;
        padding-right: 40px;
        width: 100%;
        height: 100%;
        background-color: #2f8fbb;
        transform: rotateZ(-1.5deg)
    }

    button {
        display: block;
        margin-top: 30px;
        padding: 8px 16px;
        background-color: #2f8fbb;
        border: none;
        color: #fff;
        font-size: 18px;
    }

    .pill {
        display: inline-block;
        margin: 10px 10px 0 0;
        padding: 8px;
        background-color: #ddd;
        color: #444;
        border-radius: 20px;
        font-size: 14px;
    }

</style>