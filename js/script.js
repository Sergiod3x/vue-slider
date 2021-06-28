Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
           photos: [
            "./img/1.jpg",
            "./img/2.jpg",
            "./img/3.jpg",
            "./img/4.jpg",
            
           ],
           pictureIndex : 0,
        }
    }
       
 );
  

