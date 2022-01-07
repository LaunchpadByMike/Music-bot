module.exports = {
    app: {
        px: '!',
        token: 'OTI4NjA1MjY5ODI1NTY0NzAy.YdbNDA.KR65ggEDXRNDyEQQRixEZt2XBec',
        playing: 'with music ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
