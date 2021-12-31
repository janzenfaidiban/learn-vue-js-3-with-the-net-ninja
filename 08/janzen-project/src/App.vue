<template>
  <router-view/>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background: rgb(212, 238, 255);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-right: 30px;
  text-decoration: none;
}

#nav a:hover {
  text-decoration: underline;
}

#nav a.router-link-exact-active {
  color: #2326ff;
}

.main-content {
  padding: 30px;
}
</style>
