$(function() {
    var $li = $('.tab-bar li');
    var $content = $('.sider-content .tab-content');
    $content.css('display', 'none');
    $content.eq(0).css('display', 'block');

    $li.click(function() {
        var _this = $(this);
        var _index = _this.index();
        $li.removeClass();
        _this.addClass('active-bar');
        $content.css('display', 'none');
        $content.eq(_index).css('display', 'block');
    })
})