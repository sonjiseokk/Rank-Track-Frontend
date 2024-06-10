<template>
  <div>
    <NavBar />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

body {
  font-family: 'Roboto', sans-serif;
  background-color: #f8f9fa;
  margin: 0px;
  padding: 0px;
}

.container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
}


.right-panel {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  padding: 20px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card h3 {
  margin-top: 0;
  color: #343a40;
  font-size: 1.2em;
}

.notification-feed ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.notification-feed li {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.notification-feed li i {
  color: #007bff;
}

.notification-feed .time {
  display: block;
  color: #868e96;
  font-size: 0.9em;
}
</style>
