"use strict";(globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[]).push([[681],{2417:(a,e,t)=>{t.d(e,{DL:()=>O,GG:()=>L,Pi:()=>x,Q9:()=>C,R7:()=>E,RR:()=>F,Ry:()=>T,YR:()=>P,bl:()=>J,ej:()=>R,hc:()=>z,kY:()=>K,nE:()=>H,ov:()=>D,pK:()=>A,r6:()=>U,tg:()=>i,wX:()=>W});const l="true",s="TEST",i="3Test2tseT9",n="TEST",r="aufgehtsscf@gmail.com",o="Freiburg",c="SCF",g="Wer reserviert Plätze (<HH>:<MM>): <WHO_RESERVES_PLACES>",u="Email",m="aufgehtsscf@gmail.com",v="mailto:aufgehtsscf@gmail.com",p="Facebook",b="facebook.com/aufgehtsscf",h="https://www.facebook.com/profile.php?id=100094586599908",_="",d="",f="",k="",M="",S="",y="",w="",B="",C="https://script.google.com/macros/s/AKfycbzekarajVCLH-xMBkO7_M0D-MHV1e-2bvXfN-N8BJMaHsc_RhnZNTw4Ctt_4OOVwMLkBA/exec",H="https://script.google.com/macros/s/AKfycbzo1RuM5zOC_1kkUBRJB4tbMKZNgVZ65KTGdm76wyBTB9F_FQLFs8vt3Nh16xwDwChOuA/exec",L="https://script.google.com/macros/s/AKfycby5QLG3Ri_vpENUrwSNtyBR3L8j_AR9_ly4eRKwTHSLaCdgFfPmnEuvPEKX085oJEAwlg/exec",T="https://script.google.com/macros/s/AKfycbwDcHzzr6JqZoENUjRAe1OXY3YCOLsqYMwVbDfdOlYFIjqNJ6lTWuVcYWh_wc99gsv_8A/exec",P="https://script.google.com/macros/s/AKfycbwi7JYV_w0u7KoYw-CUio5HWGrLPvIxRqHybNn4DdgQfOLeGfm3Ufb3IlunmgQq-zFV/exec",U="https://script.google.com/macros/s/AKfycbyj3smDP7m9csheRg0c6n00u0Rb2CczULz8C8lAibkv_gBjiqfkfOZdOP9etSVMDMtL/exec",A="https://script.google.com/macros/s/AKfycbyG0TbbSD0eRYIZeXUUFI8DEMV6-Hn670Hq_9AhC9RevynXtRVYNNw4gKczGu07cPlc/exec?sh=Properties",O="https://script.google.com/macros/s/AKfycbz0cWknDb0ACTYRUCqUE9cIOkU2GV460W8Mhz6VyDKELQc9cLbjnwGrP3wRwlRHJnYBEA/exec?sh="+s,R=function(a){const e=a+"=",t=decodeURIComponent(document.cookie),i=t.split(";");for(let l=0;l<i.length;l++){let a=i[l];while(" "===a.charAt(0))a=a.substring(1);if(0===a.indexOf(e))return a.substring(e.length,a.length)}return"isAdministrator"===a?l:"applicationCode"===a?s:"clientName"===a?n:"email"===a?r:"homeTeam"===a?o:"homeTeamAlias"===a?c:"standardText"===a?g:"titleUrl1"===a?u:"captionUrl1"===a?m:"linkUrl1"===a?v:"titleUrl2"===a?p:"captionUrl2"===a?b:"linkUrl2"===a?h:"titleUrl3"===a?_:"captionUrl3"===a?d:"linkUrl3"===a?f:"titleUrl4"===a?k:"captionUrl4"===a?M:"linkUrl4"===a?S:"titleUrl5"===a?y:"captionUrl5"===a?w:"linkUrl5"===a?B:void 0},K=function(a){let e="";if("BGB"===a||"TEST"===a)return a;if(12===a.length){if(a.indexOf("_")>0){const t=a.split("_");8===t[0].length&&parseInt(t[1])>=329&&(e=t[1].substring(0,1)+t[0].substring(0,4)+t[1].substring(1,2)+t[0].substring(4,8)+t[1].substring(2,t[1].length))}}else 11===a.length&&(e=a);return e},D=function(a){let e="";if(12===a.length){if(a.indexOf("_")>0){const t=a.split("_");8===t[0].length&&parseInt(t[1])>=329&&(e=a)}}else 11===a.length&&(e=a.substring(1,5)+a.substring(6,10)+"_"+a.substring(0,1)+a.substring(5,6)+a.substring(10,a.length));return e},E=function(a){return"statics/images/"+a+"/Logo.png"},W=function(a,e,t){return""===e?"statics/avatars/collection/Placeholder.png":t?"statics/avatars/"+a+"/"+e+".png":"statics/avatars/collection/"+e+".png"},F=function(a){let e=this.teamImages.find((e=>e.value===a))?.image;return"undefined"===typeof e&&(e="statics/teams/QuestionMark.png"),e},x=function(a){return a.toLowerCase().indexOf("test")>=0?"statics/teams/Test.png":"statics/teams/Event.png"},z=[{label:"Arminia",value:"Arminia_Bielefeld",image:"statics/teams/Arminia_Bielefeld.png"},{label:"Augsburg",value:"Augsburg",image:"statics/teams/Augsburg.png"},{label:"Bayern",value:"Bayern_München",image:"statics/teams/Bayern_München.png"},{label:"Bochum",value:"Bochum",image:"statics/teams/Bochum.png"},{label:"Braunschweig",value:"Eintracht_Braunschweig",image:"statics/teams/Eintracht_Braunschweig.png"},{label:"Darmstadt",value:"Darmstadt",image:"statics/teams/Darmstadt.png"},{label:"DFB Pokal",value:"DFB_Pokal",image:"statics/teams/DFB_Pokal.png"},{label:"Dortmund",value:"Borussia_Dortmund",image:"statics/teams/Borussia_Dortmund.png"},{label:"Frankfurt",value:"Eintracht_Frankfurt",image:"statics/teams/Eintracht_Frankfurt.png"},{label:"Fortuna Düsseldorf",value:"Fortuna_Düsseldorf",image:"statics/teams/Fortuna_Düsseldorf.png"},{label:"Freiburg",value:"Freiburg",image:"statics/teams/Freiburg.png"},{label:"Greuther Fürth",value:"Greuther_Fürth",image:"statics/teams/Greuther_Fürth.png"},{label:"Hamburger SV",value:"Hamburger_SV",image:"statics/teams/Hamburger_SV.png"},{label:"Hannover",value:"Hannover",image:"statics/teams/Hannover.png"},{label:"Hansa Rostock",value:"Hansa_Rostock",image:"statics/teams/Hansa_Rostock.png"},{label:"Heidenheim",value:"Heidenheim",image:"statics/teams/Heidenheim.png"},{label:"Hertha",value:"Hertha",image:"statics/teams/Hertha.png"},{label:"Hoffenheim",value:"Hoffenheim",image:"statics/teams/Hoffenheim.png"},{label:"Holstein",value:"Holstein",image:"statics/teams/Holstein.png"},{label:"Jahn Regensburg",value:"Jahn_Regensburg",image:"statics/teams/Jahn_Regensburg.png"},{label:"Juventus Turin",value:"Juventus_Turin",image:"statics/teams/Juventus_Turin.png"},{label:"Kaiserslautern",value:"Kaiserslautern",image:"statics/teams/Kaiserslautern.png"},{label:"Karlsruher",value:"Karlsruher",image:"statics/teams/Karlsruher.png"},{label:"Köln",value:"Köln",image:"statics/teams/Köln.png"},{label:"Leipzig",value:"Leipzig",image:"statics/teams/Leipzig.png"},{label:"Leverkusen",value:"Bayer_Leverkusen",image:"statics/teams/Bayer_Leverkusen.png"},{label:"Magdeburg",value:"Magdeburg",image:"statics/teams/Magdeburg.png"},{label:"Mainz",value:"Mainz",image:"statics/teams/Mainz.png"},{label:"Mönchengladbach",value:"Borussia_Mönchengladbach",image:"statics/teams/Borussia_Mönchengladbach.png"},{label:"Nürnberg",value:"Nürnberg",image:"statics/teams/Nürnberg.png"},{label:"Oberachern",value:"Oberachern",image:"statics/teams/Oberachern.png"},{label:"Olympiakos Piräus",value:"Olympiakos_Piräus",image:"statics/teams/Olympiakos_Piräus.png"},{label:"Paderborn",value:"Paderborn",image:"statics/teams/Paderborn.png"},{label:"Sandhausen",value:"Sandhausen",image:"statics/teams/Sandhausen.png"},{label:"Schalke",value:"Schalke",image:"statics/teams/Schalke.png"},{label:"St. Pauli",value:"St._Pauli",image:"statics/teams/St._Pauli.png"},{label:"Stuttgart",value:"Stuttgart",image:"statics/teams/Stuttgart.png"},{label:"Union Berlin",value:"Union_Berlin",image:"statics/teams/Union_Berlin.png"},{label:"Werder Bremen",value:"Werder_Bremen",image:"statics/teams/Werder_Bremen.png"},{label:"Wolfsburg",value:"Wolfsburg",image:"statics/teams/Wolfsburg.png"}],J=[{label:"Abraham Simpson",value:"Abraham_Simpson",avatar:"statics/avatars/collection/Abraham_Simpson.png"},{label:"Alien",value:"Alien",avatar:"statics/avatars/collection/Alien.png"},{label:"Ariel",value:"Ariel",avatar:"statics/avatars/collection/Ariel.png"},{label:"Barney Gumble",value:"Barney_Gumble",avatar:"statics/avatars/collection/Barney_Gumble.png"},{label:"Bart Simpson",value:"Bart_Simpson",avatar:"statics/avatars/collection/Bart_Simpson.png"},{label:"Charlie Brown",value:"Charlie_Brown",avatar:"statics/avatars/collection/Charlie_Brown.png"},{label:"Charlie Chaplin",value:"Charlie_Chaplin",avatar:"statics/avatars/collection/Charlie_Chaplin.png"},{label:"Clancy Wiggum",value:"Clancy_Wiggum",avatar:"statics/avatars/collection/Clancy_Wiggum.png"},{label:"Cupid",value:"Cupid",avatar:"statics/avatars/collection/Cupid.png"},{label:"Doctor Strange",value:"Doctor_Strange",avatar:"statics/avatars/collection/Doctor_Strange.png"},{label:"Ed Sheeran",value:"Ed_Sheeran",avatar:"statics/avatars/collection/Ed_Sheeran.png"},{label:"Eeyore",value:"Eeyore",avatar:"statics/avatars/collection/Eeyore.png"},{label:"Elon Musk",value:"Elon_Musk",avatar:"statics/avatars/collection/Elon_Musk.png"},{label:"Fat Cat",value:"Fat_Cat",avatar:"statics/avatars/collection/Fat_Cat.png"},{label:"Hello Kitty",value:"Hello_Kitty",avatar:"statics/avatars/collection/Hello_Kitty.png"},{label:"Homer Simpson",value:"Homer_Simpson",avatar:"statics/avatars/collection/Homer_Simpson.png"},{label:"Ironman",value:"Ironman",avatar:"statics/avatars/collection/Ironman.png"},{label:"Jerry",value:"Jerry",avatar:"statics/avatars/collection/Jerry.png"},{label:"John Lennon",value:"John_Lennon",avatar:"statics/avatars/collection/John_Lennon.png"},{label:"Joker",value:"Joker",avatar:"statics/avatars/collection/Joker.png"},{label:"Krusty The Clown",value:"Krusty_The_Clown",avatar:"statics/avatars/collection/Krusty_The_Clown.png"},{label:"Linus",value:"Linus",avatar:"statics/avatars/collection/Linus.png"},{label:"Lisa Simpson",value:"Lisa_Simpson",avatar:"statics/avatars/collection/Lisa_Simpson.png"},{label:"Lucy",value:"Lucy",avatar:"statics/avatars/collection/Lucy.png"},{label:"Maggie Simpson",value:"Maggie_Simpson",avatar:"statics/avatars/collection/Maggie_Simpson.png"},{label:"Marcie",value:"Marcie",avatar:"statics/avatars/collection/Marcie.png"},{label:"Marge Simpson",value:"Marge_Simpson",avatar:"statics/avatars/collection/Marge_Simpson.png"},{label:"Marie",value:"Marie",avatar:"statics/avatars/collection/Marie.png"},{label:"Marilyn Monroe",value:"Marilyn_Monroe",avatar:"statics/avatars/collection/Marilyn_Monroe.png"},{label:"Messi",value:"Messi",avatar:"statics/avatars/collection/Messi.png"},{label:"Michael Jackson",value:"Michael_Jackson",avatar:"statics/avatars/collection/Michael_Jackson.png"},{label:"Mondtor01",value:"Mondtor01",avatar:"statics/avatars/collection/Mondtor01.png"},{label:"Mondtor02",value:"Mondtor02",avatar:"statics/avatars/collection/Mondtor02.png"},{label:"Mr Beans Teddy",value:"Mr_Beans_Teddy",avatar:"statics/avatars/collection/Mr_Beans_Teddy.png"},{label:"Mr Burns",value:"Mr_Burns",avatar:"statics/avatars/collection/Mr_Burns.png"},{label:"Ms Wicket",value:"Ms_Wicket",avatar:"statics/avatars/collection/Ms_Wicket.png"},{label:"Pelé",value:"Pelé",avatar:"statics/avatars/collection/Pelé.png"},{label:"Peppermint Patty",value:"Peppermint_Patty",avatar:"statics/avatars/collection/Peppermint_Patty.png"},{label:"Pile Of Poo",value:"Pile_Of_Poo",avatar:"statics/avatars/collection/Pile_Of_Poo.png"},{label:"Sally",value:"Sally",avatar:"statics/avatars/collection/Sally.png"},{label:"Santa",value:"Santa",avatar:"statics/avatars/collection/Santa.png"},{label:"Sea Calf",value:"Sea_Calf",avatar:"statics/avatars/collection/Sea_Calf.png"},{label:"Snoop Dogg",value:"Snoop_Dogg",avatar:"statics/avatars/collection/Snoop_Dogg.png"},{label:"Stan Marsh",value:"Stan_Marsh",avatar:"statics/avatars/collection/Stan_Marsh.png"},{label:"Sumo",value:"Sumo",avatar:"statics/avatars/collection/Sumo.png"},{label:"Super Mario",value:"Super_Mario",avatar:"statics/avatars/collection/Super_Mario.png"},{label:"Tom",value:"Tom",avatar:"statics/avatars/collection/Tom.png"},{label:"Tom Kid",value:"Tom_Kid",avatar:"statics/avatars/collection/Tom_Kid.png"},{label:"Woodstock",value:"Woodstock",avatar:"statics/avatars/collection/Woodstock.png"}]},6681:(a,e,t)=>{t.r(e),t.d(e,{default:()=>P});var l=t(9835),s=t(6970);const i={class:"q-pa-md",style:{"max-width":"500px"}},n={class:"q-pa-md bg-grey-10 text-white",style:{"max-width":"500px"}};function r(a,e,t,r,o,c){const g=(0,l.up)("q-toolbar-title"),u=(0,l.up)("q-toolbar"),m=(0,l.up)("q-item-label"),v=(0,l.up)("q-item-section"),p=(0,l.up)("q-item"),b=(0,l.up)("q-list"),h=(0,l.up)("q-img"),_=(0,l.up)("q-page"),d=(0,l.Q2)("ripple");return(0,l.wg)(),(0,l.j4)(_,null,{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l.Wm)(u,{class:"bg-primary text-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Bestellungen ")])),_:1})])),_:1})]),(0,l._)("div",n,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o.index,(a=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(b,{dark:"",bordered:"",separator:"",style:{"max-width":"470px"},key:a},{default:(0,l.w5)((()=>[a>0?(0,l.wy)(((0,l.wg)(),(0,l.j4)(p,{key:0,clickable:"",onClick:e=>c.onOrderClick(o.position[a],o.name[a],o.product[a],o.size[a],o.color[a],o.initials[a])},{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m,{overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Name: "+(0,s.zw)(o.name[a]),1)])),_:2},1024),(0,l.Wm)(m,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Artikel: "+(0,s.zw)(o.product[a]),1)])),_:2},1024),(0,l.Wm)(m,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Größe: "+(0,s.zw)(o.size[a]),1)])),_:2},1024),(0,l.Wm)(m,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Farbe: "+(0,s.zw)(o.color[a]),1)])),_:2},1024),(0,l.Wm)(m,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Initialen: "+(0,s.zw)(o.initials[a]),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[d]]):(0,l.kq)("",!0)])),_:2},1024)),[[d]]))),128))]),(0,l.Wm)(h,{src:"statics/images/AufGehtsSCF.png",class:"header-image absolute-top"})])),_:1})}var o=t(2417),c=t(499);const g=(0,c.iH)(""),u=(0,c.iH)(""),m=(0,c.iH)(""),v=(0,c.iH)(""),p=(0,c.iH)(""),b=(0,c.iH)(""),h={name:"ListOrder",setup(){return{}},data(){return{URLOrder:o.DL,index:[],position:[],name:[],product:[],size:[],color:[],initials:[]}},computed:{},mounted(){this.getTableOrder()},methods:{getTableOrder(){console.log("URLOrder: "+this.URLOrder+"&func=Read"),this.$axios(`${this.URLOrder}&func=Read`).then((a=>{this.tableOrder=a.data.split("\n");for(let e=0;e<this.tableOrder.length-1;e++){const a=this.tableOrder[e].split(",");for(let t=0;t<a.length;t++)switch(t){case 0:this.index[e+1]=e+1,this.position[e+1]=a[t];break;case 2:this.name[e+1]=a[t];break;case 3:this.product[e+1]=a[t];break;case 4:this.size[e+1]=a[t];break;case 5:this.color[e+1]=a[t];break;case 6:this.initials[e+1]=a[t];break;default:break}}})).catch((a=>{console.log(a)}))},onOrderClick(a,e,t,l,s,i){console.log("Clicked on an Order: "+a+", "+e+", "+t+", "+l+", "+s+", "+i),g.value=a,u.value=e,m.value=t,v.value=l,p.value=s,b.value=i}}};var _=t(1639),d=t(9885),f=t(1663),k=t(1973),M=t(3246),S=t(490),y=t(1233),w=t(3115),B=t(335),C=t(1136),H=t(9984),L=t.n(H);const T=(0,_.Z)(h,[["render",r]]),P=T;L()(h,"components",{QPage:d.Z,QToolbar:f.Z,QToolbarTitle:k.Z,QList:M.Z,QItem:S.Z,QItemSection:y.Z,QItemLabel:w.Z,QImg:B.Z}),L()(h,"directives",{Ripple:C.Z})}}]);