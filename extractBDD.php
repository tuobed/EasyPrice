<?php
	unlink('/tmp/suivi.txt');
                $conn = mysql_connect ("localhost", "root", "pfepfe");
                mysql_select_db ("EasyPrice",$conn);
                echo '<Connexion terminée. ...>'."\r\n";
                echo '<Debut du transfert ...>'."\r\n"; 
        $sql = "SELECT * FROM JEUX INTO OUTFILE '/tmp/suivi.txt' FIELDS TERMINATED BY '|';";
        echo '<Fin du transfert ...>'."\r\n";
                mysql_query ($sql) or die ('Erreur SQL !'.$sql.'<br />'.mysql_error());
                mysql_close();
                echo '<Fin de connexion ...>'."\r\n";

$homepage = file_get_contents('/tmp/suivi.txt');
echo $homepage;
$homepage2 = file_get_contents('/tmp/suivi2.txt');
echo $homepage2;
if ($homepage != $homepage2) {
echo "OK ça marche\n";
unlink('/tmp/suivi2.txt');
rename("/tmp/suivi.txt" , "/tmp/suivi2.txt");
}

?>
