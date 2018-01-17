<?php
$handle = @fopen("testAyc.txt", "r");
if ($handle) {
    while (($buffer = fgets($handle, 4096)) !== false) {
                $conn = mysql_connect ("localhost", "root", "pfepfe");
                mysql_select_db ("EasyPrice",$conn);
                echo '<Connexion terminée. ...>'."\r\n";
                echo '<Debut du transfert ...>'."\r\n";
        $words= explode("|",$buffer);
        echo $buffer;
        $sql = "INSERT INTO PRICE (GAMENAME, SELLERNAME, KEYTYPE, PRICE, REPUTATION, NEEDUPDATE, DATE) VALUES('$words[0]','$words[1]','$words[2]','$words[3]',$words[4],$words[5],CURDATE())";
        echo '<Fin du transfert ...>'."\r\n";
                mysql_query ($sql) or die ('Erreur SQL !'.$sql.'<br />'.mysql_error());
                mysql_close();
                echo '<Fin de connexion ...>'."\r\n";
                }
    if (!feof($handle)) {
        echo "Erreur: fgets() a échoué\n";
    }
    fclose($handle);
}
?>
