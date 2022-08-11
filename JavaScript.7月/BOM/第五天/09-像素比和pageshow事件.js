(function flexible(window, document) {
    //获取的html 的更元素
    var docEl = document.documrntElement;
    // dpr 物理像素比
    var dpr = window.devicePixelRatio || 1

    // adjust body font size 设置body 的字体大小
    function setBodyFontSize() {
        // 如果页面有body 这个元素 就是设置body 的字体大小
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else {
            // 如果页面中没用body 这个元素 则等着 我们页面主要的DOM元素加载完毕再去设置body的字体的大小
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10 设置html元素的文字大小
    function setRemUnit() {
        var rem = docEl.clientWidth / 10   // 把整个html的宽度划分了10等分
        docEl.style.fontSize = rem + 'px'
    }
    setRemUnit()

    // reset rem unit on page resize 但我们页面尺寸大小发生变化的时候，要重新设置一下rem的大小
    window.addEventListener('resize', seRemUnit)
    // pageshow 是我们重新加载页面触发的事件
    window.addEventListener('pagehow', function (e) {
        if (e.persited) {
            setRemUnit()
        }
    })

})