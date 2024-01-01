# <span style="color:cyan">1. Introduction</span>

Ref) &nbsp;https://itchallenger.tistory.com/entry/Tailwind-CSS-%EA%B0%84%EB%8B%A8%ED%95%98%EA%B2%8C-%EB%B0%B0%EC%9B%8C%EB%B3%B4%EA%B8%B0

<br />

### <span style="color:cyan"><b>Utility first framework that offers many pre-defined classes</b></span>

 
<br />

(from )

&nbsp;1. &nbsp;<span style="color:orange"><b>사전 준비</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;Extension 설치  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ① &nbsp;`live server` extension 설치 후 `full reload` setting 항목 활성화  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ② &nbsp;`Tailwind CSS IntelliSense` 설치  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ③ &nbsp;`Inline fold` 설치

&nbsp; &nbsp; &nbsp; &nbsp;※ &nbsp;`Tailwind CSS IntelliSense` 적용으로 클래스 이름 위 마우스 위치 시 CSS 내용 확인 가능  

<br />

&nbsp;2. &nbsp;<span style="color:orange"><b>`tailwind.config.js` 생성</b></span>  
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

&nbsp;3. &nbsp;<span style="color:orange"><b>작업 폴더 구성</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`build/index.html`  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`src/input.css` &nbsp; &nbsp; &larr; &nbsp;tailwind css 연관 파일

```css
/* src/input.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```
<br />

&nbsp;4. &nbsp;<span style="color:orange"><b>tailwind css 기본 `input.css`파일 &nbsp; &rarr; &nbsp; 일반 `style.css` 파일로 변환</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch`  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`watch` option : &nbsp;`input.css` 변경 시 자동 변환  

<br />

&nbsp;5. &nbsp;<span style="color:orange"><b>`index.html` 업데이트</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`style.css` 파일 포함  


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
<body class="min-h-screen grid place-content-center radial-blue">
  <div class="bg-emerald-500 w-52 h-52 rounded-full shadow-2xl grid place-content-center">
    <div class="bg-teal-200 w-32 h-32 rounded-full grid place-content-center">
      <div class="bg-red-500 w-16 h-16 rounded-full"></div>
    </div>
  </div>
</body>
</html>
```

<br />

&nbsp;5. &nbsp;<span style="color:orange"><b>사용자 정의 tailwindcss 클래스 생성</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`src/input.css` 파일 內 작성  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`--watch` 옵션에 의해 자동으로 `build/css/style.css` 파일 內 포함됨  

```css 
/* src/input.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

.radial-blue {
  background: radial-gradient(lightyellow, skyblue)
}
```


