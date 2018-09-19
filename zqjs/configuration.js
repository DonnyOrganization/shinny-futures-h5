var SEPERATOR = '*';

var SETTING = {
    sim_server_url: 'ws://openmd.shinnytech.com/t/md/front/mobile', // 行情接口
    tr_server_url: 'ws://opentd.shinnytech.com/trade/user0', // 交易接口
    default_bid: 'S上期技术', // 默认期货公司
    reconnect_interval: 2000, // 重连时间间隔 ms
    reconnect_max_times: 5, // 最大尝试重连次数
};

var CONST = {
    inslist_cols_odd: ['last_price', 'highest', 'volume', 'pre_close'],
    inslist_cols_even: ['change', 'lowest', 'open_interest', 'open'],

    inslist_cols_name: {
        "volume_multiple": "合约乘数",
        "price_tick": "价格单位",
        "ask_price1": "卖价",
        "ask_volume1": "卖量",
        "bid_price1": "买价",
        "bid_volume1": "买量",
        "last_price": "最新价",
        "highest": "最高价",
        "lowest": "最低价",
        "amount": "成交额",
        "volume": "成交量",
        "open_interest": "持仓量",
        "pre_open_interest": "昨持仓",
        "pre_close": "昨收盘",
        "open": "今开盘",
        "close": "收盘",
        "lower_limit": "跌停",
        "upper_limit": "涨停",
        "average": "均价",
        "pre_settlement": "昨结",
        "settlement": "结算价",
        "change": "涨跌",
        "change_percent": "涨跌幅"
    },

    // K线颜色 colorname or #FF0000
    chart_color: {
        'background': "#111",
        'down': '#00FFFF',
        'up': 'red',
    },

    // 账户持仓
    userinfo_account: ['pre_balance', 'deposit', 'withdraw', 'close_profit', 'commission', 'premium', 'static_balance', 'position_profit', 'balance', 'margin', 'frozen_margin', 'frozen_commission', 'frozen_premium', 'available', 'risk_ratio'],

    // 合约详情
    pos_detail_quote: [
        'margin_per_volume',
        'commission_per_volume',
        'ask_price1',
        'bid_price1',
        'last_price',
        'highest',
        'lowest',
        'lower_limit',
        'upper_limit'
    ],
    pos_detail_quote_tools: [
        'ask_price1',
        'bid_price1',
        'last_price',
        'ask_volume1',
        'bid_volume1',
        'volume',
    ],
};
