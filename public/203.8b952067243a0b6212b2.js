(self.webpackChunkdulce_alma_deco=self.webpackChunkdulce_alma_deco||[]).push([[203],{7203:(e,r,t)=>{"use strict";t.r(r),t.d(r,{ProtectedModule:()=>U});var o=t(8583),i=t(3679),s=t(2178),n=t(7716),a=t(2458);t(9490),t(946);let c=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[a.uc,a.BQ],a.uc,a.BQ]}),e})();var l=t(6627),u=t(8046),m=t(1841),p=t(8939),d=t(9019),g=t(9822);function f(e,r){1&e&&(n.TgZ(0,"div",32),n._uU(1,"This field is required."),n.qZA())}function Z(e,r){if(1&e&&n._UZ(0,"mat-progress-bar",35),2&e){const e=n.oxw(2);n.Q6J("value",e.uploadProgress)}}function h(e,r){if(1&e&&(n.TgZ(0,"div",33),n.YNc(1,Z,1,1,"mat-progress-bar",34),n.qZA()),2&e){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",e.uploadProgress)}}function b(e,r){1&e&&(n.TgZ(0,"div",32),n._uU(1,"This field is required."),n.qZA())}function T(e,r){1&e&&(n.TgZ(0,"div",32),n._uU(1,"This field is required."),n.qZA())}function v(e,r){1&e&&(n.TgZ(0,"div",32),n._uU(1,"This field is required."),n.qZA())}const _=function(){return["/home"]},q=[{path:"",children:[{path:"",component:(()=>{class e{constructor(e,r,t){this._imageService=e,this.http=r,this.fb=t,this.imgSrc="",this.imgTemp=null,this.imgTemplate="",this.baseUrl=d.N.baseUrl,this.formTemplate=this.fb.group({name:[""],price:[""],category:[""],description:[""],status:[""]})}ngOnInit(){this.resetForm(),this.getProducts()}getProducts(){this._imageService.getProductsFromBackend()}reset(){this.uploadProgress=null,this.uploadSub=null}showPreview(e){if(!e)return this.upImage=e,this.imgSrc="../assets/img/image_placeholder.jpg",this.selectedImage=null;const r=new FileReader;r.readAsDataURL(e),this.upImage=e,this.imgTemplate=e.name,r.onload=e=>this.imgSrc=e.target.result,r.onloadend=()=>{this.imgTemp=r.result}}get formControls(){return this.formTemplate.controls}resetForm(){this.formTemplate.reset(),this.formTemplate.setValue({name:"",price:"",category:"",description:"",status:!0}),this.imgSrc="../assets/img/image_placeholder.jpg",this.selectedImage=null,this.isSubmitted=!1}sendProductsToBackend(e){this.dataProductsToBackend(this.upImage,e)}dataProductsToBackend(e,r){let t=new FormData;t.append("name",this.formTemplate.get("name").value),t.append("category",this.formTemplate.get("category").value),t.append("price",this.formTemplate.get("price").value),t.append("description",this.formTemplate.get("description").value),t.append("status",this.formTemplate.get("status").value),t.append("imagen",e);const o=this.http.post(`${this.baseUrl}/products`,t,{reportProgress:!0,observe:"events"}).pipe((0,p.x)(()=>this.reset()));this.uploadSub=o.subscribe(e=>{e.type==m.dt.UploadProgress&&(this.uploadProgress=Math.round(e.loaded/e.total*100)),e.type==m.dt.ResponseHeader&&e.ok&&(alert("producto ok"),this.reset())},e=>{if(0!==e.status){if(400===e.status||403===e.status){if(e.error.msg)return void alert(e.error.msg);if(e.error.errors){const r=e.error.errors;return r.map(e=>{e.msg.includes("Cast")||alert(e.msg),console.log(e)}),void console.log("ckecks",r)}}}else alert("opps!!")})}}return e.\u0275fac=function(r){return new(r||e)(n.Y36(g.C),n.Y36(m.eN),n.Y36(i.qu))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-admin"]],decls:76,vars:10,consts:[[1,"d-flex","justify-content-center"],[1,"card"],[1,"card-body"],[3,"formGroup","submit"],[1,"text-center"],["width","350px","height","250px",3,"src","click"],[1,"form-group"],["type","file","accept","image/*",1,"form-control",2,"display","none",3,"change"],["fileUploader",""],["class","text-danger",4,"ngIf"],["mat-mini-fab","","color","primary",1,"upload-btn",3,"click"],["class","progress",4,"ngIf"],["type","text","formControlName","name",1,"form-control"],[1,"form-check","form-check-inline"],["type","radio","value","612106c76bee722f001fd69eNOVA","formControlName","category",1,"form-check-input"],["for","inlineRadio1",1,"form-check-label"],["type","radio","value","612106c76bee722f001fd69e","formControlName","category",1,"form-check-input"],["for","inlineRadio2",1,"form-check-label"],["type","radio","value","pintura","formControlName","category",1,"form-check-input"],["for","inlineRadio3",1,"form-check-label"],["type","radio","value","herramientas","formControlName","category",1,"form-check-input"],["for","inlineRadio4",1,"form-check-label"],["type","radio","value","trabajos","formControlName","category",1,"form-check-input"],["for","inlineRadio5",1,"form-check-label"],["type","radio","value","varios","formControlName","category",1,"form-check-input"],["for","inlineRadio6",1,"form-check-label"],["type","text","formControlName","price",1,"form-control"],["type","text","formControlName","description",1,"form-control"],["type","text","formControlName","status","hidden",""],[1,"form-row","justify-content-center"],["type","submit",1,"btn","btn-success"],["type","submit","routerLinkActive","router-link-active",1,"btn","btn-success",3,"routerLink"],[1,"text-danger"],[1,"progress"],["class","progress-bar","mode","determinate",3,"value",4,"ngIf"],["mode","determinate",1,"progress-bar",3,"value"]],template:function(e,r){if(1&e){const e=n.EpF();n._UZ(0,"br"),n._UZ(1,"br"),n.TgZ(2,"div",0),n.TgZ(3,"div",1),n.TgZ(4,"div",2),n.TgZ(5,"form",3),n.NdJ("submit",function(){return r.sendProductsToBackend(r.formTemplate.value)}),n.TgZ(6,"div",4),n.TgZ(7,"img",5),n.NdJ("click",function(){return n.CHM(e),n.MAs(11).click()}),n.qZA(),n.qZA(),n.TgZ(8,"div",6),n._UZ(9,"br"),n.TgZ(10,"input",7,8),n.NdJ("change",function(e){return r.showPreview(e.target.files[0])}),n.qZA(),n.YNc(12,f,2,0,"div",9),n.qZA(),n._uU(13),n.TgZ(14,"button",10),n.NdJ("click",function(){return n.CHM(e),n.MAs(11).click()}),n.TgZ(15,"mat-icon"),n._uU(16,"attach_file"),n.qZA(),n.qZA(),n.YNc(17,h,2,1,"div",11),n._UZ(18,"br"),n._UZ(19,"br"),n._UZ(20,"br"),n.TgZ(21,"div",6),n.TgZ(22,"label"),n._uU(23,"Nombre"),n.qZA(),n._UZ(24,"input",12),n.YNc(25,b,2,0,"div",9),n.qZA(),n._UZ(26,"br"),n._UZ(27,"br"),n.TgZ(28,"div",6),n.TgZ(29,"div",13),n._UZ(30,"input",14),n.TgZ(31,"label",15),n._uU(32,"Fibro Facil"),n.qZA(),n.qZA(),n.TgZ(33,"div",13),n._UZ(34,"input",16),n.TgZ(35,"label",17),n._uU(36,"Stencil"),n.qZA(),n.qZA(),n.TgZ(37,"div",13),n._UZ(38,"input",18),n.TgZ(39,"label",19),n._uU(40,"Pintura"),n.qZA(),n.qZA(),n.TgZ(41,"div",13),n._UZ(42,"input",20),n.TgZ(43,"label",21),n._uU(44,"Herramientas"),n.qZA(),n.qZA(),n.TgZ(45,"div",13),n._UZ(46,"input",22),n.TgZ(47,"label",23),n._uU(48,"Trabajos"),n.qZA(),n.qZA(),n.TgZ(49,"div",13),n._UZ(50,"input",24),n.TgZ(51,"label",25),n._uU(52,"Varios"),n.qZA(),n.qZA(),n.qZA(),n._UZ(53,"br"),n.TgZ(54,"div",6),n.TgZ(55,"label"),n._uU(56,"Precio"),n.qZA(),n._UZ(57,"input",26),n.YNc(58,T,2,0,"div",9),n.qZA(),n._UZ(59,"br"),n.TgZ(60,"div",6),n.TgZ(61,"span"),n._uU(62,"Descripcion"),n.qZA(),n.TgZ(63,"textarea",27),n._uU(64," "),n.qZA(),n.YNc(65,v,2,0,"div",9),n.qZA(),n._UZ(66,"br"),n.TgZ(67,"div",6),n._UZ(68,"input",28),n.qZA(),n._UZ(69,"br"),n.TgZ(70,"div",29),n.TgZ(71,"div",6),n.TgZ(72,"button",30),n._uU(73,"Enviar"),n.qZA(),n.TgZ(74,"button",31),n._uU(75,"volver"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()}2&e&&(n.xp6(5),n.Q6J("formGroup",r.formTemplate),n.xp6(2),n.Q6J("src",r.imgSrc,n.LSH),n.xp6(5),n.Q6J("ngIf",r.isSubmitted&&(null==r.formControls.img.errors?null:r.formControls.img.errors.required)),n.xp6(1),n.hij(" ",r.imgTemplate||"Sin archivos."," "),n.xp6(4),n.Q6J("ngIf",r.uploadProgress),n.xp6(8),n.Q6J("ngIf",r.isSubmitted&&(null==r.formControls.caption.errors?null:r.formControls.caption.errors.required)),n.xp6(33),n.Q6J("ngIf",r.isSubmitted&&(null==r.formControls.caption.errors?null:r.formControls.caption.errors.required)),n.xp6(7),n.Q6J("ngIf",r.isSubmitted&&(null==r.formControls.caption.errors?null:r.formControls.caption.errors.required)),n.xp6(9),n.Q6J("routerLink",n.DdM(9,_)))},directives:[i._Y,i.JL,i.sg,o.O5,l.Hw,i.Fj,i.JJ,i.u,i._,u.Od,u.rH,s.pW],styles:[""]}),e})()},{path:"**",redirectTo:""}]}];let A=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[u.Bz.forChild(q)],u.Bz]}),e})(),U=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[o.ez,i.u5,s.Cv,c,l.Ps,i.UX,A]]}),e})()}}]);