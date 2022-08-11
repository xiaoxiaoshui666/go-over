###
1. 首次要设置id和邮箱
    git config --global user.name '用户名'
    git config --global user.email '邮箱'
   查看id和邮箱
    git config --global --list

### 
2. 在当前文件夹下右键打开git  
    git init -- 初始化
    git status -- 查看当前本地库状态

###
3. 将本地工作区文件添加暂存区中
    git add + 文件名
    git add --all -- 将所有文件添加暂存区
    git rm --cached + 文件夹  --     删除暂存区的文件 (回退到工作区中，相当于撤销add操作)
    <!-- 后面+ -f 强制删除 -->

###
4. 将暂存区添加到本地库 
    git commit -m '版本名' 文件名  

### 
5. git reflog  --  查看版本信息
    <!-- 例如：1453fb2 (HEAD -> master) HEAD@{0}: commit (initial): first commit
    -- 1453fb2 版本号    first commit 版本名称 -->
   git log -- 详细版本信息

###
6. 修改
     <!-- modified:   hello.txt   -- 此文件已被修改 （红字表示没添加暂存区，绿字表示已在暂存区） -->
     (1). git add + 文件名  --  需要把修改后的文件在放入暂存区
     (2). git commit -m '版本名' 文件名  --  再提交本地库  
     <!-- 注意： (HEAD -> master) 工作区永远只会显示指针指向的这个版本的文件（只显示一个），不可能在工作区出现多个版本的此文件 -->

    切换版本
     (1). git reflog  --  查看所有的版本号，然后复制要修改的这个版本号
     (2). git reset --hard 版本号
     <!-- (HEAD -> master) 此时指针就指向此版本号了，查看或者修改时就会对应此版本的文件进行操作， -->
     <!-- 原理：git会在本地内存中记录所有的版本，通过调用HEAD指针来指向不同的版本 -->

###
7. 分支
     git branch -v  --  查看分支
     git branch 分支名  --  创建分支
     git checkout 分支名  --  切换分支
     <!-- 对此分支的数据的修改不会影响别的分支上的数据 -->
    (1). 合并分支 （无冲突）
     git merge 分支名  --  要站在主分支上去合并修改过的分支，在旧合新
    (2). 合并分支 （有冲突 ，两个同位置同名文件在不同分支都做了修改时）
     ①. git merge 分支名 -- 合并
     ②. 先打开文件 把修改过的保存，删掉提示多余部分
      <!-- <<<<<<< HEAD  -- 当前分支的修改    ======    >>>>>>> 合并分支名 --要合并的分支的修改 -->
     ③. git add 文件名  --  再添加暂存区 
     ④. git commit -m '版本名' -- 再添加到本地库  （ 后面不能带文件名！！！！！！！！）

###
8. 远程仓库 
    一. github
    1. 将本地库连接到远程库，需要先创建一个远程库 再复制链接
    2. git remote add '别名' 远程库地址链接  -- 创建一个别名（别名最好和远程库名一致）
    3. git remote -v  -- 查看库别名 （查看别名是否是远程库地址）（git remote remove 别名  --  可删除别名）
    4. git push -u 库别名 分支名  --  将数据推送到远程库 （需要关联github账号，可以选择用同一个浏览器关联）
    5. git pull 库别名 分支名  -- 若本地库和远程库不同步 ，为了本地库同步更新 此时需要拉取远程库
    6. git clone 远程地址链接  -- 远程库的文件克隆到一份倒本地空文件上 （不需要关联github账号）
        <!-- 克隆 : 拉取文件 ， 初始化本地仓库 ， 创建别名 别名都创建好了 初始别名为origin -->
    ①.添加远程库的成员，让别的本地库也可以访问添加此远程库 -- 
        在主账号  ——>  设置Settings  ——>  Collaborators ——>  输入成员账号名  ——>  得到主账号的邀请函链接地址  ——>  输入邀请函地址点击同意  ——>  可以使用push代码了
    ②.访问其他远程库并修改 -- 
        复制地址  ——>  Fork 克隆此项目到自己的远程库  ——>  可clone克隆到本地 可直接修改  ——>  pull requests  ——>  New pull requests  ——>  Create pull requests  ——>  其他远程库 查看 Merge pull requests 再次确定
    ③.使用ssh公钥免密登录  --  
        本地c磁盘 用户 用户名 .ssh文件夹 使用git打开  ——>  ssh-keygen -t rsa -C '邮箱'  ——>  三次回车  ——>  cat id_rsa.pub 打开然后复制所有公钥  ——>  登录远程库  ——>  点击头像 点击  Settings  ——>  SSH and GPG keys  ——>  New SSH key  ——>  起个名称 粘贴公钥 添加 输入密码  ——>  然后就可以用ssh拉取代码了  ——>  首次 可能会询问是否确定 输入yes即可

    二. Gitee
    1. 




    













————————————————————————————————————————————
Ctrl + L -- 清屏
vim + 文件名 -- 编辑此文件
    i -- 文件编辑模式
    Esc + yy -- 复制   Esc + p -- 粘贴
    :WQ -- 文件编辑模式下保存
LL -- 查看当前文件夹下的文件
cat + 文件名 -- 查看此文件 
 
warning: LF will be replaced by CRLF the next time Git touches it   -- 转换行末换行符

On branch master -- 当前是主干分支

No commits yet  -- 没有版本信息 需要提交一次本地库版本信息

(HEAD -> master) -- 当前指针指向这个版本

1 file changed, 1 insertion(+), 1 deletion(-) -- 一个文件被修改一行新增一行删除

CONFLICT (content): Merge conflict in hello.txt Automatic merge failed; fix conflicts and then commit the result. -- 自动合并失败，合并代码冲突（需要手动合并）