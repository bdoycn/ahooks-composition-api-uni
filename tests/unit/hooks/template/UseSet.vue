<template>
  <view>
    <view id="addSetItem" @click="addSet(Date.now())">add set item</view>
    <view>
      <text
        v-for="item of set"
        :key="item"
        class="set-item"
      >
        {{ item }}
      </text>
    </view>
  </view>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import useTemplateData from '@/hooks/useTemplateData'
import useSet from '@/hooks/useSet'

export default defineComponent({
  name: 'UseSet',
  setup() {
    const [templateData, { addTemplateData }] = useTemplateData()

    const [set, { add: addSet }] = useSet()
    addTemplateData({
      set,
      addSet,
    })

    return templateData
  },
})
</script>
