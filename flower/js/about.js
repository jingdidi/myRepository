{
    //滚动开始
    window.onscroll=function(){
        let nav=document.querySelector(".nav");
        let a=document.querySelectorAll(".navList>li>a");
        if(document.documentElement.scrollTop>0){
            nav.classList.add("active");
            a.forEach(function(ele){
                ele.classList.add("active");
            });
        }else{
            nav.classList.remove("active");
            a.forEach(function(ele){
                ele.classList.remove("active");
            });
        }
    }
}