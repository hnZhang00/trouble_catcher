
# process.env.NODE_ENV
>	在使用 node.js 环境执行 Javascript 脚本时，可通过这个属性来区分不同环境（开发、测试、生产等）下的处理（构建、运行等）策略
>+ development: 开发
>+ production: 生产

> node.js 原生对象 process 的 env 属性是个对象（mac 环境），但 NODE_ENV 并不在 process.env 对象上

1. 直接在命令行工具进行绑定：
	```
	set NODE_ENV=development  
	set NODE_ENV=production
	```

2. 在 package.json 中进行绑定：
	```
	{
		"scripts": {
			"dev": "NODE_ENV=development"
			"build": "NODE_ENV=production"
		}
	}
	```
3. 在 webpack 配置文件中进行绑定：
	```
	const webpack = require('webpack');
	module.exports = {
		plugins: [
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': 'development'
			})
		]
	};
	```

	> 在 package.json 中绑定时，在 Windows 环境下无法正常运行，可通过安装 cross-env 进行解决
	```
	npm install --save-dev
	{
		"scripts": {
			"dev": "cross-env NODE_ENV=development"
			"build": "cross-env NODE_ENV=production"
		}
	}
	```
