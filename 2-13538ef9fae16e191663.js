(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{258:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a="https://api.binstd.com";a="https://api.binstd.com",console.log("server_url:",a)},265:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a,o=n(286);"undefined"!=typeof window&&(a=new o(window.ethereum||new o.HttpProvider("https://ropsten.infura.io/v3/0045c2ce288a4e649a8f39f3d19446b4")))},268:function(e,t,n){"use strict";n(50);var a=n(9),o=n.n(a),r=n(0),i=n.n(r),s=n(1),c=n.n(s),l=n(75),u=n(307),p=n.n(u),d=n(308),m=n.n(d),h=n(256),f=n.n(h),g=n(259),b=n.n(g),y=n(282),v=n.n(y),E=n(20),k=n(305),w=n.n(k),x=n(304),S=n.n(x),C=n(301),O=n.n(C),j=n(303),T=n.n(j),N=n(306),M=n.n(N),A=n(265),I=n(28),D=n.n(I),J=n(280),z=function(){function e(){this.id=Math.random(),this.uid=void 0,this.username=void 0,this.telephone=void 0,this.address=void 0,this.logintype=void 0,this.verifyed=void 0,this.auth=void 0,this.choossedmenu=void 0}var t=e.prototype;return t.allSet=function(e){e.uid&&(this.uid=e.uid),e.username&&(this.username=e.username),e.telephone&&(this.telephone=e.telephone),e.address&&(this.address=e.address),e.verifyed&&(this.verifyed=e.verifyed),e.logintype&&(this.logintype=e.logintype),e.auth&&(this.auth=e.auth)},t.uidSet=function(e){this.uid=e},t.usernameSet=function(e){this.username=e},t.telephoneSet=function(e){this.telephone=e},t.addressSet=function(e){this.address=e},t.logintypeSet=function(e){this.logintype=e},t.verifyedSet=function(e){this.verifyed=e},t.authSet=function(e){this.auth=e},t.clearAll=function(){this.uid="",this.username="",this.telephone="",this.address="",this.logintype="",this.verifyed="",this.auth=""},D()(e,[{key:"getAllData",get:function(){return{uid:this.uid,username:this.username,telephone:this.telephone,address:this.address,verifyed:this.verifyed,logintype:this.logintype,auth:this.auth}}}]),e}();Object(J.f)(z,{uid:J.k,username:J.k,telephone:J.k,address:J.k,verifyed:J.k,logintype:J.k,auth:J.k,choossedmenu:J.k});var R=new z,H=n(281),W=n(258),_=Object(H.a)(function(e){function t(t){var n;return(n=e.call(this,t)||this).handleProfileMenuOpen=function(e){n.setState({anchorEl:e.currentTarget})},n.handleMenuClose=function(){n.setState({anchorEl:null}),n.handleMobileMenuClose()},n.handleMobileMenuOpen=function(e){n.setState({mobileMoreAnchorEl:e.currentTarget})},n.handleMobileMenuClose=function(){n.setState({mobileMoreAnchorEl:null})},n.handleSignMessage=function(e){var t=e.publicAddress,a=e.nonce,o=e.id;return n.setState({id:o}),new Promise(function(e,n){return window.web3.personal.sign(window.web3.fromUtf8("I am signing: "+a),t,function(a,o){return a?n(a):(console.log("\n signature:",o),e({publicAddress:t,signature:o}))})})},n.handleAuthenticate=function(e){var t=e.publicAddress,n=e.signature;return fetch(W.a+"/api/auth",{body:JSON.stringify({publicAddress:t,signature:n}),headers:{"Content-Type":"application/json"},method:"POST"}).then(function(e){return e.json()})},n.handleLoggedIn=function(e){var t={logintype:"ETH",address:window.web3.eth.accounts[0].toLowerCase(),auth:e,id:n.state.id};R.allSet(t),localStorage.setItem("userinfo",JSON.stringify(t)),console.log(R.logintype),n.setState({auth:e}),window.location.reload(!0)},n.handleLoggedOut=function(){localStorage.removeItem("userinfo"),localStorage.removeItem("userdapp"),R.clearAll(),n.setState({auth:void 0}),window.location.reload(!0)},n.handleSignup=function(e){return fetch(W.a+"/api/users",{body:JSON.stringify({publicAddress:e}),headers:{"Content-Type":"application/json"},method:"POST"}).then(function(e){return e.json()})},n.state={userinfo:{},anchorEl:null,mobileMoreAnchorEl:null,network:"",address:""},n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;if(void 0!==window.ethereum&&(this.login(),A.a.net_version().then(function(t){e.setState({networkId:t})}),localStorage.getItem("userinfo"))){var t=JSON.parse(localStorage.getItem("userinfo"));this.setState({userinfo:t})}},n.login=function(){var e=this;void 0!==window.ethereum&&window.ethereum.enable().then(function(t){console.log(t[0]),e.setState({address:t[0]})})},n.payToken=function(){var e=this;R.address||R.logintype||console.log("没有登录"),void 0!==window.ethereum&&window.ethereum.enable().then(function(t){var n=t[0];fetch(W.a+"/api/users?publicAddress="+n).then(function(e){return e.json()}).then(function(t){return t.length?t[0]:e.handleSignup(n)}).then(e.handleSignMessage).then(e.handleAuthenticate).then(e.handleLoggedIn).catch(function(e){window.alert(e)})})},n.render=function(){var e,t=this,n=this.state,a=n.userinfo,o=n.anchorEl,r=n.mobileMoreAnchorEl,s=n.networkId,c=this.props.classes,l=Boolean(o),u=Boolean(r);e="{}"===JSON.stringify(a)?i.a.createElement(b.a,{color:"inherit",onClick:function(){return t.payToken()}}," 登陆 "):i.a.createElement("div",null,i.a.createElement("div",{className:c.sectionDesktop},i.a.createElement(b.a,{color:"inherit",onClick:function(){return Object(E.b)("/dapp/"+a.address)}}," dapp "),i.a.createElement(v.a,{"aria-owns":l?"material-appbar":void 0,"aria-haspopup":"true",onClick:this.handleProfileMenuOpen,color:"inherit"},i.a.createElement(O.a,null))),i.a.createElement("div",{className:c.sectionMobile},i.a.createElement(v.a,{"aria-haspopup":"true",onClick:this.handleMobileMenuOpen,color:"inherit"},i.a.createElement(T.a,null))));var d,h=i.a.createElement(S.a,{anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:this.handleMenuClose},i.a.createElement(w.a,{onClick:function(){return Object(E.b)("/userinfo")}},"个人中心"),i.a.createElement(w.a,{onClick:function(){return t.handleLoggedOut()}},"退出")),g=i.a.createElement(S.a,{anchorEl:r,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:this.handleMobileMenuClose},i.a.createElement(w.a,{onClick:function(){return Object(E.b)("/userinfo")}},i.a.createElement("p",null,"个人中心")),i.a.createElement(w.a,{onClick:function(){return Object(E.b)("/dapp/"+a.address)}},i.a.createElement("p",null,"我的Dapp")),i.a.createElement(w.a,{onClick:function(){return t.handleLoggedOut()}},i.a.createElement("p",null,"退出"))),y="";switch(s){case"1":y=c.colorMain,d="main";break;case"2":y="",d="morden";break;case"3":y=c.colorRopsten,d="ropsten";break;case"4":y=c.colorRinkeby,d="rinkeby";break;case"42":y=c.colorKovan,d="kovan";break;default:d=" "}var k=i.a.createElement("div",null,i.a.createElement(b.a,{color:"inherit",onClick:function(){return t.login()}},i.a.createElement(M.a,{className:y,style:{fontSize:15,marginRight:"5px"}})," ",d));return i.a.createElement("div",{className:c.root},i.a.createElement(p.a,{position:"fixed",className:c.appBar},i.a.createElement(m.a,null,i.a.createElement("div",{className:c.sectionDesktop},i.a.createElement(v.a,{className:c.menuButton,color:"inherit","aria-label":"Menu"},i.a.createElement("img",{src:"https://programmerinnfile.b0.upaiyun.com/community/10001/20180814/yzdXjjAI4g.png",style:{height:30,width:108,margin:"0 35px 5px 0"}}))),i.a.createElement(f.a,{variant:"h6",color:"inherit",className:c.grow},i.a.createElement(b.a,{color:"inherit",onClick:function(){return Object(E.b)("/")}},"首页"),i.a.createElement(b.a,{color:"inherit",onClick:function(){return Object(E.b)("/imbit")}},"IMbit"),i.a.createElement(b.a,{color:"inherit",onClick:function(){return Object(E.b)("/dapp/index")}},"Dapp部署"),i.a.createElement(b.a,{color:"inherit",onClick:function(){return Object(E.b)("/docs/getting-started/info")}},"API")),i.a.createElement("div",{className:c.sectionDesktop},k),e),h,g))},t}(i.a.Component));_.propTypes={classes:c.a.object.isRequired};t.a=Object(l.withStyles)(function(e){var t,n;return{root:{width:"100%"},appBar:{zIndex:e.zIndex.drawer+1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20},sectionDesktop:(t={display:"none"},t[e.breakpoints.up("md")]={display:"flex"},t),sectionMobile:(n={display:"flex"},n[e.breakpoints.up("md")]={display:"none"},n),colorMain:{color:"#1abc9c"},colorRopsten:{color:"#FF3E96"},colorRinkeby:{color:"#FFD700"},colorKovan:{color:"#690496"}}})(_)},276:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(1),i=n.n(r),s=n(268),c=function(e){var t=e.children;return o.a.createElement("div",null,o.a.createElement(s.a,null),t)};c.propTypes={children:i.a.node.isRequired},t.a=c},291:function(e,t){},309:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o});var a=function(e,t){return e[t]?(console.log("jsonData[name].value",e[t].value),e[t].value):t},o=function(e,t,n){return console.log(e,t,n),e[t]&&e[t].inputs&&e[t].inputs[n]?e[t].inputs[n]:n}},375:function(e,t,n){"use strict";n(376),n(379),n(331),n(126),n(77),n(381);var a=n(9),o=n.n(a),r=n(0),i=n.n(r),s=n(258),c=n(267),l=n.n(c),u=n(20),p=n(265),d=n(309),m=n(262),h=n.n(m),f=n(256),g=n.n(f),b=n(334),y=n.n(b),v=n(259),E=n.n(v),k=n(1),w=n.n(k),x=n(115),S=n.n(x),C=n(260),O=n.n(C),j=function(e){function t(t){var n;return(n=e.call(this,t)||this).SetInput=function(e,t){var a=n.state.deploydata;a[e]=t.target.value,n.setState({deploydata:a})},n.delpoyContract=function(){var e=Object.values(n.state.deploydata);window.ethereum.enable().then(function(e){console.log(e)}),console.log(n.state.deploydata),p.a.accounts().then(function(t){var a=p.a.contract(n.state.contract.abi,n.state.contract.bytecode,{from:t[0],gas:4e6});a.new.apply(a,e.concat([function(e,t){e||n.postDapp(t)}]))})},n.postDapp=function(e){var t={dappName:"",txHash:e,contractInfo:n.props.name,publicAddress:n.state.userinfo.address,dappChain:n.state.network};console.log(t),l()(s.a+"/api/dapp",{body:JSON.stringify(t),headers:{"Content-Type":"application/json"},method:"POST"}).then(function(e){return e.json()}).then(function(t){t.id&&Object(u.b)("/dapp/deployed/"+e)})},n.state={contract:{},inputlist:[],deploydata:{},userinfo:{},network:"",transferJson:{}},n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this,t="";if(p.a.net_version().then(function(n){switch(n){case"1":console.log("This is mainnet"),t="eth_main";break;case"2":console.log("This is the deprecated Morden test network."),t="eth_morden";break;case"3":console.log("This is the ropsten test network."),t="eth_ropsten";break;case"4":console.log("This is the Rinkeby test network."),t="eth_rinkeby";break;case"42":console.log("This is the Kovan test network."),t="eth_kovan";break;default:console.log("This is an unknown network."),t="eth_unknown"}e.setState({network:t})}),localStorage.getItem("userinfo")){var n=JSON.parse(localStorage.getItem("userinfo"));this.setState({userinfo:n})}l()(s.a+"/api/chain/abi?apiname="+this.props.name).then(function(e){return e.json()}).then(function(t){var n={};if(0===t.code){var a=[],o=t.data.abi,r=Array.isArray(o),i=0;for(o=r?o:o[Symbol.iterator]();;){var s;if(r){if(i>=o.length)break;s=o[i++]}else{if((i=o.next()).done)break;s=i.value}var c=s;"constructor"===c.type&&(a=c.inputs)}var l=a,u=Array.isArray(l),p=0;for(l=u?l:l[Symbol.iterator]();;){var d;if(u){if(p>=l.length)break;d=l[p++]}else{if((p=l.next()).done)break;d=p.value}n[d.name]=""}e.setState({contract:t.data,transferJson:t.data.translate,inputlist:a,deploydata:n})}}).catch(function(e){console.log("失败")})},n.render=function(){var e=this,t=this.state,n=t.inputlist,a=t.transferJson,o=this.props.classes,r=n.map(function(t,n){var o=t.name;return i.a.createElement(h.a,{key:n,item:!0,xs:12},i.a.createElement(y.a,{required:!0,id:"address1",name:o,label:Object(d.b)(a,"constructor",o),onChange:e.SetInput.bind(e,o),fullWidth:!0,autoComplete:"billing address-line1"}))});return i.a.createElement("div",{style:{minHeight:"600px"}},i.a.createElement(O.a,{className:o.paper},i.a.createElement(g.a,{variant:"h6",gutterBottom:!0},"合约部署"),i.a.createElement(h.a,{container:!0,spacing:24},r),i.a.createElement(E.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:o.submit,onClick:function(){return e.delpoyContract()}},"确认")))},t}(i.a.Component);j.propTypes={classes:w.a.object.isRequired},t.a=S()(function(e){return{paper:{maxWidth:"550px",margin:"auto",marginTop:12*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:5*e.spacing.unit+"px "+5*e.spacing.unit+"px "+3*e.spacing.unit+"px"},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(j)},384:function(e,t,n){"use strict";var a=n(9),o=n.n(a),r=n(0),i=n.n(r),s=n(267),c=n.n(s),l=n(258),u=n(1),p=n.n(u),d=n(115),m=n.n(d),h=n(260),f=n.n(h),g=n(262),b=n.n(g),y=n(256),v=n.n(y),E=n(273),k=n.n(E),w=n(20),x=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={dapplist:[]},n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;c()(l.a+"/api/dapp/"+this.props.address+"?chain=eth_ropsten").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({dapplist:t})}).catch(function(e){console.log("失败")})},n.render=function(){var e=this.state.dapplist,t=this.props.classes,n=e.map(function(e,n){console.log(e);var a=e.contractInfo,o=e.txHash,r=e.contractAddress;return i.a.createElement("div",{key:n,className:t.root},i.a.createElement(f.a,{className:t.paper},i.a.createElement(b.a,{container:!0,spacing:24},i.a.createElement(b.a,{item:!0},i.a.createElement(k.a,{className:t.image,onClick:function(){return Object(w.b)("/dapp/manage/"+a+"/"+r)}},i.a.createElement("img",{className:t.img,alt:"complex",src:"https://smartz.io/static/img/erc-20.png"}))),i.a.createElement(b.a,{item:!0,xs:8,sm:!0,container:!0},i.a.createElement(b.a,{item:!0,xs:!0,container:!0,direction:"column"},i.a.createElement(b.a,{item:!0,xs:!0,style:{maxWidth:"500px",wordWrap:"break-word"}},i.a.createElement(v.a,{gutterBottom:!0,variant:"subtitle1"},a),"合约地址:",i.a.createElement(v.a,{color:"textSecondary"},i.a.createElement("a",{href:"http://localhost:8000",color:"textSecondary",target:"_blank",rel:"noopener noreferrer"},o))))))))});return i.a.createElement("div",{style:{minHeight:"600px",marginTop:"80px"}},n)},t}(i.a.Component);x.propTypes={classes:p.a.object.isRequired},t.a=m()(function(e){return{root:{marginTop:10},paper:{padding:2*e.spacing.unit,margin:"auto",maxWidth:660,height:140},image:{maxwidth:"80px",maxheight:"80px"},img:{margin:"auto",display:"block",maxWidth:"80px",maxHeight:"80px"}}})(x)},388:function(e,t,n){"use strict";n(77),n(381),n(376),n(379),n(126),n(339),n(331);var a=n(9),o=n.n(a),r=n(0),i=n.n(r),s=n(258),c=n(309),l=n(267),u=n.n(l),p=n(20),d=n(262),m=n.n(d),h=n(256),f=n.n(h),g=n(334),b=n.n(g),y=n(259),v=n.n(y),E=n(1),k=n.n(E),w=n(115),x=n.n(w),S=n(565),C=n.n(S),O=n(373),j=n.n(O),T=n(569),N=n.n(T),M=n(374),A=n.n(M),I=n(567),D=n.n(I),J=n(75),z=n(546),R=n.n(z),H=n(282),W=n.n(H),_=n(553),B=n.n(_);function F(e){var t=e.classes,n=e.setMessage,a=e.messageText,o=e.messageIsOpen;return i.a.createElement("div",null,i.a.createElement(R.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:o,autoHideDuration:6e3,onClose:function(){return n(!1)},ContentProps:{"aria-describedby":"message-id"},message:i.a.createElement("span",{id:"message-id"},a),action:[i.a.createElement(v.a,{key:"undo",color:"secondary",size:"small",onClick:function(){return n(!1)}},"已读"),i.a.createElement(W.a,{key:"close","aria-label":"Close",color:"inherit",className:t.close,onClick:function(){return n(!1)}},i.a.createElement(B.a,null))]}))}F.propTypes={classes:k.a.object.isRequired};var P=Object(J.withStyles)(function(e){return{close:{padding:e.spacing.unit/2}}})(F),q=n(571),L=n.n(q),K=n(579),G=n.n(K),U=n(575),X=n.n(U),Q=n(577),V=n.n(Q),Y=n(573),Z=n.n(Y),$=n(260),ee=n.n($),te=n(554),ne=n.n(te),ae=n(563),oe=n.n(ae),re=n(560),ie=n.n(re),se=n(556),ce=n.n(se),le=n(558),ue=n.n(le),pe=0;function de(e,t,n,a,o){return{id:pe+=1,name:e,calories:t,fat:n,carbs:a,protein:o}}var me=[de("Frozen yoghurt",159,6,24,4),de("Ice cream sandwich",237,9,37,4.3)],he=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={dapplist:[]},n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;u()(s.a+"/api/dapp/"+this.props.address+"?chain=eth_ropsten").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({dapplist:t})}).catch(function(e){console.log("失败")})},n.render=function(){var e=this.props.classes;return i.a.createElement("div",{style:{minHeight:"600px",marginTop:"10px"}},i.a.createElement("div",{className:e.root},i.a.createElement(ee.a,{className:e.paper},i.a.createElement(m.a,{container:!0,spacing:24},i.a.createElement(m.a,{item:!0,xs:8,sm:!0,container:!0},i.a.createElement(m.a,{item:!0,xs:!0,container:!0,direction:"column"},i.a.createElement(m.a,{item:!0,xs:!0,style:{maxWidth:"400px"}},i.a.createElement(f.a,{gutterBottom:!0,variant:"subtitle1"},"我是合约11"),"合约地址:",i.a.createElement(f.a,{color:"textSecondary"},i.a.createElement("a",{href:"http://localhost:8000",color:"textSecondary",target:"_blank",rel:"noopener noreferrer"},"luz243434343")))))))),i.a.createElement("div",{className:e.root},i.a.createElement(ee.a,{className:e.paper},i.a.createElement(m.a,{container:!0,spacing:24},i.a.createElement(m.a,{item:!0,xs:8,sm:!0,container:!0},i.a.createElement(m.a,{item:!0,xs:!0,container:!0,direction:"column"},i.a.createElement(m.a,{item:!0,xs:!0,style:{}},i.a.createElement(f.a,{gutterBottom:!0,variant:"subtitle1"},"方法名称: 转账"),"hashhashhashhashhashhashhashhash","输入:",i.a.createElement(ne.a,{className:e.table},i.a.createElement(ce.a,null,i.a.createElement(ue.a,null,i.a.createElement(ie.a,null,"参数名"),i.a.createElement(ie.a,{numeric:!0},"值"))),i.a.createElement(oe.a,null,me.map(function(e){return i.a.createElement(ue.a,{key:e.id},i.a.createElement(ie.a,{component:"th",scope:"row"},e.name),i.a.createElement(ie.a,{numeric:!0},e.calories))}))),"结果:",i.a.createElement(ne.a,{className:e.table},i.a.createElement(ce.a,null,i.a.createElement(ue.a,null,i.a.createElement(ie.a,null,"参数名"),i.a.createElement(ie.a,{numeric:!0},"值"))),i.a.createElement(oe.a,null,me.map(function(e){return i.a.createElement(ue.a,{key:e.id},i.a.createElement(ie.a,{component:"th",scope:"row"},e.name),i.a.createElement(ie.a,{numeric:!0},e.calories))}))))))))))},t}(i.a.Component);he.propTypes={classes:k.a.object.isRequired};var fe=x()(function(e){return{root:{marginTop:10},paper:{padding:2*e.spacing.unit,margin:"auto",maxWidth:600},image:{width:"100px",height:"100px"},img:{margin:"auto",display:"block",maxWidth:"80px",maxHeight:"80px"},table:{width:"90%",margin:"5px auto"}}})(he),ge=n(265),be=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleClickOpen=function(e){if(0===e.inputs.length)console.log(e),ge.a.accounts().then(function(t){ge.a.contract(n.state.contractabi).at(n.props.contractAddress)[e.name]().then(function(e){var t="";console.log("typeof txHash => \n",typeof e[0]),t="object"==typeof e[0]?e[0].toString():e[0],n.setMessage(!0,t)})});else{console.log(e);var t={};if(e.inputs){var a=e.inputs,o=Array.isArray(a),r=0;for(a=o?a:a[Symbol.iterator]();;){var i;if(o){if(r>=a.length)break;i=a[r++]}else{if((r=a.next()).done)break;i=r.value}t[i.name]=""}}n.setState({todoFunctionAbi:e,open:!0,deploydata:t})}},n.handleClose=function(){n.setState({open:!1})},n.setMessage=function(e,t){console.log(e,typeof t),e?n.setState({messageIsOpen:e,messageText:t}):n.setState({messageIsOpen:e})},n.SetInput=function(e,t){var a=n.state.deploydata;a[e]=t.target.value,n.setState({deploydata:a})},n.delpoyContract=function(){console.log("this.state.deploydata:",n.state.deploydata);var e=n.state.todoFunctionAbi,t=Object.values(n.state.deploydata);window.ethereum.enable().then(function(e){console.log(e)}),n.handleClose(),ge.a.accounts().then(function(a){var o=ge.a.contract(n.state.contractabi).at(n.props.contractAddress);o[e.name].apply(o,t.concat([{from:a[0]},function(e,t){if(e)console.log("error:",e);else{console.log("result:",t);var a="";console.log("typeof txHash => \n",typeof t[0]),a="object"==typeof t[0]?t[0].toString():t[0],n.setMessage(!0,a)}}]))})},n.delpoyContractt=function(){var e=Object.values(n.state.deploydata);window.ethereum.enable().then(function(e){console.log(e)}),console.log(n.state.deploydata),ge.a.accounts().then(function(t){var a=ge.a.contract(n.state.contract.abi,n.state.contract.bytecode,{from:t[0],gas:4e6});a.new.apply(a,e.concat([function(e,t){e||n.postDapp(t)}]))})},n.postDapp=function(e){var t={dappName:"",txHash:e,contractInfo:n.props.name,publicAddress:"0x81D723361d4F3e648F2c9c479d88DC6dEBF4fA5f",dappChain:"kovan"};u()(s.a+"/api/dapp",{body:JSON.stringify(t),headers:{"Content-Type":"application/json"},method:"POST"}).then(function(e){return e.json()}).then(function(t){t.id&&Object(p.b)("/dapp/deployed/"+e)})},n.state={open:!1,messageIsOpen:!1,messageText:"",contractabi:[],inputlist:[],deploydata:{},askapi:[],writeapi:[],todoFunctionAbi:{},transferJson:{}},n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;console.log(this.props.contractName),console.log(this.props.contractAddress),u()(s.a+"/api/chain/abi?apiname="+this.props.contractName).then(function(e){return e.json()}).then(function(t){if(console.log(t.data),0===t.code){var n=[],a=[],o=t.data.abi,r=Array.isArray(o),i=0;for(o=r?o:o[Symbol.iterator]();;){var s;if(r){if(i>=o.length)break;s=o[i++]}else{if((i=o.next()).done)break;s=i.value}var c=s;"function"===c.type&&(!0===c.constant?n.push(c):a.push(c))}console.log(a),console.log(n),e.setState({writeapi:a,askapi:n,contractabi:t.data.abi,transferJson:t.data.translate})}}).catch(function(e){console.log("失败")})},n.render=function(){var e=this,t=this.state,n=t.writeapi,a=t.askapi,o=t.todoFunctionAbi,r=t.transferJson,s=this.props.classes,l="";return o.inputs&&(l=o.inputs.map(function(t,n){var a=t.name;return i.a.createElement(m.a,{key:n,item:!0,xs:12},i.a.createElement(b.a,{required:!0,id:"address1",name:a,label:Object(c.b)(r,o.name,a),onChange:e.SetInput.bind(e,a),fullWidth:!0,autoComplete:"billing address-line1"}))})),i.a.createElement("div",{className:s.root},i.a.createElement(C.a,{className:s.drawer,variant:"permanent",classes:{paper:s.drawerPaper}},i.a.createElement("div",{className:s.toolbar}),i.a.createElement(j.a,null,a.map(function(t,n){return i.a.createElement(A.a,{button:!0,key:n},i.a.createElement(D.a,{primary:Object(c.a)(r,t.name),onClick:function(){return e.handleClickOpen(t)}}))})),i.a.createElement(N.a,null),i.a.createElement(j.a,null,n.map(function(t,n){return i.a.createElement(A.a,{button:!0,key:n},i.a.createElement(D.a,{primary:Object(c.a)(r,t.name),onClick:function(){return e.handleClickOpen(t)}}))}))),i.a.createElement("main",{className:s.content},i.a.createElement("div",{className:s.toolbar}),i.a.createElement(f.a,{paragraph:!0},i.a.createElement(fe,null))),i.a.createElement(L.a,{className:s.dialog,open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},i.a.createElement(Z.a,{id:"form-dialog-title"},"方法名称:",Object(c.a)(r,o.name)," "),i.a.createElement(X.a,null,i.a.createElement(V.a,null,"调用此方法将触发区块链钱包做签名，请慎重操作"),l),i.a.createElement(G.a,null,i.a.createElement(v.a,{onClick:this.handleClose,color:"primary"},"Cancel"),i.a.createElement(v.a,{onClick:function(){return e.delpoyContract()},color:"primary"},"submit"))),i.a.createElement(P,{messageIsOpen:this.state.messageIsOpen,messageText:this.state.messageText,setMessage:function(t){return e.setMessage(t)}}))},t}(i.a.Component);be.propTypes={classes:k.a.object.isRequired};t.a=x()(function(e){return{paper:{maxWidth:"550px",margin:"auto",marginTop:12*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:5*e.spacing.unit+"px "+5*e.spacing.unit+"px "+3*e.spacing.unit+"px"},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},content:{flexGrow:1,padding:3*e.spacing.unit},toolbar:e.mixins.toolbar,dialog:{minWidth:"600px",margin:"auto"}}})(be)}}]);
//# sourceMappingURL=2-13538ef9fae16e191663.js.map