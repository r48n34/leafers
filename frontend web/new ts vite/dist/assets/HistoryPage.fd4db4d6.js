import{r as n,a as x,q as on,j as te,m as an,b as gt}from"./index.23e8200d.js";import{C as F,n as u,F as rn}from"./styled-components.browser.esm.ee9f42a4.js";import{g as ln,b as sn}from"./firebaseUse.82a610ed.js";import{C as dn}from"./Container.531eb224.js";import{B as cn}from"./Button.6b16a52f.js";var X;function se(e,t){return e[t]}function We(e,t){return t.split(".").reduce((o,a)=>{const r=a.match(/[^\]\\[.]+/g);if(r&&r.length>1)for(let i=0;i<r.length;i++)return o[r[i]][r[i+1]];return o[a]},e)}function pn(e=[],t,o=0){return[...e.slice(0,o),t,...e.slice(o)]}function gn(e=[],t,o="id"){const a=e.slice(),r=se(t,o);return r?a.splice(a.findIndex(i=>se(i,o)===r),1):a.splice(a.findIndex(i=>i===t),1),a}function ut(e){return e.map((t,o)=>{const a=Object.assign(Object.assign({},t),{sortable:t.sortable||!!t.sortFunction||void 0});return t.id||(a.id=o+1),a})}function be(e,t){return Math.ceil(e/t)}function ze(e,t){return Math.min(e,t)}(function(e){e.ASC="asc",e.DESC="desc"})(X||(X={}));const P=()=>null;function yt(e,t=[],o=[]){let a={},r=[...o];return t.length&&t.forEach(i=>{if(!i.when||typeof i.when!="function")throw new Error('"when" must be defined in the conditional style object and must be function');i.when(e)&&(a=i.style||{},i.classNames&&(r=[...r,...i.classNames]),typeof i.style=="function"&&(a=i.style(e)||{}))}),{style:a,classNames:r.join(" ")}}function ke(e,t=[],o="id"){const a=se(e,o);return a?t.some(r=>se(r,o)===a):t.some(r=>r===e)}function Ee(e,t){return t?e.findIndex(o=>me(o.id,t)):-1}function me(e,t){return e==t}function un(e,t){const o=!e.toggleOnSelectedRowsChange;switch(t.type){case"SELECT_ALL_ROWS":{const{keyField:a,rows:r,rowCount:i,mergeSelections:s}=t,d=!e.allSelected,b=!e.toggleOnSelectedRowsChange;if(s){const y=d?[...e.selectedRows,...r.filter(g=>!ke(g,e.selectedRows,a))]:e.selectedRows.filter(g=>!ke(g,r,a));return Object.assign(Object.assign({},e),{allSelected:d,selectedCount:y.length,selectedRows:y,toggleOnSelectedRowsChange:b})}return Object.assign(Object.assign({},e),{allSelected:d,selectedCount:d?i:0,selectedRows:d?r:[],toggleOnSelectedRowsChange:b})}case"SELECT_SINGLE_ROW":{const{keyField:a,row:r,isSelected:i,rowCount:s,singleSelect:d}=t;return d?i?Object.assign(Object.assign({},e),{selectedCount:0,allSelected:!1,selectedRows:[],toggleOnSelectedRowsChange:o}):Object.assign(Object.assign({},e),{selectedCount:1,allSelected:!1,selectedRows:[r],toggleOnSelectedRowsChange:o}):i?Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length>0?e.selectedRows.length-1:0,allSelected:!1,selectedRows:gn(e.selectedRows,r,a),toggleOnSelectedRowsChange:o}):Object.assign(Object.assign({},e),{selectedCount:e.selectedRows.length+1,allSelected:e.selectedRows.length+1===s,selectedRows:pn(e.selectedRows,r),toggleOnSelectedRowsChange:o})}case"SELECT_MULTIPLE_ROWS":{const{keyField:a,selectedRows:r,totalRows:i,mergeSelections:s}=t;if(s){const d=[...e.selectedRows,...r.filter(b=>!ke(b,e.selectedRows,a))];return Object.assign(Object.assign({},e),{selectedCount:d.length,allSelected:!1,selectedRows:d,toggleOnSelectedRowsChange:o})}return Object.assign(Object.assign({},e),{selectedCount:r.length,allSelected:r.length===i,selectedRows:r,toggleOnSelectedRowsChange:o})}case"CLEAR_SELECTED_ROWS":{const{selectedRowsFlag:a}=t;return Object.assign(Object.assign({},e),{allSelected:!1,selectedCount:0,selectedRows:[],selectedRowsFlag:a})}case"SORT_CHANGE":{const{sortDirection:a,selectedColumn:r,clearSelectedOnSort:i}=t;return Object.assign(Object.assign(Object.assign({},e),{selectedColumn:r,sortDirection:a,currentPage:1}),i&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:o})}case"CHANGE_PAGE":{const{page:a,paginationServer:r,visibleOnly:i,persistSelectedOnPageChange:s}=t,d=r&&s,b=r&&!s||i;return Object.assign(Object.assign(Object.assign(Object.assign({},e),{currentPage:a}),d&&{allSelected:!1}),b&&{allSelected:!1,selectedCount:0,selectedRows:[],toggleOnSelectedRowsChange:o})}case"CHANGE_ROWS_PER_PAGE":{const{rowsPerPage:a,page:r}=t;return Object.assign(Object.assign({},e),{currentPage:r,rowsPerPage:a})}}}const bn=F`
	pointer-events: none;
	opacity: 0.4;
`,mn=u.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 100%;
	${({disabled:e})=>e&&bn};
	${({theme:e})=>e.table.style};
`,xn=F`
	position: sticky;
	position: -webkit-sticky; /* Safari */
	top: 0;
	z-index: 1;
`,hn=u.div`
	display: flex;
	width: 100%;
	${({fixedHeader:e})=>e&&xn};
	${({theme:e})=>e.head.style};
