(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bookmarks"],{"085c":function(e,o,n){"use strict";n.r(o);var t=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"translation"},[n("h1",[e._v("This is an translation test page")]),n("a",{attrs:{href:"https://github.com/scenaristeur/solid-vue-panes/blob/master/src/common/locales.json",target:"_blank"}},[e._v("Help Translating to your language")]),n("hr"),e._v(" Translation test "),n("label",{attrs:{for:"locale"}},[e._v("locale")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.locale,expression:"locale"}],on:{change:function(o){var n=Array.prototype.filter.call(o.target.options,(function(e){return e.selected})).map((function(e){var o="_value"in e?e._value:e.value;return o}));e.locale=o.target.multiple?n:n[0]}}},[n("option",[e._v("en")]),n("option",[e._v("fr")]),n("option",[e._v("de")]),n("option",[e._v("ja")]),n("option",[e._v("es")]),n("option",[e._v("ru")])]),n("p",[e._v("hello: "+e._s(e.$t("hello")))]),n("p",[e._v("login: "+e._s(e.$t("login")))]),n("p",[e._v("logout: "+e._s(e.$t("logout")))])])},s=[],r={name:"TranslationTest",data:function(){return{locale:"en"}},watch:{locale:function(e){this.$i18n.locale=e}}},i=r,a=n("2877"),l=n("868b"),u=n("be78"),d=Object(a["a"])(i,t,s,!1,null,null,null);"function"===typeof l["default"]&&Object(l["default"])(d),"function"===typeof u["default"]&&Object(u["default"])(d);o["default"]=d.exports},"862d":function(e,o){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"hello":"hello world!","login":"Login","logout":"Logout","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"POds in the POCKet!","tension_annonce":"A Tension is a difference between WHAT IS is and WHAT SHOULD BE","NameQuestion":"Please give a name to your worst Tension ?","WhatIs":"What is ?","WhatShouldBe":"What should be ?","what_role":"In which role do you feel this tension ?","which_domains":"Which domains does this tension apply ?","Save":"Save","Tension":"Tension","Tensions":"Tensions","Groups":"Groups","Name":"Name","provider_select_proposition":"If you don\'t have a POD, please select a provider in the list below:","proposition_frends_graph":"To see your Solid friends in the graph, please refresh this page.","refresh":"Refresh","choose_source":"Choose a source :"},"fr":{"hello":"Salut tout le monde!","login":"S\'identifier","logout":"Se déconnecter","chat":"Chat","inbox":"Boîte Mails","talk":"Parle","databrowser":"Stockage","bookmarks":"Signets","profile":"Profil","fofri":"Suivi d\'amis","friends":"Amis","communication":"Communication","storage":"Stockage","User":"Utilisateur","explorer":"Explorateur","editor":"Editeur","POds in the POCKet":"Ton POd dans ta POChe!","tension_annonce":"Une TENSION est la différence entre CE QUI EST et CE QUI DEVRAIT ÊTRE","NameQuestion":"S\'il te plaît, donne un nom à ta pire Tension","WhatIs":"Ce qui est ?","WhatShouldBe":"Ce qui devrait être ?","what_role":"Dans quel Rôle ressens-tu cette tension ?","which_domains":"A quels domaines s\'applique cette Tension ?","Save":"Enregistrer","Tension":"Tension","Tensions":"Tensions","Groups":"Groupes","Name":"Nom","provider_select_proposition":"Si vous n\'avez pas de POD, vous pouvez selectionner un fournisseur dans la liste suivante :","proposition_frends_graph":"Pour voir vos amis Solid dans le graphe","refresh":"Rafraîchir","choose_source":"Choisissez une source"},"de":{"hello":"Hallo Welt!","login":"Anmeldung","logout":"Ausloggen","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"Dein POD in deiner Tasche!","Tension":"Tension","Tensions":"Tensions","Groups":"Groups","Name":"Name"},"es":{"hello":"Hola Mundo !","login":"Iniciar sesión","logout":"Cerrar sesión","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"¡Tu POD en tu bolsillo!","Tension":"Tension","Tensions":"Tensions","Groups":"Groups","Name":"Name"},"ja":{"hello":"こんにちは、世界！","login":"ログインする","logout":"ログアウト","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"あなたのポケットにあなたのPOD！","Tension":"Tension","Tensions":"Tensions","Groups":"Groups","Name":"Name"},"ru":{"hello":"Привет мир！","login":"авторизоваться","logout":"выйти!","chat":"Chat","inbox":"Inbox","talk":"Talk","databrowser":"DataBrowser","bookmarks":"Bookmarks","profile":"Profile","fofri":"Follow Friends","friends":"Friends","communication":"Communication","storage":"Storage","User":"User","explorer":"Explorer","editor":"Editor","POds in the POCKet":"Ваш POD в кармане!","Tension":"Tension","Tensions":"Tensions","Groups":"Groups","Name":"Name"}}'),delete e.options._Ctor}},"868b":function(e,o,n){"use strict";var t=n("862d"),s=n.n(t);o["default"]=s.a},b51b:function(e,o,n){"use strict";n.r(o);var t=function(){var e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"bookmarks"},[n("ShareTarget"),n("BookmarksList",{attrs:{mode:"public"}}),n("BookmarksList",{attrs:{mode:"private"}})],1)},s=[],r=(n("d3b7"),{name:"BookmarksView",components:{BookmarksList:function(){return n.e("chunk-96cf5244").then(n.bind(null,"dfa2"))},ShareTarget:function(){return n.e("chunk-2d21de19").then(n.bind(null,"d2d9"))}}}),i=r,a=n("2877"),l=Object(a["a"])(i,t,s,!1,null,null,null);o["default"]=l.exports},be78:function(e,o,n){"use strict";var t=n("ede8"),s=n.n(t);o["default"]=s.a},ede8:function(e,o){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"de":{"hello":"Hallo Welt!"},"fr":{"hello":"Salut le monde!"}}'),delete e.options._Ctor}}}]);
//# sourceMappingURL=bookmarks.0c547a86.js.map