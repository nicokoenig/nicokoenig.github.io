

var Cat = (function () {
    function Cat() {
        this.cat = document.querySelector('.cat');
        this.animationClassName = '';
        this.cat.addEventListener('animationend', (e) => {
            if(this.animationClassName) {
                e.target.classList.remove(this.animationClassName);
                this.animationClassName = '';
            }
            // e.target.classList.remove('cat--animate-top');
            // e.target.classList.remove('cat--animate-translate');
            // e.target.classList.remove('cat--animate-translate3d');
        });
    }

    Cat.prototype.addAnimationClass = function(className) {
        this.cat.classList.add(className);
        this.animationClassName = className;
    }

    Cat.prototype.triggerAnimationOne = function () {
        this.addAnimationClass('cat--one-animated');
    };
    // Cat.prototype.toggleWillChange = function () {
    //     this.cat.classList.toggle('cat--will-change');
    // };
    // Cat.prototype.toggleLegacyHack = function () {
    //     this.cat.classList.toggle('cat--legacy');
    // };
    // Cat.prototype.animateTop = function () {
    //     this.cat.classList.add('cat--animate-top');
    // };
    // Cat.prototype.animateTranslate = function () {
    //     this.cat.classList.add('cat--animate-translate');
    // };
    // Cat.prototype.animateTranslate3d = function () {
    //     this.cat.classList.add('cat--animate-translate3d');
    // };

    return Cat;
})();
var cat = new Cat();