`,wn=u.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	${({theme:e})=>e.headRow.style};
	${({dense:e,theme:t})=>e&&t.headRow.denseStyle};
`,vt=(e,...t)=>F`
		@media screen and (max-width: ${599}px) {
			${F(e,...t)}
		}
	`,fn=(e,...t)=>F`
		@media screen and (max-width: ${959}px) {
			${F(e,...t)}
		}
	`,Cn=(e,...t)=>F`
		@media screen and (max-width: ${1280}px) {
			${F(e,...t)}
		}
	`,yn=e=>(t,...o)=>F`
				@media screen and (max-width: ${e}px) {
					${F(t,...o)}
				}
			`,ce=u.div`
	position: relative;
	display: flex;
	align-items: center;
	box-sizing: border-box;
	line-height: normal;
	${({theme:e,headCell:t})=>e[t?"headCells":"cells"].style};
	${({noPadding:e})=>e&&"padding: 0"};
`,Rt=u(ce)`
	flex-grow: ${({button:e,grow:t})=>t===0||e?0:t||1};
	flex-shrink: 0;
	flex-basis: 0;
	max-width: ${({maxWidth:e})=>e||"100%"};
	min-width: ${({minWidth:e})=>e||"100px"};
	${({width:e})=>e&&F`
			min-width: ${e};
			max-width: ${e};
		`};
	${({right:e})=>e&&"justify-content: flex-end"};
	${({button:e,center:t})=>(t||e)&&"justify-content: center"};
	${({compact:e,button:t})=>(e||t)&&"padding: 0"};

	/* handle hiding cells */
	${({hide:e})=>e&&e==="sm"&&vt`
    display: none;
  `};
	${({hide:e})=>e&&e==="md"&&fn`
    display: none;
  `};
	${({hide:e})=>e&&e==="lg"&&Cn`
    display: none;
  `};
	${({hide:e})=>e&&Number.isInteger(e)&&yn(e)`
    display: none;
  `};
`,vn=F`
	div:first-child {
		white-space: ${({wrapCell:e})=>e?"normal":"nowrap"};
		overflow: ${({allowOverflow:e})=>e?"visible":"hidden"};
		text-overflow: ellipsis;
	}
`,Rn=u(Rt).attrs(e=>({style:e.style}))`
	${({renderAsCell:e})=>!e&&vn};
	${({theme:e,isDragging:t})=>t&&e.cells.draggingStyle};
	${({cellStyle:e})=>e};
`;var Sn=n.exports.memo(function({id:e,column:t,row:o,rowIndex:a,dataTag:r,isDragging:i,onDragStart:s,onDragOver:d,onDragEnd:b,onDragEnter:y,onDragLeave:g}){const{style:h,classNames:j}=yt(o,t.conditionalCellStyles,["rdt_TableCell"]);return n.exports.createElement(Rn,{id:e,"data-column-id":t.id,role:"gridcell",className:j,"data-tag":r,cellStyle:t.style,renderAsCell:!!t.cell,allowOverflow:t.allowOverflow,button:t.button,center:t.center,compact:t.compact,grow:t.grow,hide:t.hide,maxWidth:t.maxWidth,minWidth:t.minWidth,right:t.right,width:t.width,wrapCell:t.wrap,style:h,isDragging:i,onDragStart:s,onDragOver:d,onDragEnd:b,onDragEnter:y,onDragLeave:g},!t.cell&&n.exports.createElement("div",{"data-tag":r},function(v,w,H,f){if(!w)return null;if(typeof w!="string"&&typeof w!="function")throw new Error("selector must be a . delimited string eg (my.property) or function (e.g. row => row.field");return H&&typeof H=="function"?H(v,f):w&&typeof w=="function"?w(v,f):We(v,w)}(o,t.selector,t.format,a)),t.cell&&t.cell(o,a,t,e))}),St=n.exports.memo(function({name:e,component:t="input",componentOptions:o={style:{}},indeterminate:a=!1,checked:r=!1,disabled:i=!1,onClick:s=P}){const d=t,b=d!=="input"?o.style:(g=>Object.assign(Object.assign({fontSize:"18px"},!g&&{cursor:"pointer"}),{padding:0,marginTop:"1px",verticalAlign:"middle",position:"relative"}))(i),y=n.exports.useMemo(()=>function(g,...h){let j;return Object.keys(g).map(v=>g[v]).forEach((v,w)=>{typeof v=="function"&&(j=Object.assign(Object.assign({},g),{[Object.keys(g)[w]]:v(...h)}))}),j||g}(o,a),[o,a]);return n.exports.createElement(d,Object.assign({type:"checkbox",ref:g=>{g&&(g.indeterminate=a)},style:b,onClick:i?P:s,name:e,"aria-label":e,checked:r,disabled:i},y,{onChange:P}))});const En=u(ce)`
	flex: 0 0 48px;
	min-width: 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
`;function On({name:e,keyField:t,row:o,rowCount:a,selected:r,selectableRowsComponent:i,selectableRowsComponentProps:s,selectableRowsSingle:d,selectableRowDisabled:b,onSelectedRow:y}){const g=!(!b||!b(o));return n.exports.createElement(En,{onClick:h=>h.stopPropagation(),className:"rdt_TableCell",noPadding:!0},n.exports.createElement(St,{name:e,component:i,componentOptions:s,checked:r,"aria-checked":r,onClick:()=>{y({type:"SELECT_SINGLE_ROW",row:o,isSelected:r,keyField:t,rowCount:a,singleSelect:d})},disabled:g}))}const kn=u.button`
	display: inline-flex;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	border: none;
	background-color: transparent;
	${({theme:e})=>e.expanderButton.style};
`;function Dn({disabled:e=!1,expanded:t=!1,expandableIcon:o,id:a,row:r,onToggled:i}){const s=t?o.expanded:o.collapsed;return n.exports.createElement(kn,{"aria-disabled":e,onClick:()=>i&&i(r),"data-testid":`expander-button-${a}`,disabled:e,"aria-label":t?"Collapse Row":"Expand Row",role:"button",type:"button"},s)}const Pn=u(ce)`
	white-space: nowrap;
	font-weight: 400;
	min-width: 48px;
	${({theme:e})=>e.expanderCell.style};
`;function Hn({row:e,expanded:t=!1,expandableIcon:o,id:a,onToggled:r,disabled:i=!1}){return n.exports.createElement(Pn,{onClick:s=>s.stopPropagation(),noPadding:!0},n.exports.createElement(Dn,{id:a,row:e,expanded:t,expandableIcon:o,disabled:i,onToggled:r}))}const $n=u.div`
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.expanderRow.style};
	${({extendedRowStyle:e})=>e};
`;var Fn=n.exports.memo(function({data:e,ExpanderComponent:t,expanderComponentProps:o,extendedRowStyle:a,extendedClassNames:r}){const i=["rdt_ExpanderRow",...r.split(" ").filter(s=>s!=="rdt_TableRow")].join(" ");return n.exports.createElement($n,{className:i,extendedRowStyle:a},n.exports.createElement(t,Object.assign({data:e},o)))}),De,Be,bt;(function(e){e.LTR="ltr",e.RTL="rtl",e.AUTO="auto"})(De||(De={})),function(e){e.LEFT="left",e.RIGHT="right",e.CENTER="center"}(Be||(Be={})),function(e){e.SM="sm",e.MD="md",e.LG="lg"}(bt||(bt={}));const jn=F`
	&:hover {
		${({highlightOnHover:e,theme:t})=>e&&t.rows.highlightOnHoverStyle};
	}
`,In=F`
	&:hover {
		cursor: pointer;
	}
`,Tn=u.div.attrs(e=>({style:e.style}))`
	display: flex;
	align-items: stretch;
	align-content: stretch;
	width: 100%;
	box-sizing: border-box;
	${({theme:e})=>e.rows.style};
	${({dense:e,theme:t})=>e&&t.rows.denseStyle};
	${({striped:e,theme:t})=>e&&t.rows.stripedStyle};
	${({highlightOnHover:e})=>e&&jn};
	${({pointerOnHover:e})=>e&&In};
	${({selected:e,theme:t})=>e&&t.rows.selectedHighlightStyle};
`;function An({columns:e=[],conditionalRowStyles:t=[],defaultExpanded:o=!1,defaultExpanderDisabled:a=!1,dense:r=!1,expandableIcon:i,expandableRows:s=!1,expandableRowsComponent:d,expandableRowsComponentProps:b,expandableRowsHideExpander:y,expandOnRowClicked:g=!1,expandOnRowDoubleClicked:h=!1,highlightOnHover:j=!1,id:v,expandableInheritConditionalStyles:w,keyField:H,onRowClicked:f=P,onRowDoubleClicked:D=P,onRowMouseEnter:$=P,onRowMouseLeave:S=P,onRowExpandToggled:O=P,onSelectedRow:A=P,pointerOnHover:L=!1,row:C,rowCount:R,rowIndex:U,selectableRowDisabled:M=null,selectableRows:z=!1,selectableRowsComponent:Y,selectableRowsComponentProps:k,selectableRowsHighlight:oe=!1,selectableRowsSingle:pe=!1,selected:ae,striped:re=!1,draggingColumnId:Pe,onDragStart:He,onDragOver:$e,onDragEnd:Fe,onDragEnter:G,onDragLeave:he}){const[V,we]=n.exports.useState(o);n.exports.useEffect(()=>{we(o)},[o]);const Z=n.exports.useCallback(()=>{we(!V),O(!V,C)},[V,O,C]),je=L||s&&(g||h),Ie=n.exports.useCallback(E=>{E.target&&E.target.getAttribute("data-tag")==="allowRowEvents"&&(f(C,E),!a&&s&&g&&Z())},[a,g,s,Z,f,C]),fe=n.exports.useCallback(E=>{E.target&&E.target.getAttribute("data-tag")==="allowRowEvents"&&(D(C,E),!a&&s&&h&&Z())},[a,h,s,Z,D,C]),Te=n.exports.useCallback(E=>{$(C,E)},[$,C]),Q=n.exports.useCallback(E=>{S(C,E)},[S,C]),q=se(C,H),{style:Ce,classNames:ye}=yt(C,t,["rdt_TableRow"]),Ae=oe&&ae,Le=w?Ce:{},Me=re&&U%2==0;return n.exports.createElement(n.exports.Fragment,null,n.exports.createElement(Tn,{id:`row-${v}`,role:"row",striped:Me,highlightOnHover:j,pointerOnHover:!a&&je,dense:r,onClick:Ie,onDoubleClick:fe,onMouseEnter:Te,onMouseLeave:Q,className:ye,selected:Ae,style:Ce},z&&n.exports.createElement(On,{name:`select-row-${q}`,keyField:H,row:C,rowCount:R,selected:ae,selectableRowsComponent:Y,selectableRowsComponentProps:k,selectableRowDisabled:M,selectableRowsSingle:pe,onSelectedRow:A}),s&&!y&&n.exports.createElement(Hn,{id:q,expandableIcon:i,expanded:V,row:C,onToggled:Z,disabled:a}),e.map(E=>E.omit?null:n.exports.createElement(Sn,{id:`cell-${E.id}-${q}`,key:`cell-${E.id}-${q}`,dataTag:E.ignoreRowClick||E.button?null:"allowRowEvents",column:E,row:C,rowIndex:U,isDragging:me(Pe,E.id),onDragStart:He,onDragOver:$e,onDragEnd:Fe,onDragEnter:G,onDragLeave:he}))),s&&V&&n.exports.createElement(Fn,{key:`expander-${q}`,data:C,extendedRowStyle:Le,extendedClassNames:ye,ExpanderComponent:d,expanderComponentProps:b}))}const Ln=u.span`
	padding: 2px;
	color: inherit;
	flex-grow: 0;
	flex-shrink: 0;
	${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
	${({sortDirection:e})=>e==="desc"&&"transform: rotate(180deg)"};
`,Mn=({sortActive:e,sortDirection:t})=>x.createElement(Ln,{sortActive:e,sortDirection:t},"\u25B2"),_n=u(Rt)`
	${({button:e})=>e&&"text-align: center"};
	${({theme:e,isDragging:t})=>t&&e.headCells.draggingStyle};
`,Nn=F`
	cursor: pointer;
	span.__rdt_custom_sort_icon__ {
		i,
		svg {
			transform: 'translate3d(0, 0, 0)';
			${({sortActive:e})=>e?"opacity: 1":"opacity: 0"};
			color: inherit;
			font-size: 18px;
			height: 18px;
			width: 18px;
			backface-visibility: hidden;
			transform-style: preserve-3d;
			transition-duration: 95ms;
			transition-property: transform;
		}

		&.asc i,
		&.asc svg {
			transform: rotate(180deg);
		}
	}

	${({sortActive:e})=>!e&&F`
			&:hover,
			&:focus {
				opacity: 0.7;

				span,
				span.__rdt_custom_sort_icon__ * {
					opacity: 0.7;
				}
			}
		`};
`,zn=u.div`
	display: inline-flex;
	align-items: center;
	justify-content: inherit;
	height: 100%;
	width: 100%;
	outline: none;
	user-select: none;
	overflow: hidden;
	${({disabled:e})=>!e&&Nn};
`,Wn=u.div`
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;var Bn=n.exports.memo(function({column:e,disabled:t,draggingColumnId:o,selectedColumn:a={},sortDirection:r,sortIcon:i,sortServer:s,pagination:d,paginationServer:b,persistSelectedOnSort:y,selectableRowsVisibleOnly:g,onSort:h,onDragStart:j,onDragOver:v,onDragEnd:w,onDragEnter:H,onDragLeave:f}){n.exports.useEffect(()=>{typeof e.selector=="string"&&console.error(`Warning: ${e.selector} is a string based column selector which has been deprecated as of v7 and will be removed in v8. Instead, use a selector function e.g. row => row[field]...`)},[]);const[D,$]=n.exports.useState(!1),S=n.exports.useRef(null);if(n.exports.useEffect(()=>{S.current&&$(S.current.scrollWidth>S.current.clientWidth)},[D]),e.omit)return null;const O=()=>{if(!e.sortable&&!e.selector)return;let k=r;me(a.id,e.id)&&(k=r===X.ASC?X.DESC:X.ASC),h({type:"SORT_CHANGE",sortDirection:k,selectedColumn:e,clearSelectedOnSort:d&&b&&!y||s||g})},A=k=>n.exports.createElement(Mn,{sortActive:k,sortDirection:r}),L=()=>n.exports.createElement("span",{className:[r,"__rdt_custom_sort_icon__"].join(" ")},i),C=!(!e.sortable||!me(a.id,e.id)),R=!e.sortable||t,U=e.sortable&&!i&&!e.right,M=e.sortable&&!i&&e.right,z=e.sortable&&i&&!e.right,Y=e.sortable&&i&&e.right;return n.exports.createElement(_n,{"data-column-id":e.id,className:"rdt_TableCol",headCell:!0,allowOverflow:e.allowOverflow,button:e.button,compact:e.compact,grow:e.grow,hide:e.hide,maxWidth:e.maxWidth,minWidth:e.minWidth,right:e.right,center:e.center,width:e.width,draggable:e.reorder,isDragging:me(e.id,o),onDragStart:j,onDragOver:v,onDragEnd:w,onDragEnter:H,onDragLeave:f},e.name&&n.exports.createElement(zn,{"data-column-id":e.id,"data-sort-id":e.id,role:"columnheader",tabIndex:0,className:"rdt_TableCol_Sortable",onClick:R?void 0:O,onKeyPress:R?void 0:k=>{k.key==="Enter"&&O()},sortActive:!R&&C,disabled:R},!R&&Y&&L(),!R&&M&&A(C),typeof e.name=="string"?n.exports.createElement(Wn,{title:D?e.name:void 0,ref:S,"data-column-id":e.id},e.name):e.name,!R&&z&&L(),!R&&U&&A(C)))});const Gn=u(ce)`
	flex: 0 0 48px;
	justify-content: center;
	align-items: center;
	user-select: none;
	white-space: nowrap;
	font-size: unset;
