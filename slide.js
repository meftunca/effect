let slide = (el) => {

            el.style.cssText="display:inline-block;overflow:hidden";
            let padT = Number(window.getComputedStyle(el).paddingBottom.replace("px", "")),
                padB = Number(window.getComputedStyle(el).paddingTop.replace("px", "")),
                heightDefault = Number(window.getComputedStyle(el).height.replace("px", "")),
                itemStyle = el.style;
            this.up = (delay) => {
                 if (!delay) {
                    delay = 400;
                }
                el.dataset.slide = "up";
                el.animate([
                    // keyframes
                    { height: heightDefault+'px',paddingTop:padT+'px',paddingBottom:padB+'px' },
                    { height: 0 ,paddingTop:0,paddingBottom:0}
                ], {
                    // timing options
                    duration: delay,
                    easing:"cubic-bezier(0.42, 0, 0.58, 1)",
                    fill:'backwards'
                    //iterations: Infinity
                });
                let timeout = setTimeout(()=>{
                    itemStyle.display = "none";
                    window.clearTimeout(timeout);
                },delay);
                return this;
            };
            this.down = (delay) => {
                 if (!delay) {
                    delay = 200;
                }
                this.effect = false;

                el.dataset.slide = "down";
                el.animate([
                    // keyframes
                    { height: 0 ,paddingTop:0,paddingBottom:0},
                    { height: heightDefault+'px',paddingTop:padT+'px',paddingBottom:padB+'px' },

                ], {
                    // timing options
                    duration: delay,
                    easing:"cubic-bezier(0.42, 0, 0.58, 1)",
                    fill:'forwards'
                    //iterations: Infinity
                });

                return this;

            };
            this.toggle = (delay) => {
                if (el.dataset.slide === "up" || el.hasAttribute("data-slide") === false) {
                    this.down(delay);
                } else if (el.dataset.slide === "down") {
                    this.up(delay);
                }
                return this;
            };
            return this;
        };
