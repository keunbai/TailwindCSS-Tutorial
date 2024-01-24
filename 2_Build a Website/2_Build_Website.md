# <span style="color:cyan">2. Build a Website</span>

Ref) &nbsp;https://tailwindcomponents.com/cheatsheet/ &nbsp; &nbsp; &larr; &nbsp;Tailwind CSS Cheat Sheet

<br />

### <span style="color:cyan"><b>어쩌고 저쩌고</b></span>
 
<br />

### <u>Step. 1 &nbsp;**SetUp**</u>

<br />

(from )

&nbsp;1. &nbsp;<span style="color:orange"><b>`tailwind.config.js` 생성</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`npx tailwindcss init`  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`tailwind.config.js` 內 컨텐츠 대상 파일 설정

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

<br />

&nbsp;2. &nbsp;<span style="color:orange"><b>작업 폴더/파일 구성</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`build/index.html`  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`src/input.css` &nbsp; &nbsp; &larr; &nbsp;tailwind css 연관 파일  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`img`  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`favicon.ico`  


```css
/* src/input.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

<br />

&nbsp;3. &nbsp;<span style="color:orange"><b>`package.json` 설치 및 수정</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`npm` or `yarn` 으로 (여기선 `npm` 이용)  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &rarr; &nbsp;`npm init -y`  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;scripts 삭제/추가  
&nbsp; &nbsp; &nbsp; &nbsp;※ &nbsp;<span style="color:red">`prettier` 스크립트를 HTML 파일 대상으로만 적용하는 사유 이해 필요</span>

&nbsp; &nbsp; &nbsp; &nbsp;※ &nbsp;VS Code 內 한줄이 길어 화면 내 안보일 경우 `alt-z`  


```json
// package.json

{
  "name": "02tut_build-a-website",
  "version": "1.0.0",
  "description": "",
  "main": "tailwind.config.js",
  "scripts": {
    "tailwind": "npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch",
    "prettier": "npx prettier --write **/*.html"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "prettier-plugin-tailwindcss": "^0.5.9"
  }
}
```
<br />

`npm run tailwind`  
&nbsp; &nbsp; - &nbsp;`input.css` 변경 시 자동 변환  
&nbsp; &nbsp; - &nbsp;HTML 파일 內 tailwind CSS 클래스 추가 시 `--watch` 옵션으로 `style.css` 자동 갱신됨 &nbsp; &rarr; &nbsp;<span style="color:cyan">**항상 켜놓을 것**</span>  
&nbsp; &nbsp; ※ &nbsp;리액트에선 tailwind CSS 클래스 이용 파일 저장 시 웹펙이 내부에서 자동으로 처리해줌 &nbsp; &rarr; &nbsp;<span style="color:cyan">**스크립트 실행 불필요**</span>

`npm run prettier`  
&nbsp; &nbsp; - &nbsp;모든 html 파일 자동 정렬  

<br />

&nbsp;4. &nbsp;<span style="color:orange"><b>개발자 모드로 `prettier-plugin-tailwindcss` 패키지 설치</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`npm i -D prettier-plugin-tailwindcss`  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &rarr; &nbsp;plugin for Tailwind CSS v3.0+ that automatically sorts classes based on recommended class order.

<br />

### <u>Step. 2 &nbsp;**App 구현**</u>

<br />

&nbsp;5. &nbsp;`style.css`, `index.html` 생성</br></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`npm run tailwind` &nbsp; &rarr; &nbsp;`style.css`  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`index.html` 생성 및 `style.css` 포함  

```html
<!-- build/index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="css/style.css">  
</head>
<body>
  
</body>
</html>
```

<br />

&nbsp;6. &nbsp;<span style="color:orange"><b>기본 App</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`index.html` 수정  

&nbsp; &nbsp; &nbsp; &nbsp;①  &nbsp;<span style="color:orange">`<header>` 및 내부 tag Tailwind CSS 클래스 설정</span>  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: &nbsp;`:emojisense` extension 또는 `emojipedia.org` 에서 이모지 확보 및 적용  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- 여기선 웹사이트 內 'rocket' 검색 후 복/붙  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: &nbsp;`<a>`(anchor tag) 설정 시 tailwind CSS 에 의해 밑줄 자동 제거  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: &nbsp;hamberger 버튼 설정  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- https://symbl.cc/en/ 에서 'hamberger' 로 검색  



```html
<!-- build/index.html -->

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Acme Rockets</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body class="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
    <header class="bg-teal-700 text-white sticky top-0 z-10">
      <section class="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 class="font-medium text-3xl">
          <a href="#hero">🚀 Acme Rockets</a>
        </h1>
        <div>
          <nav class="hidden text-xl sm:block space-x-9" aria-label="main">
            <a href="#rockets" class="hover:opacity-80">Our Rockets</a>
            <a href="#testimonials" class="hover:opacity-80">Testimonials</a>
            <a href="#contact" class="hover:opacity-80">Contact Us</a>
          </nav>
          <button
            id="mobile-open-button"
            class="text-3xl sm:hidden focus:outline-none"
          >
            &#9776;
          </button>
        </div>
      </section>
    </header>
  </body>
