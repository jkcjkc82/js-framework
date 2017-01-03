<template>
    <div class="master column">
        <h3>Master</h3>
        <ul>
            <li v-for="f in folders">{{ f.name }}</li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'master',
    computed: mapGetters({
        folders: 'getFolders',
        access_token: 'getAccessToken'
    }),
    created () {
        if(this.access_token) {
            this.$store.dispatch('fetchFolders');
        }
    }
}
</script>

<style scoped>
li {
    font-size: 14pt;
    color: white;
    background-color: #000;
}
</style>