`;function Vn({headCell:e=!0,rowData:t,keyField:o,allSelected:a,mergeSelections:r,selectedRows:i,selectableRowsComponent:s,selectableRowsComponentProps:d,selectableRowDisabled:b,onSelectAllRows:y}){const g=i.length>0&&!a,h=b?t.filter(w=>!b(w)):t,j=h.length===0,v=Math.min(t.length,h.length);return n.exports.createElement(Gn,{className:"rdt_TableCol",headCell:e,noPadding:!0},n.exports.createElement(St,{name:"select-all-rows",component:s,componentOptions:d,onClick:()=>{y({type:"SELECT_ALL_ROWS",rows:h,rowCount:v,mergeSelections:r,keyField:o})},checked:a,indeterminate:g,disabled:j}))}function Et(e=De.AUTO){const t=typeof window=="object",[o,a]=n.exports.useState(!1);return n.exports.useEffect(()=>{if(t)if(e!=="auto")a(e==="rtl");else{const r=!(!window.document||!window.document.createElement),i=document.getElementsByTagName("BODY")[0],s=document.getElementsByTagName("HTML")[0],d=i.dir==="rtl"||s.dir==="rtl";a(r&&d)}},[e,t]),o}const Un=u.div`
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	height: 100%;
	color: ${({theme:e})=>e.contextMenu.fontColor};
	font-size: ${({theme:e})=>e.contextMenu.fontSize};
	font-weight: 400;
