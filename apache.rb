package 'httpd' do
package_name 'apache2'
end

service 'apache2' do
action [:start, :enable]
end

