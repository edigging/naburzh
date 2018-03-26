<?php
require("lib/sendgrid-php/sendgrid-php.php");

$name = filter_input(INPUT_POST, "name");
$phone = filter_input(INPUT_POST, "phone");
$mail = filter_input(INPUT_POST, "mail");

$output = ['status' => 'error', 'message' => 'Письмо не отправлено'];

if ($name != '' && $phone != '' && $mail != '')
{
    try
    {
        $naburzhServiceEmail = getenv('NABURZH_SERVICE_EMAIL');
        if (!$naburzhServiceEmail) { $naburzhServiceEmail = 'grishain@gmail.com'; }

        $from = new SendGrid\Email("NABURZH WEB", 'no-reply@naburzh.com');
        $to  = new SendGrid\Email("NABURZH SERVICE", $naburzhServiceEmail);

        $subject  = "Запрос с сайта NABURZH.COM";

        $content = "<b>Имя:</b> $name";
        $content .= "<br /><b>Телефон:</b> $phone";
        $content .= "<br /><b>E-mail:</b> $mail";

        $body = new SendGrid\Content("text/html", $content);

        $mail = new SendGrid\Mail($from, $subject, $to, $body);

        $apiKey = getenv('SENDGRID_API_KEY');
        $sg = new \SendGrid($apiKey);

        $response = $sg->client->mail()->send()->post($mail);
        if($response->statusCode() == 202)
        {
            $output = ['status' => 'success', 'message' => 'Письмо отправлено'];
        }
    }
    catch (Exception $e) {
        echo $e;
        exit;
    }
}
else
{
    echo $formsended;
}

echo json_encode($output);
?>
