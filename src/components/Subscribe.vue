<template>
  <div class="bgimg">
     <img src="../assets/plant.jpg" alt="">
    <div class="overlaybox"></div>
    </div>
      <div class="nav_bar">
        <!-- first layer -->
        <img class="logo" src="../assets/wabisabi_logo.png" alt="">
       <div class="brand">
        <router-link class="brand_name" :to="{ name: 'Home' }">Wabisabi</router-link>
       </div>
        <div class="nav_list">
          <a class="list" href="#category">Category</a>
          <router-link class="list" :to="{ name: 'Subscribe' }">Subscribe</router-link>
          <!-- <a class="list" href="#subscribe">Subscribe</a> -->
          <a class="list" href="#contact">Contact</a>
          <router-link class="list" :to="{ name: 'LogIn' }">LogIn</router-link>
        </div>
        <div class="searchbox">
          <input class="search_input" type="text" placeholder="search" aria-label="Search_input">
          <button class="search_btn" aria-label="SS">
            <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16a6.471 6.471 0 004.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM10 15.5A5.5 5.5 0 1115.5 10 5.506 5.506 0 0110 15.5z"/>
            </svg>
          </button>
        </div>
      </div>
  <div class="Subscribe_container">
    <div class="Subscribe_title"><h2>Subscribe Here !</h2></div>
    <h4 class="Subscribe_word">We will send you news and limited informations if you subscribe us.</h4>
    <div class="Subscribe_form_container">
      <div class="Email_box">
       <input id="email" type="email" v-model="email" placeholder="email" required />
      </div>
      <button class="Subscribe_btn">Send</button>
    </div>
  </div>
    
</template>

<script>
export default {
  name: 'Subscribe',
  data() {
    return {
      email: ''
    }
  }
}
</script>

<style lang="scss">
$bonewhite: #f4efe6;
$warmbeige: #c4b39a;
$sand: #cec1ab;
$olivebrown:#92816c;
$earthbrown: #8a7356;
$mocha: #5a4d41;
$espresso: #5b4c3a;
$charcoal: #191a1e;
$winered: #49110b;

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translate(-50%, -40%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}


.bgimg{
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .overlaybox{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: black;
    opacity: 0.3;
  }
  img{
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center;
  }
}

.brand_name{
  position: absolute;
  top: 50%;
  transform: translate(0%,-50%);
  margin-left: 0px;
  // padding-left: 85px;
  text-decoration: none;
  font-size: x-large;
}

.Subscribe{
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}
.Subscribe_title{
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%,0%);
  color: $bonewhite;
  font-family: "Momo Signature", cursive;
  font-weight: 400;
  letter-spacing: 1.5px;
}
.Subscribe_word{
  position: absolute;
  width: 100%;
  top: 100px;
  left: 50%;
  transform: translate(-50%,0%);
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: smaller;
  text-align: center;
  margin: 0px;
  color: $bonewhite;
}
.Subscribe_container{
  position: absolute;
  width: 650px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
  background-color: $olivebrown;
  border-radius: 25px;
  background: rgba(0,0,0,0.5);
  border: 1px solid $olivebrown;
  animation: slideUp 0.7s ease-in-out ;
}
  .Email_box{
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translate(-50%,0);
    width: fit-content;
    // border: 1px solid $bonewhite;
    text-align: center;
    margin-top: 0px;
  }
  #email{
    width: 250px;
    height: 30px;
    font-family: 'Times New Roman', Times, serif;
    border-radius: 20px;
    border: 1px solid $olivebrown;
    padding-left: 15px;
    font-size: 14px;
    outline: none;
    color: $olivebrown;
  }
  input::placeholder{
    color: $warmbeige;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    letter-spacing: 1.5px;
    
  }
  .Subscribe_btn{
    position: relative;
    left: 50%;
    top: 230px;
    transform: translate(-50%,-50%);
    width: 70px;
    height: 25px;
    border-radius: 15px;
    background-color: $mocha;
    border: 1px solid $bonewhite;
    font-size: 15px;
    color: $bonewhite;
    font-family: 'Times New Roman', Times, serif;
    &:hover{
      background-color: $warmbeige;
      color: $espresso;
      cursor: pointer;
      transition: all 0.25s ease;
    }
}


</style>