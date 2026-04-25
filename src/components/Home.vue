<template>
  <div class="Home">
    <div class="first_layer">
      <div class="nav_bar">
        <!-- first layer -->
        <img class="logo" src="../assets/wabisabi_logo.png" alt="">
       <div class="brand">
        <router-link class="brand_name" :to="{ name: 'Home' }">Wabisabi</router-link>
       </div>
        <div class="nav_list">
           <a class="list" href="#category">Category</a>
          <!-- <a  class="categorylist" href="#" onclick="toggledropdown()">Category</a>
              <select name="" id="category">
                <option value="Oatmeal">Oatmeal</option>
                <option value="Breakfast">Breakfast</option>
                <option value="High Protein">High Protein</option>
                <option value="Dessert">Dessert</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
              </select> -->
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
    <div class="brand_concept">
      <h4 class="concept">Brand concept / Brand concept / Brand concept/Brand concept/ Brand concept/</h4>
      <img class="brand_bgimg" src="../assets/plant.jpg" alt="">
    </div>
    
  </div>
  <div class="product_set1" ref="productSet1">
    <h3 class="topic">Most Popular</h3>
    <div class="box">
      <router-link class="img_container" id="product1" :to="{name:'ProductDetails', params:{id:1}}">
        <div class="img_overlay">
          <div class="img_text">OATMEAL</div>
        </div>
        <a href="#!" ><img class="img" src="../assets/product8.jpg"></a>
      </router-link>
      <router-link class="img_container" id="product2" :to="{name:'ProductDetails', params:{id:2}}">
        <div class="img_overlay">
          <div class="img_text">SOURDOUGH</div>
        </div>
        <a href="#!" ><img class="img" src="../assets/product8.jpg"></a>
      </router-link>
      <router-link class="img_container" id="product3" :to="{name:'ProductDetails', params:{id:3}}">
        <div class="img_overlay"> 
          <div class="img_text">SALAD</div>
        </div>
        <a href="#!" ><img class="img" src="../assets/product8.jpg"></a>
      </router-link>
      <router-link class="img_container" id="product4" :to="{name:'ProductDetails', params:{id:4}}">
        <div class="img_overlay">
          <div class="img_text">COOKIE</div>
        </div>
        <a href="#!" ><img class="img" src="../assets/product8.jpg"></a>
      </router-link>
    </div>
  </div>
  <div class="intro_box">
    <h4 class="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, similique pariatur laboriosam laudantium soluta porro alias veritatis fugit? Dolorem aliquam nihil ullam, nisi quis eveniet tempore voluptas veniam ratione quas.</h4>
  </div>
  <div class="product_set2" ref="productSet2">
    <h3 class="topic">Latest Update</h3>
    <div class="box">
      <div class="img_container">
        <div class="img_overlay">
          <div class="img_text">CAKE</div>
        </div>
        <a href="#!" ><img class="img" src="../assets/product8.jpg"></a>
      </div>
      <div class="img_container">
        <div class="img_overlay">
          <div class="img_text">NAME</div>
        </div>
        <a href="#!" ><img class="img" src="../assets/product8.jpg"></a>
      </div><div class="img_container">
        <div class="img_overlay">
          <div class="img_text">NAME</div>
        </div>
        <a href="#!" ><img class="img" src="../assets/product8.jpg"></a>
      </div>
      <div class="img_container">
        <div class="img_overlay">
          <div class="img_text">NAME</div>
        </div>
        <a href="#!" ><img class="img" src="../assets/product8.jpg"></a>
      </div>
    </div>
  </div>
  <div class="product_set3" ref="productSet3">
    <h3 class="topic">Most Popular</h3>
    <div class="box">
      <div class="img_container">
        <div class="img_overlay">
          <div class="img_text">CAKE</div>
        </div>
        <a href="#!" ><img class="img" src="../assets/product8.jpg"></a>
      </div>
      <div class="img_container">
        <div class="img_overlay">
          <div class="img_text">NAME</div>
        </div>
        <a href="#!" ><img class="img" src="../assets/product8.jpg"></a>
      </div><div class="img_container">
        <div class="img_overlay">
          <div class="img_text">NAME</div>
        </div>
        <a href="#!" ><img class="img" src="../assets/product8.jpg"></a>
      </div>
      <div class="img_container">
        <div class="img_overlay">
          <div class="img_text">NAME</div>
        </div>
        <a href="#!" ><img class="img" src="../assets/product8.jpg"></a>
      </div>
    </div>
  </div>
  <div class="footer">
   <h3 class="footer_info">
    <span class="info1" >Tel : +886 912345678</span>
    <span class="info2" >Email : wabisabi26@gmail.com</span>
    <span class="footer_icon">
      <i class="fa-brands fa-instagram"></i>
    </span>
   </h3> 
  
  </div>

