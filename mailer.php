<?php
// пример использования
require_once "SendMailSmtpClass.php"; // подключаем класс
 
$mailSMTP = new SendMailSmtpClass('aftp4321@gmail.com', 'b8XO2HC3', 'smtp.gmail.com', 'Naburzh', 465); // создаем экземпляр класса
// $mailSMTP = new SendMailSmtpClass('логин', 'пароль', 'хост', 'имя отправителя');

  $name = isset($_POST["name"]) ? "<br /><b>Имя:</b> " . $_POST["name"] : "";
  $phone = isset($_POST["phone"]) ? "<br /><b>Телефон:</b> " . $_POST["phone"] : "";
  $mail = isset($_POST["mail"]) ? "<br /><b>E-mail:</b> " . $_POST["mail"] : "";
  $formsended = isset($_POST["formsended"]) ? "<br /><b>Отправлено с формы::</b> " . $_POST["formsended"] : "";

// заголовок письма
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
$headers .= "From: Naburzh <aftp4321@gmail.com>\r\n"; // от кого письмо
$content = "$name $phone $mail $formsended";
$result =  $mailSMTP->send('o.kosmacka@naburzh.com', 'Naburzh', $content, $headers); // отправляем письмо
// $result =  $mailSMTP->send('Кому письмо', 'Тема письма', 'Текст письма', 'Заголовки письма');









if($result === true){
    echo "Письмо успешно отправлено";
}else{
    echo "Письмо не отправлено. Ошибка: " . $result;
}
?>