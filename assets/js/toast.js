(function(){
    const Toast = {
        init() {
            this.hideTimeout = null;
    
            this.el = document.createElement("div");
            this.el.className = "mytoast";
            document.body.appendChild(this.el);
        },
    
        show(message, state) {
            clearTimeout(this.hideTimeout);
    
            this.el.textContent = message;
            this.el.className = "mytoast mytoast--visible";
    
            if (state) {
            this.el.classList.add(`mytoast--${state}`);
            }
    
            this.hideTimeout = setTimeout(() => {
            this.el.classList.remove("mytoast--visible");
            }, 3000);
        }
    };
    
    document.addEventListener("DOMContentLoaded", () => Toast.init());

    document.querySelector("#try-app").addEventListener("click", function(){
        Toast.show("Coming soon...");
    });
    
})();