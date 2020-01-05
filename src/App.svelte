<script>
    const getFeed = async (url) => {
        let items = await fetch(url);
        return items.json();
    }
    
    const getFeedItems = getFeed('/api/get_feed');
    
</script>

<div class="bg-teal-500">
    {#await getFeedItems then items}
        {#each items as item}
            <a href="{item.link}">{item.title}</a>
            <br>
            
        {/each}
    {/await}
</div>
