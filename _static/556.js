(self.webpackChunkWebComponents=self.webpackChunkWebComponents||[]).push([[556],{33426:()=>{var t;!function(t){"use strict";var e=function(){function t(){this._dropEffect="move",this._effectAllowed="all",this._data={}}return Object.defineProperty(t.prototype,"dropEffect",{get:function(){return this._dropEffect},set:function(t){this._dropEffect=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"effectAllowed",{get:function(){return this._effectAllowed},set:function(t){this._effectAllowed=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"types",{get:function(){return Object.keys(this._data)},enumerable:!0,configurable:!0}),t.prototype.clearData=function(t){null!=t?delete this._data[t.toLowerCase()]:this._data={}},t.prototype.getData=function(t){return this._data[t.toLowerCase()]||""},t.prototype.setData=function(t,e){this._data[t.toLowerCase()]=e},t.prototype.setDragImage=function(t,e,i){var a=r._instance;a._imgCustom=t,a._imgOffset={x:e,y:i}},t}();t.DataTransfer=e;var r=function(){function t(){if(this._lastClick=0,t._instance)throw"DragDropTouch instance already created.";var e=!1;if(document.addEventListener("test",(function(){}),{get passive(){return e=!0,!0}}),navigator.maxTouchPoints){var r=document,i=this._touchstart.bind(this),a=this._touchmove.bind(this),s=this._touchend.bind(this),n=!!e&&{passive:!1,capture:!1};r.addEventListener("touchstart",i,n),r.addEventListener("touchmove",a,n),r.addEventListener("touchend",s),r.addEventListener("touchcancel",s)}}return t.getInstance=function(){return t._instance},t.prototype._touchstart=function(e){var r=this;if(this._shouldHandle(e)){if(Date.now()-this._lastClick<t._DBLCLICK&&this._dispatchEvent(e,"dblclick",e.target))return e.preventDefault(),void this._reset();this._reset();var i=this._closestDraggable(e.target);i&&(this._dispatchEvent(e,"mousemove",e.target)||this._dispatchEvent(e,"mousedown",e.target)||(this._dragSource=i,this._ptDown=this._getPoint(e),this._lastTouch=e,e.preventDefault(),setTimeout((function(){r._dragSource==i&&null==r._img&&r._dispatchEvent(e,"contextmenu",i)&&r._reset()}),t._CTXMENU),t._ISPRESSHOLDMODE&&(this._pressHoldInterval=setTimeout((function(){r._isDragEnabled=!0,r._touchmove(e)}),t._PRESSHOLDAWAIT))))}},t.prototype._touchmove=function(t){if(this._shouldCancelPressHoldMove(t))this._reset();else if(this._shouldHandleMove(t)||this._shouldHandlePressHoldMove(t)){var e=this._getTarget(t);if(this._dispatchEvent(t,"mousemove",e))return this._lastTouch=t,void t.preventDefault();this._dragSource&&!this._img&&this._shouldStartDragging(t)&&(this._dispatchEvent(t,"dragstart",this._dragSource),this._createImage(t),this._dispatchEvent(t,"dragenter",e)),this._img&&(this._lastTouch=t,t.preventDefault(),this._dispatchEvent(t,"drag",this._dragSource),e!=this._lastTarget&&(this._dispatchEvent(this._lastTouch,"dragleave",this._lastTarget),this._dispatchEvent(t,"dragenter",e),this._lastTarget=e),this._moveImage(t),this._isDropZone=this._dispatchEvent(t,"dragover",e))}},t.prototype._touchend=function(t){if(this._shouldHandle(t)){if(this._dispatchEvent(this._lastTouch,"mouseup",t.target))return void t.preventDefault();this._img||(this._dragSource=null,this._dispatchEvent(this._lastTouch,"click",t.target),this._lastClick=Date.now()),this._destroyImage(),this._dragSource&&(t.type.indexOf("cancel")<0&&this._isDropZone&&this._dispatchEvent(this._lastTouch,"drop",this._lastTarget),this._dispatchEvent(this._lastTouch,"dragend",this._dragSource),this._reset())}},t.prototype._shouldHandle=function(t){return t&&!t.defaultPrevented&&t.touches&&t.touches.length<2},t.prototype._shouldHandleMove=function(e){return!t._ISPRESSHOLDMODE&&this._shouldHandle(e)},t.prototype._shouldHandlePressHoldMove=function(e){return t._ISPRESSHOLDMODE&&this._isDragEnabled&&e&&e.touches&&e.touches.length},t.prototype._shouldCancelPressHoldMove=function(e){return t._ISPRESSHOLDMODE&&!this._isDragEnabled&&this._getDelta(e)>t._PRESSHOLDMARGIN},t.prototype._shouldStartDragging=function(e){var r=this._getDelta(e);return r>t._THRESHOLD||t._ISPRESSHOLDMODE&&r>=t._PRESSHOLDTHRESHOLD},t.prototype._reset=function(){this._destroyImage(),this._dragSource=null,this._lastTouch=null,this._lastTarget=null,this._ptDown=null,this._isDragEnabled=!1,this._isDropZone=!1,this._dataTransfer=new e,clearInterval(this._pressHoldInterval)},t.prototype._getPoint=function(t,e){return t&&t.touches&&(t=t.touches[0]),{x:e?t.pageX:t.clientX,y:e?t.pageY:t.clientY}},t.prototype._getDelta=function(e){if(t._ISPRESSHOLDMODE&&!this._ptDown)return 0;var r=this._getPoint(e);return Math.abs(r.x-this._ptDown.x)+Math.abs(r.y-this._ptDown.y)},t.prototype._getTarget=function(t){for(var e=this._getPoint(t),r=document.elementFromPoint(e.x,e.y);r&&"none"==getComputedStyle(r).pointerEvents;)r=r.parentElement;return r},t.prototype._createImage=function(e){this._img&&this._destroyImage();var r=this._imgCustom||this._dragSource;if(this._img=r.cloneNode(!0),this._copyStyle(r,this._img),this._img.style.top=this._img.style.left="-9999px",!this._imgCustom){var i=r.getBoundingClientRect(),a=this._getPoint(e);this._imgOffset={x:a.x-i.left,y:a.y-i.top},this._img.style.opacity=t._OPACITY.toString()}this._moveImage(e),document.body.appendChild(this._img)},t.prototype._destroyImage=function(){this._img&&this._img.parentElement&&this._img.parentElement.removeChild(this._img),this._img=null,this._imgCustom=null},t.prototype._moveImage=function(t){var e=this;requestAnimationFrame((function(){if(e._img){var r=e._getPoint(t,!0),i=e._img.style;i.position="absolute",i.pointerEvents="none",i.zIndex="999999",i.left=Math.round(r.x-e._imgOffset.x)+"px",i.top=Math.round(r.y-e._imgOffset.y)+"px"}}))},t.prototype._copyProps=function(t,e,r){for(var i=0;i<r.length;i++){var a=r[i];t[a]=e[a]}},t.prototype._copyStyle=function(e,r){if(t._rmvAtts.forEach((function(t){r.removeAttribute(t)})),e instanceof HTMLCanvasElement){var i=e,a=r;a.width=i.width,a.height=i.height,a.getContext("2d").drawImage(i,0,0)}for(var s=getComputedStyle(e),n=0;n<s.length;n++){var o=s[n];o.indexOf("transition")<0&&(r.style[o]=s[o])}for(r.style.pointerEvents="none",n=0;n<e.children.length;n++)this._copyStyle(e.children[n],r.children[n])},t.prototype._dispatchEvent=function(e,r,i){if(e&&i){var a=document.createEvent("Event"),s=e.touches?e.touches[0]:e;return a.initEvent(r,!0,!0),a.button=0,a.which=a.buttons=1,this._copyProps(a,e,t._kbdProps),this._copyProps(a,s,t._ptProps),a.dataTransfer=this._dataTransfer,i.dispatchEvent(a),a.defaultPrevented}return!1},t.prototype._closestDraggable=function(t){for(;t;t=t.parentElement)if(t.hasAttribute("draggable")&&t.draggable)return t;return null},t}();r._instance=new r,r._THRESHOLD=5,r._OPACITY=.5,r._DBLCLICK=500,r._CTXMENU=900,r._ISPRESSHOLDMODE=!1,r._PRESSHOLDAWAIT=400,r._PRESSHOLDMARGIN=25,r._PRESSHOLDTHRESHOLD=0,r._rmvAtts="id,class,style,draggable".split(","),r._kbdProps="altKey,ctrlKey,metaKey,shiftKey".split(","),r._ptProps="pageX,pageY,clientX,clientY,screenX,screenY,offsetX,offsetY".split(","),t.DragDropTouch=r}(t||(t={}))},78273:()=>{$.i18n().load({en:{msg_dragndrop_correct_answer:"You are correct!",msg_dragndrop_incorrect_answer:"Incorrect. You got $1 correct and $2 incorrect out of $3. You left $4 blank.",msg_dragndrop_check_me:"Check me",msg_dragndrop_reset:"Reset"}})},26254:()=>{$.i18n().load({"pt-br":{msg_dragndrop_correct_answer:"Correto!",msg_dragndrop_incorrect_answer:"Incorreto. Você teve $1 correto(s) e $2 incorreto(s) de $3. Você deixou $4 em branco.",msg_dragndrop_check_me:"Verificar",msg_dragndrop_reset:"Resetar"}})},42556:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>s});var i=r(2568);r(78273),r(26254),r(33426);class a extends i.Z{constructor(t){super(t);var e=t.orig;this.origElem=e,this.divid=e.id,this.useRunestoneServices=t.useRunestoneServices,this.random=!1,$(this.origElem).is("[data-random]")&&(this.random=!0),this.feedback="",this.dragPairArray=[],this.question="",this.populate(),this.createNewElements(),this.caption="Drag-N-Drop",this.addCaption("runestone"),"undefined"!=typeof Prism&&Prism.highlightAllUnder(this.containerDiv)}populate(){for(var t=0;t<this.origElem.childNodes.length;t++)if("dropzone"===$(this.origElem.childNodes[t]).data("subcomponent")){var e=$(this.origElem).find(`#${$(this.origElem.childNodes[t]).attr("for")}`)[0],r=document.createElement("span");r.innerHTML=e.innerHTML,r.id=this.divid+e.id,$(r).attr("draggable","true"),$(r).addClass("draggable-drag");var i=document.createElement("span");i.innerHTML=this.origElem.childNodes[t].innerHTML,$(i).addClass("draggable-drop"),this.setEventListeners(r,i);var a=[];a.push(r),a.push(i),this.dragPairArray.push(a)}else"question"===$(this.origElem.childNodes[t]).data("subcomponent")?this.question=this.origElem.childNodes[t].innerHTML:"feedback"===$(this.origElem.childNodes[t]).data("subcomponent")&&(this.feedback=this.origElem.childNodes[t].innerHTML)}createNewElements(){this.containerDiv=document.createElement("div"),this.containerDiv.id=this.divid,$(this.containerDiv).addClass("draggable-container"),$(this.containerDiv).html(this.question),this.containerDiv.appendChild(document.createElement("br")),this.dragDropWrapDiv=document.createElement("div"),$(this.dragDropWrapDiv).css("display","block"),this.containerDiv.appendChild(this.dragDropWrapDiv),this.draggableDiv=document.createElement("div"),$(this.draggableDiv).addClass("rsdraggable dragzone"),this.addDragDivListeners(),this.dropZoneDiv=document.createElement("div"),$(this.dropZoneDiv).addClass("rsdraggable"),this.dragDropWrapDiv.appendChild(this.draggableDiv),this.dragDropWrapDiv.appendChild(this.dropZoneDiv),this.createButtons(),this.checkServer("dragNdrop",!0),eBookConfig.practice_mode&&this.finishSettingUp(),self=this,self.queueMathJax(self.containerDiv)}finishSettingUp(){this.appendReplacementSpans(),this.renderFeedbackDiv(),$(this.origElem).replaceWith(this.containerDiv),this.hasStoredDropzones||(this.minheight=$(this.draggableDiv).height()),this.draggableDiv.style.minHeight=this.minheight.toString()+"px",$(this.dropZoneDiv).height()>this.minheight?this.dragDropWrapDiv.style.minHeight=$(this.dropZoneDiv).height().toString()+"px":this.dragDropWrapDiv.style.minHeight=this.minheight.toString()+"px"}addDragDivListeners(){let t=this;this.draggableDiv.addEventListener("dragover",function(t){t.preventDefault(),$(this.draggableDiv).hasClass("possibleDrop")||$(this.draggableDiv).addClass("possibleDrop")}.bind(this)),this.draggableDiv.addEventListener("drop",function(e){t.isAnswered=!0,e.preventDefault(),$(this.draggableDiv).hasClass("possibleDrop")&&$(this.draggableDiv).removeClass("possibleDrop");var r=e.dataTransfer.getData("draggableID"),i=document.getElementById(r);$(this.draggableDiv).has(i).length||this.strangerDanger(i)||this.draggableDiv.appendChild(i)}.bind(this)),this.draggableDiv.addEventListener("dragleave",function(t){$(this.draggableDiv).hasClass("possibleDrop")&&$(this.draggableDiv).removeClass("possibleDrop")}.bind(this))}createButtons(){this.buttonDiv=document.createElement("div"),this.submitButton=document.createElement("button"),this.submitButton.textContent=$.i18n("msg_dragndrop_check_me"),$(this.submitButton).attr({class:"btn btn-success drag-button",name:"do answer",type:"button"}),this.submitButton.onclick=function(){this.checkCurrentAnswer(),this.renderFeedback(),this.logCurrentAnswer()}.bind(this),this.resetButton=document.createElement("button"),this.resetButton.textContent=$.i18n("msg_dragndrop_reset"),$(this.resetButton).attr({class:"btn btn-default drag-button drag-reset",name:"do answer"}),this.resetButton.onclick=function(){this.resetDraggables()}.bind(this),this.buttonDiv.appendChild(this.submitButton),this.buttonDiv.appendChild(this.resetButton),this.containerDiv.appendChild(this.buttonDiv)}appendReplacementSpans(){this.createIndexArray(),this.randomizeIndexArray();for(let t=0;t<this.dragPairArray.length;t++)this.hasStoredDropzones?$.inArray(this.indexArray[t][0],this.pregnantIndexArray)<0&&this.draggableDiv.appendChild(this.dragPairArray[this.indexArray[t]][0]):this.draggableDiv.appendChild(this.dragPairArray[this.indexArray[t]][0]);this.random?this.randomizeIndexArray():this.createIndexArray();for(let t=0;t<this.dragPairArray.length;t++)this.hasStoredDropzones&&"-1"!==this.pregnantIndexArray[this.indexArray[t]]&&this.dragPairArray[this.indexArray[t]][1].appendChild(this.dragPairArray[this.pregnantIndexArray[this.indexArray[t]]][0]),this.dropZoneDiv.appendChild(this.dragPairArray[this.indexArray[t]][1])}setEventListeners(t,e){let r=this;t.addEventListener("dragstart",(function(t){t.dataTransfer.setData("draggableID",t.target.id)})),t.addEventListener("dragover",(function(t){t.preventDefault()})),t.addEventListener("drop",function(t){r.isAnswered=!0,t.preventDefault();var e=t.dataTransfer.getData("draggableID"),i=document.getElementById(e);this.hasNoDragChild(t.target)&&i!=t.target&&!this.strangerDanger(i)&&this.draggableDiv.appendChild(i)}.bind(this)),e.addEventListener("dragover",function(t){r.isAnswered=!0,t.preventDefault(),$(t.target).hasClass("possibleDrop")||$(t.target).hasClass("draggable-drop")&&this.hasNoDragChild(t.target)&&$(t.target).addClass("possibleDrop")}.bind(this)),e.addEventListener("dragleave",(function(t){r.isAnswered=!0,t.preventDefault(),$(t.target).hasClass("possibleDrop")&&$(t.target).removeClass("possibleDrop")})),e.addEventListener("drop",function(t){r.isAnswered=!0,t.preventDefault(),$(t.target).hasClass("possibleDrop")&&$(t.target).removeClass("possibleDrop");var e=t.dataTransfer.getData("draggableID"),i=document.getElementById(e);$(t.target).hasClass("draggable-drop")&&this.hasNoDragChild(t.target)&&!this.strangerDanger(i)&&t.target.appendChild(i)}.bind(this))}renderFeedbackDiv(){this.feedBackDiv||(this.feedBackDiv=document.createElement("div"),this.feedBackDiv.id=this.divid+"_feedback",this.containerDiv.appendChild(document.createElement("br")),this.containerDiv.appendChild(this.feedBackDiv))}strangerDanger(t){for(var e=!0,r=0;r<this.dragPairArray.length;r++)t===this.dragPairArray[r][0]&&(e=!1);return e}hasNoDragChild(t){for(var e=0,r=0;r<t.childNodes.length;r++)"true"===$(t.childNodes[r]).attr("draggable")&&e++;return!(e>=1)}createIndexArray(){this.indexArray=[];for(var t=0;t<this.dragPairArray.length;t++)this.indexArray.push(t)}randomizeIndexArray(){for(var t,e,r=this.indexArray.length;0!==r;)e=Math.floor(Math.random()*r),r-=1,t=this.indexArray[r],this.indexArray[r]=this.indexArray[e],this.indexArray[e]=t}resetDraggables(){for(var t=0;t<this.dragPairArray.length;t++)for(var e=0;e<this.dragPairArray[t][1].childNodes.length;e++)"true"===$(this.dragPairArray[t][1].childNodes[e]).attr("draggable")&&this.draggableDiv.appendChild(this.dragPairArray[t][1].childNodes[e]);this.feedBackDiv.style.display="none"}checkCurrentAnswer(){this.correct=!0,this.unansweredNum=0,this.incorrectNum=0,this.dragNum=this.dragPairArray.length;for(var t=0;t<this.dragPairArray.length;t++)$(this.dragPairArray[t][1]).has(this.dragPairArray[t][0]).length||(this.correct=!1,this.incorrectNum++),this.hasNoDragChild(this.dragPairArray[t][1])&&(this.unansweredNum++,this.incorrectNum-=1);this.correctNum=this.dragNum-this.incorrectNum-this.unansweredNum,this.percent=this.correctNum/this.dragPairArray.length,this.setLocalStorage({correct:this.correct?"T":"F"})}async logCurrentAnswer(t){let e=this.pregnantIndexArray.join(";"),r={event:"dragNdrop",act:e,answer:e,min_height:Math.round(this.minheight),div_id:this.divid,correct:this.correct,correctNum:this.correctNum,dragNum:this.dragNum};void 0!==t&&(r.sid=t),await this.logBookEvent(r)}renderFeedback(){for(var t=0;t<this.dragPairArray.length;t++)$(this.dragPairArray[t][1]).has(this.dragPairArray[t][0]).length?$(this.dragPairArray[t][1]).removeClass("drop-incorrect"):$(this.dragPairArray[t][1]).addClass("drop-incorrect");if(this.feedBackDiv||this.renderFeedbackDiv(),this.feedBackDiv.style.display="block",this.correct){var e=$.i18n("msg_dragndrop_correct_answer");$(this.feedBackDiv).html(e),$(this.feedBackDiv).attr("class","alert alert-info draggable-feedback")}else{var r=$.i18n($.i18n("msg_dragndrop_incorrect_answer"),this.correctNum,this.incorrectNum,this.dragNum,this.unansweredNum);$(this.feedBackDiv).html(r+" "+this.feedback),$(this.feedBackDiv).attr("class","alert alert-danger draggable-feedback")}}restoreAnswers(t){this.hasStoredDropzones=!0,this.minheight=t.min_height,this.pregnantIndexArray=t.answer.split(";"),this.finishSettingUp()}checkLocalStorage(){if(!this.graderactive){var t;if(this.hasStoredDropzones=!1,localStorage.length>0){var e=localStorage.getItem(this.localStorageKey());if(null!==e){this.hasStoredDropzones=!0;try{t=JSON.parse(e),this.minheight=t.min_height}catch(t){return console.log(t.message),localStorage.removeItem(this.localStorageKey()),this.hasStoredDropzones=!1,void this.finishSettingUp()}if(this.pregnantIndexArray=t.answer.split(";"),this.useRunestoneServices){var r=this.pregnantIndexArray.join(";");this.logBookEvent({event:"dragNdrop",act:r,answer:r,min_height:Math.round(this.minheight),div_id:this.divid,correct:t.correct})}}}this.finishSettingUp()}}setLocalStorage(t){if(void 0===t.answer){this.pregnantIndexArray=[];for(var e=0;e<this.dragPairArray.length;e++)if(this.hasNoDragChild(this.dragPairArray[e][1]))this.pregnantIndexArray.push(-1);else for(var r=0;r<this.dragPairArray.length;r++)$(this.dragPairArray[e][1]).has(this.dragPairArray[r][0]).length&&this.pregnantIndexArray.push(r)}var i=new Date,a=t.correct,s={answer:this.pregnantIndexArray.join(";"),min_height:this.minheight,timestamp:i,correct:a};localStorage.setItem(this.localStorageKey(),JSON.stringify(s))}disableInteraction(){$(this.resetButton).hide();for(var t=0;t<this.dragPairArray.length;t++)$(this.dragPairArray[t][0]).attr("draggable","false"),$(this.dragPairArray[t][0]).css("cursor","initial")}}$(document).on("runestone:login-complete",(function(){$("[data-component=dragndrop]").each((function(t){var e={orig:this,useRunestoneServices:eBookConfig.useRunestoneServices};if(0==$(this).closest("[data-component=timedAssessment]").length)try{window.componentMap[this.id]=new a(e)}catch(t){console.log(`Error rendering DragNDrop Problem ${this.id}`)}}))}));class s extends a{constructor(t){super(t),this.finishSettingUp(),this.renderTimedIcon(this.containerDiv),this.hideButtons()}hideButtons(){$(this.submitButton).hide()}renderTimedIcon(t){var e=document.createElement("div"),r=document.createElement("img");$(r).attr({src:"../_static/clock.png",style:"width:15px;height:15px"}),e.className="timeTip",e.title="",e.appendChild(r),$(t).prepend(e)}checkCorrectTimed(){switch(this.unansweredNum===this.dragPairArray.length&&(this.correct=null),this.correct){case!0:return"T";case!1:return"F";default:return null}}hideFeedback(){$(this.feedBackDiv).hide()}}void 0===window.component_factory&&(window.component_factory={}),window.component_factory.dragndrop=function(t){return t.timed?new s(t):new a(t)}}}]);
//# sourceMappingURL=556.js.map