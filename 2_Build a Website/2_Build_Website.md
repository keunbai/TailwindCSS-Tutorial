# <span style="color:cyan">2. Build a Website</span>

Ref) &nbsp;https://tailwindcomponents.com/cheatsheet/ &nbsp; &nbsp; &larr; &nbsp;Tailwind CSS Cheat Sheet

<br />

<span style="color:cyan"><b></b></span>

 
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

<br />

&nbsp;3. &nbsp;<span style="color:orange"><b>npm `package.json` 설치 및 수정</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`npm init -y`  
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

`npm run tailwind`  
`npm run prettier`

<br />

&nbsp;4. &nbsp;<span style="color:orange"><b>개발자 모드로 `prettier-plugin-tailwindcss` 패키지 설치</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`npm i -D prettier-plugin-tailwindcss`  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &rarr; &nbsp;`node_modules` 폴더 생성 및 패키지 설치 확인  

<br />

&nbsp;5. &nbsp;`style.css`, `index.html` 생성</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`npm run tailwind` &nbsp; &nbsp; &rarr; &nbsp;`style.css`  
&nbsp; &nbsp; &nbsp; &nbsp;- &nbsp;`index.html` 생성 및 `style.css` 포함  



<br />

※ `Tailwind CSS IntelliSense` 적용으로 클래스 이름 위 마우스 위치 시 CSS 내용 확인 가능

(15:30)