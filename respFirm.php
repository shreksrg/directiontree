<?php
/**
 * Created by JetBrains PhpStorm.
 * User: shiruigang
 * Date: 12-8-30
 * Time: 下午1:43
 * To change this template use File | Settings | File Templates.
 */

$arrProduct = array();
$arrPercent = array();

for ($i = 0; $i <= 5; $i++) {
    //  $level++;
    $percent = rand(1, 20);
    $arrSum = array_sum($arrPercent);
    while ($arrSum + $percent > 100) {
        $percent = rand(0, 50);
    }
    $arrPercent[] = $percent;
    $arrProduct[] = array("productName" => "药品名$i", "salePer" => $percent);
}


//$arrProduct = array(array("productName" => "药品名1", "salePer" => "30"), array("productName" => "药品名2", "salePer" => "10"), array("productName" => "药品名3", "salePer" => "20"), array("productName" => "药品名4", "salePer" => "30"), array("productName" => "药品名5", "salePer" => "30"));
//$arrRe = array("product" => $arrProduct, "org" => $arrOrg);

echo(json_encode($arrProduct));


