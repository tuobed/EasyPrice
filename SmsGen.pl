#!/usr/bin/perl -w
 
use strict;
use warnings;
use Net::Curl::Easy qw(/^CURLOPT_.*/);;
use JSON;
use Data::Dumper;




my $arg1 = $ARGV[0];
my $arg2 = $ARGV[1];

print "Article : $arg1\n";
print "Changement : $arg2\n";
sub SendNotification
{
    my ($url , $authorisation , $app_id , $contents) = @_;
    my $curl = Net::Curl::Easy->new;
    my $json = JSON->new();
    my $response_body;
 
    my $json_string = $json->encode({ app_id => $app_id ,
                                      included_segments => ["All"] ,
                                      contents => { en => $contents}
                                    });
 
    $curl->setopt( CURLOPT_URL, $url);
    $curl->setopt( CURLOPT_SSL_VERIFYHOST , 0);
    $curl->setopt( CURLOPT_SSL_VERIFYPEER , 0);
 
    $curl->setopt( CURLOPT_HTTPHEADER, ['Content-Type: application/json; charset=utf-8' ,
                                        "Authorization: Basic $authorisation"]);
    $curl->setopt( CURLOPT_POST , 1);
    $curl->setopt( CURLOPT_POSTFIELDS , $json_string);
 
    $curl->setopt( CURLOPT_WRITEDATA , \$response_body);
 
    $curl->perform;
    print Dumper($response_body);
}
 
SendNotification("https://onesignal.com/api/v1/notifications" ,
                 "N2Q0NjU2NmItNWQyZS00YWIyLWJlYWYtZjgyYmU1NjExZTFm" ,
                 "875d2830-9242-4218-b6a8-4bf1d82990a3" ,
                 "$arg2 de prix sur $arg1");
 
exit(0);
