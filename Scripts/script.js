// =search location handling

function checklink(qstr)
{
  e = window.event.keyCode;
  if (e == 13 || e == 10){
  document.location = "/search_out?query=" + qstr;
  }
}

function srchlink(str){
  document.location = "/search_out?query=" + str;
  }

function advlink(str){
  document.location = "/search_in?query=" + str;
  }

// =print window pop-up 
function printWindow(pathID, width, height){
  window.open(pathID,"printwindow","width="+width+",height="+height+",toolbar=1,menubar=1,scrollbars=1,resizable=0,status=0,top=20,left=20");
}

// =mail window pop-up
function mailWindow(pathID, width, height){
window.open(pathID,"mailwindow","width="+width+",height="+height+",toolbar=1,menubar=1,scrollbars=1,resizable=1,status=0,top=50,left=50");
}

// =jQuery and plugin instantiation


$(document).ready(function(){

//FAQ tabs and accordion
      if ($("#catTabs").length) {
        $("#catTabs").tabs({
          selected: 0,
            create: function () {
            $('div.accordion').eAccordion({
              header: 'h5'
        });  
      }
    });
    }
    if ( $('div.accordion').length && $("#accTabs").length == 0 ) {
    	$('div.accordion').eAccordion({
        header: 'h5'
    });
    };

/* Simple Modal Window */
//open modal window by clicking any dom object with class = "modalOpen"
  $('.modalOpen').click(function(e) {
    e.preventDefault;
    $('#modalWindow').show();
});

//close modal window by clicking on close or clicking outside content
  $('.modalClose, #modalWindow').click(function(e) {
    e.preventDefault;
    $('#modalWindow').hide();
  });

//make sure clicking in popup doesn't close modalWindow
$('#modalContainer').click(function(e) {
  e.stopPropagation();
});

//small version drop down menu nav
$("select#deviceNav").change(function() {
  window.location = $(this).find("option:selected").val();
});


$('.hiddenColText').hide();

$('.moreButton').hover(function(){
        var thisTextID = $(this).attr('id');
        var thisText = thisTextID.substr(4);
        $('#myText'+thisText).fadeIn();
});

$('.moreButton').mouseleave(function(){
    $('.hiddenColText').fadeOut(); 
  });

$('.bioContent').hide();

$('.bioShow').click(function(){
        var thisBioID = $(this).attr('id');
        var thisBio = thisBioID.substr(4);
        $('.bioContent:visible').hide();
        $('.bioContent-1:visible').hide();
        $('#myBio'+thisBio).fadeIn();
        $('.bioShow').removeClass("selectedBio");
        $(this).addClass("selectedBio");
});

});


//addthis config

function initAddThis() 
 {
   addthis.init()
  }
  var addthis_config = {
    'data_track_clickback': true,
    'data_track_addressbar':false,
    'services_compact': 'linkedin,twitter,tumblr,digg,google,facebook',
    'services_exclude': 'print,cleanprint,sendto,mailto,email',
    'ui_cobrand': 'Tiger Bay Advisors'
  };
// After the DOM has loaded...
     initAddThis();

