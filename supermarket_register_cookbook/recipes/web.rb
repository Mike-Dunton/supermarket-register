#
# Cookbook Name:: supermarket_register_cookbook
# Recipe:: web
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

include_recipe 'nginx'

directory node['web_application']['location'] do
  owner node['nginx']['user']
  group node['nginx']['group']
  mode '0755'
end

template '/etc/nginx/sites-available/webApplication' do
  source 'webApplication.nginx.erb'
end

nginx_site 'webApplication'
