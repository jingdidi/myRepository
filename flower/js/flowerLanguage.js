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