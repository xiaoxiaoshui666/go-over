window.addEventListener('load', function () {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    // 1.当鼠标进过时 mask 和 big 这两个盒子显示
    preview_img.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preview_img.addEventListener('mousemove', function (e) {
        // 1.计算鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // 2. 减去盒子高度的一半是150 就是我们mask 的最终left 和top 值了
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // 3. 若盒子到父盒子移动的距离小于0 ，就让他停在 0 的位置 
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;  // 遮挡层的最大移动距离：
        if (maskX <= 0) {
            maskX = 0;
            // 4. 若盒子到盒子移动的left左边距离大于盒子到父盒子的距离 ，则就等于他们的距离
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
            // 4. 若盒子到盒子移动的top上边距离大于盒子到父盒子的距离 ，则就等于他们的距离
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        var bigIMg = document.querySelector('.bigImg');
        var bigMax = bigIMg.offsetWidth - big.offsetWidth  // 大图片最大移动距离
        // 大图片的移动距离 =遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        // 负值就是相反的方向移动
        bigIMg.style.left = -bigX + 'px';
        bigIMg.style.top = -bigY + 'px';
    })
})