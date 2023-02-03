퀘이사(Quasar) 완벽 마스터

1. 플러그인 언인스톨 하는법
   npm uninstall plugnam
   ex) npm uninstall exceljs

2. 설치된 플러그인

- exceljs

3. 프리티어 셋팅
   .prettierrc 파일 생성
   코드작성 시 기본 정렬등 설정

   모든 파일에 적용시키기
   npm run lint
   npm run format

4. 폴더 .quasar
   삭제해도 npm run dev 시 퀘이사에 의해 자동으로 폴더 생성
5. 만약 새로운 앱을 추가하고 싶다면? 위 폴더는 계속 새로생성되기 때문에
   app.use 등으로 앱을 추가해도 소용없다.
   boot 폴더 하위에 앱을 초기화하는 파일을 작성하면 된다.
   boot 폴더 하위에 constants.js 를 생성하고
   여기서 앱을 초기화 하도록 하자.
   앱을 초기화 하였으면, boot 파일을 quasar.config.js 에 추가해줘야 한다.
   quasar.config.js 파일 내 boot : [] 안에 추가하자.

6. dist 폴더
   빌드된 파일들이 오는 곳
   npm run build 명령어로 생성

삭제해도 위 명령어로 다시 생성된다

7. public 폴더
   정적인 리소스들을 모아놓은 폴더

8. src 폴더 하위
9. asset 빌드 도구에 의해 전처리될 정적인 리소스
   :지금 현재 Vite를 사용하고 있기에 Vite에 의해 처리될 자산들

10. components 재사용할 컴포넌트
11. css 스타일
    : app.scss 전체적인 스타일
    variable.scss 퀘이사에서 제공하는 sass 변수

12. layouts 프로젝트 전체의 레이아웃
13. pages 라우터에 의해 렌더링 될 페이지 컴포넌트f
14. router 라우터 정보
15. App.vue 루트 컴포넌트

16. 컴파일 옵션 추가
    jsconfig.json 파일에 "jsx":"preserve" 구문을 추가해주자

17. MainLayout.vue 파일 내 EssentialLink 의 import 경로를 보면 무언가 이상하다.
    상대경로를 이용한 것이 아닌, 해당 컴포넌트가 있는곳을 직접 연결되어있다.
    퀘이사는 Folder aliases 를 제공하여, 경로에도 별칭을 주어 직접적으로 접근할 수 있다.
    물론 이 알리아스를 새로 추가할 수도 있다.
    https://quasar.dev/quasar-cli-vite/handling-vite 참고

18. multi-word 파일명 설정 끄는 방법
    .eslintrc.js 파일에 규칙 추가
    : rules: {
    'vue/multi-word-component-names'' : 'off',
    }
