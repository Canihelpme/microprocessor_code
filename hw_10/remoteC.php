<?php
    if(isset($_GET['ultraSonic'])) {
        $ret = shell_exec('/home/pi/donghyun/ultrasonic 2>&1');
        echo $ret;
    }

    else if(isset($_GET['LASERON'])) {
        $ret = shell_exec('/home/pi/donghyun/laser_on 2>&1');
        echo $ret;
    }

    else if(isset($_GET['LASEROFF'])) {
        $ret = shell_exec('/home/pi/donghyun/laser_off 2>&1');
        echo $ret;
    }

    else {
        echo "WRONG! Please try again."
      }

?>s