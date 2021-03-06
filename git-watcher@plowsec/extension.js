const St = imports.gi.St;
const Main = imports.ui.main;
const Lang = imports.lang;
const Tweener = imports.ui.tweener;
const Mainloop = imports.mainloop;
const Util = imports.misc.util;
const WATCH_INTERVAL = 60;
const CMD_PATH = 'git-dude';
const REPOS_DIR = '~/.git-dude'; //may be overwritten in git-dude

let button;
let timeout = null;

function launch()   {
    refresh();
}

function callGitDude()   {
    Util.spawn([CMD_PATH, REPOS_DIR]);
}

function removeTimeout() {
    if (timeout) {
        Mainloop.source_remove(timeout);
        timeout = null;
    }
}

function refresh() {
    callGitDude();
    removeTimeout();
    timeout = Mainloop.timeout_add_seconds(WATCH_INTERVAL, Lang.bind(this, refresh));
    return true;
}

function init() {
    button = new St.Bin({ style_class: 'panel-button',
        reactive: true,
        can_focus: true,
        x_fill: true,
        y_fill: false,
        track_hover: true });
    let icon = new St.Icon({ icon_name: 'system-run-symbolic',
        style_class: 'system-status-icon' });

    button.set_child(icon);
    button.connect('button-press-event', launch);

    //launch the loop
    refresh();
}

function enable() {
    Main.panel._rightBox.insert_child_at_index(button, 0);
}

function disable() {
    Main.panel._rightBox.remove_child(button);
}
