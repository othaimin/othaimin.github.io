import{B as e,c as t,d as n,n as r,o as i,p as a,s as o,t as s,u as c}from"./jsx-runtime-BOoI379H.js";import{n as l}from"./lib-B-y-gKnm.js";var u=s(),d=()=>[{rel:`preconnect`,href:`https://fonts.googleapis.com`},{rel:`preconnect`,href:`https://fonts.gstatic.com`,crossOrigin:`anonymous`},{rel:`stylesheet`,href:`https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap`}],f=t(function(){return(0,u.jsx)(`div`,{className:`fixed w-screen h-screen z-[99999] flex items-center justify-center`,children:(0,u.jsx)(`span`,{className:` animate-spin border-4 border-primary size-10 block rounded-full border-t-transparent `})})});function p({children:e}){return(0,u.jsxs)(`html`,{lang:`en`,suppressHydrationWarning:!0,children:[(0,u.jsxs)(`head`,{children:[(0,u.jsx)(`script`,{dangerouslySetInnerHTML:{__html:`
      
      (function () {
    var saved = localStorage.getItem("isLight");
    var light =
      saved === "false" ||
      (!saved &&
        window.matchMedia("(prefers-color-scheme: light)").matches);

    document.documentElement.classList.toggle("light", light);
})();
    `}}),(0,u.jsx)(`meta`,{charSet:`utf-8`}),(0,u.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1`}),(0,u.jsx)(n,{}),(0,u.jsx)(c,{}),(0,u.jsx)(`meta`,{name:`theme-color`,content:`#e79836`})]}),(0,u.jsxs)(`body`,{children:[e,(0,u.jsx)(l,{}),(0,u.jsx)(a,{})]})]})}var m=i(function(){return(0,u.jsx)(r,{})}),h=o(function({error:t}){let n=`Oops!`,r=`An unexpected error occurred.`;return e(t)&&(n=t.status===404?`404`:`Error`,r=t.status===404?`The requested page could not be found.`:t.statusText||r),(0,u.jsxs)(`main`,{className:`pt-16 p-4 container mx-auto`,children:[(0,u.jsx)(`h1`,{children:n}),(0,u.jsx)(`p`,{children:r}),void 0]})});export{h as ErrorBoundary,f as HydrateFallback,p as Layout,m as default,d as links};