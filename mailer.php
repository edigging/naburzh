<?php
// // пример использования
// require_once "SendMailSmtpClass.php"; // подключаем класс
//
// define('SMTP_LOGIN', $_SERVER['SMTP_LOGIN']);
// define('SMTP_PASSWORD', $_SERVER['SMTP_PASSWORD']);
// define('SMTP_SERVER', 'smtp.gmail.com');
//
// $mailSMTP = new SendMailSmtpClass(SMTP_LOGIN, SMTP_PASSWORD, SMTP_SERVER, 'Naburzh', 465); // создаем экземпляр класса
// // $mailSMTP = new SendMailSmtpClass('логин', 'пароль', 'хост', 'имя отправителя');
//
//   $name = isset($_POST["name"]) ? "<br /><b>Имя:</b> " . $_POST["name"] : "";
//   $phone = isset($_POST["phone"]) ? "<br /><b>Телефон:</b> " . $_POST["phone"] : "";
//   $mail = isset($_POST["mail"]) ? "<br /><b>E-mail:</b> " . $_POST["mail"] : "";
//   $formsended = isset($_POST["formsended"]) ? "<br /><b>Отправлено с формы::</b> " . $_POST["formsended"] : "";
//
// // заголовок письма
// $headers= "MIME-Version: 1.0\r\n";
// $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
// $headers .= "From: Naburzh <" . SMTP_LOGIN . ">\r\n"; // от кого письмо
// $content = "$name $phone $mail $formsended";
// $result =  $mailSMTP->send('o.kosmacka@naburzh.com', 'Naburzh', $content, $headers); // отправляем письмо
// // $result =  $mailSMTP->send('Кому письмо', 'Тема письма', 'Текст письма', 'Заголовки письма');
//
// if($result === true){
//     echo "Письмо успешно отправлено";
// }else{
//     echo "Письмо не отправлено. Ошибка: " . $result;
// }

$name = isset($_POST["name"]) ? "<br /><b>Имя:</b> " . $_POST["name"] : "";
$phone = isset($_POST["phone"]) ? "<br /><b>Телефон:</b> " . $_POST["phone"] : "";
$mail = isset($_POST["mail"]) ? "<br /><b>E-mail:</b> " . $_POST["mail"] : "";
$formsended = isset($_POST["formsended"]) ? "<br /><b>Отправлено с формы::</b> " . $_POST["formsended"] : "";
// $to  = 'o.kosmacka@naburzh.com';
$to  = 'kremen.verst@gmail.com';

$output = ['status' => 'error', 'message' => 'Письмо не отправлено'];

if ($name != '' && $phone != '' && $mail != '')
{
    try
    {
        $subject  = "Вопрос от: $name";
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: <$mail>\r\n";
        $headers .= "Reply-To: $mail\r\n";

        $mail = mail($to, $subject, $formsended, $headers);
    }
    catch (Exception $e) {
        echo $e;
        exit;
    }

    if($mail)
    {
        $output = ['status' => 'success', 'message' => 'Письмо отправлено'];
    }
}
else
{
    echo $formsended;
}

echo json_encode($output);
?>
