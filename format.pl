#!/usr/bin/perl -w
use strict;
use warnings;


print "Nom du Jeu : $ARGV[0]\n";
my $arg1 = $ARGV[0];


system "sed 's/Cadeau Steam/Gift/g' prix$arg1.txt>f2$arg1.txt";
system "sed 's/( )//g' f2$arg1.txt>f1$arg1.txt";
system "sed 's/ /|/g' f1$arg1.txt>f2$arg1.txt";
system "sed 's/||/|/g' f2$arg1.txt>f1$arg1.txt";
system "sed 's/||/|/g' f1$arg1.txt>f2$arg1.txt";
system "sed 's/||/|/g' f2$arg1.txt>f1$arg1.txt";
system "sed 's/||/|/g' f1$arg1.txt>f2$arg1.txt";
system "sed 's/||/|/g' f2$arg1.txt>f1$arg1.txt";
system "sed 's/|€|/|/g' f1$arg1.txt>f2$arg1.txt";
system "sed 's/|key/ key/g' f2$arg1.txt>f1$arg1.txt";
system "sed 's/%|/|/g' f1$arg1.txt>f2$arg1.txt";
system "sed ':a;N;\$!ba;s/\\n//g' f2$arg1.txt>f1$arg1.txt";
system "sed 's+||+\\n+g' f1$arg1.txt>f2$arg1.txt";
system "sed '1s/^.//' f2$arg1.txt>f1$arg1.txt";
#sed -i -e "s/,/./g" f1CS.txt
#sed -i -e "s/Digital key/Digital/g" f1CS.txt
system "sed 's/,/./g' f1$arg1.txt>f2$arg1.txt";
system "sed 's/Digital key/Digital/g' f2$arg1.txt>f1$arg1.txt";