`,Yn=u.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex-wrap: wrap;
`,mt=u.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-sizing: inherit;
	z-index: 1;
	align-items: center;
	justify-content: space-between;
	display: flex;
	${({rtl:e})=>e&&"direction: rtl"};
	${({theme:e})=>e.contextMenu.style};
	${({theme:e,visible:t})=>t&&e.contextMenu.activeStyle};
`;function Qn({contextMessage:e,contextActions:t,contextComponent:o,selectedCount:a,direction:r}){const i=Et(r),s=a>0;return o?n.exports.createElement(mt,{visible:s},n.exports.cloneElement(o,{selectedCount:a})):n.exports.createElement(mt,{visible:s,rtl:i},n.exports.createElement(Un,null,((d,b,y)=>{if(b===0)return null;const g=b===1?d.singular:d.plural;return y?`${b} ${d.message||""} ${g}`:`${b} ${g} ${d.message||""}`})(e,a,i)),n.exports.createElement(Yn,null,t))}const Jn=u.div`
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	display: flex;
	flex: 1 1 auto;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
	${({theme:e})=>e.header.style}
`,Kn=u.div`
	flex: 1 0 auto;
	color: ${({theme:e})=>e.header.fontColor};
	font-size: ${({theme:e})=>e.header.fontSize};
	font-weight: 400;
`,Xn=u.div`
	flex: 1 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	> * {
		margin-left: 5px;
	}
`,Zn=({title:e,actions:t=null,contextMessage:o,contextActions:a,contextComponent:r,selectedCount:i,direction:s,showMenu:d=!0})=>n.exports.createElement(Jn,{className:"rdt_TableHeader",role:"heading","aria-level":1},n.exports.createElement(Kn,null,e),t&&n.exports.createElement(Xn,null,t),d&&n.exports.createElement(Qn,{contextMessage:o,contextActions:a,contextComponent:r,direction:s,selectedCount:i}));function Ot(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]])}return o}const qn={left:"flex-start",right:"flex-end",center:"center"},eo=u.header`
	position: relative;
	display: flex;
	flex: 1 1 auto;
	box-sizing: border-box;
	align-items: center;
	padding: 4px 16px 4px 24px;
	width: 100%;
	justify-content: ${({align:e})=>qn[e]};
	flex-wrap: ${({wrapContent:e})=>e?"wrap":"nowrap"};
	${({theme:e})=>e.subHeader.style}
`,to=e=>{var{align:t="right",wrapContent:o=!0}=e,a=Ot(e,["align","wrapContent"]);return n.exports.createElement(eo,Object.assign({align:t,wrapContent:o},a))},no=u.div`
	display: flex;
	flex-direction: column;
`,oo=u.div`
	position: relative;
	width: 100%;
	border-radius: inherit;
	${({responsive:e,fixedHeader:t})=>e&&F`
			overflow-x: auto;

			// hidden prevents vertical scrolling in firefox when fixedHeader is disabled
			overflow-y: ${t?"auto":"hidden"};
			min-height: 0;
		`};

	${({fixedHeader:e=!1,fixedHeaderScrollHeight:t="100vh"})=>e&&F`
			max-height: ${t};
			-webkit-overflow-scrolling: touch;
		`};

	${({theme:e})=>e.responsiveWrapper.style};
`,xt=u.div`
	position: relative;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${e=>e.theme.progress.style};
`,ao=u.div`
	position: relative;
	width: 100%;
	${({theme:e})=>e.tableWrapper.style};
`,ro=u(ce)`
	white-space: nowrap;
	${({theme:e})=>e.expanderCell.style};
