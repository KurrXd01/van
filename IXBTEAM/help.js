// menu fitur bot
const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal) => { 
	return `
╔════⊱ *IvAn-BOT* ⊰══════════
║
║ *-GUNAKAN DENGAN BIJAK !!*
║ *-SPAM / TELP / VC BLOKIR !!*
║
║┏━━⊱ ❰ *USER INFO* ❱ ⊰━━
┣⊱  \`\`\`NAMA USER:\`\`\` *${pushname2}*
┣⊱  \`\`\`VERIFICATION:\`\`\` ✅
┣⊱  \`\`\`LIMIT:\`\`\` *${limitt} perhari*
┣⊱  \`\`\`AKTIF:\`\`\` ${kyun(uptime)}
┣⊱  \`\`\`JAM:\`\`\` *${jam} WIB*
┣⊱  \`\`\`TANGGAL:\`\`\` *${tanggal}*
┣⊱  \`\`\`USER TERDAFTAR:\`\`\` *${user.length} User*
┣⊱  \`\`\`PREFIX:\`\`\` *${prefix}*
┣⊱  \`\`\`Melanggar??\`\`\` *Banned + Out Group*
┣⊱  \`\`\`Mau Invite Bot Ke Grupmu?\`\`\`
┣⊱  \`\`\`Ketik\`\`\` *${prefix}sewabot*
┣⊱  \`\`\`Chat Owner Terlebih Dahulu!\`\`\`
║⊱ OWNER: wa.me/6289526565831
║
╠════════════════════
║┏━━⊱ ❰ *𝙖𝙗𝙤𝙪𝙩* ❱ ⊰━━
║➻ *${prefix}report <lapor bug>*
║➻ *${prefix}request <fitur>*
║➻ *${prefix}info*
║➻ *${prefix}infobot*
║➻ *${prefix}botstat*
║➻ *${prefix}donasi*
║➻ *${prefix}sewabot*
║➻ *${prefix}owner*
║➻ *${prefix}profile*
║➻ *${prefix}speed*
║➻ *${prefix}runtime*
║➻ *${prefix}daftar*
║➻ *${prefix}limit*
║➻ *${prefix}totaluser*
║➻ *${prefix}blocklist*
║➻ *${prefix}banlist*
║➻ *${prefix}bahasa*
║➻ *${prefix}update*
╠════════════════════
║┏━━⊱ ❰ *𝙢𝙚𝙣𝙪 ${name}* ❱ ⊰━━
║
║➻ *${prefix}allmenu*
║➻ *${prefix}dsmenu*
║➻ *${prefix}creatormenu*
║➻ *${prefix}grupmenu*
║➻ *${prefix}islammenu*
║➻ *${prefix}funmenu*
║➻ *${prefix}animemenu*
║➻ *${prefix}ownermenu*
║➻ *${prefix}othermenu*
║➻ ~*${prefix}18+menu*~ lock
╠════════════════════
║┏━━⊱ ❰ *${name}* ❱ ⊰━━
╠════════════════════
`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}

// info bot 
const bottt = (prefix) => {
return `*「 INFO BOT 」*

- Dilarang spam/telp/vc !
- Bot aktif 24 jam
- Bot hanya bisa digrup
- Ingin donasi ke BOT? ketik ${prefix}donasi
- Mau invite bot ke grup kamu? Ketik ${prefix}sewabot
- Lapor bug ketik ${prefix}report <bugnya>
- Khusus bikin sticker bisa chat pribadi, langsung kirim foto/video durasi maximum 7 detik dengan caption ${prefix}sticker

*TERIMA KASIH !*`
}
exports.bottt = bottt
// donasi menu
const donasi = (name) => { 
	return `╭─────────────
│ *「 SEWA BOT 」*
│
├≽ *PEMBAYARAN*
│-
│-
│-
│-Dana: 10K
│-Pulsa: 15K
│     
├≽ *DURASI*
│-30 Day
│
│JIKA INGIN SEWA BOT
│Chat Owner BOT :
│wa.me/6289526565831
╰─────────────`
}
exports.donasi = donasi

// bahasa list
const bahasa = (prefix) => {
return `
List Bahasa Untuk Command *${prefix}tts*

  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitend = (pushname2) => {
        return`*maaf ${pushname2} limit hari ini habis*\n*limit di reset setiap jam 12:00 WIB TENGAH MALAM*`
}

const limitcount = (limitCounts) => {
        return`
Limit Kamu: ${limitCounts}
`
}

exports.limitend = limitend
exports.limitcount = limitcount
