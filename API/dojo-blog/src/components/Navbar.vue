<template>
    <header>
        <h1>The Dojo Blog</h1>
        <nav>
            <router-link :to="{ name: 'Home' }">Home</router-link>
            <router-link :to="{ name: 'Create' }">Create Post</router-link>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        padding: 10px;
        max-width: 1200px;
    }

    header h1 {
        color: #dfdfdf;
        font-size: 48px;
    }

    header a {
        margin-left: 20px;
        color: #bbb;
        text-decoration: none;
    }

    header a.router-link-active {
        color: #444;
        font-weight: bold;
    }
</style>