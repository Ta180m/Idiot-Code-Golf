"use strict";(()=>{var vt=Object.defineProperty;var n=(S,C)=>vt(S,"name",{value:C,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["command-palette"],{86761:(S,C,a)=>{var i=a(90420),b=Object.defineProperty,v=Object.getOwnPropertyDescriptor,g=n((t,e,s,o)=>{for(var r=o>1?void 0:o?v(e,s):e,c=t.length-1,l;c>=0;c--)(l=t[c])&&(r=(o?l(e,s,r):l(r))||r);return o&&r&&b(e,s,r),r},"__decorateClass");const m="*";let p=n(class extends HTMLElement{constructor(){super(...arguments);this.scopeTypes=""}active(t,e){return this.scopeTypeMatch(t.type)&&this.modeMatch(e)}scopeTypeMatch(t){return this.scopeTypes?this.scopeTypes&&JSON.parse(this.scopeTypes).includes(t):!0}modeMatch(t){return this.char===m||this.char===t}character(){return this.char===m?"":this.char}},"CommandPaletteModeElement");g([i.Lj],p.prototype,"char",2),g([i.Lj],p.prototype,"placeholder",2),g([i.Lj],p.prototype,"scopeTypes",2),p=g([i.Ih],p);var d=Object.defineProperty,h=Object.getOwnPropertyDescriptor,u=n((t,e,s,o)=>{for(var r=o>1?void 0:o?h(e,s):e,c=t.length-1,l;c>=0;c--)(l=t[c])&&(r=(o?l(e,s,r):l(r))||r);return o&&r&&d(e,s,r),r},"command_palette_tip_element_decorateClass");const f="*",E="";let _=n(class extends HTMLElement{constructor(){super(...arguments);this.scopeTypes=E,this.mode=f,this.matchMode=E,this.value=f,this.onEmpty=!1,this.onError=!1}connectedCallback(){this.hidden=!0}available(t,e=!1,s=!1){return this.valueMatch(t.text)&&this.scopeTypeMatch(t.scope.type)&&this.modeMatch(t.mode)&&this.showOnEmpty(e)&&this.showOnError(s)}toggle(t,e=!1,s=!1){this.hidden=!this.available(t,e,s)}valueMatch(t){return this.value===f||this.value===t}scopeTypeMatch(t){return this.scopeTypes!==E&&(this.scopeTypes===f||JSON.parse(this.scopeTypes).includes(t))}modeMatch(t){if(this.matchMode===E)return this.mode===f||this.mode===t;{const e=new RegExp(this.matchMode);return t.match(e)!==null}}showOnEmpty(t){return this.onEmpty?t:!0}showOnError(t){return this.onError?t:!0}},"CommandPaletteTipElement");u([i.Lj],_.prototype,"scopeTypes",2),u([i.Lj],_.prototype,"mode",2),u([i.Lj],_.prototype,"matchMode",2),u([i.Lj],_.prototype,"value",2),u([i.Lj],_.prototype,"onEmpty",2),u([i.Lj],_.prototype,"onError",2),_=u([i.Ih],_);var G=a(47779),$e=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,R=n((t,e,s,o)=>{for(var r=o>1?void 0:o?Fe(e,s):e,c=t.length-1,l;c>=0;c--)(l=t[c])&&(r=(o?l(e,s,r):l(r))||r);return o&&r&&$e(e,s,r),r},"command_palette_token_element_decorateClass");let k=n(class extends HTMLElement{constructor(){super(...arguments);this.type="",this.id="",this.text="",this.value=""}},"CommandPaletteTokenElement");R([i.Lj],k.prototype,"type",2),R([i.Lj],k.prototype,"id",2),R([i.Lj],k.prototype,"text",2),R([i.Lj],k.prototype,"value",2),k=R([i.Ih],k);var gt=a(39200),He=a(23207),bt=a(2846),Y=a(80829),ze=a(4220),z=a(78584);class U extends z.j{fetch(e,s){return this.fetchSrc(e)}enabledFor(e){return this.modeMatch(e)&&this.scopeMatch(e)}clearCache(){}scopeMatch(e){return this.scopeTypes.length===0||this.scopeTypes.includes(e.scope.type)}modeMatch(e){return this.modes.includes(e.mode)||this.hasWildCard}async fetchSrc(e,s=""){var o;if(!this.src)throw new Error("No src defined");const r=new URL(this.src,window.location.origin),c=e.params();s&&c.set("mode",s),r.search=c.toString();const l=await fetch(r.toString(),{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}});if(l.ok){const L=await l.json();return{results:((o=L.results)==null?void 0:o.map(w=>ze.g.build(w)))||[],octicons:L.octicons}}else return{error:!0,results:[]}}}n(U,"RemoteProvider");class H extends U{constructor(){super(...arguments);this.maxItems=1e3,this.scopedItems={},this.cachedOcticons={}}clearCache(){super.clearCache(),this.scopedItems={},this.cachedOcticons={}}get debounce(){return 0}async prefetch(e){if(!this.scopeMatch(e)||this.scopedItems[e.scope.id])return;const s=new Y.A("",e.mode,{subjectId:e.subjectId,subjectType:e.subjectType,returnTo:e.returnTo,scope:e.scope}),o=await this.fetchSrc(s,e.mode);this.octicons=o.octicons||[];const r=o.results||[];this.scopedItems[e.scope.id]=r,this.cachedOcticons[e.scope.id]=this.octicons}async fetch(e,s){const o=this.scopedItems[e.scope.id]||[],r=this.cachedOcticons[e.scope.id]||[];return{results:this.fuzzyFilter(o,e).slice(0,this.maxItems),octicons:r}}}n(H,"PrefetchedProvider");class ee extends H{enabledFor(e){const s=["discussion","issue","pull_request"];return e.mode===">"?!0:!!s.includes(e.scope.type)}}n(ee,"CommandsProvider");var Ue=a(81072),V=a(98810);class te extends H{async fetchSrc(e){if(!this.src)throw new Error("No src provided");const s=new URL(this.src,window.location.origin);s.search=e.params().toString();const r=await(await fetch(s.toString(),{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})).json();if(!r.results)return;const c=r.results[0];if(c.base_file_path){const l=c.base_file_path,L=c.paths;r.results=L.map(w=>V.s.from({title:w,path:`${l}/${w}`,icon:"file-color-fg-muted",group:"files"}))}else c.action&&c.action.type==="access_policy"?r.results=[new Ue.i(c)]:r.results=[];return r}async fetch(e,s=!1){const o=e.text.match(/(.+):(\d*)\s*$/);return o?this.fetchWithLineNumbers(e,o):super.fetch(e,s)}async fetchWithLineNumbers(e,s){const o=s[1],r=s[2],c=new Y.A(o,e.mode,{scope:e.scope}),l=[],L=(await super.fetch(c,!1)).results;for(const w of L)w instanceof V.s&&l.push(this.convert(w,r));return{results:l}}convert(e,s){return s===""||!(e instanceof V.s)||(e.title=`${e.title}:${s}`,e.action.path=`${e.action.path}#L${s}`),e}}n(te,"FilesProvider");class se extends z.j{enabledFor(e){return!0}clearCache(){}get hasCommands(){return!1}get debounce(){return 0}async fetch(e,s=!1){return e.mode!=="?"&&!s?{results:[]}:{results:Array.from(this.element.querySelectorAll("command-palette-help")).filter(c=>c.show(e)).map((c,l)=>c.toItem(l))}}}n(se,"HelpProvider");var Ve=a(31411);class oe extends z.j{enabledFor(e){return!(e.isBlank()||e.mode==="?"||e.mode===">")}clearCache(){}get hasCommands(){return!1}async fetch(e,s=!1){return{results:[Ve.K.create(e)]}}}n(oe,"SearchLinksProvider");class q{static create(e){const s=this.providers[e.type];if(!s)throw new Error(`Unknown provider type: ${e.type}`);return new s(e)}}n(q,"ServerDefinedProviderFactory"),q.providers={remote:U,prefetched:H,commands:ee,files:te,help:se,"search-links":oe};var qe=Object.defineProperty,We=Object.getOwnPropertyDescriptor,j=n((t,e,s,o)=>{for(var r=o>1?void 0:o?We(e,s):e,c=t.length-1,l;c>=0;c--)(l=t[c])&&(r=(o?l(e,s,r):l(r))||r);return o&&r&&qe(e,s,r),r},"server_defined_provider_element_decorateClass");let T=n(class extends He.b{constructor(){super(...arguments);this._wildcard="*"}get debounce(){return parseInt(this.fetchDebounce,10)}get hasCommands(){return this.supportsCommands}get hasWildCard(){return this.modes.includes(this._wildcard)}get modes(){return this.supportedModes===""&&(this._modes=[""]),this._modes||(this._modes=JSON.parse(this.supportedModes)),this._modes}get scopeTypes(){return this.supportedScopeTypes===""?[]:(this._scopeTypes||(this._scopeTypes=JSON.parse(this.supportedScopeTypes)),this._scopeTypes)}connectedCallback(){this.provider=q.create(this)}},"ServerDefinedProviderElement");j([i.Lj],T.prototype,"type",2),j([i.Lj],T.prototype,"supportedModes",2),j([i.Lj],T.prototype,"fetchDebounce",2),j([i.Lj],T.prototype,"supportedScopeTypes",2),j([i.Lj],T.prototype,"src",2),j([i.Lj],T.prototype,"supportsCommands",2),T=j([i.Ih],T);var Ne=a(8665),Ze=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,B=n((t,e,s,o)=>{for(var r=o>1?void 0:o?Ke(e,s):e,c=t.length-1,l;c>=0;c--)(l=t[c])&&(r=(o?l(e,s,r):l(r))||r);return o&&r&&Ze(e,s,r),r},"command_palette_help_element_decorateClass");let D=n(class extends HTMLElement{connectedCallback(){this.hidden=!0}show(t){return this.isEnabledScopeType(t)}isEnabledScopeType(t){return this.scopeTypes?this.scopeTypes&&JSON.parse(this.scopeTypes).includes(t.scope.type):!0}toItem(t){const e={group:this.group,title:this.titleElement.innerHTML,index:t};return this.prefix&&(e.prefix=this.prefix),this.hintElement.textContent&&(e.persistentHint=this.hintElement.innerHTML),Ne.B.from(e)}},"CommandPaletteHelpElement");B([i.Lj],D.prototype,"group",2),B([i.Lj],D.prototype,"prefix",2),B([i.Lj],D.prototype,"scopeTypes",2),B([i.fA],D.prototype,"titleElement",2),B([i.fA],D.prototype,"hintElement",2),D=B([i.Ih],D);var Ct=a(68313),Et=a(96753),St=a(28760),_t=a(3991),Je=a(77417);class y{constructor(){this.iconType="octicon",this.group="commands",this.priority=0,this.dismissAfterRun=!0}static item(e={}){return new Je.U(new this,e)}run(e){new Error("Not implemented")}isApplicable(e){return!0}}n(y,"MainWindowCommand");class W extends y{constructor(){super(...arguments);this.group="global_commands"}}n(W,"MainWindowGlobalCommand");class ne extends y{constructor(){super(...arguments);this.title="Delete discussion\u2026",this.icon="trash-color-fg-muted"}get deleteButton(){return document.querySelector("button#dialog-show-delete-discussion")}get dialogElement(){return document.querySelector("#delete-discussion")}isApplicable(){return this.deleteButton!=null}run(){const e=this.deleteButton;if(e){e.click(),setTimeout(()=>{var s,o;(o=(s=this.dialogElement)==null?void 0:s.querySelector('button[type="submit"]'))==null||o.focus()},0);return}}}n(ne,"DeleteDiscussion");class re extends y{constructor(){super(...arguments);this.title="Edit discussion body",this.icon="pencil-color-fg-muted"}get editButton(){return document.querySelector(".js-discussions-comment-edit-button")}isApplicable(){return this.editButton!=null}run(){var e;(e=this.editButton)==null||e.click()}}n(re,"EditDiscussion");class ie extends y{constructor(){super(...arguments);this.title="Transfer discussion\u2026",this.icon="arrow-right-color-fg-muted"}fetchDetails(){return document.querySelector("details.js-transfer-discussion-details")}isApplicable(){return this.fetchDetails()instanceof HTMLDetailsElement}run(){var e;const s=this.fetchDetails();if(s){const o=n(()=>{setTimeout(()=>{var r;(r=s==null?void 0:s.querySelector("[data-menu-button]"))==null||r.focus()},0)},"focusMenu");(e=s.querySelector("include-fragment"))==null||e.addEventListener("load",o),s.open=!0,o()}}}n(ie,"TransferDiscussion");const Qe=[ne,ie,re];var M=a(64992),ae=a(33241),ce=a(88513);class x extends y{constructor(){super(...arguments);this.title="2 spaces",this.iconType="none",this.tabSize="2",this.group=""}async run(e){this.updateTabSize(),this.saveSettings(e)}updateTabSize(){const e=document.querySelectorAll("[data-tab-size]");for(const s of e)s.setAttribute("data-tab-size",this.tabSize)}async saveSettings(e){const s=new FormData;s.set("tab_size_rendering_preference",this.tabSize);const o="Failed to save tab size preference";try{(await(0,ce.Q)("/settings/appearance/tab_size",{method:"PUT",body:s})).ok?e.displayFlash("success","Tab size rendering updated"):e.displayFlash("error",o)}catch{e.displayFlash("error",o)}}}n(x,"TabSizeTwo");class le extends x{constructor(){super(...arguments);this.title="3 spaces",this.tabSize="3"}}n(le,"TabSizeThree");class ue extends x{constructor(){super(...arguments);this.title="4 spaces",this.tabSize="4"}}n(ue,"TabSizeFour");class de extends x{constructor(){super(...arguments);this.title="6 spaces",this.tabSize="6"}}n(de,"TabSizeSix");class he extends x{constructor(){super(...arguments);this.title="8 spaces",this.tabSize="8"}}n(he,"TabSizeEight");class pe extends x{constructor(){super(...arguments);this.title="10 spaces",this.tabSize="10"}}n(pe,"TabSizeTen");class me extends x{constructor(){super(...arguments);this.title="12 spaces",this.tabSize="12"}}n(me,"TabSizeTwelve");class fe extends W{constructor(){super(...arguments);this.title="Change tab size rendering",this.icon="gear-color-fg-muted",this.priority=10,this.dismissAfterRun=!1}run(e){e.pushPage(new ae.Z4(this.title,"tab-sizes",this.pageItems),!0)}get pageItems(){return[x,le,ue,de,he,pe,me].map(e=>e.item())}select(e){this.run(e)}}n(fe,"SwitchTabSize");class ye extends y{constructor(){super(...arguments);this.title="Open in github.dev editor",this.icon="codespaces-color-fg-muted",this.priority=10}isApplicable(){return this.fetchLink()instanceof HTMLAnchorElement}fetchLink(){return document.querySelector(".js-github-dev-shortcut")}run(){var e;(e=this.fetchLink())==null||e.click()}}n(ye,"OpenInDotDev");class ve extends W{constructor(){super(...arguments);this.title="Switch theme",this.icon="paintbrush-color-fg-muted",this.priority=9,this.dismissAfterRun=!1}run(e){e.pushPage(new ae.Z4(this.title,"switch-theme-page-1",this.pageItems),!0)}get pageItems(){return[I,Ce,be,ge,Ee].map(e=>e.item())}select(e){this.run(e)}}n(ve,"SwitchTheme");class I extends y{constructor(){super(...arguments);this.title="Default dark",this.icon="moon-color-fg-muted",this.mode="dark",this.theme="dark",this.group=""}applyTheme(){this.loadStyles(this.theme),this.mode!=="auto"&&(0,M.on)(this.theme,this.mode),(0,M.h5)(this.mode)}async run(){this.applyTheme(),this.saveSettings(this.mode,this.lightTheme,this.darkTheme)}async saveSettings(e=this.mode,s,o){const r=new FormData;r.set("color_mode",e),s&&r.set("light_theme",s),o&&r.set("dark_theme",o);const l=await(await(0,ce.Q)("/settings/appearance/color_mode",{method:"PUT",body:r})).json();this.loadStyles(l.light_theme),this.loadStyles(l.dark_theme),(0,M.on)(l.light_theme,"light"),(0,M.on)(l.dark_theme,"dark"),(0,M.h5)(l.color_mode)}loadStyles(e){const s=document.querySelector(`link[data-color-theme='${e}']`);s&&!s.hasAttribute("href")&&s.hasAttribute("data-href")&&s.setAttribute("href",s.getAttribute("data-href"))}get darkTheme(){return this.mode==="dark"?this.theme:(0,M.yn)("dark")}get lightTheme(){return this.mode==="light"?this.theme:(0,M.yn)("light")}}n(I,"SwitchToDark");class ge extends I{constructor(){super(...arguments);this.title="Switch theme to dark high contrast",this.theme="dark_high_contrast"}}n(ge,"SwitchToDarkHighContrast");class be extends I{constructor(){super(...arguments);this.title="Dark dimmed",this.theme="dark_dimmed"}}n(be,"SwitchToDarkDimmed");class Ce extends I{constructor(){super(...arguments);this.title="Default light",this.icon="sun-color-fg-muted",this.mode="light",this.theme="light"}}n(Ce,"SwitchToLight");class Ee extends I{constructor(){super(...arguments);this.title="Sync with system settings",this.icon="sun-color-fg-muted",this.mode="auto"}get darkTheme(){}get lightTheme(){}}n(Ee,"SwitchToAuto");class Se extends y{constructor(){super();const e=this.isSubscribe();this.title=`${e?"Subscribe":"Unsubscribe"}`,this.icon=`${e?"bell":"bell-slash"}-color-fg-muted`}isApplicable(){var e;return this.fetchButton()instanceof HTMLButtonElement&&((e=this.fetchButton())==null?void 0:e.disabled)===!1}isSubscribe(){var e,s;return((s=(e=this.fetchButton())==null?void 0:e.textContent)==null?void 0:s.trim())==="Subscribe"}fetchButton(){return document.querySelector(".thread-subscribe-button")}run(){var e;(e=this.fetchButton())==null||e.click()}}n(Se,"UpdateSubscription");const Xe=[ye,fe,ve,Se];function _e(t){t.focus(),t.selectionStart=t.selectionEnd=t.value.length}n(_e,"moveCursorToEnd");class N extends y{constructor(){super(...arguments);this.title="Edit issue body",this.icon="pencil-color-fg-muted"}issueBody(){return document.querySelector(".js-command-palette-issue-body")}isIssue(){return!!this.issueBody()}isApplicable(){return this.isIssue()}run(){const e=document.createElement("button");e.hidden=!0,e.classList.add("js-comment-edit-button");const s=document.querySelector("div.js-comment");s==null||s.appendChild(e),e.click(),e.remove(),setTimeout(()=>{var o;const r=(o=s==null?void 0:s.parentElement)==null?void 0:o.querySelector("textarea.js-comment-field");r&&_e(r)},0)}}n(N,"EditIssueBody");class Z extends y{constructor(){super(...arguments);this.title="Edit issue title",this.icon="pencil-color-fg-muted"}issueBody(){return document.querySelector(".js-command-palette-issue-body")}isIssue(){return!!this.issueBody()}isApplicable(){return this.fetchButton()instanceof HTMLButtonElement&&this.isIssue()}fetchButton(){return document.querySelector(".js-title-edit-button")}run(){var e;(e=this.fetchButton())==null||e.click(),setTimeout(()=>{const s=document.querySelector("input#issue_title[autofocus]");s&&_e(s)},0)}}n(Z,"EditIssueTitle");class we extends y{constructor(){super(...arguments);this.title="Transfer issue\u2026",this.icon="arrow-right-color-fg-muted"}isApplicable(){return this.fetchDetails()instanceof HTMLDetailsElement}fetchDetails(){return document.querySelector("details.js-transfer-issue")}run(){var e;const s=this.fetchDetails();if(s){const o=n(()=>{setTimeout(()=>{var r;(r=s.querySelector("[data-menu-button]"))==null||r.focus()},0)},"focusMenu");(e=s.querySelector("include-fragment"))==null||e.addEventListener("load",o),s.open=!0,o()}}}n(we,"TransferIssue");class Te extends y{constructor(){super();const e=this.isLock();this.title=`${e?"Lock":"Unlock"} conversation`,this.icon=`${e?"lock":"key"}-color-fg-muted`}isApplicable(){return this.fetchDetails()instanceof HTMLDetailsElement}isLock(){var e,s;return((s=(e=document.querySelector("summary.lock-toggle-link"))==null?void 0:e.textContent)==null?void 0:s.trim())==="Lock conversation"}fetchDetails(){return document.querySelector("details.js-lock-issue")}run(){const e=this.fetchDetails();e&&(e.open=!0,setTimeout(()=>{var s;(s=document.querySelector("#unlock-reason"))==null||s.focus()},0))}}n(Te,"LockIssue");class xe extends y{constructor(){super(...arguments);this.title="Delete issue\u2026",this.icon="trash-color-fg-muted"}isApplicable(){return this.fetchDetails()instanceof HTMLDetailsElement}fetchDetails(){return document.querySelector("details.js-delete-issue")}run(){const e=this.fetchDetails();e&&(e.open=!0,setTimeout(()=>{var s;(s=e.querySelector('button[type="submit"]'))==null||s.focus()},0))}}n(xe,"DeleteIssue");class Pe extends y{constructor(){super(...arguments);this.title="Convert issue to discussion\u2026",this.icon="comment-discussion-color-fg-muted"}isApplicable(){return this.fetchDetails()instanceof HTMLDetailsElement}fetchDetails(){return document.querySelector("details.js-convert-to-discussion")}run(){var e;const s=this.fetchDetails();if(s){const o=n(()=>{setTimeout(()=>{var r;(r=s.querySelector("[data-menu-button]"))==null||r.focus()},0)},"focusMenu");(e=s.querySelector("include-fragment"))==null||e.addEventListener("load",o),s.open=!0,o()}}}n(Pe,"ConvertToDiscussion");const Ge=[Z,N,Te,we,xe,Pe];var Ye=a(78078),P=a(76745);class K extends y{constructor(){super(...arguments);this.title="Open in new codespace",this.icon="codespaces-color-fg-muted",this.priority=11}isApplicable(){const e=this.fetchElements();return!!(e.codeModal&&e.codespacesForm&&e.newCodespacesButton&&e.codespacesTab)}run(){const{codeModal:e,codespacesTab:s,newCodespacesButton:o}=this.fetchElements();!(e&&s&&o)||(e.open=!0,s.click(),o instanceof HTMLButtonElement&&o.click())}fetchElements(){const e=document.querySelector(".js-create-codespaces-form-command"),s=(e==null?void 0:e.closest("details"))||null,o=(s==null?void 0:s.querySelector('[data-tab="cloud"]'))||null,r=(e==null?void 0:e.querySelector('summary[role="button"], button[type="submit"]'))||null;return{codespacesForm:e,codeModal:s,codespacesTab:o,newCodespacesButton:r}}}n(K,"OpenCodespace");var $=a(76168);class Ae extends N{constructor(){super(...arguments);this.title="Edit pull request body"}pullRequestBody(){return document.querySelector(".js-command-palette-pull-body")}isPullRequest(){return!!this.pullRequestBody()}isApplicable(){return this.isPullRequest()}}n(Ae,"EditPullRequestBody");class Le extends Z{constructor(){super(...arguments);this.title="Edit pull request title"}pullRequestBody(){return document.querySelector(".js-command-palette-pull-body")}isPullRequest(){return!!this.pullRequestBody()}isApplicable(){return this.fetchButton()instanceof HTMLButtonElement&&this.isPullRequest()}}n(Le,"EditPullRequestTitle");class je extends y{constructor(){super(...arguments);this.title="Update current branch",this.icon="sync-color-fg-muted"}isApplicable(){return this.fetchButton()instanceof HTMLButtonElement}fetchButton(){return document.querySelector(".js-update-branch-form button")}run(){const e=this.fetchButton();e&&(e.scrollIntoView({behavior:"smooth",block:"center"}),e.click())}}n(je,"UpdateBranch");class De extends y{constructor(){super(...arguments);this.title="Convert to draft",this.icon="git-pull-request-draft-color-fg-muted"}isApplicable(){return this.fetchButton()instanceof HTMLButtonElement}fetchButton(){return document.querySelector(".js-convert-to-draft")}run(){var e;const s=(e=this.fetchButton())==null?void 0:e.closest("details");s&&(s.open=!0,setTimeout(()=>{var o;(o=s.querySelector(".js-convert-to-draft"))==null||o.focus()},0))}}n(De,"ConvertToDraft");class Me extends y{constructor(){super(...arguments);this.title="Copy current branch name",this.icon="copy-color-fg-muted"}isApplicable(){return this.fetchClipboardCopy()instanceof P.Z}fetchClipboardCopy(){return document.querySelector(".js-copy-branch")}async run(e){const s=this.fetchClipboardCopy();if(s instanceof P.Z){const o=s.value;try{await(0,$.z)(o),e.displayFlash("success","Branch name copied to clipboard!")}catch{e.displayFlash("error","Unable to copy branch name to clipboard!")}}}}n(Me,"CopyBranchName");const et=[Me,Le,Ae,je,De,K];class ke extends y{constructor(){super(...arguments);this.title="Copy file permalink",this.icon="copy-color-fg-muted"}isApplicable(){return this.fetchPermalinkContainer()instanceof HTMLAnchorElement}fetchPermalinkContainer(){return document.querySelector(".js-permalink-shortcut")}async run(e){const s=this.fetchPermalinkContainer();if(s){const o=`${s.href}${window.location.hash}`;try{await(0,$.z)(o),e.displayFlash("success","Copied permalink!")}catch{e.displayFlash("error","Failed to copy permalink!")}}}}n(ke,"CopyPermalink");class Be extends y{constructor(){super(...arguments);this.title="Clone repository: Copy HTTPS",this.icon="copy-color-fg-muted",this.priority=4}isApplicable(){return this.backendCommandsDisabled()&&this.fetchClipboardCopy()instanceof P.Z}fetchClipboardCopy(){return document.querySelector(".js-clone-url-http")}backendCommandsDisabled(){return!!window.commandPalette&&!window.commandPalette.hasAttribute("data-commands-path")}async run(e){const s=this.fetchClipboardCopy();if(s instanceof P.Z){const o=s.value;try{await(0,$.z)(o),e.displayFlash("success","Clone URL copied!")}catch{e.displayFlash("error","Clone URL couldn't be copied")}}}}n(Be,"CloneCopyHttps");class Ie extends y{constructor(){super(...arguments);this.title="Clone repository: Copy SSH",this.icon="copy-color-fg-muted",this.priority=3}isApplicable(){return this.backendCommandsDisabled()&&this.fetchClipboardCopy()instanceof P.Z}fetchClipboardCopy(){return document.querySelector(".js-clone-url-ssh")}backendCommandsDisabled(){return!!window.commandPalette&&!window.commandPalette.hasAttribute("data-commands-path")}async run(e){const s=this.fetchClipboardCopy();if(s instanceof P.Z){const o=s.value;try{await(0,$.z)(o),e.displayFlash("success","Clone URL copied!")}catch{e.displayFlash("error","Clone URL couldn't be copied")}}}}n(Ie,"CloneCopySsh");class Oe extends y{constructor(){super(...arguments);this.title="Clone repository: Copy GitHub CLI",this.icon="copy-color-fg-muted",this.priority=2}isApplicable(){return this.backendCommandsDisabled()&&this.fetchClipboardCopy()instanceof P.Z}fetchClipboardCopy(){return document.querySelector(".js-clone-url-gh-cli")}backendCommandsDisabled(){return!!window.commandPalette&&!window.commandPalette.hasAttribute("data-commands-path")}async run(e){const s=this.fetchClipboardCopy();if(s instanceof P.Z){const o=s.value;try{await(0,$.z)(o),e.displayFlash("success","Clone URL copied!")}catch{e.displayFlash("error","Clone URL couldn't be copied")}}}}n(Oe,"CloneCopyCli");const tt=[Be,Ie,Oe,ke,K];class J extends Ye.B{constructor(){super(...arguments);this.itemsByType={},this.items=[],this.needsFetch=!0}enabledFor(e){const s=["discussion","issue","pull_request"];return e.mode===">"?!0:!!s.includes(e.scope.type)}get hasCommands(){return!0}async fetch(e){return this.items=[...Ge.map(o=>o.item()),...et.map(o=>o.item()),...tt.map(o=>o.item()),...Qe.map(o=>o.item()),...Xe.map(o=>o.item())].filter(o=>o.isApplicable(e)),{results:this.fuzzyFilter(this.items,e)}}get debounce(){return 0}clearCache(){}}n(J,"MainWindowCommandsProvider"),window.commandPalette&&window.commandPalette.registerProvider("main-window-commands-provider",new J),window.addEventListener("command-palette-ready",()=>{var t;(t=window.commandPalette)==null||t.registerProvider("main-window-commands-provider",new J)});var O=a(64465),st=a(49815),ot=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,F=n((t,e,s,o)=>{for(var r=o>1?void 0:o?nt(e,s):e,c=t.length-1,l;c>=0;c--)(l=t[c])&&(r=(o?l(e,s,r):l(r))||r);return o&&r&&ot(e,s,r),r},"command_palette_input_element_decorateClass");let A=n(class extends HTMLElement{constructor(){super(...arguments);this.setupComplete=!1,this.connected=!1}static get observedAttributes(){return["input-value","typeahead","scope"]}setup(){this.classList.add("d-flex","flex-items-center","flex-nowrap","py-1","pl-3","pr-2","border-bottom"),this.input=this.querySelector("input.js-input"),this.overlayInput=this.querySelector("input.js-overlay-input"),this.scopeElement=this.querySelector("command-palette-scope"),this.searchIcon=this.querySelector(".js-search-icon"),this.spinner=this.querySelector(".js-spinner"),this.defaultScope=this.scope,this.hasAttribute("autofocus")&&this.input.focus(),this.inputValue.length!==0&&this._dispatchEvent("command-palette-input"),this.setupComplete=!0}connectedCallback(){this.setupComplete||this.setup(),this.inputValue=this.getAttribute("input-value")||"",this.typeahead=this.getAttribute("typeahead")||"",this.placeholder=this.getAttribute("placeholder")||"",this.connected=!0}attributeChangedCallback(t,e,s){!this.input||(t==="typeahead"?this.typeahead=s:t==="input-value"&&(this.inputValue=s,this._dispatchEvent("command-palette-input")))}focus(){this.input.focus()}setRemovedTokenAndSelect(t){t&&(this.inputValue=t),this.focus(),this.input.select()}get scope(){return this.scopeElement.scope}set scope(t){this.scopeElement.scope=t,this.clearButton.hidden=!this.hasSomethingToClear()}hasScope(){return this.scopeElement.hasScope()}clearScope(){return this.scopeElement.clearScope()}removeToken(){return this.scopeElement.removeToken()}get placeholder(){return this.input.getAttribute("placeholder")||""}set placeholder(t){this.input.setAttribute("placeholder",t)}get typeaheadPlaceholderText(){return this.typeaheadPlaceholder.textContent||""}set typeaheadPlaceholderText(t){this.typeaheadPlaceholder.textContent=t}get inputValue(){var t;return((t=this.input)==null?void 0:t.value)||""}set inputValue(t){this.input.value=t,this.typeahead=t,this.resetPlaceholder(),this.onInput()}get overlay(){return this.overlayInput.value}set overlay(t){this.overlayInput.value=t}get typeahead(){return this.typeaheadValue}set typeahead(t){if(this.typeaheadValue=this.overlay+t,this.mirror.textContent=this.inputValue,t==="")this.typeaheadText.textContent="";else if(this.placeholder="",this.typeaheadPlaceholderText="",this.valueStartsWithTypeahead){const e=this.inputValue.length-(this.overlay?1:0);this.typeaheadText.textContent=t.substring(e)}else this.typeaheadText.textContent=` \u2013 ${t}`}showModePlaceholder(t=""){this.typeaheadPlaceholderText=t}get valueStartsWithTypeahead(){return this.typeaheadValue.toLowerCase().startsWith(this.inputValue.toLowerCase())}get isCursorAtEnd(){return this.inputValue.length===this.input.selectionStart}set loading(t){this.spinner.hidden=!t,this.searchIcon.hidden=t}resetPlaceholder(){this.inputValue.replace(this.overlay,"")&&this.overlay&&(this.typeaheadPlaceholderText=""),this.placeholder=this.getAttribute("placeholder")||""}onInput(){this.resetPlaceholder(),!!this.connected&&(this.clearButton.hidden=!this.hasSomethingToClear(),this._dispatchEvent("command-palette-input"))}onClear(t){t instanceof KeyboardEvent&&t.key!=="Enter"||(this.inputValue="",this.input.focus(),this._dispatchEvent("command-palette-cleared"))}onKeydown(t){if(this.isSelectKeystroke(t.key)&&(this._dispatchEvent("command-palette-select"),t.stopImmediatePropagation(),t.preventDefault()),this.hasSomethingToClear()&&(0,O.o)(t)&&t.key==="Backspace"){this.onClear();return}if(this.input.selectionStart===0&&this.input.selectionEnd===0&&t.key==="Backspace"){this._dispatchEvent("command-palette-descope"),t.stopImmediatePropagation(),t.preventDefault();return}}hasSomethingToClear(){return this.scopeElement.hasScope()||this.inputValue.length>0}isSelectKeystroke(t){return(0,st.c)("ACCESSIBLE_COMMAND_PALETTE")?!1:t==="Tab"||t==="ArrowRight"&&this.isCursorAtEnd}textSelected(){return this.input.selectionStart!==this.input.selectionEnd}_dispatchEvent(t){const e=new CustomEvent(t,{cancelable:!0,detail:{typeahead:this.typeahead,value:this.inputValue}});return this.dispatchEvent(e)}},"CommandPaletteInputElement");A.tagName="command-palette-input",F([i.fA],A.prototype,"typeaheadPlaceholder",2),F([i.fA],A.prototype,"typeaheadText",2),F([i.fA],A.prototype,"mirror",2),F([i.fA],A.prototype,"clearButton",2),A=F([i.Ih],A);var rt=a(11793),it=a(6741),at=a(35889),Re=a(64463),ct=a(45922);window.customElements.get(O.Z.tagName)||window.customElements.define(O.Z.tagName,O.Z);function lt(){document.addEventListener("keydown",ut),(0,Re.N7)(".js-command-palette-dialog",t=>{if(!t)return;const e=window.performance.now(),s=Q();!s||(t.addEventListener("toggle",()=>{t.open?s.activate():s.deactivate()}),s.addEventListener("command-palette-activated",o=>{o instanceof CustomEvent&&(o.detail.previouslyActivated||(0,ct.b)({distributionKey:"COMMAND_PALETTE_FIRST_OPEN",distributionValue:window.performance.now()-e}))}))}),(0,Re.N7)(".js-socket-channel.js-updatable-content",{subscribe:t=>(0,it.RB)(t,"socket:message",()=>{const e=Q();!e||e.clearCommands(!1)})})}n(lt,"observeCommandPalette");function Q(){return document.querySelector(O.Z.tagName)}n(Q,"findCommandPalette");function ut(t){if(!t.code)return;const e=Q();if(!e)return;const s=mt(),o=X(e.platformActivationHotkey,t),r=X(e.platformSecondaryActivationHotkey,t),c=X(e.platformCommandModeHotkey,t),l=!dt(t)&&!s&&(o||c),L=!s&&(r||c),w=e.hasAttribute("data-memex-hotkey-enabled")&&s&&(o||r||c);(l||L||w)&&(ft(c),t.preventDefault(),t.stopPropagation())}n(ut,"handleKeyDown");function X(t,e){let s=(0,rt.EL)(e);return s=s.replace("\u02DA","k"),t.split(",").some(o=>s===o)}n(X,"hotkeyMatchesEvent");function dt(t){return ht(t)||pt(t)}n(dt,"shouldIgnoreActivation");function ht(t){const e=t.target;return e?e.closest(".js-previewable-comment-form")!==null:!1}n(ht,"triggeredInsideAPreviewableCommentForm");function pt(t){const e=t.target;if(!e)return!1;const s=e.closest(".js-code-editor");if(!s)return!1;const o=(0,at.P)(s);if(!o)return!1;const r=o.editor;if(!r)return!1;const c=r.getMode().name;return c==="gfm"||c==="markdown"}n(pt,"triggeredInsideAMarkdownCodeEditor");function mt(){return!!document.querySelector("#memex-root")}n(mt,"triggeredInsideMemex");function ft(t){for(const e of document.querySelectorAll(".js-command-palette-dialog")){const s=e.querySelector(A.tagName);if(!s)return;if(e.open)e.open=!1;else{yt(s,t);const o=e.querySelector(O.Z.tagName);o&&(o.previouslyActiveElement=document.activeElement),e.open=!0}}}n(ft,"toggleCommandPalette");function yt(t,e){const s=t.inputValue.startsWith(">");return e&&!s?(t.inputValue=`>${t.inputValue}`,!0):!e&&s?(t.inputValue=t.inputValue.substring(1),!0):!1}n(yt,"toggleCommandMode"),lt()},35889:(S,C,a)=>{a.d(C,{P:()=>v,g:()=>g});var i=a(59753);const b=new WeakMap;function v(d){return b.get(d)}n(v,"getCodeEditor");async function g(d){return b.get(d)||m(await p(d,"codeEditor:ready"))}n(g,"getAsyncCodeEditor");function m(d){if(!(d instanceof CustomEvent))throw new Error("assert: event is not a CustomEvent");const h=d.detail.editor;if(!d.target)throw new Error("assert: event.target is null");return b.set(d.target,h),h}n(m,"onEditorFromEvent"),(0,i.on)("codeEditor:ready",".js-code-editor",m);function p(d,h){return new Promise(u=>{d.addEventListener(h,u,{once:!0})})}n(p,"nextEvent")},64992:(S,C,a)=>{a.d(C,{I3:()=>v,h5:()=>m,on:()=>p,yn:()=>d});var i=a(7739),b=a(64926);(async()=>(await i.x,(0,b.d8)("preferred_color_mode",v())))();function v(){if(g("dark"))return"dark";if(g("light"))return"light"}n(v,"getPreferredColorMode");function g(h){return window.matchMedia&&window.matchMedia(`(prefers-color-scheme: ${h})`).matches}n(g,"prefersColorScheme");function m(h){const u=document.querySelector("html[data-color-mode]");!u||u.setAttribute("data-color-mode",h)}n(m,"setClientMode");function p(h,u){const f=document.querySelector("html[data-color-mode]");!f||f.setAttribute(`data-${u}-theme`,h)}n(p,"setClientTheme");function d(h){const u=document.querySelector("html[data-color-mode]");if(!!u)return u.getAttribute(`data-${h}-theme`)}n(d,"getClientTheme")},64926:(S,C,a)=>{a.d(C,{$1:()=>b,d8:()=>g,ej:()=>i,kT:()=>m});function i(p){return b(p)[0]}n(i,"getCookie");function b(p){const d=[];for(const h of v()){const[u,f]=h.trim().split("=");p===u&&typeof f!="undefined"&&d.push({key:u,value:f})}return d}n(b,"getCookies");function v(){try{return document.cookie.split(";")}catch{return[]}}n(v,"readCookies");function g(p,d,h=null,u=!1,f="lax"){let E=document.domain;if(E==null)throw new Error("Unable to get document domain");E.endsWith(".github.com")&&(E="github.com");const _=location.protocol==="https:"?"; secure":"",G=h?`; expires=${h}`:"";u===!1&&(E=`.${E}`);try{document.cookie=`${p}=${d}; path=/; domain=${E}${G}${_}; samesite=${f}`}catch{}}n(g,"setCookie");function m(p,d=!1){let h=document.domain;if(h==null)throw new Error("Unable to get document domain");h.endsWith(".github.com")&&(h="github.com");const u=new Date().getTime(),f=new Date(u-1).toUTCString(),E=location.protocol==="https:"?"; secure":"",_=`; expires=${f}`;d===!1&&(h=`.${h}`);try{document.cookie=`${p}=''; path=/; domain=${h}${_}${E}`}catch{}}n(m,"deleteCookie")},7739:(S,C,a)=>{a.d(C,{C:()=>b,x:()=>i});const i=function(){return document.readyState==="interactive"||document.readyState==="complete"?Promise.resolve():new Promise(v=>{document.addEventListener("DOMContentLoaded",()=>{v()})})}(),b=function(){return document.readyState==="complete"?Promise.resolve():new Promise(v=>{window.addEventListener("load",v)})}()},97474:(S,C,a)=>{a.d(C,{Z:()=>i});function i(b){var v,g;const m=(g=(v=b.head)==null?void 0:v.querySelector('meta[name="expected-hostname"]'))==null?void 0:g.content;if(!m)return!1;const p=m.replace(/\.$/,"").split(".").slice(-2).join("."),d=b.location.hostname.replace(/\.$/,"").split(".").slice(-2).join(".");return p!==d}n(i,"detectProxySite")},45922:(S,C,a)=>{a.d(C,{b:()=>g});var i=a(97474),b=a(7739);let v=[];function g(u,f=!1){u.timestamp===void 0&&(u.timestamp=new Date().getTime()),u.loggedIn=h(),v.push(u),f?d():p()}n(g,"sendStats");let m=null;async function p(){await b.C,m==null&&(m=window.requestIdleCallback(d))}n(p,"scheduleSendStats");function d(){var u,f;if(m=null,!v.length||(0,i.Z)(document))return;const E=(f=(u=document.head)==null?void 0:u.querySelector('meta[name="browser-stats-url"]'))==null?void 0:f.content;if(!E)return;const _=JSON.stringify({stats:v});try{navigator.sendBeacon&&navigator.sendBeacon(E,_)}catch{}v=[]}n(d,"flushStats");function h(){var u,f;return!!((f=(u=document.head)==null?void 0:u.querySelector('meta[name="user-login"]'))==null?void 0:f.content)}n(h,"isLoggedIn"),document.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d)},6741:(S,C,a)=>{a.d(C,{RB:()=>b,qC:()=>v,w0:()=>i});class i{constructor(m){this.closed=!1,this.unsubscribe=()=>{m(),this.closed=!0}}}n(i,"Subscription");function b(g,m,p,d={capture:!1}){return g.addEventListener(m,p,d),new i(()=>{g.removeEventListener(m,p,d)})}n(b,"fromEvent");function v(...g){return new i(()=>{for(const m of g)m.unsubscribe()})}n(v,"compose")}},S=>{var C=n(i=>S(S.s=i),"__webpack_exec__");S.O(0,["vendors-node_modules_selector-observer_dist_index_esm_js","vendors-node_modules_github_mini-throttle_dist_decorators_js-node_modules_github_catalyst_lib-6e1996","vendors-node_modules_github_clipboard-copy-element_dist_index_esm_js-node_modules_delegated-e-e4591b","app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-7e29fd"],()=>C(86761));var a=S.O()}]);})();

//# sourceMappingURL=command-palette-10120dba33e7.js.map