</html>
```

<br />

&nbsp; &nbsp; &nbsp; &nbsp;②  &nbsp;<span style="color:orange">`<main>` 및 내부 tag Tailwind CSS 클래스 설정</span>  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: &nbsp;

```html
<!-- build/index.html -->

<!doctype html>
<html lang="en" class="sm:scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Acme Rockets</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body class="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
    <header class="bg-teal-700 text-white sticky top-0 z-10">
      <!-- ... -->
    </header>
    <main class="max-w-4xl mx-auto">
      <section id="hero" class="mb-12 scroll-mt-20 p-6 gap-8 flex flex-col-reverse sm:flex-row justify-center items-center">
        <article class="sm:w-1/2">
          <h2 class="max-w-md text-4xl sm:text-5xl font-bold text-center sm:text-left text-slate-900 dark:text-white">
            We Boldly Go <span class="text-indigo-700 dark:text-indigo-300">Where No Rocket</span> Has Gone Before...
          </h2>
          <p class="max-w-md mt-4 text-2xl text-center sm:text-left text-slate-700 dark:text-slate-400">
            We're building rockets for the next century today. From the moon to Mars, Jupiter and beyond...
          </p>
          <p class="max-w-md mt-4 text-2xl text-center sm:text-left text-slate-700 dark:text-slate-400">
            Think Acme Rockets.
          </p>
        </article>
        <img class="w-1/2" src="./img/rocketdab.png" alt="Rocket Dab">
      </section>

      <hr class="w-1/2 mx-auto bg-black dark:bg-white">

      <section id="rockets" class="my-12 scroll-mt-20 p-6">
        <h2 class="mb-6 font-bold text-4xl sm:text-5xl text-center text-slate-900 dark:text-white">
          Our Rockets
        </h2>
        <ul class="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
          <li class="w-2/3 sm:w-5/6 border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black rounded-3xl shadow-xl px-2 py-6 flex flex-col items-center">
            <img class="w-1/2 mb-6" src="./img/rocketman.png" alt="Explorer">
            <h3 class="text-3xl text-center text-slate-900 dark:text-white">Explorer</h3>
            <p class="hidden sm:block mt-2 text-3xl text-center text-slate-500 dark:text-slate-400">$</p>
            <p class="sm:hidden mt-2 text-2xl text-center text-slate-500 dark:text-slate-400">Affordable Exploration</p>
          </li>
          <li class="w-2/3 sm:w-5/6 border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black rounded-3xl shadow-xl px-2 py-6 flex flex-col items-center">
            <img class="w-1/2 mb-6" src="./img/rocketride.png" alt="Adventurer">
            <h3 class="text-3xl text-center text-slate-900 dark:text-white">Adventurer</h3>
            <p class="hidden sm:block mt-2 text-3xl text-center text-slate-500 dark:text-slate-400">$$</p>
            <p class="sm:hidden mt-2 text-2xl text-center text-slate-500 dark:text-slate-400">Best Selling Rocket!</p>
          </li>
          <li class="w-2/3 sm:w-5/6 border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black rounded-3xl shadow-xl px-2 py-6 flex flex-col items-center">
            <img class="w-1/2 mb-6" src="./img/rocketlaunch.png" alt="Infinity">
            <h3 class="text-3xl text-center text-slate-900 dark:text-white">Infinity</h3>
            <p class="hidden sm:block mt-2 text-3xl text-center text-slate-500 dark:text-slate-400">$$$</p>
            <p class="sm:hidden mt-2 text-2xl text-center text-slate-500 dark:text-slate-400">Luxury Starship</p>
          </li>
        </ul>
      </section>

      <hr class="w-1/2 mx-auto bg-black dark:bg-white">

      <section id="testimonials" class="my-12 p-6">
        <h2 class="mb-6 font-bold text-4xl text-center text-slate-900 dark:text-white sm:text-5xl">
          Testimonials
        </h2>
      </section>

      <hr class="w-1/2 mx-auto bg-black dark:bg-white">      

      <section id="contact" class="my-12 p-6">
        <h2 class="mb-6 font-bold text-4xl text-center text-slate-900 dark:text-white sm:text-5xl">
          Contact us
        </h2>
      </section>
    </main>

    <hr class="w-1/2 mx-auto bg-black dark:bg-white">
  </body>
</html>
```


