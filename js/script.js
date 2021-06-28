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
        },
        methods:{
            next: function () {
                if(this.pictureIndex===3){
                    this.pictureIndex=0
                } else{
                    this.pictureIndex++;
                }
                
            },
            prev: function () {
                if(this.pictureIndex===0){
                    this.pictureIndex=3
                } else{
                    this.pictureIndex--;
                }
            },
        }
    }
       
 );
  

