/**
   * Create By Dinesh Valor
   * Contact Me on wa.me/919107910799
   * Follow https://github.com/DineshValor
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'd5fb04bbf537',
}

// Other
global.owner = ['919107910799']
global.packname = 'Valor Bot'
global.author = 'Dinesh Valor'
global.sessionName = 'session.data'
global.prefa = ['','!','@','#','/','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'Bot Owner Special Features',
    group: 'Features Used Only For Group!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Bot Number User Special Features',
    wait: 'Loading...',
}
global.thumb = fs.readFileSync('./lib/valor.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
