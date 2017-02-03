window.onload=function(){
var oDiv = document.getElementById('div1');
        oDiv.onmousedown = function(ev) {


            var ev = ev || event;
            var disX = ev.clientX - oDiv.offsetLeft;
            var disY = ev.clientY - oDiv.offsetTop;
            if (oDiv.setCapture) {
                oDiv.setCapture();
            }
            document.onmousemove = function(ev) {
                var ev = ev || event;
                var L = ev.clientX - disX;
                var T = ev.clientY - disY;

                if (L < 0) {
                    L = 0
                } else if (L > document.documentElement.clientWidth - oDiv.offsetWidth) {
                    L = document.documentElement.clientWidth - oDiv.offsetWidth
                }
                if (T < 0) {
                    T = 0
                } else if (T > document.documentElement.clientHeight - oDiv.offsetHeight) {
                    T = document.documentElement.clientHeight - oDiv.offsetHeight
                }
                oDiv.style.left = L + 'px';
                oDiv.style.top = T + 'px';
            };
            document.onmouseup = function() {
                /*alert(1);*/
                if (oDiv.releaseCapture) {
                    oDiv.releaseCapture();
                }
                document.onmouseup = null;
                document.onmousemove = null;
            };

            return false;
        };
    };