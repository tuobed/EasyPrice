
#!/usr/bin/perl -w
use strict;
use warnings;


print "Nom du Jeu : $ARGV[0]\n";
my $arg1 = $ARGV[0];

system "rm $arg1.html";
system "rm prix$arg1.txt";
system "rm prixliste$arg1.txt";
system "rm prixligne$arg1.txt";
system "rm prix2$arg1.txt";
system "rm prix2-ligne$arg1.txt";
system "rm prix20$arg1.txt";
