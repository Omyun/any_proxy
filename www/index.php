
<?php
#$data =print_r($_GET,true);
function inputx($name,$data)
{
	$myfile = fopen($name.".txt", "w+") or die("Unable to open file!");
	fwrite($myfile, $data."\n");
	fclose($myfile);
	$myfile = fopen($name."_p.txt", "w+") or die("Unable to open file!");
	fwrite($myfile, "ok");
	fclose($myfile);
}
function runx($name)
{
	
	$data = @$_GET[$name];
	$data = base64_decode($data);
	if (strpos($data,"php131310")>0)
	{
		echo "0";
	}else{
			inputx($name,$data);
	}
	
}
function jingdong($name)
{
	
	$deviceToken = $_GET['deviceToken'];
	$traceId = $_GET['traceId'];
	
	$jd = '{"deviceToken":"'.$deviceToken.'","traceId": "'.$traceId.'"}';
	inputx($name,$jd);


}
if (@$_GET['meituan'] != '')
{
	runx('meituan');
}
if (@$_GET['meituan_home'] != '')
{
	runx('meituan_home');
}
if (@$_GET['elm'] != '')
{
	runx('elm');
}
if (@$_GET['jingdong'] != '')
{
	jingdong('jingdong');
}



?>