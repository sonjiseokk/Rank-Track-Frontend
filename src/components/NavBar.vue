<template>
    <nav class="navbar">
      <div class="logo">Rank Track</div>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavBar"
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #343a40;
    color: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .navbar .logo {
    font-size: 1.5em;
    font-weight: bold;
  }
  
  .navbar .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
  }
  
  .navbar .nav-links li {
    margin: 0;
  }
  
  .navbar .nav-links a {
    color: #fff;
    text-decoration: none;
    font-size: 1em;
  }
  
  .navbar .nav-links a:hover {
    text-decoration: underline;
  }
  </style>
  