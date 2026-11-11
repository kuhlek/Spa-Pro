const h=document.querySelector("header"),n=document.querySelector("nav");
const sc=()=>h.classList.toggle("solid",scrollY>60);addEventListener("scroll",sc);sc();
document.querySelector(".burger").onclick=()=>n.classList.toggle("open");
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
document.querySelectorAll("[data-n]").forEach(el=>{const t=+el.dataset.n;let c=0;const s=setInterval(()=>{c+=Math.ceil(t/40);if(c>=t){c=t;clearInterval(s)}el.textContent=c+(el.dataset.s||"")},40)});
const q=document.querySelectorAll(".qs>div");if(q.length){let i=0;const d=document.querySelector(".dots");q.forEach((_,k)=>{const b=document.createElement("b");b.onclick=()=>go(k);d.appendChild(b)});
function go(k){i=k;q.forEach((e,j)=>e.style.display=j==k?"block":"none");[...d.children].forEach((b,j)=>b.className=j==k?"on":"")}go(0);setInterval(()=>go((i+1)%q.length),6000)}
const m=document.createElement("div");m.className="mdl";m.innerHTML='<div class="mbox"><div class="art" id="ma"></div><div class="mb"><button class="x" aria-label="Close">&times;</button><span class="eyebrow left" id="mk"></span><h3 id="mt"></h3><p id="md"></p><ul id="ml"></ul><a class="btn fill" href="booking.html">Book this space</a></div></div>';document.body.appendChild(m);
document.querySelectorAll(".tile").forEach(t=>t.onclick=()=>{mt.textContent=t.dataset.t;mk.textContent=t.dataset.k;md.textContent=t.dataset.d;ml.innerHTML=t.dataset.f.split("|").map(x=>"<li>"+x+"</li>").join("");ma.className="art "+t.dataset.c;m.classList.add("on")});
m.onclick=e=>{if(e.target==m||e.target.className=="x")m.classList.remove("on")};addEventListener("keydown",e=>e.key=="Escape"&&m.classList.remove("on"));
const d=document.querySelector("input[type=date]");if(d)d.min=new Date().toISOString().split("T")[0];
document.querySelectorAll("form").forEach(f=>f.addEventListener("submit",async e=>{e.preventDefault();const er=f.querySelector(".err");
const bad=[...f.querySelectorAll("[required]")].find(x=>!x.value.trim()||(x.type=="checkbox"&&!x.checked));
if(bad){er.textContent="Please complete the highlighted field: "+(bad.name||"required");bad.focus();return}
const b=f.querySelector("button");b.textContent="Sending...";try{await fetch(f.action,{method:"POST",body:new FormData(f)})}catch(x){}
f.innerHTML='<div style="text-align:center;padding:3rem 0"><span class="ic" style="font-size:3rem;color:var(--gold)">&#10022;</span><h3>Thank you</h3><p class="sub" style="margin-top:1rem">Your request has been received. A member of our concierge team will confirm within 2 hours during opening times.</p></div>'}));