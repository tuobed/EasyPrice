<?php

	unlink('/tmp/test.txt');
                $conn = mysql_connect ("localhost", "root", "pfepfe");
                mysql_select_db ("EasyPrice",$conn);
                echo '<Connexion terminée. ...>'."\r\n";
                echo '<Debut du transfert ...>'."\r\n"; 
        $sql = "SELECT * FROM JEUX INTO OUTFILE '/tmp/suivi.txt' FIELDS TERMINATED BY '|';";
        echo '<Fin du transfert ...>'."\r\n";
                mysql_query ($sql) or die ('Erreur SQL !'.$sql.'<br />'.mysql_error());
                mysql_close();
                echo '<Fin de connexion ...>'."\r\n";
   
?>
