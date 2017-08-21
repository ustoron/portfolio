var table = '#myTable';
$('#maxRows').on('change',function(){
    $('.pagination').html('');
    var trnum = 0;
    var maxRows = parseInt($(this).val());
    var totalRows = $(table + ' tbody tr').length;
    $(table + ' tr:gt(0)').each(function(){
        trnum++;
        if(trnum > maxRows){
            $(this).hide();
        } else {
            $(this).show();
        }
    });
    if(totalRows > maxRows){
        var pagenum = Math.ceil(totalRows/maxRows) +   1;
        for(var i = 1; i < pagenum;){
            $('.pagination').append('<li data-page="'+i+'">\<span>' + i++ + '<span class="sr-only">(current)</span></span>\</li>').show();
        }
    }
    $('.pagination li:first-child').addClass('active');
    $('.pagination li').on('click', function(){
        var pageNum = $(this).attr('data-page');
        var trIndex = 0;
        $('.pagination li').removeClass('active');
        $(this).addClass('active');
        $(table + ' tr:gt(0)').each(function(){
            trIndex++;
            if(trIndex >(maxRows*pageNum) || trIndex <= ((maxRows*pageNum)-maxRows)){
                $(this).hide();
            } else {
                $(this).show();
            }
        })
    })
})
