# git-watcher
Dead simple GNOME extension wrapper around git-dude.

Because launching git-dude (or everything GUI related as simple as notify-send) from terminal at startup with sysctl or cronie was too much hassle (despite 'eval "export $(egrep -z DBUS_SESSION_BUS_ADDRESS /proc/$(pgrep -u $LOGNAME gnome-session)/environ)"; /bin/git-dude ~/.git-dude'), I decided this would make an awesome GNOME extension.

# Install
* The modified git-dude must be in your path
* extension folder must be in ~/.local/share/gnome-shell/extensions

# Thanks
* https://github.com/sickill/git-dude

# What was done
* gnome-shell-extension-tool --create-extension
* Clean up
* Add timer
* Shell command
* Removed screensaver and timer features from git-dude
