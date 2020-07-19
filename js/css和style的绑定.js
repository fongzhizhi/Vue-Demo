/** 
 * 绑定css或者style属性来控制内联样式是常见的操作，由于是属性操作，使用v-bind指令就可以处理，
 * 但是绑定简单的字符串往往容易出现不可预期的如拼写错误，所以Vue专门针对class和style做了升级绑定处理：
 * 允许我们使用更灵活的对象和数组进行数据绑定：
*/
new Vue({
    el: '#app',
    data: {
        isBig: true,
        red_: 'red',
        big_: 'big',
        blue_: 'blue',
        //
        fontSize: 20,
        fontColor1: '#aca000',
        fontColor2: '#000aca',
        italic: {
            'font-style': 'italic'
        }
    },
    computed: {
        c1: function(){
            return {
                big: this.isBig,
                red: true,
            }
        },
        c2: function(){
            return {
                big: this.isBig,
                blue: true,
            }
        },
        sty1: function() {
            return {
                'font-size': this.fontSize + 'px',
                'color': this.fontColor1
            }
        },
        sty2: function() {
            return {
                'font-size': this.fontSize + 'px',
                'color': this.fontColor2
            }
        }
    }
});