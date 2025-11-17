<template>
  <div class="Home">
    <div class="main_intro">
    <div class="nav_bar">
      <!-- first layer -->
      <img class="logo" src="../assets/wabisabi_logo.png" alt="">
      <div class="brand_name">
        <h3>Brand Name</h3>
      </div>
      <div class="nav_list">
        <a class="list" href="#about">About</a>
        <a class="list" href="#category">Category</a>
        <a class="list" href="#subscribe">Subscribe</a>
        <router-link class="list" to="LogIn">登入</router-link>
        <a class="list" href="#contact">Contact Us</a>
      </div>
    </div>
    <h4 class="brand_concept">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, neque est perferendis ipsam possimus praesentium laboriosam alias facere commodi suscipit tenetur obcaecati ex odit, dolorum incidunt? Perferendis aspernatur deleniti assumenda!</h4>
    <img src="#!">
  </div>
  <div class="newest_product">
    <h3 class="first_topic">Most Popular</h3>

    <div class="box">
      <div class="img_container">
        <a href="#!" ><img class="img" src="#!"></a>
      </div>
      <div class="img_container">
        <a href="#!" ><img class="img" src="#!"></a>
      </div>
      <div class="img_container">
        <a href="#!" ><img class="img" src="#!"></a>
      </div>
      <div class="img_container">
        <a href="#!" ><img class="img" src="#!"></a>
      </div>
    </div>
  </div>

  <div class="products">
    <h3 class="breakfast">Breakfast</h3>


  </div>
</div>
</template>
 
  

<script>
export default {
  name: 'Home'
}
</script>



<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Momo+Signature&display=swap');
$bonewhite: #f4efe6;
$warmbeige: #c4b39a;
$sand: #cec1ab;
$olivebrown:#92816c;
$earthbrown: #8a7356;
$mocha: #5a4d41;
$espresso: #5b4c3a;
$charcoal: #191a1e;
$winered: #49110b;


.main_intro{
  position: relative;
  width: 100%;
  height: 50vh;
  background-color: $bonewhite;

.brand_concept{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,0%);
  line-height: 24px;
}


.nav_bar{
  position: relative;
  width: 100%;
  height: 10vh;
  /* vh:view height 視窗高度 */
  background-color: $olivebrown;
  color: $bonewhite;
  .nav_list{
    color: $bonewhite;
    // display: inline-block;
    position: absolute;
    // absolute:確定永遠在固定位置
    right: 20px;
    top: 40px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

.list{
  display: inline-block;
  margin: 10px;
}
.brand_name{
  position: absolute;
  display: inline-block;
  color: $bonewhite;
  font-weight: bold;
  font-size: x-large;
  margin-top: 2.5vh;
  margin-left: 10px;
  font-family: "Momo Signature", cursive;
  font-weight: 400;
}
}
}

.newest_product{
  position: relative;
  width: 100%;
  height: 400px;
  background-color: $warmbeige;

  .first_topic{
    font-size: 30px;
    // padding: 8px;
    margin-left: 10px;
    padding: 8px;
    border-top: 5px;
    border-bottom: 5px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-style: italic;
    color: $bonewhite;
  }
  .box{
   width: 1300px;
   height: 320px;
   border: 0px;
   border: 1px solid $charcoal;
   position: absolute;
   top: 54%;
   left: 50%;
   transform: translate(-50%,-50%);
  }
  .img_container{
    width: 240px;
    height: 320px;
    border-radius: 20%;
    // border: 1px solid $charcoal;
    margin-left: 5%;
    background-color: $winered;
    overflow: hidden;
   
    display: inline-block;
  }
  .img{
    object-fit: cover;
    // obkect-fit: cover : 防止壓縮
    width: 100%;
    height: 100%;
  }
 
}
</style>

