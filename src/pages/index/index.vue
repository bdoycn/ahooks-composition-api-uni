<template>
  <view class="content">
    <image class="logo" src="@/assets/images/logo.png" @click="console.log(1)" />
    <button
      @click="addSet(Date.now())"
    >
      add set
    </button>
    <input v-model="title.text" type="text" />
    <input v-model="title2Obj.title" type="text" />
    <view>
      <text class="title">{{ title.text }}</text>
      <text class="title">{{ title2Obj.title }}</text>
      <view
        v-for="item of set"
        :key="item"
        class="title"
      >
        {{ item }}
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { ref, reactive } from '@vue/composition-api'
import useSet from '@/hooks/useSet'
import useTemplateData from '@/hooks/useTemplateData'
import useWhyDidYouUpdate from '@/hooks/useWhyDidYouUpdate'

export default {
  setup() {
    const [templateData, { addTemplateData }] = useTemplateData()

    const title = ref({ text: 'HelloWorld' })
    addTemplateData('title', title)

    const [set, { add: addSet }] = useSet([1, 2, 3])
    addTemplateData({
      set,
      addSet,
    })

    const title2Obj = reactive({
      title: '1',
    })
    addTemplateData('title2Obj', title2Obj)

    useWhyDidYouUpdate('index', templateData)
    return templateData
  },
}
</script>

<style lang="scss">
@mixin reset-list {
  filter: drop-shadow(2px 4px 6px red);
}

.content {
  @include reset-list();

  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: red;
}

.logo {
  width: 200rpx;
  height: 200rpx;
  margin: 200rpx auto 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  color: #8f8f94;
  font-size: 36rpx;
}
</style>
