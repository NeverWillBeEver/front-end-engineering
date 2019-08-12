function setupWebViewJavascriptBridge(callback: any) {
  if (window.WebViewJavascriptBridge) { return callback(window.WebViewJavascriptBridge); }
  // 和iOS通信的方法
  if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
  window.WVJBCallbacks = [callback];
  const WVJBI_FRAME = document.createElement('iframe');
  WVJBI_FRAME.style.display = 'none';
  WVJBI_FRAME.src = 'https://__bridge_loaded__';
  document.documentElement.appendChild(WVJBI_FRAME);
  setTimeout(() => {
    document.documentElement.removeChild(WVJBI_FRAME);
  }, 0);
  // 和Android通信的方法
  if (window.WebViewJavascriptBridge) {
    return callback(window.WebViewJavascriptBridge);
  } else {
    document.addEventListener( 'WebViewJavascriptBridgeReady' , () => {
      callback(window.WebViewJavascriptBridge);
    }, false );
  }
}

export default {
  callHandler(name: string, data?: any, callback?: any) {
    setupWebViewJavascriptBridge((bridge: any) => {
      bridge.callHandler(name, data, callback);
    });
  },
  registerHandler(name: string, callback: any) {
    setupWebViewJavascriptBridge((bridge: any) => {
      bridge.registerHandler(name, (data: any, resCallback?: any) => {
        callback(data, resCallback);
      });
    });
  }
};
