{
    let headTitleBox = document.querySelector(".headTitleBox");
    let goodsBox = document.querySelector(".goodsBox");
    headTitleBox.onmouseenter = function () {
        goodsBox.classList.add("active");

    };
    headTitleBox.onmouseleave = function () {
        for (let i = 0; i < goodsItems.length; i++) {
            goodsItems[i].classList.remove("active");
        }
        goodsBox.classList.remove("active");
    };
    let headTitles = document.querySelectorAll(".headTitleA");
    let goodsItems = document.querySelectorAll(".goodsItem");
    headTitles.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            for (let i = 0; i < goodsItems.length; i++) {
                goodsItems[i].classList.remove("active");
            }
            goodsItems[index].classList.add("active");
        }

    });
}
//header导航向下划出
{
    let searchInput=document.querySelector(".searchContent>input");
    let searchContent=document.querySelector(".searchContent");
    let searchButton=document.querySelector(".searchButton");
    let searchHot=document.querySelector(".searchHot");
    searchInput.onfocus=function () {
        searchContent.style.border="1px solid #ff6700";
        searchButton.style.border="1px solid #ff6700";
        searchButton.style.borderLeft="none";
        searchHot.style.opacity="0";
        searchHot.style.transition="all .3s";
    }
    searchInput.onblur=function () {
        searchContent.style.border="1px solid #e0e0e0";
        searchButton.style.border="1px solid #e0e0e0";
        searchButton.style.borderLeft="none";
        searchHot.style.opacity="1";
        searchHot.style.transition="all .3s";
    }
}
//search
{
    let imgItems = document.querySelectorAll(".imgItem");
    let pagersItems = document.querySelectorAll(".pagersItem");

    let now = 0;

    function move() {
        now++;
        if (now === pagersItems.length) {
            now = 0;
        }
        if (now === -1) {
            now = pagersItems.length - 1;
        }
        for (let i = 0; i < pagersItems.length; i++) {
            imgItems[i].classList.remove("active");
            pagersItems[i].classList.remove("active");
        }
        imgItems[now].classList.add("active");
        pagersItems[now].classList.add("active");
    }

    let r1 = setInterval(move, 2000);
    let banner = document.querySelector(".banner");
    banner.onmouseenter = function () {
        clearInterval(r1);
    };
    banner.onmouseleave = function () {
        if (flag) {
            return;
        }
        r1 = setInterval(move, 2000);
    };

    let flag = false;
    pagersItems.forEach(function (ele, index) {
        ele.onclick = function () {
            flag = true;
            now = index;
            for (let i = 0; i < pagersItems.length; i++) {
                pagersItems[i].classList.remove("active");
                imgItems[i].classList.remove("active");
            }
            ele.classList.add("active");
            imgItems[index].classList.add("active");
        }
    });

    let bannerLeft = document.querySelector(".bannerLeft");
    let bannerRight = document.querySelector(".bannerRight");

    bannerRight.onclick = function () {
        if (flag2) {
            flag2 = false;
            flag = true;
            move();
        }

    };
    bannerLeft.onclick = function () {
        if (flag2) {
            flag2 = false;
            flag = true;
            now -= 2;
            move();
        }

    };

    let flag2 = false;
    imgItems.forEach(function (ele) {
        ele.addEventListener("transitionend", function () {
            flag2 = true;
        });
    })

}
//banner轮播图
{
let aslideList=document.querySelectorAll(".aslideList");
let aslideListA=document.querySelectorAll(".aslideList>a");
let aslideContent=document.querySelectorAll(".aslideContent");
    aslideList.forEach(function(v,i){
        v.onmouseenter=function(){
            aslideListA[i].classList.add("active");
            aslideContent[i].classList.add("active");
        }
        v.onmouseleave=function(){
            aslideListA[i].classList.remove("active");
            aslideContent[i].classList.remove("active");
        }
    })
}
//aslide
{
    let xiaomiBuyGoodsList = document.querySelector(".xiaomiBuyGoodsList");
    let xiaomiBuyGoods = document.querySelectorAll(".xiaomiBuyGoodsList>li");
//右箭头
    let xiaomiBuyLeft = document.querySelector(".xiaomiBuyLeft");
//左箭头
    let xiaomiBuyRight = document.querySelector(".xiaomiBuyRight");
    let n = 0;
    xiaomiBuyLeft.onclick = function () {
        n++;
        console.log(n);
        if (n >= xiaomiBuyGoods.length / 4 - 1) {
            n = xiaomiBuyGoods.length / 4 - 1;
            xiaomiBuyLeft.style.color = "#e0e0e0";
            xiaomiBuyRight.style.color = "#b0b0b0";
        } else {
            xiaomiBuyLeft.style.color = "#b0b0b0";
            xiaomiBuyRight.style.color = "#b0b0b0";
        }
        xiaomiBuyGoodsList.style.marginLeft = (-992 * n) + "px";
        xiaomiBuyGoodsList.style.transition = "all .8s";

    };
    xiaomiBuyRight.onclick = function () {
        n--;
        if (n <= 0) {
            n = 0;
            xiaomiBuyLeft.style.color = "#b0b0b0";
            xiaomiBuyRight.style.color = "#e0e0e0";
        } else {
            xiaomiBuyLeft.style.color = "#b0b0b0";
            xiaomiBuyRight.style.color = "#b0b0b0";
        }
        xiaomiBuyGoodsList.style.marginLeft = (-992 * n) + "px";
        xiaomiBuyGoodsList.style.transition = "all .8s";
    }
}
//xiaomiBuy
{
    let barList = document.querySelector(".barList:first-child");
    let ewm = document.querySelector(".ewm");
    barList.onmouseenter = function () {
        ewm.style.display = "block";
    };
    barList.onmouseleave = function () {
        ewm.style.display = "none";
    };
}
//ewm二维码
{
    let recommendContent = document.querySelector(".recommendContent");
    let navItems = document.querySelectorAll(".recommendContent>li");
    //右箭头
    let recommendToLeft = document.querySelector("#recommendToLeft");
//左箭头
    let recommendToRight = document.querySelector("#recommendToRight");
    let n = 0;
    //异步（点击时才会被触发）
    recommendToLeft.onclick = function () {
        n++;
        if(n>=navItems.length/5-1){
            n=navItems.length/5-1;
            recommendToLeft.style.color="#e0e0e0";
            recommendToRight.style.color="#b0b0b0";
        }else{
            recommendToRight.style.color="#b0b0b0";
            recommendToLeft.style.color="#b0b0b0";
        }
        recommendContent.style.marginLeft = -1240 * n + "px";
        recommendContent.style.transition = "all .8s";
    };
    recommendToRight.onclick=function(){
        n--;
        if(n<=0){
            n=0;
            recommendToLeft.style.color="#b0b0b0";
            recommendToRight.style.color="#e0e0e0";
        }else{
            recommendToRight.style.color="#b0b0b0";
            recommendToLeft.style.color="#b0b0b0";
        }
        recommendContent.style.marginLeft = -1240 * n + "px";
        recommendContent.style.transition = "all .8s";
    }

}
//推荐
{
    function currentContainerMove(currentContainer) {
        let subList = currentContainer.querySelector(".subList");
        let wraperItems = currentContainer.querySelectorAll(".wraperItem");

        wraperItems.forEach(function (ele, index) {
            ele.onclick = function () {
                now = index;
                for (let i = 0; i < wraperItems.length; i++) {
                    wraperItems[i].classList.remove("active");
                }
                ele.classList.add("active");
                subList.style.marginLeft = index * -296 + "px";
            }
        });

        let now = 0;
        let pre = currentContainer.querySelector(".prev");
        let next = currentContainer.querySelector(".next");
        next.onclick = function () {
            now++;
            // console.log(now);
            if (now >= wraperItems.length) {
                now = wraperItems.length - 1;
            }
            wraperItems.forEach(function (ele, index) {
                for (let i = 0; i < wraperItems.length; i++) {
                    wraperItems[i].classList.remove("active");
                }
                wraperItems[now].classList.add("active");
                subList.style.marginLeft = now * -296 + "px";
            })
        };
        pre.onclick = function () {
            now--;
            if (now < 0) {
                now = 0;
            }
            // console.log(now);
            wraperItems.forEach(function (ele, index) {
                for (let i = 0; i < wraperItems.length; i++) {
                    wraperItems[i].classList.remove("active");
                }
                wraperItems[now].classList.add("active");
                subList.style.marginLeft = now * -296 + "px";
            })
        };

    }

    let containers = document.querySelectorAll(".container");
    containers.forEach(function (ele, index) {
        currentContainerMove(ele);
    });

}
//内容 container
{
    let pageItems = document.querySelectorAll(".pageRight>li");
    pageItems.forEach(function (ele, index) {
        ele.onmouseenter = function () {
            ele.classList.add("active");
        };
        ele.onmouseleave = function () {
            ele.classList.remove("active");
        }
    });
    let navLeft = document.querySelector(".navLeft");
    navLeft.onmouseenter = function () {
        navLeft.classList.add("active");
    }
    navLeft.onmouseleave = function () {
        navLeft.classList.remove("active");
    }
}
//手机
{
    function parentContent(parent){
        let rowItems=parent.querySelectorAll(".rowList>li");
        rowItems.forEach(function(value,index){
            value.onmouseenter=function(){
                value.classList.add("rowActive");
                for (let i=0;i<rowItems.length;i++){
                    if(i!==index){
                        rowItems[i].classList.remove("rowActive");
                    }
                }
            };
        })
    }
    let rowLists=document.querySelectorAll(".rowList");
    rowLists.forEach(function(value,index){
        parentContent(value);
    })
}
//家电 智能  搭配  配件  周边
{
    let contains = document.querySelectorAll(".contain");
    // console.log(contains);
    contains.forEach(function (ele, index) {
        let imgs = ele.querySelectorAll("img");
        if (ele.offsetTop <= window.innerHeight) {
            imgs.forEach(function (img, index) {
                img.src = img.getAttribute("data-src");
            })
        }
    });

    let toTop = document.querySelector(".toTop");
    //回到顶部

    //窗口滚动事件
    window.onscroll = function () {
        contains.forEach(function (ele) {
            let imgs = ele.querySelectorAll("img");
            let over = document.documentElement.scrollTop;
            let target = ele.offsetTop - window.innerHeight;
            if (over >= target) {
                imgs.forEach(function (img) {
                    img.src = img.getAttribute("data-src");
                })
            }
        });
        toTop.onclick = function () {
            let s = document.documentElement.scrollTop;//总路程
            let time = 500; //假设从底部回到顶部的总时间固定，为500ms
            let s1 = s / time * 25; //25ms走的路程
            let r2 = setInterval(function () {
                s -= s1;   //剩余的路程
                if (s <= 0) {
                    s = 0;
                    clearInterval(r2);
                }
                document.documentElement.scrollTop = s;
            }, 25);
        }
    }


}
//按需加载（图片）、回到顶部