#
# Cookbook Name:: supermarket_register_cookbook
# Recipe:: web
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

include_recipe 'nginx'

template '/etc/nginx/sites-available/webApplication' do 
    source 'webApplication.nginx.erb'
end

nginx_site 'webApplication'