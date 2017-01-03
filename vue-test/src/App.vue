<template>
    <div>
        <h1>Vue Test App</h1>
        <div class="row">
            <master />
            <detail />
        </div>
    </div>
</template>

<script>
import qs from 'qs'
import Master from './components/Master'
import Detail from './components/Detail'

export default {
    name: 'app',
    components: {
        Master, Detail
    },
    beforeCreate: function () {
        const {access_token} = qs.parse(
            window.location.hash.replace(/^#/, ''))
        if (access_token) {
            this.$store.dispatch('saveAccessToken', access_token)
        }
    }
}
</script>
