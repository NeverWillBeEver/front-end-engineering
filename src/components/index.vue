<template>
  <section class="professional-confirm">
    <p class="professional-confirm__wrapper" :style="$attrs.customStyle">
      <!--$attrs 注入可能改变，但不常改变的属性-->
      <slot name="slot-for-professional">{{professional}}</slot>
      <!--slot引入业务UI-->
    </p>
  </section>
</template>

<script lang='ts'>
  import {Component, Prop, Vue} from 'vue-property-decorator';

  @Component({ components: { } })
  export default class Confirm extends Vue {

    @Prop()
    private professional: string;

  }
</script>
