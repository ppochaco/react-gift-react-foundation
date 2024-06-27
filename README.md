# react-gift-react-foundation

FE 카카오 선물하기 1주차 과제: React 기초

> 1단계 프로젝트 세팅

## 프로젝트 설정 및 실행
- pnpm 패키지 매니저를 사용합니다.
1. 의존성 설치
    ```
    pnpm install
    ```
2. 프로젝트 실행
    ```
    pnpm start
    ```
    
## 프로젝트 설명

> 앞으로 6주동안 진행 할 프로젝트의 기반을 구축합니다.

### 1. vite 선택 이유

- CRA의 불편 사항

  처음엔 Create React App(CRA)을 사용해 TypeScript로 개발을 진행했습니다. 하지만, [CRA가 TypeScript 버전 5를 공식적으로 지원하지 않아](https://github.com/facebook/create-react-app/pull/13071) TypeScript를 설정하는 데 어려움을 겪었습니다. TypeScript 5는 성능 향상, 새로운 기능, 더 나은 타입 시스템 등 여러 가지 이점을 제공하기 때문에, 이를 사용하지 못하는 것은 개발의 불편함이 생길 것이라 예상되었습니다. CRA에서 오버라이드나 craco를 이용해 문제를 해결할 수 있었지만, 오랜 기간 관리가 안되는 CRA 대신 다른 빌드 도구를 사용하고자 했습니다.

- 여러 빌드 도구를 비교한 후 최신 기술 지원이 가능하고, 설정이 간단한 Vite를 선택했습니다.

  | 항목                 | CRA                    | Vite                                       |
  | -------------------- | ---------------------- | ------------------------------------------ |
  | 빌드 속도            | 느림                   | 빠름                                       |
  | 개발 서버 속도       | 느림                   | 빠름                                       |
  | 레거시 브라우저 지원 | Babel 사용             | 추가 설정 필요                             |
  | 최신 웹 기술 지원    | Webpack 사용           | ESBuild 사용, 기본적으로 최신 웹 기술 지원 |
  | JavaScript 모듈      | CommonJS, ESM 지원     | ESM 기본 사용                              |
  | 개발 서버            | Webpack 개발 서버 사용 | 브라우저의 Native ESM 사용                 |

### 2. 코드 스타일

- ESLint: Airbnb 스타일 가이드 적용
- Prettier

  - import 정렬
    ```json
    "importOrder": [
      "^node:.*$", // 기본 node 모듈
      "<THIRD_PARTY_MODULES>", // third party 모듈
      "^@/(apis|assets|constants|hooks|mocks|pages|stores|utils)/(.*)$", // 절대 경로
      "^@/components/(.*)$", // 절대 경로 중 components 모듈
      "^@/types/(.*)$", // 절대 경로 중 types 모듈
      "^[./]" // 상대 경로 모듈
    ],
    ```
  - 다른 규칙

    ```json
    "importOrderSeparation": true, // import 그룹 사이에 빈 줄 추가
    "importOrderSortSpecifiers": true, // import specifier들을 알파벳 순 정렬
    "trailingComma": "es5", // ES5에서 허용되는 곳에 후행 쉼표 추가
    "tabWidth": 2, // 탭 너비를 2 스페이스로 설정
    "singleQuote": true, // 문자열을 작은 따옴표로 감싸기
    "semi": true // 문장 끝에 세미콜론 추가
    ```

### 3. 폴더 구조 설명

```jsx
  src
  ├── apis //외부 API 통신 로직
  ├── assets // 이미지, 폰트 등 정적 자원
  ├── components // UI 컴포넌트
  ├── constants // 상수 값
  ├── hooks // 커스텀 훅
  ├── mocks // 테스트용 샘플 데이터
  ├── pages // 페이지 컴포넌트
  ├── stores // 전역 상태 관리
  ├── types // 타입 정의
  └── utils // 유틸리티 함수
```

### 4. 구현한 기능 목록

#### 프로젝트 생성

- [x] vite를 사용해 프로젝트 생성

#### 프로젝트 구조 및 관리

- [x] gitignore 추가
- [x] 프로젝트에 불필요한 코드 정리
- [x] 폴더 구조 세팅

#### TypeScript 관련 설정

- [x] Typescript 세팅
- [x] alias 설정
- [x] tsconfig 설정

#### 코드 스타일

- [x] ESLint, Prettier 추가
- [x] Lint 룰 세팅
- [x] prettier로 import 순서 정렬하기

#### style 관련 설정

- [x] emotion 스타일 라이브러리 추가
- [x] reset css 적용
