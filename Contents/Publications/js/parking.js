//-----------------------------------------------------
//Redirects to homepage after 1 minute of not interaction
//-----------------------------------------------------

/*function redirect(){
    window.location.href = "../../maincontents.htm";
}
var initial=setTimeout(redirect,60000);

$(document).click(function(event) {
    clearTimeout( initial );
    initial=setTimeout(redirect,60000);
});*/
//-----------------------------------------------------

var field;
var link;

function LanguageChange(lang)
{
    if(lang === "english")
    {
        eraseCookie("Spanish");
        writeCookie("CurrentLanguage", "English", 30);
        document.getElementById("btn_english").style.backgroundColor = "white";
        document.getElementById("btn_english").style.color = "#FF6600";
        document.getElementById("btn_spanish").style.backgroundColor = "#FF6600";
        document.getElementById("btn_spanish").style.color = "white";
    }
    else if (lang === "spanish")
    {
        eraseCookie("English");
        writeCookie("CurrentLanguage", "Spanish", 30);
        document.getElementById("btn_english").style.backgroundColor = "#FF6600";
        document.getElementById("btn_english").style.color = "white";
        document.getElementById("btn_spanish").style.backgroundColor = "white";
        document.getElementById("btn_spanish").style.color = "#FF6600";
    }
location.reload();
}





var article="";
$(document).ready(function(){
  $(".button-box").click(function(){
   article=$(this).attr("text");//$(this).text();
   link=$(this).attr("link")
    ShowPopup();
    field=document.getElementById("email");
  });
  $("input[type=email]").click(function(){
    ShowKeyboard();
  });

   $('a.btn-ok').click(function () {   
      $('#dialog-overlay1, #dialog-box1').hide();   
      return false;
    });

 
  
  $("#emailform").on('submit',function(e){
    
    if($("#email").val()== "")
    {
      alert("Please enter a valid email address.");
      $("#email").focus();
      return false;
    }
    
    $email=$("#email").val();
    
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if( !emailReg.test( $email ) ) {
      alert("Please enter a valid email address.");
      $("#email").val("");
      $("#email").focus();
      return false;
    }
    e.preventDefault();

    var $action = $(this).prop('action');
    var $data = $(this).serialize() + '&article=' + article + '&link=' +link;
    var $this = $(this);

    $this.prevAll('.alert').remove();

    $.post( $action, $data, function( data ) {

    if( data.response=='error' ){

                    //$this.before( '<div class="alert danger-border"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> <i class="mdi mdi-close-box"></i> '+data.message+'</div>' );
    }

    if( data.response=='success' ){
      $('#dialog-overlay1, #dialog-box1').hide();
      $("#emailform")[0].reset();
      $('#form-success').show();
      $( "#form-success" ).delay( 10000 ).fadeOut( 400 );
                  HideKeyboard();
                  //setTimeout(hideSuccessMessage(), 20000);

                }
            }, "json");
  });
});



function ShowPopup(src){

  // get the screen height and width  
  var maskHeight = $(document).height();  
  var maskWidth = $(window).width();
  
  // calculate the values for center alignment
  var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());  
  var dialogLeft = (maskWidth/2) - ($('#dialog-box1').width()/2); 
  
  // assign values to the overlay and dialog box
  $('#dialog-overlay1').css({height:maskHeight, width:maskWidth}).show();
  $('#dialog-box1').css({top:dialogTop, left:dialogLeft}).show();
   
}

function ShowPopupARS(src){
   // get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);

    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();

    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="'+ src +'"/></div></div>';
}
function ShowKeyboard()
{
    // 사진이 촬영되기 전에 클릭시 무시
    /*if (isPhotoTaken == false)
        return;
    
    // 키보드 보이기*/
    document.getElementById("keyboard").style.display = "block";
    
    // 메일 전송 안내 스피치
    /*if (isRobot)
    {
        //window.external.PlaySpeech(speechJsonObj["email"][c_language]);
    }*/
}

/* 키보드 숨김 */
function HideKeyboard()
{
    // 키보드 숨김
    document.getElementById("keyboard").style.display = "none";
    
    // 메일 주소 초기화
    message = "";
    document.getElementById("address").innerHTML = message;
}

/* 메일 주소 입력 */
var message = "";
function keyboard(strPara)
{
  if (strPara == "bs")
    {
    message = message.slice(0, -1);
  }
  
  else
    {
    message += strPara;
  }

  document.getElementById("address").innerHTML = message;
  field.value=message;
}
function SendEmail(){
  document.getElementById
}