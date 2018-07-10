# raspberry-pi-studio-clock

Super simple studio clock for raspberry pi

### Setup

- curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
- sudo apt-get install -y nodejs
- sudo npm install -g pm2
- sudo pm2 startup systemd -u pi
- sudo apt-get update && sudo apt-get upgrade -y
- sudo apt-get install chromium-browser x11-xserver-utils unclutter

- sudo nano /home/pi/.config/lxsession/LXDE-pi/autostart
```
# @xscreensaver -no-splash
@xset s off
@xset -dpms
@xset s noblank
@sed -i 's/"exited_cleanly": false/"exited_cleanly": true/' ~/.config/chromium/$
@export DISPLAY=:0
@pm2 start /home/pi/Desktop/clock/server.js
@chromium-browser --incognito --kiosk --noerrdialogs --disable-translate --disable-cache --disk-cache-dir=/dev/null --disk-cache-size=1 --app=http://localhost:8080
```

- sudo nano /boot/config.txt
```
avoid_warnings=1
```


credits:
Digital-7 font by Sizenko Alexander (Style-7)