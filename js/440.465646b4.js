"use strict";(globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[]).push([[440],{2417:(a,e,t)=>{t.d(e,{DL:()=>D,GG:()=>P,Pi:()=>O,Q9:()=>w,R7:()=>E,RR:()=>F,Ry:()=>A,YR:()=>H,bl:()=>I,ej:()=>K,hc:()=>q,kY:()=>R,nE:()=>U,ov:()=>W,pK:()=>L,r6:()=>T,tg:()=>n,wX:()=>x});const l="true",s="TEST",n="3Test2tseT9",i="TEST",o="aufgehtsscf@gmail.com",r="Freiburg",c="SCF",u="Wer reserviert Plätze (<HH>:<MM>): <WHO_RESERVES_PLACES>",g="Homepage",m="",p="",v="Email",b="aufgehtsscf@gmail.com",d="mailto:aufgehtsscf@gmail.com",h="Facebook",_="facebook.com/aufgehtsscf",f="https://www.facebook.com/profile.php?id=100094586599908",k="Twitter",C="",S="",M="Instagram",y="",B="",w="https://script.google.com/macros/s/AKfycbzekarajVCLH-xMBkO7_M0D-MHV1e-2bvXfN-N8BJMaHsc_RhnZNTw4Ctt_4OOVwMLkBA/exec",U="https://script.google.com/macros/s/AKfycbzo1RuM5zOC_1kkUBRJB4tbMKZNgVZ65KTGdm76wyBTB9F_FQLFs8vt3Nh16xwDwChOuA/exec",P="https://script.google.com/macros/s/AKfycby5QLG3Ri_vpENUrwSNtyBR3L8j_AR9_ly4eRKwTHSLaCdgFfPmnEuvPEKX085oJEAwlg/exec",A="https://script.google.com/macros/s/AKfycbwDcHzzr6JqZoENUjRAe1OXY3YCOLsqYMwVbDfdOlYFIjqNJ6lTWuVcYWh_wc99gsv_8A/exec",H="https://script.google.com/macros/s/AKfycbwi7JYV_w0u7KoYw-CUio5HWGrLPvIxRqHybNn4DdgQfOLeGfm3Ufb3IlunmgQq-zFV/exec",T="https://script.google.com/macros/s/AKfycbyj3smDP7m9csheRg0c6n00u0Rb2CczULz8C8lAibkv_gBjiqfkfOZdOP9etSVMDMtL/exec",L="https://script.google.com/macros/s/AKfycbyG0TbbSD0eRYIZeXUUFI8DEMV6-Hn670Hq_9AhC9RevynXtRVYNNw4gKczGu07cPlc/exec?sh=Properties",D="https://script.google.com/macros/s/AKfycbz0cWknDb0ACTYRUCqUE9cIOkU2GV460W8Mhz6VyDKELQc9cLbjnwGrP3wRwlRHJnYBEA/exec?sh="+s,K=function(a){const e=a+"=",t=decodeURIComponent(document.cookie),n=t.split(";");for(let l=0;l<n.length;l++){let a=n[l];while(" "===a.charAt(0))a=a.substring(1);if(0===a.indexOf(e))return a.substring(e.length,a.length)}return"isAdministrator"===a?l:"applicationCode"===a?s:"clientName"===a?i:"email"===a?o:"homeTeam"===a?r:"homeTeamAlias"===a?c:"standardText"===a?u:"titleUrl1"===a?g:"captionUrl1"===a?m:"linkUrl1"===a?p:"titleUrl2"===a?v:"captionUrl2"===a?b:"linkUrl2"===a?d:"titleUrl3"===a?h:"captionUrl3"===a?_:"linkUrl3"===a?f:"titleUrl4"===a?k:"captionUrl4"===a?C:"linkUrl4"===a?S:"titleUrl5"===a?M:"captionUrl5"===a?y:"linkUrl5"===a?B:void 0},R=function(a){let e="";if("BGB"===a||"TEST"===a)return a;if(12===a.length){if(a.indexOf("_")>0){const t=a.split("_");8===t[0].length&&parseInt(t[1])>=329&&(e=t[1].substring(0,1)+t[0].substring(0,4)+t[1].substring(1,2)+t[0].substring(4,8)+t[1].substring(2,t[1].length))}}else 11===a.length&&(e=a);return e},W=function(a){let e="";if(12===a.length){if(a.indexOf("_")>0){const t=a.split("_");8===t[0].length&&parseInt(t[1])>=329&&(e=a)}}else 11===a.length&&(e=a.substring(1,5)+a.substring(6,10)+"_"+a.substring(0,1)+a.substring(5,6)+a.substring(10,a.length));return e},E=function(a){return"statics/images/"+a+"/Logo.png"},x=function(a,e,t){return""===e?"statics/avatars/collection/Placeholder.png":t?"statics/avatars/"+a+"/"+e+".png":"statics/avatars/collection/"+e+".png"},F=function(a){let e=this.teamImages.find((e=>e.value===a))?.image;return"undefined"===typeof e&&(e="statics/teams/QuestionMark.png"),e},O=function(a){return a.toLowerCase().indexOf("test")>=0?"statics/teams/Test.png":"statics/teams/Event.png"},q=[{label:"Arminia",value:"Arminia_Bielefeld",image:"statics/teams/Arminia_Bielefeld.png"},{label:"Augsburg",value:"Augsburg",image:"statics/teams/Augsburg.png"},{label:"Bayern",value:"Bayern_München",image:"statics/teams/Bayern_München.png"},{label:"Bochum",value:"Bochum",image:"statics/teams/Bochum.png"},{label:"Braunschweig",value:"Eintracht_Braunschweig",image:"statics/teams/Eintracht_Braunschweig.png"},{label:"Darmstadt",value:"Darmstadt",image:"statics/teams/Darmstadt.png"},{label:"DFB Pokal",value:"DFB_Pokal",image:"statics/teams/DFB_Pokal.png"},{label:"Dortmund",value:"Borussia_Dortmund",image:"statics/teams/Borussia_Dortmund.png"},{label:"Frankfurt",value:"Eintracht_Frankfurt",image:"statics/teams/Eintracht_Frankfurt.png"},{label:"Fortuna Düsseldorf",value:"Fortuna_Düsseldorf",image:"statics/teams/Fortuna_Düsseldorf.png"},{label:"Freiburg",value:"Freiburg",image:"statics/teams/Freiburg.png"},{label:"Greuther Fürth",value:"Greuther_Fürth",image:"statics/teams/Greuther_Fürth.png"},{label:"Hamburger SV",value:"Hamburger_SV",image:"statics/teams/Hamburger_SV.png"},{label:"Hannover",value:"Hannover",image:"statics/teams/Hannover.png"},{label:"Hansa Rostock",value:"Hansa_Rostock",image:"statics/teams/Hansa_Rostock.png"},{label:"Heidenheim",value:"Heidenheim",image:"statics/teams/Heidenheim.png"},{label:"Hertha",value:"Hertha",image:"statics/teams/Hertha.png"},{label:"Hoffenheim",value:"Hoffenheim",image:"statics/teams/Hoffenheim.png"},{label:"Holstein",value:"Holstein",image:"statics/teams/Holstein.png"},{label:"Jahn Regensburg",value:"Jahn_Regensburg",image:"statics/teams/Jahn_Regensburg.png"},{label:"Juventus Turin",value:"Juventus_Turin",image:"statics/teams/Juventus_Turin.png"},{label:"Kaiserslautern",value:"Kaiserslautern",image:"statics/teams/Kaiserslautern.png"},{label:"Karlsruher",value:"Karlsruher",image:"statics/teams/Karlsruher.png"},{label:"Köln",value:"Köln",image:"statics/teams/Köln.png"},{label:"Leipzig",value:"Leipzig",image:"statics/teams/Leipzig.png"},{label:"Leverkusen",value:"Bayer_Leverkusen",image:"statics/teams/Bayer_Leverkusen.png"},{label:"Magdeburg",value:"Magdeburg",image:"statics/teams/Magdeburg.png"},{label:"Mainz",value:"Mainz",image:"statics/teams/Mainz.png"},{label:"Mönchengladbach",value:"Borussia_Mönchengladbach",image:"statics/teams/Borussia_Mönchengladbach.png"},{label:"Nürnberg",value:"Nürnberg",image:"statics/teams/Nürnberg.png"},{label:"Oberachern",value:"Oberachern",image:"statics/teams/Oberachern.png"},{label:"Olympiakos Piräus",value:"Olympiakos_Piräus",image:"statics/teams/Olympiakos_Piräus.png"},{label:"Paderborn",value:"Paderborn",image:"statics/teams/Paderborn.png"},{label:"Sandhausen",value:"Sandhausen",image:"statics/teams/Sandhausen.png"},{label:"Schalke",value:"Schalke",image:"statics/teams/Schalke.png"},{label:"St. Pauli",value:"St._Pauli",image:"statics/teams/St._Pauli.png"},{label:"Stuttgart",value:"Stuttgart",image:"statics/teams/Stuttgart.png"},{label:"Union Berlin",value:"Union_Berlin",image:"statics/teams/Union_Berlin.png"},{label:"Werder Bremen",value:"Werder_Bremen",image:"statics/teams/Werder_Bremen.png"},{label:"Wolfsburg",value:"Wolfsburg",image:"statics/teams/Wolfsburg.png"}],I=[{label:"Abraham Simpson",value:"Abraham_Simpson",avatar:"statics/avatars/collection/Abraham_Simpson.png"},{label:"Alien",value:"Alien",avatar:"statics/avatars/collection/Alien.png"},{label:"Ariel",value:"Ariel",avatar:"statics/avatars/collection/Ariel.png"},{label:"Barney Gumble",value:"Barney_Gumble",avatar:"statics/avatars/collection/Barney_Gumble.png"},{label:"Bart Simpson",value:"Bart_Simpson",avatar:"statics/avatars/collection/Bart_Simpson.png"},{label:"Charlie Brown",value:"Charlie_Brown",avatar:"statics/avatars/collection/Charlie_Brown.png"},{label:"Charlie Chaplin",value:"Charlie_Chaplin",avatar:"statics/avatars/collection/Charlie_Chaplin.png"},{label:"Clancy Wiggum",value:"Clancy_Wiggum",avatar:"statics/avatars/collection/Clancy_Wiggum.png"},{label:"Cupid",value:"Cupid",avatar:"statics/avatars/collection/Cupid.png"},{label:"Doctor Strange",value:"Doctor_Strange",avatar:"statics/avatars/collection/Doctor_Strange.png"},{label:"Ed Sheeran",value:"Ed_Sheeran",avatar:"statics/avatars/collection/Ed_Sheeran.png"},{label:"Eeyore",value:"Eeyore",avatar:"statics/avatars/collection/Eeyore.png"},{label:"Elon Musk",value:"Elon_Musk",avatar:"statics/avatars/collection/Elon_Musk.png"},{label:"Fat Cat",value:"Fat_Cat",avatar:"statics/avatars/collection/Fat_Cat.png"},{label:"Hello Kitty",value:"Hello_Kitty",avatar:"statics/avatars/collection/Hello_Kitty.png"},{label:"Homer Simpson",value:"Homer_Simpson",avatar:"statics/avatars/collection/Homer_Simpson.png"},{label:"Ironman",value:"Ironman",avatar:"statics/avatars/collection/Ironman.png"},{label:"Jerry",value:"Jerry",avatar:"statics/avatars/collection/Jerry.png"},{label:"John Lennon",value:"John_Lennon",avatar:"statics/avatars/collection/John_Lennon.png"},{label:"Joker",value:"Joker",avatar:"statics/avatars/collection/Joker.png"},{label:"Krusty The Clown",value:"Krusty_The_Clown",avatar:"statics/avatars/collection/Krusty_The_Clown.png"},{label:"Linus",value:"Linus",avatar:"statics/avatars/collection/Linus.png"},{label:"Lisa Simpson",value:"Lisa_Simpson",avatar:"statics/avatars/collection/Lisa_Simpson.png"},{label:"Lucy",value:"Lucy",avatar:"statics/avatars/collection/Lucy.png"},{label:"Maggie Simpson",value:"Maggie_Simpson",avatar:"statics/avatars/collection/Maggie_Simpson.png"},{label:"Marcie",value:"Marcie",avatar:"statics/avatars/collection/Marcie.png"},{label:"Marge Simpson",value:"Marge_Simpson",avatar:"statics/avatars/collection/Marge_Simpson.png"},{label:"Marie",value:"Marie",avatar:"statics/avatars/collection/Marie.png"},{label:"Marilyn Monroe",value:"Marilyn_Monroe",avatar:"statics/avatars/collection/Marilyn_Monroe.png"},{label:"Messi",value:"Messi",avatar:"statics/avatars/collection/Messi.png"},{label:"Michael Jackson",value:"Michael_Jackson",avatar:"statics/avatars/collection/Michael_Jackson.png"},{label:"Mondtor01",value:"Mondtor01",avatar:"statics/avatars/collection/Mondtor01.png"},{label:"Mondtor02",value:"Mondtor02",avatar:"statics/avatars/collection/Mondtor02.png"},{label:"Mr Beans Teddy",value:"Mr_Beans_Teddy",avatar:"statics/avatars/collection/Mr_Beans_Teddy.png"},{label:"Mr Burns",value:"Mr_Burns",avatar:"statics/avatars/collection/Mr_Burns.png"},{label:"Ms Wicket",value:"Ms_Wicket",avatar:"statics/avatars/collection/Ms_Wicket.png"},{label:"Pelé",value:"Pelé",avatar:"statics/avatars/collection/Pelé.png"},{label:"Peppermint Patty",value:"Peppermint_Patty",avatar:"statics/avatars/collection/Peppermint_Patty.png"},{label:"Pile Of Poo",value:"Pile_Of_Poo",avatar:"statics/avatars/collection/Pile_Of_Poo.png"},{label:"Sally",value:"Sally",avatar:"statics/avatars/collection/Sally.png"},{label:"Santa",value:"Santa",avatar:"statics/avatars/collection/Santa.png"},{label:"Sea Calf",value:"Sea_Calf",avatar:"statics/avatars/collection/Sea_Calf.png"},{label:"Snoop Dogg",value:"Snoop_Dogg",avatar:"statics/avatars/collection/Snoop_Dogg.png"},{label:"Stan Marsh",value:"Stan_Marsh",avatar:"statics/avatars/collection/Stan_Marsh.png"},{label:"Sumo",value:"Sumo",avatar:"statics/avatars/collection/Sumo.png"},{label:"Super Mario",value:"Super_Mario",avatar:"statics/avatars/collection/Super_Mario.png"},{label:"Tom",value:"Tom",avatar:"statics/avatars/collection/Tom.png"},{label:"Tom Kid",value:"Tom_Kid",avatar:"statics/avatars/collection/Tom_Kid.png"},{label:"Woodstock",value:"Woodstock",avatar:"statics/avatars/collection/Woodstock.png"}]},6440:(a,e,t)=>{t.r(e),t.d(e,{default:()=>A});var l=t(9835),s=t(6970);const n=a=>((0,l.dD)("data-v-90b1980e"),a=a(),(0,l.Cn)(),a),i={class:"q-pa-md q-gutter-sm"},o=n((()=>(0,l._)("div",{class:"text-h6"},"Our Changing Planet",-1))),r=n((()=>(0,l._)("div",{class:"text-subtitle2"},"by John Doe",-1))),c=n((()=>(0,l._)("div",{class:"text-h6"},"Code eingeben",-1)));function u(a,e,t,n,u,g){const m=(0,l.up)("q-card-section"),p=(0,l.up)("q-input"),v=(0,l.up)("q-separator"),b=(0,l.up)("q-btn"),d=(0,l.up)("q-card-actions"),h=(0,l.up)("q-card"),_=(0,l.up)("q-dialog"),f=(0,l.up)("q-img"),k=(0,l.up)("q-page"),C=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(k,null,{default:(0,l.w5)((()=>[(0,l._)("div",i,[(0,l.Wm)(_,{modelValue:n.enterCode,"onUpdate:modelValue":e[2]||(e[2]=a=>n.enterCode=a),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{class:"my-card text-white",style:{background:"radial-gradient(circle, #f4243f 0%, #610101 100%)"}},{default:(0,l.w5)((()=>[(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[o,r])),_:1}),(0,l.Wm)(m,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,s.zw)(n.lorem),1)])),_:1}),(0,l.Wm)(m,null,{default:(0,l.w5)((()=>[c])),_:1}),(0,l.Wm)(m,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{dense:"",modelValue:n.txtApplicationCode,"onUpdate:modelValue":e[0]||(e[0]=a=>n.txtApplicationCode=a),autofocus:"",label:"Code"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(v),(0,l.Wm)(d,{class:"text-white",align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(b,{flat:"",label:"Abbrechen"},null,512),[[C]]),(0,l.wy)((0,l.Wm)(b,{icon:"done",label:"Ok",onClick:e[1]||(e[1]=a=>g.getProperties(n.txtApplicationCode)),disable:""===n.txtApplicationCode},null,8,["disable"]),[[C]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l.Wm)(f,{src:"statics/images/AufGehtsSCF.png",class:"header-image absolute-top"})])),_:1})}var g=t(9302),m=t(2417),p=t(499);const v={name:"EnterCode",setup(){const a=(0,g.Z)();return{txtApplicationCode:(0,p.iH)(""),lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",onCodeIsValid(){a.notify({type:"positive",message:"Der eingegebene Code ist gültig!"})},onCodeIsInvalid(){a.notify({type:"negative",message:"Der eingegebene Code ist ungültig!"})},onCodeNotFound(){a.notify({type:"negative",message:"Der eingegebene Code wurde nicht gefunden!"})},enterCode:(0,p.iH)(!0)}},data(){return{URLProperties:m.pK}},computed:{},methods:{getProperties(a){let e="",t="";if(12===a.length){if(a.indexOf("_")>0){const l=a.split("_");8===l[0].length&&parseInt(l[1])>=329&&(t=a,e=l[1].substring(0,1)+l[0].substring(0,4)+l[1].substring(1,2)+l[0].substring(4,8)+l[1].substring(2,l[1].length))}}else 11===a.length&&(e=a,t=a.substring(1,5)+a.substring(6,10)+"_"+a.substring(0,1)+a.substring(5,6)+a.substring(10,a.length));""===e&&""===t?this.onCodeIsInvalid():this.$axios(`${this.URLProperties}&func=ReadAdminCode&adminCode=${e}`).then((l=>{this.tableProperties=l.data.split("\n"),""===l.data&&this.onCodeIsInvalid();for(let s=0;s<this.tableProperties.length-1;s++){const l=this.tableProperties[s].split(",");let n="false";l[1]===a&&(n="true");const i=l[3],o=l[4],r=l[5],c=l[6],u=l[7],g=l[8],m=l[9],p=l[10],v=l[11],b=l[12],d=l[13],h=l[14],_=l[15],f=l[16],k=l[17],C=l[18],S=l[19],M=l[20],y=l[21],B=l[22];l[1]===e||l[2]===t?this.setCookie(n,a,i,o,r,c,u,g,m,p,v,b,d,h,_,f,k,C,S,M,y,B):this.onCodeNotFound(),this.onCodeIsValid()}})).catch((a=>{console.log(a)}))},setCookie(a,e,t,l,s,n,i,o,r,c,u,g,m,p,v,b,d,h,_,f,k,C){const S=new Date;S.setTime(S.getTime()+31536e6);const M="expires="+S.toUTCString();document.cookie="isAdministrator="+a+";"+M+'";path=/',document.cookie="applicationCode="+e+";"+M+'";path=/',document.cookie="clientName="+t+";"+M+'";path=/',document.cookie="email="+l+";"+M+'";path=/',document.cookie="homeTeam="+s+";"+M+'";path=/',document.cookie="homeTeamAlias="+n+";"+M+'";path=/',document.cookie="standardText="+i+";"+M+'";path=/',document.cookie="titleUrl1="+o+";"+M+'";path=/',document.cookie="captionUrl1="+r+";"+M+'";path=/',document.cookie="linkUrl1="+c+";"+M+'";path=/',document.cookie="titleUrl2="+u+";"+M+'";path=/',document.cookie="captionUrl2="+g+";"+M+'";path=/',document.cookie="linkUrl2="+m+";"+M+'";path=/',document.cookie="titleUrl3="+p+";"+M+'";path=/',document.cookie="captionUrl3="+v+";"+M+'";path=/',document.cookie="linkUrl3="+b+";"+M+'";path=/',document.cookie="titleUrl4="+d+";"+M+'";path=/',document.cookie="captionUrl4="+h+";"+M+'";path=/',document.cookie="linkUrl4="+_+";"+M+'";path=/',document.cookie="titleUrl5="+f+";"+M+'";path=/',document.cookie="captionUrl5="+k+";"+M+'";path=/',document.cookie="linkUrl5="+C+";"+M+'";path=/'}}};var b=t(1639),d=t(9885),h=t(2074),_=t(4458),f=t(3190),k=t(6611),C=t(926),S=t(1821),M=t(8879),y=t(335),B=t(2146),w=t(9984),U=t.n(w);const P=(0,b.Z)(v,[["render",u],["__scopeId","data-v-90b1980e"]]),A=P;U()(v,"components",{QPage:d.Z,QDialog:h.Z,QCard:_.Z,QCardSection:f.Z,QInput:k.Z,QSeparator:C.Z,QCardActions:S.Z,QBtn:M.Z,QImg:y.Z}),U()(v,"directives",{ClosePopup:B.Z})}}]);