'use strict';

function JsQRScannerReady() {
	window.dispatchEvent(new CustomEvent('scannerReady'));
}