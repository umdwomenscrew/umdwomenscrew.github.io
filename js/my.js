/* NESTED LIST */

$(function() {
        
    $('.list-group-item').on('click', function() {
      $('.fa', this)
        .toggleClass('fa-chevron-right')
        .toggleClass('fa-chevron-down');
    });
  
  });