`,lo=u.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	${({theme:e})=>e.noData.style};
`,io=()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},x.createElement("path",{d:"M7 10l5 5 5-5z"}),x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),so=u.select`
	cursor: pointer;
	height: 24px;
	max-width: 100%;
	user-select: none;
	padding-left: 8px;
	padding-right: 24px;
	box-sizing: content-box;
	font-size: inherit;
	color: inherit;
	border: none;
	background-color: transparent;
	appearance: none;
	direction: ltr;
	flex-shrink: 0;

	&::-ms-expand {
		display: none;
	}

	&:disabled::-ms-expand {
		background: #f60;
	}

	option {
		color: initial;
	}
`,co=u.div`
	position: relative;
	flex-shrink: 0;
	font-size: inherit;
	color: inherit;
	margin-top: 1px;

	svg {
		top: 0;
		right: 0;
		color: inherit;
		position: absolute;
		fill: currentColor;
		width: 24px;
		height: 24px;
		display: inline-block;
		user-select: none;
		pointer-events: none;
	}
`,po=e=>{var{defaultValue:t,onChange:o}=e,a=Ot(e,["defaultValue","onChange"]);return n.exports.createElement(co,null,n.exports.createElement(so,Object.assign({onChange:o,defaultValue:t},a)),n.exports.createElement(io,null))},l={columns:[],data:[],title:"",keyField:"id",selectableRows:!1,selectableRowsHighlight:!1,selectableRowsNoSelectAll:!1,selectableRowSelected:null,selectableRowDisabled:null,selectableRowsComponent:"input",selectableRowsComponentProps:{},selectableRowsVisibleOnly:!1,selectableRowsSingle:!1,clearSelectedRows:!1,expandableRows:!1,expandableRowDisabled:null,expandableRowExpanded:null,expandOnRowClicked:!1,expandableRowsHideExpander:!1,expandOnRowDoubleClicked:!1,expandableInheritConditionalStyles:!1,expandableRowsComponent:function(){return x.createElement("div",null,"To add an expander pass in a component instance via ",x.createElement("strong",null,"expandableRowsComponent"),". You can then access props.data from this component.")},expandableIcon:{collapsed:x.createElement(()=>x.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},x.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),x.createElement("path",{d:"M0-.25h24v24H0z",fill:"none"})),null),expanded:x.createElement(()=>x.createElement("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},x.createElement("path",{d:"M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"}),x.createElement("path",{d:"M0-.75h24v24H0z",fill:"none"})),null)},expandableRowsComponentProps:{},progressPending:!1,progressComponent:x.createElement("div",{style:{fontSize:"24px",fontWeight:700,padding:"24px"}},"Loading..."),persistTableHead:!1,sortIcon:null,sortFunction:null,sortServer:!1,striped:!1,highlightOnHover:!1,pointerOnHover:!1,noContextMenu:!1,contextMessage:{singular:"item",plural:"items",message:"selected"},actions:null,contextActions:null,contextComponent:null,defaultSortFieldId:null,defaultSortAsc:!0,responsive:!0,noDataComponent:x.createElement("div",{style:{padding:"24px"}},"There are no records to display"),disabled:!1,noTableHead:!1,noHeader:!1,subHeader:!1,subHeaderAlign:Be.RIGHT,subHeaderWrap:!0,subHeaderComponent:null,fixedHeader:!1,fixedHeaderScrollHeight:"100vh",pagination:!1,paginationServer:!1,paginationServerOptions:{persistSelectedOnSort:!1,persistSelectedOnPageChange:!1},paginationDefaultPage:1,paginationResetDefaultPage:!1,paginationTotalRows:0,paginationPerPage:10,paginationRowsPerPageOptions:[10,15,20,25,30],paginationComponent:null,paginationComponentOptions:{},paginationIconFirstPage:x.createElement(()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},x.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),x.createElement("path",{fill:"none",d:"M24 24H0V0h24v24z"})),null),paginationIconLastPage:x.createElement(()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},x.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),x.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"})),null),paginationIconNext:x.createElement(()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},x.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),paginationIconPrevious:x.createElement(()=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24","aria-hidden":"true",role:"presentation"},x.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),x.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),null),dense:!1,conditionalRowStyles:[],theme:"default",customStyles:{},direction:De.AUTO,onChangePage:P,onChangeRowsPerPage:P,onRowClicked:P,onRowDoubleClicked:P,onRowMouseEnter:P,onRowMouseLeave:P,onRowExpandToggled:P,onSelectedRowsChange:P,onSort:P,onColumnOrderChange:P},go={rowsPerPageText:"Rows per page:",rangeSeparatorText:"of",noRowsPerPage:!1,selectAllRowsItem:!1,selectAllRowsItemText:"All"},uo=u.nav`
	display: flex;
	flex: 1 1 auto;
	justify-content: flex-end;
	align-items: center;
	box-sizing: border-box;
	padding-right: 8px;
	padding-left: 8px;
	width: 100%;
	${({theme:e})=>e.pagination.style};
`,Oe=u.button`
	position: relative;
	display: block;
	user-select: none;
	border: none;
	${({theme:e})=>e.pagination.pageButtonsStyle};
	${({isRTL:e})=>e&&"transform: scale(-1, -1)"};
`,bo=u.div`
	display: flex;
	align-items: center;
	border-radius: 4px;
	white-space: nowrap;
	${vt`
    width: 100%;
    justify-content: space-around;
  `};
`,kt=u.span`
	flex-shrink: 1;
	user-select: none;
`,mo=u(kt)`
	margin: 0 24px;
`,xo=u(kt)`
	margin: 0 4px;
`;var ho=n.exports.memo(function({rowsPerPage:e,rowCount:t,currentPage:o,direction:a=l.direction,paginationRowsPerPageOptions:r=l.paginationRowsPerPageOptions,paginationIconLastPage:i=l.paginationIconLastPage,paginationIconFirstPage:s=l.paginationIconFirstPage,paginationIconNext:d=l.paginationIconNext,paginationIconPrevious:b=l.paginationIconPrevious,paginationComponentOptions:y=l.paginationComponentOptions,onChangeRowsPerPage:g=l.onChangeRowsPerPage,onChangePage:h=l.onChangePage}){const j=(()=>{const k=typeof window=="object";function oe(){return{width:k?window.innerWidth:void 0,height:k?window.innerHeight:void 0}}const[pe,ae]=n.exports.useState(oe);return n.exports.useEffect(()=>{if(!k)return()=>null;function re(){ae(oe())}return window.addEventListener("resize",re),()=>window.removeEventListener("resize",re)},[]),pe})(),v=Et(a),w=j.width&&j.width>599,H=be(t,e),f=o*e,D=f-e+1,$=o===1,S=o===H,O=Object.assign(Object.assign({},go),y),A=o===H?`${D}-${t} ${O.rangeSeparatorText} ${t}`:`${D}-${f} ${O.rangeSeparatorText} ${t}`,L=n.exports.useCallback(()=>h(o-1),[o,h]),C=n.exports.useCallback(()=>h(o+1),[o,h]),R=n.exports.useCallback(()=>h(1),[h]),U=n.exports.useCallback(()=>h(be(t,e)),[h,t,e]),M=n.exports.useCallback(k=>g(Number(k.target.value),o),[o,g]),z=r.map(k=>n.exports.createElement("option",{key:k,value:k},k));O.selectAllRowsItem&&z.push(n.exports.createElement("option",{key:-1,value:t},O.selectAllRowsItemText));const Y=n.exports.createElement(po,{onChange:M,defaultValue:e,"aria-label":O.rowsPerPageText},z);return n.exports.createElement(uo,{className:"rdt_Pagination"},!O.noRowsPerPage&&w&&n.exports.createElement(n.exports.Fragment,null,n.exports.createElement(xo,null,O.rowsPerPageText),Y),w&&n.exports.createElement(mo,null,A),n.exports.createElement(bo,null,n.exports.createElement(Oe,{id:"pagination-first-page",type:"button","aria-label":"First Page","aria-disabled":$,onClick:R,disabled:$,isRTL:v},s),n.exports.createElement(Oe,{id:"pagination-previous-page",type:"button","aria-label":"Previous Page","aria-disabled":$,onClick:L,disabled:$,isRTL:v},b),!w&&Y,n.exports.createElement(Oe,{id:"pagination-next-page",type:"button","aria-label":"Next Page","aria-disabled":S,onClick:C,disabled:S,isRTL:v},d),n.exports.createElement(Oe,{id:"pagination-last-page",type:"button","aria-label":"Last Page","aria-disabled":S,onClick:U,disabled:S,isRTL:v},i)))});const ne=(e,t)=>{const o=n.exports.useRef(!0);n.exports.useEffect(()=>{o.current?o.current=!1:e()},t)};var wo=function(e){return function(t){return!!t&&typeof t=="object"}(e)&&!function(t){var o=Object.prototype.toString.call(t);return o==="[object RegExp]"||o==="[object Date]"||function(a){return a.$$typeof===fo}(t)}(e)},fo=typeof Symbol=="function"&&Symbol.for?Symbol.for("react.element"):60103;function xe(e,t){return t.clone!==!1&&t.isMergeableObject(e)?de((o=e,Array.isArray(o)?[]:{}),e,t):e;var o}function Co(e,t,o){return e.concat(t).map(function(a){return xe(a,o)})}function ht(e){return Object.keys(e).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter(function(o){return t.propertyIsEnumerable(o)}):[]}(e))}function wt(e,t){try{return t in e}catch{return!1}}function yo(e,t,o){var a={};return o.isMergeableObject(e)&&ht(e).forEach(function(r){a[r]=xe(e[r],o)}),ht(t).forEach(function(r){(function(i,s){return wt(i,s)&&!(Object.hasOwnProperty.call(i,s)&&Object.propertyIsEnumerable.call(i,s))})(e,r)||(wt(e,r)&&o.isMergeableObject(t[r])?a[r]=function(i,s){if(!s.customMerge)return de;var d=s.customMerge(i);return typeof d=="function"?d:de}(r,o)(e[r],t[r],o):a[r]=xe(t[r],o))}),a}function de(e,t,o){(o=o||{}).arrayMerge=o.arrayMerge||Co,o.isMergeableObject=o.isMergeableObject||wo,o.cloneUnlessOtherwiseSpecified=xe;var a=Array.isArray(t);return a===Array.isArray(e)?a?o.arrayMerge(e,t,o):yo(e,t,o):xe(t,o)}de.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(o,a){return de(o,a,t)},{})};var vo=de;const ft={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)"},background:{default:"#FFFFFF"},context:{background:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},divider:{default:"rgba(0,0,0,.12)"},button:{default:"rgba(0,0,0,.54)",focus:"rgba(0,0,0,.12)",hover:"rgba(0,0,0,.12)",disabled:"rgba(0, 0, 0, .18)"},selected:{default:"#e3f2fd",text:"rgba(0, 0, 0, 0.87)"},highlightOnHover:{default:"#EEEEEE",text:"rgba(0, 0, 0, 0.87)"},striped:{default:"#FAFAFA",text:"rgba(0, 0, 0, 0.87)"}},Ct={default:ft,light:ft,dark:{text:{primary:"#FFFFFF",secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(0,0,0,.12)"},background:{default:"#424242"},context:{background:"#E91E63",text:"#FFFFFF"},divider:{default:"rgba(81, 81, 81, 1)"},button:{default:"#FFFFFF",focus:"rgba(255, 255, 255, .54)",hover:"rgba(255, 255, 255, .12)",disabled:"rgba(255, 255, 255, .18)"},selected:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},highlightOnHover:{default:"rgba(0, 0, 0, .7)",text:"#FFFFFF"},striped:{default:"rgba(0, 0, 0, .87)",text:"#FFFFFF"}}};function Ro(e,t,o,a){const[r,i]=n.exports.useState(()=>ut(e)),[s,d]=n.exports.useState(""),b=n.exports.useRef("");ne(()=>{i(ut(e))},[e]);const y=n.exports.useCallback(f=>{var D,$,S;const{attributes:O}=f.target,A=(D=O.getNamedItem("data-column-id"))===null||D===void 0?void 0:D.value;A&&(b.current=((S=($=r[Ee(r,A)])===null||$===void 0?void 0:$.id)===null||S===void 0?void 0:S.toString())||"",d(b.current))},[r]),g=n.exports.useCallback(f=>{var D;const{attributes:$}=f.target,S=(D=$.getNamedItem("data-column-id"))===null||D===void 0?void 0:D.value;if(S&&b.current&&S!==b.current){const O=Ee(r,b.current),A=Ee(r,S),L=[...r];L[O]=r[A],L[A]=r[O],i(L),t(L)}},[t,r]),h=n.exports.useCallback(f=>{f.preventDefault()},[]),j=n.exports.useCallback(f=>{f.preventDefault()},[]),v=n.exports.useCallback(f=>{f.preventDefault(),b.current="",d("")},[]),w=function(f=!1){return f?X.ASC:X.DESC}(a),H=n.exports.useMemo(()=>r[Ee(r,o==null?void 0:o.toString())]||{},[o,r]);return{tableColumns:r,draggingColumnId:s,handleDragStart:y,handleDragEnter:g,handleDragOver:h,handleDragLeave:j,handleDragEnd:v,defaultSortDirection:w,defaultSortColumn:H}}var So=n.exports.memo(function(e){const{data:t=l.data,columns:o=l.columns,title:a=l.title,actions:r=l.actions,keyField:i=l.keyField,striped:s=l.striped,highlightOnHover:d=l.highlightOnHover,pointerOnHover:b=l.pointerOnHover,dense:y=l.dense,selectableRows:g=l.selectableRows,selectableRowsSingle:h=l.selectableRowsSingle,selectableRowsHighlight:j=l.selectableRowsHighlight,selectableRowsNoSelectAll:v=l.selectableRowsNoSelectAll,selectableRowsVisibleOnly:w=l.selectableRowsVisibleOnly,selectableRowSelected:H=l.selectableRowSelected,selectableRowDisabled:f=l.selectableRowDisabled,selectableRowsComponent:D=l.selectableRowsComponent,selectableRowsComponentProps:$=l.selectableRowsComponentProps,onRowExpandToggled:S=l.onRowExpandToggled,onSelectedRowsChange:O=l.onSelectedRowsChange,expandableIcon:A=l.expandableIcon,onChangeRowsPerPage:L=l.onChangeRowsPerPage,onChangePage:C=l.onChangePage,paginationServer:R=l.paginationServer,paginationServerOptions:U=l.paginationServerOptions,paginationTotalRows:M=l.paginationTotalRows,paginationDefaultPage:z=l.paginationDefaultPage,paginationResetDefaultPage:Y=l.paginationResetDefaultPage,paginationPerPage:k=l.paginationPerPage,paginationRowsPerPageOptions:oe=l.paginationRowsPerPageOptions,paginationIconLastPage:pe=l.paginationIconLastPage,paginationIconFirstPage:ae=l.paginationIconFirstPage,paginationIconNext:re=l.paginationIconNext,paginationIconPrevious:Pe=l.paginationIconPrevious,paginationComponent:He=l.paginationComponent,paginationComponentOptions:$e=l.paginationComponentOptions,responsive:Fe=l.responsive,progressPending:G=l.progressPending,progressComponent:he=l.progressComponent,persistTableHead:V=l.persistTableHead,noDataComponent:we=l.noDataComponent,disabled:Z=l.disabled,noTableHead:je=l.noTableHead,noHeader:Ie=l.noHeader,fixedHeader:fe=l.fixedHeader,fixedHeaderScrollHeight:Te=l.fixedHeaderScrollHeight,pagination:Q=l.pagination,subHeader:q=l.subHeader,subHeaderAlign:Ce=l.subHeaderAlign,subHeaderWrap:ye=l.subHeaderWrap,subHeaderComponent:Ae=l.subHeaderComponent,noContextMenu:Le=l.noContextMenu,contextMessage:Me=l.contextMessage,contextActions:E=l.contextActions,contextComponent:Dt=l.contextComponent,expandableRows:ve=l.expandableRows,onRowClicked:Ge=l.onRowClicked,onRowDoubleClicked:Ve=l.onRowDoubleClicked,onRowMouseEnter:Ue=l.onRowMouseEnter,onRowMouseLeave:Ye=l.onRowMouseLeave,sortIcon:Pt=l.sortIcon,onSort:Ht=l.onSort,sortFunction:Qe=l.sortFunction,sortServer:_e=l.sortServer,expandableRowsComponent:$t=l.expandableRowsComponent,expandableRowsComponentProps:Ft=l.expandableRowsComponentProps,expandableRowDisabled:Je=l.expandableRowDisabled,expandableRowsHideExpander:Ke=l.expandableRowsHideExpander,expandOnRowClicked:jt=l.expandOnRowClicked,expandOnRowDoubleClicked:It=l.expandOnRowDoubleClicked,expandableRowExpanded:Xe=l.expandableRowExpanded,expandableInheritConditionalStyles:Tt=l.expandableInheritConditionalStyles,defaultSortFieldId:At=l.defaultSortFieldId,defaultSortAsc:Lt=l.defaultSortAsc,clearSelectedRows:Ze=l.clearSelectedRows,conditionalRowStyles:Mt=l.conditionalRowStyles,theme:qe=l.theme,customStyles:et=l.customStyles,direction:ge=l.direction,onColumnOrderChange:_t=l.onColumnOrderChange}=e,{tableColumns:tt,draggingColumnId:nt,handleDragStart:ot,handleDragEnter:at,handleDragOver:rt,handleDragLeave:lt,handleDragEnd:it,defaultSortDirection:Nt,defaultSortColumn:zt}=Ro(o,_t,At,Lt),[{rowsPerPage:J,currentPage:_,selectedRows:Ne,allSelected:st,selectedCount:dt,selectedColumn:W,sortDirection:le,toggleOnSelectedRowsChange:Wt},ee]=n.exports.useReducer(un,{allSelected:!1,selectedCount:0,selectedRows:[],selectedColumn:zt,toggleOnSelectedRowsChange:!1,sortDirection:Nt,currentPage:z,rowsPerPage:k,selectedRowsFlag:!1,contextMessage:l.contextMessage}),{persistSelectedOnSort:ct=!1,persistSelectedOnPageChange:Re=!1}=U,pt=!(!R||!Re&&!ct),Bt=Q&&!G&&t.length>0,Gt=He||ho,Vt=n.exports.useMemo(()=>((p={},m="default",T="default")=>{const N=Ct[m]?m:T;return vo({table:{style:{color:(c=Ct[N]).text.primary,backgroundColor:c.background.default}},tableWrapper:{style:{display:"table"}},responsiveWrapper:{style:{}},header:{style:{fontSize:"22px",color:c.text.primary,backgroundColor:c.background.default,minHeight:"56px",paddingLeft:"16px",paddingRight:"8px"}},subHeader:{style:{backgroundColor:c.background.default,minHeight:"52px"}},head:{style:{color:c.text.primary,fontSize:"12px",fontWeight:500}},headRow:{style:{backgroundColor:c.background.default,minHeight:"52px",borderBottomWidth:"1px",borderBottomColor:c.divider.default,borderBottomStyle:"solid"},denseStyle:{minHeight:"32px"}},headCells:{style:{paddingLeft:"16px",paddingRight:"16px"},draggingStyle:{cursor:"move"}},contextMenu:{style:{backgroundColor:c.context.background,fontSize:"18px",fontWeight:400,color:c.context.text,paddingLeft:"16px",paddingRight:"8px",transform:"translate3d(0, -100%, 0)",transitionDuration:"125ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",willChange:"transform"},activeStyle:{transform:"translate3d(0, 0, 0)"}},cells:{style:{paddingLeft:"16px",paddingRight:"16px",wordBreak:"break-word"},draggingStyle:{}},rows:{style:{fontSize:"13px",fontWeight:400,color:c.text.primary,backgroundColor:c.background.default,minHeight:"48px","&:not(:last-of-type)":{borderBottomStyle:"solid",borderBottomWidth:"1px",borderBottomColor:c.divider.default}},denseStyle:{minHeight:"32px"},selectedHighlightStyle:{"&:nth-of-type(n)":{color:c.selected.text,backgroundColor:c.selected.default,borderBottomColor:c.background.default}},highlightOnHoverStyle:{color:c.highlightOnHover.text,backgroundColor:c.highlightOnHover.default,transitionDuration:"0.15s",transitionProperty:"background-color",borderBottomColor:c.background.default,outlineStyle:"solid",outlineWidth:"1px",outlineColor:c.background.default},stripedStyle:{color:c.striped.text,backgroundColor:c.striped.default}},expanderRow:{style:{color:c.text.primary,backgroundColor:c.background.default}},expanderCell:{style:{flex:"0 0 48px"}},expanderButton:{style:{color:c.button.default,fill:c.button.default,backgroundColor:"transparent",borderRadius:"2px",transition:"0.25s",height:"100%",width:"100%","&:hover:enabled":{cursor:"pointer"},"&:disabled":{color:c.button.disabled},"&:hover:not(:disabled)":{cursor:"pointer",backgroundColor:c.button.hover},"&:focus":{outline:"none",backgroundColor:c.button.focus},svg:{margin:"auto"}}},pagination:{style:{color:c.text.secondary,fontSize:"13px",minHeight:"56px",backgroundColor:c.background.default,borderTopStyle:"solid",borderTopWidth:"1px",borderTopColor:c.divider.default},pageButtonsStyle:{borderRadius:"50%",height:"40px",width:"40px",padding:"8px",margin:"px",cursor:"pointer",transition:"0.4s",color:c.button.default,fill:c.button.default,backgroundColor:"transparent","&:disabled":{cursor:"unset",color:c.button.disabled,fill:c.button.disabled},"&:hover:not(:disabled)":{backgroundColor:c.button.hover},"&:focus":{outline:"none",backgroundColor:c.button.focus}}},noData:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:c.text.primary,backgroundColor:c.background.default}},progress:{style:{display:"flex",alignItems:"center",justifyContent:"center",color:c.text.primary,backgroundColor:c.background.default}}},p);var c})(et,qe),[et,qe]),Ut=n.exports.useMemo(()=>Object.assign({},ge!=="auto"&&{dir:ge}),[ge]),I=n.exports.useMemo(()=>{if(_e)return t;if((W==null?void 0:W.sortFunction)&&typeof W.sortFunction=="function"){const p=W.sortFunction,m=le===X.ASC?p:(T,N)=>-1*p(T,N);return[...t].sort(m)}return function(p,m,T,N){return m?N&&typeof N=="function"?N(p.slice(0),m,T):p.slice(0).sort((c,Se)=>{let K,B;if(typeof m=="string"?(K=We(c,m),B=We(Se,m)):(K=m(c),B=m(Se)),T==="asc"){if(K<B)return-1;if(K>B)return 1}if(T==="desc"){if(K>B)return-1;if(K<B)return 1}return 0}):p}(t,W==null?void 0:W.selector,le,Qe)},[_e,W,le,t,Qe]),ue=n.exports.useMemo(()=>{if(Q&&!R){const p=_*J,m=p-J;return I.slice(m,p)}return I},[_,Q,R,J,I]),Yt=n.exports.useCallback(p=>{ee(p)},[]),Qt=n.exports.useCallback(p=>{ee(p)},[]),Jt=n.exports.useCallback(p=>{ee(p)},[]),Kt=n.exports.useCallback((p,m)=>Ge(p,m),[Ge]),Xt=n.exports.useCallback((p,m)=>Ve(p,m),[Ve]),Zt=n.exports.useCallback((p,m)=>Ue(p,m),[Ue]),qt=n.exports.useCallback((p,m)=>Ye(p,m),[Ye]),ie=n.exports.useCallback(p=>ee({type:"CHANGE_PAGE",page:p,paginationServer:R,visibleOnly:w,persistSelectedOnPageChange:Re}),[R,Re,w]),en=n.exports.useCallback(p=>{const m=be(M||ue.length,p),T=ze(_,m);R||ie(T),ee({type:"CHANGE_ROWS_PER_PAGE",page:T,rowsPerPage:p})},[_,ie,R,M,ue.length]);if(Q&&!R&&I.length>0&&ue.length===0){const p=be(I.length,J),m=ze(_,p);ie(m)}ne(()=>{O({allSelected:st,selectedCount:dt,selectedRows:Ne.slice(0)})},[Wt]),ne(()=>{Ht(W,le,I.slice(0))},[W,le]),ne(()=>{C(_,M||I.length)},[_]),ne(()=>{L(J,_)},[J]),ne(()=>{ie(z)},[z,Y]),ne(()=>{if(Q&&R&&M>0){const p=be(M,J),m=ze(_,p);_!==m&&ie(m)}},[M]),n.exports.useEffect(()=>{ee({type:"CLEAR_SELECTED_ROWS",selectedRowsFlag:Ze})},[h,Ze]),n.exports.useEffect(()=>{if(!H)return;const p=I.filter(T=>H(T)),m=h?p.slice(0,1):p;ee({type:"SELECT_MULTIPLE_ROWS",keyField:i,selectedRows:m,totalRows:I.length,mergeSelections:pt})},[t,H]);const tn=w?ue:I,nn=Re||h||v;return n.exports.createElement(rn,{theme:Vt},!Ie&&(!!a||!!r)&&n.exports.createElement(Zn,{title:a,actions:r,showMenu:!Le,selectedCount:dt,direction:ge,contextActions:E,contextComponent:Dt,contextMessage:Me}),q&&n.exports.createElement(to,{align:Ce,wrapContent:ye},Ae),n.exports.createElement(oo,Object.assign({responsive:Fe,fixedHeader:fe,fixedHeaderScrollHeight:Te},Ut),n.exports.createElement(ao,null,G&&!V&&n.exports.createElement(xt,null,he),n.exports.createElement(mn,{disabled:Z,className:"rdt_Table",role:"table"},!je&&(!!V||I.length>0&&!G)&&n.exports.createElement(hn,{className:"rdt_TableHead",role:"rowgroup",fixedHeader:fe},n.exports.createElement(wn,{className:"rdt_TableHeadRow",role:"row",dense:y},g&&(nn?n.exports.createElement(ce,{style:{flex:"0 0 48px"}}):n.exports.createElement(Vn,{allSelected:st,selectedRows:Ne,selectableRowsComponent:D,selectableRowsComponentProps:$,selectableRowDisabled:f,rowData:tn,keyField:i,mergeSelections:pt,onSelectAllRows:Qt})),ve&&!Ke&&n.exports.createElement(ro,null),tt.map(p=>n.exports.createElement(Bn,{key:p.id,column:p,selectedColumn:W,disabled:G||I.length===0,pagination:Q,paginationServer:R,persistSelectedOnSort:ct,selectableRowsVisibleOnly:w,sortDirection:le,sortIcon:Pt,sortServer:_e,onSort:Yt,onDragStart:ot,onDragOver:rt,onDragEnd:it,onDragEnter:at,onDragLeave:lt,draggingColumnId:nt})))),!I.length&&!G&&n.exports.createElement(lo,null,we),G&&V&&n.exports.createElement(xt,null,he),!G&&I.length>0&&n.exports.createElement(no,{className:"rdt_TableBody",role:"rowgroup"},ue.map((p,m)=>{const T=se(p,i),N=function(B=""){return typeof B!="number"&&(!B||B.length===0)}(T)?m:T,c=ke(p,Ne,i),Se=!!(ve&&Xe&&Xe(p)),K=!!(ve&&Je&&Je(p));return n.exports.createElement(An,{id:N,key:N,keyField:i,"data-row-id":N,columns:tt,row:p,rowCount:I.length,rowIndex:m,selectableRows:g,expandableRows:ve,expandableIcon:A,highlightOnHover:d,pointerOnHover:b,dense:y,expandOnRowClicked:jt,expandOnRowDoubleClicked:It,expandableRowsComponent:$t,expandableRowsComponentProps:Ft,expandableRowsHideExpander:Ke,defaultExpanderDisabled:K,defaultExpanded:Se,expandableInheritConditionalStyles:Tt,conditionalRowStyles:Mt,selected:c,selectableRowsHighlight:j,selectableRowsComponent:D,selectableRowsComponentProps:$,selectableRowDisabled:f,selectableRowsSingle:h,striped:s,onRowExpandToggled:S,onRowClicked:Kt,onRowDoubleClicked:Xt,onRowMouseEnter:Zt,onRowMouseLeave:qt,onSelectedRow:Jt,draggingColumnId:nt,onDragStart:ot,onDragOver:rt,onDragEnd:it,onDragEnter:at,onDragLeave:lt})}))))),Bt&&n.exports.createElement("div",null,n.exports.createElement(Gt,{onChangePage:ie,onChangeRowsPerPage:en,rowCount:M||I.length,currentPage:_,rowsPerPage:J,direction:ge,paginationRowsPerPageOptions:oe,paginationIconLastPage:pe,paginationIconFirstPage:ae,paginationIconNext:re,paginationIconPrevious:Pe,paginationComponentOptions:$e})))});const Eo=(e,t)=>{const o=typeof e.confident!="number"?parseInt(e.confident.replaceAll("%","")):e.confident,a=typeof t.confident!="number"?parseInt(t.confident.replaceAll("%","")):t.confident;return o-a},Oo=(e,t)=>e.createAt.seconds-t.createAt.seconds,ko=[{name:"Model Name",selector:e=>e.modelName,sortable:!0},{name:"Item",selector:e=>e.item,sortable:!0},{name:"Top Confident",selector:e=>typeof e.confident=="number"?e.confident.toFixed(2)+"%":e.confident,sortable:!0,sortFunction:Eo},{name:"Date",selector:e=>new Date(e.createAt.seconds*1e3).toString().slice(0,24),sortable:!0,sortFunction:Oo}];function jo(){const[e,t]=n.exports.useState([]),[o,a]=n.exports.useState(!1),r=on(s=>s.counter.userData);n.exports.useEffect(()=>{(async()=>{if(document.title="Leafers - History",!r)return;let s=await ln("users",r.uid,"predictHistory");t(s.data)})()},[r]);async function i(){if(o)return;const s=e[e.length-1];if(!s){a(!0);return}let d=await sn("users",r.uid,"predictHistory",s.createAt);if(d.data.length===0){a(!0);return}t([...e,...d.data])}return te(an.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:te("div",{children:gt(dn,{fluid:!0,children:[te("br",{}),te(So,{columns:ko,data:e,pagination:!0}),te("div",{style:{textAlign:"right"},children:o?gt("h5",{style:{textAlign:"center"},children:[" ",te("b",{children:"No more history"})," "]}):te(cn,{mt:6,onClick:async()=>{i()},children:"See more"})})]})})})}export{jo as default};