</div>
</template>
 
  

<script>
export default {
  name: 'Home',
  mounted() {
    this.setupIntersectionObserver();
  },
  methods: {
    setupIntersectionObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const containers = entry.target.querySelectorAll('.img_container');
            containers.forEach((container, index) => {
              setTimeout(() => {
                container.classList.add('animate');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.4
      });

      if (this.$refs.productSet1) observer.observe(this.$refs.productSet1);
      if (this.$refs.productSet2) observer.observe(this.$refs.productSet2);
      if (this.$refs.productSet3) observer.observe(this.$refs.productSet3);
    }
  },
  data() {
    return {
      products:[
        {id:1, name:'oatmeal'},
        {id:2, name:'sourdough'},
        {id:3, name:'salad'},
        {id:4, name:'cookie'},
      ]
    }
  }
}


</script>



<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Momo+Signature&display=swap');
$bonewhite: #f4efe6;
$warmwhite: #e7dfcf;
$warmbeige: #c4b39a;
$sand: #cec1ab;
$olivebrown:#92816c;
$earthbrown: #8a7356;
$mocha: #5a4d41;
$espresso: #5b4c3a;
$charcoal: #191a1e;
$winered: #49110b;

@keyframes slideLeft {
  from {
    opacity: 0;
    transform: translateX(-40%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media screen and (min-width:1500px){
    .col-lg-3{
        width: 25%;
    }
    .col-lg-4{
        width: 33.33333%;
    }
    .col-lg-6{
        width: 50%;
    }
    .col-lg-12{
        width: 100%;
    }
}

@media screen and (max-width: 1499px){
    .col-lg-3{
        width: 25%;
    }
    .col-lg-4{
        width: 33.33333%;
    }
    .col-lg-6{
        width: 50%;
    }
    .col-lg-12{
        width: 100%;
    }
}

@media screen and (max-width: 992px){
    .col-md-3{
        width: 25%;
    }
    .col-md-4{
        width: 33.33333%;
    }
    .col-md-6{
        width: 50%;
    }
    .col-md-12{
        width: 100%;
    }
}
@media screen and (max-width: 768px){
    .col-sm-3{
        width: 25%;
    }
    .col-sm-4{
        width: 33.33333%;
    }
    .col-sm-6{
        width: 50%;
    }
    .col-sm-12{
        width: 100%;
    }
}
.col-lg-6,.col-lg-4,.col-lg-3,.col-lg-12,
.col-md-6,.col-md-4,.col-md-3,.col-md-12,
.col-sm-6,.col-sm-4,.col-sm-3,.col-sm-12{
    /* border: 1px solid red; */
    float: left;
    padding-left: 16px;
    padding-right: 16px;
}

.logo{
  position: absolute;
  width: 74px;
  height: 74px;
}

.first_layer{
 position: relative;
  width: 100%;
  height: 50vh;
  background-color: $bonewhite;
.brand_name{
  position: absolute;
  top: 50%;
  transform: translate(0%,-50%);
  margin-left: 0px;
  // padding-left: 85px;
  text-decoration: none;
  font-size: x-large;
}
}
@media screen and (max-width: 992px){
  .navbar{
    position: fixed;
    top: 0;
    width: 100%;
    height:74px;
  }
}
.nav_bar{
  // position: relative;
  position: fixed; 
  top: 0;
  width: 100%;
  height: 74px;
  z-index: 100;
  /* vh:view height 視窗高度 */
  background-color: $olivebrown;
  color: $bonewhite;
  }

 
.searchbox{
  position: absolute;
  left: 250px;
  width: fit-content;
  top: 50%;
  transform: translate(0%,-50%);
  // border: 1px solid black;
}
  .search_input{
    width: 130px;
    height: 28px;
    border: none;
    margin: 0;
    border-radius: 15px;
    padding-left: 10px;
    font-family:'Times New Roman', Times, serif;
    color: $olivebrown;
    background-color: $warmwhite;
    outline: none;
  }

  .search_btn{
    height: 30px;
    width: 30px;
    margin-left: 10px;
    border-radius: 25px;
    // border: none;
    background-color: $warmbeige;
    border: 0.5px solid $bonewhite;
    color: $warmwhite;
    cursor: pointer;
    &:hover{
      border: 0.5px solid $espresso;
    }
    &:active{
      background-color: $sand;
    }
  }
  .search_btn svg{
    fill: $mocha;
    width: 20px;
    height: 20px;
    // object-fit: contain;
    // object-position: center;
    align-items: center;
  }
#category{
  outline: none;
  display: none;
  position: absolute;
  top: 50%;
  transform: translate(0%,-50%);
  
}

  .nav_list{
    color: $bonewhite;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    // display: inline-block;
    top: 50%;
    position: absolute;
    // absolute:確定永遠在固定位置
    transform: translate(0%,-50%);
    right: 45px;
  }

.list{
  display: inline-block;
  margin: 12px;
  text-decoration: none;
  letter-spacing: 1px;
  color: inherit;
}

.list:hover{
  color: $espresso;
  transition: all 0.2s ease;
}
@media screen and (max-width: 992px){
  .searchbox{
    display: none;
  }
}
 .brand_name{
  width: fit-content;
  position: absolute;
  left: 90px;
  color: $bonewhite;
  font-weight: bold;
  font-size: x-large;
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: "Momo Signature", cursive;
  font-weight: 400;
  // border: 1px solid black;
}
 
.brand_concept{
  position: relative;
  // margin-top: 10vh;
  width: 100%;
  height: 50vh;
  margin: 0px;

.brand_bgimg{
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position:center;
  overflow: hidden;
}
.concept{
  // border: 1px solid $bonewhite;
  margin: 0px;
  width: fit-content;
  left: 50%;
  top: 30vh;
  z-index: 10;
  position: absolute;
  transform: translate(-50%,-50%);
  line-height: 24px;
  color: $bonewhite;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight:lighter;
  font-size: larger;
  letter-spacing:0.5px;
  white-space: nowrap; /* prevent wrapping */
  // overflow: hidden;    /* hide overflow */
  // text-overflow: ellipsis; /* show ellipsis when truncated */

  
}
}
.intro_box{
  margin: 0px;
  position: relative;
  width: 100%;
  height: 30vh;
  background-color: $warmbeige;
  }
  .intro_box .intro{
   position: absolute;
   margin: 0px;
   left: 50%;
   top: 50%;
   transform: translate(-50%,-50%);
   line-height: 24px;
  }
 

.product_set1, .product_set2, .product_set3{
  position: relative;
  width: 100%;
  height: 50vh;
  background-color: $warmwhite;
  border-bottom: 1px solid $olivebrown;
  // border: solid 1px $charcoal;
  

  .topic{
    position: relative;
    // border: 1px solid black;
    width: fit-content;
    height: 30px;
    display: block;
    font-size: 30px;
    margin-left: 20px;
    margin-top: 0px;
    padding-top: 4px;
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-style: italic;
    color: $earthbrown;
  }
  .box{
  // border: 1px solid $winered;
   width: 1300px;
   height: 320px;
   border: 0px;
  //  border: 1px solid $winered
   position: absolute;
   top: 55%;
   left: 50%;
   transform: translate(-50%,-50%);
  }
  
  .img_container{
    width: 240px;
    height: 320px;
    border-radius: 15%;
    margin-left: 5%;
    background-color: $bonewhite;
    overflow: hidden;
    display: inline-block;
    position: relative;
    cursor: pointer;
    opacity: 0;
    transform: translateX(-40%);
    &.animate{
      animation: 0.7s slideLeft ease-in-out forwards;
    }
  }


  // cursor: pointer : 滑鼠移過去會變手指頭
  // .img_container:hover .img{
  //   filter: brightness(0.7);
  //   transition: all 0.3s;
  // }
  
  .img{
    object-fit: cover;
    // object-fit: cover : 防止壓縮
    width: 100%;
    height: 100%;
    transition: filter 0.3s ease;
  }
.img_overlay{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 15%;
}
.img_container:hover .img_overlay {
    opacity: 1;
  }
  .img_text {
    color: $bonewhite;
    font-size: 20px;
    text-align: center;
    font-weight: 500px ;
    // padding: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    z-index: 100;
  }
}
.footer{
    width: 100%;
    height: 5vh;
    background-color: $warmbeige;
  .footer_info{
    margin: 0;
    padding-top: 5px;
  }
    .info1,.info2{
      margin-left: 20px;
      font-family: Georgia, 'Times New Roman', Times, serif;
      color: $espresso;
      font-weight: 300;
      font-size: medium;
    }
    .footer_icon{
      margin-left: 20px;
      font-size: 24px;
      z-index: 10;
    }
}
</style>

