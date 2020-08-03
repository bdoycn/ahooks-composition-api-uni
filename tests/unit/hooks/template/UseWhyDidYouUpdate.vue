<template>
  <div>
    <input id="refInput" v-model="refValue" type="text" />
    <input id="reactiveInput" v-model="reactiveValue.text" type="text" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from '@vue/composition-api'
import useWhyDidYouUpdate from '@/hooks/useWhyDidYouUpdate'

export default defineComponent({
  name: 'UseWhyDidYouUpdate',
  setup() {
    const refValue = ref('')
    const reactiveValue = reactive({ text: '' })

    const dependencies = {
      refValue,
      reactiveValue,
    }

    useWhyDidYouUpdate('test', dependencies)

    return dependencies
  },
})
</script>
