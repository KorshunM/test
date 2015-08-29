<?php
$results = file('results.txt');

foreach($results as $result)
{
	$arr = explode(':', $result);
	echo '<p>' . $arr[0] . ' ________ ' . $arr[1] . 'очков</p>'; 
}
