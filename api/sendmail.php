<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Autorization, X-Requested-With');

//Import PHPMailer classes
include_once 'PHPMailer/PHPMailer.php';
include_once 'PHPMailer/SMTP.php';

require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;


var_dump(json_decode(file_get_contents("php://input")));
#echo json_encode($data);
var_dump($_POST);



$mail = new PHPMailer(); // create a new object
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
$mail->Host = "smtp.gmail.com";
$mail->Port = 465; // or 587
$mail->IsHTML(true);
$mail->Username = "qa.knowledge.bag@gmail.com";
$mail->Password = "vxfuebrvqdegjbew";
#$mail->SetFrom( $data->email, $data->fname, $data->lname);
$mail->Subject = "New report";
#$mail->Body = "Email: " .$data->email .'<br>' ."User: " .$data->fname . $data->lname .'<br>' ." Phone number: " .$data->phone .'<br>' ."Subject: ".$data->message;
$mail->AddAddress("qa.knowledge.bag@gmail.com");


 if(!$mail->Send()) {
   echo json_encode(array("answer" => "mesaj netrimis"));
   return false;
 } else {
    echo json_encode(array("answer" => "mesaj trimis"));
    return true;
 }
