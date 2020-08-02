# vscode配置
## vscode js文件调试
在launch.json中添加一下代码
```json
{
  "version": "0.2.0",
  "configurations": [
    
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${file}",
      "sourceMaps": true
    }
  ]
}
```
按F5进入调试，选择Launch Program 进入debugger模式