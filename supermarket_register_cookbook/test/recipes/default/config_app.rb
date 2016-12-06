# # encoding: utf-8

# Inspec test for recipe supermarket_register_cookbook::config_app

# The Inspec reference, with examples and extensive documentation, can be
# found at https://docs.chef.io/inspec_reference.html


describe file('/tmp/webApplication.tar.gz') do
  it { should be_file }
end

##TODO Update this value to get from attributes...Test kitchen helper
describe file('/var/www/web_application') do
  it { should be_directory }
end


describe file('/etc/nginx/sites-available/webApplication') do
  it { should be_file }
end
