<template>

    <div>
        <form action="">
        
            <label>Email</label>
            <input type="email" required v-model="email">

            <label>Password</label>
            <input type="password" required v-model="password">

            <label>Role:</label>
            <select v-model="role">
                <option value="developer">Web Developer</option>
                <option value="designer">Web Designer</option>
            </select>

            <label>Skills</label>
            <input type="text" v-model="tempSkill" @keyup.alt="addSkill">
            <div v-for="skill in skills" :key="skill">
                {{ skill }}
            </div>

            <div class="terms">
                <input type="checkbox" v-model="terms" required>
                <label>Accept terms and conditions</label>
            </div>

        </form>

        <p>Email : {{ email }}</p>
        <p>Password : {{ password }}</p>
        <p>Role : {{ role }}</p>
        <p>Terms accepted : {{ terms }}</p>

    </div>

</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            terms: false, // for single checkbox
            tempSkill: '',
            skills: []
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
        }
    }

}
</script>

<style>
    form {
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    label {
        color: #aaa;
        display: inline-block;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input, select {
        display: block;
        padding: 10px 6px;
        margin-bottom: 10px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }
    input[type="checkbox"] {
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;
    }
</style>