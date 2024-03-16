# Set up Jenkins
sudo wget -O /usr/share/keyrings/jenkins-keyring.asc \
  https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt-get update
sudo apt-get install jenkins
sudo systemctl enable jenkins
sudo systemctl start jenkins

* fix loi: https://stackoverflow.com/questions/41591808/how-can-i-reset-the-password-of-jenkins

sonarqube:
admin
ftp001@


# Config docker
sudo chmod 66 /var/run/docker.sock

# nexus
ftp002@
