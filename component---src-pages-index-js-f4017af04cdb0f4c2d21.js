(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=(t(203),t(163)),c=t(161),m=t(204),i=t.n(m),o=t(180),s=t.n(o),u=function(e){return l.a.createElement("div",{className:i.a.banner},l.a.createElement(s.a,{fluid:e.keyboardImg.fluid,alt:"scala keyboard",className:i.a.bannerImg}),l.a.createElement("div",{className:i.a.phrases},e.features.nodes.map(function(e){return l.a.createElement("p",{key:e.id},e.feature)})))},d=t(205),p=t.n(d),E=function(e){return l.a.createElement("div",{className:p.a.featuresSection},e.features.nodes.map(function(e){return l.a.createElement("div",{key:e.id,className:p.a.featureRow},l.a.createElement("div",{className:p.a.featureName},l.a.createElement("p",{className:p.a.featureDecor}),l.a.createElement("p",null,e.feature)),l.a.createElement("div",{className:p.a.featureDesc},l.a.createElement("p",null,e.description)))}))},g=t(217),f=t(218),w=(t(206),t(222)),h=t(223),y=t(207),b=t.n(y),v=function(e){return l.a.createElement(w.a,null,e.recommendations.map(function(e){return l.a.createElement(w.a.Item,{key:e.id},l.a.createElement(h.a,{style:{width:"20rem"},className:b.a.cardAll},l.a.createElement(h.a.Img,{variant:"top",src:"images/"+e.image,className:b.a.cardImg,alt:"photo of "+e.name}),l.a.createElement(h.a.Body,null,l.a.createElement(h.a.Title,null,e.name),l.a.createElement("span",{role:"img","aria-label":"rate"},e.rate),l.a.createElement(h.a.Text,{className:b.a.cardText},e.opinion))))}))},N=t(209),k=t.n(N),I=t(219),S=function(){return l.a.createElement("div",{className:k.a.buy},l.a.createElement("p",null,"Oooh! Don't waste your time any more, we all know you want it!"),l.a.createElement("div",{className:k.a.buyButton},l.a.createElement(I.a,{size:"lg",type:"button",className:k.a.buyButton,id:"buyButton"},"Buy")))},x=t(210),C=t.n(x),T=function(e){return l.a.createElement("div",null,l.a.createElement(g.a,null,l.a.createElement(f.a,{md:6,sm:12,className:C.a.recommendations},l.a.createElement(v,{recommendations:e.recommendations.nodes})),l.a.createElement(f.a,{md:6,sm:12,className:C.a.buy},l.a.createElement(S,null))))},q=t(211),B=t(214),A=t.n(B),L=t(215),j=t.n(L),K=function(){return l.a.createElement("div",{className:j.a.keyboard},l.a.createElement(q.a,{src:A.a,width:"100%",mgShowOverflow:!1,alt:"Ultimate Scala Keyboard big photo"}))},R=t(216),D=t.n(R),P=function(e){return l.a.createElement("div",null,l.a.createElement("p",{className:D.a.awardSection},"We have been awarded by"),l.a.createElement(g.a,null,l.a.createElement(f.a,{lg:3,md:6,xs:12},l.a.createElement(s.a,{fluid:e.planeImg.fluid,alt:"Airplane on the sky"})),l.a.createElement(f.a,{lg:3,md:6,xs:12,className:D.a.awardCol},l.a.createElement(s.a,{className:D.a.awardImg,fluid:e.award1.fluid,alt:"Satisfaction Guarantee Award"}),l.a.createElement("div",{className:D.a.awardCard},l.a.createElement("p",{className:D.a.awardName},"Satisfaction Guarantee"),l.a.createElement("p",null,"Thanks to Scala Magazine."))),l.a.createElement(f.a,{lg:3,md:6,xs:12,className:D.a.awardCol},l.a.createElement(s.a,{fluid:e.award2.fluid,alt:"Best Choice Award",className:D.a.awardImg}),l.a.createElement("div",{className:D.a.awardCard},l.a.createElement("p",{className:D.a.awardName},"Best Choice"),l.a.createElement("p",null,"Honor from Scala Lovers Community."))),l.a.createElement(f.a,{lg:3,md:6,xs:12,className:D.a.awardCol},l.a.createElement(s.a,{className:D.a.awardImg,fluid:e.award3.fluid,alt:"Premium Quality Award"}),l.a.createElement("div",{className:D.a.awardCard},l.a.createElement("p",{className:D.a.awardName},"Premium Quality"),l.a.createElement("p",null,"From ours beloved clients!")))))};t.d(a,"query",function(){return U});a.default=function(e){var a=e.data;return l.a.createElement(r.a,null,l.a.createElement(c.a,null),l.a.createElement(u,{keyboardImg:a.keyboardImg.childImageSharp,features:a.features}),l.a.createElement(E,{features:a.features}),l.a.createElement(K,null),l.a.createElement(T,{recommendations:a.recommendations}),l.a.createElement(P,{planeImg:a.planeImg.childImageSharp,award1:a.award1.childImageSharp,award2:a.award2.childImageSharp,award3:a.award3.childImageSharp}))};var U="2818903287"},152:function(e,a,t){"use strict";t.d(a,"b",function(){return s});var n=t(0),l=t.n(n),r=t(4),c=t.n(r),m=t(33),i=t.n(m);t.d(a,"a",function(){return i.a});t(153);var o=l.a.createContext({}),s=function(e){return l.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},153:function(e,a,t){var n;e.exports=(n=t(157))&&n.default||n},157:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),l=t.n(n),r=t(4),c=t.n(r),m=t(56),i=t(2),o=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?l.a.createElement(m.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=o},161:function(e,a,t){"use strict";var n=t(162),l=t(0),r=t.n(l),c=t(178),m=t(4),i=t.n(m),o=t(152),s=function(e){var a=e.title,t=e.description,l=e.image,m=e.pathname,i=e.article;return r.a.createElement(o.b,{query:u,render:function(e){var n=e.site.siteMetadata,o=n.defaultTitle,s=n.titleTemplate,u=n.defaultDescription,d=n.siteUrl,p=n.defaultImage,E={title:a||o,description:t||u,image:""+d+(l||p),url:""+d+(m||"/")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.Helmet,{title:E.title,titleTemplate:s},r.a.createElement("meta",{name:"description",content:E.description}),r.a.createElement("meta",{name:"image",content:E.image}),E.url&&r.a.createElement("meta",{property:"og:url",content:E.url}),!i?null:r.a.createElement("meta",{property:"og:type",content:"article"}),E.title&&r.a.createElement("meta",{property:"og:title",content:E.title}),E.description&&r.a.createElement("meta",{property:"og:description",content:E.description}),E.image&&r.a.createElement("meta",{property:"og:image",content:E.image}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("html",{lang:"en"})))},data:n})};a.a=s,s.propTypes={title:i.a.string,description:i.a.string,image:i.a.string,pathname:i.a.string,article:i.a.bool},s.defaultProps={title:null,description:null,image:null,pathname:null,article:!1};var u="1070580348"},162:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"Ultimate Scala Keyboard",defaultDescription:"This is a website about coolest world keyboard : Ultimate Scala Keyboard. Buy it, enjoy it!"}}}}},163:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=(t(165),t(154),t(152)),c=t(221),m=t(220),i=t(166),o=t.n(i),s=function(){return l.a.createElement(c.a,{bg:"light",expand:"lg"},l.a.createElement(c.a.Brand,{as:r.a,to:"/",className:o.a.logo},"Ultimate Scala Keyboard"),l.a.createElement(c.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(c.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(m.a,{className:"mr-auto"},l.a.createElement(m.a.Link,{as:r.a,className:o.a.link,to:"/about/"},"About me"))))},u=t(217),d=t(218),p=t(177),E=t.n(p),g=function(){return l.a.createElement("div",{className:E.a.box},l.a.createElement(u.a,null,l.a.createElement(d.a,null,l.a.createElement("h5",null,"My"),l.a.createElement("a",{href:"https://github.com/EwelinaKi",className:E.a.link},l.a.createElement("img",{src:"/usk/svg/github.svg",alt:"github logo",className:E.a.svgLogo}),"Github"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.linkedin.com/in/ewelinakijanowska/",className:E.a.link},l.a.createElement("img",{src:"/usk/svg/li.svg",alt:"linkedin logo",className:E.a.svgLogo}),"LinkedIn")),l.a.createElement(d.a,null,l.a.createElement("h5",null,"Attributions"),"Awards free Vectors by ",l.a.createElement("a",{rel:"nofollow",href:"https://www.vecteezy.com",className:E.a.link},"Vecteezy!"),l.a.createElement("br",null),"Plane photo by ",l.a.createElement("a",{rel:"nofollow",href:"https://www.pexels.com/photo/photo-of-airplane-with-smoke-trail-2088203/",className:E.a.link},"eberhard grossgasteiger"),l.a.createElement("br",null),"Keyboard photo by ",l.a.createElement("a",{rel:"nofollow",href:"https://www.pexels.com/photo/apple-background-desk-electronics-399161/",className:E.a.link},"Lum3n.com"),l.a.createElement("br",null),"Very complicated formula ",l.a.createElement("a",{rel:"nofollow",href:"http://www.luigip.com/?p=200",className:E.a.link},"Luigip.com"))))};a.a=function(e){var a=e.children;return l.a.createElement("div",null,l.a.createElement(s,null),l.a.createElement("div",{className:"mainContainer"},a),l.a.createElement(g,null))}},214:function(e,a,t){e.exports=t.p+"static/keyboard-65d559899ced60498b898192bc59f537.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-f4017af04cdb0f4c2d21.js.map