(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[23],{1370:function(e,t,n){"use strict";n.r(t);var r,c,a,i,s,o,l,b,d,j,u,f,O,p,x,h=n(7),m=n(1),v=n(4),g=n(2),w=n(13),k=n(240),y=n(259),C=n.n(y),S=n(40),I=n(153),N=n(65),T=n(365),F=n(812),P=n(3),q=n.n(P),A=n(12),D=n(8),E=n(179),W=v.e.div(r||(r=Object(h.a)(["\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n"]))),J=n(63),L=n(243),U=n(93),z=n(39),G=n(118),Q=n(0),X=Object(v.e)(g.bc)(c||(c=Object(h.a)(["\n  font-weight: 600;\n"]))),Z=v.e.div(a||(a=Object(h.a)(["\n  margin-bottom: 16px;\n"]))),_=v.e.div(i||(i=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),B=v.e.label(s||(s=Object(h.a)(["\n  color: ",";\n  display: block;\n  margin-bottom: 8px;\n  margin-top: 24px;\n"])),(function(e){return e.theme.colors.text})),R=function(e){var t=e.nft,n=e.tokenIds,r=e.onSuccess,c=e.onDismiss,a=Object(m.useState)(!1),i=Object(D.a)(a,2),s=i[0],o=i[1],l=Object(m.useState)(""),b=Object(D.a)(l,2),d=b[0],j=b[1],u=Object(m.useState)(null),f=Object(D.a)(u,2),O=f[0],p=f[1],x=Object(w.b)().t,h=Object(S.c)().account,v=Object(z.i)(Object(L.a)(t.type)),k=Object(U.a)().toastSuccess,y=Object(G.a)().callWithGasPrice,C=function(){var e=Object(A.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,J.a.utils.isAddress(d)){e.next=6;break}p(x("Please enter a valid wallet address")),e.next=14;break;case 6:return e.next=8,y(v,"transferFrom",[h,d,n[0]]);case 8:return t=e.sent,o(!0),e.next=12,t.wait();case 12:e.sent.status?(c(),r(),k(x("NFT successfully transferred!"))):(p(x("Unable to transfer NFT")),o(!1));case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("Unable to transfer NFT:",e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}();return Object(Q.jsxs)(g.vb,{title:x("Transfer NFT"),onDismiss:c,children:[Object(Q.jsxs)(Z,{children:[O&&Object(Q.jsx)(g.bc,{color:"failure",mb:"8px",children:O}),Object(Q.jsxs)(W,{children:[Object(Q.jsxs)(g.bc,{children:[x("Transferring"),":"]}),Object(Q.jsx)(X,{children:x("1x %nftName% NFT",{nftName:t.name})})]}),Object(Q.jsxs)(B,{htmlFor:"transferAddress",children:[x("Receiving address"),":"]}),Object(Q.jsx)(g.db,{id:"transferAddress",name:"address",type:"text",placeholder:x("Paste address"),value:d,onChange:function(e){var t=e.target.value;j(t)},isWarning:O,disabled:s})]}),Object(Q.jsxs)(_,{children:[Object(Q.jsx)(g.q,{width:"100%",variant:"secondary",onClick:c,children:x("Cancel")}),Object(Q.jsx)(g.q,{width:"100%",onClick:C,disabled:!h||s||!d,children:x("Confirm")})]})]})},Y=v.e.div(o||(o=Object(h.a)(["\n  margin-bottom: 16px;\n"]))),H=v.e.div(l||(l=Object(h.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 8px;\n"]))),K=function(e){var t=e.nft,n=e.onSuccess,r=e.onClaim,c=e.onDismiss,a=Object(m.useState)(!1),i=Object(D.a)(a,2),s=i[0],o=i[1],l=Object(w.b)().t,b=Object(S.c)().account,d=Object(U.a)(),j=d.toastError,u=d.toastSuccess,f=function(){var e=Object(A.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:return t=e.sent,o(!0),e.next=6,t.wait();case 6:e.sent.status?(u(l("Successfully claimed!")),c(),n()):(j(l("Error"),l("Please try again. Confirm the transaction and make sure you are paying enough gas!")),o(!1));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(Q.jsxs)(g.vb,{title:l("Claim Collectible"),onDismiss:c,children:[Object(Q.jsx)(Y,{children:Object(Q.jsxs)(g.U,{alignItems:"center",mb:"8px",justifyContent:"space-between",children:[Object(Q.jsxs)(g.bc,{children:[l("You will receive"),":"]}),Object(Q.jsx)(g.bc,{bold:!0,children:l("1x %nftName% Collectible",{nftName:t.name})})]})}),Object(Q.jsxs)(H,{children:[Object(Q.jsx)(g.q,{width:"100%",variant:"secondary",onClick:c,children:l("Cancel")}),Object(Q.jsx)(g.q,{width:"100%",onClick:f,disabled:!b,isLoading:s,endIcon:s?Object(Q.jsx)(g.h,{color:"currentColor",spin:!0}):null,children:l("Confirm")})]})]})},M=v.e.div(b||(b=Object(h.a)(["\n  background-color: ",";\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding-bottom: 100%;\n"])),(function(e){return e.theme.colors.cardBorder})),V=v.e.img(d||(d=Object(h.a)(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  transition: opacity 1s linear;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 24px 24px 0 0;\n"]))),$=v.e.video(j||(j=Object(h.a)(["\n  height: 100%;\n  width: 100%;\n"]))),ee=function(e){var t=e.nft,n=e.isOwned,r=void 0!==n&&n,c=t.images,a=t.name,i=t.video,s="/images/nfts/".concat(c.lg);if(i){var o=Object(Q.jsxs)($,{autoPlay:!0,controls:!1,loop:!0,muted:!0,poster:s,children:[Object(Q.jsx)("source",{src:i.webm,type:"video/webm"}),Object(Q.jsx)("source",{src:i.mp4,type:"video/mp4"})]});return r?Object(Q.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:o}):o}var l=Object(Q.jsx)(V,{src:s,alt:a});return Object(Q.jsx)(M,{children:r?Object(Q.jsx)("a",{href:c.ipfs,target:"_blank",rel:"noreferrer noopener",children:l}):l})},te=Object(v.e)(W)(u||(u=Object(h.a)(["\n  min-height: 28px;\n"]))),ne=Object(v.e)(g.q).attrs({variant:"text"})(f||(f=Object(h.a)(["\n  height: auto;\n  padding: 16px 24px;\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n\n  &:focus:not(:active) {\n    box-shadow: none;\n  }\n"]))),re=v.e.div(O||(O=Object(h.a)(["\n  padding: 24px;\n"]))),ce=function(e){var t,n=e.nft,r=e.canClaim,c=void 0!==r&&r,a=e.tokenIds,i=void 0===a?[]:a,s=e.onClaim,o=e.refresh,l=Object(m.useState)(!1),b=Object(D.a)(l,2),d=b[0],j=b[1],u=Object(w.b)().t,f=Object(E.b)().profile,O=n.identifier,p=n.name,x=n.description,h=i.length>0,v=d?g.J:g.G,k=function(){var e=Object(A.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(!d);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){o()},C=Object(g.xc)(Object(Q.jsx)(R,{nft:n,tokenIds:i,onSuccess:y})),S=Object(D.a)(C,1)[0],I=Object(g.xc)(Object(Q.jsx)(K,{nft:n,onSuccess:y,onClaim:s})),N=Object(D.a)(I,1)[0];return Object(Q.jsxs)(g.u,{isActive:h,children:[Object(Q.jsx)(ee,{nft:n,isOwned:h}),Object(Q.jsxs)(g.v,{children:[Object(Q.jsxs)(te,{children:[Object(Q.jsx)(g.X,{children:p}),h&&Object(Q.jsx)(g.Zb,{outline:!0,variant:"secondary",children:u("In Wallet")}),(null===f||void 0===f||null===(t=f.nft)||void 0===t?void 0:t.identifier)===O&&Object(Q.jsx)(g.Zb,{outline:!0,variant:"success",children:u("Profile Pic")})]}),c&&Object(Q.jsx)(g.q,{width:"100%",mt:"24px",onClick:N,children:u("Claim this NFT")}),h&&Object(Q.jsx)(g.q,{width:"100%",variant:"secondary",mt:"24px",onClick:S,children:u("Transfer")})]}),Object(Q.jsxs)(g.w,{p:"0",children:[Object(Q.jsx)(ne,{width:"100%",endIcon:Object(Q.jsx)(v,{width:"24px",color:"primary"}),onClick:k,children:u("Details")}),d&&Object(Q.jsx)(re,{children:Object(Q.jsx)(g.bc,{as:"p",color:"textSubtle",style:{textAlign:"center"},children:u(x)})})]})]})},ae=v.e.div(p||(p=Object(h.a)(["\n  display: grid;\n  grid-gap: 32px;\n  grid-template-columns: 1fr;\n  padding-bottom: 24px;\n  padding-top: 24px;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md})),ie=n(6),se=n(50),oe=["nft"],le={"easter-storm":1,"easter-flipper":2,"easter-caker":3},be=function(e){var t=e.nft,n=Object(se.a)(e,oe),r=Object(m.useState)(!1),c=Object(D.a)(r,2),a=c[0],i=c[1],s=Object(S.c)().account,o=Object(E.b)().profile,l=t.identifier,b=(null!==o&&void 0!==o?o:{}).team,d=Object(z.j)(),j=function(){var e=Object(A.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.mintNFT();case 2:return t=e.sent,e.next=5,t.wait();case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.useEffect)((function(){s&&b&&function(){var e=Object(A.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.canClaim(s);case 2:t=e.sent,i(!!t&&b.id===le[l]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,l,b,d,i]),Object(Q.jsx)(ce,Object(ie.a)(Object(ie.a)({nft:t},n),{},{canClaim:a,onClaim:j}))},de={"easter-storm":be,"easter-flipper":be,"easter-caker":be},je=function(){var e=Object(F.a)().tokenIds,t=Object(N.b)(),n=Object(S.c)().account,r=function(){t(Object(T.b)(n))};return Object(Q.jsx)(ae,{children:C()(I.b,"sortOrder").map((function(t){var n=de[t.identifier]||ce;return Object(Q.jsx)("div",{children:Object(Q.jsx)(n,{nft:t,tokenIds:e[t.identifier],refresh:r})},t.name)}))})},ue=v.e.div(x||(x=Object(h.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 32px;\n"])),(function(e){return e.theme.colors.textSubtle}));t.default=function(){var e=Object(w.b)().t;return Object(Q.jsxs)(k.a,{children:[Object(Q.jsx)(ue,{children:Object(Q.jsx)(g.X,{as:"h1",scale:"xxl",color:"secondary",children:e("Pancake Collectibles")})}),Object(Q.jsx)(je,{})]})}},812:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(1),c=n(40),a=n(30),i=n(65),s=n(153),o=n(365),l=function(){var e=Object(c.c)().account,t=Object(i.b)(),n=Object(a.c)((function(e){return e.collectibles})),l=n.isInitialized,b=n.isLoading,d=n.data,j=Object.keys(d);return Object(r.useEffect)((function(){l||t(Object(o.b)(e))}),[l,e,t]),{isInitialized:l,isLoading:b,tokenIds:d,nftsInWallet:s.b.filter((function(e){return j.includes(e.identifier)}))}}}}]);
//# sourceMappingURL=23.467ca72c.chunk.js.map