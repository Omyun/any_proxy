<?php
$fileid = @$_GET['fileid'];
$myfile = fopen($fileid."_p.txt", "w+") or die("Unable to open file!");
fwrite($myfile, "no");
fclose($myfile);
echo "完毕";
?>