(self.webpackChunkdulce_alma_deco=self.webpackChunkdulce_alma_deco||[]).push([[203],{7203:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ProtectedModule:()=>q});var i=r(8583),o=r(3679),a=r(2178),n=r(7716),s=r(2458);r(9490),r(946);let c=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[s.uc,s.BQ],s.uc,s.BQ]}),e})();var l=r(6627),m=r(8046),d=r(1841),p=r(8939),u=r(2340),g=r(8944),f=r(7066);function h(e,t){if(1&e&&n._UZ(0,"mat-progress-bar",38),2&e){const e=n.oxw(2);n.Q6J("value",e.uploadProgress)}}function Z(e,t){if(1&e&&(n.TgZ(0,"div",36),n.YNc(1,h,1,1,"mat-progress-bar",37),n.qZA()),2&e){const e=n.oxw();n.xp6(1),n.Q6J("ngIf",e.uploadProgress)}}function _(e,t){1&e&&(n.TgZ(0,"span",39),n._uU(1," No se permiten numeros ni caracteres especiales "),n.qZA())}function b(e,t){1&e&&(n.TgZ(0,"span",39),n._uU(1," Este campo es obligatorio "),n.qZA())}function v(e,t){1&e&&(n.TgZ(0,"span",39),n._uU(1," Este campo es obligatorio, solo numeros positivos "),n.qZA())}const T=function(){return["/home"]},A=[{path:"",children:[{path:"",component:(()=>{class e{constructor(e,t,r,i){this._imageService=e,this.http=t,this.fb=r,this._validatorservice=i,this.imgSrc="",this.imgTemp=null,this.imgTemplate="",this.hidden=!0,this.baseUrl=u.N.baseUrl,this.formTemplate=this.fb.group({name:["",[o.kI.required,o.kI.pattern(this._validatorservice.nameLastName)]],price:["",[o.kI.required]],category:["",[o.kI.required]],description:[""],status:[""]})}ngOnInit(){this.resetForm()}validField(e){return this.formTemplate.controls[e].errors&&this.formTemplate.controls[e].touched}reset(){this.uploadProgress=null,this.uploadSub=null}showPreview(e){if(!e)return this.upImage=e,this.imgSrc="../assets/img/image_placeholder.jpg",this.selectedImage=null;const t=new FileReader;t.readAsDataURL(e),this.upImage=e,this.imgTemplate=e.name,t.onload=e=>this.imgSrc=e.target.result,t.onloadend=()=>{this.imgTemp=t.result}}get formControls(){return this.formTemplate.controls}resetForm(){this.formTemplate.reset(),this.formTemplate.setValue({name:"",price:"",category:"",description:"",status:!0}),this.imgSrc="../assets/img/image_placeholder.jpg",this.selectedImage=null,this.isSubmitted=!1,this.imgTemplate=""}sendProductsToBackend(e){this.formTemplate.invalid?this.formTemplate.markAllAsTouched():(this.hidden=!1,this.dataProductsToBackend(this.upImage,e))}dataProductsToBackend(e,t){let r=new FormData;r.append("name",this.formTemplate.get("name").value),r.append("category",this.formTemplate.get("category").value),r.append("price",this.formTemplate.get("price").value),r.append("description",this.formTemplate.get("description").value),r.append("status",this.formTemplate.get("status").value),r.append("imagen",e);const i=this.http.post(`${this.baseUrl}api/products`,r,{reportProgress:!0,observe:"events"}).pipe((0,p.x)(()=>this.reset()));this.uploadSub=i.subscribe(e=>{e.type==d.dt.UploadProgress&&(this.uploadProgress=Math.round(e.loaded/e.total*100)),e.type==d.dt.ResponseHeader&&e.ok&&(this.hidden=!0,alert("producto ok"),this.resetForm())},e=>{if(this.hidden=!0,0!==e.status){if(400===e.status||403===e.status){if(e.error.msg)return void alert(e.error.msg);if(e.error.errors)return void e.error.errors.map(e=>{e.msg.includes("Cast")||alert(e.msg),console.log(e)})}}else alert("opps!!")})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(g.C),n.Y36(d.eN),n.Y36(o.qu),n.Y36(f.o))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-admin"]],decls:77,vars:10,consts:[[1,"d-flex","justify-content-center"],[1,"card"],[1,"card-body"],[3,"formGroup","submit"],[1,"text-center"],["width","350px","height","250px",3,"src","click"],[1,"form-group"],["type","file","accept","image/*",1,"form-control",2,"display","none",3,"change"],["fileUploader",""],["mat-mini-fab","","color","primary",1,"upload-btn",3,"click"],["class","progress",4,"ngIf"],[1,"my-spinner","container","align-items-center",3,"hidden"],[1,"spinner"],["type","text","formControlName","name",1,"form-control"],["class","form-text text-danger animate__animated animate__tada ",4,"ngIf"],[1,"form-check","form-check-inline"],["type","radio","value","612106c76bee722f001fd69eNOVA","formControlName","category",1,"form-check-input"],["for","inlineRadio1",1,"form-check-label"],["type","radio","value","612106c76bee722f001fd69e","formControlName","category",1,"form-check-input"],["for","inlineRadio2",1,"form-check-label"],["type","radio","value","pintura","formControlName","category",1,"form-check-input"],["for","inlineRadio3",1,"form-check-label"],["type","radio","value","herramientas","formControlName","category",1,"form-check-input"],["for","inlineRadio4",1,"form-check-label"],["type","radio","value","trabajos","formControlName","category",1,"form-check-input"],["for","inlineRadio5",1,"form-check-label"],["type","radio","value","varios","formControlName","category",1,"form-check-input"],["for","inlineRadio6",1,"form-check-label"],["class","form-text text-danger  animate__animated animate__tada",4,"ngIf"],["type","number","formControlName","price","min","0","pattern","^[0-9]+",1,"form-control"],["class","form-text text-danger  animate__animated animate__tada ",4,"ngIf"],["type","text","formControlName","description",1,"form-control"],["type","text","formControlName","status","hidden",""],[1,"form-row","justify-content-center"],["type","submit",1,"btn","btn-success"],["type","submit","routerLinkActive","router-link-active",1,"btn","btn-success",3,"routerLink"],[1,"progress"],["class","progress-bar","mode","determinate",3,"value",4,"ngIf"],["mode","determinate",1,"progress-bar",3,"value"],[1,"form-text","text-danger","animate__animated","animate__tada"]],template:function(e,t){if(1&e){const e=n.EpF();n._UZ(0,"br"),n._UZ(1,"br"),n.TgZ(2,"div",0),n.TgZ(3,"div",1),n.TgZ(4,"div",2),n.TgZ(5,"form",3),n.NdJ("submit",function(){return t.sendProductsToBackend(t.formTemplate.value)}),n.TgZ(6,"div",4),n.TgZ(7,"img",5),n.NdJ("click",function(){return n.CHM(e),n.MAs(11).click()}),n.qZA(),n.qZA(),n.TgZ(8,"div",6),n._UZ(9,"br"),n.TgZ(10,"input",7,8),n.NdJ("change",function(e){return t.showPreview(e.target.files[0])}),n.qZA(),n.qZA(),n._uU(12),n.TgZ(13,"button",9),n.NdJ("click",function(){return n.CHM(e),n.MAs(11).click()}),n.TgZ(14,"mat-icon"),n._uU(15,"attach_file"),n.qZA(),n.qZA(),n.YNc(16,Z,2,1,"div",10),n.TgZ(17,"div",11),n._UZ(18,"div",12),n.qZA(),n._UZ(19,"br"),n._UZ(20,"br"),n._UZ(21,"br"),n.TgZ(22,"div",6),n.TgZ(23,"label"),n._uU(24,"Nombre"),n.qZA(),n._UZ(25,"input",13),n.qZA(),n.YNc(26,_,2,0,"span",14),n._UZ(27,"br"),n._UZ(28,"br"),n.TgZ(29,"div",6),n.TgZ(30,"div",15),n._UZ(31,"input",16),n.TgZ(32,"label",17),n._uU(33,"Fibro Facil"),n.qZA(),n.qZA(),n.TgZ(34,"div",15),n._UZ(35,"input",18),n.TgZ(36,"label",19),n._uU(37,"Stencil"),n.qZA(),n.qZA(),n.TgZ(38,"div",15),n._UZ(39,"input",20),n.TgZ(40,"label",21),n._uU(41,"Pintura"),n.qZA(),n.qZA(),n.TgZ(42,"div",15),n._UZ(43,"input",22),n.TgZ(44,"label",23),n._uU(45,"Herramientas"),n.qZA(),n.qZA(),n.TgZ(46,"div",15),n._UZ(47,"input",24),n.TgZ(48,"label",25),n._uU(49,"Trabajos"),n.qZA(),n.qZA(),n.TgZ(50,"div",15),n._UZ(51,"input",26),n.TgZ(52,"label",27),n._uU(53,"Varios"),n.qZA(),n.qZA(),n.qZA(),n.YNc(54,b,2,0,"span",28),n._UZ(55,"br"),n.TgZ(56,"div",6),n.TgZ(57,"label"),n._uU(58,"Precio"),n.qZA(),n._UZ(59,"input",29),n.qZA(),n.YNc(60,v,2,0,"span",30),n._UZ(61,"br"),n.TgZ(62,"div",6),n.TgZ(63,"span"),n._uU(64,"Descripcion"),n.qZA(),n.TgZ(65,"textarea",31),n._uU(66," "),n.qZA(),n.qZA(),n._UZ(67,"br"),n.TgZ(68,"div",6),n._UZ(69,"input",32),n.qZA(),n._UZ(70,"br"),n.TgZ(71,"div",33),n.TgZ(72,"div",6),n.TgZ(73,"button",34),n._uU(74,"Enviar"),n.qZA(),n.TgZ(75,"button",35),n._uU(76,"volver"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()}2&e&&(n.xp6(5),n.Q6J("formGroup",t.formTemplate),n.xp6(2),n.Q6J("src",t.imgSrc,n.LSH),n.xp6(5),n.hij(" ",t.imgTemplate||"Sin archivos."," "),n.xp6(4),n.Q6J("ngIf",t.uploadProgress),n.xp6(1),n.Q6J("hidden",t.hidden),n.xp6(9),n.Q6J("ngIf",t.validField("name")),n.xp6(28),n.Q6J("ngIf",t.validField("category")),n.xp6(6),n.Q6J("ngIf",t.validField("price")),n.xp6(15),n.Q6J("routerLink",n.DdM(9,T)))},directives:[o._Y,o.JL,o.sg,l.Hw,i.O5,o.Fj,o.JJ,o.u,o._,o.wV,o.qQ,o.c5,m.Od,m.rH,a.pW],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column}.spinner[_ngcontent-%COMP%]{width:30vh;height:30vh;border-radius:50%;border:8px solid #0000001a;border-left-color:red;margin-top:1vw;animation:spin .9s ease infinite}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}"]}),e})()},{path:"**",redirectTo:""}]}];let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[m.Bz.forChild(A)],m.Bz]}),e})(),q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[i.ez,o.u5,a.Cv,c,l.Ps,o.UX,U]]}),e})()}}]);