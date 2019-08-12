import router, {Route} from 'vue-router';
declare module '@kids/mobile-ui';
declare module 'vue/types/vue' {
  interface Vue {
    $router: router;
    $route: Route;
    $moment: any;
    $axios: any;
    $api: any;
    $message: any;
    $cookie: any;
    $form: any;
    $confirm: any;
    $log: any;
    $logUpload: any;
    $isAndroid: any;
    [ele: string]: any;
  }
}
