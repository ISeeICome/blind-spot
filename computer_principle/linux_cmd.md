# Linux采用命令
    1. ls命令

        不仅可以查看linux文件夹包含的文件，而且可以查看文件权限(包括目录、文件夹、文件权限)查看目录信息等等

    2. cd命令

        切换目录

    3. pwd命令

        查看当前工作目录路径

    4. mkdir命令
    
        创建文件夹

    5. rm命令

        删除一个目录中的一个或多个文件或目录，，如果没有使用- r选项，则rm不会删除目录。如果使用rm 来删除文件，通常仍可以将该文件恢复原状。

    6. rmdir命令

         从一个目录中删除一个或多个子目录项，删除某目录时也必须具有对其父目录的写权限。

    7. mv命令

        移动文件或修改文件名，根据第二参数类型（如目录，则移动文件；如为文件则重命令该文件）。    

    8. cp命令

        将源文件复制至目标文件，或将多个源文件复制至目标目录。
    
    9. cat命令

        cat主要有三大功能：

         1.一次显示整个文件:cat filename

         2.从键盘创建一个文件:cat > filename 只能创建新文件,不能编辑已有文件.

         3.将几个文件合并为一个文件:cat file1 file2 > file

         -b对非空输出行号

         -n输出所有行号

    10. more命令

        功能类似于cat, more会以一页一页的显示方便使用者逐页阅读，而最基本的指令就是按空白键（space）就往下一页显示，按 b 键就会往回（back）一页显示

    11. less命令

        less 与 more 类似，但使用 less 可以随意浏览文件，而 more 仅能向前移动，却不能向后移动，而且 less 在查看之前不会加载整个文件。

    12. header命令

        head 用来显示档案的开头至标准输出中，默认head命令打印其相应文件的开头10行。

    13. tail命令

        用于显示指定文件末尾内容，不指定文件时，作为输入信息进行处理。常用查看日志文件。

    14. which命令

        在linux要查找某个文件，但不知道放在哪里了，可以使用下面的一些命令来搜索：

    15. whereis命令

        whereis命令只能用于程序名的搜索，而且只搜索二进制文件（参数-b）、man说明文件（参数-m）和源代码文件（参数-s）。如果省略参数，则返回所有信息。whereis及locate都是基于系统内建的数据库进行搜索，因此效率很高，而find则是遍历硬盘查找文件。

    16. locate命令

        locate通过搜寻系统内建文档数据库达到快速找到档案，数据库由updatedb程序来更新，updatedb是由cron daemon周期性调用的。默认情况下locate命令在搜寻数据库时比由整个由硬盘资料来搜寻资料来得快，但较差劲的是locate所找到的档案若是最近才建立或 刚更名的，可能会找不到，在内定值中，updatedb每天会跑一次，可以由修改crontab来更新设定值。(etc/crontab)。

    17. find命令

        用于在文件树中查找文件，并作出相应的处理

    18. chmod命令

        用于改变linux系统文件或目录的访问权限。用它控制文件或目录的访问权限。该命令有两种用法。一种是包含字母和操作符表达式的文字设定法；另一种是包含数字的数字设定法。

        每一文件或目录的访问权限都有三组，每组用三位表示，分别为文件属主的读、写和执行权限；与属主同组的用户的读、写和执行权限；系统中其他用户的读、写和执行权限。可使用ls -l test.txt查找

    19. tar命令

        用来压缩和解压文件。tar本身不具有压缩功能，只具有打包功能，有关压缩及解压是调用其它的功能来完成。

        弄清两个概念：打包和压缩。打包是指将一大堆文件或目录变成一个总的文件；压缩则是将一个大的文件通过一些压缩算法变成一个小文件
    
    20. chown命令

        chown将指定文件的拥有者改为指定的用户或组，用户可以是用户名或者用户ID；组可以是组名或者组ID；文件是以空格分开的要改变权限的文件列表，支持通配符

    21. df命令

        显示磁盘空间使用情况。获取硬盘被占用了多少空间，目前还剩下多少空间等信息，如果没有文件名被指定，则所有当前被挂载的文件系统的可用空间将被显示。默认情况下，磁盘空间将以 1KB 为单位进行显示，除非环境变量 POSIXLY_CORRECT 被指定，那样将以512字节为单位进行显示

    22. du命令

        du命令也是查看使用空间的，但是与df命令不同的是Linux du命令是对文件和目录磁盘使用的空间的查看

    23. ln命令

        功能是为文件在另外一个位置建立一个同步的链接，当在不同目录需要该问题时，就不需要为每一个目录创建同样的文件，通过ln创建的链接（link）减少磁盘占用量。

    24. date命令

         显示或设定系统的日期与时间

    25. cal命令

         可以用户显示公历（阳历）日历如只有一个参数，则表示年份(1-9999)，如有两个参数，则表示月份和年份

    26. grep命令

         强大的文本搜索命令，grep(Global Regular Expression Print)全局正则表达式搜索

         grep的工作方式是这样的，它在一个或多个文件中搜索字符串模板。如果模板包括空格，则必须被引用，模板后的所有字符串被看作文件名。搜索的结果被送到标准输出，不影响原文件内容。

    27. wc命令

        wc(word count)功能为统计指定的文件中字节数、字数、行数，并将统计结果输出

    28. ps命令

        ps(process status)，用来查看当前运行的进程状态，一次性查看，如果需要动态连续结果使用top

    29. top命令

        显示当前系统正在执行的进程的相关信息，包括进程ID、内存占用率、CPU占用率等

    30. kill命令

        发送指定的信号到相应进程。不指定型号将发送SIGTERM（15）终止指定进程。如果任无法终止该程序可用“-KILL” 参数，其发送的信号为SIGKILL(9) ，将强制结束进程，使用ps命令或者jobs 命令可以查看进程号。root用户将影响用户的进程，非root用户只能影响自己的进程。

    31. free命令

        显示系统内存使用情况，包括物理内存、交互区内存(swap)和内核缓冲区内存。

## 1、ls命令
       就是list的缩写，通过ls 命令不仅可以查看linux文件夹包含的文件，而且可以查看文件权限(包括目录、文件夹、文件权限)查看目录信息等等

         常用参数搭配：

         ls -a 列出目录所有文件，包含以.开始的隐藏文件

         ls -A 列出除.及..的其它文件

         ls -r 反序排列

         ls -t 以文件修改时间排序

         ls -S 以文件大小排序

         ls -h 以易读大小显示

         ls -l 除了文件名之外，还将文件的权限、所有者、文件大小等信息详细列出来

         实例：

         (1) 按易读方式按时间反序排序，并显示文件详细信息

         ls -lhrt

         (2) 按大小反序显示文件详细信息

         ls -lrS

         (3)列出当前目录中所有以“t”开头的目录的详细内容

         ls -l t*

         (4) 列出文件绝对路径（不包含隐藏文件）

         ls | sed "s:^:`pwd`/:"

         (5) 列出文件绝对路径（包含隐藏文件）

         find $pwd -maxdepth 1 | xargs ls -ld

 