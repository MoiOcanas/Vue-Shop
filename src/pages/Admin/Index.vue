<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <ul class="sideMenu">
            <li><router-link to="/admin">View Products</router-link></li>
            <li><router-link to="/admin/new">New Product</router-link></li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Teko');
  .sideMenu a {
    display: block;
    background: #054F76;
    border-top: 2px solid #1A87B7;
    color: #3D3D3D;
    padding: 10px 15px;
    font-family: 'Teko', sans-serif;
    color: white;
    font-size: 20px;
    text-decoration: none;
  }

  .sideMenu a:hover {
    background: #086B97;
  }

  .admin-new, .admin-products {
    border-bottom: 2px solid #F5F5F5;
    padding: 30px 0;
  }
</style>
