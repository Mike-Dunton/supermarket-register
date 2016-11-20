#
# Cookbook Name:: supermarket_register
# Recipe:: web_user
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

group node['web_application']['group']

user node['web_application']['user'] do
    group node['web_application']['group']
    system true
    shell '/bin/bash'
end