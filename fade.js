var fade =  (el) => {
            this.out = (duration) => {
                if (!duration) {
                    duration = 400;
                }
                el.animate([
                    {opacity:1},
                    {opacity:0},
                ],{
                   duration:duration
                });

                return this;
            };
            this.in =(duration) => {
                if (!duration) {
                    duration = 400;
                }
                el.animate([
                    {opacity:0},
                    {opacity:1},
                ],{
                    duration:duration
                });

                return this;
            };
            this.toggle = (delay) => {
                if (window.getComputedStyle(el).opacity > 0) {
                    this.out(delay);
                } else {
                    this.in(delay);
                }
                return this;
            };
            return this;
        };
