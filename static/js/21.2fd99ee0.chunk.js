(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[21],{1374:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return G}));var i=n(37),c=n(3),a=n.n(c),r=n(12),o=n(21),l=n(8),s=n(7),u=n(1),d=n(4),b=n(10),j=n(2),O=n(53),v=n(13),x=n(32),m=n(175),p=n(202),h=n(366),C=n(189),E=n(25),y=n(104),f=n(111),R=n(56),I=n(36),T=n(20),g=n(57),U=n(39),w=n(267),Y=n(106),N=n(866),_=n(33),k=n(160);var S=n(54),P=n(61),A=n(217),q=n(30),B=n(102),D=n(225),L=n(116),Q=n(99),H=n(331);function W(){return Object(q.c)((function(e){return e.burn}))}var V,M=n(47),z=n(247),F=n(0),J=d.e.div(V||(V=Object(s.a)(["\n  border: solid 1px ",";\n  border-radius: 16px;\n  padding: 16px;\n"])),(function(e){return e.theme.colors.cardBorder}));function G(e){var t,n,c,s,d,V,G,X,K,Z,$,ee,te,ne,ie,ce,ae,re,oe,le=e.history,se=e.match.params,ue=se.currencyIdA,de=se.currencyIdB,be=null!==(t=Object(g.c)(ue))&&void 0!==t?t:void 0,je=null!==(n=Object(g.c)(de))&&void 0!==n?n:void 0,Oe=Object(T.a)(),ve=Oe.account,xe=Oe.chainId,me=Oe.library,pe=Object(u.useMemo)((function(){return[Object(S.b)(be,xe),Object(S.b)(je,xe)]}),[be,je,xe]),he=Object(l.a)(pe,2),Ce=he[0],Ee=he[1],ye=Object(v.b)().t,fe=Object(M.e)(),Re=W(),Ie=Re.independentField,Te=Re.typedValue,ge=function(e,t){var n,i,c,a,r,s=Object(T.a)(),u=s.account,d=s.chainId,j=W(),O=j.independentField,v=j.typedValue,x=Object(B.b)(e,t),m=Object(l.a)(x,2)[1],p=Object(Q.e)(null!==u&&void 0!==u?u:void 0,[null===m||void 0===m?void 0:m.liquidityToken]),h=null===p||void 0===p?void 0:p[null!==(n=null===m||void 0===m||null===(i=m.liquidityToken)||void 0===i?void 0:i.address)&&void 0!==n?n:""],C=[Object(S.b)(e,d),Object(S.b)(t,d)],E=C[0],y=C[1],f=(c={},Object(o.a)(c,H.a.CURRENCY_A,E),Object(o.a)(c,H.a.CURRENCY_B,y),Object(o.a)(c,H.a.LIQUIDITY,null===m||void 0===m?void 0:m.liquidityToken),c),R=Object(D.a)(null===m||void 0===m?void 0:m.liquidityToken),I=m&&R&&h&&E&&b.JSBI.greaterThanOrEqual(R.raw,h.raw)?new b.TokenAmount(E,m.getLiquidityValue(E,R,h,!1).raw):void 0,g=m&&R&&h&&y&&b.JSBI.greaterThanOrEqual(R.raw,h.raw)?new b.TokenAmount(y,m.getLiquidityValue(y,R,h,!1).raw):void 0,U=(a={},Object(o.a)(a,H.a.CURRENCY_A,I),Object(o.a)(a,H.a.CURRENCY_B,g),a),w=new b.Percent("0","100");if(O===H.a.LIQUIDITY_PERCENT)w=new b.Percent(v,"100");else if(O===H.a.LIQUIDITY){if(null===m||void 0===m?void 0:m.liquidityToken){var Y=Object(L.a)(v,m.liquidityToken);Y&&h&&!Y.greaterThan(h)&&(w=new b.Percent(Y.raw,h.raw))}}else if(f[O]){var N=Object(L.a)(v,f[O]),_=U[O];N&&_&&!N.greaterThan(_)&&(w=new b.Percent(N.raw,_.raw))}var k,P,A=(r={},Object(o.a)(r,H.a.LIQUIDITY_PERCENT,w),Object(o.a)(r,H.a.LIQUIDITY,h&&w&&w.greaterThan("0")?new b.TokenAmount(h.token,w.multiply(h.raw).quotient):void 0),Object(o.a)(r,H.a.CURRENCY_A,E&&w&&w.greaterThan("0")&&I?new b.TokenAmount(E,w.multiply(I.raw).quotient):void 0),Object(o.a)(r,H.a.CURRENCY_B,y&&w&&w.greaterThan("0")&&g?new b.TokenAmount(y,w.multiply(g.raw).quotient):void 0),r);return u||(k="Connect Wallet"),A[H.a.LIQUIDITY]&&A[H.a.CURRENCY_A]&&A[H.a.CURRENCY_B]||(k=null!==(P=k)&&void 0!==P?P:"Enter an amount"),{pair:m,parsedAmounts:A,error:k}}(null!==be&&void 0!==be?be:void 0,null!==je&&void 0!==je?je:void 0),Ue=ge.pair,we=ge.parsedAmounts,Ye=ge.error,Ne=function(){var e=Object(q.b)();return{onUserInput:Object(u.useCallback)((function(t,n){e(Object(H.b)({field:t,typedValue:n}))}),[e])}}().onUserInput,_e=!Ye,ke=Object(u.useState)(!1),Se=Object(l.a)(ke,2),Pe=Se[0],Ae=Se[1],qe=Object(u.useState)(!1),Be=Object(l.a)(qe,2),De=Be[0],Le=Be[1],Qe=Object(u.useState)(""),He=Object(l.a)(Qe,2),We=He[0],Ve=He[1],Me=Object(w.a)(),ze=Object(M.n)(),Fe=Object(l.a)(ze,1)[0],Je=(K={},Object(o.a)(K,H.a.LIQUIDITY_PERCENT,we[H.a.LIQUIDITY_PERCENT].equalTo("0")?"0":we[H.a.LIQUIDITY_PERCENT].lessThan(new b.Percent("1","100"))?"<1":we[H.a.LIQUIDITY_PERCENT].toFixed(0)),Object(o.a)(K,H.a.LIQUIDITY,Ie===H.a.LIQUIDITY?Te:null!==(c=null===(s=we[H.a.LIQUIDITY])||void 0===s?void 0:s.toSignificant(6))&&void 0!==c?c:""),Object(o.a)(K,H.a.CURRENCY_A,Ie===H.a.CURRENCY_A?Te:null!==(d=null===(V=we[H.a.CURRENCY_A])||void 0===V?void 0:V.toSignificant(6))&&void 0!==d?d:""),Object(o.a)(K,H.a.CURRENCY_B,Ie===H.a.CURRENCY_B?Te:null!==(G=null===(X=we[H.a.CURRENCY_B])||void 0===X?void 0:X.toSignificant(6))&&void 0!==G?G:""),K),Ge=null===(Z=we[H.a.LIQUIDITY_PERCENT])||void 0===Z?void 0:Z.equalTo(new b.Percent("1")),Xe=Object(U.q)(null===Ue||void 0===Ue||null===($=Ue.liquidityToken)||void 0===$?void 0:$.address),Ke=Object(u.useState)(null),Ze=Object(l.a)(Ke,2),$e=Ze[0],et=Ze[1],tt=Object(P.b)(we[H.a.LIQUIDITY],I.t),nt=Object(l.a)(tt,2),it=nt[0],ct=nt[1];function at(){return(at=Object(r.a)(a.a.mark((function e(){var t,n,i,c,r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Xe&&Ue&&me&&Me){e.next=2;break}throw new Error("missing dependencies");case 2:if(t=we[H.a.LIQUIDITY]){e.next=5;break}throw new Error("missing liquidity amount");case 5:return e.next=7,Xe.nonces(ve);case 7:n=e.sent,i=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],c={name:"Mochi LP Token",version:"1",chainId:xe,verifyingContract:Ue.liquidityToken.address},r=[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}],o={owner:ve,spender:I.t,value:t.raw.toString(),nonce:n.toHexString(),deadline:Me.toNumber()},JSON.stringify({types:{EIP712Domain:i,Permit:r},domain:c,primaryType:"Permit",message:o}),ct();case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var rt=Object(u.useCallback)((function(e,t){return et(null),Ne(e,t)}),[Ne]),ot=Object(u.useCallback)((function(e){return rt(H.a.LIQUIDITY,e)}),[rt]),lt=Object(u.useCallback)((function(e){return rt(H.a.CURRENCY_A,e)}),[rt]),st=Object(u.useCallback)((function(e){return rt(H.a.CURRENCY_B,e)}),[rt]),ut=Object(Y.d)();function dt(){return bt.apply(this,arguments)}function bt(){return(bt=Object(r.a)(a.a.mark((function e(){var t,n,c,r,l,s,u,d,j,v,x,m,p,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(xe&&me&&ve&&Me){e.next=2;break}throw new Error("missing dependencies");case 2:if(n=we[H.a.CURRENCY_A],c=we[H.a.CURRENCY_B],n&&c){e.next=5;break}throw new Error("missing currency amounts");case 5:if(r=Object(_.g)(xe,me,ve),console.log("router",r),t={},Object(o.a)(t,H.a.CURRENCY_A,Object(_.c)(n,Fe)[0]),Object(o.a)(t,H.a.CURRENCY_B,Object(_.c)(c,Fe)[0]),l=t,be&&je){e.next=10;break}throw new Error("missing tokens");case 10:if(s=we[H.a.LIQUIDITY]){e.next=13;break}throw new Error("missing liquidity amount");case 13:if(u=je===b.ETHER,d=be===b.ETHER||u,Ce&&Ee){e.next=17;break}throw new Error("could not wrap");case 17:if(it!==P.a.APPROVED){e.next=21;break}d?(j=["removeLiquidityETH","removeLiquidityETHSupportingFeeOnTransferTokens"],v=[u?Ce.address:Ee.address,s.raw.toString(),l[u?H.a.CURRENCY_A:H.a.CURRENCY_B].toString(),l[u?H.a.CURRENCY_B:H.a.CURRENCY_A].toString(),ve,Me.toHexString()]):(j=["removeLiquidity"],v=[Ce.address,Ee.address,s.raw.toString(),l[H.a.CURRENCY_A].toString(),l[H.a.CURRENCY_B].toString(),ve,Me.toHexString()]),e.next=26;break;case 21:if(null===$e){e.next=25;break}d?(j=["removeLiquidityETHWithPermit","removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"],v=[u?Ce.address:Ee.address,s.raw.toString(),l[u?H.a.CURRENCY_A:H.a.CURRENCY_B].toString(),l[u?H.a.CURRENCY_B:H.a.CURRENCY_A].toString(),ve,$e.deadline,!1,$e.v,$e.r,$e.s]):(j=["removeLiquidityWithPermit"],v=[Ce.address,Ee.address,s.raw.toString(),l[H.a.CURRENCY_A].toString(),l[H.a.CURRENCY_B].toString(),ve,$e.deadline,!1,$e.v,$e.r,$e.s]),e.next=26;break;case 25:throw new Error("Attempting to confirm without approval or a signature. Please contact support.");case 26:return e.next=28,Promise.all(j.map((function(e){var t;return(t=r.estimateGas)[e].apply(t,Object(i.a)(v)).then(_.b).catch((function(t){console.error("estimateGas failed",e,v,t)}))})));case 28:if(x=e.sent,-1!==(m=x.findIndex((function(e){return O.a.isBigNumber(e)})))){e.next=34;break}console.error("This transaction would fail. Please contact support."),e.next=39;break;case 34:return p=j[m],h=x[m],Le(!0),e.next=39,r[p].apply(r,Object(i.a)(v).concat([{gasLimit:h,gasPrice:fe}])).then((function(e){var t,n;Le(!1),ut(e,{summary:"Remove ".concat(null===(t=we[H.a.CURRENCY_A])||void 0===t?void 0:t.toSignificant(3)," ").concat(null===be||void 0===be?void 0:be.symbol," and ").concat(null===(n=we[H.a.CURRENCY_B])||void 0===n?void 0:n.toSignificant(3)," ").concat(null===je||void 0===je?void 0:je.symbol)}),Ve(e.hash)})).catch((function(e){Le(!1),console.error(e)}));case 39:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function jt(){var e,t;return Object(F.jsxs)(x.a,{gap:"md",children:[Object(F.jsxs)(E.b,{align:"flex-end",children:[Object(F.jsx)(j.bc,{fontSize:"24px",children:null===(e=we[H.a.CURRENCY_A])||void 0===e?void 0:e.toSignificant(6)}),Object(F.jsxs)(E.c,{gap:"4px",children:[Object(F.jsx)(R.a,{currency:be,size:"24px"}),Object(F.jsx)(j.bc,{fontSize:"24px",ml:"10px",children:null===be||void 0===be?void 0:be.symbol})]})]}),Object(F.jsx)(E.c,{children:Object(F.jsx)(j.a,{width:"16px"})}),Object(F.jsxs)(E.b,{align:"flex-end",children:[Object(F.jsx)(j.bc,{fontSize:"24px",children:null===(t=we[H.a.CURRENCY_B])||void 0===t?void 0:t.toSignificant(6)}),Object(F.jsxs)(E.c,{gap:"4px",children:[Object(F.jsx)(R.a,{currency:je,size:"24px"}),Object(F.jsx)(j.bc,{fontSize:"24px",ml:"10px",children:null===je||void 0===je?void 0:je.symbol})]})]}),Object(F.jsx)(j.bc,{small:!0,textAlign:"left",pt:"12px",children:ye("Output is estimated. If the price changes by more than %slippage%% your transaction will revert.",{slippage:Fe/100})}),Object(F.jsx)(j.bc,{small:!0,textAlign:"left",pt:"12px",pb:"10px",children:ye("NOTE: If you have issues removing liquidity use the old DEX (V1 Farms link in menu)",{slippage:Fe/100})})]})}function Ot(){var e,t,n;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(E.b,{children:[Object(F.jsx)(j.bc,{children:ye("%assetA%/%assetB% Burned",{assetA:null!==(e=null===be||void 0===be?void 0:be.symbol)&&void 0!==e?e:"",assetB:null!==(t=null===je||void 0===je?void 0:je.symbol)&&void 0!==t?t:""})}),Object(F.jsxs)(E.c,{children:[Object(F.jsx)(R.b,{currency0:be,currency1:je,margin:!0}),Object(F.jsx)(j.bc,{children:null===(n=we[H.a.LIQUIDITY])||void 0===n?void 0:n.toSignificant(6)})]})]}),Ue&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)(E.b,{children:[Object(F.jsx)(j.bc,{children:ye("Price")}),Object(F.jsxs)(j.bc,{children:["1 ",null===be||void 0===be?void 0:be.symbol," = ",Ce?Ue.priceOf(Ce).toSignificant(6):"-"," ",null===je||void 0===je?void 0:je.symbol]})]}),Object(F.jsxs)(E.b,{children:[Object(F.jsx)("div",{}),Object(F.jsxs)(j.bc,{children:["1 ",null===je||void 0===je?void 0:je.symbol," = ",Ee?Ue.priceOf(Ee).toSignificant(6):"-"," ",null===be||void 0===be?void 0:be.symbol]})]})]}),Object(F.jsx)(j.q,{disabled:!(it===P.a.APPROVED||null!==$e),onClick:dt,children:ye("Confirm")})]})}var vt=ye("Removing %amountA% %symbolA% and %amountB% %symbolB%",{amountA:null!==(ee=null===(te=we[H.a.CURRENCY_A])||void 0===te?void 0:te.toSignificant(6))&&void 0!==ee?ee:"",symbolA:null!==(ne=null===be||void 0===be?void 0:be.symbol)&&void 0!==ne?ne:"",amountB:null!==(ie=null===(ce=we[H.a.CURRENCY_B])||void 0===ce?void 0:ce.toSignificant(6))&&void 0!==ie?ie:"",symbolB:null!==(ae=null===je||void 0===je?void 0:je.symbol)&&void 0!==ae?ae:""}),xt=Object(u.useCallback)((function(e){rt(H.a.LIQUIDITY_PERCENT,e.toString())}),[rt]),mt=be===b.ETHER||je===b.ETHER,pt=Boolean(xe&&(be&&Object(b.currencyEquals)(b.WETH[xe],be)||je&&Object(b.currencyEquals)(b.WETH[xe],je))),ht=Object(u.useCallback)((function(e){de&&Object(k.a)(e)===de?le.push("/remove/".concat(Object(k.a)(e),"/").concat(ue)):le.push("/remove/".concat(Object(k.a)(e),"/").concat(de))}),[ue,de,le]),Ct=Object(u.useCallback)((function(e){ue&&Object(k.a)(e)===ue?le.push("/remove/".concat(de,"/").concat(Object(k.a)(e))):le.push("/remove/".concat(ue,"/").concat(Object(k.a)(e)))}),[ue,de,le]),Et=Object(u.useCallback)((function(){et(null),We&&rt(H.a.LIQUIDITY_PERCENT,"0"),Ve("")}),[rt,We]),yt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,i=Object(u.useState)((function(){return e})),c=Object(l.a)(i,2),a=c[0],r=c[1],o=Object(u.useRef)(),s=Object(u.useCallback)((function(e){r(e),o.current&&clearTimeout(o.current),o.current=setTimeout((function(){t(e),o.current=void 0}),n)}),[n,t]);return Object(u.useEffect)((function(){o.current&&(clearTimeout(o.current),o.current=void 0),r(e)}),[e]),[a,s]}(Number.parseInt(we[H.a.LIQUIDITY_PERCENT].toFixed(0)),xt),ft=Object(l.a)(yt,2),Rt=ft[0],It=ft[1],Tt=Object(j.xc)(Object(F.jsx)(m.c,{title:ye("You will receive"),customOnDismiss:Et,attemptingTxn:De,hash:We||"",content:function(){return Object(F.jsx)(m.a,{topContent:jt,bottomContent:Ot})},pendingText:vt}),!0,!0,"removeLiquidityModal"),gt=Object(l.a)(Tt,1)[0];return Object(F.jsxs)(z.a,{children:[Object(F.jsxs)(C.a,{children:[Object(F.jsx)(C.b,{backTo:"/pool",title:ye("Remove %assetA%-%assetB% liquidity",{assetA:null!==(re=null===be||void 0===be?void 0:be.symbol)&&void 0!==re?re:"",assetB:null!==(oe=null===je||void 0===je?void 0:je.symbol)&&void 0!==oe?oe:""}),subtitle:"To receive ".concat(null===be||void 0===be?void 0:be.symbol," and ").concat(null===je||void 0===je?void 0:je.symbol),noConfig:!0}),Object(F.jsxs)(j.v,{children:[Object(F.jsxs)(x.a,{gap:"20px",children:[Object(F.jsxs)(E.b,{children:[Object(F.jsx)(j.bc,{children:ye("Amount")}),Object(F.jsx)(j.q,{variant:"text",scale:"sm",onClick:function(){return Ae(!Pe)},children:ye(Pe?"Simple":"Detailed")})]}),!Pe&&Object(F.jsxs)(J,{children:[Object(F.jsxs)(j.bc,{fontSize:"40px",bold:!0,mb:"16px",style:{lineHeight:1},children:[Je[H.a.LIQUIDITY_PERCENT],"%"]}),Object(F.jsx)(j.Rb,{name:"lp-amount",min:0,max:100,value:Rt,onValueChanged:function(e){return It(Math.ceil(e))},mb:"16px"}),Object(F.jsxs)(j.U,{flexWrap:"wrap",justifyContent:"space-evenly",children:[Object(F.jsx)(j.q,{variant:"tertiary",scale:"sm",onClick:function(){return rt(H.a.LIQUIDITY_PERCENT,"25")},children:"25%"}),Object(F.jsx)(j.q,{variant:"tertiary",scale:"sm",onClick:function(){return rt(H.a.LIQUIDITY_PERCENT,"50")},children:"50%"}),Object(F.jsx)(j.q,{variant:"tertiary",scale:"sm",onClick:function(){return rt(H.a.LIQUIDITY_PERCENT,"75")},children:"75%"}),Object(F.jsx)(j.q,{variant:"tertiary",scale:"sm",onClick:function(){return rt(H.a.LIQUIDITY_PERCENT,"100")},children:"Max"})]})]})]}),!Pe&&Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(x.b,{children:Object(F.jsx)(j.c,{color:"textSubtle",width:"24px",my:"16px"})}),Object(F.jsxs)(x.a,{gap:"10px",children:[Object(F.jsx)(j.bc,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:ye("You will receive")}),Object(F.jsxs)(f.c,{children:[Object(F.jsxs)(j.U,{justifyContent:"space-between",mb:"8px",children:[Object(F.jsxs)(j.U,{children:[Object(F.jsx)(R.a,{currency:be}),Object(F.jsx)(j.bc,{small:!0,color:"textSubtle",id:"remove-liquidity-tokena-symbol",ml:"4px",children:null===be||void 0===be?void 0:be.symbol})]}),Object(F.jsx)(j.bc,{small:!0,children:Je[H.a.CURRENCY_A]||"-"})]}),Object(F.jsxs)(j.U,{justifyContent:"space-between",children:[Object(F.jsxs)(j.U,{children:[Object(F.jsx)(R.a,{currency:je}),Object(F.jsx)(j.bc,{small:!0,color:"textSubtle",id:"remove-liquidity-tokenb-symbol",ml:"4px",children:null===je||void 0===je?void 0:je.symbol})]}),Object(F.jsx)(j.bc,{small:!0,children:Je[H.a.CURRENCY_B]||"-"})]}),xe&&(pt||mt)?Object(F.jsx)(E.b,{style:{justifyContent:"flex-end",fontSize:"14px"},children:mt?Object(F.jsx)(N.a,{to:"/remove/".concat(be===b.ETHER?b.WETH[xe].address:ue,"/").concat(je===b.ETHER?b.WETH[xe].address:de),children:ye("Receive WONE")}):pt?Object(F.jsx)(N.a,{to:"/remove/".concat(be&&Object(b.currencyEquals)(be,b.WETH[xe])?"ONE":ue,"/").concat(je&&Object(b.currencyEquals)(je,b.WETH[xe])?"ONE":de),children:ye("Receive ONE")}):null}):null]})]})]}),Pe&&Object(F.jsxs)(j.m,{my:"16px",children:[Object(F.jsx)(p.a,{value:Je[H.a.LIQUIDITY],onUserInput:ot,onMax:function(){rt(H.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ge,disableCurrencySelect:!0,currency:null===Ue||void 0===Ue?void 0:Ue.liquidityToken,pair:Ue,id:"liquidity-amount",onCurrencySelect:function(){return null}}),Object(F.jsx)(x.b,{children:Object(F.jsx)(j.c,{width:"24px",my:"16px"})}),Object(F.jsx)(p.a,{hideBalance:!0,value:Je[H.a.CURRENCY_A],onUserInput:lt,onMax:function(){return rt(H.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ge,currency:be,label:ye("Output"),onCurrencySelect:ht,id:"remove-liquidity-tokena"}),Object(F.jsx)(x.b,{children:Object(F.jsx)(j.a,{width:"24px",my:"16px"})}),Object(F.jsx)(p.a,{hideBalance:!0,value:Je[H.a.CURRENCY_B],onUserInput:st,onMax:function(){return rt(H.a.LIQUIDITY_PERCENT,"100")},showMaxButton:!Ge,currency:je,label:ye("Output"),onCurrencySelect:Ct,id:"remove-liquidity-tokenb"})]}),Ue&&Object(F.jsxs)(x.a,{gap:"10px",style:{marginTop:"16px"},children:[Object(F.jsx)(j.bc,{bold:!0,color:"secondary",fontSize:"12px",textTransform:"uppercase",children:ye("Prices")}),Object(F.jsxs)(f.c,{children:[Object(F.jsxs)(j.U,{justifyContent:"space-between",children:[Object(F.jsxs)(j.bc,{small:!0,color:"textSubtle",children:["1 ",null===be||void 0===be?void 0:be.symbol," ="]}),Object(F.jsxs)(j.bc,{small:!0,children:[Ce?Ue.priceOf(Ce).toSignificant(6):"-"," ",null===je||void 0===je?void 0:je.symbol]})]}),Object(F.jsxs)(j.U,{justifyContent:"space-between",children:[Object(F.jsxs)(j.bc,{small:!0,color:"textSubtle",children:["1 ",null===je||void 0===je?void 0:je.symbol," ="]}),Object(F.jsxs)(j.bc,{small:!0,children:[Ee?Ue.priceOf(Ee).toSignificant(6):"-"," ",null===be||void 0===be?void 0:be.symbol]})]})]})]}),Object(F.jsx)(j.m,{position:"relative",mt:"16px",children:ve?Object(F.jsxs)(E.b,{children:[Object(F.jsx)(j.q,{variant:it===P.a.APPROVED||null!==$e?"success":"primary",onClick:function(){return at.apply(this,arguments)},disabled:it!==P.a.NOT_APPROVED||null!==$e,width:"100%",mr:"0.5rem",children:it===P.a.PENDING?Object(F.jsx)(A.a,{children:ye("Enabling")}):it===P.a.APPROVED||null!==$e?ye("Enabled"):ye("Enable")}),Object(F.jsx)(j.q,{variant:!_e&&we[H.a.CURRENCY_A]&&we[H.a.CURRENCY_B]?"danger":"primary",onClick:function(){gt()},width:"100%",disabled:!_e||null===$e&&it!==P.a.APPROVED,children:Ye||ye("Remove")})]}):Object(F.jsx)(y.a,{})})]})]}),Ue?Object(F.jsx)(x.a,{style:{minWidth:"20rem",width:"100%",maxWidth:"400px",marginTop:"1rem"},children:Object(F.jsx)(h.a,{showUnwrapped:pt,pair:Ue})}):null]})}},866:function(e,t,n){"use strict";var i,c=n(7),a=n(86),r=n(4),o=Object(r.e)(a.a)(i||(i=Object(c.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=o}}]);
//# sourceMappingURL=21.2fd99ee0.chunk.js.map