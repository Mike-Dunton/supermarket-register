#
# Cookbook Name:: supermarket_register_cookbook
# Recipe:: config_app
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

directory node['web_application']['location'] do
  owner node['nginx']['user']
  group node['nginx']['group']
  mode '0755'
  recursive true
end

template '/etc/nginx/sites-available/webApplication' do
  source 'webApplication.nginx.erb'
end

remote_file '/tmp/webApplication.tar.gz' do
  source node['web_application']['download_location']
end

execute 'extract_application_files' do
  command "tar xzvf webApplication.tar.gz -C #{node['web_application']['location']}"
  cwd '/tmp'
  notifies :restart, 'service[nginx]', :delayed
end

nginx_site 'webApplication'
