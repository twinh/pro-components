"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[1780],{63080:function(A,E,n){n.r(E);var h=n(59002),a=n(14419),M=n(55448),p=n(93358),c=n(60279),r=n(52676),O=function(){return(0,r.jsx)(h.A,{children:(0,r.jsx)(a.u,{name:["default","users"],label:"\u7528\u6237\u4FE1\u606F",initialValue:[{name:"1111"}],itemContainerRender:function(e){return(0,r.jsx)(h.A.Group,{children:e})},alwaysShowItemLabel:!0,children:function(e,u,f){return console.log(e,u,f),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(M.Z,{initialValue:u,name:"rowKey",label:"\u7B2C ".concat(u," \u914D\u7F6E")}),(0,r.jsx)(M.Z,{name:"name",label:"\u59D3\u540D"},"name"),(0,r.jsx)(p.Z,{name:["name"],children:function(t){var l=t.name;return l?(0,r.jsx)(M.Z,{name:"remark",label:"\u6635\u79F0\u8BE6\u60C5"}):(0,r.jsx)("span",{style:{lineHeight:"92px"},children:"\u8F93\u5165\u59D3\u540D\u5C55\u793A"})}},"remark"),(0,r.jsxs)("div",{style:{display:"flex",alignItems:"flex-end",gap:"8px",height:60},children:[(0,r.jsx)(c.ZP,{type:"primary",onClick:function(){f.setCurrentRowData({name:"New Name"+u,remark:"New Remark"+u})},children:"\u8BBE\u7F6E\u6B64\u9879"},"SET"),(0,r.jsx)(c.ZP,{type:"dashed",onClick:function(){f.setCurrentRowData({name:void 0,remark:void 0})},children:"\u6E05\u7A7A\u6B64\u9879"},"clear")]})]})}})})};E.default=O},74525:function(A,E,n){n.r(E);var h=n(90228),a=n.n(h),M=n(87999),p=n.n(M),c=n(19737),r=n(38848),O=n(59002),R=n(14419),d=n(55448),e=n(75271),u=n(52676);E.default=function(){var f=(0,e.useRef)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(O.A,{children:(0,u.jsx)(R.u,{copyIconProps:{Icon:c.Z},deleteIconProps:{Icon:r.Z},min:1,max:4,actionRef:f,actionGuard:{beforeAddRow:function(){var D=p()(a()().mark(function l(P,o,s){return a()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",new Promise(function(m){console.log(P==null?void 0:P.name,o,s),setTimeout(function(){return m(!0)},1e3)}));case 1:case"end":return i.stop()}},l)}));function t(l,P,o){return D.apply(this,arguments)}return t}(),beforeRemoveRow:function(){var D=p()(a()().mark(function l(P,o){var s,_;return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return _=(s=f.current)===null||s===void 0?void 0:s.get(P),console.log("--->",P,o,_),m.abrupt("return",new Promise(function(v){if(P===0){v(!1);return}setTimeout(function(){return v(!0)},1e3)}));case 3:case"end":return m.stop()}},l)}));function t(l,P){return D.apply(this,arguments)}return t}()},name:"users",label:"\u7528\u6237\u4FE1\u606F",initialValue:[{name:"1111"}],children:(0,u.jsx)(d.Z,{name:"name",label:"\u59D3\u540D"},"useMode")})})})}},7512:function(A,E,n){n.r(E);var h=n(90228),a=n.n(h),M=n(87999),p=n.n(M),c=n(59002),r=n(14419),O=n(55448),R=n(93358),d=n(46937),e=n(52676),u=function(){return(0,e.jsx)(c.A,{children:(0,e.jsx)(r.u,{name:["default","users"],label:"\u7528\u6237\u4FE1\u606F",initialValue:[{name:"\u6211\u662F\u59D3\u540D"}],itemContainerRender:function(t){return(0,e.jsx)(c.A.Group,{children:t})},children:function(t,l,P){return console.log(t,l,P),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(O.Z,{initialValue:l,name:"rowKey",label:"\u7B2C ".concat(l," \u914D\u7F6E")}),(0,e.jsx)(O.Z,{name:"name",label:"\u59D3\u540D"}),(0,e.jsx)(R.Z,{name:["name"],children:function(s){var _=s.name;return _?(0,e.jsx)(O.Z,{name:"remark",label:"\u6635\u79F0\u8BE6\u60C5"}):(0,e.jsx)("span",{style:{lineHeight:"32px"},children:"\u8F93\u5165\u59D3\u540D\u5C55\u793A"})}}),(0,e.jsx)(d.Z,{name:"addr",width:"md",label:"\u4E0E name \u8054\u52A8\u7684\u9009\u62E9\u5668",dependencies:["name"],request:function(){var o=p()(a()().mark(function s(_){return a()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.abrupt("return",[{label:_.name,value:"all"},{label:"Unresolved",value:"open"},{label:"Resolved",value:"closed"},{label:"Resolving",value:"processing"}]);case 1:case"end":return m.stop()}},s)}));return function(s){return o.apply(this,arguments)}}()})]})}})})};E.default=u},98802:function(A,E,n){n.r(E);var h=n(59002),a=n(14419),M=n(25158),p=n(55448),c=n(52676),r=function(){return(0,c.jsx)(h.A,{layout:"horizontal",children:(0,c.jsxs)(a.u,{name:"attributes",label:"\u89C4\u683C",creatorButtonProps:{creatorButtonText:"\u6DFB\u52A0\u89C4\u683C\u9879"},min:1,copyIconProps:!1,itemRender:function(d,e){var u=d.listDom,f=d.action,D=e.index;return(0,c.jsx)(M.Z,{bordered:!0,style:{marginBlockEnd:8},title:"\u89C4\u683C".concat(D+1),extra:f,bodyStyle:{paddingBlockEnd:0},children:u})},creatorRecord:{name:"",items:[{name:""}]},initialValue:[{name:"\u989C\u8272",items:[{name:"\u7EA2"},{name:"\u9EC4"}]}],children:[(0,c.jsx)(p.Z,{style:{padding:0},width:"md",name:"name",label:"\u89C4\u683C\u540D"}),(0,c.jsx)(h.A.Item,{isListField:!0,style:{marginBlockEnd:0},label:"\u89C4\u683C\u503C",children:(0,c.jsx)(a.u,{name:"items",creatorButtonProps:{creatorButtonText:"\u65B0\u5EFA",icon:!1,type:"link",style:{width:"unset"}},min:1,copyIconProps:!1,deleteIconProps:{tooltipText:"\u5220\u9664"},itemRender:function(d){var e=d.listDom,u=d.action;return(0,c.jsxs)("div",{style:{display:"inline-flex",marginInlineEnd:25},children:[e,u]})},children:(0,c.jsx)(p.Z,{allowClear:!1,width:"xs",name:["name"]})})})]})})};E.default=r},83610:function(A,E,n){n.r(E);var h=n(90228),a=n.n(h),M=n(87999),p=n.n(M),c=n(48305),r=n.n(c),O=n(84607),R=n(47193),d=n(59002),e=n(55448),u=n(14419),f=n(99589),D=n(11305),t=n(75271),l=n(52676),P=function(){var s=(0,t.useState)(!1),_=r()(s,2),i=_[0],m=_[1];return(0,l.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[(0,l.jsx)(d.A.Item,{name:"mode",label:"\u6A21\u5F0F",children:(0,l.jsx)(D.Z,{block:!0,options:[{label:"\u7F16\u8F91",title:"\u7F16\u8F91",value:"edit"},{label:"\u53EA\u8BFB",title:"\u53EA\u8BFB",value:"readonly"}],onChange:function(g){m(g==="readonly")}})}),(0,l.jsxs)(d.A,{readonly:i,onFinish:function(){var v=p()(a()().mark(function g(b){return a()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",console.log(b));case 1:case"end":return x.stop()}},g)}));return function(g){return v.apply(this,arguments)}}(),children:[(0,l.jsx)(e.Z,{name:"name",label:"\u59D3\u540D"}),(0,l.jsx)(u.u,{name:"labels",label:"\u7528\u6237\u4FE1\u606F",initialValue:[{value:"333",label:"333"}],copyIconProps:{Icon:O.Z,tooltipText:"\u590D\u5236\u6B64\u9879\u5230\u672B\u5C3E"},deleteIconProps:{Icon:R.Z,tooltipText:"\u4E0D\u9700\u8981\u8FD9\u884C\u4E86"},children:(0,l.jsxs)(f.UW,{children:[(0,l.jsx)(e.Z,{name:"value",label:"\u503C"}),(0,l.jsx)(e.Z,{name:"label",label:"\u663E\u793A\u540D\u79F0"})]},"group")})]})]})};E.default=P},7406:function(A,E,n){n.r(E);var h=n(90228),a=n.n(h),M=n(87999),p=n.n(M),c=n(48305),r=n.n(c),O=n(42191),R=n(59002),d=n(55448),e=n(14419),u=n(99589),f=n(16711),D=n(46937),t=n(11518),l=n(20342),P=n(75271),o=n(52676),s=function(){var i=(0,P.useState)("bottom"),m=r()(i,2),v=m[0],g=m[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(O.Z.Group,{fieldProps:{value:v,onChange:function(C){return g(C.target.value)}},options:[{label:"\u9876\u90E8",value:"top"},{label:"\u5E95\u90E8",value:"bottom"}]}),(0,o.jsxs)(R.A,{onFinish:function(){var b=p()(a()().mark(function C(x){return a()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:console.log("Received values of form:",x);case 1:case"end":return U.stop()}},C)}));return function(C){return b.apply(this,arguments)}}(),children:[(0,o.jsx)(d.Z,{width:"sm",name:"id",label:"\u4E3B\u5408\u540C\u7F16\u53F7"}),(0,o.jsx)(d.Z,{name:"project",width:"md",label:"\u9879\u76EE\u540D\u79F0",initialValue:"xxxx\u9879\u76EE"}),(0,o.jsx)(d.Z,{width:"xs",name:"mangerName",label:"\u5546\u52A1\u7ECF\u7406",initialValue:"\u542F\u9014"}),(0,o.jsx)(e.u,{name:"users",label:"\u7528\u6237\u4FE1\u606F",rules:[{required:!0,validator:function(){var b=p()(a()().mark(function x(T,U){return a()().wrap(function(j){for(;;)switch(j.prev=j.next){case 0:if(console.log(U),!(U&&U.length>0)){j.next=3;break}return j.abrupt("return");case 3:throw new Error("\u81F3\u5C11\u8981\u6709\u4E00\u9879\uFF01");case 4:case"end":return j.stop()}},x)}));function C(x,T){return b.apply(this,arguments)}return C}()}],creatorButtonProps:{position:v},creatorRecord:{name:"test"},initialValue:[{name:"1111",nickName:"1111",age:111,birth:"2021-02-18",sex:"man",addrList:[{addr:["taiyuan","changfeng"]}]}],children:(0,o.jsxs)(u.UW,{children:[(0,o.jsx)(d.Z,{rules:[{required:!0}],name:"name",label:"\u59D3\u540D"}),(0,o.jsx)(f.Z,{name:"age",label:"\u5E74\u9F84",width:"sm"}),(0,o.jsx)(D.Z,{label:"\u6027\u522B",name:"sex",width:"xs",valueEnum:{man:"\u7537\u6027",woman:"\u5973\u6027"}}),(0,o.jsx)(t.Z,{name:"birth",label:"\u51FA\u751F\u65E5\u671F"}),(0,o.jsxs)(l.Z,{name:"addr",label:"\u5730\u5740",children:[(0,o.jsx)(D.Z,{valueEnum:{taiyuan:"\u5C71\u897F",hangzhou:"\u676D\u5DDE"}}),(0,o.jsx)(D.Z,{valueEnum:{changfeng:"\u957F\u98CE\u8857",gongzhuan:"\u5DE5\u4E13\u8DEF"}})]})]},"group")})]})]})};E.default=s},27576:function(A,E,n){n.r(E);var h=n(90228),a=n.n(h),M=n(87999),p=n.n(M),c=n(59002),r=n(55448),O=n(14419),R=n(25158),d=n(99589),e=n(52676),u=function(){return(0,e.jsxs)(c.A,{onFinish:function(){var D=p()(a()().mark(function t(l){return a()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",console.log(l));case 1:case"end":return o.stop()}},t)}));return function(t){return D.apply(this,arguments)}}(),children:[(0,e.jsx)(r.Z,{name:"name",label:"\u59D3\u540D"}),(0,e.jsxs)(O.u,{name:"users",label:"\u7528\u6237\u4FE1\u606F",initialValue:[{name:"1111"}],itemRender:function(t,l){var P=t.listDom,o=t.action,s=l.record;return(0,e.jsx)(R.Z,{bordered:!0,extra:o,title:s==null?void 0:s.name,style:{marginBlockEnd:8},children:P})},children:[(0,e.jsxs)(d.UW,{children:[(0,e.jsx)(r.Z,{name:"name",label:"\u59D3\u540D"}),(0,e.jsx)(r.Z,{name:"nickName",label:"\u6635\u79F0"})]}),(0,e.jsx)(O.u,{name:"labels",label:"\u7528\u6237\u4FE1\u606F",initialValue:[{value:"333",label:"333"}],copyIconProps:{tooltipText:"\u590D\u5236\u6B64\u9879\u5230\u672B\u5C3E"},deleteIconProps:{tooltipText:"\u4E0D\u9700\u8981\u8FD9\u884C\u4E86"},children:(0,e.jsxs)(d.UW,{children:[(0,e.jsx)(r.Z,{name:"value",label:"\u503C"}),(0,e.jsx)(r.Z,{name:"label",label:"\u663E\u793A\u540D\u79F0"})]},"group")})]})]})};E.default=u},16662:function(A,E,n){n.r(E);var h=n(90228),a=n.n(h),M=n(87999),p=n.n(M),c=n(59002),r=n(14419),O=n(25158),R=n(99589),d=n(55448),e=n(60799),u=n(60279),f=n(92202),D=n(75271),t=n(52676),l=function(){var o=(0,D.useRef)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.Z,{style:{marginBlockEnd:24},children:[(0,t.jsx)(u.ZP,{type:"primary",onClick:function(){var _,i,m=(_=o.current)===null||_===void 0?void 0:_.getList();(i=o.current)===null||i===void 0||i.add({name:"\u65B0\u589E"+(m==null?void 0:m.length)})},children:"\u589E\u52A0\u4E00\u884C"}),(0,t.jsx)(u.ZP,{danger:!0,onClick:function(){var _;(_=o.current)===null||_===void 0||_.remove(1)},children:"\u5220\u9664\u4E00\u884C"}),(0,t.jsx)(u.ZP,{onClick:function(){var _;(_=o.current)===null||_===void 0||_.move(1,0)},children:"\u79FB\u52A8\u5230\u7B2C\u4E00\u884C"}),(0,t.jsx)(u.ZP,{type:"dashed",onClick:function(){var _,i=(_=o.current)===null||_===void 0?void 0:_.get(1);console.log(i)},children:"\u83B7\u53D6\u4E00\u884C\u6570\u636E"}),(0,t.jsx)(u.ZP,{type:"dashed",onClick:function(){var _,i=(_=o.current)===null||_===void 0?void 0:_.getList();console.log(i)},children:"\u83B7\u53D6\u6240\u6709\u6570\u636E"})]}),(0,t.jsx)(c.A,{onFinish:function(){var s=p()(a()().mark(function _(i){return a()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.abrupt("return",console.log(i));case 1:case"end":return v.stop()}},_)}));return function(_){return s.apply(this,arguments)}}(),children:(0,t.jsx)(r.u,{name:"users",label:"\u7528\u6237\u4FE1\u606F",initialValue:[{name:"1111"}],creatorRecord:{name:"222"},actionGuard:{beforeAddRow:function(){var s=p()(a()().mark(function i(m,v){return a()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.abrupt("return",new Promise(function(C){console.log(m,v),setTimeout(function(){return C(!0)},1e3)}));case 1:case"end":return b.stop()}},i)}));function _(i,m){return s.apply(this,arguments)}return _}(),beforeRemoveRow:function(){var s=p()(a()().mark(function i(m){return a()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.abrupt("return",new Promise(function(b){if(m===0){f.ZP.error("\u8FD9\u884C\u4E0D\u80FD\u5220"),b(!1);return}setTimeout(function(){return b(!0)},1e3)}));case 1:case"end":return g.stop()}},i)}));function _(i){return s.apply(this,arguments)}return _}()},itemRender:function(_,i){var m=_.listDom,v=_.action,g=i.record;return(0,t.jsx)(O.Z,{bordered:!0,extra:v,title:g==null?void 0:g.name,style:{marginBlockEnd:8},children:m})},actionRef:o,children:(0,t.jsxs)(R.UW,{children:[(0,t.jsx)(d.Z,{name:"name",label:"\u59D3\u540D"}),(0,t.jsx)(d.Z,{name:"age",label:"\u5E74\u9F84"})]},"group")})})]})};E.default=l}}]);
