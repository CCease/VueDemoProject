<template>
    <div>
        <h1>LifeCountPage</h1>
        <!-- Date picker here -->
        <p>Date Picker</p>
        <!-- Block here -->
        <ProgressBlock />
        <!-- Dynamic Data (Past) -->
        <TimeInfo />
        <!-- Dynamic Data (Future) -->

        <!-- Information -->
        <ExplainInfo />
    </div>    
</template>

<script>
import ProgressBlock from '../components/lifecount/ProgressBlock.vue'
import TimeInfo from '../components/lifecount/TimeInfo.vue'
import ExplainInfo from '../components/lifecount/ExplainInfo.vue'

export default {
    name:'LifeCountPage',
    components:{
        // eslint-disable-next-line vue/no-unused-components
        ProgressBlock,
        // eslint-disable-next-line vue/no-unused-components
        TimeInfo,
        // eslint-disable-next-line vue/no-unused-components
        ExplainInfo
    }
}
</script>