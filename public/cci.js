(function () {
    var userAgent = navigator.userAgent;
    console.log(userAgent);
    var isAndroid = userAgent.indexOf("Android") > -1 || userAgent.indexOf("adr") > -1; //
    if (!isAndroid) {
        return
    }
    var cci = {};
    cci.init = function (callback) {
        if (window.WebViewJavascriptBridge) {
            if (typeof callback === "function")
                callback();
        } else {
            document.addEventListener('WebViewJavascriptBridgeReady', function () {
                WebViewJavascriptBridge.init(function (message, responseCallback) { });
                if (callback)
                    callback();
            }, false);
        }
    }

    // 退出WebView
    cci.exit = function () {
        cci.init(function () {
            window.WebViewJavascriptBridge.callHandler('exit', null, null);
        });
    };
    // 退出登录
    cci.logout = function (message) {
        cci.init(function () {
            message = typeof message !== 'undefined' ? message : null;
            WebViewJavascriptBridge.callHandler('logout', message, null);
        })

    };

    // 登录失效，或需要登录时跳转
    cci.login = function (message) {
        cci.init(function () {
            message = typeof message !== 'undefined' ? message : null;
            WebViewJavascriptBridge.callHandler('login', message, null);
        })

    };

    // 获取用户信息
    cci.getUserInfo = function (callback) {
        cci.init(function () {
            WebViewJavascriptBridge.callHandler('getUserInfo', null, function (userInfo) {
                if (typeof callback === "function") {
                    callback(JSON.parse(userInfo || "{}"));
                }
            })
        })
    };

    // 获取位置信息 (支持三种，WGS84,BD0911（百度坐标系）,GCJ02（高德坐标系）)
    cci.getLocation = function (param, callback) {
        cci.init(function () {
            var check = param || 'wgs84'
            WebViewJavascriptBridge.callHandler('getLocationWithType', check.toUpperCase(), function (location) {
                if (typeof callback === "function")
                    callback(JSON.parse(location || "{}"));
            })
        });
    }

    // 语音转文字
    cci.speech2Text = function (callback) {
        cci.init(function () {
            WebViewJavascriptBridge.callHandler('speechRecognition', null, function (text) {
                if (callback)
                    callback(text);
            })
        })
    }

    // 设置状态栏颜色
    // 格式I #FFFFFF  #FFFFFFFF
    cci.statusBarColor = function (color) {
        cci.init(function () {
            WebViewJavascriptBridge.callHandler('statusBarColor', color, null)
        })
    }

    // 使用沉浸模式
    // true 开启，false 关闭
    cci.enableImmersiveMode = function (enable) {
        enable = enable === undefined ? true : enable
        cci.init(function () {
            WebViewJavascriptBridge.callHandler('enableImmersiveMode', enable.toString(), null)
        })
    }

    // 显示导航栏
    // true 开启，false 关闭
    cci.showToolbar = function (enable) {
        enable = enable === undefined ? true : enable
        cci.init(function () {
            WebViewJavascriptBridge.callHandler('showToolbar', enable.toString(), null)
        })
    }

    // 扫码
    cci.scanCode = function (callback) {
        cci.init(function () {
            WebViewJavascriptBridge.callHandler('scanCode', null, function (text) {
                if (callback)
                    callback(text);
            })
        })
    }

    // 拨打电话
    cci.makePhoneCall = function (phoneNumber) {
        cci.init(function () {
            WebViewJavascriptBridge.callHandler('makePhoneCall', phoneNumber, null)
        })
    }

    // 打开新浏览器，android 新的webview
    cci.openBrowser = function (url) {
        cci.init(function () {
            WebViewJavascriptBridge.callHandler('openBrowser', url, null)
        })
    }

    // 获取设备信息
    cci.getDeviceInfo = function (callback) {
        cci.init(function () {
            WebViewJavascriptBridge.callHandler('getDeviceInfo', null, function (deviceInfo) {
                if (typeof callback === "function") {
                    callback(JSON.parse(deviceInfo || "{}"));
                }
            })
        })
    }

    // 地图导航
    // 坐标系统一为 GCJ02
    //    navType: 导航类型，1，高德； 2，百度； 3，腾讯
    //    mode： mode  0（驾车）、 1（公交）、 2（步行）
    //    oLat： origin 源地址维度
    //    oLng:  origin 源地址经度
    //    oName: origin 源地址名称
    //    dLat： destination 目标地址纬度
    //    dLng:  destination 目标地址经度
    //    dName: destination 目标地址名称
    cci.mapNav = function (navObj) {
        cci.init(function () {
            WebViewJavascriptBridge.callHandler('mapNav', navObj, null)
        })
    }
    //    cci.mapNav = function(navType,mode,oLat,oLng,oName,dLat,dLng,dName){
    //        cci.init(function(){
    //           WebViewJavascriptBridge.callHandler('mapNav',"{\"navType\":"+navType+",\"mode\":"+mode+",\"oLat\":"+oLat+",\"oLng\":"+oLng+",\"oName\":\""+oName+"\",\"dLat\":"+dLat+",\"dLng\":"+dLng+",\"dName\":\""+dName+"\"}"
    //                ,null)
    //        })
    //    }

    // 复制文本到粘贴板
    cci.setPrimaryClip = function (text) {
        cci.init(function () {
            WebViewJavascriptBridge.callHandler('setPrimaryClip', text, null)
        })
    }

    // 打开微信小程序, obj 为json字符串
    // -- userName 小程序原始ID
    // -- path 可空， 默认小程序首页
    cci.openWXMiniProgram = function (obj) {
        cci.init(function () {
            WebViewJavascriptBridge.callHandler('openWXMiniProgram', obj, null)
        })
    }

    // 打开银联支付功能
    // obj 为json字符串
    cci.openPayment = function(obj,callback){
        cci.init(function(){
            WebViewJavascriptBridge.callHandler('openPayment', obj, function(result){
                if (typeof callback === "function") {
                    callback(JSON.parse(result || "{}"));
                }
            })
        })
    }

    // 车牌扫描
    cci.scanPlate = function(callback){
        cci.init(function(){
            WebViewJavascriptBridge.callHandler('scanPlate', null, function(result){
                if (typeof callback === "function") {
                    callback(JSON.parse(result || "{}"));
                }
            })
        })
    }

    window.cci = cci;
    cci.init(null);
})()
