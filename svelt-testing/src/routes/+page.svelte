<script>
    //import { Styles } from '@sveltestrap/sveltestrap';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    
    onMount(() => {
        if(!sessionStorage || !sessionStorage.getItem('loggedIn'))
        goto('/login', { replaceState: true, noScroll: true });
    });
    function signOut() {
        sessionStorage.removeItem('loggedIn');
        goto('/login', { replaceState: true, noScroll: true });
    }
</script>
<style>
    @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    .title {
        text-align: center;
    }
</style>
<h1 class="title">Welcome Home</h1>
<button class="btn btn-primary" on:click={signOut}>Sign Out</button>
