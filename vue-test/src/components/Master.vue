<template>
    <div class="master">
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
        folders: 'getFolders'
    }),
    created () {
        this.$store.dispatch('fetchFolders')
    }
}
</script>