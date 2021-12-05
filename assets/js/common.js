
$(function() {
    // Set
    var main = $('div.account-dropdown .textfirst')
    var li = $('div.account-dropdown > ul > li.input-option')
    var inputoption = $("div.account-dropdown .option")
    var default_text = 'Lori Hofstadter';
  
    // Animation
    main.click(function() {
      main.html(default_text);
      li.toggle('slow');
    });
  
    // Insert Data
    li.click(function() {
      // hide
      li.toggle('fast');
      var livalue = $(this).data('value');
      var lihtml = $(this).html();
      main.html(lihtml);
      inputoption.val(livalue);
    });

  //Accordion
  $('.nested-accordion').find('.comment').slideUp();
  $('.nested-accordion').find('.acc-head').click(function(){
    $(this).next('.comment').slideToggle(100);
    $(this).toggleClass('selected');
  });
});

var drop = $("input");
drop.on('dragenter', function (e) {
  $(".drop").css({
    "border": "4px dashed #09f",
    "background": "rgba(0, 153, 255, .05)"
  });
  $(".cont").css({
    "color": "#09f"
  });
}).on('dragleave dragend mouseout drop', function (e) {
  $(".drop").css({
    "border": "3px dashed #DADFE3",
    "background": "transparent"
  });
  $(".cont").css({
    "color": "#8E99A5"
  });
});



function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object

  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; f = files[i]; i++) {

    // Only process image files.
    if (!f.type.match('image.*')) {
      continue;
    }

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        // Render thumbnail.
        var span = document.createElement('span');
        span.innerHTML = ['<img class="thumb" src="', e.target.result,
                          '" title="', escape(theFile.name), '"/>'].join('');
        document.getElementById('list').insertBefore(span, null);
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}

$('#files').change(handleFileSelect);

// calender
$(function() {
  $('#datepicker').datepicker({
    inline:true,
    firstDay: 1,
    showOtherMonths:true,
    dayNamesMin:['S', 'M', 'T', 'W', 'T', 'F', 'S']
  });

});
