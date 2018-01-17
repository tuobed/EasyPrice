#!/usr/bin/perl
use strict;
use warnings;

open FILE, "< test.txt" or die "toto.txt n'existe pas !\n"; 
#print "TKI\n";
while (my $ligne = <FILE>)
{
my @fields = split /\|/, $ligne;
my $jeu = $fields[0];
my $adresse = $fields[1];
$adresse =~ s/\n//g;
#print "TPD\n";
#print "Jeu :-$jeu-\n";
#print "Adresse :-$adresse-\n";
system("perl V2.pl $jeu $adresse &");
sleep(5);
}
close FILE;


