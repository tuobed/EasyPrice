<?php

echo "Nom du jeux à déplacer vers l'historique : $argv[1]\n";

                $conn = mysql_connect ("localhost", "root", "pfepfe");
                mysql_select_db ("EasyPrice",$conn);
                echo '<Connexion terminée. ...>'."\r\n";
                echo '<Changement de Base des enregistrements ...>'."\r\n";
        $sql = "INSERT INTO HISTORIQUE SELECT * FROM PRICE WHERE GAMENAME = '$argv[1]'";
	echo '$sql\n';
        echo '<Fin du transfert ...>'."\r\n";
                mysql_query ($sql) or die ('Erreur SQL !'.$sql.'<br />'.mysql_error());
                mysql_close();
                echo '<Fin de connexion ...>'."\r\n";






echo "Nom du jeux à supprimer de la table prix : $argv[1]\n";

                $conn = mysql_connect ("localhost", "root", "pfepfe");
                mysql_select_db ("EasyPrice",$conn);
                echo '<Connexion terminée. ...>'."\r\n";
                echo '<Changement de Base des enregistrements ...>'."\r\n";
        $sql = "DELETE FROM `PRICE` WHERE GAMENAME = 'CS'";
        echo '$sql\n';
        echo '<Fin du transfert ...>'."\r\n";
                mysql_query ($sql) or die ('Erreur SQL !'.$sql.'<br />'.mysql_error());
                mysql_close();
                echo '<Fin de connexion ...>'."\r\n";

?>
