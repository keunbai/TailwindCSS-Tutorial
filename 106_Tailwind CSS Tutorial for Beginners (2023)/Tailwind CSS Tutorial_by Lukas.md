# <span style="color:cyan">Tailwind CSS Tutorial by Lukas</span>

Ref) &nbsp;https://tailwindcss.com/docs/installation/framework-guides &nbsp; &nbsp; &larr; &nbsp;Tailwind CSS Installation w/ Framework Guide  
&nbsp; &nbsp; &nbsp; &nbsp; https://tailwindcomponents.com/cheatsheet/ &nbsp; &nbsp; &larr; &nbsp;Tailwind CSS Cheat Sheet

<br />

### <span style="color:cyan"><b><u>React project</u> w/ Tailwind CSS</b></span>

<br />

### Step 1 &nbsp;<u>**SetUp**</u>

<br />

&nbsp;<span style="color:orange"><b>사전 준비 #1</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;React 프로젝트 기본 폴더 구성 (<span style="color:cyan">**Vite+yarn 추천**</span>)

&nbsp;<span style="color:orange"><b>사전 준비 #2</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;Extension 설치  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ① &nbsp;`live server` extension 설치 및 `full reload` setting 항목 활성화  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ② &nbsp;`Tailwind CSS IntelliSense` 설치  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ③ &nbsp;`Inline fold` 설치

&nbsp; &nbsp; &nbsp; &nbsp;※ &nbsp;`Tailwind CSS IntelliSense` 적용으로 클래스 이름 위 마우스 위치 시 CSS 내용 확인 가능

<br />

&nbsp;1. &nbsp;<span style="color:orange"><b>Install Tailwind CSS
</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;[npm] &nbsp;`npm install -D tailwindcss postcss autoprefixer`  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;[yarn] &nbsp;`npx yarn add tailwindcss postcss autoprefixer -D`  



<br />

&nbsp;2. &nbsp;<span style="color:orange"><b>`tailwind.config.js` 생성</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`npx tailwindcss init -p`  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`tailwind.config.js` 內 컨텐츠 대상 파일 설정

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
<br />

&nbsp;3. &nbsp;<span style="color:orange"><b>`src/index.css` 파일 수정</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;tailwind css 연관 파일  

```css
/* src/index.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

<br />

&nbsp;4. &nbsp;<span style="color:orange"><b>[CRA] `src/index.js` or [Vite] `src/main.jsx` 수정</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;CRA는 웹팩 설정되어 있기에 `index.css` 사용하지 않고, 별도의 CSS 파일(`src/tailwind.css` 등) 작성 후  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `index.js`/`main.jsx` 에서 import 로 이용 가능  
&nbsp; &nbsp; &nbsp; &nbsp;Ref) &nbsp;https://velog.io/@jun_53/Tailwind-CSS-%EC%86%8C%EA%B0%9C-%EB%B0%8F-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0-with-React  


```js
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';      //! Tailwind CSS here!!
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

<br />

&nbsp;5. &nbsp;<span style="color:orange"><b>개발자 모드로 `prettier`, `prettier-plugin-tailwindcss` 패키지 설치</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;[npm] &nbsp;`npm i -D prettier prettier-plugin-tailwindcss`  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;[yarn] &nbsp;`npx yarn add prettier prettier-plugin-tailwindcss -D`  

<br />

&nbsp;※ &nbsp;Vite 이용 시 `postcss.config.js` &nbsp; &rarr; &nbsp;`postcss.config.cjs` 변경

<br />

### Step 2 &nbsp;<u>**App 구현**</u>

<br />

&nbsp;6. &nbsp;<span style="color:orange"><b>기본 App</b></span>  

```js
// src/App.js

function App() {
  return (
    <div>
      <main>
        <section className="h-screen bg-yellow-600 m-12 text-center text-3xl flex justify-center items-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>  
        </section>
      </main>
    </div>
  );
}

export default App;
``` 
<br />

&nbsp;7. &nbsp;<span style="color:orange"><b>Responsive Design App</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;사례) 기본 padding 값 설정 이후 breakpoints 에 따른 차별화된 padding 값 할당  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;※ &nbsp;DevTool 시각화 창에서 padding 변경 확인  
&nbsp; &nbsp; &nbsp; &nbsp; Ref) &nbsp;https://tailwindcss.com/docs/responsive-design  

