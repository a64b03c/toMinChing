export class ComputationTime {
    constructor(qs, startTimeMs) {
        this.el = document.querySelector(qs);
            if (!this.el) {
                console.error("找不到指定的 DOM 元素。", qs);
                return;
        }
        this.startTime = startTimeMs;
        this.nowSec = [];
        this.nextSec = [];

        this.animTimeout = null;
        this.updateIntervalId = null;

        this.start();
    }

    getDiffTime() {
        let diffTime = Math.floor((Date.now() - this.startTime) / 1000);
        if (diffTime < 0) diffTime = 0;

        const convertTime = (time) => {
            const s = time % 60;
            time = Math.floor(time / 60);
            const m = time % 60;
            time = Math.floor(time / 60);
            const h = time % 24;
            time = Math.floor(time / 24);
            const d = time % 30;
            time = Math.floor(time / 30);

            return [ 
                ...String(d).padStart(5, '0').split(''),
                ...String(h).padStart(2, '0').split(''),
                ...String(m).padStart(2, '0').split(''),
                ...String(s).padStart(2, '0').split('')
            ]
        }
        this.nowSec = convertTime(diffTime);
        this.nextSec = convertTime(diffTime + 1)
    }

    update(doAnimations = false) {
        const cols = this.el.querySelectorAll("[data-col]");
        if (cols && this.nowSec.length === cols.length) {
            Array.from(cols).forEach((c, i) => {
                const next = c.querySelector(`[data-pos="next"]`);
                const prev = c.querySelector(`[data-pos="prev"]`);
                next.textContent = this.nextSec[i];
                prev.textContent = this.nowSec[i];
                if (this.nowSec[i] !== this.nextSec[i]) {
                    c.classList.add("cd__digit--roll-in");
                }
            });
        }
        clearTimeout(this.animTimeout); 
        setTimeout(this.clearAnimations.bind(this), 500);
    }

    clearAnimations() {
        if (this.el) {
            const colAnimsToClear = this.el.querySelectorAll("[data-col]");
            Array.from(colAnimsToClear).forEach(a => {
                a.classList.remove("cd__digit--roll-in");
            });
        }
    }

    start() {
        if (this.updateIntervalId) return;
        this.updateIntervalId = setInterval(() => {
            this.update(true);
            this.getDiffTime();
        }, 1000);
    }
}