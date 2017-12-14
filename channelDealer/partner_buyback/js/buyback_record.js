//  回购记录数据模拟
var records = [{
    noteNum: 'HG170703090567201',
    type: '可用待缴税会员豆',
    money: 2300,
    commission: 5,
    receive: '2，5485.6',
    cardNo: '6263222262626262626266',
    applyTime: '2017-02-12 09:12:02',
    state: '审核通过'
}, {
    noteNum: 'HG170703090567201',
    type: '可用待缴税会员豆',
    money: '2300',
    commission: '5',
    receive: '2，5485.6',
    cardNo: '6263222262626262626266',
    applyTime: '2017-02-12 09:12:02',
    state: '审核不通过'
}, {
    noteNum: 'HG170703090567201',
    type: '可用待缴税会员豆',
    money: '2300',
    commission: '5',
    receive: '2，5485.6',
    cardNo: '6263222262626262626266',
    applyTime: '2017-02-12 09:12:02',
    state: '审核通过'
}, {
    noteNum: 'HG170703090567201',
    type: '可用待缴税会员豆',
    money: '2300',
    commission: '5',
    receive: '2，5485.6',
    cardNo: '6263222262626262626266',
    applyTime: '2017-02-12 09:12:02',
    state: '审核通过'
}, {
    noteNum: 'HG170703090567201',
    type: '可用待缴税会员豆',
    money: '2300',
    commission: '5',
    receive: '2，5485.6',
    cardNo: '6263222262626262626266',
    applyTime: '2017-02-12 09:12:02',
    state: '审核通过'
}, {
    noteNum: 'HG170703090567201',
    type: '可用待缴税会员豆',
    money: '2300',
    commission: '5',
    receive: '2，5485.6',
    cardNo: '6263222262626262626266',
    applyTime: '2017-02-12 09:12:02',
    state: '审核通过'
}, {
    noteNum: 'HG170703090567201',
    type: '可用待缴税会员豆',
    money: '2300',
    commission: '5',
    receive: '2，5485.6',
    cardNo: '6263222262626262626266',
    applyTime: '2017-02-12 09:12:02',
    state: '审核不通过'
}, {
    noteNum: 'HG170703090567201',
    type: '可用待缴税会员豆',
    money: '2300',
    commission: '5',
    receive: '2，5485.6',
    cardNo: '6263222262626262626266',
    applyTime: '2017-02-12 09:12:02',
    state: '审核通过'
}, {
    noteNum: 'HG170703090567201',
    type: '可用待缴税会员豆',
    money: '2300',
    commission: '5',
    receive: '2，5485.6',
    cardNo: '6263222262626262626266',
    applyTime: '2017-02-12 09:12:02',
    state: '审核通过'
}, {
    noteNum: 'HG170703090567201',
    type: '可用待缴税会员豆',
    money: '2300',
    commission: '5',
    receive: '2，5485.6',
    cardNo: '6263222262626262626266',
    applyTime: '2017-02-12 09:12:02',
    state: '审核通过'
}, {
    noteNum: 'HG170703090567201',
    type: '可用待缴税会员豆',
    money: '2300',
    commission: '5',
    receive: '2，5485.6',
    cardNo: '6263222262626262626266',
    applyTime: '2017-02-12 09:12:02',
    state: '审核通过'
}];

var table = Vue.extend({
    template: '<div>'+
                '<ul class="records-table">'+
                    '<li class="table-row table-caption">'+
                        '<div class="table-cell">订单申请号</div>'+
                        '<div class="table-cell">回购类型</div>'+
                        '<div class="table-cell">回购金额</div>'+
                        '<div class="table-cell">手续费</div>'+
                        '<div class="table-cell">实际到账</div>'+
                        '<div class="table-cell">银行卡号</div>'+
                        '<div class="table-cell">申请时间</div>'+
                        '<div class="table-cell">审核状态</div>'+
                        '<div class="table-cell">查看</div>'+
                    '</li>'+
                    '<li class="table-row" v-for="records in recordsData">'+
                        '<div class="table-cell" v-text="records.noteNum"></div>'+
                        '<div class="table-cell" v-text="records.type"></div>'+
                        '<div class="table-cell" v-text="records.money"></div>'+
                        '<div class="table-cell" v-text="records.commission"></div>'+
                        '<div class="table-cell" v-text="records.receive"></div>'+
                        '<div class="table-cell" v-text="records.cardNo"></div>'+
                        '<div class="table-cell" v-text="records.applyTime"></div>'+
                        '<div class="table-cell" v-text="records.state"></div>'+
                        '<div class="table-cell"></div>'+
                    '</li>'+
                '</ul>'+
                '<div class="page">'+
                    '<a class="btn-prev" @click="currentPage = currentPage == 1 ? 1: currentPage-1"></a>'+
                    '<div class="current-page" v-text="currentPage"></div>'+
                    '<a class="btn-next" @click="currentPage = currentPage+1"></a>'+
                    '<input type="text" class="to-page" >页'+
                    '<a class="btn-confirm">确认</a>'+
                '</div>'+
            '</div>',
    data: function data() {
        return {
            currentPage: 1,
            recordsData: records
        };
    }
});
new table().$mount('.table-block');

laydate.render({
    elem: '#datetime',
    type: 'datetime',
    format: 'yyyy-MM-dd HH:MM:ss'
});