```js
// src/App.js

function App() {
  return (
    <div>
      <main>
        <section className="h-screen bg-yellow-600 m-12 p-12 text-center text-3xl flex justify-center items-center md:p-14 lg:p-16 xl:p-20">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>  
        </section>
      </main>
    </div>
  );
}

export default App;
```

<br />

### Step 3 &nbsp;<u>**Customization**</u> 
Ref) https://jforj.tistory.com/335

<br />

&nbsp;8. &nbsp;<span style="color:orange"><b>Customization #1</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;<u>**프로젝트의 theme 커스터마이즈**</u>  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp;color palettes, type scale, fonts etc.  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`tailwind.config.js` 內 `theme-extend` 속성값 편집  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp;기존 theme 속성 유지 + 추가  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;사례) color palette 內 색상 추가

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'twitter-blue': '#1DA1F2'
      },        
    },
  },
  plugins: [],
}
```

```js
// src/App.js

function App() {
  return (
    <div>
      <main>
        <section className="h-screen bg-twitter-blue m-12 p-12 text-center text-3xl flex justify-center items-center md:p-14 lg:p-16 xl:p-20">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </p>  
        </section>
      </main>
    </div>
  );
}

export default App;
```

<br />

&nbsp;9. &nbsp;<span style="color:orange"><b>Customization #2</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;<u>**Custom CSS 를 프로젝트에 반영**</u>  
&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;Tailwind CSS 설정 style sheet 파일(여기선 `index.css`) 內 추가  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ① &nbsp;직접 추가  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ② &nbsp;세개의 layer(`base`, `components`, `utilities`) 에 적용  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp;`base` layer 커스텀 - HTML 제공 요소들에 기본 적용되는 style 설정  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp;`components` layer 커스텀 - 리액트 기본/사용자 컴포넌트에 적용하는 클래스 형태의 style 설정  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; : &nbsp;`utilities` layer 커스텀 - 커스텀 유틸리티 추가시 사용 &nbsp; &nbsp; Q) &nbsp;<span style="color:red">`components` layer 커스텀과 차이?</span>  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;※ &nbsp;layer 순서 중요 (`utilities` layer overirdes `components` layer)  
&nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;`@apply` : &nbsp;Tailwind CSS 유틸리티 형식으로 style 설정  
<br />
&nbsp; &nbsp; &nbsp; &nbsp; <u>Case 1</u> &nbsp; 직접 추가  



```css
/* src/index.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
```
<br />

&nbsp; &nbsp; &nbsp; &nbsp;<u>Case 2</u> &nbsp; layer 에 적용  


```css
/* src/index.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

@layer base {  
  h1 {
    @apply text-4xl text-center font-bold tracking-tight text-gray-900 mb-4 md:text-4xl lg:text-5xl
  }
  span {
    /* font-family: ui-monospace, SFMono-Regular;
    font-weight: 700; */
    @apply font-mono font-bold     /*! Tailwind CSS 형식 */
  }
}

@layer components {     
  .card {
    /* background-color: orange; */
    background-color: theme('colors.twitter-blue');   /*! Customize Theme 이용 */
    width: 300px;
    height: 100px;
    border: 0.7px solid purple;
    border-radius: 8px;
    box-shadow: 0 4px 10px -1px rgba(0, 0, 0, 0.1), 0 2px 6px -2px rgba(0, 0, 0, 0.2);
    /* display: flex;
    justify-content: center;
    align-items: center; */
    @apply flex justify-center items-center    /*! Tailwind CSS 형식 */
  }
}
```
```js
// src/App.js

function App() {
  return (
    <div>
      <main>
        <span>Core!!</span> Common
        <div className="card">This is Greeting Card</div>
      </main>
    </div>
  );
}

export default App;
```

<br />

&nbsp; <span style="color:red"><b>Q) Tailwind CSS 적용 시 `<h1>`, `<h2>`, ... 표현 안됨??</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &rarr; &nbsp;base layer 에서 별도로 설정해야 됨


