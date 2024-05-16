// function zoom(img) {
//     let target_width=1500
//     if(window.innerWidth > 1300){
//         let current_width = img.naturalWidth; // 獲取圖片的寬度
//         let time = target_width / current_width; // 計算縮放比例
//         // 更新圖片的高度和寬度
//         img.style.height = img.naturalHeight * time + 'px';
//         img.style.width = target_width + 'px';
//         img.style.marginTop = 1300 - target_width + "px";
//     }
// };

// window.addEventListener('resize',function(){
//     var mainPage_picture = document.querySelector("#mainPage_picture");
//     zoom(mainPage_picture);
// });

function init_avatar(){
    let img = document.querySelector("#inner_avatar");
    let e = document.querySelector("#avatar");
    let margin = 10
    e.style.width = img.naturalWidth + margin + "px";
    e.style.borderRadius = 200 + "px";
    img.style.marginLeft = margin/2 + "px";
    img.style.marginTop = margin/2 + "px";
}

function user_information_container(){
    let e = document.querySelector("#user_information_container");
    let border = document.querySelector("#mainPage_picture_border");
    e.style.width = border.clientWidth + "px";
}

function init(){
    init_avatar();
    user_information_container();
};

// 如果畫面的尺寸改變
window.addEventListener('resize', user_information_container);

function load_data(target){
    fetch(`${target}.html`)
    .then(function(response){
        return response.text();
    }).then(function(text){
        document.querySelector("#content").innerHTML = text;
    });
}

// 使用 JavaScript 載入外部 HTML 檔案
// https://www.delftstack.com/zh-tw/howto/javascript/load-html-file-javascript/
// Using Fetch
// https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch