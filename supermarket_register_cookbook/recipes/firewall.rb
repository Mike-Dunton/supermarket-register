#
# Cookbook Name:: supermarket_register
# Recipe:: firewall
#
# Copyright (c) 2016 The Authors, All Rights Reserved.
include_recipe 'firewall::default'

ports = node['web_application']['open_ports']
firewall_rule "open ports #{ports}" do 
    port ports
end