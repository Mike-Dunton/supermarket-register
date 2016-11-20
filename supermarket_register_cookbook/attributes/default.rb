default['firewall']['allow_ssh'] = true

default['web_application']['open_ports'] = 80
default['web_application']['user'] = 'web_admin'
default['web_application']['group'] = 'web_admin'
default['web_application']['host'] = 'supermarket.michaeldunton.com'
default['web_application']['location'] = '/var/www/web_application'

default['nginx']['default_site_enabled'] = false