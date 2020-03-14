#!/usr/bin/env sh

# 执行权限
chmod='chmod +x ./build/release.sh'
# 项目初始化（第一次使用时调用/安装）
init='npm run init'
# 构建组件（启动项目前必须执行）
build_lib='npm run build:lib'
# 发布组件库到npm
publish_lib='node ./build/release.js'
# 构建文档
build_docs='npm run build:docs'
# 发布文档
publish_docs='npm run publish:docs'
# 启动项目
dev='npm run dev'

while true
do

echo "【请选择要执行的脚本】"
echo
echo "(1) 初始化项目(第一次启动项目时执行)"
echo "(2) 构建组件（启动项目前必须执行，保证全局安装gulp）"
echo "(3) 发布组件"
echo "(4) 构建文档"
echo "(5) 发布文档"
echo "(6) 启动项目"
echo "(q/Q) 退出"
echo
read -p "输入脚本编号: " choice
case "$choice" in
	1)
		echo '********** 项目初始化中 **********'
    ${chmod}
		${init}
		echo '********** 初始化完成 **********'
		exit 0
		;;
	2)
			echo '********** 组件构建中 **********'
		${build_lib}
		echo '********** 组件构建完成 **********'
		exit 0
		;;
  3)
			echo '********** 组件发布中 **********'
		${publish_lib}
		echo '********** 组件发布完成 **********'
		exit 0
		;;
  4)
			echo '********** 文档构建中 **********'
		${build_docs}
		echo '********** 文档构建完成 **********'
		exit 0
		;;
  5)
			echo '********** 文档发布中 **********'
		${publish_docs}
		echo '********** 文档发布完成 **********'
		exit 0
		;;
  6)
			echo '********** 项目启动中 **********'
		${dev}
		echo '********** 项目已结束 **********'
		exit 0
		;;
	q|Q)
		exit 0
		;;
	*)
		echo "请输入正确的编号"
		continue
		;;
esac
done
