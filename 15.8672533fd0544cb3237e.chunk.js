(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"0b8eb3e35929778b339a":function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),a=n.n(r),o=(n("8a2d1b95e05b6a321e74"),n("0d7f0986bcd2f33d8a2a")),i=n("ab039aecd4a1d4fedc0e"),c=n("d7dd51e1bf6bfc2c9c3d"),s=n("ab4cb61bcb2dc161defb"),d=n("a28fc3c963a1d4d1a2e5"),l=(n("5ef9de3df8d92ea0e41c"),n("5fa3f8487e09c6182715")),u=n.n(l),f=n("f3b0ff1628e56352bcbf"),m=n.n(f),p=n("a1cf5d6fa4ed65a6ddd5"),g=n.n(p),b=n("6a4f9c383785f9168266"),v=n.n(b),y=n("d3a850c4000d77bccc89"),h=n.n(y),j=n("f2873ecf7390fe7d7c89"),w=n.n(j);function S(e){var t={dispatch:m.a,subscribe:m.a,getState:m.a,replaceReducer:m.a,runSaga:m.a,injectedReducers:h.a,injectedSagas:h.a};v()(w()(e,t),"(app/utils...) injectors: Expected a valid redux store")}var M=n("491cc2e27aa2b4221847");function k(e,t){return function(n,r){t||S(e),v()(u()(n)&&!g()(n)&&m()(r),"(app/utils...) injectReducer: Expected `reducer` to be a reducer function"),Reflect.has(e.injectedReducers,n)&&e.injectedReducers[n]===r||(e.injectedReducers[n]=r,e.replaceReducer(Object(M.a)(e.injectedReducers)))}}function O(e){return S(e),{injectReducer:k(e,!0)}}var x=function(e){var t=e.key,n=e.reducer,r=a.a.useContext(c.ReactReduxContext);a.a.useEffect(function(){O(r.store).injectReducer(t,n)},[])},P="@@saga-injector/daemon",C="@@saga-injector/once-till-unmount";function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach(function(t){N(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=["@@saga-injector/restart-on-remount",P,C],A=function(e){return v()(u()(e)&&!g()(e),"(app/utils...) injectSaga: Expected `key` to be a non empty string")},F=function(e){var t={saga:m.a,mode:function(e){return u()(e)&&E.includes(e)}};v()(w()(e,t),"(app/utils...) injectSaga: Expected a valid saga descriptor")};function H(e,t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;t||S(e);var o=I(I({},r),{},{mode:r.mode||P}),i=o.saga,c=o.mode;A(n),F(o);var s=Reflect.has(e.injectedSagas,n);(!s||s&&c!==P&&c!==C)&&(e.injectedSagas[n]=I(I({},o),{},{task:e.runSaga(i,a)}))}}function L(e,t){return function(n){if(t||S(e),A(n),Reflect.has(e.injectedSagas,n)){var r=e.injectedSagas[n];r.mode&&r.mode!==P&&(r.task.cancel(),e.injectedSagas[n]="done")}}}function D(e){return S(e),{injectSaga:H(e,!0),ejectSaga:L(e,!0)}}var T,_=function(e){var t=e.key,n=e.saga,r=e.mode,o=a.a.useContext(c.ReactReduxContext);a.a.useEffect(function(){var e=D(o.store);return e.injectSaga(t,{saga:n,mode:r}),function(){e.ejectSaga(t)}},[])},G=n("c4ec0be7fefbdf794ace"),$=function(e){return e.global||G.b},V=n("b74a65a6fc6394d57886"),U=n("0b3cb19af78752326f59"),J=U.b.ul.withConfig({displayName:"Ul",componentId:"x4jau1-0"})(["list-style:none;margin:0;width:100%;max-height:30em;overflow-y:auto;padding:0 1em;"]),z=U.b.div.withConfig({displayName:"Wrapper",componentId:"sc-18baxpe-0"})(["padding:0;margin:0;width:100%;background-color:white;border:1px solid #ccc;border-radius:3px;overflow:hidden;"]);function W(e,t,n,r){T||(T="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:T,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var q=W("div",{});var X,Q=function(e){var t=e.component,n=q;return n=e.items?e.items.map(function(e){return W(t,{item:e},"item-".concat(e.id))}):W(t,{}),W(z,{},void 0,W(J,{},void 0,n))},K=U.b.div.withConfig({displayName:"Item",componentId:"sc-1vn43bq-0"})(["display:flex;justify-content:space-between;width:100%;height:100%;align-items:center;"]),Y=U.b.li.withConfig({displayName:"Wrapper",componentId:"krkiae-0"})(["width:100%;height:3em;display:flex;align-items:center;position:relative;border-top:1px solid #eee;&:first-child{border-top:none;}"]);function B(e,t,n,r){X||(X="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:X,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var Z,ee=function(e){return B(Y,{},void 0,B(K,{},void 0,e.item))},te=n("8e4c85c29cdef1bf8a5f");function ne(e,t,n,r){Z||(Z="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:Z,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var ae=ne("path",{d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z"});var oe,ie=function(e){return a.a.createElement("svg",re({height:"1em",width:"0.875em",className:e.className},e),ae)},ce=Object(U.b)(ie).withConfig({displayName:"IssueIcon",componentId:"z9gswu-0"})(["fill:#ccc;margin-right:0.25em;"]),se=n("6c074f91ad5b62e00274"),de=Object(U.b)(se.a).withConfig({displayName:"IssueLink",componentId:"sl2hqc-0"})(["height:100%;color:black;display:flex;align-items:center;justify-content:center;white-space:nowrap;"]),le=Object(U.b)(se.a).withConfig({displayName:"RepoLink",componentId:"sc-3cib05-0"})(["height:100%;color:black;display:flex;align-items:center;width:100%;"]),ue=U.b.div.withConfig({displayName:"Wrapper",componentId:"atg5i8-0"})(["width:100%;height:100%;display:flex;align-items:space-between;"]);function fe(e,t,n,r){oe||(oe="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:oe,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var me=fe(ce,{});var pe,ge=Object(c.connect)(Object(d.b)({currentUser:Object(d.a)($,function(e){return e.currentUser})}))(function(e){var t=e.item,n="";t.owner.login!==e.currentUser&&(n="".concat(t.owner.login,"/"));var r=fe(ue,{},void 0,fe(le,{href:t.html_url,target:"_blank"},void 0,n+t.name),fe(de,{href:"".concat(t.html_url,"/issues"),target:"_blank"},void 0,me,fe(i.FormattedNumber,{value:t.open_issues_count})));return fe(ee,{item:r},"repo-list-item-".concat(t.full_name))});function be(e,t,n,r){pe||(pe="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:pe,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var ve=be(Q,{component:te.a}),ye=be(ee,{item:"Something went wrong, please try again!"});var he=function(e){var t=e.loading,n=e.error,r=e.repos;if(t)return ve;if(!1!==n)return be(Q,{component:function(){return ye}});return!1!==r?be(Q,{items:r,component:ge}):null},je=U.b.span.withConfig({displayName:"AtPrefix",componentId:"sc-1pbuyeb-0"})(["color:black;margin-left:0.4em;"]),we=(n("52c959d5e40cc4d67575"),U.b.form.withConfig({displayName:"Form",componentId:"mqqnq3-0"})(["margin-bottom:1em;"])),Se=(U.b.input.withConfig({displayName:"Input",componentId:"m74mfv-0"})(["outline:none;border:none;border-bottom:1px dotted #999;background-color:transparent;"]),U.b.ul.withConfig({displayName:"List",componentId:"ga1lyk-0"})(["font-family:Georgia,Times,'Times New Roman',serif;padding-left:1.75em;"])),Me=U.b.li.withConfig({displayName:"ListItem",componentId:"sc-1o65jdo-0"})(["margin:1em 0;"]),ke=U.b.p.withConfig({displayName:"ListItemTitle",componentId:"h4yemd-0"})(["font-weight:bold;"]),Oe=n("93b48e72be30fea11acb"),xe="boilerplate.containers.HomePage",Pe=Object(i.defineMessages)({feedbackHeader:{id:"".concat(xe,".feedback.header"),defaultMessage:"Languages and Technology Stack"},feedbackMessage:{id:"".concat(xe,".feedback.message"),defaultMessage:"\n    C#, JAVA, SQL/MYSQL, XAML (WPF), React(Javascript),\n    DevExpress, Nuget, Xamarin, Microsoft Great Plains,eConnect,\n    DESIGN PATTERNS:MVVM/MVC/Repository Pattern/Singleton/Dependency Injection, Gradle, bitbucket, TFS,JIRA,GIT,Teamcity,  PuRpL3 M0nK3y =D\n    "},LanguageHeader:{id:"".concat(xe,".language.header"),defaultMessage:"Languages"},languageMessage:{id:"".concat(xe,".language.message"),defaultMessage:"\n    C#, JAVA, SQL/MYSQL/Aurora, AWS/Azure XAML (WPF), React(Javascript), python, bash\n    "},technologyMessage:{id:"".concat(xe,".technology.message"),defaultMessage:"\n    .NET Framework/WebApi ECS Amazon, LogzIo,Gradle, bitbucket, TFS, JIRA, GIT, Teamcity, DevExpress, Nuget, Xamarin, Microsoft Great Plains,eConnect\n    "},designPatternMessage:{id:"".concat(xe,".designPattern.message"),defaultMessage:"\n    MVVM/MVC/Repository Pattern/Singleton/Dependency Injection,  PuRpL3 M0nK3y   =D\n    "},startProjectHeader:{id:"".concat(xe,".start_project.header"),defaultMessage:"Start your next react project in seconds"},startProjectMessage:{id:"".concat(xe,".start_project.message"),defaultMessage:"A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices"},trymegitHubUserName:{id:"".concat(xe,".tryme.gitHubUserName"),defaultMessage:"Account for Nick J. Velasco - @CompG33k"},trymeHeader:{id:"".concat(xe,".tryme.header"),defaultMessage:"Try me!"},trymeMessage:{id:"".concat(xe,".tryme.message"),defaultMessage:"Show Github repositories by"},trymeAtPrefix:{id:"".concat(xe,".tryme.atPrefix"),defaultMessage:"@"}}),Ce=n("fcb99a06256635f70435");function Re(e,t){return{type:Ce.c,repos:e,username:t}}var Ie="boilerplate/Home/CHANGE_USERNAME";var Ne=n("7edf83707012a871cdfb"),Ee={username:""},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;return Object(Ne.a)(e,function(e){switch(t.type){case Ie:e.username=t.username.replace(/@/gi,"")}})},Fe=function(e){return e.home||Ee},He=n("d782b72bc5b680c7122c");function Le(e){return 204===e.status||205===e.status?null:e.json()}function De(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function Te(e,t){return fetch(e,t).then(De).then(Le)}var _e,Ge=regeneratorRuntime.mark(Ve),$e=regeneratorRuntime.mark(Ue);function Ve(){var e,t,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return t="https://api.github.com/users/".concat(e="CompG33k","/repos?type=all&sort=updated"),r.prev=2,r.next=5,Object(He.call)(Te,t);case 5:return n=r.sent,r.next=8,Object(He.put)(Re(n,e));case 8:r.next=14;break;case 10:return r.prev=10,r.t0=r.catch(2),r.next=14,Object(He.put)((a=r.t0,{type:Ce.b,error:a}));case 14:case"end":return r.stop()}var a},Ge,null,[[2,10]])}function Ue(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(He.takeLatest)(Ce.a,Ve);case 2:case"end":return e.stop()}},$e)}function Je(e,t,n,r){_e||(_e="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=r;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var s in a)void 0===t[s]&&(t[s]=a[s]);else t||(t=a||{});return{$$typeof:_e,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}n.d(t,"HomePage",function(){return qe}),n.d(t,"mapDispatchToProps",function(){return Qe});var ze="home",We=Je(o.Helmet,{},void 0,Je("title",{},void 0,"Home Page"),Je("meta",{name:"description",content:"A React.js Boilerplate application homepage"}));function qe(e){var t=e.username,n=e.loading,o=e.error,c=e.repos,s=e.onSubmitForm;e.onChangeUsername;x({key:ze,reducer:Ae}),_({key:ze,saga:Ue}),Object(r.useEffect)(function(){(t="CompG33k")&&t.trim().length>0&&s()},[]);var d={loading:n,error:o,repos:c};return Je("article",{},void 0,We,Je("div",{},void 0,Je(V.a,{},void 0,a.a.createElement(i.FormattedMessage,Pe.startProjectHeader)),Je("p",{},void 0,a.a.createElement(i.FormattedMessage,Pe.startProjectMessage)),Je(Se,{},void 0,Je(Me,{},void 0,Je(ke,{},void 0,a.a.createElement(i.FormattedMessage,Pe.feedbackHeader)),Je(Se,{},void 0,Je(Me,{},void 0,Je("p",{},void 0,a.a.createElement(i.FormattedMessage,Pe.languageMessage))),Je(Me,{},void 0,Je("p",{},void 0,a.a.createElement(i.FormattedMessage,Pe.technologyMessage))),Je(Me,{},void 0,Je("p",{},void 0,a.a.createElement(i.FormattedMessage,Pe.designPatternMessage)))))),Je(Oe.a,{},void 0,Je(V.a,{},void 0,a.a.createElement(i.FormattedMessage,Pe.trymeHeader)),Je(we,{onSubmit:s},void 0,Je("label",{htmlFor:"username"},void 0,Je(je,{},void 0,a.a.createElement(i.FormattedMessage,Pe.trymegitHubUserName)))),a.a.createElement(he,d))))}var Xe=Object(d.b)({repos:Object(d.a)($,function(e){return e.userData.repositories}),username:Object(d.a)(Fe,function(e){return e.username}),loading:Object(d.a)($,function(e){return e.loading}),error:Object(d.a)($,function(e){return e.error})});function Qe(e){return{onChangeUsername:function(t){return e((n=t.target.value,{type:Ie,username:n}));var n},onSubmitForm:function(t){void 0!==t&&t.preventDefault&&t.preventDefault(),e({type:Ce.a})}}}var Ke=Object(c.connect)(Xe,Qe);t.default=Object(s.compose)(Ke,r.memo)(qe)},"52c959d5e40cc4d67575":function(e,t,n){"use strict";var r=n("0b3cb19af78752326f59"),a=n("93b48e72be30fea11acb");Object(r.b)(a.a).withConfig({displayName:"CenteredSection",componentId:"sc-8u823m-0"})(["text-align:center;"])},"93b48e72be30fea11acb":function(e,t,n){"use strict";var r=n("0b3cb19af78752326f59").b.section.withConfig({displayName:"Section",componentId:"sc-1bx1hy0-0"})(["margin:3em auto;&:first-child{margin-top:0;}"]);t.a=r}}]);