# <span style="color:cyan">3. Tailwind CSS Project</span>

Ref) &nbsp;https://tailwindcomponents.com/cheatsheet/ &nbsp; &nbsp; &larr; &nbsp;Tailwind CSS Cheat Sheet

<br />

### <span style="color:cyan"><b>HTML + Tailwind CSS 웹사이트 구축 프로젝트 (Cont'd)</b></span>
 
<br />

### <u>Step. 3 &nbsp;**App 구현 계속**</u>
- <span style="color:orange">`<main>` 內 `<section>` 'testimonials' 와 'contact' (nav bar 메뉴 中 `Testimonials`, `Contact Us` 메뉴) 구현</span>  
- <span style="color:orange">`<footer>` 구현</span>  
- <span style="color:orange">`<main>` 內 `<section>` 요소 Customization</span>  

<br />

(from 02tut)

&nbsp;4. &nbsp;<span style="color:orange"><b>`<main>` 및 내부 요소 Tailwind CSS 클래스 설정 #2</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;① &nbsp;`<section>` 'testimonials' (nav bar 메뉴 中 `Testimonials` 메뉴) 구현  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;`<figure>` `</figure>` 내부 요소들 확인


```html
<!-- build/index_testimonials.html -->

<!doctype html>
<!-- <html lang="en"> -->
<html lang="en">
  <head>
    <!-- ... -->
  </head>
  <body>
    <header>
      <!-- ... -->
    </header>
    <main>
      <section id="hero">
        <!-- ... -->
      </section>

      <hr>

      <section id="rockets">
        <!-- ... -->
      </section>

      <hr>

      <section id="testimonials" class="my-12 scroll-mt-20 p-6">
        <h2 class="mb-6 font-bold text-4xl sm:text-5xl text-center text-slate-900 dark:text-white">
          Testimonials
        </h2>     
        <figure class="my-12">
          <blockquote class="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
          <!-- <div class="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative"> -->
            <p class="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
              Acme has always been there for me. 
              Their Explorer rocket arrived in a wooden crate as expected.
              Life-long customer! A++ shopping experience.
            </p>
          </blockquote>
          <figcaption class="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
            &#8212;&nbsp;Wile E. Coyote, Genius
          </figcaption>          
        </figure>
        <figure>
          <!-- ... -->
        </figure>  
        <figure>
          <!-- ... -->
        </figure>        
      </section>

      <hr>      

      <section id="contact">
        <h2>
          Contact us
        </h2>
      </section>
    </main>    
  </body>
</html>
```

<br />

&nbsp; &nbsp; &nbsp; &nbsp;② &nbsp;`<section>` 'contact' (nav bar 메뉴 中 `Contact us` 메뉴) 구현  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;  

```html
<!-- build/index_contact.html -->

<!doctype html>
<!-- <html lang="en"> -->
<html lang="en">
  <head>
    <!-- ... -->
  </head>
  <body>
    <header>
      <!-- ... -->
    </header>
    <main>
      <section id="hero">
        <!-- ... -->
      </section>

      <hr>

      <section id="rockets">
        <!-- ... -->
      </section>

      <hr>

      <section id="testimonials">
        <!-- ... -->       
      </section>

      <hr>      

      <section id="contact">
        <h2>
          Contact us
        </h2>
        <form action="" class="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4">
          <label for="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            minlength="3"
            maxlength="60"
            placeholder="Your Subject"
            required
            class="w-full p-3 border border-solid border-slate-900 dark:border-none rounded-xl text-black text-2xl sm:text-3xl"
          />
          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="10"
            cols="30"
            placeholder="Your Message"
            required
            class="w-full p-3 border border-solid border-slate-900 dark:border-none rounded-xl text-black text-2xl sm:text-3xl">
          </textarea>
          <button class="w-48 p-3 bg-teal-700 hover:bg-teal-600 active:bg-teal-500 border border-solid border-slate-900 dark:border-none rounded-xl text-white">Submit</button>  
        </form>        
      </section>
    </main>    
  </body>
</html>
```

<br />

&nbsp;5. &nbsp;<span style="color:orange"><b>`<footer>` 및 내부 요소 Tailwind CSS 클래스 설정</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;① &nbsp;내부 요소의 media query + flexbox 적용 확인  

