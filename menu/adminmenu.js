const adminmenu = (prefix, Laporowner) => { 
	return `
╭───────────────────
│ *「 Admin Menu 」*
│
│ Owner: wa.me/${Laporowner}
├──────────────────
│  
│➻ ${prefix}giftlimit  @tag jumlah
│➻ ${prefix}bcc
│➻ ${prefix}bann  @tag
│➻ ${prefix}unbann  @tag
│➻ ${prefix}blockk  @tag
│➻ ${prefix}unblockk  @tag
╰──────────────────
`
}
exports.adminmenu = adminmenu