<?php 
die();
include "libmail.php";
if (session_status() == PHP_SESSION_NONE) {
  session_start();
} ?>

<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <title>Document</title>
</head>
<body>

  <?php
  
  $cl_name    = isset($_GET['name'])?htmlspecialchars($_GET['name']):'';
  $cl_phone   = isset($_GET['phone'])?htmlspecialchars($_GET['phone']):'';
  $cl_mail   = isset($_GET['mail'])?htmlspecialchars($_GET['mail']):'';
  $formsended = isset($_GET['formsended'])?htmlspecialchars($_GET['formsended']):'';
  $message = '
  <html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Отправка заявки</title>
  </head>
  <body>
    <p>Имя: '.$cl_name.'</p>
    <p>Телефон:'.$cl_phone.'</p>
    <p>Почта:'.$cl_mail.'</p>
    <p>Отправлено с формы: '.$formsended.'</p>
    <br>
  </body>
  </html>
  ';

  $m= new Mail; 
  $m->From( "sales@satcredit.kz" );
  $m->To( "o.kosmacka@warehouse.lv" );
  $m->Subject( "Заявка с сайта naburzh" );
  $m->Body( $message, "html" );
  $m->Priority(3);
  $m->smtp_on( "smtp", "sales@domain", "pass" );
  $m->Send();

  if (1==1) {
   ?>
   <?
 } else {
  ?>

  <? } ?>
</body>
</html>