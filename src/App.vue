<template>
  <div id="nav">
    <!-- The router are on top of any pages -->

    <!-- Can hide on specific page ? -->
    <!-- Check
    https://stackoverflow.com/questions/58615754/vuejs-how-to-hide-global-component-e-g-navbar-on-some-routes 
    -->

    <router-link to="/">Home</router-link> |
    <router-link to="/app">App</router-link> |
    <router-link to="/lifecount">Life Count</router-link> |
    <router-link to="/about">About</router-link>
    
  </div>

  <!-- router-view is the view part of the page -->
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
