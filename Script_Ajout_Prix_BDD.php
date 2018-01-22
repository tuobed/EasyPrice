<?php

echo "Nom du jeux à entrer en BDD : $argv[1]\n";
$handle = @fopen("f1$argv[1].txt", "r");
echo "f1$argv[1].txt";
if ($handle) {
    while (($buffer = fgets($handle, 4096)) !== false) {
                $conn = mysql_connect ("localhost", "root", "pfepfe");
                mysql_select_db ("EasyPrice",$conn);
                echo '<Connexion terminée. ...>'."\r\n";
                echo '<Debut du transfert ...>'."\r\n";
        $words= explode("|",$buffer);
        echo $buffer;
        $sql = "INSERT INTO PRICE (GAMENAME, SELLERNAME, KEYTYPE, PRICE, REPUTATION, DATE) VALUES('$argv[1]','$words[0]','$words[2]','$words[3]',$words[1],CURDATE())";
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
