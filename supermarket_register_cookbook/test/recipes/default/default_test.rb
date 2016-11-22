# # encoding: utf-8

# Inspec test for recipe supermarket_register::default

# The Inspec reference, with examples and extensive documentation, can be
# found at https://docs.chef.io/inspec_reference.html

describe package 'nginx' do
  it { should be_installed }
end

describe service 'nginx' do
  it { should be_enabled }
  it { should be_running }
end

describe port 80 do
    it {should be_listening}
end