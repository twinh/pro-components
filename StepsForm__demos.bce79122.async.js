"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[134],{2740:function(g,P,e){e.r(P);var B=e(14543),o=e(21277),F=e(67711),d=e(61619),m=e(67006),l=e.n(m),p=e(50959),i=e(11527),h={jobInfo:{name:"normal job",type:1},syncTableInfo:{timeRange:[l()().subtract(1,"m"),l()()],title:"example table title"}},v=function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(_){setTimeout(function(){_(h)},D)})},E=[{value:1,label:"\u56FD\u4F01"},{value:2,label:"\u79C1\u4F01"}],c=function(){var D=(0,p.useRef)([]);return(0,p.useEffect)(function(){v(1e3).then(function(){var _;D==null||(_=D.current)===null||_===void 0||_.forEach(function(n){var a;n==null||(a=n.current)===null||a===void 0||a.setFieldsValue(h)})})},[]),(0,i.jsxs)(B.L0,{formMapRef:D,onFinish:function(n){return console.log(n),Promise.resolve(!0)},children:[(0,i.jsxs)(B.L0.StepForm,{name:"step1",title:"\u5DE5\u4F5C\u4FE1\u606F",children:[(0,i.jsx)(o.Z,{label:"\u59D3\u540D",name:["jobInfo","name"]}),(0,i.jsx)(F.Z,{label:"\u5DE5\u4F5C\u7C7B\u578B",name:["jobInfo","type"],options:E})]}),(0,i.jsxs)(B.L0.StepForm,{name:"step2",title:"\u540C\u6B65\u8868\u5355\u4FE1\u606F",children:[(0,i.jsx)(d.Z,{label:"\u65F6\u95F4\u533A\u95F4",name:["syncTableInfo","timeRange"]}),(0,i.jsx)(o.Z,{label:"\u6807\u9898",name:["syncTableInfo","title"]})]})]})};P.default=c},62632:function(g,P,e){e.r(P);var B=e(25359),o=e.n(B),F=e(49811),d=e.n(F),m=e(10691),l=e(14543),p=e(21277),i=e(28354),h=e(61619),v=e(85262),E=e(42119),c=e(695),M=e(67711),D=e(26548),_=e(59649),n=e(11527),a=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(r){setTimeout(function(){r(!0)},u)})};P.default=function(){return(0,n.jsx)(m.Z,{children:(0,n.jsxs)(l.L0,{onFinish:function(){var s=d()(o()().mark(function u(r){return o()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return console.log(r),O.next=3,a(1e3);case 3:D.ZP.success("\u63D0\u4EA4\u6210\u529F");case 4:case"end":return O.stop()}},u)}));return function(u){return s.apply(this,arguments)}}(),formProps:{validateMessages:{required:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}},submitter:{render:function(u){return u.step===0?(0,n.jsxs)(_.ZP,{type:"primary",onClick:function(){var t;return(t=u.onSubmit)===null||t===void 0?void 0:t.call(u)},children:["\u53BB\u7B2C\u4E8C\u6B65 ",">"]}):u.step===1?[(0,n.jsx)(_.ZP,{onClick:function(){var t;return(t=u.onPre)===null||t===void 0?void 0:t.call(u)},children:"\u8FD4\u56DE\u7B2C\u4E00\u6B65"},"pre"),(0,n.jsxs)(_.ZP,{type:"primary",onClick:function(){var t;return(t=u.onSubmit)===null||t===void 0?void 0:t.call(u)},children:["\u53BB\u7B2C\u4E09\u6B65 ",">"]},"goToTree")]:[(0,n.jsxs)(_.ZP,{onClick:function(){var t;return(t=u.onPre)===null||t===void 0?void 0:t.call(u)},children:["<"," \u8FD4\u56DE\u7B2C\u4E8C\u6B65"]},"gotoTwo"),(0,n.jsx)(_.ZP,{type:"primary",onClick:function(){var t;return(t=u.onSubmit)===null||t===void 0?void 0:t.call(u)},children:"\u63D0\u4EA4 \u221A"},"goToTree")]}},children:[(0,n.jsxs)(l.L0.StepForm,{name:"base",title:"\u521B\u5EFA\u5B9E\u9A8C",onFinish:function(){var s=d()(o()().mark(function u(r){var t;return o()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return t=r.name,console.log(t),C.next=4,a(2e3);case 4:return C.abrupt("return",!0);case 5:case"end":return C.stop()}},u)}));return function(u){return s.apply(this,arguments)}}(),children:[(0,n.jsx)(p.Z,{name:"name",label:"\u5B9E\u9A8C\u540D\u79F0",width:"md",tooltip:"\u6700\u957F\u4E3A 24 \u4F4D\uFF0C\u7528\u4E8E\u6807\u5B9A\u7684\u552F\u4E00 id",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",rules:[{required:!0}]}),(0,n.jsx)(i.Z,{name:"date",label:"\u65E5\u671F"}),(0,n.jsx)(h.Z,{name:"dateTime",label:"\u65F6\u95F4\u533A\u95F4"}),(0,n.jsx)(v.Z,{name:"remark",label:"\u5907\u6CE8",width:"lg",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"})]}),(0,n.jsxs)(l.L0.StepForm,{name:"checkbox",title:"\u8BBE\u7F6E\u53C2\u6570",children:[(0,n.jsx)(E.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",width:"lg",options:["\u7ED3\u6784\u8FC1\u79FB","\u5168\u91CF\u8FC1\u79FB","\u589E\u91CF\u8FC1\u79FB","\u5168\u91CF\u6821\u9A8C"]}),(0,n.jsxs)(c.A.Group,{children:[(0,n.jsx)(p.Z,{name:"dbname",label:"\u4E1A\u52A1 DB \u7528\u6237\u540D"}),(0,n.jsx)(i.Z,{name:"datetime",label:"\u8BB0\u5F55\u4FDD\u5B58\u65F6\u95F4",width:"sm"}),(0,n.jsx)(E.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",options:["\u5B8C\u6574 LOB","\u4E0D\u540C\u6B65 LOB","\u53D7\u9650\u5236 LOB"]})]})]}),(0,n.jsxs)(l.L0.StepForm,{name:"time",title:"\u53D1\u5E03\u5B9E\u9A8C",children:[(0,n.jsx)(E.Z.Group,{name:"checkbox",label:"\u90E8\u7F72\u5355\u5143",rules:[{required:!0}],options:["\u90E8\u7F72\u5355\u51431","\u90E8\u7F72\u5355\u51432","\u90E8\u7F72\u5355\u51433"]}),(0,n.jsx)(M.Z,{label:"\u90E8\u7F72\u5206\u7EC4\u7B56\u7565",name:"remark",rules:[{required:!0}],initialValue:"1",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]}),(0,n.jsx)(M.Z,{label:"Pod \u8C03\u5EA6\u7B56\u7565",name:"remark2",initialValue:"2",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]})]})]})})}},45934:function(g,P,e){e.r(P);var B=e(25359),o=e.n(B),F=e(49811),d=e.n(F),m=e(54306),l=e.n(m),p=e(33706),i=e(14543),h=e(21277),v=e(28354),E=e(695),c=e(21429),M=e(85262),D=e(42119),_=e(67711),n=e(59649),a=e(26548),s=e(76945),u=e(50959),r=e(11527),t=function(){var C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(L){setTimeout(function(){L(!0)},C)})};P.default=function(){var O=(0,u.useState)(!1),C=l()(O,2),L=C[0],x=C[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ZP,{type:"primary",onClick:function(){return x(!0)},children:[(0,r.jsx)(p.Z,{}),"\u5206\u6B65\u8868\u5355\u65B0\u5EFA"]}),(0,r.jsxs)(i.L0,{onFinish:function(){var j=d()(o()().mark(function A(f){return o()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return console.log(f),K.next=3,t(1e3);case 3:x(!1),a.ZP.success("\u63D0\u4EA4\u6210\u529F");case 5:case"end":return K.stop()}},A)}));return function(A){return j.apply(this,arguments)}}(),formProps:{validateMessages:{required:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}},stepsFormRender:function(A,f){return(0,r.jsx)(s.Z,{title:"\u5206\u6B65\u8868\u5355",width:800,onCancel:function(){return x(!1)},open:L,footer:f,destroyOnClose:!0,children:A})},children:[(0,r.jsxs)(i.L0.StepForm,{name:"base",title:"\u521B\u5EFA\u5B9E\u9A8C",onFinish:d()(o()().mark(function j(){return o()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,t(2e3);case 2:return f.abrupt("return",!0);case 3:case"end":return f.stop()}},j)})),children:[(0,r.jsx)(h.Z,{name:"name",width:"md",label:"\u5B9E\u9A8C\u540D\u79F0",tooltip:"\u6700\u957F\u4E3A 24 \u4F4D\uFF0C\u7528\u4E8E\u6807\u5B9A\u7684\u552F\u4E00 id",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",rules:[{required:!0}]}),(0,r.jsx)(v.Z,{name:"date",label:"\u65E5\u671F"}),(0,r.jsxs)(E.A.Group,{title:"\u65F6\u95F4\u9009\u62E9",children:[(0,r.jsx)(c.Z,{name:"dateTime",label:"\u5F00\u59CB\u65F6\u95F4"}),(0,r.jsx)(v.Z,{name:"date",label:"\u7ED3\u675F\u65F6\u95F4"})]}),(0,r.jsx)(M.Z,{name:"remark",label:"\u5907\u6CE8",width:"lg",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"})]}),(0,r.jsxs)(i.L0.StepForm,{name:"checkbox",title:"\u8BBE\u7F6E\u53C2\u6570",children:[(0,r.jsx)(D.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",width:"lg",options:["\u7ED3\u6784\u8FC1\u79FB","\u5168\u91CF\u8FC1\u79FB","\u589E\u91CF\u8FC1\u79FB","\u5168\u91CF\u6821\u9A8C"]}),(0,r.jsxs)(E.A.Group,{children:[(0,r.jsx)(h.Z,{width:"md",name:"dbname",label:"\u4E1A\u52A1 DB \u7528\u6237\u540D"}),(0,r.jsx)(v.Z,{name:"datetime",label:"\u8BB0\u5F55\u4FDD\u5B58\u65F6\u95F4",width:"sm"}),(0,r.jsx)(D.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",options:["\u5B8C\u6574 LOB","\u4E0D\u540C\u6B65 LOB","\u53D7\u9650\u5236 LOB"]})]})]}),(0,r.jsxs)(i.L0.StepForm,{name:"time",title:"\u53D1\u5E03\u5B9E\u9A8C",children:[(0,r.jsx)(D.Z.Group,{name:"checkbox",label:"\u90E8\u7F72\u5355\u5143",rules:[{required:!0}],options:["\u90E8\u7F72\u5355\u51431","\u90E8\u7F72\u5355\u51432","\u90E8\u7F72\u5355\u51433"]}),(0,r.jsx)(_.Z,{label:"\u90E8\u7F72\u5206\u7EC4\u7B56\u7565",name:"remark",rules:[{required:!0}],width:"md",initialValue:"1",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]}),(0,r.jsx)(_.Z,{label:"Pod \u8C03\u5EA6\u7B56\u7565",name:"remark2",width:"md",initialValue:"2",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]})]})]})]})}},96984:function(g,P,e){e.r(P);var B=e(25359),o=e.n(B),F=e(49811),d=e.n(F),m=e(14543),l=e(10691),p=e(21277),i=e(695),h=e(67711),v=e(32741),E=e(61619),c=e(42119),M=e(28354),D=e(26548),_=e(11527),n=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(u){setTimeout(function(){u(!0)},s)})};P.default=function(){return(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)(m.L0,{onFinish:function(){var a=d()(o()().mark(function s(u){return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(u),t.next=3,n(1e3);case 3:D.ZP.success("\u63D0\u4EA4\u6210\u529F");case 4:case"end":return t.stop()}},s)}));return function(s){return a.apply(this,arguments)}}(),formProps:{validateMessages:{required:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}},children:[(0,_.jsxs)(m.L0.StepForm,{name:"base",title:"\u7B2C\u4E00\u6B65\u9AA4",onFinish:d()(o()().mark(function a(){return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,n(2e3);case 2:return u.abrupt("return",!0);case 3:case"end":return u.stop()}},a)})),children:[(0,_.jsxs)(l.Z,{title:"\u6E90\u548C\u76EE\u6807",bordered:!0,headerBordered:!0,collapsible:!0,style:{marginBlockEnd:16,minWidth:800,maxWidth:"100%"},children:[(0,_.jsx)(p.Z,{name:"name",width:"md",label:"\u8FC1\u79FB\u4EFB\u52A1\u540D\u79F0",tooltip:"\u6700\u957F\u4E3A 24 \u4F4D\uFF0C\u7528\u4E8E\u6807\u5B9A\u7684\u552F\u4E00 id",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",rules:[{required:!0}]}),(0,_.jsxs)(i.A.Group,{title:"\u8282\u70B9",size:8,children:[(0,_.jsx)(h.Z,{width:"sm",name:"source",placeholder:"\u9009\u62E9\u6765\u6E90\u8282\u70B9"}),(0,_.jsx)(h.Z,{width:"sm",name:"target",placeholder:"\u9009\u62E9\u76EE\u6807\u8282\u70B9"})]})]}),(0,_.jsxs)(l.Z,{title:"\u9876\u90E8\u5BF9\u9F50",bordered:!0,headerBordered:!0,collapsible:!0,style:{minWidth:800,marginBlockEnd:16},children:[(0,_.jsx)(v.Z,{name:"xs",label:"XS\u53F7\u8868\u5355",initialValue:9999,tooltip:"\u60AC\u6D6E\u51FA\u73B0\u7684\u6C14\u6CE1\u3002",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",width:"xs"}),(0,_.jsx)(p.Z,{name:"s",label:"S\u53F7\u8868\u5355",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",width:"sm"}),(0,_.jsx)(E.Z,{name:"m",label:"M \u53F7\u8868\u5355"}),(0,_.jsx)(h.Z,{name:"l",label:"L \u53F7\u8868\u5355",fieldProps:{mode:"tags"},width:"lg",initialValue:["\u5434\u5BB6\u8C6A","\u5468\u661F\u661F"],options:["\u5434\u5BB6\u8C6A","\u5468\u661F\u661F","\u9648\u62C9\u98CE"].map(function(a){return{label:a,value:a}})})]})]}),(0,_.jsx)(m.L0.StepForm,{name:"checkbox",title:"\u7B2C\u4E8C\u6B65\u9AA4",children:(0,_.jsxs)(l.Z,{style:{minWidth:800,marginBlockEnd:16,maxWidth:"100%"},children:[(0,_.jsx)(c.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",width:"lg",options:["\u7ED3\u6784\u8FC1\u79FB","\u5168\u91CF\u8FC1\u79FB","\u589E\u91CF\u8FC1\u79FB","\u5168\u91CF\u6821\u9A8C"]}),(0,_.jsxs)(i.A.Group,{children:[(0,_.jsx)(p.Z,{name:"dbname",label:"\u4E1A\u52A1 DB \u7528\u6237\u540D"}),(0,_.jsx)(M.Z,{name:"datetime",label:"\u8BB0\u5F55\u4FDD\u5B58\u65F6\u95F4",width:"sm"})]}),(0,_.jsx)(c.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",options:["\u5B8C\u6574 LOB","\u4E0D\u540C\u6B65 LOB","\u53D7\u9650\u5236 LOB"]})]})}),(0,_.jsx)(m.L0.StepForm,{name:"time",title:"\u7B2C\u4E09\u6B65\u9AA4",children:(0,_.jsxs)(l.Z,{style:{marginBlockEnd:16,minWidth:800,maxWidth:"100%"},children:[(0,_.jsx)(c.Z.Group,{name:"checkbox",label:"\u90E8\u7F72\u5355\u5143",rules:[{required:!0}],options:["\u90E8\u7F72\u5355\u51431","\u90E8\u7F72\u5355\u51432","\u90E8\u7F72\u5355\u51433"]}),(0,_.jsx)(h.Z,{label:"\u90E8\u7F72\u5206\u7EC4\u7B56\u7565",name:"remark",rules:[{required:!0}],width:"md",initialValue:"1",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]}),(0,_.jsx)(h.Z,{label:"Pod \u8C03\u5EA6\u7B56\u7565",name:"remark2",width:"md",initialValue:"2",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]})]})})]})})}},112:function(g,P,e){e.r(P);var B=e(25359),o=e.n(B),F=e(49811),d=e.n(F),m=e(10691),l=e(14543),p=e(21277),i=e(28354),h=e(61619),v=e(85262),E=e(42119),c=e(695),M=e(26548),D=e(50959),_=e(11527),n=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(u){setTimeout(function(){u(!0)},s)})};P.default=function(){var a=(0,D.useRef)();return(0,_.jsx)(m.Z,{children:(0,_.jsxs)(l.L0,{stepsProps:{direction:"vertical"},formRef:a,onFinish:d()(o()().mark(function s(){return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n(1e3);case 2:M.ZP.success("\u63D0\u4EA4\u6210\u529F");case 3:case"end":return r.stop()}},s)})),formProps:{validateMessages:{required:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}},children:[(0,_.jsxs)(l.L0.StepForm,{name:"base",title:"\u521B\u5EFA\u5B9E\u9A8C",stepProps:{description:"\u8FD9\u91CC\u586B\u5165\u7684\u90FD\u662F\u57FA\u672C\u4FE1\u606F"},onFinish:d()(o()().mark(function s(){var u;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log((u=a.current)===null||u===void 0?void 0:u.getFieldsValue()),t.next=3,n(2e3);case 3:return t.abrupt("return",!0);case 4:case"end":return t.stop()}},s)})),children:[(0,_.jsx)(p.Z,{name:"name",label:"\u5B9E\u9A8C\u540D\u79F0",width:"md",tooltip:"\u6700\u957F\u4E3A 24 \u4F4D\uFF0C\u7528\u4E8E\u6807\u5B9A\u7684\u552F\u4E00 id",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",rules:[{required:!0}]}),(0,_.jsx)(i.Z,{name:"date",label:"\u65E5\u671F"}),(0,_.jsx)(h.Z,{name:"dateTime",label:"\u65F6\u95F4\u533A\u95F4"}),(0,_.jsx)(v.Z,{name:"remark",label:"\u5907\u6CE8",width:"lg",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"})]}),(0,_.jsxs)(l.L0.StepForm,{name:"checkbox",title:"\u8BBE\u7F6E\u53C2\u6570",stepProps:{description:"\u8FD9\u91CC\u586B\u5165\u8FD0\u7EF4\u53C2\u6570"},onFinish:d()(o()().mark(function s(){var u;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log((u=a.current)===null||u===void 0?void 0:u.getFieldsValue()),t.abrupt("return",!0);case 2:case"end":return t.stop()}},s)})),children:[(0,_.jsx)(E.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",width:"lg",options:["\u7ED3\u6784\u8FC1\u79FB","\u5168\u91CF\u8FC1\u79FB","\u589E\u91CF\u8FC1\u79FB","\u5168\u91CF\u6821\u9A8C","\u589E\u91CF\u6821\u9A8C","\u5168\u91CF\u66FF\u6362","\u589E\u91CF\u66FF\u6362"]}),(0,_.jsxs)(c.A.Group,{children:[(0,_.jsx)(p.Z,{name:"dbname",label:"\u4E1A\u52A1 DB \u7528\u6237\u540D"}),(0,_.jsx)(i.Z,{name:"datetime",label:"\u8BB0\u5F55\u4FDD\u5B58\u65F6\u95F4",width:"sm"}),(0,_.jsx)(E.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",options:["\u5B8C\u6574 LOB","\u4E0D\u540C\u6B65 LOB","\u53D7\u9650\u5236 LOB"]})]})]}),(0,_.jsxs)(l.L0.StepForm,{name:"step3",title:"\u7B2C\u4E09\u6B65",stepProps:{description:"\u8FD9\u91CC\u586B\u5165\u8FD0\u7EF4\u53C2\u6570"},onFinish:d()(o()().mark(function s(){var u;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log((u=a.current)===null||u===void 0?void 0:u.getFieldsValue()),t.abrupt("return",!0);case 2:case"end":return t.stop()}},s)})),children:[(0,_.jsx)(E.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",width:"lg",options:["\u7ED3\u6784\u8FC1\u79FB","\u5168\u91CF\u8FC1\u79FB","\u5168\u91CF\u6821\u9A8C","\u589E\u91CF\u66FF\u6362"]}),(0,_.jsxs)(c.A.Group,{children:[(0,_.jsx)(p.Z,{name:"dbname",label:"\u4E1A\u52A1 DB \u7528\u6237\u540D"}),(0,_.jsx)(i.Z,{name:"datetime",label:"\u8BB0\u5F55\u4FDD\u5B58\u65F6\u95F4",width:"sm"})]}),(0,_.jsx)(E.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",options:["\u5B8C\u6574 LOB","\u4E0D\u540C\u6B65 LOB","\u53D7\u9650\u5236 LOB"]})]})]})})}},57862:function(g,P,e){e.r(P);var B=e(25359),o=e.n(B),F=e(49811),d=e.n(F),m=e(10691),l=e(14543),p=e(21277),i=e(28354),h=e(61619),v=e(85262),E=e(42119),c=e(695),M=e(67711),D=e(26548),_=e(50959),n=e(11527),a=function(){var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:100;return new Promise(function(r){setTimeout(function(){r(!0)},u)})};P.default=function(){var s=(0,_.useRef)();return(0,n.jsx)(m.Z,{children:(0,n.jsxs)(l.L0,{formRef:s,onFinish:d()(o()().mark(function u(){return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a(1e3);case 2:D.ZP.success("\u63D0\u4EA4\u6210\u529F");case 3:case"end":return t.stop()}},u)})),formProps:{validateMessages:{required:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879"}},children:[(0,n.jsxs)(l.L0.StepForm,{name:"base",title:"\u521B\u5EFA\u5B9E\u9A8C",stepProps:{description:"\u8FD9\u91CC\u586B\u5165\u7684\u90FD\u662F\u57FA\u672C\u4FE1\u606F"},onFinish:d()(o()().mark(function u(){var r;return o()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return console.log((r=s.current)===null||r===void 0?void 0:r.getFieldsValue()),O.next=3,a(2e3);case 3:return O.abrupt("return",!0);case 4:case"end":return O.stop()}},u)})),children:[(0,n.jsx)(p.Z,{name:"name",label:"\u5B9E\u9A8C\u540D\u79F0",width:"md",tooltip:"\u6700\u957F\u4E3A 24 \u4F4D\uFF0C\u7528\u4E8E\u6807\u5B9A\u7684\u552F\u4E00 id",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",rules:[{required:!0}]}),(0,n.jsx)(i.Z,{name:"date",label:"\u65E5\u671F"}),(0,n.jsx)(h.Z,{name:"dateTime",label:"\u65F6\u95F4\u533A\u95F4"}),(0,n.jsx)(v.Z,{name:"remark",label:"\u5907\u6CE8",width:"lg",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"})]}),(0,n.jsxs)(l.L0.StepForm,{name:"checkbox",title:"\u8BBE\u7F6E\u53C2\u6570",stepProps:{description:"\u8FD9\u91CC\u586B\u5165\u8FD0\u7EF4\u53C2\u6570"},onFinish:d()(o()().mark(function u(){var r;return o()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return console.log((r=s.current)===null||r===void 0?void 0:r.getFieldsValue()),O.abrupt("return",!0);case 2:case"end":return O.stop()}},u)})),children:[(0,n.jsx)(E.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",width:"lg",options:["\u7ED3\u6784\u8FC1\u79FB","\u5168\u91CF\u8FC1\u79FB","\u589E\u91CF\u8FC1\u79FB","\u5168\u91CF\u6821\u9A8C"]}),(0,n.jsxs)(c.A.Group,{children:[(0,n.jsx)(p.Z,{name:"dbname",label:"\u4E1A\u52A1 DB \u7528\u6237\u540D"}),(0,n.jsx)(i.Z,{name:"datetime",label:"\u8BB0\u5F55\u4FDD\u5B58\u65F6\u95F4",width:"sm"}),(0,n.jsx)(E.Z.Group,{name:"checkbox",label:"\u8FC1\u79FB\u7C7B\u578B",options:["\u5B8C\u6574 LOB","\u4E0D\u540C\u6B65 LOB","\u53D7\u9650\u5236 LOB"]})]})]}),(0,n.jsxs)(l.L0.StepForm,{name:"time",title:"\u53D1\u5E03\u5B9E\u9A8C",stepProps:{description:"\u8FD9\u91CC\u586B\u5165\u53D1\u5E03\u5224\u65AD"},children:[(0,n.jsx)(E.Z.Group,{name:"checkbox",label:"\u90E8\u7F72\u5355\u5143",rules:[{required:!0}],options:["\u90E8\u7F72\u5355\u51431","\u90E8\u7F72\u5355\u51432","\u90E8\u7F72\u5355\u51433"]}),(0,n.jsx)(M.Z,{label:"\u90E8\u7F72\u5206\u7EC4\u7B56\u7565",name:"remark",rules:[{required:!0}],initialValue:"1",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]}),(0,n.jsx)(M.Z,{label:"Pod \u8C03\u5EA6\u7B56\u7565",name:"remark2",initialValue:"2",options:[{value:"1",label:"\u7B56\u7565\u4E00"},{value:"2",label:"\u7B56\u7565\u4E8C"}]})]})]})})}},42119:function(g,P,e){var B=e(57213),o=e.n(B),F=e(12342),d=e.n(F),m=e(57647),l=e(19433),p=e(50959),i=e(86718),h=e(24745),v=e(11527),E=["options","fieldProps","proFieldProps","valueEnum"],c=p.forwardRef(function(n,a){var s=n.options,u=n.fieldProps,r=n.proFieldProps,t=n.valueEnum,O=d()(n,E);return(0,v.jsx)(h.Z,o()({ref:a,valueType:"checkbox",valueEnum:(0,m.h)(t,void 0),fieldProps:o()({options:s},u),lightProps:o()({labelFormatter:function(){return(0,v.jsx)(h.Z,o()({ref:a,valueType:"checkbox",mode:"read",valueEnum:(0,m.h)(t,void 0),filedConfig:{customLightMode:!0},fieldProps:o()({options:s},u),proFieldProps:r},O))}},O.lightProps),proFieldProps:r},O))}),M=p.forwardRef(function(n,a){var s=n.fieldProps,u=n.children;return(0,v.jsx)(l.Z,o()(o()({ref:a},s),{},{children:u}))}),D=(0,i.G)(M,{valuePropName:"checked"}),_=D;_.Group=c,P.Z=_},28354:function(g,P,e){e.d(P,{Z:function(){return K}});var B=e(57213),o=e.n(B),F=e(12342),d=e.n(F),m=e(50959),l=e(56853),p=e(24745),i=e(11527),h=["proFieldProps","fieldProps"],v="date",E=m.forwardRef(function(b,U){var R=b.proFieldProps,W=b.fieldProps,I=d()(b,h),Z=(0,m.useContext)(l.Z);return(0,i.jsx)(p.Z,o()({ref:U,valueType:v,fieldProps:o()({getPopupContainer:Z.getPopupContainer},W),proFieldProps:R,filedConfig:{valueType:v,customLightMode:!0}},I))}),c=E,M=["proFieldProps","fieldProps"],D="dateMonth",_=m.forwardRef(function(b,U){var R=b.proFieldProps,W=b.fieldProps,I=d()(b,M),Z=(0,m.useContext)(l.Z);return(0,i.jsx)(p.Z,o()({ref:U,valueType:D,fieldProps:o()({getPopupContainer:Z.getPopupContainer},W),proFieldProps:R,filedConfig:{valueType:D,customLightMode:!0}},I))}),n=_,a=["fieldProps"],s="dateQuarter",u=m.forwardRef(function(b,U){var R=b.fieldProps,W=d()(b,a),I=(0,m.useContext)(l.Z);return(0,i.jsx)(p.Z,o()({ref:U,valueType:s,fieldProps:o()({getPopupContainer:I.getPopupContainer},R),filedConfig:{valueType:s,customLightMode:!0}},W))}),r=u,t=["proFieldProps","fieldProps"],O="dateWeek",C=m.forwardRef(function(b,U){var R=b.proFieldProps,W=b.fieldProps,I=d()(b,t),Z=(0,m.useContext)(l.Z);return(0,i.jsx)(p.Z,o()({ref:U,valueType:O,fieldProps:o()({getPopupContainer:Z.getPopupContainer},W),proFieldProps:R,filedConfig:{valueType:O,customLightMode:!0}},I))}),L=C,x=["proFieldProps","fieldProps"],j="dateYear",A=m.forwardRef(function(b,U){var R=b.proFieldProps,W=b.fieldProps,I=d()(b,x),Z=(0,m.useContext)(l.Z);return(0,i.jsx)(p.Z,o()({ref:U,valueType:j,fieldProps:o()({getPopupContainer:Z.getPopupContainer},W),proFieldProps:R,filedConfig:{valueType:j,customLightMode:!0}},I))}),f=A,T=c;T.Week=L,T.Month=n,T.Quarter=r,T.Year=f,T.displayName="ProFormComponent";var K=T},61619:function(g,P,e){var B=e(57213),o=e.n(B),F=e(12342),d=e.n(F),m=e(6110),l=e(50959),p=e(56853),i=e(24745),h=e(11527),v=["fieldProps","proFieldProps"],E="dateRange",c=l.forwardRef(function(M,D){var _=M.fieldProps,n=M.proFieldProps,a=d()(M,v),s=(0,l.useContext)(p.Z);return(0,h.jsx)(i.Z,o()({ref:D,fieldProps:o()({getPopupContainer:s.getPopupContainer},_),valueType:E,proFieldProps:n,filedConfig:{valueType:E,customLightMode:!0,lightFilterLabelFormatter:function(r){return(0,m.c)(r,(_==null?void 0:_.format)||"YYYY-MM-DD")}}},a))});P.Z=c},21429:function(g,P,e){var B=e(57213),o=e.n(B),F=e(12342),d=e.n(F),m=e(50959),l=e(56853),p=e(24745),i=e(11527),h=["fieldProps","proFieldProps"],v="dateTime",E=m.forwardRef(function(c,M){var D=c.fieldProps,_=c.proFieldProps,n=d()(c,h),a=(0,m.useContext)(l.Z);return(0,i.jsx)(p.Z,o()({ref:M,fieldProps:o()({getPopupContainer:a.getPopupContainer},D),valueType:v,proFieldProps:_,filedConfig:{valueType:v,customLightMode:!0}},n))});P.Z=E},32741:function(g,P,e){var B=e(57213),o=e.n(B),F=e(12342),d=e.n(F),m=e(50959),l=e(24745),p=e(11527),i=["fieldProps","min","proFieldProps","max"],h=function(c,M){var D=c.fieldProps,_=c.min,n=c.proFieldProps,a=c.max,s=d()(c,i);return(0,p.jsx)(l.Z,o()({valueType:"digit",fieldProps:o()({min:_,max:a},D),ref:M,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:n},s))},v=m.forwardRef(h);P.Z=v},67711:function(g,P,e){var B=e(57213),o=e.n(B),F=e(12342),d=e.n(F),m=e(57647),l=e(50959),p=e(56853),i=e(24745),h=e(11527),v=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],E=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],c=function(s,u){var r=s.fieldProps,t=s.children,O=s.params,C=s.proFieldProps,L=s.mode,x=s.valueEnum,j=s.request,A=s.showSearch,f=s.options,T=d()(s,v),K=(0,l.useContext)(p.Z);return(0,h.jsx)(i.Z,o()(o()({valueEnum:(0,m.h)(x),request:j,params:O,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:o()({options:f,mode:L,showSearch:A,getPopupContainer:K.getPopupContainer},r),ref:u,proFieldProps:C},T),{},{children:t}))},M=l.forwardRef(function(a,s){var u=a.fieldProps,r=a.children,t=a.params,O=a.proFieldProps,C=a.mode,L=a.valueEnum,x=a.request,j=a.options,A=d()(a,E),f=o()({options:j,mode:C||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},u),T=(0,l.useContext)(p.Z);return(0,h.jsx)(i.Z,o()(o()({valueEnum:(0,m.h)(L),request:x,params:t,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:o()({getPopupContainer:T.getPopupContainer},f),ref:s,proFieldProps:O},A),{},{children:r}))}),D=l.forwardRef(c),_=M,n=D;n.SearchSelect=_,n.displayName="ProFormComponent",P.Z=n},21277:function(g,P,e){var B=e(57213),o=e.n(B),F=e(12342),d=e.n(F),m=e(50959),l=e(24745),p=e(11527),i=["fieldProps","proFieldProps"],h=["fieldProps","proFieldProps"],v="text",E=function(_){var n=_.fieldProps,a=_.proFieldProps,s=d()(_,i);return(0,p.jsx)(l.Z,o()({valueType:v,fieldProps:n,filedConfig:{valueType:v},proFieldProps:a},s))},c=function(_){var n=_.fieldProps,a=_.proFieldProps,s=d()(_,h);return(0,p.jsx)(l.Z,o()({valueType:"password",fieldProps:n,proFieldProps:a,filedConfig:{valueType:v}},s))},M=E;M.Password=c,M.displayName="ProFormComponent",P.Z=M},85262:function(g,P,e){var B=e(57213),o=e.n(B),F=e(12342),d=e.n(F),m=e(50959),l=e(24745),p=e(11527),i=["fieldProps","proFieldProps"],h=function(E,c){var M=E.fieldProps,D=E.proFieldProps,_=d()(E,i);return(0,p.jsx)(l.Z,o()({ref:c,valueType:"textarea",fieldProps:M,proFieldProps:D},_))};P.Z=m.forwardRef(h)},63073:function(g,P,e){var B=e(6091);function o(){return(0,B.Z)()}P.ZP={useBreakpoint:o}}}]);
