"use strict";(globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[]).push([[233],{2417:(a,e,t)=>{t.d(e,{DL:()=>A,GG:()=>C,Pi:()=>x,Q9:()=>B,R7:()=>j,RR:()=>R,Ry:()=>L,YR:()=>H,bl:()=>O,ej:()=>T,hc:()=>F,kY:()=>E,nE:()=>U,ov:()=>K,pK:()=>P,r6:()=>D,tg:()=>s,wX:()=>q});const l="true",n="TEST",s="3Test2tseT9",i="TEST",r="aufgehtsscf@gmail.com",o="Freiburg",c="SCF",u="Wer reserviert Plätze (<HH>:<MM>): <WHO_RESERVES_PLACES>",g="Email",m="aufgehtsscf@gmail.com",p="mailto:aufgehtsscf@gmail.com",v="Facebook",b="facebook.com/aufgehtsscf",_="https://www.facebook.com/profile.php?id=100094586599908",d="",h="",f="",k="",w="",y="",S="",M="",W="",B="https://script.google.com/macros/s/AKfycbzekarajVCLH-xMBkO7_M0D-MHV1e-2bvXfN-N8BJMaHsc_RhnZNTw4Ctt_4OOVwMLkBA/exec",U="https://script.google.com/macros/s/AKfycbzo1RuM5zOC_1kkUBRJB4tbMKZNgVZ65KTGdm76wyBTB9F_FQLFs8vt3Nh16xwDwChOuA/exec",C="https://script.google.com/macros/s/AKfycby5QLG3Ri_vpENUrwSNtyBR3L8j_AR9_ly4eRKwTHSLaCdgFfPmnEuvPEKX085oJEAwlg/exec",L="https://script.google.com/macros/s/AKfycbwDcHzzr6JqZoENUjRAe1OXY3YCOLsqYMwVbDfdOlYFIjqNJ6lTWuVcYWh_wc99gsv_8A/exec",H="https://script.google.com/macros/s/AKfycbwi7JYV_w0u7KoYw-CUio5HWGrLPvIxRqHybNn4DdgQfOLeGfm3Ufb3IlunmgQq-zFV/exec",D="https://script.google.com/macros/s/AKfycbyj3smDP7m9csheRg0c6n00u0Rb2CczULz8C8lAibkv_gBjiqfkfOZdOP9etSVMDMtL/exec",P="https://script.google.com/macros/s/AKfycbyG0TbbSD0eRYIZeXUUFI8DEMV6-Hn670Hq_9AhC9RevynXtRVYNNw4gKczGu07cPlc/exec?sh=Properties",A="https://script.google.com/macros/s/AKfycbz0cWknDb0ACTYRUCqUE9cIOkU2GV460W8Mhz6VyDKELQc9cLbjnwGrP3wRwlRHJnYBEA/exec?sh="+n,T=function(a){const e=a+"=",t=decodeURIComponent(document.cookie),s=t.split(";");for(let l=0;l<s.length;l++){let a=s[l];while(" "===a.charAt(0))a=a.substring(1);if(0===a.indexOf(e))return a.substring(e.length,a.length)}return"isAdministrator"===a?l:"applicationCode"===a?n:"clientName"===a?i:"email"===a?r:"homeTeam"===a?o:"homeTeamAlias"===a?c:"standardText"===a?u:"titleUrl1"===a?g:"captionUrl1"===a?m:"linkUrl1"===a?p:"titleUrl2"===a?v:"captionUrl2"===a?b:"linkUrl2"===a?_:"titleUrl3"===a?d:"captionUrl3"===a?h:"linkUrl3"===a?f:"titleUrl4"===a?k:"captionUrl4"===a?w:"linkUrl4"===a?y:"titleUrl5"===a?S:"captionUrl5"===a?M:"linkUrl5"===a?W:void 0},E=function(a){let e="";if("BGB"===a||"TEST"===a)return a;if(12===a.length){if(a.indexOf("_")>0){const t=a.split("_");8===t[0].length&&parseInt(t[1])>=329&&(e=t[1].substring(0,1)+t[0].substring(0,4)+t[1].substring(1,2)+t[0].substring(4,8)+t[1].substring(2,t[1].length))}}else 11===a.length&&(e=a);return e},K=function(a){let e="";if(12===a.length){if(a.indexOf("_")>0){const t=a.split("_");8===t[0].length&&parseInt(t[1])>=329&&(e=a)}}else 11===a.length&&(e=a.substring(1,5)+a.substring(6,10)+"_"+a.substring(0,1)+a.substring(5,6)+a.substring(10,a.length));return e},j=function(a){return"statics/images/"+a+"/Logo.png"},q=function(a,e,t){return""===e?"statics/avatars/collection/Placeholder.png":t?"statics/avatars/"+a+"/"+e+".png":"statics/avatars/collection/"+e+".png"},R=function(a){let e=this.teamImages.find((e=>e.value===a))?.image;return"undefined"===typeof e&&(e="statics/teams/QuestionMark.png"),e},x=function(a){return a.toLowerCase().indexOf("test")>=0?"statics/teams/Test.png":"statics/teams/Event.png"},F=[{label:"Arminia",value:"Arminia_Bielefeld",image:"statics/teams/Arminia_Bielefeld.png"},{label:"Augsburg",value:"Augsburg",image:"statics/teams/Augsburg.png"},{label:"Bayern",value:"Bayern_München",image:"statics/teams/Bayern_München.png"},{label:"Bochum",value:"Bochum",image:"statics/teams/Bochum.png"},{label:"Braunschweig",value:"Eintracht_Braunschweig",image:"statics/teams/Eintracht_Braunschweig.png"},{label:"Darmstadt",value:"Darmstadt",image:"statics/teams/Darmstadt.png"},{label:"DFB Pokal",value:"DFB_Pokal",image:"statics/teams/DFB_Pokal.png"},{label:"Dortmund",value:"Borussia_Dortmund",image:"statics/teams/Borussia_Dortmund.png"},{label:"Frankfurt",value:"Eintracht_Frankfurt",image:"statics/teams/Eintracht_Frankfurt.png"},{label:"Fortuna Düsseldorf",value:"Fortuna_Düsseldorf",image:"statics/teams/Fortuna_Düsseldorf.png"},{label:"Freiburg",value:"Freiburg",image:"statics/teams/Freiburg.png"},{label:"Greuther Fürth",value:"Greuther_Fürth",image:"statics/teams/Greuther_Fürth.png"},{label:"Hamburger SV",value:"Hamburger_SV",image:"statics/teams/Hamburger_SV.png"},{label:"Hannover",value:"Hannover",image:"statics/teams/Hannover.png"},{label:"Hansa Rostock",value:"Hansa_Rostock",image:"statics/teams/Hansa_Rostock.png"},{label:"Heidenheim",value:"Heidenheim",image:"statics/teams/Heidenheim.png"},{label:"Hertha",value:"Hertha",image:"statics/teams/Hertha.png"},{label:"Hoffenheim",value:"Hoffenheim",image:"statics/teams/Hoffenheim.png"},{label:"Holstein",value:"Holstein",image:"statics/teams/Holstein.png"},{label:"Jahn Regensburg",value:"Jahn_Regensburg",image:"statics/teams/Jahn_Regensburg.png"},{label:"Juventus Turin",value:"Juventus_Turin",image:"statics/teams/Juventus_Turin.png"},{label:"Kaiserslautern",value:"Kaiserslautern",image:"statics/teams/Kaiserslautern.png"},{label:"Karlsruher",value:"Karlsruher",image:"statics/teams/Karlsruher.png"},{label:"Köln",value:"Köln",image:"statics/teams/Köln.png"},{label:"Leipzig",value:"Leipzig",image:"statics/teams/Leipzig.png"},{label:"Leverkusen",value:"Bayer_Leverkusen",image:"statics/teams/Bayer_Leverkusen.png"},{label:"Magdeburg",value:"Magdeburg",image:"statics/teams/Magdeburg.png"},{label:"Mainz",value:"Mainz",image:"statics/teams/Mainz.png"},{label:"Mönchengladbach",value:"Borussia_Mönchengladbach",image:"statics/teams/Borussia_Mönchengladbach.png"},{label:"Nürnberg",value:"Nürnberg",image:"statics/teams/Nürnberg.png"},{label:"Oberachern",value:"Oberachern",image:"statics/teams/Oberachern.png"},{label:"Olympiakos Piräus",value:"Olympiakos_Piräus",image:"statics/teams/Olympiakos_Piräus.png"},{label:"Paderborn",value:"Paderborn",image:"statics/teams/Paderborn.png"},{label:"Sandhausen",value:"Sandhausen",image:"statics/teams/Sandhausen.png"},{label:"Schalke",value:"Schalke",image:"statics/teams/Schalke.png"},{label:"St. Pauli",value:"St._Pauli",image:"statics/teams/St._Pauli.png"},{label:"Stuttgart",value:"Stuttgart",image:"statics/teams/Stuttgart.png"},{label:"Union Berlin",value:"Union_Berlin",image:"statics/teams/Union_Berlin.png"},{label:"Werder Bremen",value:"Werder_Bremen",image:"statics/teams/Werder_Bremen.png"},{label:"Wolfsburg",value:"Wolfsburg",image:"statics/teams/Wolfsburg.png"}],O=[{label:"Abraham Simpson",value:"Abraham_Simpson",avatar:"statics/avatars/collection/Abraham_Simpson.png"},{label:"Alien",value:"Alien",avatar:"statics/avatars/collection/Alien.png"},{label:"Ariel",value:"Ariel",avatar:"statics/avatars/collection/Ariel.png"},{label:"Barney Gumble",value:"Barney_Gumble",avatar:"statics/avatars/collection/Barney_Gumble.png"},{label:"Bart Simpson",value:"Bart_Simpson",avatar:"statics/avatars/collection/Bart_Simpson.png"},{label:"Charlie Brown",value:"Charlie_Brown",avatar:"statics/avatars/collection/Charlie_Brown.png"},{label:"Charlie Chaplin",value:"Charlie_Chaplin",avatar:"statics/avatars/collection/Charlie_Chaplin.png"},{label:"Clancy Wiggum",value:"Clancy_Wiggum",avatar:"statics/avatars/collection/Clancy_Wiggum.png"},{label:"Cupid",value:"Cupid",avatar:"statics/avatars/collection/Cupid.png"},{label:"Doctor Strange",value:"Doctor_Strange",avatar:"statics/avatars/collection/Doctor_Strange.png"},{label:"Ed Sheeran",value:"Ed_Sheeran",avatar:"statics/avatars/collection/Ed_Sheeran.png"},{label:"Eeyore",value:"Eeyore",avatar:"statics/avatars/collection/Eeyore.png"},{label:"Elon Musk",value:"Elon_Musk",avatar:"statics/avatars/collection/Elon_Musk.png"},{label:"Fat Cat",value:"Fat_Cat",avatar:"statics/avatars/collection/Fat_Cat.png"},{label:"Hello Kitty",value:"Hello_Kitty",avatar:"statics/avatars/collection/Hello_Kitty.png"},{label:"Homer Simpson",value:"Homer_Simpson",avatar:"statics/avatars/collection/Homer_Simpson.png"},{label:"Ironman",value:"Ironman",avatar:"statics/avatars/collection/Ironman.png"},{label:"Jerry",value:"Jerry",avatar:"statics/avatars/collection/Jerry.png"},{label:"John Lennon",value:"John_Lennon",avatar:"statics/avatars/collection/John_Lennon.png"},{label:"Joker",value:"Joker",avatar:"statics/avatars/collection/Joker.png"},{label:"Krusty The Clown",value:"Krusty_The_Clown",avatar:"statics/avatars/collection/Krusty_The_Clown.png"},{label:"Linus",value:"Linus",avatar:"statics/avatars/collection/Linus.png"},{label:"Lisa Simpson",value:"Lisa_Simpson",avatar:"statics/avatars/collection/Lisa_Simpson.png"},{label:"Lucy",value:"Lucy",avatar:"statics/avatars/collection/Lucy.png"},{label:"Maggie Simpson",value:"Maggie_Simpson",avatar:"statics/avatars/collection/Maggie_Simpson.png"},{label:"Marcie",value:"Marcie",avatar:"statics/avatars/collection/Marcie.png"},{label:"Marge Simpson",value:"Marge_Simpson",avatar:"statics/avatars/collection/Marge_Simpson.png"},{label:"Marie",value:"Marie",avatar:"statics/avatars/collection/Marie.png"},{label:"Marilyn Monroe",value:"Marilyn_Monroe",avatar:"statics/avatars/collection/Marilyn_Monroe.png"},{label:"Messi",value:"Messi",avatar:"statics/avatars/collection/Messi.png"},{label:"Michael Jackson",value:"Michael_Jackson",avatar:"statics/avatars/collection/Michael_Jackson.png"},{label:"Mondtor01",value:"Mondtor01",avatar:"statics/avatars/collection/Mondtor01.png"},{label:"Mondtor02",value:"Mondtor02",avatar:"statics/avatars/collection/Mondtor02.png"},{label:"Mr Beans Teddy",value:"Mr_Beans_Teddy",avatar:"statics/avatars/collection/Mr_Beans_Teddy.png"},{label:"Mr Burns",value:"Mr_Burns",avatar:"statics/avatars/collection/Mr_Burns.png"},{label:"Ms Wicket",value:"Ms_Wicket",avatar:"statics/avatars/collection/Ms_Wicket.png"},{label:"Pelé",value:"Pelé",avatar:"statics/avatars/collection/Pelé.png"},{label:"Peppermint Patty",value:"Peppermint_Patty",avatar:"statics/avatars/collection/Peppermint_Patty.png"},{label:"Pile Of Poo",value:"Pile_Of_Poo",avatar:"statics/avatars/collection/Pile_Of_Poo.png"},{label:"Sally",value:"Sally",avatar:"statics/avatars/collection/Sally.png"},{label:"Santa",value:"Santa",avatar:"statics/avatars/collection/Santa.png"},{label:"Sea Calf",value:"Sea_Calf",avatar:"statics/avatars/collection/Sea_Calf.png"},{label:"Snoop Dogg",value:"Snoop_Dogg",avatar:"statics/avatars/collection/Snoop_Dogg.png"},{label:"Stan Marsh",value:"Stan_Marsh",avatar:"statics/avatars/collection/Stan_Marsh.png"},{label:"Sumo",value:"Sumo",avatar:"statics/avatars/collection/Sumo.png"},{label:"Super Mario",value:"Super_Mario",avatar:"statics/avatars/collection/Super_Mario.png"},{label:"Tom",value:"Tom",avatar:"statics/avatars/collection/Tom.png"},{label:"Tom Kid",value:"Tom_Kid",avatar:"statics/avatars/collection/Tom_Kid.png"},{label:"Woodstock",value:"Woodstock",avatar:"statics/avatars/collection/Woodstock.png"}]},5233:(a,e,t)=>{t.r(e),t.d(e,{default:()=>K});var l=t(9835),n=t(6970);const s={class:"q-px-lg q-pt-xl q-mb-md"},i={class:"text-h4"},r={class:"text-subtitle1"};function o(a,e,t,o,c,u){const g=(0,l.up)("q-btn"),m=(0,l.up)("q-toolbar"),p=(0,l.up)("q-img"),v=(0,l.up)("q-header"),b=(0,l.up)("q-icon"),_=(0,l.up)("q-item-section"),d=(0,l.up)("q-item"),h=(0,l.up)("q-list"),f=(0,l.up)("q-item-label"),k=(0,l.up)("EssentialLink"),w=(0,l.up)("q-scroll-area"),y=(0,l.up)("q-drawer"),S=(0,l.up)("router-view"),M=(0,l.up)("q-page-container"),W=(0,l.up)("q-layout"),B=(0,l.Q2)("ripple");return(0,l.wg)(),(0,l.j4)(W,{view:"lHh Lpr lFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[(0,l.Wm)(g,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:a.toggleLeftDrawer},null,8,["onClick"])])),_:1}),(0,l._)("div",s,[(0,l._)("div",i,(0,n.zw)(a.getCookie("clientName"))+" Spieltagsplanung",1),(0,l._)("div",r,(0,n.zw)(a.todaysDate),1)]),(0,l.Wm)(p,{src:"statics/images/AufGehtsSCF.png",class:"header-image absolute-top"})])),_:1}),(0,l.Wm)(y,{modelValue:a.leftDrawerOpen,"onUpdate:modelValue":e[0]||(e[0]=e=>a.leftDrawerOpen=e),"show-if-above":"",width:350,breakpoint:600},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{style:{height:"calc(100% - 192px)","margin-top":"192px","border-right":"1px solid #ddd"}},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{padding:""},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(d,{to:"/",exact:"",clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{name:"home"})])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Home ")])),_:1})])),_:1})),[[B]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(d,{to:"/match",exact:"",clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{name:"sports_volleyball"})])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Spiele ")])),_:1})])),_:1})),[[B]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(d,{to:"/whereismycard",exact:"",clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{name:"credit_card"})])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Wer hat meine Karte? ")])),_:1})])),_:1})),[[B]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(d,{to:"/member",exact:"",clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{name:"person"})])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Mitglieder ")])),_:1})])),_:1})),[[B]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(d,{to:"/properties",exact:"",clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{name:"settings"})])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Einstellungen ")])),_:1})])),_:1})),[[B]]),"BGB"===a.getCookie("clientName")?(0,l.wy)(((0,l.wg)(),(0,l.j4)(d,{key:0,to:"/order",exact:"",clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{name:"shopping_cart"})])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Bestellungen ")])),_:1})])),_:1})),[[B]]):(0,l.kq)("",!0),"TEST"===a.getCookie("clientName")?(0,l.wy)(((0,l.wg)(),(0,l.j4)(d,{key:1,to:"/entercode",exact:"",clickable:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(b,{name:"qr_code_2"})])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Hast du einen Code? ")])),_:1})])),_:1})),[[B]]):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(f,{header:""},{default:(0,l.w5)((()=>[(0,l.Uk)(" Wichtige Links ")])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.essentialLinks,(a=>((0,l.wg)(),(0,l.j4)(k,(0,l.dG)({key:a.title},a),null,16)))),128))])),_:1}),(0,l.Wm)(p,{class:"absolute-top",src:a.getLogo(a.getCookie("clientName")),style:{height:"182px"}},null,8,["src"])])),_:1},8,["modelValue"]),(0,l.Wm)(M,null,{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.j4)(l.Ob,null,[(0,l.Wm)(S)],1024))])),_:1})])),_:1})}var c=t(499);function u(a,e,t,s,i,r){const o=(0,l.up)("q-icon"),c=(0,l.up)("q-item-section"),u=(0,l.up)("q-item-label"),g=(0,l.up)("q-item");return(0,l.wg)(),(0,l.j4)(g,{clickable:"",tag:"a",target:"_blank",href:a.link},{default:(0,l.w5)((()=>[a.icon?((0,l.wg)(),(0,l.j4)(c,{key:0,avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(o,{name:a.icon},null,8,["name"])])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a.title),1)])),_:1}),(0,l.Wm)(u,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(a.caption),1)])),_:1})])),_:1})])),_:1},8,["href"])}const g=(0,l.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});var m=t(1639),p=t(490),v=t(1233),b=t(2857),_=t(3115),d=t(9984),h=t.n(d);const f=(0,m.Z)(g,[["render",u]]),k=f;h()(g,"components",{QItem:p.Z,QItemSection:v.Z,QIcon:b.Z,QItemLabel:_.Z});var w=t(2417),y=t(4170);const S=[{title:(0,w.ej)("titleUrl1"),caption:(0,w.ej)("captionUrl1"),icon:"favorite",link:(0,w.ej)("linkUrl1")},{title:(0,w.ej)("titleUrl2"),caption:(0,w.ej)("captionUrl2"),icon:"drafts",link:(0,w.ej)("linkUrl2")},{title:(0,w.ej)("titleUrl3"),caption:(0,w.ej)("captionUrl3"),icon:"public",link:(0,w.ej)("linkUrl3")},{title:(0,w.ej)("titleUrl4"),caption:(0,w.ej)("captionUrl4"),icon:"rss_feed",link:(0,w.ej)("linkUrl4")},{title:(0,w.ej)("titleUrl5"),caption:(0,w.ej)("captionUrl5"),icon:"record_voice_over",link:(0,w.ej)("linkUrl5")}],M=(0,l.aZ)({name:"MainLayout",components:{EssentialLink:k},setup(){const a=(0,c.iH)(!1);return{essentialLinks:S,AdminCode:w.tg,getCookie:w.ej,getLogo:w.R7,URLProperties:w.pK,leftDrawerOpen:a,toggleLeftDrawer(){a.value=!a.value}}},computed:{todaysDate(){const a=Date.now();return y.ZP.formatDate(a,"dddd D MMMM")}}});var W=t(249),B=t(6602),U=t(1663),C=t(8879),L=t(335),H=t(906),D=t(6663),P=t(3246),A=t(2133),T=t(1136);const E=(0,m.Z)(M,[["render",o]]),K=E;h()(M,"components",{QLayout:W.Z,QHeader:B.Z,QToolbar:U.Z,QBtn:C.Z,QImg:L.Z,QDrawer:H.Z,QScrollArea:D.Z,QList:P.Z,QItem:p.Z,QItemSection:v.Z,QIcon:b.Z,QItemLabel:_.Z,QPageContainer:A.Z}),h()(M,"directives",{Ripple:T.Z})}}]);