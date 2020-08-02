<template>
  <view class="content">
    <image class="logo" src="@/assets/images/logo.png" @click="console.log(1)" />
    <view>
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return { title: 'Hello' }
  },
  onLoad() {
    //
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
