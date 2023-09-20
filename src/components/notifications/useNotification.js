export default function swDev() {
  function determineAppServerKey() {
    const vapidPublicKey =
      "BFotkDwuymTvGnTXz_Y1U_vLSp4hsauebgJzKcILTZiBLKiNPxqP6dn0laN48WLTNns1IPkuiSm1NA3k6yXQQao";
    return urlBase64ToUint8Array(vapidPublicKey);
  }

  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  let swUrl = `sw.js`//${process.env.PUBLIC_URL}
  navigator.serviceWorker.register(swUrl).then((response) => {
    console.warn("response", response)

    return response.pushManager.getSubscription()
      .then(function (subscription) {
        response.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: determineAppServerKey()
        }).then(
          pushSubscription => console.log(
            JSON.stringify(pushSubscription)))
          .catch(e => console.log(e))


      })

  })
}