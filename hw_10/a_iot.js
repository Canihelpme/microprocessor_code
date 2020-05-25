function XHR_write(data){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","remoteC.php?" + data);
    xhr.send();
}

function XHR_read(data){
    var xhr = new XMLHttpRequest();

    xhr.open("GET","remoteC.php?" + data, false);
    xhr.send();
return xhr.responseText;
}

function repeat(){
LIGHT();
}
setInterval(function(){repeat();},500);

function LASERON() 
{
    var pic;
    pic = "laser_on.png"
    document.getElementById('myImage').src = pic;
}

function LASEROFF() 
{
    var pic;
    pic = "laser_off.png"
    document.getElementById('myImage').src = pic;
}

function ultraSonic()
{
    var val=XHR_read('ultraSonic');
    
    if(val>=20){
        document.getElementById('myImage2')='image/ultrasonic2.png';
    }else if(val>=10){
        document.getElementById('myImage2').src='image/ultrasonic1.png';
    }else{
        document.getElementById('myImage2').src='image/ultrasonic.png';
    }
    
    document.getElementById("ultrasonic_val").value=val+"cm";
    }