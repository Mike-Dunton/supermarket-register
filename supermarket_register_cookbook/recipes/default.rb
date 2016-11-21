#
# Cookbook Name:: supermarket_register
# Recipe:: default
#
# Copyright (c) 2016 The Authors, All Rights Reserved.

include_recipe 'selinux::permissive'
include_recipe 'supermarket_register::firewall'
include_recipe 'supermarket_register::web'