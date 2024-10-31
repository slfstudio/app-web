import { useMemo } from 'react';
import WebView from 'react-native-webview';

export const WebScreen = ({ url }: { url: string }) => {
  const jsCode = useMemo(
    () => `
        (function(){
          try {
            const links = document.getElementsByTagName("a");
            for (let link of links) {
                const linkExt = link.href.split(".").pop().toLowerCase();
                if (linkExt === "pdf") {
                    link.onclick = () => {
                        window.ReactNativeWebView.postMessage(JSON.stringify({ pdfLink: link.href }));
                        return false;
                    };
                }
            }
          } catch (e) {
              window.ReactNativeWebView.postMessage(JSON.stringify({ error: e.message }));
              console.log(e);
          }
        })();
        `,
    [],
  );

  return (
    <WebView
      source={{ uri: `https://docs.google.com/viewer?url=${url}` }}
      allowFileAccess={true}
      originWhitelist={['*']}
      injectedJavaScript={jsCode}
      startInLoadingState={true}
      javaScriptEnabled
      scalesPageToFit
      style={{ flex: 1 }}
    />
  );
};
