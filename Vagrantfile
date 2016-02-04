Vagrant.configure(2) do |config|
  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
  end
  config.vm.box = "ubuntu/vivid64"
  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.provision :shell, path: "setup.sh"
end
