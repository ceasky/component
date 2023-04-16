<template>
    <div>  
        <RangeTable/>
        <UnrangeTable/>
    </div>
</template>


<script>
import RangeTable from '@/components/RangeTable.vue'
import UnrangeTable from '@/components/UnrangeTable.vue'

export default {
  components: {
    RangeTable,
    UnrangeTable
  }
}
</script>