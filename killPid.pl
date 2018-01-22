#!/usr/bin/perl
use strict;
use warnings;

system "ps > pid.txt";
system "sed 's/ /;/g' pid.txt>pid2.txt";


open FILE, "< pid2.txt" or die "pid2.txt n'existe pas !\n"; 
while (my $ligne = <FILE>)
{
my @fields = split /;/, $ligne;
my $jeu = $fields[1];
print "Jeu :$jeu\n";
if ($fields[1] ne "") {
   system("kill $fields[1]");
}
#sleep(5);
}
close FILE;


