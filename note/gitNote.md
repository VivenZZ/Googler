1. 拉取 `git pull `
2. 推送 `git push -u origin master `
3. 关联远程 `git remote add origin git@github.com:VivenZZ/Googler.git `
4. 断开远程  `git remote remove origin`
5. 查看远程仓库地址 `git remote -v `
6. 新建分支 `git checkout -b dev`
7. 跳转到指定版本号 `git reset --hard xxxx`
8. 合并分支 `git merge dev`
9. 获取所有分支 `git branch -a`
10. 删除本地分支 `git branch -D 分支`
11. 删除远程分支 `git push origin :分支`
12. 切换分支 `git checkout 分支`
13. 合并主干到分支`git merge master --squash` --squash 只提交当前修改记录
14. 拉去代码并采取传入的更改 `git merge --strategy-option theirs dev`
15. 拉去代码并采取本地的更改 `git merge --strategy-option ours dev`
16. 查看创建分支时间 `git reflog show --date=iso master`