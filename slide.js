let slide = (el) => {
    let setup = function (delay) {
        window.clearInterval();
        let heightDefault = el.offsetHeight;
        return el.style.cssText =
            "display:block;overflow:hidden;transition: transform " + delay + "ms ease-in-out;";//
    };
    this.effect = true;
    this.up = (delay) => {
        if (!delay) {
            delay = 200;
        }
        setup(delay);
        let padT = Number(window.getComputedStyle(el).paddingBottom.replace("px", ""));
        let padB = Number(window.getComputedStyle(el).paddingTop.replace("px", ""));
        let pad = padT + padB, i = 0, pMinusBottom = padB, pMinusTop = padT;
        let heightDefault = el.offsetHeight - pad, ItemHeightCollapse = heightDefault;
        let itemStyle = el.style;
        itemStyle.paddingTop = 0;
        el.dataset.slide = "up";
        let slideUp = () => {
            i += Math.PI;
            ItemHeightCollapse -= heightDefault * Math.PI / delay;
            pMinusBottom -= padB * Math.PI / delay;
            pMinusTop -= padT * Math.PI / delay;
            itemStyle.paddingBottom = pMinusBottom + "px";
            itemStyle.paddingTop = pMinusTop + "px";
            itemStyle.height = ItemHeightCollapse + "px";
            if (i >= delay) {
                itemStyle.cssText = "display:none";
                window.clearInterval(run);
            }

        };
        let run = setInterval(slideUp, "fast");
        return this;
    };
    this.down = (delay) => {
        if (!delay) {
            delay = 200;
        }
        this.effect = false;
        setup(delay);
        let padT = Number(window.getComputedStyle(el).paddingBottom.replace("px", ""));
        let padB = Number(window.getComputedStyle(el).paddingTop.replace("px", ""));
        let heightDefault = Number(window.getComputedStyle(el).height.replace("px", "")),
            ItemHeightCollapse = 0, i = 0
            , pad = padT + padB, pPlusTop = 0, pPlusBottom = 0,
            itemStyle = el.style;
        itemStyle.height = 0;
        itemStyle.paddingTop = 0;
        itemStyle.paddingBottom = 0;
        el.dataset.slide = "down";

        let slideDown = () => {
            i += Math.PI;
            ItemHeightCollapse += heightDefault * Math.PI / delay;
            pPlusBottom += padB * Math.PI / delay;
            pPlusTop += padT * Math.PI / delay;
            itemStyle.paddingBottom = pPlusBottom + "px";
            itemStyle.paddingTop = pPlusTop + "px";
            itemStyle.height = ItemHeightCollapse + "px";
            if (i >= delay) {
                itemStyle.cssText = "display:block";
                window.clearInterval(run);
            }

        };
        let run = setInterval(slideDown, heightDefault / delay / 100);
        return this;

    };
    this.toggle = (delay) => {
        setup(delay);
        if (el.dataset.slide === "up" || el.hasAttribute("data-slide") === false) {
            this.down(delay);
        } else if (el.dataset.slide === "down") {
            this.up(delay);
        }
        return this;
    };
    return this;
};
