(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4hqb":function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a("q1tI"),o=n.createContext();function r(){return n.useContext(o)}t.a=o},As0B:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("wx14"),o=a("q1tI"),r=a("HR5l");function i(e,t){var a=o.memo(o.forwardRef((function(t,a){return o.createElement(r.a,Object(n.a)({},t,{ref:a}),e)})));return a.muiName=r.a.muiName,a}},EHdT:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),o=a("4hqb");function r(){return n.useContext(o.a)}},IsqK:function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("H2TA"),l=a("ofer"),s=a("MquD"),d=r.forwardRef((function(e,t){var a=e.children,c=e.classes,d=e.className,u=e.disableTypography,m=void 0!==u&&u,h=e.inset,f=void 0!==h&&h,b=e.primary,p=e.primaryTypographyProps,v=e.secondary,g=e.secondaryTypographyProps,y=Object(o.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),k=r.useContext(s.a).dense,w=null!=b?b:a;null==w||w.type===l.a||m||(w=r.createElement(l.a,Object(n.a)({variant:k?"body2":"body1",className:c.primary,component:"span",display:"block"},p),w));var C=v;return null==C||C.type===l.a||m||(C=r.createElement(l.a,Object(n.a)({variant:"body2",className:c.secondary,color:"textSecondary",display:"block"},g),C)),r.createElement("div",Object(n.a)({className:Object(i.default)(c.root,d,k&&c.dense,f&&c.inset,w&&C&&c.multiline),ref:t},y),w,C)}));t.a=Object(c.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(d)},MquD:function(e,t,a){"use strict";var n=a("q1tI"),o=n.createContext({});t.a=o},Wfai:function(e,t,a){"use strict";a.r(t);a("rE2o"),a("ioFf"),a("rGqo"),a("91GP");var n=a("hlFM"),o=a("Z3vd"),r=a("wx14"),i=a("Ff2n"),c=a("q1tI"),l=a.n(c),s=(a("17x9"),a("iuhU")),d=(a("f3/d"),a("ODXe")),u=a("yCxk"),m=a("EHdT"),h=a("H2TA"),f=a("PsDL"),b=c.forwardRef((function(e,t){var a=e.autoFocus,n=e.checked,o=e.checkedIcon,l=e.classes,h=e.className,b=e.defaultChecked,p=e.disabled,v=e.icon,g=e.id,y=e.inputProps,k=e.inputRef,w=e.name,C=e.onBlur,x=e.onChange,I=e.onFocus,E=e.readOnly,O=e.required,j=e.tabIndex,M=e.type,N=e.value,B=Object(i.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),F=Object(u.a)({controlled:n,default:Boolean(b),name:"SwitchBase"}),q=Object(d.a)(F,2),P=q[0],T=q[1],D=Object(m.a)(),S=p;D&&void 0===S&&(S=D.disabled);var z="checkbox"===M||"radio"===M;return c.createElement(f.a,Object(r.a)({component:"span",className:Object(s.default)(l.root,h,P&&l.checked,S&&l.disabled),disabled:S,tabIndex:null,role:void 0,onFocus:function(e){I&&I(e),D&&D.onFocus&&D.onFocus(e)},onBlur:function(e){C&&C(e),D&&D.onBlur&&D.onBlur(e)},ref:t},B),c.createElement("input",Object(r.a)({autoFocus:a,checked:n,defaultChecked:b,className:l.input,disabled:S,id:z&&g,name:w,onChange:function(e){var t=e.target.checked;T(t),x&&x(e,t)},readOnly:E,ref:k,required:O,tabIndex:j,type:M,value:N},y)),P?o:v)})),p=Object(h.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(b),v=a("As0B"),g=Object(v.a)(c.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),y=Object(v.a)(c.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),k=a("ye/S"),w=Object(v.a)(c.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),C=a("NqtD"),x=c.createElement(y,null),I=c.createElement(g,null),E=c.createElement(w,null),O=c.forwardRef((function(e,t){var a=e.checkedIcon,n=void 0===a?x:a,o=e.classes,l=e.color,d=void 0===l?"secondary":l,u=e.icon,m=void 0===u?I:u,h=e.indeterminate,f=void 0!==h&&h,b=e.indeterminateIcon,v=void 0===b?E:b,g=e.inputProps,y=e.size,k=void 0===y?"medium":y,w=Object(i.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]);return c.createElement(p,Object(r.a)({type:"checkbox",classes:{root:Object(s.default)(o.root,o["color".concat(Object(C.a)(d))],f&&o.indeterminate),checked:o.checked,disabled:o.disabled},color:d,inputProps:Object(r.a)({"data-indeterminate":f},g),icon:c.cloneElement(f?v:m,{fontSize:"small"===k?"small":"default"}),checkedIcon:c.cloneElement(f?v:n,{fontSize:"small"===k?"small":"default"}),ref:t},w))})),j=Object(h.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(k.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(k.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(O),M=a("Ji2X"),N=a("eD//"),B=a("tVbE"),F=a("MquD"),q=c.forwardRef((function(e,t){var a=e.classes,n=e.className,o=Object(i.a)(e,["classes","className"]),l=c.useContext(F.a);return c.createElement("div",Object(r.a)({className:Object(s.default)(a.root,n,"flex-start"===l.alignItems&&a.alignItemsFlexStart),ref:t},o))})),P=Object(h.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(q),T=a("IsqK"),D=a("e45s"),S=a.n(D),z=a("ofer"),R=a("EcEN"),A=a("Bl7J"),V=a("vrFN");var L=function(){function e(e,t,a){this.row=e,this.col=t,this.parent=a||null,this._cost=void 0}var t=e.prototype;return t.string=function(){return"_"+this.row+"-"+this.col},t.isInside=function(e,t){return 0<=this.row&&this.row<e&&0<=this.col&&this.col<t},t.neighbors=function(){return[new e(this.row+1,this.col+1,this),new e(this.row-1,this.col+1,this),new e(this.row+1,this.col-1,this),new e(this.row-1,this.col-1,this),new e(this.row+1,this.col,this),new e(this.row-1,this.col,this),new e(this.row,this.col-1,this),new e(this.row,this.col+1,this)]},t.cost=function(e,t){if(void 0===this._cost){var a=Math.abs(this.row-e.row)+Math.abs(this.col-e.col),n=Math.abs(this.row-t.row)+Math.abs(this.col-t.col);this._cost=.01*a+.99*n}return this._cost},e}(),H=S()((function(e){return{box:{borderColor:e.palette.secondary.dark,backgroundColor:"#333333",height:"0.75rem",width:"0.75rem",display:"flex",flexDirection:"center",alignItems:"center"},start:{backgroundColor:"green"},target:{backgroundColor:"red"},block:{backgroundColor:"black"},open:{backgroundColor:e.palette.secondary.light},closed:{backgroundColor:e.palette.secondary.main},head:{backgroundColor:"green"},path:{backgroundColor:e.palette.primary.light}}})),$=null,U=function e(t){for(var a=[],n=0;n<t[0];++n)a.push(1===t.length?0:e(t.slice(1)));return a},W=function(){var e,t=new L(Math.floor(62*Math.random()),Math.floor(48*Math.random()));return{grid:U([62,48]),start:t,target:new L(Math.floor(62*Math.random()),Math.floor(48*Math.random()),null),blocks:{},mouseClicked:!1,openCoordinates:(e={},e[""+t.string()]=t,e),closedCoordinates:{},path:{},head:t}},_=function(e,t){return"_"+e+"-"+t};t.default=function(){var e=H(),t=l.a.useState(W()),a=t[0],r=t[1],i=function(e){r(Object.assign({},a,{mouseClicked:e}))},c=function(e,t){return a.target&&a.target.row===e&&a.target.col===t},s=function(e,t){return Boolean(a.blocks[_(e,t)])},d=function(e,t){return Boolean(a.closedCoordinates[_(e,t)])},u=function(e,t){return Boolean(a.openCoordinates[_(e,t)])},m=function(e,t){return Boolean(a.path[_(e,t)])},h=function(e,t){return a.head&&a.head.row===e&&a.head.col===t};return l.a.createElement(A.a,null,l.a.createElement(V.a,{title:"Path Finding"}),l.a.createElement(n.a,{width:"100%",height:"85vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",onMouseDown:function(){return i(!0)},onMouseUp:function(){return i(!1)}},l.a.createElement(z.a,{variant:"h4",color:"primary"},"Path Finding Algorithm"),l.a.createElement(z.a,{variant:"subtitle1",color:"secondary"},"Move the mouse while clicking to create obstacles"),l.a.createElement(n.a,{flexGrow:1},a.grid.map((function(t,n){return l.a.createElement("div",{key:Object(R.v4)(),style:{display:"flex",flexDirection:"center"}},t.map((function(t,o){return l.a.createElement("div",{key:Object(R.v4)(),onMouseEnter:function(){return function(e,t){if(a.mouseClicked){var n=new L(e,t,null),o=a.blocks;s(e,t)?delete o[_(e,t)]:o[_(e,t)]=n,r(Object.assign({},a,{blocks:o}))}}(n,o)},className:"\n                      "+e.box+"\n                      "+(i=n,f=o,a.start&&a.start.row===i&&a.start.col===f&&e.start)+"\n                      "+(s(n,o)&&e.block)+"\n                      "+(h(n,o)&&e.head)+"\n                      "+(c(n,o)&&e.target)+"\n                      "+(m(n,o)&&e.path)+"\n                      "+(u(n,o)&&e.open)+"\n                      "+(d(n,o)&&e.closed)+"\n                    "});var i,f})))}))),l.a.createElement(n.a,null,l.a.createElement(o.a,{color:"primary",variant:"outlined",onClick:function(){$?(clearInterval($),$=null):$=setInterval((function(){var e=a.openCoordinates||[],t=a.closedCoordinates,n=function(e,t,a){var n=null,o=null;for(var r in e){var i=e[r].cost(t,a);(null==o||o>i)&&(o=i,n=r)}return n}(e,a.start,a.target),o=a.openCoordinates[n];if(!o||o.row===a.target.row&&o.col===a.target.col){for(var i=o,c={};i;)c[i.string()]=!0,i=i.parent;return clearInterval($),$=null,void r(Object.assign({},a,{path:c}))}delete e[n],t[o.string()]=o;var l=o.neighbors(o),s=Array.isArray(l),d=0;for(l=s?l:l[Symbol.iterator]();;){var u;if(s){if(d>=l.length)break;u=l[d++]}else{if((d=l.next()).done)break;u=d.value}var m=u,h=m.string(),f=m.isInside(62,48)&&!Boolean(a.blocks[h]),b=Boolean(t[h]);f&&!b&&(Boolean(e[h])||(e[h]=m))}r(Object.assign({},a,{head:o,openCoordinates:e,closedCoordinates:t}))}),10)}},$?"Pause":"Start"),l.a.createElement(o.a,{color:"secondary",variant:"outlined",onClick:function(){return r(W())}},"Reset"))),l.a.createElement(G,null),l.a.createElement(J,null))};function G(){var e;return l.a.createElement(n.a,((e={display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}).alignItems="center",e.marginTop="4rem",e),l.a.createElement(M.a,{maxWidth:"md"},l.a.createElement(z.a,{variant:"h5",color:"primary"},"Motivation"),l.a.createElement(z.a,{variant:"body1"},"While I was studying SLAM algorithms for LIDAR frame stitching, I came across with the youtube video below. I was amazed how a path-finding problem is solved, so I researched on the algorithm behind this video.")),l.a.createElement("iframe",{title:"Micromouse Challenge",width:"700",height:"400",src:"https://www.youtube.com/embed/IngelKjmecg"}))}function J(){return l.a.createElement(n.a,{marginTop:"2rem"},l.a.createElement(M.a,{maxWidth:"md"},l.a.createElement(z.a,{variant:"h5",color:"primary"},"Future Improvements"),l.a.createElement(z.a,{variant:"body1"},"The implementation above is the first part towards making something like the micromouse challenge. Below are my plans for future improvements."),l.a.createElement(N.a,null,["Create a dataset for mazes","Load a maze from the maze dataset","Calculate the optimum return path of the mouse","Improve the UI of the maze by using block borders as obstacles","Improve the UI for building the maze, such that the user can select some blocks then define the borders (obstacles) of those blocks","Improve the speed of rendering by re-rendering only updated blocks"].map((function(e){return l.a.createElement(B.a,{key:Object(R.v4)(),role:void 0,dense:!0},l.a.createElement(P,null,l.a.createElement(j,{edge:"start",checked:!1,tabIndex:-1,disableRipple:!0})),l.a.createElement(T.a,{primary:e}))})))))}},"eD//":function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("H2TA"),l=a("MquD"),s=r.forwardRef((function(e,t){var a=e.children,c=e.classes,s=e.className,d=e.component,u=void 0===d?"ul":d,m=e.dense,h=void 0!==m&&m,f=e.disablePadding,b=void 0!==f&&f,p=e.subheader,v=Object(o.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),g=r.useMemo((function(){return{dense:h}}),[h]);return r.createElement(l.a.Provider,{value:g},r.createElement(u,Object(n.a)({className:Object(i.default)(c.root,s,h&&c.dense,!b&&c.padding,p&&c.subheader),ref:t},v),p,a))}));t.a=Object(c.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(s)},tVbE:function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("H2TA"),l=a("VD++"),s=a("ucBr"),d=a("bfFb"),u=a("MquD"),m=a("i8i4"),h="undefined"==typeof window?r.useEffect:r.useLayoutEffect,f=r.forwardRef((function(e,t){var a=e.alignItems,c=void 0===a?"center":a,f=e.autoFocus,b=void 0!==f&&f,p=e.button,v=void 0!==p&&p,g=e.children,y=e.classes,k=e.className,w=e.component,C=e.ContainerComponent,x=void 0===C?"li":C,I=e.ContainerProps,E=(I=void 0===I?{}:I).className,O=Object(o.a)(I,["className"]),j=e.dense,M=void 0!==j&&j,N=e.disabled,B=void 0!==N&&N,F=e.disableGutters,q=void 0!==F&&F,P=e.divider,T=void 0!==P&&P,D=e.focusVisibleClassName,S=e.selected,z=void 0!==S&&S,R=Object(o.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),A=r.useContext(u.a),V={dense:M||A.dense||!1,alignItems:c},L=r.useRef(null);h((function(){b&&L.current&&L.current.focus()}),[b]);var H=r.Children.toArray(g),$=H.length&&Object(s.a)(H[H.length-1],["ListItemSecondaryAction"]),U=r.useCallback((function(e){L.current=m.findDOMNode(e)}),[]),W=Object(d.a)(U,t),_=Object(n.a)({className:Object(i.default)(y.root,k,V.dense&&y.dense,!q&&y.gutters,T&&y.divider,B&&y.disabled,v&&y.button,"center"!==c&&y.alignItemsFlexStart,$&&y.secondaryAction,z&&y.selected),disabled:B},R),G=w||"li";return v&&(_.component=w||"div",_.focusVisibleClassName=Object(i.default)(y.focusVisible,D),G=l.a),$?(G=_.component||w?G:"div","li"===x&&("li"===G?G="div":"li"===_.component&&(_.component="div")),r.createElement(u.a.Provider,{value:V},r.createElement(x,Object(n.a)({className:Object(i.default)(y.container,E),ref:W},O),r.createElement(G,_,H),H.pop()))):r.createElement(u.a.Provider,{value:V},r.createElement(G,Object(n.a)({ref:W},_),H))}));t.a=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(f)},ucBr:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("V+eJ");var n=a("q1tI");function o(e,t){return n.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},yCxk:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("f3/d");var n=a("q1tI");function o(e){var t=e.controlled,a=e.default,o=(e.name,n.useRef(void 0!==t).current),r=n.useState(a),i=r[0],c=r[1];return[o?t:i,n.useCallback((function(e){o||c(e)}),[])]}}}]);
//# sourceMappingURL=component---src-pages-works-pathfinding-js-958c0c42a8f91962e04c.js.map