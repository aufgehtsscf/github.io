"use strict";(globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[]).push([[763],{2417:(a,e,t)=>{t.d(e,{FP:()=>u,I_:()=>i,LE:()=>r,Pi:()=>S,R7:()=>_,RR:()=>f,TT:()=>g,Zg:()=>o,bl:()=>k,d8:()=>v,ej:()=>d,gZ:()=>n,gn:()=>m,hc:()=>x,kY:()=>p,mb:()=>c,ov:()=>b,wX:()=>h});const l=!1,s="HOME",n="service_1z8boq8",i="template_uc9j4dn",o="z6CsuBOLcuYCsxNiZ",r="Auf geht's SCF",u="d1f60978-f743-4b6e-88f1-ac7aa7885d2b",c="8f26f0ad-d9d3-4c33-b1c9-f0560ee3ea11",m="https://planthegame.ch",g="https://script.google.com/macros/s/AKfycbxpYbKFzUC6iSSlE913vWGLuvRZ7TbT8eXVn54Un7rm0KJa9vVGzuvu7d-V-tSuWSDjOw/exec",d=function(a){const e=a+"=",t=decodeURIComponent(document.cookie),n=t.split(";");for(let l=0;l<n.length;l++){let a=n[l];while(" "===a.charAt(0))a=a.substring(1);if(0===a.indexOf(e))return a.substring(e.length,a.length)}return"isAdministrator"===a?l:"applicationCode"===a?s:void 0},v=function(a,e){const t=new Date;t.setTime(t.getTime()+31536e6);const l="expires="+t.toUTCString();document.cookie="isAdministrator="+a+";"+l+'";path=/',document.cookie="applicationCode="+e+";"+l+'";path=/'},p=function(a){let e="";if("HOME"===a)return"3Home2emoH9";if(12===a.length){if(a.indexOf("_")>0){const t=a.split("_");8===t[0].length&&parseInt(t[1])>=329&&(e=t[1].substring(0,1)+t[0].substring(0,4)+t[1].substring(1,2)+t[0].substring(4,8)+t[1].substring(2,t[1].length))}}else 11===a.length&&(e=a);return e},b=function(a){let e="";if(12===a.length){if(a.indexOf("_")>0){const t=a.split("_");8===t[0].length&&parseInt(t[1])>=329&&(e=a)}}else 11===a.length&&(e=a.substring(1,5)+a.substring(6,10)+"_"+a.substring(0,1)+a.substring(5,6)+a.substring(10,a.length));return e},_=function(a){return"statics/images/"+a+"/Logo.png"},h=function(a,e,t){return""===e?"statics/avatars/collection/Placeholder.png":t?"statics/avatars/"+a+"/"+e+".png":"statics/avatars/collection/"+e+".png"},f=function(a){let e=this.teamImages.find((e=>e.value===a))?.image;return"undefined"===typeof e&&(e="statics/teams/QuestionMark.png"),e},S=function(a){return a.toLowerCase().indexOf("test")>=0?"statics/teams/Test.png":"statics/teams/Event.png"},x=[{label:"Arminia",value:"Arminia_Bielefeld",image:"statics/teams/Arminia_Bielefeld.png"},{label:"Augsburg",value:"Augsburg",image:"statics/teams/Augsburg.png"},{label:"Backa Topola",value:"Backa_Topola",image:"statics/teams/Backa_Topola.png"},{label:"Bayern",value:"Bayern_München",image:"statics/teams/Bayern_München.png"},{label:"Bochum",value:"Bochum",image:"statics/teams/Bochum.png"},{label:"Braunschweig",value:"Eintracht_Braunschweig",image:"statics/teams/Eintracht_Braunschweig.png"},{label:"Darmstadt",value:"Darmstadt",image:"statics/teams/Darmstadt.png"},{label:"DFB Pokal",value:"DFB_Pokal",image:"statics/teams/DFB_Pokal.png"},{label:"Dortmund",value:"Borussia_Dortmund",image:"statics/teams/Borussia_Dortmund.png"},{label:"Europa League",value:"Europa_League",image:"statics/teams/Europa_League.png"},{label:"Frankfurt",value:"Eintracht_Frankfurt",image:"statics/teams/Eintracht_Frankfurt.png"},{label:"Fortuna Düsseldorf",value:"Fortuna_Düsseldorf",image:"statics/teams/Fortuna_Düsseldorf.png"},{label:"Freiburg",value:"Freiburg",image:"statics/teams/Freiburg.svg"},{label:"Greuther Fürth",value:"Greuther_Fürth",image:"statics/teams/Greuther_Fürth.png"},{label:"Hamburger SV",value:"Hamburger_SV",image:"statics/teams/Hamburger_SV.png"},{label:"Hannover",value:"Hannover",image:"statics/teams/Hannover.png"},{label:"Hansa Rostock",value:"Hansa_Rostock",image:"statics/teams/Hansa_Rostock.png"},{label:"Heidenheim",value:"Heidenheim",image:"statics/teams/Heidenheim.png"},{label:"Hertha",value:"Hertha",image:"statics/teams/Hertha.png"},{label:"Hoffenheim",value:"Hoffenheim",image:"statics/teams/Hoffenheim.svg"},{label:"Holstein",value:"Holstein",image:"statics/teams/Holstein.png"},{label:"Jahn Regensburg",value:"Jahn_Regensburg",image:"statics/teams/Jahn_Regensburg.png"},{label:"Juventus Turin",value:"Juventus_Turin",image:"statics/teams/Juventus_Turin.png"},{label:"Kaiserslautern",value:"Kaiserslautern",image:"statics/teams/Kaiserslautern.png"},{label:"Karlsruher",value:"Karlsruher",image:"statics/teams/Karlsruher.png"},{label:"Köln",value:"Köln",image:"statics/teams/Köln.svg"},{label:"Leipzig",value:"Leipzig",image:"statics/teams/Leipzig.png"},{label:"RC Lens",value:"Lens",image:"statics/teams/Lens.svg"},{label:"Leverkusen",value:"Bayer_Leverkusen",image:"statics/teams/Bayer_Leverkusen.png"},{label:"Magdeburg",value:"Magdeburg",image:"statics/teams/Magdeburg.png"},{label:"Mainz",value:"Mainz",image:"statics/teams/Mainz.png"},{label:"Mönchengladbach",value:"Borussia_Mönchengladbach",image:"statics/teams/Borussia_Mönchengladbach.png"},{label:"Nürnberg",value:"Nürnberg",image:"statics/teams/Nürnberg.png"},{label:"Oberachern",value:"Oberachern",image:"statics/teams/Oberachern.png"},{label:"Olympiakos Piräus",value:"Olympiakos_Piräus",image:"statics/teams/Olympiakos_Piräus.png"},{label:"Osnabrück",value:"Osnabrück",image:"statics/teams/Osnabrück.png"},{label:"Paderborn",value:"Paderborn",image:"statics/teams/Paderborn.png"},{label:"Sandhausen",value:"Sandhausen",image:"statics/teams/Sandhausen.png"},{label:"Schalke",value:"Schalke",image:"statics/teams/Schalke.png"},{label:"St. Pauli",value:"St._Pauli",image:"statics/teams/St._Pauli.png"},{label:"Stuttgart",value:"Stuttgart",image:"statics/teams/Stuttgart.png"},{label:"Union Berlin",value:"Union_Berlin",image:"statics/teams/Union_Berlin.svg"},{label:"Werder Bremen",value:"Werder_Bremen",image:"statics/teams/Werder_Bremen.png"},{label:"West Ham",value:"West_Ham",image:"statics/teams/West_Ham.png"},{label:"Wolfsburg",value:"Wolfsburg",image:"statics/teams/Wolfsburg.png"}],k=[{label:"Abraham Simpson",value:"Abraham_Simpson",avatar:"statics/avatars/collection/Abraham_Simpson.png"},{label:"Alien",value:"Alien",avatar:"statics/avatars/collection/Alien.png"},{label:"Ariel",value:"Ariel",avatar:"statics/avatars/collection/Ariel.png"},{label:"Barney Gumble",value:"Barney_Gumble",avatar:"statics/avatars/collection/Barney_Gumble.png"},{label:"Bart Simpson",value:"Bart_Simpson",avatar:"statics/avatars/collection/Bart_Simpson.png"},{label:"Charlie Brown",value:"Charlie_Brown",avatar:"statics/avatars/collection/Charlie_Brown.png"},{label:"Charlie Chaplin",value:"Charlie_Chaplin",avatar:"statics/avatars/collection/Charlie_Chaplin.png"},{label:"Clancy Wiggum",value:"Clancy_Wiggum",avatar:"statics/avatars/collection/Clancy_Wiggum.png"},{label:"Cupid",value:"Cupid",avatar:"statics/avatars/collection/Cupid.png"},{label:"Doctor Strange",value:"Doctor_Strange",avatar:"statics/avatars/collection/Doctor_Strange.png"},{label:"Ed Sheeran",value:"Ed_Sheeran",avatar:"statics/avatars/collection/Ed_Sheeran.png"},{label:"Eeyore",value:"Eeyore",avatar:"statics/avatars/collection/Eeyore.png"},{label:"Elon Musk",value:"Elon_Musk",avatar:"statics/avatars/collection/Elon_Musk.png"},{label:"Fat Cat",value:"Fat_Cat",avatar:"statics/avatars/collection/Fat_Cat.png"},{label:"Garfield",value:"Garfield",avatar:"statics/avatars/collection/Garfield.png"},{label:"Hello Kitty",value:"Hello_Kitty",avatar:"statics/avatars/collection/Hello_Kitty.png"},{label:"Homer Simpson",value:"Homer_Simpson",avatar:"statics/avatars/collection/Homer_Simpson.png"},{label:"Ironman",value:"Ironman",avatar:"statics/avatars/collection/Ironman.png"},{label:"Jerry",value:"Jerry",avatar:"statics/avatars/collection/Jerry.png"},{label:"John Lennon",value:"John_Lennon",avatar:"statics/avatars/collection/John_Lennon.png"},{label:"Joker",value:"Joker",avatar:"statics/avatars/collection/Joker.png"},{label:"Krusty The Clown",value:"Krusty_The_Clown",avatar:"statics/avatars/collection/Krusty_The_Clown.png"},{label:"Linus",value:"Linus",avatar:"statics/avatars/collection/Linus.png"},{label:"Lisa Simpson",value:"Lisa_Simpson",avatar:"statics/avatars/collection/Lisa_Simpson.png"},{label:"Lucy",value:"Lucy",avatar:"statics/avatars/collection/Lucy.png"},{label:"Maggie Simpson",value:"Maggie_Simpson",avatar:"statics/avatars/collection/Maggie_Simpson.png"},{label:"Marcie",value:"Marcie",avatar:"statics/avatars/collection/Marcie.png"},{label:"Marge Simpson",value:"Marge_Simpson",avatar:"statics/avatars/collection/Marge_Simpson.png"},{label:"Marie",value:"Marie",avatar:"statics/avatars/collection/Marie.png"},{label:"Marilyn Monroe",value:"Marilyn_Monroe",avatar:"statics/avatars/collection/Marilyn_Monroe.png"},{label:"Messi",value:"Messi",avatar:"statics/avatars/collection/Messi.png"},{label:"Michael Jackson",value:"Michael_Jackson",avatar:"statics/avatars/collection/Michael_Jackson.png"},{label:"Mondtor01",value:"Mondtor01",avatar:"statics/avatars/collection/Mondtor01.png"},{label:"Mondtor02",value:"Mondtor02",avatar:"statics/avatars/collection/Mondtor02.png"},{label:"Mr Beans Teddy",value:"Mr_Beans_Teddy",avatar:"statics/avatars/collection/Mr_Beans_Teddy.png"},{label:"Mr Burns",value:"Mr_Burns",avatar:"statics/avatars/collection/Mr_Burns.png"},{label:"Ms Wicket",value:"Ms_Wicket",avatar:"statics/avatars/collection/Ms_Wicket.png"},{label:"Pelé",value:"Pelé",avatar:"statics/avatars/collection/Pelé.png"},{label:"Peppermint Patty",value:"Peppermint_Patty",avatar:"statics/avatars/collection/Peppermint_Patty.png"},{label:"Pile Of Poo",value:"Pile_Of_Poo",avatar:"statics/avatars/collection/Pile_Of_Poo.png"},{label:"Sally",value:"Sally",avatar:"statics/avatars/collection/Sally.png"},{label:"Santa",value:"Santa",avatar:"statics/avatars/collection/Santa.png"},{label:"Sea Calf",value:"Sea_Calf",avatar:"statics/avatars/collection/Sea_Calf.png"},{label:"Snoop Dogg",value:"Snoop_Dogg",avatar:"statics/avatars/collection/Snoop_Dogg.png"},{label:"Stan Marsh",value:"Stan_Marsh",avatar:"statics/avatars/collection/Stan_Marsh.png"},{label:"Sumo",value:"Sumo",avatar:"statics/avatars/collection/Sumo.png"},{label:"Super Mario",value:"Super_Mario",avatar:"statics/avatars/collection/Super_Mario.png"},{label:"Tom",value:"Tom",avatar:"statics/avatars/collection/Tom.png"},{label:"Tom Kid",value:"Tom_Kid",avatar:"statics/avatars/collection/Tom_Kid.png"},{label:"Tweety",value:"Tweety",avatar:"statics/avatars/collection/Tweety.png"},{label:"Woodstock",value:"Woodstock",avatar:"statics/avatars/collection/Woodstock.png"}]},6763:(a,e,t)=>{t.r(e),t.d(e,{default:()=>Q});var l=t(9835),s=t(6970);const n={class:"q-pa-md",style:{"max-width":"500px"}},i={class:"q-pa-md bg-grey-10 text-white",style:{"max-width":"500px"}},o={class:"q-pa-md q-gutter-sm"},r=(0,l._)("div",{class:"text-h6"},"Settings ändern",-1);function u(a,e,t,u,c,m){const g=(0,l.up)("q-toolbar-title"),d=(0,l.up)("q-toolbar"),v=(0,l.up)("q-item-label"),p=(0,l.up)("q-item-section"),b=(0,l.up)("q-item"),_=(0,l.up)("q-list"),h=(0,l.up)("q-card-section"),f=(0,l.up)("q-input"),S=(0,l.up)("q-separator"),x=(0,l.up)("q-btn"),k=(0,l.up)("q-card-actions"),M=(0,l.up)("q-card"),C=(0,l.up)("q-dialog"),H=(0,l.up)("q-img"),T=(0,l.up)("q-page"),y=(0,l.Q2)("ripple"),w=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(T,null,{default:(0,l.w5)((()=>[(0,l._)("div",n,[(0,l.Wm)(d,{class:"bg-primary text-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,{class:"text-overline"},{default:(0,l.w5)((()=>[(0,l.Uk)("Einstellungen")])),_:1})])),_:1})]),(0,l._)("div",i,[(0,l.Wm)(_,{dark:"",bordered:"",separator:"",style:{"max-width":"470px"}},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(b,{clickable:"",onClick:e[0]||(e[0]=a=>m.onSettingClick())},{default:(0,l.w5)((()=>[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Fanclub: "+(0,s.zw)(u.txtClientName),1)])),_:1}),(0,l.Wm)(v),(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Admin-Zugriffscode: "+(0,s.zw)(u.txtAdminCode),1)])),_:1}),(0,l.Wm)(v),(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Uk)("User-Zugriffscode: "+(0,s.zw)(u.txtUserCode),1)])),_:1}),(0,l.Wm)(v),(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Heimmannschaft: "+(0,s.zw)(u.txtHomeTeam),1)])),_:1}),(0,l.Wm)(v),(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Uk)("E-Mail-Adresse: "+(0,s.zw)(u.txtEmail),1)])),_:1}),(0,l.Wm)(v),(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Heimmannschaft-Alias: "+(0,s.zw)(u.txtHomeTeamAlias),1)])),_:1}),(0,l.Wm)(v),(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Standardtext: "+(0,s.zw)(u.txtStandardText),1)])),_:1}),(0,l.Wm)(v),(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Saison: "+(0,s.zw)(u.txtSeason),1)])),_:1})])),_:1})])),_:1})),[[y]])])),_:1})]),(0,l._)("div",o,[(0,l.Wm)(C,{modelValue:u.editSetting,"onUpdate:modelValue":e[10]||(e[10]=a=>u.editSetting=a),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(M,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[r])),_:1}),(0,l.Wm)(h,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{filled:"",dense:"",modelValue:u.txtClientName,"onUpdate:modelValue":e[1]||(e[1]=a=>u.txtClientName=a),label:"Fanclub",disable:!0},null,8,["modelValue"]),(0,l.Wm)(f,{filled:"",dense:"",modelValue:u.txtAdminCode,"onUpdate:modelValue":e[2]||(e[2]=a=>u.txtAdminCode=a),label:"Admin-Zugriffscode",disable:!0},null,8,["modelValue"]),(0,l.Wm)(f,{filled:"",dense:"",modelValue:u.txtUserCode,"onUpdate:modelValue":e[3]||(e[3]=a=>u.txtUserCode=a),label:"User-Zugriffscode",disable:!0},null,8,["modelValue"]),(0,l.Wm)(f,{filled:"",dense:"",modelValue:u.txtHomeTeam,"onUpdate:modelValue":e[4]||(e[4]=a=>u.txtHomeTeam=a),label:"Heimmannschaft",disable:!0},null,8,["modelValue"]),(0,l.Wm)(f,{filled:"",dense:"",modelValue:u.txtEmail,"onUpdate:modelValue":e[5]||(e[5]=a=>u.txtEmail=a),label:"E-Mail-Adresse"},null,8,["modelValue"]),(0,l.Wm)(f,{filled:"",dense:"",modelValue:u.txtHomeTeamAlias,"onUpdate:modelValue":e[6]||(e[6]=a=>u.txtHomeTeamAlias=a),label:"Heimmannschaft-Alias"},null,8,["modelValue"]),(0,l.Wm)(f,{filled:"",dense:"",modelValue:u.txtStandardText,"onUpdate:modelValue":e[7]||(e[7]=a=>u.txtStandardText=a),type:"textarea",label:"Standardtext"},null,8,["modelValue"]),(0,l.Wm)(f,{filled:"",dense:"",modelValue:u.txtSeason,"onUpdate:modelValue":e[8]||(e[8]=a=>u.txtSeason=a),label:"Saison"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(S),(0,l.Wm)(k,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(x,{flat:"",label:"Abbrechen"},null,512),[[w]]),(0,l.wy)((0,l.Wm)(x,{icon:"save",label:"Speichern",onClick:e[9]||(e[9]=a=>m.editSettingSave(u.txtClientName,u.txtEmail,u.txtHomeTeamAlias,u.txtStandardText,u.txtSeason))},null,512),[[w]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l.Wm)(H,{src:"statics/images/AufGehtsSCF.png",class:"header-image absolute-top"})])),_:1})}var c=t(9302),m=t(2417),g=t(499);const d=(0,g.iH)(""),v=(0,g.iH)(""),p=(0,g.iH)(""),b=(0,g.iH)(""),_=(0,g.iH)(""),h=(0,g.iH)(""),f=(0,g.iH)(""),S=(0,g.iH)("");let x,k;const M={name:"ListSetting",setup(){const a=(0,c.Z)();return{txtClientName:(0,g.iH)(d),txtAdminCode:(0,g.iH)(v),txtUserCode:(0,g.iH)(p),txtEmail:(0,g.iH)(b),txtHomeTeam:(0,g.iH)(_),txtHomeTeamAlias:(0,g.iH)(h),txtStandardText:(0,g.iH)(f),txtSeason:(0,g.iH)(S),onSettingUpdated(){a.notify({type:"positive",message:"Einstellungen wurden erfolgreich aktualisiert!"})},editSetting:(0,g.iH)(!1)}},data(){return{getCookie:m.ej,getAdminCode:m.kY,URLMatchManagementAPI:m.gn}},computed:{},mounted(){this.setVariables().then((()=>{this.getTenant()}))},methods:{setVariables(){return v.value=(0,m.kY)((0,m.ej)("applicationCode")),k=m.gn+"/Tenant",Promise.resolve()},getTenant(){this.$axios.get(`${k}/code/${v.value}`).then((a=>{200===a.status?(x=a.data.id,d.value=a.data.name,v.value=a.data.adminCode,p.value=a.data.userCode,b.value=a.data.email,_.value=a.data.homeTeam,h.value=a.data.homeTeamAlias,f.value=a.data.standardText,S.value=a.data.season):console.log("Unexpected status code:",a.status)})).catch((a=>{console.log(a)}))},onSettingClick(){this.editSetting=!0},editSettingSave(a,e,t,l,s){const n={id:x,creationTime:null,lastModificationTime:null,name:a,userCode:null,homeTeam:null,email:e,homeTeamAlias:t,standardText:l,season:s};this.$axios.put(`${k}/${x}`,n).then((a=>{200===a.status?(this.onSettingUpdated(),this.getTenant()):console.log("Unexpected status code:",a.status)})).catch((a=>console.log(a)))}}};var C=t(1639),H=t(9885),T=t(1663),y=t(1973),w=t(3246),W=t(490),B=t(1233),A=t(3115),U=t(2074),V=t(4458),P=t(3190),L=t(6611),E=t(926),Z=t(1821),F=t(8879),q=t(1487),D=t(1136),K=t(2146),O=t(9984),J=t.n(O);const z=(0,C.Z)(M,[["render",u]]),Q=z;J()(M,"components",{QPage:H.Z,QToolbar:T.Z,QToolbarTitle:y.Z,QList:w.Z,QItem:W.Z,QItemSection:B.Z,QItemLabel:A.Z,QDialog:U.Z,QCard:V.Z,QCardSection:P.Z,QInput:L.Z,QSeparator:E.Z,QCardActions:Z.Z,QBtn:F.Z,QImg:q.Z}),J()(M,"directives",{Ripple:D.Z,ClosePopup:K.Z})}}]);