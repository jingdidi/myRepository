{
    let imgBox = document.querySelector(".imgBox");
    let now = 1;

    //移动函数
    function move() {
        now++;
        imgBox.style.transition = "all .8s";
        imgBox.style.marginLeft = now * -100 + "vw";
    }

    //自动播放
    let r1 = setInterval(move, 3000);
    imgBox.addEventListener("transitionend", function () {
        flag = true;
        if (now === 3) {
            //瞬间回到，所以无过渡属性
            imgBox.style.transition = "none";
            imgBox.style.marginLeft = "-100vw";
            now = 1;
        }
        if (now === 0) {
            imgBox.style.transition = "none";
            imgBox.style.marginLeft = "-200vw";
            now = 2;
        }
    });
    let banner = document.querySelector(".banner");
    banner.onmouseenter = function () {
        clearInterval(r1);
    };
    banner.onmouseleave = function () {
        clearInterval(r1);
        r1 = setInterval(move, 3000);
    };
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");
    let flag = true;//判断过渡是否完成
    next.onclick = function () {
        if (flag) {
            move();
            flag = false;
        }
    };
    prev.onclick = function () {
        if (flag) {
            now -= 2;
            move();
            flag = false;
        }
    };
    //页面失去焦点
    window.addEventListener("blur", function () {
        clearInterval(r1);
    });
    window.addEventListener("focus", function () {
        clearInterval(r1);
        r1 = setInterval(move, 2000);
    });
}
//banner
{
    //滚动事件
    window.onscroll = function () {
        let nav = document.querySelector(".nav");
        let a = document.querySelectorAll(".navList>li>a");
        if (document.documentElement.scrollTop > 0) {
            nav.classList.add("active");
            a.forEach(function (ele) {
                ele.classList.add("active");
            });

        } else {
            nav.classList.remove("active");
            a.forEach(function (ele) {
                ele.classList.remove("active");
            });

        }
    }

}
{
    let artList = document.querySelector(".artList");
    let now = 3;

    function artMove() {
        now++;
        artList.style.transition = "all .3s";
        artList.style.marginLeft = now * -350 + "px";
    }

    let r2 = setInterval(artMove, 2000);
    artList.addEventListener("transitionend", function () {
        flag = true;
        if (now === 7) {
            artList.style.transition = "none";
            artList.style.marginLeft = "-1050px";
            now = 3;
        }
        if (now === 0) {
            artList.style.transition = "none";
            artList.style.marginLeft = "-1400px";
            now = 4;
        }
    });
    let artImg = document.querySelector(".artImg");
    artImg.onmouseenter = function () {
        clearInterval(r2);
    };
    artImg.onmouseleave = function () {
        clearInterval(r2);
        r2 = setInterval(artMove, 2000);
    };
    let artLeft = document.querySelector(".artLeft");
    let artRight = document.querySelector(".artRight");
    let flag = true;
    artRight.onclick = function () {
        if (flag) {
            artMove();
            flag = false;
        }

    };
    artLeft.onclick = function () {
        if (flag) {
            now -= 2;
            artMove();
            flag = false;
        }

    };
    window.addEventListener("blur", function () {
        clearInterval(r2);
    });
    window.addEventListener("focus", function () {
        clearInterval(r2);
        r2 = setInterval(artMove, 2000);
    })
}
//art

{
    let loadPictures = document.querySelectorAll(".loadPicture");
    loadPictures.forEach(function (ele) {
        let imgs = ele.querySelectorAll("img");
        if (ele.offsetTop <= window.innerHeight) {
            imgs.forEach(function (img) {
                img.src = img.getAttribute("data-src");
            })

        }
    });
    window.addEventListener("scroll", function () {
        loadPictures.forEach(function (ele) {
            let imgs = ele.querySelectorAll("img");
            if (ele.offsetTop - window.innerHeight <= document.documentElement.scrollTop) {
                imgs.forEach(function (img) {
                    img.src = img.getAttribute("data-src");
                })
            }
        })
    });
}
//按需加载


    let loadPicture = document.querySelector(".loadPicture:nth-child(3)");
    let toTop = document.querySelector(".toTop");
    window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop >= loadPicture.offsetTop - window.innerHeight) {
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    });
    let s=document.documentElement.scrollTop; //s
    let time=500; //500ms
    let v=s/time;
    let s1=v*25;             //25ms的路程
    toTop.onclick=function(){
        let r3=setInterval(function(){
            s-=s1;
            if(s<=0){
                s=0;
                clearInterval(r3);
            }
            document.documentElement.scrollTop=s;
        },25);
    }
//toTop

    let h3 = document.querySelectorAll("h3");
    window.addEventListener("scroll",function(){
        h3.forEach(function (ele) {
            if (ele.offsetTop-window.innerHeight<=document.documentElement.scrollTop) {
                ele.classList.add("slideInDown");
            }
        });
    });


//h3动画
{
    //偶数
    let evenFloweritems=document.querySelectorAll(".floweritem:nth-of-type(even)");
    //奇数
    let oddFloweritems=document.querySelectorAll(".floweritem:nth-of-type(odd)");
    window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop >= loadPicture.offsetTop - window.innerHeight) {
            evenFloweritems.forEach(function(even){
                even.classList.add("slideInRight");
            });
            oddFloweritems.forEach(function(odd){
                odd.classList.add("slideInLeft");
            });
        }
    });
}
//素馨花语的动画

{
    let workroomContent=document.querySelector(".workroomContent");
    let workroomContentP=document.querySelectorAll(".workroomContent>p");
    window.addEventListener("scroll",function(){
        if(workroomContent.offsetTop-window.innerHeight<=document.documentElement.scrollTop){
            workroomContentP.forEach(function(ele){
                ele.classList.add("slideInUp");
            });
        }
    })
}
//工作室的动画