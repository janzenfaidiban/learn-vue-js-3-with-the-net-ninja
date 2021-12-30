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

            <div class="terms">
                <input type="checkbox" v-model="terms" required>
                <label>Accept terms and conditions</label>
            </div>

            <!-- <div>
                <input type="checkbox" value="janzen" v-model="names">
                <label>Janzen</label>
            </div>
            <div>
                <input type="checkbox" value="hugo" v-model="names">
                <label>Hugo</label>
            </div>
            <div>
                <input type="checkbox" value="wicky" v-model="names">
                <label>Wicky</label>
            </div> -->

        </form>

        <p>Email : {{ email }}</p>
        <p>Password : {{ password }}</p>
        <p>Role : {{ role }}</p>
        <p>Terms accepted : {{ terms }}</p>
        <!-- <p>Names : {{ names }}</p> -->

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
            // names: [], // for multiple checkbox
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