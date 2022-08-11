window.onload = function () {
    var tel = document.querySelector('#tel');
    var qq = document.querySelector('#qq');
    var uname = document.querySelector('#uname');
    var msg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    var regtel = /^1[3|5|6|8|9]\d{9}$/;
    var regqq = /^[1-9]\d{4,11}$/;
    var reguname = /^[\u4e00-\u9fa5]{2,8}$/;
    var regmsg = /^\d{6}$/;
    var regpwd = /^\w{6,16}$/;
    function regexp(ele, reg) {
        ele.onblur = function () {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_ico">恭喜输入正确</i>';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_ico">格式不正确，请重新输入</i>';
            }
        }
    }
    regexp(tel, regtel);
    regexp(qq, regqq);
    regexp(uname, reguname);
    regexp(msg, regmsg);
    regexp(pwd, regpwd);
    surepwd.onblur = function () {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_ico">恭喜输入正确</i>';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_ico">密码不一致，请重新输入</i>';
        }
    }
}