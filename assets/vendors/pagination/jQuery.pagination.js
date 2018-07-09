(function(jQuery) {
    // 密闭的环境
  jQuery.fn.extend({
    pagination: function(totalPage, currentPage) {
      // 生成页数
      $(this).children("li:not(:first,:last)").remove();

      // 获取当前页,根据当前页 计算 需要显示的页码
      var startIndex = currentPage - 2;
      var endIndex = currentPage + 2;
      // 修正一下
      if (startIndex < 1) {
        startIndex = 1;
        endIndex = startIndex + 4;
      }

      if (endIndex > totalPage) {
        endIndex = totalPage;
        startIndex = endIndex - 4;
      }

      // 循环生成页码
      for (var i = startIndex; i <= endIndex; i++) {
        // 生成li
        var $li = $('<li><a href="#">' + i + "</a></li>");

        // 高亮某一个
        if (i == currentPage) {
          $li.addClass("active");
        }
        // 添加到ul中
        $li.insertBefore($(this).children("li:last"));
      }
    }
  });
})(jQuery);
