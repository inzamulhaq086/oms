let addButton = document.querySelector('.addButton');
let parentDiv = document.querySelector('.parentDiv');
let totalQuestion = document.querySelector('.total-question');
let nameCount = 1
totalQuestion.innerHTML = parentDiv.children.length > 9 ?  parentDiv.children.length : '0'+ parentDiv.children.length
    addButton.addEventListener('click', function(){
        nameCount++
        let html =  `<div class="flex flex-wrap -mx-4">   
                <div class="2xl:w-1/3 w-full px-4">
                    <label class="block text-TextColor font-medium mb-1">
                        Topic<span>*</span>
                    </label>
                    <div class="w-full text-TextColor  placeholder:text-sm rounded flex">
                        <div class="rounded-l custom-select relative w-full border border-TextColor50 bg-TextColor40">
                            <i class="text-TextColor80 absolute pointer-events-none top-angleDown right-3 text-lg fa fa-angle-down font-thin"></i>
                            <select>
                                <option value="0">Department</option>
                                <option value="1">Department</option>
                                <option value="2">Department</option>
                                <option value="3">Department</option>
                                <option value="4">Department</option>
                            </select>
                        </div>
                        <button type="button" class="rounded-r text-white block bg-PrimeryColor px-2 py-13px hover:bg-PrimeryColorDark text-base font-semibold">
                            ADD
                        </button>
                    </div>
                </div>
                <div class="2xl:w-1/3 w-full px-4 mt-7 2xl:mt-0">
                    <label class="block text-TextColor font-medium mb-1">
                        Level<span class="">*</span>
                    </label>
                    <div class="flex flex-wrap -mx-4">
                        <div class="md:w-1/3 w-full px-4">
                            <div class="flex items-center border border-TextColor50 px-4 py-[14px] rounded">
                                <input type="radio" id="first${nameCount}" name="custom${nameCount}" checked="">
                                <label class="text-base text-TextColor" for="first${nameCount}">Hard</label>
                            </div>
                        </div>
                        <div class="md:w-1/3 w-full px-4 mt-7 md:mt-0">
                            <div class="flex items-center border border-TextColor50 px-4 py-[14px] rounded">
                                <input type="radio" id="second${nameCount}" name="custom${nameCount}" checked="">
                                <label class="text-base text-TextColor" for="second${nameCount}">Medium</label>
                            </div>
                        </div>
                        <div class="md:w-1/3 w-full px-4 mt-7 md:mt-0">
                            <div class="flex items-center border border-TextColor50 px-4 py-[14px] rounded">
                                <input type="radio" id="third${nameCount}" name="custom${nameCount}" checked="">
                                <label class="text-base text-TextColor" for="third${nameCount}">Easy</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="2xl:w-1/3 w-full px-4 mt-7 2xl:mt-0">
                    <label class="block text-TextColor font-medium mb-1">
                        No. Of Question<span class="">*</span>
                    </label>
                    <div class="flex flex-wrap -mx-4">
                        <div class="w-full text-TextColor  placeholder:text-sm rounded flex px-4">
                            <input class="rounded-l w-full border border-TextColor50 outline-none px-4" placeholder="00">
                            <button type="button" class="rounded-r text-white block bg-DangerColor px-2 py-13px hover:bg-PrimeryColorDark text-base font-semibold">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button class="w-7 h-7 bg-DangerColor rounded-full flex justify-center items-center text-white absolute -right-3 -top-3 deleteButton">
                <i class="fa fa-trash pointer-events-none" aria-hidden="true"></i>
            </button>`
        let newElement = document.createElement('div');
        newElement.className = 'border border-TextColor50 xl:p-7 p-5 rounded-lg relative mb-8'
        newElement.innerHTML = html;
        parentDiv.append(newElement)
        let slcItms = document.querySelectorAll('.select-items')
        let slctedItms = document.querySelectorAll('.select-selected')
        for (let i = 0; i < slctedItms.length; i++) {
            slcItms[i].remove()
            slctedItms[i].remove()
        }
        dropDownFun()
        totalQuestion.innerHTML = parentDiv.children.length > 9 ?  parentDiv.children.length : '0'+ parentDiv.children.length
    })
    parentDiv.addEventListener('click', function(ev){
        if(ev.target.classList.contains('deleteButton')){
            nameCount--
            ev.target.parentElement.remove()
            totalQuestion.innerHTML = parentDiv.children.length > 9 ?  parentDiv.children.length : '0'+ parentDiv.children.length
        }
    }) 
    
    function dropDownFun(){
        var x, i, j, l, ll, selElmnt, a, b, c;
        x = document.getElementsByClassName("custom-select");
        l = x.length;
        for (i = 0; i < l; i++) {
          selElmnt = x[i].getElementsByTagName("select")[0];
          ll = selElmnt.length;
          a = document.createElement("DIV");
        // a.classList.add('overflow-hidden', 'text-ellipsis', 'whitespace-nowrap')
          a.setAttribute("class", "select-selected");
      
          a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
          x[i].appendChild(a);
          b = document.createElement("DIV");
          b.setAttribute("class", "select-items select-hide");
          for (j = 1; j < ll; j++) {
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                var y, i, k, s, h, sl, yl;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                sl = s.length;
                h = this.parentNode.previousSibling;
                for (i = 0; i < sl; i++) {
                  if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                      y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                  }
                }
                h.click();
            });
            b.appendChild(c);
          }
          x[i].appendChild(b);
          a.addEventListener("click", function(e) {
            closeControl(this)
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
            if(window.innerHeight-e.target.getBoundingClientRect().bottom < this.nextSibling.scrollHeight){
              this.nextSibling.classList.add('dropPosTop')
              this.nextSibling.classList.remove('dropPosBottom')
            }else{
              this.nextSibling.classList.remove('dropPosTop')
              this.nextSibling.classList.add('dropPosBottom')
            }
            });
        }
      
        function closeAllSelect(elmnt) {
          if(!elmnt.target.classList.contains('select-selected')){
            closeControl(elmnt)
          }
        }
      
        function closeControl(elmnt){
          var x, y, i, xl, yl, arrNo = [];
          x = document.getElementsByClassName("select-items");
          y = document.getElementsByClassName("select-selected");
          xl = x.length;
          yl = y.length;
      
          for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
              arrNo.push(i)
            } else {
              y[i].classList.remove("select-arrow-active");
            }
          }
      
          for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
              x[i].classList.add("select-hide");
            }
          }
        }
          document.addEventListener("click", closeAllSelect);
      }
      dropDownFun()
      
      

    function app() {
    return {
        wysiwyg: null,
        init: function(el) {
            // Get el
            this.wysiwyg = el;
            // Add CSS
            this.wysiwyg.contentDocument.querySelector('head').innerHTML += `<style>
            *, ::after, ::before {box-sizing: border-box;}
            :root {tab-size: 4;}
            html {line-height: 1.15;text-size-adjust: 100%;}
            body {margin: 0px; padding: 1rem 0.5rem;}
            body {font-family: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";}
            </style>`;
            this.wysiwyg.contentDocument.designMode = "on";
        },
        format: function(cmd, param) {
            this.wysiwyg.contentDocument.execCommand(cmd, !1, param||null)
        }
    }
}