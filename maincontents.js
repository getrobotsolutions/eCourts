var speak = new Array( );


        speak[0] = "Here is the agenda for the E-Courts conference.";
        speak[1] = "Here is the map for E-Courts.";
        speak[2] = "Scroll the publications, click on those of interest, and I’ll email you the publication.";
        speak[3] = "Click on the video you would like to watch.";
        speak[4] = "Press a button to get started.";
        speak[5] = "";
        speak[6] = "It’s time to say cheese. Touch the camera icon to take a picture. ";
        speak[7] = "Smile! You are about to become a robot.";
        speak[8] = "et’s boogie.  Pick a song, then press the play button.";

//window.external.ChangeLanguage("en-us");
function FC_ContentsCall(strContentsName, strLanguage)
{
   // alert(strContentsName);
    
   
    switch (strContentsName)
    {
        case "Welcome":
            //PlaySpeech("Hi, I'm Tracey the trade show robot. I can be rented for trade shows and events. Press a button on my screen to begin");
            break;
        case "Home":
           location.href = "../../maincontents.htm";
            break;
        case "Schedule":
            
            location.href = "Contents/Schedule/index.html";
            PlaySpeech(speak[0]);
            break;
        case "Map":
            
            location.href = "Contents/Map/index.html";
            PlaySpeech(speak[1]);
            break;
        case "Publications":
            
            location.href = "Contents/Publications/index.html";
            PlaySpeech(speak[2]);
            break;
        
        case "Videos":
            
            location.href = "Contents/Videos/index.html";
            PlaySpeech(speak[3]);
            break;
        case "Selfie":
            
            location.href = "../../Contents/Selfie/index.html";
            PlaySpeech(speak[6]);
            break;
        case "Avatar":
            
            location.href = "../../Contents/RobotAvatar/index.htm";
            PlaySpeech(speak[7]);
            break;
        case "Dance":
            
            location.href = "Contents/Dance/index.html";
            PlaySpeech(speak[8]);
            break;
        case "AvatarSelfie":
            
            location.href = "Contents/AvatarSelfie/index.html";
            PlaySpeech(speak[4]);
            break;
        case "SlideShow":
            //PlaySpeech(speak[4]);
            location.href = "Contents/SlideShow/index.html";
            break;
            
            
        case "Config":
            location.href = "Config/Config.htm";
            break;
        case "maincontents":
            location.href = "maincontents.htm";
            break;
        default:
            break;
    } // end switch(strContentsName)
} // end FC_ContentsCall



function OnUserApproached()
{
    //PlaySpeech("Hello, welcome to the event. Please press a button on my screen to begin.");
}



function ShowPopup(){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="assets/contact.png"/></div></div>';
}
function ShowImgPopup(src){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    // calculate the values for center alignment
    var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);
    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();
    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><div id="dialog-message"><img width="800" src="'+src+'"/></div></div>';
}

$(document).ready(function(){

    $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {
        $('#dialog-overlay, #dialog-box').hide();
        return false;
    });
})


/*setTimeout(function () {
    ShowTime();
    console.log("Time Showed");

    var city = "Fairfield, CT";
    var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='f'";
    var queryURL = "https://query.yahooapis.com/v1/public/yql?q="+ searchtext + "&format=json";

    $.getJSON(queryURL, function (data) {

        var results = data.query.results;
        var firstResult = results.channel.item.condition;
        console.log(firstResult);


        var location = 'Unknown'; // not returned in response
        var temp = firstResult.temp;
        var text = firstResult.text;
        var image =  firstResult.code;
        var loc = 'https://s.yimg.com/zz/combo?a/i/us/we/52/'+image+'.gif' ;

        // $('#temp').append('The temperature is <strong>' + temp + '</strong><sup>°F</sup> Forecast calls for '+text);

        $('#condition').append(text);
        $('#temp').append(temp+ '</strong><sup>°F</sup>');

        $('#image-zoom').attr("src",loc);

        console.log("Weather Showed");
    });

}, 2000);*/



function ShowTime()
{
    var dt = new Date();
    // formatAMPM(dt);
    document.getElementById("content_air") .innerHTML = formatAMPM(dt) ;
    document.getElementById("content_date") .innerHTML = formatDate(dt);

}
function formatAMPM(date) {

    var hours = date.getHours();
    var minutes = date.getMinutes();


    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

    var dayName = days[date.getDay()];

    //dayName = date.toString().split(' ')[0];
    hours = hours <10? '0' +hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = dayName + ' ' + hours + ':' + minutes + ' ' + ampm;
    return strTime;
    //alert(strTime);
}

function formatDate(date){

    var m_names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var month = m_names[date.getMonth()];
    var day = date.getDate();
    day = getGetOrdinal(day);

    var output = (month<10 ? '0' : '') + month + ' ' +(day<10 ? '0' : '') + day+', '+ date.getFullYear() ;
    return output;
}

function getGetOrdinal(n) {
    var s=["th","st","nd","rd"],
        v=n%100;
    return n+'<sup>'+(s[(v-20)%10]||s[v]||s[0])+'</sup>';
}

function OnJoystickControlled(strPara){
    var btn_info = strPara.split(',')[4];


    if(btn_info[0] == '1'){
            window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Hi I’m Cora, the AI Courthouse Robot, press a button on my screen to begin.");
    }

    if(btn_info[1] == '1'){
        window.external.ChangeLanguage("en-us");
        SetVolume(1);
        window.external.PlaySpeech("I like you, can I please take your picture?");   
    }
    if(btn_info[2] == '1'){
        window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Hi, I’m Cora, my job is to provide improve the Courthouse experience for visitors and staff through Artificial Intelligence.");
    }
    if(btn_info[3] == '1'){
        window.external.ChangeLanguage("en-us");
        SetVolume(1);
        window.external.PlaySpeech("Bye-bye");        
    }
    if(btn_info[4] == '1'){
        //SetVolume(1);
        //window.external.PlaySpeech("");
        
        //SetHeadYaw(35, 23);       
    }
    if(btn_info[5] == '1'){
       SetHeadYaw(-35,23);
    }
    if(btn_info[6] == '1'){
        SetHeadYaw(0,23);
    }
    if(btn_info[7] == '1'){
        SetHeadYaw(35, 23);
        //window.external.PlaySpeech("Please check out our Title Tips of the Day.");
    }
    if(btn_info[8] == '1'){
        SetHeadYaw(0,23);
        //window.external.PlaySpeech("Would you like me to take a picture?");
    }
    if(btn_info[9] == '1'){
        SetHeadYaw(35, 23);
        //window.external.PlaySpeech("Would you like to take a picture with me?");
    }
    
    if(btn_info[10] == '1'){
        SetHeadYaw(0, 23);
    }
    if(btn_info[11] == '1'){
        SetHeadYaw(0,23);
    }
    
}