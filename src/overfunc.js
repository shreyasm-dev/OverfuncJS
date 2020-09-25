function args(r,n,t){return r=Array.from(r),function(){for(var t=!0,a=0;a<r.length;a++){var e=r[a];t=(void 0===n[a]?()=>!1:n[a])(e)&&t}return t}()&&r.length===n.length&&t(),args}
