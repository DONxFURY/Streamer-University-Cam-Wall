const container=document.getElementById('streams');

STREAMS.forEach(item=>{
    const wrapper=document.createElement('div');

    if(item.trim().startsWith('<iframe')){
        wrapper.innerHTML=item;
        const f=wrapper.querySelector('iframe');
        if(f && !f.hasAttribute('allowfullscreen')) f.setAttribute('allowfullscreen','true');
        container.appendChild(wrapper);
    }else{
        const iframe=document.createElement('iframe');
        iframe.src=item.replaceAll('YOURNAME.github.io',PARENT_DOMAIN);
        iframe.allowFullscreen=true;
        iframe.scrolling='no';
        container.appendChild(iframe);
    }
});
