<template>
    <div>
        <common-header></common-header>
        <common-sidebar></common-sidebar>
        Home
    </div>
</template>

<script>
import commonHeader from './Header'
import commonSidebar from './Sidebar'
export default {
    name:"Home",
    components:{
        commonHeader,commonSidebar
    }
}
</script>

<style>

</style>
