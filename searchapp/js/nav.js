$('.form-search').on('submit',function(){return false;});
$('.form-search .search-btn').on('click', function(e){
    var query = $.trim($(this).prevAll('.search-query').val()).toLowerCase();
    $('div.product-card .product-brand').each(function(){
         var $this = $(this);
         if($this.text().toLowerCase().indexOf(query) === -1)
             $this.closest('div.product-card').fadeOut();
        else $this.closest('div.product-card').fadeIn();
    });
});

/* just for test purpose */
