//DefineProperty Help : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

(function () {
    Object.defineProperty(window.Node.prototype, 'active', {
        value() {
            this.classList.add("Active");
        }
    });
    Object.defineProperty(window.Node.prototype, 'unActive', {
        value() {
            this.classList.remove("Active");
        }
    });
    Object.defineProperty(window.Node.prototype, 'toggleActive', {
        value() {
            if (this.classList.contains("Active"))
                this.classList.remove("Active");
            else
                this.classList.add("Active");
        }
    });


    Object.defineProperty(window.Array.prototype, 'clone', {

        value() {
            return this.slice();
        }
    });
    Object.defineProperty(window.Array.prototype, 'where', {
        value(where) {
            let items = new Array();
            for (let i = 0; i < this.length; i++) {
                if (where(this[i]))
                    items.push(this[i]);
            }
            return items;
        }
    });
    Object.defineProperty(window.Array.prototype, 'findone', {
        value(itemReturn) {
            return this.where(itemReturn, true)[0];
        }
    });
    Object.defineProperty(window.Array.prototype, 'contains', {
        value(value) {
            for (let i = 0; i < this.length; i++) {
                if (this[i] == value)
                    return true;
            }
            return false;
        }
    });
    Object.defineProperty(window.Array.prototype, 'groupby', {
        value(keyName) {
            let groups = {};
            for (let i = 0; i < this.length; i++) {
                if (groups[this[i][keyName]] == null)
                    groups[this[i][keyName]] = [];
                groups[this[i][keyName]].push(this[i]);
            }
            return groups;
        }
    });
    Object.defineProperty(window.Array.prototype, 'max', {

        value() {
            let max = this[0];
            if (this.length > 1) {
                for (let i = 1; i < this.length; i++) {
                    if (this[i] > max)
                        max = this[i];
                }
            }
            return max;
        }
    });
    Object.defineProperty(window.Array.prototype, 'min', {
        value() {
            let min = this[0];
            if (this.length > 1) {
                for (let i = 1; i < this.length; i++) {
                    if (this[i] < min)
                        min = this[i];
                }
            }
            return min;
        }
    });
    Object.defineProperty(window.Array.prototype, 'select', {
        value(itemReturn, ignoreNull) {
            let items = new Array();
            for (let i = 0; i < this.length; i++) {
                let item = itemReturn(this[i]);
                if (ignoreNull && item == null)
                    continue;
                items.push(itemReturn(this[i]));
            }
            return items;
        }
    });


    window.Task = {
        delay(callFunction, delayMilliseconds) {
            setTimeout(callFunction, delayMilliseconds || 0);
        },
        run(callFunction) {
            setTimeout(callFunction, 0);
        }
    };
})();