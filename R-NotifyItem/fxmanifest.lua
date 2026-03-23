fx_version 'cerulean'
game 'gta5'

lua54 'yes'
version '1.0.0'

shared_script '@ox_lib/init.lua';

client_scripts {
    "config.lua",
    "core/client.lua"
}
server_scripts {
    "config.lua",
    "core/server.lua"
}
files {
    'dist/index.html',
    'dist/**/*'
}
ui_page 'dist/index.html'