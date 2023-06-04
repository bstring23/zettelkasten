"use strict";(self.webpackChunkdev_docs=self.webpackChunkdev_docs||[]).push([[3470],{2205:(t,e,a)=>{a.d(e,{G:()=>l});var o=a(7294),n=a(1237),i=a(4697);const s=t=>{const e=document.createTextNode(t);document.body.appendChild(e);const a=document.createRange();a.selectNodeContents(e),window.getSelection().removeAllRanges(),window.getSelection().addRange(a);try{const a=document.execCommand("copy");return window.getSelection().removeAllRanges(),e.remove(),a&&console.log("createTextNode: ",t),a}catch(o){return console.log("createTextNode: ",o),!1}},r=t=>{const e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.focus(),e.select();try{const a=document.execCommand("copy");return document.body.removeChild(e),a&&console.log("textArea: ",t),a}catch(a){return console.log("createTextArea: ",a),!1}},l=t=>{let{value:e}=t;const[a,l]=(0,o.useState)(!1),p=(0,i.y1)((()=>{l(!1)}),1e3);return o.createElement("button",{onClick:async()=>{l(!0),await(async t=>{try{if(navigator.clipboard){if(navigator.permissions)try{const t={name:"clipboard-write"},e=await navigator.permissions.query(t);console.log("cliboard-write: ",e.state),e.onchange=()=>{console.log("clipboard-write changed: ",e.state)}}catch(a){console.log("error permissions: ",a)}return await navigator.clipboard.writeText(t),console.log("navigator.clipboard.writeText: ",t),!0}}catch(a){console.log("Failed to copy!",a)}const e=s(t);if(console.log("textNode: ",e),!e){const a=r(t);return console.log("textArea: ",e),a}return e})(e),p()}},a?o.createElement(n.xv,{as:"span",sx:{textTransform:"uppercase"}},"Copied"):o.createElement(n.xv,{as:"span",sx:{textTransform:"uppercase"}},"Copy QR Code"))}},2512:(t,e,a)=>{a.d(e,{s:()=>l});var o=a(4059),n=a(1686),i=a(1237),s=a(7294);const r=(0,n.ZP)(i.kC)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 10px;
  padding: 2px;
  border: 5px solid;
  border-color: #40787a;
  border-radius: 10px;
  width: 300px;

  & > svg {
    display: block;
    height: auto; /* reset height */
    width: 100%; /* reset width */
  }
`,l=t=>{let{value:e}=t;return s.createElement(r,null,s.createElement(o.ZP,{renderAs:"svg",value:e,includeMargin:!0}))}},5588:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var o=a(7462),n=(a(7294),a(4137)),i=(a(8209),a(2512)),s=a(2205);const r={id:"paid-consulting-startups",title:"Paid Consulting for Startups",tags:["consulting","paid","startup"]},l=void 0,p={unversionedId:"paid-consulting-startups",id:"paid-consulting-startups",title:"Paid Consulting for Startups",description:"Paid Consulting for Startups",source:"@site/docs/paid-consulting-startups.mdx",sourceDirName:".",slug:"/paid-consulting-startups",permalink:"/zettelkasten/paid-consulting-startups",draft:!1,editUrl:"https://github.com/sibelius/zettelkasten/edit/main/docs/paid-consulting-startups.mdx",tags:[{label:"consulting",permalink:"/zettelkasten/tags/consulting"},{label:"paid",permalink:"/zettelkasten/tags/paid"},{label:"startup",permalink:"/zettelkasten/tags/startup"}],version:"current",lastUpdatedBy:"Sibelius Seraphini",lastUpdatedAt:1685897786,formattedLastUpdatedAt:"Jun 4, 2023",frontMatter:{id:"paid-consulting-startups",title:"Paid Consulting for Startups",tags:["consulting","paid","startup"]},sidebar:"docs",previous:{title:"Mentorship Questions",permalink:"/zettelkasten/mentorship-questions"},next:{title:"Paid Mentorship for Developers",permalink:"/zettelkasten/paid-mentorship-developers"}},c={},d=[{value:"Paid Consulting for Startups",id:"paid-consulting-for-startups",level:2},{value:"Price",id:"price",level:2},{value:"How to pay",id:"how-to-pay",level:2}],u={toc:d};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"paid-consulting-for-startups"},"Paid Consulting for Startups"),(0,n.kt)("p",null,"1 sync call per month"),(0,n.kt)("p",null,"Async chat with me everyday"),(0,n.kt)("p",null,"Things I can help you with:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Structure your development team processes: daily, product management, code review, automation, ci/cd"),(0,n.kt)("li",{parentName:"ul"},"Validate your team, idea, product and market"),(0,n.kt)("li",{parentName:"ul"},"Reduce scope for your Minimal Viable Product (MVP, and define the MVP, what to focus on, and how to validate it"),(0,n.kt)("li",{parentName:"ul"},"Make you reach Product Market Fit (PMF), using cohort to identify problems in your onboarding and product"),(0,n.kt)("li",{parentName:"ul"},"Scale your process and team")),(0,n.kt)("h2",{id:"price"},"Price"),(0,n.kt)("p",null,"US$ 120 per month"),(0,n.kt)("h2",{id:"how-to-pay"},"How to pay"),(0,n.kt)("p",null,"Pix"),(0,n.kt)(i.s,{value:"00020126720014BR.GOV.BCB.PIX0136c78052c6-43e5-4732-a9ef-90fd615ed6380210mentorship5204000053039865802BR5918Sibelius Seraphini6009SAO PAULO61080540900062240520672Ib1DOdDFVQn65hoid6304AA21",mdxType:"QRCode"}),(0,n.kt)(s.G,{value:"00020126720014BR.GOV.BCB.PIX0136c78052c6-43e5-4732-a9ef-90fd615ed6380210mentorship5204000053039865802BR5918Sibelius Seraphini6009SAO PAULO61080540900062240520672Ib1DOdDFVQn65hoid6304AA21",mdxType:"CopyQRCode"}),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Paypal: ",(0,n.kt)("a",{parentName:"p",href:"mailto:sibeliusseraphini@gmail.com"},"sibeliusseraphini@gmail.com")),(0,n.kt)("p",null,"Patreon: ",(0,n.kt)("a",{parentName:"p",href:"https://www.patreon.com/sibelius"},"https://www.patreon.com/sibelius")),(0,n.kt)("p",null,"Github Sponsors: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sponsors/sibelius"},"https://github.com/sponsors/sibelius")))}m.isMDXComponent=!0}}]);