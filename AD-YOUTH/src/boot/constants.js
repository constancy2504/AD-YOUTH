import { boot } from 'quasar/wrappers';

export default boot(({ app }) => {
  //vue 공식문서에서 글로벌 프로퍼티를 추가하는 방법을 찾아보자
  app.config.globalProperties.hello = 'Hello Quasar!!';
});
