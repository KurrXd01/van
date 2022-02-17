exports.wait = () => {
	return`Sedang di proses...⏳`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.pedo = () => {
	return`*DOSA TANGGUNG SENDIRI YA GAN!*`
}

exports.lvlon = () => {
	return`Leveling siap digunakan !`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUP BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 NOTICE BOT 」*

Hai kak ${pushname}
Kamu belum terdaftar di database Bot!
Silahkan daftar terlebih dahulu.

Cara daftar ketik: #daftar nama|umur
Contoh: #daftar ixb|18`
}

exports.rediregis = () => {
	return`Kamu sudah terdaftar !`
}

exports.stikga = () => {
	return`*Yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`Maaf perintah ini hanya bisa digunakan didalam group!`
}

exports.ownerb = () => {
	return`Maaf perintah ini hanya bisa digunakan oleh owner bot!`
}

exports.ownerg = () => {
	return`Maaf perintah ini hanya bisa digunakan oleh owner group!`
}

exports.admin = () => {
	return`Maaf perintah ini hanya bisa digunakan oleh admin group!`
}

exports.badmin = () => {
	return`Maaf perintah ini hanya bisa digunakan ketika bot menjadi admin!`
}

exports.nsfwoff = () => {
	return`*NSFW TIDAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner, Laporan palsu atau main² tidak akan ditanggapi.*`
}

exports.wrongf = () => {
	return`Format salah!

Kirim: ${prefix}daftar nama|umur

Contoh: ${prefix}daftar Ixb|20`
}

exports.clears = () => {
	return`*Clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nUntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`╭━━━━❰･❉PENDAFTARAN USER❉･❱━━━
├≽ Serial User:
├ ${serialUser}
├≽ [Nama]: ${namaUser}
├≽ [Nomor]: wa.me/${sender.split("@")[0]}
├≽ [Umur]: ${umurUser}
╰━━━━❰･❉IXB-BOT❉･❱━━━━`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`*「 LEVEL UP 」*

➤ Nama : ${pushname}
➤ Nomer : ${sender.split("@")[0]}
➤ Xp : ${getLevelingXp(sender)}
➤ Limit :  +3
➤ Pangkat : ${role}
➤ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}`}
 
exports.limitend = (pushname) => {
	return`*「 LIMIT STATUS 」*

Hai kak *${pushname}!*
Kuota limit kamu sudah habis!
	
Untuk membeli limit silahkan ketik: ${prefix}buylimit`
}

exports.limitcount = (limitCounts, pushname) => {
	return`*「 FREE LIMIT 」*
           
◪ *USER FREE*
├─ *Name :* ${pushname}
├─ *User :* Free
└─ *Limit :* 「 ${limitCounts} 」
Limit habis? ketik: ${prefix}buylimit
Harga per limit = 500
Pastikan sebelum membeli cek ATM kamu terlebih dahulu.
Ketik ${prefix}atmku`}

exports.satukos = () => {
	return`Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ *ATM*
├─ ❏ *Name* : ${pushname}
├─ ❏ *Nomor* : ${sender.split("@")[0]}
└─ ❏ *Uang* : ${uangkau}
`}
