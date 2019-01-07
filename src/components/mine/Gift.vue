<!--<template>-->
  <!--<div class="gift" @click="onBridgeReady">-->
    <!--点击支付-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--export default {-->
    <!--methods: {-->
      <!--weixinPay(data){-->
        <!--var vm= this;-->
        <!--if (typeof WeixinJSBridge == "undefined"){//微信浏览器内置对象。参考微信官方文档-->
          <!--if( document.addEventListener ){-->
            <!--document.addEventListener('WeixinJSBridgeReady', vm.onBridgeReady(data), false);-->
          <!--}else if (document.attachEvent){-->
            <!--document.attachEvent('WeixinJSBridgeReady', vm.onBridgeReady(data));-->
            <!--document.attachEvent('onWeixinJSBridgeReady',vm.onBridgeReady(data));-->
          <!--}-->
        <!--}else{-->
          <!--vm.onBridgeReady(data);-->
        <!--}-->
      <!--},-->
      <!--onBridgeReady(data){-->
        <!--var  vm = this;-->
        <!--WeixinJSBridge.invoke(-->
          <!--'getBrandWCPayRequest',{-->
            <!--debug: false,-->
            <!--"appId": 'wx073bd5e83b2932da',          //公众号名称，由商户传入-->
            <!--"timeStamp": "1395712654", //时间戳，自1970年以来的秒数-->
            <!--"nonceStr": "57e65ce69d05965ef9fb3c334659e3df",   //随机串-->
            <!--"package": "prepay_id=1499702672",-->
            <!--"signType": "MD5",   //微信签名方式：-->
            <!--"paySign": "fCidgPVjtBglpzqAAmF4ETsKflwXpO2rvKttbFKyx2O",     //微信签名-->
            <!--jsApiList: [-->
              <!--'chooseWXPay'-->
            <!--]-->
          <!--},-->
          <!--function(res){-->
            <!--alert(JSON.stringify(res))-->
            <!--// 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。-->
            <!--if(res.err_msg == "get_brand_wcpay_request:ok" ){-->
              <!--if(vm.fromRoute == 'personal'){-->
                <!--window.location.href = vm.BASE_URL + '/'-->
              <!--}else {-->
                <!--vm.confirmTry();-->
              <!--}-->
            <!--}else{-->
              <!--alert("取消支付！");-->
            <!--}-->
          <!--}-->
        <!--);-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->

<!--<style scoped lang="less">-->
  <!--.gift{-->

  <!--}-->
<!--</style>-->
