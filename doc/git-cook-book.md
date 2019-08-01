### git 常用命令备查

-------------
新建本地分支： 

    $ git checkout -b branchName
-------------
新建远程分支并与本地分支关联： 

    $ git push origin local_branch_name:origin_branch_name
    
    $ git push --set-upstream origin origin_branch_name
-------------
查看日志： 

    $ git log --pretty=oneline
-------------
回退版本

    $ git reset --hard HEAD^
    
    $ git reset --hard HEAD~3  等价于 $ git reset --hard HEAD^^^
    
    $ git reset --hard c3b4d5g9   c3b4d5g9代表commit信息对应的版本号
-------------
查看操作记录

    $ git reflog 
    
    在git窗口没有关闭前可以用来查看此前的操作
    在回退版本后，可以借此命令，查看此前最新版本的提交日志，再次前进至最新版本
    git reset 用来追溯过去，git reflog + git reset 可以重返未来
-------------
丢弃修改
    
    git checkout -- <file>  丢弃工作区的修改  未执行 git add .
    
    git reset HEAD  <file>  丢弃暂存区的修改  已执行 git add .
    
    git reset HEAD^ <file>  丢弃版本库的修改  已执行 git commit
-------------
删除文件
    
    rm <file>                           物理删除
    
    git rm <file> / git add <file>      从版本库删除
    
    git checkout -- <file>              从版本库恢复（本地已修改未提交至版本库的部分无法恢复）
    
    回收站                               物理恢复
-------------
创建 公钥私钥

    $ ssh-keygen -t rsa -C "youremail@example.com"
    
    在 计算机磁盘中找到 .ssh 文件夹，里面有id_rsa和 id_rsa.pub两个文件，这两个就是SSH Key的秘钥对。
    id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥，可以放心地告诉任何人。
    登陆GitHub，打开“Account settings”，“SSH Keys”页面：
    然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴id_rsa.pub文件的内容。
    现在就可以在当前计算机对你的github仓库进行操作了。
