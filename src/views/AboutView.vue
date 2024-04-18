<template>
  <!-- Title -->
  <h1 class="mx-auto my-4 font-bold text-lg">ABOUT</h1>
  <!-- Table of Content -->
  <div class="mb-4">
    <div class="ml-4 mb-1 text-sm font-bold underline">Table of content:</div>
    <li class="ml-8 text-xs">Introduction</li>
    <li class="ml-8 text-xs">Tools</li>
    <li class="ml-8 text-xs">"placeholder"</li>
    <li class="ml-8 text-xs">"placeholder"</li>
  </div>
  <!-- Intro Container -->
  <div class="flex flex-col w-full bg-base-200">
    <!-- Intro Title -->
    <div class="ml-4 md:mx-auto font-bold underline"><p>Introduction</p></div>
    <!-- Intro content -->
    <div class="ml-4 md:mx-auto text-sm md:text-center font-bolder">
      <p class="my-2">
        Hi, my name is Mike and welcome to my very first Vue project!
      </p>
      <p>
        This is a project developed during my apprenticeship for becoming a web
        developer at Prios Kompetanse AS.
      </p>
      <p class="my-2 mb-4">
        I decided to try simulating a webstore. I thought this would give me a
        lot of variety and different types of challenges, based on the list of
        tasks assigned to me by my mentor. This decision turned out to be more
        challenging than i would have anticipated, but ended up being both
        rewarding and fun!
      </p>
      <h2 class="font-bold text-sm">My journey into web development:</h2>
      <p class="my-2">
        My experience with web development prior to this project was a
        introduction class back in 2018, where we learned the basics of HTML,
        CSS and Javascript.
      </p>
      <p class="mt-2">
        When the class got to javascript I ended up losing motivation, which led
        me to stop pursuing web development completely.
      </p>
      <p class="mb-2">
        However, a lot changed for me personally from 2020-2023, and I found new
        motivation in going back to something I had previously lost interest in.
      </p>
      <p class="my-2">
        When i started my apprenticeship at Prios I began re-learning HTML & CSS
        pretty much from scratch, from the start of october through november,
        and Javascript throughout december (2023).
      </p>
      <p class="my-2">
        My intoduction to framework development began in january 2024, where I
        started learning Vue3 composition API. Upon finshing the online
        introduction course, I was given a set of tasks to complete and started
        this project at the beginning of february, with a goal of completing
        said tasks by the end of april.
      </p>
      <p class="my-4">
        But that's enough about that, let me introduce you to my project
        starting with dev tools!
      </p>
    </div>
    <!-- Dev Tools Container -->
    <div class="flex flex-col w-full bg-base-300">
      <!-- Title -->
      <h1 class="ml-4 my-2 md:mx-auto font-bold underline">
        Development Tools:
      </h1>
      <p class="ml-4 mb-4">Develpoment tools used during this project:</p>
      <!-- List of links -->
      <li class="ml-8">
        <a class="btn-link underline" href="https://vuejs.org/" target="_blank"
          >Vue3 Composition API &RightTeeArrow;
        </a>
        <p class="text-sm mb-2">
          - a progressive JavaScript framework used for building user interfaces
        </p>
      </li>
      <li class="ml-8">
        <a
          class="btn-link underline"
          href="https://pinia.vuejs.org/"
          target="_blank"
          >Pinia Store
        </a>
        <p class="text-sm mb-2">
          - a state management pattern and library specifically designed for Vue
          3 applications
        </p>
      </li>
      <li class="ml-8">
        <a
          class="btn-link underline"
          href="https://axios-http.com/"
          target="_blank"
          >Axios
        </a>
        <p class="text-sm mb-2">
          - a popular HTTP client library used for making asynchronous HTTP
          requests in JavaScript applications
        </p>
      </li>
      <li class="ml-8">
        <a
          class="btn-link underline"
          href="https://fakestoreapi.com/"
          target="_blank"
          >Fake Store API
        </a>
        <p class="text-sm mb-2">
          - a RESTful API that provides mock data for e-commerce applications
        </p>
      </li>
      <li class="ml-8">
        <a
          class="btn-link underline"
          href="https://tailwindcss.com/"
          target="_blank"
          >Tailwindcss
        </a>
        <p class="text-sm mb-2">
          - a utility-first CSS framework that provides a set of pre-designed
          utility classes to style web applications
        </p>
      </li>
      <li class="ml-8">
        <a
          class="btn-link underline"
          href="https://daisyui.com/"
          target="_blank"
          >DaisyUI
        </a>
        <p class="text-sm mb-2">
          - a UI component library built on top of Tailwind CSS
        </p>
      </li>
    </div>
  </div>

  <div class="hidden">
    <h3>LIST OF USER LOGINS</h3>
    <pre> <span class="font-bold">User: 1</span>  <br> Email "john@gmail.com" <br> Password: "m38rmF$" </pre>
    <pre> <span class="font-bold">User: 2</span> <br> Email "morrison@gmail.com" <br> Password: "83r5^_" </pre>
    <pre> <span class="font-bold">User: 3</span><br> Email "kevin@gmail.com" <br> Password: "kev02937@" </pre>
    <pre> <span class="font-bold">User: 4</span><br> Email "don@gmail.com" <br> Password: "ewedon" </pre>
    <pre> <span class="font-bold">User: 5</span><br> Email "derek@gmail.com" <br> Password: "jklg*_56" </pre>
    <pre> <span class="font-bold">User: 6</span><br> Email "david_r@gmail.com" <br> Password: "3478*#54" </pre>
    <pre> <span class="font-bold">User: 7</span><br> Email "miriam@gmail.com" <br> Password: "f238&@*$" </pre>
    <pre> <span class="font-bold">User: 8</span><br> Email "william@gmail.com" <br> Password: "William56$hj" </pre>
    <pre> <span class="font-bold">User: 9</span><br> Email "kate@gmail.com" <br> Password: "kfejk@*_" </pre>
    <pre> <span class="font-bold">User: 10</span><br> Email "jimmie@gmail.com" <br> Password: "klein*#%*" </pre>
  </div>
</template>
