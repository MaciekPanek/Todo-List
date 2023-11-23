!function(){let t=document.querySelector(".main__box--top-submit"),e=document.querySelector(".main__box--top-input"),o=document.querySelector(".main__box--bottom-taskbox"),n=function(){let t=Array.from(o.querySelectorAll(".main__box--bottom-name")).map(function(t){return t.textContent});localStorage.setItem("tasks",JSON.stringify(t))},a=function(t){let e=`
    <div class="main__box--bottom-task">
    <h3 class="main__box--bottom-name">${t}</h3>
    <div class="main__box--bottom-buttons">
    <button class="main__box--bottom-edit">edit</button>
    <button class="main__box--bottom-delete">delete</button>
    </div>
    </div>
    `;o.insertAdjacentHTML("beforeend",e)};window.addEventListener("load",function(){(JSON.parse(localStorage.getItem("tasks"))||[]).forEach(function(t){a(t)})}),t.addEventListener("click",function(t){t.preventDefault();let o=e.value.trim();""!==o&&(a(o),e.value="",n())}),o.addEventListener("click",function(t){let e=t.target;if(e.classList.contains("main__box--bottom-delete"))e.closest(".main__box--bottom-task").remove(),n();else if(e.classList.contains("main__box--bottom-edit")){let t=e.closest(".main__box--bottom-task").querySelector(".main__box--bottom-name"),o=t.textContent,a=document.createElement("input");a.type="text",a.value=o,t.textContent="",t.appendChild(a),a.classList.add("main__box--top-input-hidden"),a.focus(),a.addEventListener("blur",function(){let e=a.value.trim();t.removeChild(a),""!==e?t.textContent=e:t.textContent=o,n()})}})}();
//# sourceMappingURL=index.c7a2d2a6.js.map
