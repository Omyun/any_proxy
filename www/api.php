<?php


$fileid = @$_GET['fileid'];
$filename = $fileid."_p.txt";
$content = @file_get_contents($filename);
if ($content == "ok")
{
if($fileid == "meituan" || $fileid == "meituan_home" )
	{
	$filename = $fileid.".txt";
	$content = @file_get_contents($filename);
	$str=$content;
	$list = array();
	$var=explode("&",$str);
	foreach ($var as $value)
	{
		$r=explode("=",$value);
		$list[$r[0]] = $r[1];
	}
	echo json_encode($list);
	}
	if ($fileid == "jingdong")
	{
		$filename = $fileid.".txt";
		$content = @file_get_contents($filename);
		$str=$content;
		echo $str;
	}
	$myfile = fopen($fileid."_p.txt", "w+") or die("Unable to open file!");
	fwrite($myfile, "no");
	fclose($myfile);
}else
{
	echo "no";
}





?>