<script>
    import 'bootstrap/dist/css/bootstrap.min.css';
    import { goto } from '$app/navigation';
    import {login} from '$lib/services/loginService';

    let username = '';
    let password = '';
    let errorMessage = '';
    async function handleSubmit() {
        if (!username || !password) {
            errorMessage = 'Both fields are required.';
        } 
        else {
            console.log('Username:', username);
            console.log('Password:', password);
            const formData = { 'username': username, 'password': password };
            const data = await login('hello', formData);
            console.log('Data:', data);
            sessionStorage.setItem('loggedIn', data.toString());
            goto('/', { replaceState: true, noScroll: true });
            username = '';
            password = '';
            errorMessage = '';
        }
    }
</script>
<div class="container mt-5">
    <h2>Login</h2>
    {#if errorMessage}
        <div class="alert alert-danger">{errorMessage}</div>
    {/if}
    <form on:submit|preventDefault={handleSubmit}>
        <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" id="username" class="form-control" bind:value={username} placeholder="Enter username" required/>
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" id="password" class="form-control" bind:value={password} placeholder="Enter password" required/>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>
</div>
