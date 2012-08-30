<?php
$arrNode = array();
$arrNode[] = array("id" => 0, "orgType" => 0, "orgName" => "厂商s", "saleAccount" => 60, "salePer" => "19%", "spid" => null);
$arrNode[] = array("id" => 1, "orgType" => 1, "orgName" => "一级商s", "saleAccount" => 70, "salePer" => "56.8%", "spid" => "primarysale");
$arrNode[] = array("id" => 2, "orgType" => 2, "orgName" => "二级商s", "saleAccount" => 80, "salePer" => "89.4%", "spid" => "secondsale");
$arrRe = array("month" => 7, "data" => $arrNode);
echo(json_encode($arrRe));
