apt-get update -y && apt-get install git wget
cd /tmp
wget https://nodejs.org/dist/v4.4.4/node-v4.4.4-linux-x64.tar.xz
mkdir node
tar xvf node-v*.tar.?z --strip-components=1 -C ./node
rm -rf node-v*
mkdir node/etc
echo 'prefix=/usr/local' > node/etc/npmrc
mv node /opt/
chown -R root: /opt/node
ln -s /opt/node/bin/node /usr/local/bin/node
ln -s /opt/node/bin/npm /usr/local/bin/npm