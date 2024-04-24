<template>
  <!-- Title -->
  <h1 class="mx-auto my-4 font-bold text-lg">ABOUT</h1>
  <!-- Table of content Background -->
  <div class="lg:w-1/2 lg:mx-auto">
    <!-- Table of Content -->
    <div class="mb-4">
      <div class="ml-5 mb-1 text-sm font-bold">Table of content</div>
      <li
        class="ml-8 mr-96 text-xs btn-link text-blue-500"
        role="button"
        @click="handleClick('intro')"
      >
        Introduction
      </li>
      <li
        class="ml-8 mr-96 text-xs btn-link text-blue-500"
        role="button"
        @click="handleClick('tools')"
      >
        Tools
      </li>
      <li
        class="ml-8 mr-96 text-xs btn-link text-blue-500"
        role="button"
        @click="handleClick('overview')"
      >
        Overview
      </li>
      <li
        class="ml-8 mr-96 text-xs btn-link text-blue-500"
        role="button"
        @click="handleClick('login')"
      >
        Login Details
      </li>
      <li
        class="ml-8 mr-96 text-xs btn-link text-blue-500"
        role="button"
        @click="handleClick('thoughts')"
      >
        Final Thoughts
      </li>
      <li
        class="ml-8 mr-96 text-xs btn-link text-blue-500"
        role="button"
        @click="handleClick('source')"
      >
        Sources
      </li>
    </div>
  </div>
  <!-- Intro Container Background -->
  <div class="flex flex-col w-full bg-base-200 lg:mx-auto">
    <!-- Intro Container Content -->
    <div class="lg:w-1/2 lg:mx-auto">
      <!-- Intro Title -->
      <div class="ml-4 mt-2 md:mx-auto font-bold underline text-center">
        <p id="intro">Introduction</p>
      </div>
      <!-- Intro content -->
      <div class="ml-4 md:flex-col text-sm font-bolder">
        <p class="my-2">
          Hello, my name is Mike and welcome to my very first Vue project!
        </p>
        <p>
          This is a project developed during my apprenticeship for web
          development at Prios Kompetanse AS.
        </p>
        <p class="my-2 mb-4">
          For my project I decided to try simulating a webstore. I thought this
          would give me a lot of variety and different types of challenges,
          based on the list of tasks assigned to me by my mentors. This decision
          turned out to be more challenging than i would have anticipated, but
          ended up being both rewarding and fun!
        </p>
        <h2 class="font-bold text-sm">My journey into web development</h2>
        <p class="my-2">
          My experience with web development prior to this project was a
          introduction class back in 2018, where we learned the basics of HTML,
          CSS and Javascript.
        </p>
        <p class="mt-2">
          When the class got to javascript I ended up losing motivation, which
          led me to stop pursuing web development completely. However, a lot
          changed for me personally from 2020-2023, and I found new motivation
          in going back to something I had previously lost interest in.
        </p>
        <p class="my-2">
          When i started my apprenticeship at Prios I began re-learning HTML &
          CSS pretty much from scratch, from the start of october through
          november, and Javascript throughout december (2023).
        </p>
        <p class="my-2">
          My intoduction to framework development began in january 2024, where I
          started learning Vue3 composition API. Upon finshing the online
          introduction course, I was given a set of tasks to complete and
          started this project at the beginning of february, with a goal of
          completing said tasks by the end of april.
        </p>
        <p class="my-4">
          But that's enough about that, let me introduce you to my project
          starting with dev tools!
        </p>
      </div>
    </div>
    <!-- Dev Tools Container Background-->
    <div class="flex flex-col w-full bg-base-300">
      <!-- Dev Tools Content -->
      <div class="lg:w-1/2 lg:mx-auto">
        <!-- Title -->
        <h1 class="ml-4 my-2 md:text-center font-bold underline" id="tools">
          Development Tools
        </h1>
        <p class="ml-4 mb-4 text-sm">
          Develpoment tools used during this project:
        </p>
        <!-- List of links -->
        <li class="ml-8">
          <a
            class="btn-link underline text-blue-500"
            href="https://vuejs.org/"
            target="_blank"
            >Vue3 Composition API &UpperRightArrow;
          </a>
          <p class="text-sm mb-2">
            - a progressive JavaScript framework used for building user
            interfaces.
          </p>
        </li>
        <li class="ml-8">
          <a
            class="btn-link underline text-blue-500"
            href="https://pinia.vuejs.org/"
            target="_blank"
            >Pinia Store &UpperRightArrow;
          </a>
          <p class="text-sm mb-2">
            - a state management pattern and library specifically designed for
            Vue 3 applications.
          </p>
        </li>
        <li class="ml-8">
          <a
            class="btn-link underline text-blue-500"
            href="https://axios-http.com/"
            target="_blank"
            >Axios &UpperRightArrow;
          </a>
          <p class="text-sm mb-2">
            - a popular HTTP client library used for making asynchronous HTTP
            requests in JavaScript applications.
          </p>
        </li>
        <li class="ml-8">
          <a
            class="btn-link underline text-blue-500"
            href="https://fakestoreapi.com/"
            target="_blank"
            >Fake Store API &UpperRightArrow;
          </a>
          <p class="text-sm mb-2">
            - a RESTful API that provides mock data for e-commerce applications.
          </p>
        </li>
        <li class="ml-8">
          <a
            class="btn-link underline text-blue-500"
            href="https://tailwindcss.com/"
            target="_blank"
            >TailwindCSS &UpperRightArrow;
          </a>
          <p class="text-sm mb-2">
            - a utility-first CSS framework that provides a set of pre-designed
            utility classes to style web applications.
          </p>
        </li>
        <li class="ml-8">
          <a
            class="btn-link underline text-blue-500"
            href="https://daisyui.com/"
            target="_blank"
            >DaisyUI &UpperRightArrow;
          </a>
          <p class="text-sm mb-4">
            - a UI component library built on top of TailwindCSS.
          </p>
        </li>
      </div>
    </div>
    <!-- Overview Container Background -->
    <div class="flex flex-col w-full bg-base-200">
      <!-- Overview Container Content -->
      <div class="lg:w-1/2 lg:mx-auto">
        <h1 class="ml-4 my-2 font-bold underline text-center" id="overview">
          Overview
        </h1>
        <h2 class="ml-4 text-sm font-bold">Data & Stores</h2>
        <p class="ml-4 mb-2 text-sm">
          The data displayed on this website is imported from "Fake Store API".
          It is fetched using "Axios" and stored using "Pinia".
        </p>
        <h2 class="ml-4 text-sm font-bold">Landing page</h2>
        <p class="ml-4 text-sm mb-2">
          Upon entering the website you will find a simple product carousel. The
          task was to create a "Latest Products" carousel that only displays the
          last three products added to the array. This was made by importing the
          product array from the Pinia store and looping through it in reverse.
          The cards are displayed dynamically by using a v-for and v-if
          statement. The "Next/Back" buttons were created using switch cases.
        </p>
        <h2 class="ml-4 text-sm font-bold">Login and Signup</h2>
        <p class="ml-4 text-sm mb-2">
          The login page only works using the users fetched from the Fake Store
          API. I will display the login information for all the users below for
          testing/showcase purposes. There is a signup page, however this does
          not currently work since there is no database connected to this
          project.
        </p>
        <h2 class="ml-4 text-sm font-bold">Products Page</h2>
        <p class="ml-4 text-sm mb-2">
          On the products page the cards displayed are using the same method
          from the landing page, using v-for and v-if. However this page has a
          loading wheel, this is done to ensure that all the imported data has
          time to be placed on to the page before user interaction (also serves
          as a good visual feedback for the user). Clicking on one of the
          product cards will display a larger card which provides additional
          information such as price, user rating, and the option to purchase.
        </p>
        <h2 class="ml-4 text-sm font-bold">Shopping cart</h2>
        <p class="ml-4 text-sm mb-2">
          When clicking "Buy" on a product the user will be sent to the shopping
          cart. The products are displayed in a table and CRUD (Create, Read,
          Update and Delete) was used while developing this. This gives the user
          options to add more of the same product or remove it completely. Both
          the "Price" and "Total" costs are auto updated based on amount of
          items in the cart. When pressing the "Purchase" button the user has to
          confirm that they wish to purchase the product. After confirming they
          will be given a choice between going back to the product page or be
          directed to the user page.
        </p>
        <h2 class="ml-4 text-sm font-bold">User Page</h2>
        <p class="ml-4 text-sm mb-2">
          At the top of the user page there is a card displaying the username,
          phone number, full name and email for the account currently logged
          into. This is something that I would have done differently if the
          intention was to make a webstore for acutal use. I would not display
          information like the email and phone number directly on the page,
          rather in the users settings. The reason it was done this way was
          simply to display information gathered from Fake Store API.
          <br />Below the users profile card is where you'll find the purchase
          history. This only displays the history of the logged in user in a
          table, showing a picture and the name of product(s), quantity, order
          date and a randomly generated order id.
        </p>
        <h2 class="ml-4 mb-1 text-sm font-bold">Other minor features</h2>
        <li class="ml-8 mb-2 text-sm">
          Navbar will change depending if the user is logged in or not.
        </li>
        <li class="ml-8 mb-2 text-sm">
          There is breakpoints in place for different screen sizes. An example
          of this is best shown on the products page where the row of cards is 4
          on large, 2 on medium, and 1 on small screens.
        </li>
        <li class="ml-8 mb-2 text-sm">
          An option to clear purchase history at the bottom of user page is
          added for less screen clutter during testing and showcase, and gave me
          another opportunity for using CRUD.
        </li>
        <li class="ml-8 mb-4 text-sm">
          Signout button works and will not clear the users purchase history.
        </li>
      </div>
    </div>
  </div>

  <!-- Displayed Login information container -->
  <div class="md:w-1/2 md:mx-auto">
    <h3 class="my-4 font-bold underline text-center" id="login">
      List of Login Details
    </h3>
    <!-- User description -->
    <p class="ml-4 mb-2 text-sm">
      Below you can find a list of login information. Since you can't make your
      own user yet, and the users available are fetched from Fake Store, this
      gives you the opportunity to see the differences displayed on the user
      page. For example the purchase history and profile information.
    </p>
    <p class="ml-4 mb-2 text-sm italic">
      (NOTE: This information is also displayed on the login page itself for
      copy/paste convenience.)
    </p>
    <!-- Content container -->
    <div class="flex-col md:mx-auto md:w-3/4">
      <!-- USERS -->
      <!-- 1 & 2 -->
      <div class="ml-4 mb-2 pr-2 md:flex md:justify-between">
        <span class="mb-2 text-sm">
          <p class="font-bold">User 1</p>
          <p>Username: johnd</p>
          <p>Password: m38rmF$</p>
        </span>
        <span class="text-sm">
          <p class="font-bold">User 2</p>
          <p>Username: mor_2314</p>
          <p>Password: 83r5^_</p>
        </span>
      </div>
      <!-- 3 & 4 -->
      <div class="ml-4 mb-2 pr-7 md:flex md:justify-between">
        <span class="text-sm">
          <p class="font-bold">User 3</p>
          <p>Username: kevinryan</p>
          <p>Password: kev02937</p>
        </span>
        <span class="text-sm">
          <p class="font-bold">User 4</p>
          <p>Username: donero</p>
          <p>Password: ewedon</p>
        </span>
      </div>
      <!-- 5 & 6 -->
      <div class="ml-4 mb-2 pr-4 md:flex md:justify-between">
        <span class="text-sm">
          <p class="font-bold">User 5</p>
          <p>Username: derek</p>
          <p>Password: jklg*_56</p>
        </span>
        <span class="text-sm">
          <p class="font-bold">User 6</p>
          <p>Username: david_r</p>
          <p>Password: 3478*#54</p>
        </span>
      </div>
      <!-- 7 & 8 -->
      <div class="ml-4 mb-2 md:flex md:justify-between">
        <span class="text-sm">
          <p class="font-bold">User 7</p>
          <p>Username: snyder</p>
          <p>Password: f238&@*$</p>
        </span>
        <span class="text-sm">
          <p class="font-bold">User 8</p>
          <p>Username: hopkins</p>
          <p>Password: William56$hj</p>
        </span>
      </div>
      <!-- 9 & 10 -->
      <div class="ml-4 mb-4 pr-5 md:flex md:justify-between">
        <span class="text-sm">
          <p class="font-bold">User 9</p>
          <p>Username: kate_h</p>
          <p>Password: kfejk@*_</p>
        </span>
        <span class="text-sm">
          <p class="font-bold">User 10</p>
          <p>Username: jimmie_k</p>
          <p>Password: klein*#%*</p>
        </span>
      </div>
    </div>
  </div>
  <!-- Final Thoughts Background Container -->
  <div class="flex flex-col w-full bg-base-200">
    <div class="lg:w-1/2 lg:mx-auto">
      <!-- Title -->
      <h1 class="my-2 font-bold underline text-center" id="thoughts">
        Final Thoughts
      </h1>
      <!-- Final thoughts content container -->
      <div class="ml-4 md:flex-col text-sm font-bolder">
        <p>
          To wrap things up I would like to say thank you for checking out my
          project!
        </p>
        <p class="my-2">
          It's far from complete, and in my eyes, there is a lot that can be
          further improved upon. Overall though, I am pretty happy with how it
          turned out, especially considering I started learning vue close to 5
          months ago.
        </p>
        <p class="my-2">
          In hindsight I could become better at planning ahead. Being more
          consistent with the order of attributes, classes and wiriting comments
          could save a lot of time and headache throughout the development
          process.
        </p>
        <p class="my-2">
          Although I've only been doing this for a short amount of time, I have
          learned a lot and I'm happy to say, I look forward continuing my
          journey into web development.
        </p>
        <p class="mb-4">- Mike</p>
      </div>
    </div>
  </div>
  <!-- Sources -->
  <div class="flex flex-col w-full">
    <h1 class="my-2 font-bold underline text-center" id="source">Sources</h1>
    <div class="mb-4 lg:w-1/2 lg:mx-auto lg: text-center">
      <p>
        <a
          href="https://vuejs.org/guide/introduction.html"
          target="_blank"
          class="btn-link underline text-blue-500"
        >
          Vue Docs &UpperRightArrow;
        </a>
      </p>
      <p>
        <a
          href="https://tailwindcss.com/docs/installation"
          target="_blank"
          class="btn-link underline text-blue-500"
        >
          TailwindCSS Docs &UpperRightArrow;</a
        >
      </p>
      <p>
        <a
          href="https://daisyui.com/components/"
          target="_blank"
          class="btn-link underline text-blue-500"
        >
          DaisyUI Docs &UpperRightArrow;</a
        >
      </p>
      <p>
        <a
          href="https://www.w3schools.com/"
          target="_blank"
          class="btn-link underline text-blue-500"
        >
          W3Schools &UpperRightArrow;</a
        >
      </p>
      <p>
        <a
          href="https://stackoverflow.com/"
          target="_blank"
          class="btn-link underline text-blue-500"
        >
          Stack Overflow &UpperRightArrow;</a
        >
      </p>
      <p>
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn"
          target="_blank"
          class="btn-link underline text-blue-500"
        >
          Mozilla Web Dev &UpperRightArrow;</a
        >
      </p>
      <p>
        <a
          href="https://heroicons.com/"
          target="_blank"
          class="btn-link underline text-blue-500"
        >
          Heroicons &UpperRightArrow;</a
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const handleClick = (sectionId) => {
  scrollToSection(sectionId);
};

const scrollToTop = () => {};
</script>
