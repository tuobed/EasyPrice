#!/usr/bin/perl -w
use strict;
use warnings;


my $msg;
my $text;
my $pp=100;
my $align=0;
my $stop=0;
print "Nom du Jeu : $ARGV[0]\n";
print "URL du jeu : $ARGV[1]\n";
my $arg1 = $ARGV[0];
my $arg2 = $ARGV[1];

BEGIN:	
#On recupere la page web avec les prix
system("phantomjs save_page.js $arg2 > $arg1.html");
sleep(6);


#Ensuite on creer notre fichier texte avec le prix et le nom des joueurs : c'était B2 le second grep
system "w3m -dump $arg1.html | grep -B4 % | grep -B1 \"^( )   \" | grep -v \"-\" > prix$arg1.txt";
sleep(6);


#On creer ensuite un autre fichier avec juste les prix
system("cat prix$arg1.txt  | grep -o '.[0-9]\,[0-9][0-9]' > prixliste$arg1.txt");
sleep(6);

#Lecture du fichier
system("perl -pe 's/\n/ /g' prixliste$arg1.txt > prixligne$arg1.txt");

my $p1 = `cat prixligne$arg1.txt | cut -c1-5 | sed 's/ //g'`;
my $p2 = `cat prixligne$arg1.txt | cut -c7-11 | sed 's/ //g'`;
my $p3 = `cat prixligne$arg1.txt | cut -c13-17 | sed 's/ //g'`;
my $p4 = `cat prixligne$arg1.txt | cut -c19-23 | sed 's/ //g'`;
print "Nom du Jeu : $ARGV[0]\n";
#print "$p1 , $p2 , $p3 , $p4\n";
#$text=`cat prix.txt `;

#$text=`cat prix.txt | cut -c10-40 | head -n 5`;

system("cat prix$arg1.txt | cut -c10-40 | head -n 5 > prix2$arg1.txt");
system("perl -pe 's/\n/ /g' prix2$arg1.txt > prix2-ligne$arg1.txt");
system("perl -pe 's/  */%20/g' prix2-ligne$arg1.txt > prix20$arg1.txt");
$text=`cat prix20$arg1.txt`;


chomp $p1;
chomp $p2;
chomp $p3;
chomp $p4;

print "$p1 , $p2 , $p3 , $p4\n";

if ($p1 eq "") {
	print "LA VARIABLE EST VIDE\n";
	goto FIN;
}


                        if ($stop eq 0) {
                        $stop = 1;
			$pp = $p1;
			$align = 1;
			system("perl format.pl $arg1");
			system("php historise.php $arg1");
			system("php Script_Ajout_Prix_BDD.php $arg1");
			system("perl SmsGen.pl $arg1 Lancement");
                        goto FIN;
}



if ($p1 ne $pp) {
				if ($p1 gt $pp) {
				$pp = $p1;
				$align = 0;
				system('system("perl SmsGen.pl $arg1 Hausse");');
				 goto FIN;
			 
				}
				if ($p1 lt $pp) {
				$pp= $p1;
				$align = 0;
				system("perl SmsGen.pl $arg1 Baisse");
				goto FIN;
				}



}


if ($p1 eq $pp) {
			if ($p1 eq $p2) {
			if ($align eq 0) {
			$align = 1;
			system("perl SmsGen.pl $arg1 Alignement");
			goto FIN;
		
			}
			
			}




}

FIN:


goto BEGIN;
