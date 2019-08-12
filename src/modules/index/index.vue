<template>
  <div class="professional">
    业务组件放在这里
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Watch, Provide, Inject, Vue } from 'vue-property-decorator';


  @Component({
    components: {
    // 在ts里面 这一部分必须写，否则，props 无法传入
    },
  })

  export default class Answer extends Vue {
    @Prop({
      type: Object,
      default: ''
    })
    private professional: any;

    @Watch('professional')
    private professionalChanged(oldValue: any, newValue: string) {
      console.log(oldValue, newValue);
    }

    @Inject() private someMethodInject!: any;

    // @Provide() private someMethodInject = this.anyMethodYouWant;  // 此处的 someMethodInject 应该与 @inject 提供的方法保持一致

    private anyMethodYouWant(arg: any) {
      console.log('arg: ', arg);
    }

    private get computedFunction() {
      return 'something';
    }
  }
</script>

<style scoped>

</style>
