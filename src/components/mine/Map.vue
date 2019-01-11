<template>
  <div id="iframe">
    <iframe class="map-item"
      id="getAddress"
      @load="loadiframe"
      src="https://m.amap.com/picker/?key=7c1cf949a29c610bd9d1525c6a8fd950"
      style="width:100%; height:100%;"></iframe>
  </div>
</template>

<script>
  export default {
    methods: {
      loadiframe() {
        let iframe = document.getElementById('getAddress').contentWindow;
        iframe.postMessage('hello', 'https://m.amap.com/picker/');
        window.addEventListener("message", function (e) {
          if (e.data.command != "COMMAND_GET_TITLE") {
            let data = e.data
            console.log(data)
            this.$emit('refres',data)
          }
        }.bind(this), false);
      },
    }
  }
</script>
<style scoped lang="less">
  .map-item {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 0;
    background: #fff;
  }
</style>
