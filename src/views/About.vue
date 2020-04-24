<template>
  <div class="about">
    <div class="nav">
      <div class="nav__wrapper">
        <router-link class="nav__button" to="/" tag="button" aria-label="Powrót">
          <svg class="feather">
            <use xlink:href="/res/feather-sprite.svg#arrow-left"/>
          </svg>
        </router-link>
        <h1 class="nav__title">About</h1>
      </div>
    </div>
    <div class="main">
      <p>A Single Page Application containing various minigames. As of now, there are two games – Memory and RepeatGame.</p>
      <p>Author: <a href="https://danb.pl">danbraj</a></p>
    </div>
  </div>
</template>
