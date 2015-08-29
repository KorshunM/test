<?php
$name = $_POST['name'];
$score = $_POST['score'];

$f = fopen('results.txt', 'a+');
fwrite($f, $name . ":" . $score . "\r\n");
fclose($f);