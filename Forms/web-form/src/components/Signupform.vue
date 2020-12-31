<template>
  <form @submit.prevent="handleSubmit">
        <label>Email:</label>
        <input type="email" required v-model="email">

        <label>Password:</label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error">{{ passwordError }}</div>

        <label>Role:</label>
        <select v-model="role">
            <option value="developer">Web developer</option>
            <option value="designer">Web designer</option>
        </select>

        <label>Skills:</label>
        <input type="text" v-model="tempSkill" @keyup.alt="addSkill">
        <div v-for="skill in skills" :key="skill" class="pill">
            <span @click="deleteSkill(skill)">{{ skill }}</span>
        </div>

        <div class="terms">
            <input type="checkbox" required v-model="terms">
            <label>Accept terms and conditions</label>
        </div>

        <div class="submit">
            <button>Create an Account</button>
        </div>

        <!-- <div>
            <input type="checkbox" value="shaun" v-model="names">
            <label>Shaun</label>
        </div>
        <div>
            <input type="checkbox" value="yoyo" v-model="names">
            <label>Yoyo</label>
        </div>
        <div>
            <input type="checkbox" value="mario" v-model="names">
            <label>Mario</label>
        </div> -->
  </form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Term accepted: {{ terms }}</p>
  <!-- <p>Names: {{ names }}</p> -->
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: 'designer',
            terms: false,
            // names: [ ]
            tempSkill: '',
            skills: [],
            passwordError: ''
        }
    },
    methods: {
        addSkill(e) {
            if (e.key === ',' && this.tempSkill) {
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill)
                }
                this.tempSkill = ''
            }
        },
        deleteSkill(skill) {
            this.skills = this.skills.filter((item) => {
                return skill !== item
            })
        },
        handleSubmit() {
            this.passwordError = this.password.length > 5 ?
             '' : "Password must be at least 6 chars long"

            if(!this.passwordError) {
                console.log('email', this.email);
                console.log('password', this.password);
                console.log('role', this.role);
                console.log('skills', this.skills);
                console.log('terms accepted', this.terms);
            }
        }
    }
}
</script>

<style>
form {
    margin: 30px auto;
    padding: 40px;
    max-width: 420px;
    background-color: #fff;
    text-align: left;
    border-radius: 10px;
}

label {
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    letter-spacing: 1px;
    font-weight: bold;
    text-transform: uppercase;
    color: #aaa;
}

input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    position: relative;
    top: 2px;
    margin: 0 10px 0 0;
    width: 16px;
}

.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background-color: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}

button {
    margin-top: 20px;
    padding: 10px 20px;
    border: 0;
    border-radius: 20px;
    background-color: #0b6dff;
    color: #fff;
}

.submit {
    text-align: center;
}

.error {
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
    color: #c7051e;
}
</style>