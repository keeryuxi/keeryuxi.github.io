// 点击出字
var a_idx = 0;
jQuery(document).ready(function ($) {
  $("body").click(function (e) {
    // 点击弹出文字数组
    var a = new Array
      ("努力", "奋斗", "坚持", "学习", "自律", "健身", "超越", "向前", "奉献", "热爱");
    var $i = $("<span/>").text(a[a_idx]);
    a_idx = (a_idx + 1) % a.length;
    var x = e.pageX,
      y = e.pageY;
    $i.css({
      "z-index": 5,
      "top": y - 20,
      "left": x,
      "position": "absolute",
      "font-weight": "bold",
      "color": "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
    });
    $("body").append($i);
    $i.animate({
      "top": y - 180,
      "opacity": 0
    },
      3000,
      function () {
        $i.remove();
      });
  });
  setTimeout('delay()', 2000);
});

function delay () {
  $(".buryit").removeAttr("onclick");
}
