1. dom 操作
	```
	var element = document.createElement('div');
	element.setAttribute('id', 'ele-id');
	element.innerText = 'hhh';
	element.innerHTML = '<div>test</div>';
	document.body.appendChild(element);
	document.body.removeChild(element);
	```

2. canvas 获取 video 的缩略图
	```
	const video = document.getElementById('videoPreview');
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	const imgHeight = video.videoHeight;
	const imgWidth = video.videoWidth;
	ctx.drawImage(video, 0, 0, imgWidth, imgHeight);
	// video 需要是一个页面上存在的元素

	const imgSrc = canvas.toDataURL('image/png');
	```