```html
<!-- build/index_footer.html -->

<!doctype html>
<!-- <html lang="en"> -->
<html lang="en">
  <head>
    <!-- ... -->
  </head>
  <body>
    <header>
      <!-- ... -->
    </header>
    <main>
      <section id="hero">
        <!-- ... -->
      </section>

      <hr>

      <section id="rockets">
        <!-- ... -->
      </section>

      <hr>

      <section id="testimonials">
        <!-- ... -->       
      </section>

      <hr>      

      <section id="contact">
        <!-- ... -->             
      </section>
    </main>    
    <footer id="footer" class="bg-teal-700 text-white text-xl">
      <section class="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
        <address>
          <h2>Acme Rocket-Powered Products, Inc.</h2>
          555 Astro Way<br>
          Fairfield, New Jersey 12345-5555<br>
          Email: <a href="mailto:inquiries@acmerockets.com">Inquires@AcmeRockets.com</a><br>
          Phone: <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <!-- <nav class="hidden md:flex flex-col gap-2"> -->
        <nav class="hidden md:flex flex-col gap-2" aria-label="footer">
          <a href="#rockets" class="hover:opacity-80">Our Rockets</a>
          <a href="#testimonials" class="hover:opacity-80">Testimonials</a>
          <a href="#contact" class="hover:opacity-80">Contact Us</a>
        </nav>
        <div class="flex flex-col sm:gap-2">
          <p class="text-right">Copyright &copy; <span id="year">2022</span></p>
          <p class="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>    
  </body>
</html>
```


<br />

&nbsp;6. &nbsp;<span style="color:orange"><b>Customization</b></span>  
&nbsp; &nbsp; &nbsp; &nbsp;① &nbsp;'hero', 'rockets', 'testimonials', 'contact' `<section>` full viewport height 구현  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;<span style="color:orange">"전체 vh 에서 `<header>` 높이(= 상/하 padding + line height) 제외한 나머지를 한개의 `<section>` 에서 <u>최소한</u> 확보할 것"</span>  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &rarr; &nbsp;`src/input.css` 內 custom class 작성  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - &nbsp;<span style="color:orange">tall/wide 스크린 모드 custom media query 설정</span>  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &rarr; &nbsp;`tailwind.config.js` 內 `theme-extend` 속성값 편집  

```css
/* src/input.css */

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .section-min-height {
    min-height: calc(100vh - 68px)
  }
}
```

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      screens: {
        'tallscreen': { 'raw': '(min-aspect-ratio: 1/2)' },
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
      }
    },
  },
  plugins: [],
}
```

```html
<!-- build/index.html -->

<body>
  <header>
  </header>
  <main class="max-w-4xl mx-auto">
    <section id="hero" class="tallscreen:section-min-height widescreen:section-min-height">
    </section>

    <section id="rockets" class="tallscreen:section-min-height widescreen:section-min-height">
    </section>
    
    <section id="testimonials" class="tallscreen:section-min-height widescreen:section-min-height">
    </section>
    
    <section id="contact" class="tallscreen:section-min-height widescreen:section-min-height">
    </section>  
  </main>
  <footer>
  </footer>  
</body>  
```

<br />
<br /> 

<개괄 구조>

```html
<body>
  <header>
    <section class="max-w-4xl mx-auto flex justify-between items-center">
    </section>  
  </header>
  <main class="max-w-4xl mx-auto">
    <section id="hero" class="flex flex-col-reverse sm:flex-row justify-center items-center tallscreen:section-min-height widescreen:section-min-height">
    </section>

    <section id="rockets" class="tallscreen:section-min-height widescreen:section-min-height">
      <ul class="flex flex-col sm:flex-row items-center">
      </ul>  
    </section>
    
    <section id="testimonials" class="tallscreen:section-min-height widescreen:section-min-height">
    </section>
    
    <section id="contact" class="tallscreen:section-min-height widescreen:section-min-height">
      <form class="flex flex-col items-left ">      
      </form>  
    </section>  
  </main>
  <footer>
    <section class="max-w-4xl mx-auto flex flex-col sm:flex-row sm:justify-between">
    </section>  
  </footer>  
</body>  
```
 

