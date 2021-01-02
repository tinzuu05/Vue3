<template>
    <h1>Jobs</h1>
    <div v-if="jobs.length">
        <div v-for="job in jobs" :key="job.id" class="job">
            <router-link :to="{ name : 'JobDetails', params: { id: job.id }}">
                <h2>{{ job.title }}</h2>
            </router-link>
        </div>
    </div>

    <div v-else>
        <p>Loading jobs...</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => this.jobs = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style>
    .job h2 {
        margin: 10px auto;
        padding: 20px;
        max-width: 600px;
        background-color: #f4f4f4;
        color: #444;
        border-radius: 10PX;
        cursor: pointer
    }

    .job h2:hover {
        background-color: #ddd;
    }

    .job a {
        text-decoration: none;
    }

</style>