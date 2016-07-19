function Emitter(){
    this.events = {};
}

Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || []; //tạo 1 property cho object events dạng array
    this.events[type].push(listener); //add 1 function listener vào property events.type[]
    // example:
    // {
    //     getSomething: [function () {}, function () {}]
    // getSomething là 'type', listener là function(){}
    // }

    //tiếp theo là hàm gọi toàn bộ listener (ở trong array kia) của attribute "type" ra
    Emitter.prototype.emit = function(type) {
        if(this.events[type]) {
            this.events[type].forEach(function(listener){
                listener();
            })
        }
    }
};
module.exports = Emitter;