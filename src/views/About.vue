<template>
  <div class="about">
    <div class="nav">
      <div class="nav__wrapper">
        <router-link class="nav__button" to="/" tag="button">Powrót</router-link>
        <h1 class="nav__title">About</h1>
        <router-link class="nav__button" to="/about" tag="button">Informacje</router-link>
        <router-link class="nav__button" to="/settings" tag="button">Ustawienia</router-link>
      </div>
    </div>
    <div class="main">
      <p>A Single Page Application containing various minigames. As of now, there are two games – Memory and RepeatGame.</p>
      <p>Author: <a href="https://danb.pl">danbraj</a></p>
    </div>
  </div>
</template>
