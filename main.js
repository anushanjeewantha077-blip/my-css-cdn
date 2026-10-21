$=document.querySelector.bind(document),
$$=document.querySelectorAll.bind(document),
lnlink=$(".ln-link"),
lnglist=$(".lng-list"),
dropdown=$(".dropdown"),
menu=$(".menu"),
b="block",
n="none",
body=$("body"),
fq=$$(".fq"),
alert=$(".alert"),
dowb=$(".btn-submit"),
section=$$('#downloaderid,#td-section,#instructionsfeatures,#morefeatures,#faq-section'),
f="flex",
loader=$(".loader"),
resp=$(".download"),
l=["protocol","hostname","pathname"],
form=$("#inform"),
clearbt=$(".clear-bt"),
input=$("#url"),
pastebt=$(".paste-bt"),
app={
start:function(){
t=this,
d=document;
lnlink.addEventListener("click",()=>{t.lnglist();});
menu.addEventListener("click",()=>{t.drop_2();});
fq.forEach(function(e){
					e.addEventListener("click",function(){
				an=$(".an");
				if(an){if(an.id[2]==this.id[2]){an.style.display=n,an.classList.remove("an"),$(".dru-n").style.display=n,$(".dru-n").classList.remove("dru-n"),$(".drd-n").style.display=b,$(".drd-n").classList.remove("drd-n");}
				else{an.style.display=n,an.classList.remove("an"),$(".dru-n").style.display=n,$(".dru-n").classList.remove("dru-n"),$(".drd-n").style.display=b,$(".drd-n").classList.remove("drd-n");ans=$(`.ans-${this.id[2]}`);ans.style.display=b,ans.classList.add("an"),$(`.drd-${this.id[2]}`).style.display=$(`.drd-${this.id[2]}`).style.display==b?n:n,$(`.drd-${this.id[2]}`).classList.add("drd-n"),$(`.dru-${this.id[2]}`).style.display=$(`.dru-${this.id[2]}`).style.display==b?b:b,$(`.dru-${this.id[2]}`).classList.add("dru-n");}
				}
				else{ans=$(`.ans-${this.id[2]}`);ans.style.display=b,ans.classList.add("an"),$(`.drd-${this.id[2]}`).style.display=$(`.drd-${this.id[2]}`).style.display==b?n:n,$(`.drd-${this.id[2]}`).classList.add("drd-n"),$(`.dru-${this.id[2]}`).style.display=$(`.dru-${this.id[2]}`).style.display==b?b:b,$(`.dru-${this.id[2]}`).classList.add("dru-n");}
				});
						});
pastebt.addEventListener("click",()=>{t.pastebt();});
clearbt.addEventListener("click",()=>{t.clearbt();});
input.addEventListener("keyup",()=>{alert.style.display=n,clearbt.style.display=clearbt.style.display==n?b:b,pastebt.style.display=pastebt.style.display==b?n:n,input.classList.remove("f"),input.classList.add("t")});
form.addEventListener('submit',e=>{e.preventDefault();try{new URL(input.value),t.furl()}catch(error){t.alert()}});

},
alert2:function(){
    alert.innerHTML="API error",alert.style.display=b,loader.style.display=n,dowb.disabled=0;
},
lnglist:function(){
	lnglist.classList.contains("fy")?(lnglist.classList.remove("fy")):(lnglist.classList.add("fy"));
},
clearbt:function(){
alert.style.display=n,input.value="",clearbt.style.display=n?n:n,pastebt.style.display=n?b:b,input.classList.remove("t"),input.classList.add("f");
},
furl:function(){
u=new URL(input.value),t=this,x=(u[l[0]]=="https:"||u[l[0]]=="http:")&&(u[l[1]]=="www.threads.net"||u[l[1]]=="threads.net")&&u[l[2]]!=="/" ?t.action():t.alert();
},
drop_2:function(){
	dropdown.style.display=dropdown.style.display==b?n:b;
			lnglist.classList.contains("y")&&lnglist.classList.remove("y");
		},
pastebt:function(){
alert.style.display=n,navigator.clipboard.readText().then(pt=>(input.value=pt,clearbt.style.display=pt.trim()==""?n:b,pastebt.style.display=pt.trim()==""?b:n,alert.innerHTML=pt.trim()==""?"URL is empty.":"",alert.style.display=pt.trim()==""?b:n,pt.trim()==""?'':(input.classList.remove("f"),input.classList.add("t"))));
},
action:function(){
    dowb.disabled=1,loader.style.display=f,s=new XMLHttpRequest(),s.open("post","/action.php",!0),j=`{"u":"${input.value}"}`,s.onload=function(){s.status==200&&s.responseText!=0?(section.forEach(function(s){s.parentNode.removeChild(s)}),$("#dw-section").classList.add("dm"),resp.innerHTML=s.responseText,$('.wavesrc')?eval($('.wavesrc').textContent):null):t.alert2();},s.send(j);
},
alert:function(){
alert.innerHTML="Please enter a valid URL for example: <b>https://www.threads.net/@sanuikawmadhi/post/C0buZCQNrLR</b>",alert.style.display=b;
}
};
app.start();

